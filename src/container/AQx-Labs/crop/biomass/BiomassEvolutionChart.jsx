import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function BiomassEvolutionChart() {
  const biomassData = [
    { name: 'Semana 1', biomasa: 1000 },
    { name: 'Semana 2', biomasa: 2000 },
    { name: 'Semana 3', biomasa: 3000 },
    { name: 'Semana 4', biomasa: 4000 },
    { name: 'Semana 5', biomasa: 5000 },
    { name: 'Semana 6', biomasa: 6000 },
    { name: 'Semana 7', biomasa: 7000 },
    { name: 'Semana 8', biomasa: 8000 },
    { name: 'Semana 9', biomasa: 9000 },
    { name: 'Semana 10', biomasa: 10000 },
    { name: 'Semana 11', biomasa: 11000 },
    { name: 'Semana 12', biomasa: 12000 },
  ];

  return (
    <div style={{ width: "110%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
      <LineChartWithXAxisPadding data={biomassData} />
    </div>
  );
}

export default BiomassEvolutionChart;
