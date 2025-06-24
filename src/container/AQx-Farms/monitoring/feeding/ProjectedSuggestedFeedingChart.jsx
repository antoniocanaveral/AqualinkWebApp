import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';
import dayjs from 'dayjs';

function ProjectedSuggestedFeedingChart({ data }) {
  // Si no hay data, no mostrar nada
  if (!data || data.length === 0) return null;

  // Transformar datos para la gráfica
  const chartData = data.map(entry => ({
    name: dayjs(entry.fecha).format('DD/MM/YYYY'),
    Proyectado: parseFloat(entry.alimentoProyectado),
    Real: parseFloat(entry.alimentoEntregado),
    Ajustado: parseFloat(entry.alimentoAjustado),
  }));


  return (
    <div style={{ width: "110%", height: "100%" }}>
      <LineChartWithXAxisPadding data={chartData} />
    </div>
  );
}

export default ProjectedSuggestedFeedingChart;
