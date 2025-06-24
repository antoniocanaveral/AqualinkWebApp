import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function FCAChart() {
  const exampleData = [
    { name: 'Enero', 'A': 6700, uv: 5500, amt: 4000 },
    { name: 'Febrero', 'A': 6200, uv: 5100, amt: 3700 },
    { name: 'Marzo', 'A': 5400, uv: 4400, amt: 3600 },
    { name: 'Abril', 'A': 5000, uv: 4200, amt: 3400 },
    { name: 'Mayo', 'A': 4700, uv: 4000, amt: 3100 },
    { name: 'Junio', 'A': 4200, uv: 3700, amt: 3000 },
    { name: 'Julio', 'A': 3500, uv: 3300, amt: 2800 },
    { name: 'Agosto', 'A': 3000, uv: 2900, amt: 2700 },
    { name: 'Septiembre', 'A': 2400, uv: 2300, amt: 2500 },
    { name: 'Octubre', 'A': 1800, uv: 2000, amt: 2200 },
    { name: 'Noviembre', 'A': 1600, uv: 1400, amt: 2100 },
    { name: 'Diciembre', 'A': 1000, uv: 1200, amt: 2000 },
  ];

  return (
    <div style={{ width: "110%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
      <LineChartWithXAxisPadding data={exampleData} />
    </div>
  );
}

export default FCAChart;
