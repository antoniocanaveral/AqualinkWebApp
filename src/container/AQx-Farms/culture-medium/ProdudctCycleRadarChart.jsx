import React from 'react';
import { Radar } from 'react-chartjs-2';

export default function ProductCycleRadarChart({ limeData }) {
    if (!Array.isArray(limeData) || limeData.length === 0) {
        return <p>No hay datos disponibles para mostrar el gráfico.</p>;
    }

    const productos = [...new Set(limeData.map(item => item.producto))]; // Productos únicos
    const ciclos = [...new Set(limeData.map(item => item.ciclo))]; // Ciclos únicos


    const datasets = productos.map((producto, index) => {
        const cantidades = ciclos.map(ciclo => {
            const item = limeData.find(entry => entry.ciclo === ciclo && entry.producto === producto);
            return item ? item.cantidad : 0;
        });

        return {
            label: producto,
            data: cantidades,
            backgroundColor: `rgba(${(index * 50) % 255}, ${(index * 80) % 255}, ${(index * 120) % 255}, 0.4)`, // Colores dinámicos
            borderColor: `rgba(${(index * 50) % 255}, ${(index * 80) % 255}, ${(index * 120) % 255}, 1)`,
            borderWidth: 2,
        };
    });

    const data = {
        labels: ciclos, // Los ciclos serán las etiquetas del eje
        datasets: datasets, // Los datasets están organizados por producto
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            r: {
                ticks: {
                    beginAtZero: true,
                    font: {
                        size: 12,
                    },
                },
                pointLabels: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}>
            <Radar data={data} options={options} />
        </div>
    );
}
