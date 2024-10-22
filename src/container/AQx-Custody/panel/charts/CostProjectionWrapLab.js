import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DoughnutChart from '../../../../components/charts/DoughnutChart';

import config from '../../../../config/config';
import { SalesOverviewStyleWrap2 } from './Style';

const CostProjectionWrapLab = React.memo(() => {
  const { mainContent } = useSelector((state) => {
    return {
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
  const { themeColor } = config;

  const labels = ['Balanceado', 'Artemia', 'Algas', 'Ácidos Orgánicos', 'Bacterias', 'Vitaminas'];
  const datasets = [
    {
      data: [58, 17, 11, 4, 7, 3],  // Actualización de los datos proporcionados
      backgroundColor: ['#0372CE', '#00AAFF', '#FA8B0C', '#00C49A', '#FF4560', '#775DD0'], // Colores personalizados
      centerText: 'Insumos',
      centerTextLabel: 'Distribución',
    },
  ];

  const options = {
    cutout: 62,
    borderWidth: 2,
    borderColor: themeColor[mainContent]['white-background'],
    maintainAspectRatio: false,
    responsive: false,
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
      {datasets !== null && (
      
          <div className="ninjadash-overview-wrap">
            {/* Doughnut Chart */}
            <DoughnutChart
              type="doughnut"
              id="insumosOverview"
              labels={labels}
              datasets={datasets}
              height={200}
              width={window.innerWidth <= 575 ? 200 : 250}
              option={options}
              tooltip={{
                backgroundColor: '#FFF',
                titleFontSize: 16,
                titleFontColor: '#0066ff',
                bodyFontColor: '#000',
                bodyFontSize: 14,
                displayColors: false,
              }}
            />

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

export default CostProjectionWrapLab;
