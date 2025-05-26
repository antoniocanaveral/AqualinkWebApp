import React from 'react';
import { useSelector } from 'react-redux';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { SalesOverviewStyleWrap2 } from '../../../dashboard/Style';

const PreCriaVolumeDonutChart = () => {
  const { mainContent } = useSelector((state) => ({
    mainContent: state.ChangeLayoutMode.mode,
  }));
  const { productionReports } = useSelector((state) => state.productionReport);

  const themeColor = {
    default: { 'white-background': '#ffffff' },
  };

  // Process productionReports to extract unique pool_name and animals_per_gram
  const chartData = productionReports
    ?.reduce((acc, report) => {
      const animalsGram = report.pc_animalsgram_json || [];
      animalsGram.forEach((item) => {
        if (item.pool_name && item.animals_per_gram != null) {
          // Check if pool_name already exists; update if report is more recent
          const existing = acc.find((data) => data.pool_name === item.pool_name);
          if (!existing) {
            acc.push({
              pool_name: item.pool_name,
              animals_per_gram: item.animals_per_gram,
              created: report.Created,
            });
          } else if (new Date(report.Created) > new Date(existing.created)) {
            existing.animals_per_gram = item.animals_per_gram;
            existing.created = report.Created;
          }
        }
      });
      return acc;
    }, [])
    ?.map((item) => ({
      label: item.pool_name,
      value: Number(item.animals_per_gram.toFixed(2)), // Round to 2 decimal places
    })) || [];

  // Define labels and data for the chart
  const labels = chartData.map((item) => item.label);
  const data = chartData.map((item) => item.value);

  // Generate colors for each segment
  const colors = [
    '#0372CE',
    '#00AAFF',
    '#FA8B0C',
    '#FF5733',
    '#C70039',
    '#900C3F',
    '#581845',
  ].slice(0, data.length); // Limit colors to number of segments

  // Calculate total for percentage calculations
  const totalVolume = data.reduce((sum, value) => sum + value, 0) || 1; // Avoid division by zero

  const datasets = [
    {
      data: data.length > 0 ? data : [1], // Fallback to [1] to avoid empty chart
      backgroundColor: data.length > 0 ? colors : ['#E0E0E0'], // Gray for empty state
      centerText: 'Pre Crías',
      centerTextLabel: 'Volumen',
    },
  ];

  const options = {
    cutout: 62,
    borderWidth: 2,
    borderColor: themeColor[mainContent]?.['white-background'] || '#ffffff',
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#000000',
        callbacks: {
          label: (context) => {
            const index = context.dataIndex;
            const label = context.chart.data.labels[index] || 'Sin datos';
            const value = context.chart.data.datasets[0].data[index];
            return data.length > 0 ? `${label}: ${value}` : 'Sin datos: N/A';
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <SalesOverviewStyleWrap2>
      <div className="ninjadash-overview-wrap">
        <DoughnutChart
          type="doughnut"
          id="precriaVolumeOverview"
          labels={data.length > 0 ? labels : ['Sin datos']}
          datasets={datasets}
          height={150}
          width={150}
          option={options}
          tooltip={{
            backgroundColor: '#000000',
            titleFontSize: 16,
            titleFontColor: '#0066ff',
            bodyFontColor: '#000',
            bodyFontSize: 14,
            displayColors: false,
          }}
        />

        {data.length > 0 ? (
          <>
            <div className="ninjadash-overview-percentage">
              {datasets[0].data.map((value, index) => {
                const itemPercent = Math.round((value / totalVolume) * 100);
                return (
                  <div className="ninjadash-overview-percentage__item" key={index}>
                    <span
                      className="ninjadash-overview-percentage__point"
                      style={{
                        backgroundColor: datasets[0].backgroundColor[index],
                      }}
                    />
                    <span className="ninjadash-overview-percentage__text">
                      {itemPercent}%
                    </span>
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
          </>
        ) : (
          <div className="ninjadash-overview-empty">
            <p>No hay datos disponibles para el volumen de Pre Crías</p>
          </div>
        )}
      </div>
    </SalesOverviewStyleWrap2>
  );
};

export default PreCriaVolumeDonutChart;