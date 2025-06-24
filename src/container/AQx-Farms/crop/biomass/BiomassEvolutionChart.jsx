import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';
import { useSelector } from 'react-redux';

function BiomassEvolutionChart({ selectedBatch }) {
  const { populationCombined } = useSelector(state => state.populationCombined);

  // Filter data by selectedBatch and sort by fecha to assign weeks
  const filteredData = selectedBatch
    ? populationCombined
        .filter(record => record.SM_Batch === selectedBatch)
        .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
    : populationCombined.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  // Map the data to the format required for the chart
  const biomassData = filteredData.map((record, index) => ({
    name: `Semana ${index + 1}`,
    biomasa: parseFloat(record.biomasa) || 0,
  }));

  return (
    <div style={{ width: "110%", height: "100%" }}>
      <LineChartWithXAxisPadding data={biomassData} />
    </div>
  );
}

export default BiomassEvolutionChart;