import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function WaterFlowCycleChart({ waterflowParams = [], waterflowReplacement = [] }) {
  const data = [];

  // Recorrer los datos de waterflowParams
  waterflowParams.forEach((param) => {
    const smIndex = param.SM_Index;  // El sm_index se usa directamente como el día
    const volumenOperativo = param.volumen_operativo;

    // Solo agregamos el punto si flujoAgua tiene valor mayor a 0
    if (volumenOperativo > 0) {
      data.push({
        name: `Día ${smIndex}`,
        flujoAgua: volumenOperativo,
      });
    }
  });

  // Recorrer los datos de waterflowReplacement
  waterflowReplacement.forEach((rep) => {
    const smIndex = rep.SM_Index;
    const volumenOperativo = rep.volumen_operativo;

    // Verificar si ya existe el día en los datos
    const existingDay = data.find((item) => item.name === `Día ${smIndex}`);

    // Solo agregamos o actualizamos el punto si recambioAgua tiene valor mayor a 0
    if (volumenOperativo > 0) {
      if (existingDay) {
        // Si el día ya existe, actualizamos el volumen de recambio de agua
        existingDay.recambioAgua = volumenOperativo;
      } else {
        // Si el día no existe, agregarlo como un nuevo objeto
        data.push({
          name: `Día ${smIndex}`,
          flujoAgua: 0, 
        });
      }
    }
  });

  // Filtrar los días donde solo flujoAgua o recambioAgua tengan valor
  const filteredData = data.filter((item) => item.flujoAgua > 0 || item.recambioAgua > 0);

  // Ordenar los días de menor a mayor
  filteredData.sort((a, b) => parseInt(a.name.split(" ")[1]) - parseInt(b.name.split(" ")[1]));

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <LineChartWithXAxisPadding 
        data={filteredData} 
        xAxisKey="name" 
        lines={[
          { dataKey: "flujoAgua", name: "Flujo de Agua", stroke: "#8884d8" },
      
        ]}
        yAxisLabel="Porcentaje"
        xAxisLabel="Días de Ciclo"
      />
    </div>
  );
}

export default WaterFlowCycleChart;
