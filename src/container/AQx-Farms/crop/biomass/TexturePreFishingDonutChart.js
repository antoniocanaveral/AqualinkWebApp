import React, { useMemo } from 'react';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { SalesOverviewStyleWrap2 } from '../../../dashboard/Style';

function TexturePreFishingDonutChart({ textures = [] }) {
  // Calcular la suma de los porcentajes
  const totals = useMemo(() => {
    const sumGood = textures.reduce((sum, t) => sum + (t.SM_TextureGoodPercent || 0), 0);
    const sumFlaccid = textures.reduce((sum, t) => sum + (t.SM_TextureFlaccidPercent || 0), 0);
    const sumMolted = textures.reduce((sum, t) => sum + (t.SM_TextureMoltedPercent || 0), 0);
    const total = sumGood + sumFlaccid + sumMolted;

    // Normalizar para que sumen 100%
    if (total === 0) {
      return { duro: 0, flacido: 0, mudado: 0, total: 0 };
    }
    return {
      duro: (sumGood / total) * 100,
      flacido: (sumFlaccid / total) * 100,
      mudado: (sumMolted / total) * 100,
      total,
    };
  }, [textures]);

  const labels = ['Duro', 'Flácido', 'Mudado'];
  const datasets = [
    {
      data: [totals.duro, totals.flacido, totals.mudado], // Porcentajes normalizados
      backgroundColor: ['#0372CE', '#00AAFF', '#FA8B0C'], // Colores personalizados
      centerText: 'Textura',
      centerTextLabel: 'Pre Pesca',
    },
  ];

  const options = {
    cutout: 62,
    borderWidth: 2,
    borderColor: '#ffffff', // Color de borde blanco
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <SalesOverviewStyleWrap2>
      <div className="ninjadash-overview-wrap">
        <DoughnutChart
          type="doughnut"
          id="texturePreFishingOverview"
          labels={labels}
          datasets={datasets}
          height={150}
          width={150}
          option={options}
          tooltip={{
            backgroundColor: '#333', // Fondo oscuro
            titleFontSize: 16,
            titleFontColor: '#fff', // Título blanco
            bodyFontColor: '#000', // Cuerpo negro
            bodyFontSize: 14,
            displayColors: false,
          }}
        />

        <div className="ninjadash-overview-percentage">
          {datasets[0].data.map((value, index) => {
            const itemPercent = Math.round(value); // Porcentaje redondeado
            return (
              <div className="ninjadash-overview-percentage__item" key={index}>
                <span
                  className="ninjadash-overview-percentage__point"
                  style={{
                    backgroundColor: datasets[0].backgroundColor[index],
                  }}
                />
                <span className="ninjadash-overview-percentage__text">{itemPercent}%</span>
              </div>
            );
          })}
        </div>

        <div className="ninjadash-overview-box align-center-v justify-content-between">
          {datasets[0].data.map((value, index) => (
            <div className="ninjadash-overview-box-item" key={index}>
              <h4>{Math.round(value)}%</h4>
              <p>{labels[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </SalesOverviewStyleWrap2>
  );
}

export default TexturePreFishingDonutChart;