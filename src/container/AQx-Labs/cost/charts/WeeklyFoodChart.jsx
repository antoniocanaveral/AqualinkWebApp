

import React from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';


ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

/**
 * WeeklyFoodChart Component
 * Muestra un gráfico combinado de barras y línea para Balanceado, Artemia y Algas.
 *
 * Props:
 * - dataSource: Array de objetos que contienen los datos diarios.
 * - height: Número que define la altura del gráfico en píxeles (default: 300).
 */
export default function WeeklyFoodChart({ dataSource, height = 300 }) {

    if (!Array.isArray(dataSource) || dataSource.length === 0) {
        return <p>No hay datos disponibles para mostrar el gráfico.</p>;
    }


    const weeks = [];
    for (let i = 0; i < dataSource.length; i += 7) {
        weeks.push(dataSource.slice(i, i + 7)); // Cada semana contiene 7 días
        if (weeks.length === 4) break; // Máximo 4 semanas
    }


    const weeklyBalanceado = weeks.map((week) => {
        return week.reduce((total, day) => total + (day.alimentoBalanceado || 0), 0);
    });

    const weeklyArtemia = weeks.map((week) => {
        return week.reduce((total, day) => total + (day.acidosOrganicos || 0), 0);
    });

    const weeklyAlgas = weeks.map((week) => {
        return week.reduce((total, day) => total + (day.agua || 0), 0);
    });


    const averageBalanceado = weeklyBalanceado.map((value, index) => {
        const total = weeklyBalanceado.slice(0, index + 1).reduce((sum, val) => sum + val, 0);
        return total / (index + 1);
    });


    const data = {
        labels: weeks.map((_, i) => `Semana ${i + 1}`),
        datasets: [
            {
                type: 'line',
                label: 'Promedio Balanceado',
                data: averageBalanceado,
                borderColor: '#F5A623', // Color para la línea
                borderWidth: 2,
                pointBackgroundColor: '#F5A623',
                fill: false,
                tension: 0.4, // Suavizado de la línea
                order: 3, // Prioridad para renderizar encima
            },
            {
                type: 'bar',
                label: 'Balanceado',
                data: weeklyBalanceado,
                backgroundColor: '#4A90E2', // Color para las barras
                barPercentage: 0.6,
                categoryPercentage: 0.5,
                order: 1, // Prioridad para renderizar detrás
            },
            {
                type: 'bar',
                label: 'Artemia',
                data: weeklyArtemia,
                backgroundColor: '#50E3C2', // Color para las barras
                barPercentage: 0.6,
                categoryPercentage: 0.5,
                order: 2,
            },
            {
                type: 'bar',
                label: 'Algas',
                data: weeklyAlgas,
                backgroundColor: '#F8E71C', // Color para las barras
                barPercentage: 0.6,
                categoryPercentage: 0.5,
                order: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                stacked: false, // Asegura que las barras no estén apiladas
                ticks: {
                    font: {
                        size: 14,
                        family: 'Jost',
                    },
                    color: '#8C90A4',
                },
            },
            x: {
                stacked: false, // Asegura que los ejes no combinen datos
                ticks: {
                    font: {
                        size: 14,
                        family: 'Jost',
                    },
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
                        family: 'Jost',
                    },
                    color: '#8C90A4',
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
        <div style={{ height: `${height}px` }}>
            <Bar data={data} options={options} />
        </div>
    );
}


WeeklyFoodChart.propTypes = {
    dataSource: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            dia: PropTypes.number.isRequired,
            alimentoBalanceado: PropTypes.number,
            acidosOrganicos: PropTypes.number,
            aditivos: PropTypes.number,
            vitaminas: PropTypes.number,
            mineralesCalcicos: PropTypes.number,
            desparasitantes: PropTypes.number,
            fertilizantes: PropTypes.number,
            medicados: PropTypes.number,
            bacteriaEnzimas: PropTypes.number,
            agua: PropTypes.number,
        })
    ).isRequired,
    height: PropTypes.number,
};
