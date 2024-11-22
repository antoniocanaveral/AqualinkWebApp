import React from 'react';
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Bar } from 'react-chartjs-2';

export default function ProductCycleBarChart({ limeData }) {
  console.log(limeData);

  // Verifica que limeData esté definido y sea un array
  if (!Array.isArray(limeData) || limeData.length === 0) {
      return <p>No hay datos disponibles para mostrar el gráfico.</p>;
  }

  const ciclos = [...new Set(limeData.map(item => item.ciclo))]; // Obtener los ciclos únicos
  const productos = [...new Set(limeData.map(item => item.producto))]; // Obtener los productos únicos

  // Paleta de colores armónica (tonos azules y verdes)
  const colorPalette = [
      "#4A90E2", // Azul
      "#50E3C2", // Verde agua
      "#B8E986", // Verde claro
      "#417505", // Verde oscuro
      "#F5A623", // Naranja suave
  ];

  const datasets = productos.map((producto, index) => ({
      label: producto,
      data: ciclos.map(ciclo => {
          const item = limeData.find(entry => entry.ciclo === ciclo && entry.producto === producto);
          return item ? item.cantidad : 0; // Cantidad o 0 si no hay datos
      }),
      backgroundColor: colorPalette[index % colorPalette.length], // Usar colores de la paleta
      barPercentage: 0.6,
  }));

  const data = {
      labels: ciclos, // Ciclos como etiquetas
      datasets: datasets, // Conjuntos de datos organizados por productos
  };

  const options = {
      responsive: true,
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
      <Cards title="Cantidad de Productos por Ciclo" size="large">
          <Bar data={data} options={options} />
      </Cards>
  );
}
