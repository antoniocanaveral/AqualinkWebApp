import React from 'react';
import { useSelector } from 'react-redux';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function SurvivalChart({ selectedBatch }) {
  const { feedingreports } = useSelector(state => state.feedingreport);

  if (!selectedBatch) {
    return <p style={{ textAlign: 'center' }}>Seleccione un Batch para ver los datos.</p>;
  }

  const report = feedingreports.find(r => r.SM_Batch === selectedBatch);
  if (!report) {
    return <p style={{ textAlign: 'center' }}>No se encontró información para el batch seleccionado.</p>;
  }

  const projected = report.feedingdata_projectedjson || [];
  const real = report.feedingdata_realjson || [];

  const weeklyData = [];

  for (let i = 0; i < projected.length; i++) {
    const proj = projected[i];
    if (proj.sm_index % 7 !== 0) continue;

    const realMatch = real.find(r => r.sm_index === proj.sm_index);

    const sm_survival = parseFloat(proj.sm_survival) || 0;
    const sm_survivalreal = parseFloat(realMatch?.superv) || 0;

    weeklyData.push({
      name: `Semana ${proj.sm_index / 7}`,
      Proyectado: sm_survival,
      Real: sm_survivalreal,
    });
  }

  // Cálculo de regresión lineal sobre valores reales
  const validRealData = weeklyData
    .map((d, i) => ({ ...d, x: i + 1 }))
    .filter(d => typeof d.Real === 'number' && !isNaN(d.Real));

  const n = validRealData.length;
  if (n < 2) {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <LineChartWithXAxisPadding height={300} data={weeklyData} />
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#999' }}>
          No hay suficientes datos reales para calcular la tendencia.
        </p>
      </div>
    );
  }

  const avgX = validRealData.reduce((sum, d) => sum + d.x, 0) / n;
  const avgY = validRealData.reduce((sum, d) => sum + d.Real, 0) / n;

  const numerator = validRealData.reduce((sum, d) => sum + (d.x - avgX) * (d.Real - avgY), 0);
  const denominator = validRealData.reduce((sum, d) => sum + Math.pow(d.x - avgX, 2), 0);

  const m = denominator === 0 ? 0 : numerator / denominator;
  const b = avgY - m * avgX;

  const finalChartData = weeklyData.map((d, i) => ({
    ...d,
    Tendencia: parseFloat((m * (i + 1) + b).toFixed(4)),
  }));

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <LineChartWithXAxisPadding height={300} data={finalChartData} />
    </div>
  );
}

export default SurvivalChart;
