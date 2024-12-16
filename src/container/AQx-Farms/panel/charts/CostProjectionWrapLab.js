/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import config from '../../../../config/config';
import { SalesOverviewStyleWrap2 } from './Style';
import propTypes from 'prop-types';

const CostProjectionWrapLab = React.memo(() => {
  // Acceder al estado de Redux para obtener 'mainContent'
  const { mainContent } = useSelector((state) => ({
    mainContent: state.ChangeLayoutMode.mode,
  }));
  const { themeColor } = config;

  // Estado local para controlar la renderización del gráfico
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    // Introduce un retraso de 1 segundo antes de renderizar el gráfico
    const timer = setTimeout(() => {
      setShowChart(true);
    }, 1000); // 1000 milisegundos = 1 segundo

    // Limpia el timeout si el componente se desmonta antes de que termine
    return () => clearTimeout(timer);
  }, []);

  const labels = ['Balanceado', 'Artemia', 'Algas', 'Ácidos Orgánicos', 'Bacterias', 'Vitaminas'];
  const datasets = [
    {
      data: [58, 17, 11, 4, 7, 3], // Datos proporcionados
      backgroundColor: ['#0372CE', '#00AAFF', '#FA8B0C', '#00C49A', '#FF4560', '#775DD0'],
      centerText: 'Insumos',
      centerTextLabel: 'Distribución',
    },
  ];

  const options = {
    cutout: '70%', // Controla el grosor del doughnut
    borderWidth: 2,
    borderColor: themeColor[mainContent]['white-background'], // Color válido
    maintainAspectRatio: false, // Permite que el gráfico ocupe el contenedor
    responsive: true, // Asegura que el gráfico sea responsivo
    plugins: {
      legend: {
        display: false,
      },
      labels: {
        display: false,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  const totalSale = datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <SalesOverviewStyleWrap2>
      {showChart && ( // Renderiza el gráfico solo si showChart es true
        <div className="ninjadash-overview-wrap">
          {/* Contenedor del Doughnut Chart con altura definida */}
          <div style={{ width: '100%', height: '200px' }}>
            <DoughnutChart
              type="doughnut"
              id="insumosOverview"
              labels={labels}
              datasets={datasets}
              option={options}
              tooltip={{
                backgroundColor: '#FFF',
                titleFont: { size: 16 },
                titleColor: '#0066ff',
                bodyColor: '#000',
                bodyFont: { size: 14 },
                displayColors: false,
              }}
              centerTextSize="16px"
            />
          </div>

          {/* Overview Percentage */}
          <div className="ninjadash-overview-percentage">
            {datasets[0].data.map((value, index) => {
              const itemPercent = Math.round((value / totalSale) * 100);
              return (
                <div className="ninjadash-overview-percentage__item" key={index}>
                  <span
                    className="ninjadash-overview-percentage__point"
                    style={{
                      backgroundColor: datasets[0].backgroundColor[index],
                    }}
                  />
                  <span className="ninjadash-overview-percentage__text">{itemPercent}%</span>
                </div>
              );
            })}
          </div>

          {/* Overview Box */}
          <div className="ninjadash-overview-box align-center-v justify-content-between">
            {datasets[0].data.map((value, index) => {
              return (
                <div className="ninjadash-overview-box-item" key={index}>
                  <h4>{value}%</h4>
                  <p>{labels[index]}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </SalesOverviewStyleWrap2>
  );
});

CostProjectionWrapLab.propTypes = {};

export default CostProjectionWrapLab;
