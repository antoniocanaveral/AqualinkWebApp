import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import config from '../../../../config/config';
import { SalesOverviewStyleWrap2 } from './Style';

const CostProjectionWrapLab = React.memo(() => {

  const { mainContent } = useSelector((state) => ({
    mainContent: state.ChangeLayoutMode.mode,
  }));
  const { themeColor } = config;


  const [showChart, setShowChart] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowChart(true);
    }, 1000); // 1000 milisegundos = 1 segundo


    return () => clearTimeout(timer);
  }, []);

  const labels = ['Balanceado', 'Cálcicos', 'Ácidos Orgánicos', 'Bacteria', 'Vitaminas'];
  const datasets = [
    {
      data: [58, 11, 4, 7, 3], // Datos proporcionados
      backgroundColor: ['#0372CE', '#00AAFF', '#FA8B0C', '#00C49A', '#FF4560', '#775DD0'],
      centerText: 'Insumos',
      centerTextLabel: 'Distribución',
    },
  ];

  const options = {
    cutout: '70%', // Controla el grosor del doughnut
    borderWidth: 2,
    borderColor: themeColor[mainContent]['white-background'],
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


  const tooltip = {
    backgroundColor: '#FFF',
    titleFont: { size: 16 },
    titleColor: '#000', // <-- Título en negro
    bodyColor: '#000',  // <-- Texto en negro
    bodyFont: { size: 14 },
    displayColors: false,
  };


  const totalSale = datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <SalesOverviewStyleWrap2>
      {showChart && (
        <div className="ninjadash-overview-wrap">
          {/* Contenedor del Doughnut Chart con altura definida */}
          <div style={{ width: '100%', height: '200px' }}>
            <DoughnutChart
              type="doughnut"
              id="insumosOverview"
              labels={labels}
              datasets={datasets}
              option={options}
              tooltip={tooltip}
              centerTextSize="16px"
            />
          </div>

          {/* Bloque unificado de Dots + Labels + Porcentajes */}
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
                  {/* Muestra label y porcentaje juntos */}
                  <span className="ninjadash-overview-percentage__text">
                    {labels[index]}: {itemPercent}%
                  </span>
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
