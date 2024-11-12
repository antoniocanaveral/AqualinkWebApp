import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function ProjectedSuggestedFeedingChart() {
  const exampleData = [
    { name: 'Enero', 'A': 1000, uv: 1200, amt: 2000 },
    { name: 'Febrero', 'A': 1600, uv: 1400, amt: 2100 },
    { name: 'Marzo', 'A': 1800, uv: 2000, amt: 2200 },
    { name: 'Abril', 'A': 2400, uv: 2300, amt: 2500 },
    { name: 'Mayo', 'A': 3000, uv: 2900, amt: 2700 },
    { name: 'Junio', 'A': 3500, uv: 3300, amt: 2800 },
    { name: 'Julio', 'A': 4200, uv: 3700, amt: 3000 },
    { name: 'Agosto', 'A': 4700, uv: 4000, amt: 3100 },
    { name: 'Septiembre', 'A': 5200, uv: 4500, amt: 3400 },
    { name: 'Octubre', 'A': 5800, uv: 4800, amt: 3600 },
    { name: 'Noviembre', 'A': 6200, uv: 5100, amt: 3700 },
    { name: 'Diciembre', 'A': 6700, uv: 5500, amt: 4000 },
  ];


  return (
    <div style={{ width: "110%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
      <LineChartWithXAxisPadding data={exampleData} />
    </div>
  );
}

export default ProjectedSuggestedFeedingChart;
