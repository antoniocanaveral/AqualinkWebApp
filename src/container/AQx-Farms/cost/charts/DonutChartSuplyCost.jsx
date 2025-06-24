import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip);

const DonutChartSuplyCost = ({ data, width = '100%', height = 300 }) => {
  // Validate data
  if (!data || data.length === 0) {
    console.error('No data provided to DonutChartSuplyCost');
    return <div>No data available</div>;
  }

  const totalValue = data.reduce((acc, item) => acc + item.value, 0) || 1;

  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const options = {
    cutout: '70%',
    responsive: false,
    width: 500, // Aumentado para un donut más grande
    height: 100,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => {
            const label = ctx.label || '';
            const value = ctx.parsed || 0;
            const percent = ((value / totalValue) * 100).toFixed(1);
            return `${label}: ${value.toLocaleString()} (${percent}%)`;
          },
        },
      },
    },
  };

  const legendItems = data.map((item, idx) => (
    <div
      key={idx}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 6,
        width: '50%',
        boxSizing: 'border-box',
        paddingRight: 10,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          backgroundColor: item.color,
          borderRadius: '50%',
          marginRight: 8,
          flexShrink: 0,
        }}
      />
      <div style={{ fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {item.label} ({((item.value / totalValue) * 100).toFixed(1)}%)
      </div>
    </div>
  ));

  return (
    <div style={{ width, margin: '0 auto', overflow: 'visible', textAlign: 'center' }}>
      <div
        style={{
          position: 'relative',
          width: '300px', // Aumentado para un donut más grande
          height: '300px', // Aumentado para un donut más grande
          margin: '0 auto',
          display: 'inline-block',
        }}
      >
        <Doughnut data={chartData} options={options} />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          marginTop: -70, // Reducido para menos espacio
        }}
      >
        {legendItems}
      </div>
    </div>
  );
};

DonutChartSuplyCost.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.number,
};

export default DonutChartSuplyCost;