import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function ProjectedSuggestedFeedingChart() {
  const exampleData = [
    { name: 'Enero', 'Real': 1000, 'Proyectado': 1200, 'Ajustado': 2000 },
    { name: 'Febrero', 'Real': 1600, 'Proyectado': 1400, 'Ajustado': 2100 },
    { name: 'Marzo', 'Real': 1800, 'Proyectado': 2000, 'Ajustado': 2200 },
    { name: 'Abril', 'Real': 2400, 'Proyectado': 2300, 'Ajustado': 2500 },
    { name: 'Mayo', 'Real': 3000, 'Proyectado': 2900, 'Ajustado': 2700 },
    { name: 'Junio', 'Real': 3500, 'Proyectado': 3300, 'Ajustado': 2800 },
    { name: 'Julio', 'Real': 4200, 'Proyectado': 3700, 'Ajustado': 3000 },
    { name: 'Agosto', 'Real': 4700, 'Proyectado': 4000, 'Ajustado': 3100 },
    { name: 'Septiembre', 'Real': 5200, 'Proyectado': 4500, 'Ajustado': 3400 },
    { name: 'Octubre', 'Real': 5800, 'Proyectado': 4800, 'Ajustado': 3600 },
    { name: 'Noviembre', 'Real': 6200, 'Proyectado': 5100, 'Ajustado': 3700 },
    { name: 'Diciembre', 'Real': 6700, 'Proyectado': 5500, 'Ajustado': 4000 },
  ];


  return (
    <div style={{ width: "110%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
      <LineChartWithXAxisPadding data={exampleData} />
    </div>
  );
}

export default ProjectedSuggestedFeedingChart;
