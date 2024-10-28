import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function DoughnutChart({ datasets, tooltip, ...props }) {
  const chartRef = useRef(null); // Referencia para el canvas
  const chartInstance = useRef(null); // Referencia para la instancia del gráfico

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destruye la instancia anterior del gráfico si existe
    }

    // Crea una nueva instancia del gráfico
    chartInstance.current = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: props.labels,
        datasets,
      },
      options: {
        ...props.option,
        maintainAspectRatio: false, // Permite que el gráfico ocupe el 100% del contenedor
        responsive: true,
        plugins: {
          legend: props.legend,
          tooltip,
        },
      },
    });

    // Limpia la instancia al desmontar o actualizar el componente
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [datasets, props.labels, tooltip, props.option, props.legend]); // Vuelve a renderizar solo si cambian estas props

  return (
    <div className="doughnutchart-inner" style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div className="doughnutchart-inner-text">
        {datasets[0].centerText === '' ? (
          <span className="doughnutchart-inner-content">
            {Math.round((datasets[0].data[2] / datasets[0].data[1]) * 100)}%
          </span>
        ) : (
          <span className="doughnutchart-inner-content">{datasets[0].centerText}</span>
        )}
        <span className="doughnutchart-inner-label">{datasets[0].centerTextLabel}</span>
      </div>
      <canvas ref={chartRef} id={props.id} style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
}

DoughnutChart.defaultProps = {
  height: 500,
  width: 300,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      borderColor: '#001737',
      borderWidth: 1,
      fill: false,
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      borderColor: '#1ce1ac',
      borderWidth: 1,
      fill: false,
    },
  ],
  layout: {},
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  id: 'myChart',
  elements: {
    line: {
      tension: 0.5,
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
      capBezierPoints: true,
    },
    point: {
      radius: 0,
      z: 5,
    },
  },

  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },

  tooltip: {},
  option: {
    borderColor: ({ theme }) => theme[theme.mainContent]['white-background'],
  },
};

DoughnutChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  legend: PropTypes.object,
  layout: PropTypes.object,
  elements: PropTypes.object,
  scales: PropTypes.object,
  tooltip: PropTypes.object,
  option: PropTypes.object,
};

export default DoughnutChart;
