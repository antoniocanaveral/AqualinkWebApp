
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Cards } from '../../../components/cards/frame/cards-frame';


Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function CostIncomeComparisonChart({ scenarios }) {
    const labels = scenarios.map((_, index) =>
        index === 3 ? 'Escenario Aqualink' : `Escenario ${index + 1}`
    );

    const costColors = scenarios.map((_, index) =>
        index === 3 ? '#FF9F40' : '#FF6384' // Color para Costo de Aqualink
    );

    const incomeColors = scenarios.map((_, index) =>
        index === 3 ? '#9966FF' : '#36A2EB' // Color para Venta de Aqualink
    );

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Costo Estimado (USD)',
                data: scenarios.map(s => s.total_cost),
                backgroundColor: costColors,
                barPercentage: 0.6,
            },
            {
                label: 'Venta Estimada (USD)',
                data: scenarios.map(s => s.total_income),
                backgroundColor: incomeColors,
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
                ticks: { color: '#8C90A4', font: { size: 14, family: 'Jost' } },
                title: {
                    display: true,
                    text: 'Monto (USD)',
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
            legend: {
                display: true,
                position: 'top',
                labels: { color: '#8C90A4', font: { size: 14, family: 'Jost' } },
            },
            tooltip: {
                callbacks: {
                    label: context => {
                        let label = context.dataset.label || '';
                        if (label) label += ': ';
                        if (context.parsed.y !== null) label += `$${context.parsed.y.toFixed(2)}`;
                        return label;
                    },
                },
            },
        },
    };

    return (
        <Cards title="Comparativa de Costo y Venta Estimada" size="large" bodyStyle={{ height: '290px' }}>
            <Bar data={data} options={options} />
        </Cards>
    );
}


export default CostIncomeComparisonChart;
