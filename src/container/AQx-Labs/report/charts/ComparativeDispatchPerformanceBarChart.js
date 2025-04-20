import React from 'react';
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * @param {Object[]} dataVariations Array of up to 5 objects, each with the shape:
 *   {
 *     variacionLarvaCoordinada: number,      // e.g. 1.05 => 105%
 *     variacionSolicitadoDespachado: number, // e.g. 0.95 => 95%
 *     variacionDespachadoSembrado: number    // e.g. 1.1  => 110%
 *   }
 * 
 * Example:
 * dataVariations = [
 *   { variacionLarvaCoordinada: 1.05, variacionSolicitadoDespachado: 0.95, variacionDespachadoSembrado: 1.1 },
 *   { variacionLarvaCoordinada: 0.90, variacionSolicitadoDespachado: 1.0,  variacionDespachadoSembrado: 1.05 },
 *   ... up to 5 items total ...
 * ];
 */
function ComparativeDispatchPerformanceBarChart({ dataVariations = [] }) {

  const MAX_SIEMBRAS = 5;
  const filledVariations = [...dataVariations];

  while (filledVariations.length < MAX_SIEMBRAS) {
    filledVariations.push({
      variacionLarvaCoordinada: 0,
      variacionSolicitadoDespachado: 0,
      variacionDespachadoSembrado: 0,
    });
  }


  const variationLarvaCoordinadaData = filledVariations.map(item => item.variacionLarvaCoordinada * 100);
  const variationSolicitadoDespachadoData = filledVariations.map(item => item.variacionSolicitadoDespachado * 100);
  const variationDespachadoSembradoData = filledVariations.map(item => item.variacionDespachadoSembrado * 100);


  const labels = ['Siembra 1', 'Siembra 2', 'Siembra 3', 'Siembra 4', 'Siembra 5'];


  const data = {
    labels,
    datasets: [
      {
        label: 'Variación Larva Coordinada',
        data: variationLarvaCoordinadaData,
        backgroundColor: '#001737',
        barPercentage: 0.6,
      },
      {
        label: 'Variación Solicitado / Despachado',
        data: variationSolicitadoDespachadoData,
        backgroundColor: '#1ce1ac',
        barPercentage: 0.6,
      },
      {
        label: 'Variación Despachado / Sembrado',
        data: variationDespachadoSembradoData,
        backgroundColor: '#FFB822',
        barPercentage: 0.6,
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {


          max: 200,
          stepSize: 20,
          callback: function (value) {
            return value + '%';
          },
          font: {
            size: 14,
            family: 'Jost',
          },
          color: '#8C90A4',
          padding: 10,
        },
        grid: {
          color: '#485e9029',
          borderDash: [3, 3],
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
            family: 'Jost',
          },
          color: '#8C90A4',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#8C90A4',
          font: {
            size: 14,
            family: 'Jost',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            return `${label}: ${value.toFixed(2)}%`;
          },
        },
      },
    },
  };

  return (
    <Cards title="Variaciones por Siembra" size="large">
      <div style={{ position: 'relative', height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </Cards>
  );
}

export default ComparativeDispatchPerformanceBarChart;
