import React from 'react';
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

function HorizontalBarChart() {
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Ventas de Camaronera',
                data: [120, 95, 80, 60, 50, 40],
                backgroundColor: '#1ce1ac',
                barPercentage: 0.6,
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Hace que las barras sean horizontales
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Ocultar la leyenda si solo hay un dataset
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 150, // Ajusta según tus datos
                grid: {
                    color: '#485e9029',
                    borderDash: [3, 3],
                },
                ticks: {
                    color: '#8C90A4',
                    padding: 10,
                    callback: function(value) {
                        return `${value}`;
                    },
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#8C90A4',
                    padding: 10,
                    font: {
                        size: 14,
                        family: 'Jost, sans-serif',
                    },
                },
            },
        },
        layout: {
            padding: {
                left: 0, // Ajusta el espacio para las etiquetas
            },
        },
    };

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default HorizontalBarChart;
