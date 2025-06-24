import React from 'react';
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Bar } from 'react-chartjs-2';

function PCEfficiencyComparisonChart() {
    const data = {
        labels: ['Lote L001 - PC 10', 'Lote L002 - PC 12'], // Etiquetas para cada PC
        datasets: [
            {
                label: 'Peso Promedio (g)',
                data: [200, 250], // Datos de peso promedio para cada PC
                backgroundColor: '#001737',
                barPercentage: 0.6,
            },
            {
                label: 'Peso Total Transferido (kg)',
                data: [200, 300], // Datos de peso total transferido para cada PC
                backgroundColor: '#1ce1ac',
                barPercentage: 0.6,
            },
            {
                label: 'Población Estimada',
                data: [1000, 1200], // Datos de población estimada para cada PC
                backgroundColor: '#FF6384',
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
            },
            x: {
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
            },
        },
    };

    return (
        <Cards title="Comparativa de Eficiencia entre PCs" size="large">
            <Bar data={data} options={options} />
        </Cards>
    );
}

export default PCEfficiencyComparisonChart;
