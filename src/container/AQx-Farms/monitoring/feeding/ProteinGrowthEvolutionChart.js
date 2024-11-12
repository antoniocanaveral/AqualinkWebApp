import React from 'react';
import MultiLineChart from '../../../../components/charts/line/MuiltiLineChart';

function ProteinGrowthEvolutionChart() {
  // Datos de ejemplo para crecimiento de camarón por tipo de proteína en el alimento
  const shrimpGrowthData = [
    { name: 'Semana 1', 'Proteína 35%': 1.89, 'Proteína 30%': 1.5 },
    { name: 'Semana 2', 'Proteína 35%': 2.2, 'Proteína 30%': 2.},
    { name: 'Semana 3', 'Proteína 35%': 3.1, 'Proteína 30%': 1.9 },
    { name: 'Semana 4', 'Proteína 35%': 2.5, 'Proteína 30%': 2.78 },
    { name: 'Semana 5', 'Proteína 35%': 3.5, 'Proteína 30%': 3.0 },
    { name: 'Semana 6', 'Proteína 35%': 3.8, 'Proteína 30%': 3.2 },
    { name: 'Semana 7', 'Proteína 35%': 4.0, 'Proteína 30%': 3.4 },
    { name: 'Semana 8', 'Proteína 35%': 4.2, 'Proteína 30%': 3.6 },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MultiLineChart 
        data={shrimpGrowthData} 
        lines={['Proteína 35%', 'Proteína 30%']} 
      />
    </div>
  );
}

export default ProteinGrowthEvolutionChart;
