import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Cards } from "../../../../components/cards/frame/cards-frame";

function BioremediationBarChart({ data, height }) {

    const generateColorScale = () => [
        '#001F3F', // Azul oscuro
        '#0074D9', // Azul medio
        '#7FDBFF', // Azul claro
        '#39CCCC', // Azul verdoso
        '#3D9970', // Verde azulado
    ];

    const colors = generateColorScale();

    const chartData = {
        labels: data.map(item => item.semana), // Semanas del año
        datasets: [
            {
                label: 'Cantidad de Bacterias Aplicadas (kg)',
                data: data.map(item => item.cantidadBacterias), // Datos de bacterias aplicadas
                backgroundColor: data.map((_, index) => colors[index % colors.length]), // Alternar colores
                barPercentage: 0.6,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                },
                title: {
                    display: true,
                    text: 'Cantidad de Bacterias (kg)',
                    font: { size: 16, family: 'Jost' },
                },
            },
            x: {
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                },
                title: {
                    display: true,
                    text: 'Semanas del Año',
                    font: { size: 16, family: 'Jost' },
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: { family: 'Jost', size: 14 },
                },
            },
        },
        maintainAspectRatio: false, // Necesario para permitir el control dinámico de la altura
    };

    return (
        <Cards title="Comparativo de Uso de Biorremediación por Ciclos" size="large">
            <Bar 
                data={chartData} 
                options={options} 
                height={height} // Altura dinámica proporcionada desde el padre
            />
        </Cards>
    );
}

export default BioremediationBarChart;
