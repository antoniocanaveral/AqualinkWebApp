// src/components/charts/StimatedProductionChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Cards } from '../../../components/cards/frame/cards-frame';

// Registrar los componentes necesarios de Chart.js
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function StimatedProductionChart({ scenarios }) {
    // Generar etiquetas para el eje X basadas en los nombres de los escenarios
    const labels = scenarios.map((scenario, index) => `Escenario ${index + 1}`);

    // Preparar los datos para el gráfico
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Producción Estimada (lb)',
                data: scenarios.map(scenario => scenario.estimated_production_lb),
                backgroundColor: '#FFCE56', // Color de las barras
                barPercentage: 0.6,
            },
        ],
    };

    // Configurar las opciones del gráfico
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Permite que el gráfico se adapte al contenedor
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#8C90A4',
                    font: {
                        size: 14,
                        family: 'Jost',
                    },
                    callback: function(value) {
                        return value.toFixed(2); // Mostrar dos decimales
                    },
                },
                title: {
                    display: true,
                    text: 'Producción (lb)',
                    color: '#8C90A4',
                    font: {
                        size: 16,
                        family: 'Jost',
                        weight: 'bold',
                    },
                },
            },
            x: {
                ticks: {
                    color: '#8C90A4',
                    font: {
                        size: 14,
                        family: 'Jost',
                    },
                },
                title: {
                    display: true,
                    text: 'Escenarios',
                    color: '#8C90A4',
                    font: {
                        size: 16,
                        family: 'Jost',
                        weight: 'bold',
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Ocultar la leyenda ya que solo hay un dataset
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += `${context.parsed.y.toFixed(2)} lb`;
                        }
                        return label;
                    }
                }
            }
        },
    };

    return (
        <Cards title="Comparativa de Biomasa" size="large" bodyStyle={{ height: '400px' }}>
            <Bar data={data} options={options} />
        </Cards>
    );
}

export default StimatedProductionChart;