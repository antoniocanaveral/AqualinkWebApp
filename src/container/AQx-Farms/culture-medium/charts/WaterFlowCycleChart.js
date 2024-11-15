import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function WaterFlowCycleChart() {
  const data = [
    { name: 'Día 1', flujoAgua: 20, recambioAgua: 5 },
    { name: 'Día 2', flujoAgua: 30, recambioAgua: 10 },
    { name: 'Día 3', flujoAgua: 25, recambioAgua: 15 },
    { name: 'Día 4', flujoAgua: 40, recambioAgua: 20 },
    { name: 'Día 5', flujoAgua: 35, recambioAgua: 25 },
    { name: 'Día 6', flujoAgua: 45, recambioAgua: 30 },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <LineChartWithXAxisPadding 
        data={data} 
        xAxisKey="name" 
        lines={[
          { dataKey: "flujoAgua", name: "Flujo de Agua", stroke: "#8884d8" },
          { dataKey: "recambioAgua", name: "Recambio de Agua", stroke: "#82ca9d" },
        ]}
        yAxisLabel="Porcentaje"
        xAxisLabel="Días de Ciclo"
      />
    </div>
  );
}

export default WaterFlowCycleChart;
