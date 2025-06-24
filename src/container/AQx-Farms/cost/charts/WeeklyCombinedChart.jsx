import React from 'react';
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

export default function WeeklyCombinedChart({ dataSource, height = 300 }) {
    if (!Array.isArray(dataSource) || dataSource.length === 0) {
        return <p>No hay datos disponibles para mostrar el gráfico.</p>;
    }


    const weeks = [];
    for (let i = 0; i < dataSource.length; i += 7) {
        weeks.push(dataSource.slice(i, i + 7)); // Cada semana contiene 7 días
        if (weeks.length === 4) break; // Máximo 4 semanas
    }


    const weeklyData = weeks.map((week) => {
        const balanceado = week.reduce((total, day) => total + day.alimentoBalanceado, 0);
        return balanceado;
    });


    const averageData = weeklyData.map((value, index) => {
        const total = weeklyData.slice(0, index + 1).reduce((sum, val) => sum + val, 0);
        return total / (index + 1);
    });


    const data = {
        labels: weeks.map((_, i) => `Semana ${i + 1}`),
        datasets: [
            {
                type: 'line',
                label: 'Promedio',
                data: averageData,
                borderColor: '#F5A623', // Color para la línea
                borderWidth: 2,
                pointBackgroundColor: '#F5A623',
                fill: false,
                tension: 0.4, // Suavizado de la línea
                order: 1, // Prioridad para renderizar encima
            },
            {
                type: 'bar',
                label: 'Balanceado',
                data: weeklyData,
                backgroundColor: '#4A90E2', // Color para las barras
                barPercentage: 0.6,
                categoryPercentage: 0.5,
                order: 2, // Prioridad para renderizar detrás
            },

        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                stacked: false, // Asegura que las barras y la línea se rendericen correctamente
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                },
            },
            x: {
                stacked: false, // Asegura que los ejes no combinen datos
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false, // Muestra ambos tipos de datos en el tooltip
            },
        },
        interaction: {
            mode: 'index',
            intersect: false, // Facilita la interacción
        },
    };

    return (
        <div style={{ height: `${height}px` }}> {/* Aplicar la altura dinámica */}
            <Bar data={data} options={options} />
        </div>

    );
}
