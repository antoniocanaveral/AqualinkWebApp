import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function CostsHaDayChart() {
  const exampleData = [
    { name: 'Sem1', 'A': 1000, uv: 1200, amt: 2000 },
    { name: 'Sem2', 'A': 1600, uv: 1400, amt: 2100 },
    { name: 'Sem3', 'A': 1800, uv: 2000, amt: 2200 },
    { name: 'Sem4', 'A': 2400, uv: 2300, amt: 2500 },
    { name: 'Sem5', 'A': 3000, uv: 2900, amt: 2700 },
    { name: 'Sem6', 'A': 3500, uv: 3300, amt: 2800 },
    { name: 'Sem7', 'A': 4200, uv: 3700, amt: 3000 },
    { name: 'Sem8', 'A': 4700, uv: 4000, amt: 3100 },
    { name: 'Sem9', 'A': 5200, uv: 4500, amt: 3400 },
    { name: 'Sem10', 'A': 5800, uv: 4800, amt: 3600 },
    { name: 'Sem11', 'A': 6200, uv: 5100, amt: 3700 },
    { name: 'Sem12', 'A': 6700, uv: 5500, amt: 4000 },
    { name: 'Sem13', 'A': 7200, uv: 5800, amt: 4200 },
    { name: 'Sem14', 'A': 6900, uv: 5600, amt: 4100 },
    { name: 'Sem15', 'A': 7100, uv: 6000, amt: 4300 },
    { name: 'Sem16', 'A': 7600, uv: 6400, amt: 4500 },
    { name: 'Sem17', 'A': 8000, uv: 6700, amt: 4700 },
    { name: 'Sem18', 'A': 8500, uv: 7000, amt: 4900 },
    { name: 'Sem19', 'A': 8800, uv: 7400, amt: 5100 },
    { name: 'Sem20', 'A': 9100, uv: 7600, amt: 5200 },
    { name: 'Sem21', 'A': 9400, uv: 8000, amt: 5400 },
    { name: 'Sem22', 'A': 9700, uv: 8200, amt: 5600 },
    { name: 'Sem23', 'A': 9900, uv: 8500, amt: 5800 },
    { name: 'Sem24', 'A': 10200, uv: 8800, amt: 6000 }
];



  return (
    <div style={{ width: "110%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
      <LineChartWithXAxisPadding data={exampleData} />
    </div>
  );
}

export default CostsHaDayChart;
