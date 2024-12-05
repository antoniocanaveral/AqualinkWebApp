import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function ProductionSalesProjectionChart() {
  const exampleData = [
    { name: 'Enero', 'Available fishing (kilos)': 4000, uv: 2400, amt: 2400 },
    { name: 'Febrero', 'Available fishing (kilos)': 3000, uv: 1398, amt: 2210 },
    { name: 'Marzo', 'Available fishing (kilos)': 2000, uv: 9800, amt: 2290 },
    { name: 'Abril', 'Available fishing (kilos)': 2780, uv: 3908, amt: 2000 },
    { name: 'Mayo', 'Available fishing (kilos)': 1890, uv: 4800, amt: 2181 },
    { name: 'Junio', 'Available fishing (kilos)': 2390, uv: 3800, amt: 2500 },
    { name: 'Julio', 'Available fishing (kilos)': 3490, uv: 4300, amt: 2100 },
    { name: 'Agosto', 'Available fishing (kilos)': 4000, uv: 2400, amt: 2400 },
    { name: 'Septiembre', 'Available fishing (kilos)': 3000, uv: 1398, amt: 2210 },
    { name: 'Octubre', 'Available fishing (kilos)': 2000, uv: 9800, amt: 2290 },
    { name: 'Noviembre', 'Available fishing (kilos)': 2780, uv: 3908, amt: 2000 },
    { name: 'Diciembre', 'Available fishing (kilos)': 1890, uv: 4800, amt: 2181 },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
      <LineChartWithXAxisPadding data={exampleData} height={350} />
    </div>
  );
}

export default ProductionSalesProjectionChart;
