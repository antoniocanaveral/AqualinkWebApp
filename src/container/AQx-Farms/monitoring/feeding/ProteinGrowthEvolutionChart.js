import React from 'react';
import MultiLineChart from '../../../../components/charts/line/MuiltiLineChart';

function ProteinGrowthEvolutionChart({ selectedBatch, feedingreports }) {

  const selectedReport = feedingreports.find(report => 
    selectedBatch ? report.SM_Batch === selectedBatch : true
  ) || feedingreports[0];


  const processChartData = () => {
    if (!selectedReport?.feedingdata_realjson) return { chartData: [], proteinGroups: {} };


    const proteinGroups = selectedReport.feedingdata_realjson.reduce((acc, entry) => {
      const proteinKey = `Proteína ${entry.foodproteinbase}%`;
      const week = Math.ceil(entry.sm_index / 7);
      
      if (!acc[proteinKey]) {
        acc[proteinKey] = [];
      }

      if (entry.sm_weeklygrowthreal !== null) {
        acc[proteinKey].push({
          week,
          value: entry.sm_weeklygrowthreal
        });
      }

      return acc;
    }, {});

    const maxWeek = Math.max(...selectedReport.feedingdata_realjson.map(e => Math.ceil(e.sm_index / 7))) || 14;
    
    const chartData = [];
    for (let week = 1; week <= maxWeek; week++) {
      const weekData = { name: `Semana ${week}` };
      
      Object.entries(proteinGroups).forEach(([protein, values]) => {
        const valueObj = values.find(v => v.week === week);
        weekData[protein] = valueObj ? valueObj.value : null;
      });

      chartData.push(weekData);
    }

    return { chartData, proteinGroups };
  };

  const { chartData, proteinGroups } = processChartData();


  const yDomain = [0, 42];
  const yTicks = Array.from({ length: 22 }, (_, i) => i * 2);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MultiLineChart 
        data={chartData}
        lines={Object.keys(proteinGroups)}
        xAxis={{
          dataKey: 'name',
          label: { value: 'Semanas', position: 'bottom' },
          domain: ['Semana 1', `Semana ${Math.min(14, chartData.length)}`]
        }}
        yAxis={{
          label: { value: 'Crecimiento (g)', angle: -90, position: 'left' },
          domain: yDomain,
          ticks: yTicks
        }}
        tooltip
        legend
      />
    </div>
  );
}

export default ProteinGrowthEvolutionChart;