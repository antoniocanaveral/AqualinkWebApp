import React from 'react';
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ComparativePerformanceBarChart({ cosechas }) {
    console.log("Datos recibidos:", cosechas);


    const labels = ["CICLO 1", "CICLO 2", "CICLO 3", "CICLO 4", "CICLO 5"];


    const limpiarValor = (valor) => {
        if (typeof valor === "string") {
            return parseFloat(valor.replace("%", "")) || 0;
        }
        return valor || 0;
    };


    const cosechasProcesadas = Array.from({ length: 5 }, (_, i) => ({
        variacionProyVsCoord: limpiarValor(cosechas.find(c => c.key === "variacion")?.[`cosecha${i + 1}`]),
        cumplimientoCosecha: limpiarValor(cosechas.find(c => c.key === "variacion")?.[`cosecha${i + 1}`]),
        rendimientoPlanta: limpiarValor(cosechas.find(c => c.key === "eficiencia_planta")?.[`cosecha${i + 1}`]),
    }));

    console.log("Cosechas procesadas:", cosechasProcesadas);


    const data = {
        labels,
        datasets: [
            {
                label: "Variación Proy vs Coordinado",
                data: cosechasProcesadas.map(cosecha => cosecha.variacionProyVsCoord),
                backgroundColor: '#4285F4',
                barPercentage: 0.6,
            },
            {
                label: "Cumplimiento en Cosecha",
                data: cosechasProcesadas.map(cosecha => cosecha.cumplimientoCosecha),
                backgroundColor: '#EA4335',
                barPercentage: 0.6,
            },
            {
                label: "Rendimiento en Planta",
                data: cosechasProcesadas.map(cosecha => cosecha.rendimientoPlanta),
                backgroundColor: '#FBBC05',
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
                max: 100, // Suponiendo que el máximo es 100%
                ticks: {
                    font: {
                        size: 14,
                        family: 'Jost',
                    },
                    color: '#8C90A4',
                    padding: 10,
                },
                grid: {
                    color: '#485e9029',
                    borderDash: [3, 3],
                },
            },
            x: {
                ticks: {
                    font: {
                        size: 14,
                        family: 'Jost',
                    },
                    color: '#8C90A4',
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#8C90A4',
                    font: {
                        size: 14,
                        family: 'Jost',
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.dataset.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}%`;
                    },
                },
            },
        },
    };

    return (
        <Cards title="Comparación Performance" size="large">
            <div style={{ position: 'relative', height: '300px' }}>
                <Bar data={data} options={options} />
            </div>
        </Cards>
    );
}

export default ComparativePerformanceBarChart;
