import React from 'react';
import DashboardChart from '../../../../components/charts/DashboardChart';

function StackedHorizontalBarChart() {
    const barChart = {
        height: 300, // Ajusta la altura según tus necesidades
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'], // Etiquetas para el eje Y

        datasets: [
            {
                label: 'Costo de Alimento Tipo A',
                data: [30, 25, 35, 20, 30, 25],
                backgroundColor: '#1ce1ac',
                stack: 'Stack 0', // Asigna un stack común para apilar
                barPercentage: 0.6,
            },
            {
                label: 'Costo de Alimento Tipo B',
                data: [20, 15, 25, 10, 20, 15],
                backgroundColor: '#ff6384',
                stack: 'Stack 0',
                barPercentage: 0.6,
            },
            {
                label: 'Costo de Alimento Tipo C',
                data: [10, 20, 15, 25, 10, 20],
                backgroundColor: '#36a2eb',
                stack: 'Stack 0',
                barPercentage: 0.6,
            },
        ],
        legend: {
            display: false, // Oculta la leyenda si prefieres manejarla de otra manera
        },
        indexAxis: 'y', // Hace que el gráfico sea horizontal
        layout: {
            padding: {
                left: 0, // Ajusta el espacio a la izquierda para las etiquetas
                right: 20,
                top: 20,
                bottom: 20,
            },
        },
    };

    const scalesOptions = {
        y: {
            stacked: true, // Habilita el apilamiento en el eje Y
            grid: {
                color: '#485e9029',
                borderDash: [3, 3],
                zeroLineColor: '#485e9029',
                zeroLineWidth: 1,
            },
            ticks: {
                beginAtZero: true,
                font: {
                    size: 14,
                    family: 'Jost, sans-serif',
                },
                color: '#8C90A4',
                padding: 10,
                max: 80,
                stepSize: 20,
                callback(label) {
                    return `${label}k`; // Añade una "k" al final de las etiquetas
                },
            },
        },

        x: {
            stacked: true, // Habilita el apilamiento en el eje X
            grid: {
                display: false,
                zeroLineWidth: 0,
                color: 'transparent',
                z: 1,
            },
            ticks: {
                font: {
                    size: 14,
                    family: 'Jost, sans-serif',
                },
                color: '#8C90A4',
            },
        },
    };

    return (
        <DashboardChart
            {...barChart}
            type="bar"
            id="StackedHorizontalBarChart"
            scales={scalesOptions}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true, // Muestra la leyenda
                        position: 'top',
                        labels: {
                            color: '#8C90A4',
                            font: {
                                family: 'Jost, sans-serif',
                            },
                        },
                    },
                    title: {
                        display: true,
                        text: 'Comportamiento del Costo de Alimento Integrado',
                        font: {
                            size: 18,
                            family: 'Jost, sans-serif',
                        },
                        color: '#333',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false,
                },
            }}
            className="stacked-horizontal-bar"
            style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}
        />
    );
}

export default StackedHorizontalBarChart;
