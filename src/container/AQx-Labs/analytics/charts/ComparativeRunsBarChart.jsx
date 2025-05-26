import React from 'react';
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Bar } from 'react-chartjs-2';

function ComparativeRunsBarChart() {
    const data = {
        labels: ['pH', 'Alcalinidad', 'Amonio', 'M. Orgánica', 'Redox', 'Relación C:N'],
        datasets: [
            {
                label: 'Corrida Anterior',
                data: [7.8, 100, 6, 2.0, 10, 12], // Placeholder data for each attribute
                backgroundColor: '#001737',
                barPercentage: 0.6,
            },
            {
                label: 'Corrida Actual',
                data: [8.0, 90, 5, 2.1, 20, 11], // Placeholder data for each attribute
                backgroundColor: '#1ce1ac',
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
        <Cards title="Comparativa de Corrida Anterior y Corrida Actual" size="large">
            <br /><br />
            
            <Bar data={data} options={options} />
        </Cards>
    );
}

export default ComparativeRunsBarChart;
