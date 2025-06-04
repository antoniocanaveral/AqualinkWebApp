import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

export default function WeeklyGroupedBarChart({ dataSource, height = 300 }) {
  // Obtener los costos indirectos y datos de la campaña del estado de Redux
  const indirectCosts = useSelector(state => state.cost.indirectCosts);
  const reportStatementFullData = useSelector(state => state.cost.reportStatementFullData);

  // Debug: Inspect input data
  console.log('WeeklyGroupedBarChart dataSource:', dataSource);
  console.log('indirectCosts:', indirectCosts);
  console.log('reportStatementFullData:', reportStatementFullData);

  if (!Array.isArray(dataSource) || dataSource.length === 0) {
    return <p>No hay datos disponibles para mostrar el gráfico.</p>;
  }

  // Función para obtener el rango de fechas de la campaña actual
  const getCampaignDateRange = () => {
    if (!Array.isArray(reportStatementFullData) || reportStatementFullData.length === 0) {
      console.warn('No campaign data available');
      return { startDate: null, endDate: null };
    }

    const firstEntry = reportStatementFullData.find(item => item.StartDate && item.EndDate);
    if (!firstEntry) {
      console.warn('No valid campaign entry with dates');
      return { startDate: null, endDate: null };
    }

    return {
      startDate: new Date(firstEntry.StartDate),
      endDate: new Date(firstEntry.EndDate),
    };
  };

  // Función para filtrar costos indirectos dentro del rango de la campaña
  const getValidIndirectCosts = () => {
    if (!Array.isArray(indirectCosts) || indirectCosts.length === 0) {
      console.warn('No indirect costs available');
      return [];
    }

    const { startDate, endDate } = getCampaignDateRange();
    if (!startDate || !endDate) {
      console.warn('Invalid campaign date range');
      return [];
    }

    const validCosts = indirectCosts.filter(cost => {
      const createdDate = new Date(cost.Created);
      return createdDate >= startDate && createdDate <= endDate;
    });

    console.log('Valid Indirect Costs:', validCosts); // Debug
    return validCosts;
  };

  // Función para calcular costos indirectos por semana
  const calculateIndirectCostsByWeek = (totalWeeks) => {
    const validIndirectCosts = getValidIndirectCosts();
    if (validIndirectCosts.length === 0) {
      console.warn('No valid indirect costs for distribution');
      return new Array(totalWeeks).fill(0);
    }

    const { startDate, endDate } = getCampaignDateRange();
    if (!startDate || !endDate) {
      return new Array(totalWeeks).fill(0);
    }

    // Calcular el total de costos indirectos válidos
    const totalIndirectCosts = validIndirectCosts.reduce((sum, cost) => {
      return sum + (parseFloat(cost.sm_indirectcostvalue) || 0);
    }, 0);

    console.log('Total Indirect Costs:', totalIndirectCosts); // Debug

    // Agrupar datos por semanas
    const weeks = [];
    for (let i = 0; i < dataSource.length; i += 7) {
      weeks.push(dataSource.slice(i, i + 7));
    }

    // Calcular costos directos por semana
    const weeklyDirectCosts = weeks.map((week) => {
      return week.reduce((total, day) => {
        return (
          total +
          (parseFloat(day.alimentoBalanceado) || 0) +
          (parseFloat(day.acidosOrganicos) || 0) +
          (parseFloat(day.aditivos) || 0) +
          (parseFloat(day.vitaminas) || 0) +
          (parseFloat(day.mineralesCalcicos) || 0) +
          (parseFloat(day.desparasitantes) || 0) +
          (parseFloat(day.fertilizantes) || 0) +
          (parseFloat(day.medicados) || 0) +
          (parseFloat(day.bacteriaEnzimas) || 0) +
          (parseFloat(day.agua) || 0) +
          (parseFloat(day.larvasCamaronera) || 0)
        );
      }, 0);
    });

    const totalDirectCosts = weeklyDirectCosts.reduce((sum, weekCost) => sum + weekCost, 0);
    console.log('Weekly Direct Costs:', weeklyDirectCosts); // Debug
    console.log('Total Direct Costs:', totalDirectCosts); // Debug

    // Distribuir proporcionalmente o uniformemente
    if (totalDirectCosts === 0) {
      const costPerWeek = totalIndirectCosts / totalWeeks;
      return new Array(totalWeeks).fill(costPerWeek);
    }

    return weeklyDirectCosts.map(weekDirectCost => {
      const proportion = weekDirectCost / totalDirectCosts;
      return totalIndirectCosts * proportion;
    });
  };

  // Agrupar datos por semanas (7 días por semana)
  const weeks = [];
  for (let i = 0; i < dataSource.length; i += 7) {
    weeks.push(dataSource.slice(i, i + 7));
  }

  // Definir categorías
  const categories = [
    { name: 'Balanceado', key: 'balanceado', color: '#4A90E2' },
    { name: 'Otros Insumos', key: 'otrosinsumos', color: '#50E3C2' },
    { name: 'Indirectos', key: 'indirectos', color: '#F5A623' },
  ];

  // Calcular costos indirectos por semana
  const indirectCostsByWeek = calculateIndirectCostsByWeek(weeks.length);
  console.log('Indirect Costs by Week:', indirectCostsByWeek); // Debug

  // Calcular datos semanales
  const weeklyData = weeks.map((week, weekIndex) => {
    const balanceado = week.reduce((total, day) => total + (parseFloat(day.alimentoBalanceado) || 0), 0);
    const otrosinsumos = week.reduce(
      (total, day) =>
        total +
        (parseFloat(day.acidosOrganicos) || 0) +
        (parseFloat(day.aditivos) || 0) +
        (parseFloat(day.vitaminas) || 0) +
        (parseFloat(day.mineralesCalcicos) || 0) +
        (parseFloat(day.desparasitantes) || 0) +
        (parseFloat(day.fertilizantes) || 0) +
        (parseFloat(day.medicados) || 0) +
        (parseFloat(day.bacteriaEnzimas) || 0) +
        (parseFloat(day.agua) || 0) +
        (parseFloat(day.larvasCamaronera) || 0),
      0
    );
    const indirectos = indirectCostsByWeek[weekIndex] || 0;

    const result = { balanceado, otrosinsumos, indirectos };
    console.log(`Weekly Data for Week ${weekIndex + 1}:`, result); // Debug
    return result;
  });

  // Crear datasets para Chart.js
  const datasets = categories.map((category) => ({
    label: category.name,
    data: weeklyData.map((week) => Number(week[category.key].toFixed(2))),
    backgroundColor: category.color,
    barPercentage: 0.3, // Ajustado para tres barras
  }));

  const data = {
    labels: weeks.map((_, i) => `Semana ${i + 1}`),
    datasets,
  };

  console.log('Chart Data:', data); // Debug

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'linear', // Usar escala logarítmica para manejar valores grandes
        beginAtZero: false, // Logarithmic scales can't start at zero
        ticks: {
          stepSize: 1000, // Ajustar el paso de los ticks
          fontSize: 14,
          fontFamily: 'Jost', // Revertido al formato original
          color: '#8C90A4',
          callback: function (value) {
            return '$' + value.toLocaleString();
          },
        },
      },
      x: {
        ticks: {
          fontSize: 14,
          color: '#8C90A4',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <Cards title="Costos Agrupados por Semana" size="large">
      <div style={{ height: `${height}px` }}>
        <Bar data={data} options={options} />
      </div>
    </Cards>
  );
}