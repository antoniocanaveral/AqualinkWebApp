
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Cards } from '../../../components/cards/frame/cards-frame';


Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function StimatedProductionChart({ scenarios }) {
    const labels = scenarios.map((_, index) =>
        index === 3 ? 'Escenario Aqualink' : `Escenario ${index + 1}`
    );

    const backgroundColors = scenarios.map((_, index) =>
        index === 3 ? '#4BC0C0' : '#FFCE56' // Color distinto para Escenario Aqualink
    );

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Producción Estimada (lb)',
                data: scenarios.map(s => s.estimated_production_kg),
                backgroundColor: backgroundColors,
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
                    color: '#8C90A4',
                    font: { size: 14, family: 'Jost' },
                    callback: value => value.toFixed(2),
                },
                title: {
                    display: true,
                    text: 'Producción (lb)',
                    color: '#8C90A4',
                    font: { size: 16, family: 'Jost', weight: 'bold' },
                },
            },
            x: {
                ticks: { color: '#8C90A4', font: { size: 14, family: 'Jost' } },
                title: {
                    display: true,
                    text: 'Escenarios',
                    color: '#8C90A4',
                    font: { size: 16, family: 'Jost', weight: 'bold' },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: context => {
                        let label = context.dataset.label || '';
                        if (label) label += ': ';
                        if (context.parsed.y !== null) label += `${context.parsed.y.toFixed(2)} lb`;
                        return label;
                    },
                },
            },
        },
    };

    return (
        <Cards title="Comparativa de Biomasa" size="large" bodyStyle={{ height: '260px' }}>
            <Bar data={data} options={options} />
        </Cards>
    );
}


export default StimatedProductionChart;