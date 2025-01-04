import React from 'react';
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Bar } from 'react-chartjs-2';

export default function WeeklyGroupedBarChart({ dataSource, height = 300 }) { // Altura por defecto: 400px
  if (!Array.isArray(dataSource) || dataSource.length === 0) {
    return <p>No hay datos disponibles para mostrar el gráfico.</p>;
  }

  // Agrupar los datos por semanas
  const weeks = [];
  for (let i = 0; i < dataSource.length; i += 7) {
    weeks.push(dataSource.slice(i, i + 7)); // Cada semana contiene 7 días
  }

  // Procesar los datos agrupados por semanas
  const categories = ["Balanceado", "Agua", "Otros", "Indirectos"];
  const weeklyData = weeks.map((week) => {
    const balanceado = week.reduce((total, day) => total + day.alimentoBalanceado, 0);
    const agua = week.reduce((total, day) => total + day.agua, 0);
    const otros = week.reduce(
      (total, day) =>
        total +
        day.acidosOrganicos +
        day.aditivos +
        day.vitaminas +
        day.mineralesCalcicos +
        day.desparasitantes +
        day.fertilizantes +
        day.medicados +
        day.bacteriaEnzimas,
      0
    );
    const indirectos = week.reduce(
      (total, day) =>
        total +
        (day.alimentoBalanceado +
          day.acidosOrganicos +
          day.aditivos +
          day.vitaminas +
          day.mineralesCalcicos +
          day.desparasitantes +
          day.fertilizantes +
          day.medicados +
          day.bacteriaEnzimas +
          day.agua),
      0
    );

    return { balanceado, agua, otros, indirectos };
  });

  // Configuración de los datasets para el gráfico
  const datasets = categories.map((category, index) => ({
    label: category,
    data: weeklyData.map((week) => week[category.toLowerCase()]),
    backgroundColor: [
      "#4A90E2", // Balanceado - Azul
      "#50E3C2", // Agua - Verde agua
      "#B8E986", // Otros - Verde claro
      "#F5A623", // Indirectos - Naranja
    ][index],
    barPercentage: 0.6,
  }));

  // Configuración de los datos y opciones del gráfico
  const data = {
    labels: weeks.map((_, i) => `Semana ${i + 1}`),
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permitir personalizar el tamaño
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
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <Cards title="Costos Agrupados por Semana" size="large">
      <div style={{ height: `${height}px` }}> {/* Aplicar la altura dinámica */}
        <Bar data={data} options={options} />
      </div>
    </Cards>
  );
}
