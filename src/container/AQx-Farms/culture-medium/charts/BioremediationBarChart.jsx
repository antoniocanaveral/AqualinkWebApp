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
        '#FF4136', // Rojo
        '#FF851B', // Naranja
        '#FFDC00', // Amarillo
        '#2ECC40', // Verde
        '#B10DC9', // Púrpura
    ];

    const colors = generateColorScale();

    // Extract unique bacteria types
    const bacteriaTypes = [...new Set(data.flatMap(item => Object.keys(item.bacteriaData)))];

    // Create datasets for each bacteria type
    const datasets = bacteriaTypes.map((bacteria, index) => ({
        label: bacteria,
        data: data.map(item => item.bacteriaData[bacteria] || 0),
        backgroundColor: colors[index % colors.length],
        barPercentage: 0.6 / bacteriaTypes.length, // Adjust bar width based on number of bacteria
        categoryPercentage: 0.8,
    }));

    const chartData = {
        labels: data.map(item => item.semana), // Semanas del año
        datasets,
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                stacked: true, // Enable stacking for y-axis
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
                stacked: true, // Enable stacking for x-axis
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