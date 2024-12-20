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

function ComparativePerformanceBarChart() {
    // Datos para el gráfico
    const data = {
        labels: ['80/100', '70/80', '60/70', '50/60', '40/50', '30/40', '20/30'],
        datasets: [
            {
                label: 'CLASIFICACION PRE COSECHA',
                data: [75, 65, 55, 45, 35, 25, 15], // Datos de ejemplo
                backgroundColor: '#001737',
                barPercentage: 0.6,
            },
            {
                label: 'CLASIFICACION PROCESO',
                data: [80, 70, 60, 50, 40, 30, 20], // Datos de ejemplo
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
                ticks: {
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
                        return `${label}: ${value}`;
                    },
                },
            },
        },
    };

    return (
        <Cards title="Comparación Performance" size="large">
            <div style={{ position: 'relative', height: '200px' }}>
                <Bar data={data} options={options} />
            </div>
        </Cards>
    );
}

export default ComparativePerformanceBarChart;
