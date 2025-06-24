import React, { useEffect, useState } from 'react';

const FeedingBiomassTable = ({ weeks, fcaRealTable, fcaProyectadoTable }) => {
  // Inicializa el estado con tantos buckets como semanas haya
  const [moonPhases, setMoonPhases] = useState(
    Array.from({ length: weeks.length }, () => [])
  );

  // Calcula los rangos de cada semana
  const getWeekRanges = () => {
    const startDate = new Date(2025, 4, 19); // 19 de mayo de 2025
    const weekRanges = [];
    for (let i = 0; i < weeks.length; i++) {
      const weekStart = new Date(startDate);
      weekStart.setDate(startDate.getDate() + i * 7);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      weekRanges.push({ start: weekStart, end: weekEnd });
    }


    return weekRanges;
  };

  useEffect(() => {
    // Llama a la API lunar
    const loadMoonPhases = (cfg) => {
      const params = Object.entries(cfg)
        .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
        .join('&');
      return fetch(`https://www.icalendar37.net/lunar/api/?${params}`)
        .then(res => {
          if (!res.ok) throw new Error(`Status ${res.status}`);
          return res.json();
        });
    };

    const fetchAllPhases = async () => {
      const weekRanges = getWeekRanges();

      // Recoge los meses a consultar
      const coveredMonths = new Set();
      weekRanges.forEach(r => {
        coveredMonths.add(r.start.getMonth() + 1);
        coveredMonths.add(r.end.getMonth() + 1);
      });
      const months = Array.from(coveredMonths).sort((a, b) => a - b);

      // Prepara un array de semanas vacío
      const weeksArr = Array.from({ length: weeks.length }, () => []);

      // Para cada mes, pide los datos y reparte las fases en su semana
      for (const month of months) {
        const cfg = {
          lang: 'en',
          month,
          year: 2025,
          size: '20px',
          lightColor: 'white',
          shadeColor: 'black',
          texturize: true,
        };
        try {
          const moonData = await loadMoonPhases(cfg);

          for (let day = 1; day <= moonData.daysMonth; day++) {
            const phaseInfo = moonData.phase[day];
            if (phaseInfo && phaseInfo.isPhaseLimit) {
              const curDate = new Date(2025, month - 1, day);
              const idx = weekRanges.findIndex(
                r => curDate >= r.start && curDate <= r.end
              );


              if (idx !== -1) {
                weeksArr[idx].push({
                  date: curDate.toISOString().split('T')[0],
                  svg: phaseInfo.svg,
                  phaseName: phaseInfo.phaseName || 'Unknown',
                });
              }
            }
          }
        } catch (err) {
          console.error(`⚠️ Error fetching lunar data for month ${month}:`, err);
        }
      }

      // Genera un JSON final con rangos y fases por semana
      const finalJson = weekRanges.map((r, i) => ({
        week: `SEM ${i + 1}`,
        start: r.start.toISOString().split('T')[0],
        end: r.end.toISOString().split('T')[0],
        phases: weeksArr[i].map(p => ({
          date: p.date,
          phaseName: p.phaseName
        }))
      }));

      console.log(
        '🔍 Final JSON con rangos y fases:\n',
        JSON.stringify(finalJson, null, 2)
      );

      setMoonPhases(weeksArr);
    };

    fetchAllPhases();
  }, [weeks.length]);


  // Estilos
  const tableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: 20 };
  const thStyle = { border: '1px solid #ddd', padding: 8, textAlign: 'center', backgroundColor: '#f2f2f2' };
  const tdStyle = { border: '1px solid #ddd', padding: 8, textAlign: 'center', verticalAlign: 'top' };
  const lunarTdStyle = { ...tdStyle, minHeight: 48, padding: 6 };
  const flexStyle = { display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' };
  const svgStyle = { width: 18, height: 18 };

  // Render
  return (
    <div className='table-responsive'>
      <table style={tableStyle} >
        <thead>
          <tr>
            <th style={thStyle}></th>
            {weeks.map(w => <th key={w} style={thStyle}>{w}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>FCA Real</td>
            {fcaRealTable.map((v, i) => <td key={i} style={tdStyle}>{v || '-'}</td>)}
          </tr>
          <tr>
            <td style={tdStyle}>FCA Proyectado</td>
            {fcaProyectadoTable.map((v, i) => <td key={i} style={tdStyle}>{v || '-'}</td>)}
          </tr>
          <tr>
            <td style={tdStyle}>Fases Lunares</td>
            {moonPhases.map((week, idx) => (
              <td key={idx} style={lunarTdStyle}>
                <div style={flexStyle}>
                  {week.length > 0
                    ? week.map((phase, j) => (
                      <div
                        key={j}
                        dangerouslySetInnerHTML={{ __html: phase.svg }}
                        style={svgStyle}
                        title={phase.phaseName}
                      />
                    ))
                    : <span>-</span>
                  }
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeedingBiomassTable;
