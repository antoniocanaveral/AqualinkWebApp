
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import config from '../../../../config/config';
import { Spin } from 'antd';
import { SalesOverviewStyleWrap2 } from '../../../dashboard/Style';

const LoteRendimientoWrapLab = React.memo(({ title, hocategoryLabels, hocategoryData }) => {
  const { mainContent } = useSelector((state) => ({
    mainContent: state.ChangeLayoutMode.mode,
  }));
  const { themeColor } = config;

  const [showChart, setShowChart] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChart(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  const backgroundColor = [
    '#0372CE', '#00AAFF', '#FA8B0C', '#00C49A',
    '#FF4560', '#775DD0', '#5350C6', '#FDAC34',
    '#28C76F', '#F64152',
  ];

  const datasets = [
    {
      data: hocategoryData,
      backgroundColor: backgroundColor.slice(0, hocategoryData.length),
      centerText: title,
    },
  ];

  const options = {
    cutout: '65%',
    borderWidth: 2,
    borderColor: themeColor[mainContent]['white-background'],
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  const tooltip = {
    backgroundColor: '#FFF',
    titleFont: { size: 14 },
    titleColor: '#000',
    bodyColor: '#000',
    displayColors: false,
  };

  const total = hocategoryData.reduce((a, b) => a + b, 0);

  return (
    <SalesOverviewStyleWrap2 style={{marginBottom: "150px"}}>
      <h3 style={{ textAlign: 'center', marginBottom: 10 }}>{title}</h3>
      {!showChart ? (
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <Spin />
        </div>
      ) : (
        <div className="ninjadash-overview-wrap" style={{ width: '93%' }}>
          <DoughnutChart
            type="doughnut"
            id={`doughnut-${title}`}
            labels={hocategoryLabels}
            datasets={datasets}
            option={options}
            tooltip={tooltip}
            centerTextSize="14px"
          />
          <div  className="ninjadash-overview-percentage">
            {hocategoryLabels.map((label, index) => {
              const val = hocategoryData[index];
              const percent = total > 0 ? Math.round((val / total) * 100) : 0;
              return (
                <div className="ninjadash-overview-percentage__item" key={index}>
                  <span
                    className="ninjadash-overview-percentage__point"
                    style={{ backgroundColor: backgroundColor[index] }}
                  />
                  <span className="ninjadash-overview-percentage__text">
                    {label}: {percent}%
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

export default LoteRendimientoWrapLab;
