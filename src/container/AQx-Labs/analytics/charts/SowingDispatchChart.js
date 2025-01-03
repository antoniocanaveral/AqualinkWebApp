import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function SowingDispatchChart() {
  const exampleData = [
    { name: 'Enero',    Programada: 2400, Coordinada: 2400, Real: 2500, Plus: 1000 },
    { name: 'Febrero',  Programada: 1398, Coordinada: 2210, Real: 2800, Plus: 1500 },
    { name: 'Marzo',  Programada: 9800, Coordinada: 2290, Real: 2400, Plus: 1400 },
    { name: 'Abril',  Programada: 3908, Coordinada: 2000, Real: 2200, Plus: 2000 },
    { name: 'Mayo',  Programada: 4800, Coordinada: 2181, Real: 3000, Plus: 800 },
    { name: 'Junio',  Programada: 3800, Coordinada: 2500, Real: 3500, Plus: 1500 },
    { name: 'Julio',  Programada: 4300, Coordinada: 2100, Real: 1500, Plus: 4500 },
    { name: 'Agosto',  Programada: 2400, Coordinada: 2400, Real: 2500, Plus: 5600 },
    { name: 'Septiembre',  Programada: 1398, Coordinada: 2210, Real: 4500, Plus: 6800 },
    { name: 'Octubre',  Programada: 9800, Coordinada: 2290, Real: 1500, Plus: 5500 },
    { name: 'Noviembre',  Programada: 3908, Coordinada: 2000, Real: 2200, Plus: 4800 },
    { name: 'Diciembre',  Programada: 4800, Coordinada: 2181, Real: 2100, Plus: 7000 },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
      <LineChartWithXAxisPadding data={exampleData} height={350} />
    </div>
  );
}

export default SowingDispatchChart;
