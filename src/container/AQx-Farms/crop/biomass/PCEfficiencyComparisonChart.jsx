import React from 'react';
import { useSelector } from 'react-redux';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Bar } from 'react-chartjs-2';

function PCEfficiencyComparisonChart() {
  const { transferCombinedView } = useSelector(state => state.transferCombinedView);

  const latestCampaigns = transferCombinedView
    .filter(item => item.SM_TransferDate)
    .sort((a, b) => new Date(b.SM_TransferDate) - new Date(a.SM_TransferDate))
    .slice(0, 2);

  const labels = latestCampaigns.map(item => 
    `${item.SM_Batch || 'N/A'} - ${item.sm_ppc_name || 'N/A'}`
  );

  const data = {
    labels: labels.length > 0 ? labels : ['Sin datos'],
    datasets: [
      {
        label: 'Peso Promedio (g)',
        data: labels.length > 0 ? latestCampaigns.map(item => item.SM_AverageWeightReal || 0) : [0],
        backgroundColor: '#001737',
        barPercentage: 0.6,
      },
      {
        label: 'Peso Total Transferido (kg)',
        data: labels.length > 0 ? latestCampaigns.map(item => item.SM_TransferredKg || 0) : [0],
        backgroundColor: '#1ce1ac',
        barPercentage: 0.6,
      },
      {
        label: 'Población Estimada',
        data: labels.length > 0 ? latestCampaigns.map(item => item.SM_AnimalsTotal || 0) : [0],
        backgroundColor: '#FF6384',
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          fontSize: 14,
          fontFamily: 'Jost',
          color: '#8C90A4',
        },
      },
      x: {
        ticks: {
          fontSize: 14,
          fontFamily: 'Jost',
          color: '#8C90A4',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <Cards title="Comparativa de Eficiencia entre Campañas" size="large">
      <Bar data={data} options={options} />
    </Cards>
  );
}

export default PCEfficiencyComparisonChart;