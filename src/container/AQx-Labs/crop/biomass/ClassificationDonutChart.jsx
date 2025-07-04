import React from 'react';
import PropTypes from 'prop-types';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { SalesOverviewStyleWrap2 } from '../../../dashboard/Style';

const ClassificationDonutChart = ({ data }) => {

  const themeColor = {
    default: { 'white-background': '#ffffff' },
  };


  const classificationSums = data
    .map(item => {
      const sum = data
        .filter(d => d.clasificacion === item.clasificacion)
        .reduce((acc, d) => acc + parseFloat(d.porcentaje) || 0, 0);


      const roundedSum = parseFloat(sum.toFixed(2));

      return {
        label: item.clasificacion,
        value: roundedSum,
        color: item.color,
      };
    })

    .filter((value, index, self) =>
      index === self.findIndex((t) => t.label === value.label)
    );


  const labels = classificationSums.map(item => item.label);
  const datasetValues = classificationSums.map(item => item.value);
  const backgroundColors = classificationSums.map(item => item.color);


  const datasets = [
    {
      data: datasetValues,
      backgroundColor: backgroundColors,
      centerText: 'Clasificación',
      centerTextLabel: '',
    },
  ];


  const options = {
    cutout: 62,
    borderWidth: 2,
    borderColor: themeColor.default['white-background'],
    maintainAspectRatio: false,
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },

      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        ctx.save();
        const centerX = chart.getDatasetMeta(0).data[0].x;
        const centerY = chart.getDatasetMeta(0).data[0].y;


        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#333';
        ctx.fillText('Clasificación', centerX, centerY - 10);

        ctx.font = '10px Arial';
        ctx.fillText('', centerX, centerY + 10);
        ctx.restore();
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };


  const tooltipConfig = {
    backgroundColor: '#FFF',        // Fondo blanco
    titleColor: '#000',             // Título en negro
    bodyColor: '#000',              // Texto en negro
    titleFont: { size: 10 },        // Tamaño de fuente del título
    bodyFont: { size: 10 },         // Tamaño de fuente del cuerpo
    displayColors: false,
  };


  const totalPercentage = datasetValues.reduce((a, b) => a + b, 0);

  return (
    <SalesOverviewStyleWrap2>
      <div
        className="ninjadash-overview-wrap"
        style={{ fontSize: '12px', textAlign: 'center' }}
      >
        {/* Gráfico de Dona */}
        <DoughnutChart
          type="doughnut"
          id="classificationOverview"
          labels={labels}
          datasets={datasets}
          height={150}
          width={150}
          option={options}
          centerTextStyles={{ fontSize: '1px', fontWeight: 'bold', color: '#333' }}
          tooltip={tooltipConfig}
        />

        {/* 7. Bloque unificado: Dots + Label + Porcentaje */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            fontSize: '12px',
            marginTop: '10px',
          }}
        >
          {datasets[0].data.map((value, index) => {
            const itemPercent = Math.round((value / totalPercentage) * 100);
            return (
              <div key={index} style={{ textAlign: 'center' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    backgroundColor: datasets[0].backgroundColor[index],
                    borderRadius: '50%',
                    marginRight: '6px',
                  }}
                />
                {/* Muestra la clasificación y el porcentaje unificado */}
                <span>
                  {labels[index]}: <br/> {itemPercent}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </SalesOverviewStyleWrap2>
  );
};

ClassificationDonutChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      clasificacion: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      pesoEspecifico: PropTypes.number.isRequired,
      muestra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      pesoTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      porcentaje: PropTypes.string,
    })
  ).isRequired,
};

export default ClassificationDonutChart;
