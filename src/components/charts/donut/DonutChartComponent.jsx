import React from 'react';
import { useSelector } from 'react-redux';
import { SalesOverviewStyleWrap2 } from '../../../container/dashboard/Style';
import DoughnutChart from '../DoughnutChart';

const DonutChartComponent = ({
  data = [], 
  colors = [], 
  titleText = 'Default Title',
  subtitleText = 'Default Subtitle',
  height = 150,
  width = 150,
}) => {
  const { mainContent } = useSelector((state) => ({
    mainContent: state.ChangeLayoutMode.mode,
  }));

  const defaultColors = [
    '#0372CE', '#00AAFF', '#FA8B0C', '#1ABC9C', '#3498DB',
    '#9B59B6', '#F39C12', '#E74C3C', '#2ECC71', '#34495E',
  ];

  const backgroundColors = colors.length ? colors : defaultColors;

  const labels = data.map((item) => item.label);
  const values = data.map((item) => item.value);

  const datasets = [
    {
      data: values,
      backgroundColor: backgroundColors.slice(0, data.length), 
      centerText: titleText,
      centerTextLabel: subtitleText,
    },
  ];

  const options = {
    cutout: 62,
    borderWidth: 2,
    borderColor: '#ffffff', 
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  const totalVolume = datasets[0].data.reduce((a, b) => a + b, 0);
  console.log('Total Volume:', totalVolume);

  return (
    <SalesOverviewStyleWrap2>
      <div className="ninjadash-overview-wrap">
        <DoughnutChart
          type="doughnut"
          id="reusableDonutChart"
          labels={labels}
          datasets={datasets}
          height={height}
          width={width}
          option={options}
          tooltip={{
            backgroundColor: '#FFF',
            titleFontSize: 16,
            titleColor: '#000000',      
            bodyColor: '#000000',
            bodyFontColor: '#000',
            bodyFontSize: 14,
            displayColors: false,
          }}
        />

        <div className="ninjadash-overview-percentage">
          {datasets[0].data.map((value, index) => {
            const itemPercent = Math.round((value / totalVolume) * 100);
            console.log('Item Percent:', itemPercent);
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

        <div className="ninjadash-overview-box align-center-v justify-content-between">
          {datasets[0].data.map((value, index) => (
            <div className="ninjadash-overview-box-item" key={index}>
              <h4>{value}</h4>
              <p>{labels[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </SalesOverviewStyleWrap2>
  );
};

export default DonutChartComponent;
