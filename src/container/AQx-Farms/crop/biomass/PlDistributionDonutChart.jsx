import React from 'react';
import { useSelector } from 'react-redux';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { SalesOverviewStyleWrap2 } from '../../../dashboard/Style';

const PLDistributionDonutChart = () => {
  const { mainContent } = useSelector((state) => ({
    mainContent: state.ChangeLayoutMode.mode,
  }));
  const { productionReports } = useSelector((state) => state.productionReport);

  const themeColor = {
    default: { 'white-background': '#ffffff' },
  };

  // Process productionReports to extract SM_Batch and sm_estimatedlabcount
  const chartData = productionReports
    ?.filter(
      (report) =>
        report.coordination_json?.[0]?.clients?.[0]?.sm_estimatedlabcount != null
    )
    ?.map((report) => ({
      label: report.SM_Batch || `Lote ${report.id}`,
      value: report.coordination_json[0].clients[0].sm_estimatedlabcount,
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
  const totalPL = data.reduce((sum, value) => sum + value, 0) || 1; // Avoid division by zero

  const datasets = [
    {
      data: data.length > 0 ? data : [1], // Fallback to [1] to avoid empty chart
      backgroundColor: data.length > 0 ? colors : ['#E0E0E0'], // Gray for empty state
      centerText: 'PL',
      centerTextLabel: 'Distribución',
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
          id="plDistributionOverview"
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
                const itemPercent = Math.round((value / totalPL) * 100);
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
            <p>No hay datos disponibles para la distribución de PL</p>
          </div>
        )}
      </div>
    </SalesOverviewStyleWrap2>
  );
};

export default PLDistributionDonutChart;