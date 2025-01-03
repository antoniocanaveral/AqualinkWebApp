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

// Registro de componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ComparativeDispatchPerformanceBarChart() {
    // Datos para el gráfico
    const data = {
        labels: ['PL 10', 'PL 12', 'PL 14', 'PL 16'],
        datasets: [
            {
                label: 'Pre Cosecha',
                data: [20, 60, 20, 80],
                backgroundColor: '#001737',
                barPercentage: 0.6,
            },
            {
                label: 'Clasificación Proceso',
                data: [80, 40, 10, 70],
                backgroundColor: '#1ce1ac',
                barPercentage: 0.6,
            },
        ],
    };

    // Opciones de configuración del gráfico
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 20,
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
                    zeroLineColor: '#485e9029',
                    zeroLineWidth: 1,
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
                    zeroLineWidth: 0,
                    color: 'transparent',
                    z: 1,
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
                        return `${label}: ${value} millones`;
                    },
                },
            },
        },
    };

    return (
        <Cards title="Gráfico Comparativo Pre Cosecha vs Clasificación Proceso" size="large">
            <div style={{ position: 'relative', height: '200px' }}>
                <Bar data={data} options={options} />
            </div>
        </Cards>
    );
}

export default ComparativeDispatchPerformanceBarChart;
