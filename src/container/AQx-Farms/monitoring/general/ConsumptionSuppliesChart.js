import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import config from '../../../../config/config';
import { SalesOverviewStyleWrap2 } from './Style';

const ConsumptionSuppliesChart = React.memo(() => {
  const { mainContent } = useSelector((state) => ({
    mainContent: state.ChangeLayoutMode.mode,
  }));
  const { themeColor } = config;

  const labels = ['Balanceado', 'Ácidos Orgánicos', 'Bacteria', 'Balanceado', 'Balanceado'];
  const datasets = [
    {
      data: [58, 17, 11, 4, 7],
      backgroundColor: ['#0372CE', '#00AAFF', '#FA8B0C', '#00C49A', '#FF4560'],
    },
  ];

  const options = {
    cutout: 62,
    borderWidth: 2,
    borderColor: themeColor[mainContent]['white-background'],
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: { display: false },
    },
    animation: { animateScale: true, animateRotate: true },
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
              titleFontSize: 13,
              titleFontColor: '#0066ff',
              bodyFontColor: '#000',
              bodyFontSize: 12,
              displayColors: false,
            }}
          />

          {/* Overview Box with consolidated information */}
          <div className="ninjadash-overview-box align-center-v justify-content-between">
            {datasets[0].data.map((value, index) => {
              const itemPercent = Math.round((value / totalSale) * 100);
              return (
                <div style={{ marginRight: "3px" }} className="ninjadash-overview-box-item" key={index}>
                  <span
                    className="ninjadash-overview-percentage__point"
                    style={{ backgroundColor: datasets[0].backgroundColor[index], display: 'inline-block', width: 8, height: 8, borderRadius: '50%', marginRight: 4 }}
                  />
                  <h4 style={{ fontSize: 12 }}>{itemPercent}%</h4>
                  <p style={{ fontSize: 10 }}>{labels[index]}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </SalesOverviewStyleWrap2>
  );
});

export default ConsumptionSuppliesChart;
