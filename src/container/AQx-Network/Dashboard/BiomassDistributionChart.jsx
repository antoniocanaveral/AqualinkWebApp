import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DoughnutChart from '../../../components/charts/DoughnutChart';
import { SalesOverviewStyleWrap2 } from '../../dashboard/Style';
import config from '../../../config/config';

const BiomassDistributionChart = ({
  data,
  title,
  biomassField,
  groupByField,
  getGroupByValue = (item, field) => item[field], // Default to direct field access
  groupByFunction, // Optional custom grouping function
}) => {
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

  // Process data to group by specified field or function and calculate biomass
  const processData = () => {
    if (!Array.isArray(data)) return { labels: [], values: [] };

    // Group by the specified field or function and sum biomass
    const biomassByGroup = data.reduce((acc, item) => {
      let groupValue;
      if (groupByFunction) {
        groupValue = groupByFunction(item) ?? 'Sin Clasificación';
      } else {
        groupValue = getGroupByValue(item, groupByField) ?? 'Unknown';
      }
      const biomass = item[biomassField] || 0;
      acc[groupValue] = (acc[groupValue] || 0) + biomass;
      return acc;
    }, {});

    // Convert to arrays for chart
    const labels = Object.keys(biomassByGroup).map((key) =>
      groupByField === 'sm_targetpl' ? `PL ${key}` : key
    );
    const values = Object.values(biomassByGroup);

    return { labels, values };
  };

  const { labels, values } = processData();

  const datasets = [
    {
      data: values,
      backgroundColor: ['#0372CE', '#00AAFF', '#FA8B0C', '#00C49A', '#FF4560', '#775DD0'],
      centerText: title,
      centerTextLabel: 'Distribución',
    },
  ];

  const options = {
    cutout: '70%',
    borderWidth: 2,
    borderColor: themeColor[mainContent]['white-background'],
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { display: false },
      labels: { display: false },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  const tooltip = {
    backgroundColor: '#FFF',
    titleFont: { size: 16 },
    titleColor: '#000',
    bodyColor: '#000',
    bodyFont: { size: 14 },
    displayColors: false,
  };

  const totalBiomass = values.reduce((a, b) => a + b, 0);

  return (
    <SalesOverviewStyleWrap2>
      {showChart && (
        <div className="ninjadash-overview-wrap">
          <div style={{ width: '100%', height: '200px' }}>
            <DoughnutChart
              type="doughnut"
              id={`${title.toLowerCase()}-overview`}
              labels={labels}
              datasets={datasets}
              option={options}
              tooltip={tooltip}
              centerTextSize="16px"
            />
          </div>
          <div className="ninjadash-overview-percentage">
            {datasets[0].data.map((value, index) => {
              const itemPercent = totalBiomass ? Math.round((value / totalBiomass) * 100) : 0;
              return (
                <div className="ninjadash-overview-percentage__item" key={index}>
                  <span
                    className="ninjadash-overview-percentage__point"
                    style={{
                      backgroundColor: datasets[0].backgroundColor[index],
                    }}
                  />
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
};

export default BiomassDistributionChart;