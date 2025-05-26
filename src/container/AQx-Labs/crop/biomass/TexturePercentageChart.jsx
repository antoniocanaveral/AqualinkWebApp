import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function TexturePercentageChart() {
  const data = [
    {
      name: 'Día 1',
      duro: 60,
      flacido: 10,
      mudado: 30,
    },
    {
      name: 'Día 2',
      duro: 60,
      flacido: 20,
      mudado: 20,
    },
    {
      name: 'Día 3',
      duro: 70,
      flacido: 10,
      mudado: 20,
    },
    {
      name: 'Día 4',
      duro: 80,
      flacido: 10,
      mudado: 10,
    },
    {
      name: 'Día 5',
      duro: 90,
      flacido: 5,
      mudado: 5,
    },
  ];

  return (
    <div style={{ width: "110%", height: "10%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
      <LineChartWithXAxisPadding data={data} />
    </div>
  );
}

export default TexturePercentageChart;
