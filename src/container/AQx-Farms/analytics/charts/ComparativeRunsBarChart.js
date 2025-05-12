import React from "react";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

function ComparativeRunsBarChart() {
  const { chemicalSoilParams } = useSelector(state => state.chemicalSoil);

  if (!chemicalSoilParams || chemicalSoilParams.length === 0) {
    return (
      <Cards title="Comparativa de Corrida Anterior y Corrida Actual" size="large">
        <p style={{ textAlign: "center" }}>No hay datos disponibles.</p>
      </Cards>
    );
  }

  // Sort records by ci_planneddate in descending order to get the most recent first
  const sortedParams = [...chemicalSoilParams].sort((a, b) => 
    new Date(b.ci_planneddate) - new Date(a.ci_planneddate)
  );

  // Get the most recent record (current run)
  const currentRun = sortedParams[0];

  // Get the previous run with a different batch
  const previousRun = sortedParams.find(
    (item) => item.SM_Batch !== currentRun.SM_Batch && item.ci_planneddate < currentRun.ci_planneddate
  );

  const data = {
    labels: ["pH", "Alcalinidad", "Amonio", "M. Orgánica"],
    datasets: [
      {
        label: "Corrida Actual",
        data: [
          currentRun.ph,
          currentRun.alcalinidad,
          currentRun.amonio,
          currentRun.materia_organica,
        ],
        backgroundColor: "#1ce1ac",
        barPercentage: previousRun ? 0.6 : 0.8, // Adjust bar width if only one dataset
      },
    ],
  };

  // Add previous run data if available
  if (previousRun) {
    data.datasets.unshift({
      label: "Corrida Anterior",
      data: [
        previousRun.ph,
        previousRun.alcalinidad,
        previousRun.amonio,
        previousRun.materia_organica,
      ],
      backgroundColor: "#001737",
      barPercentage: 0.6,
    });
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          fontSize: 14,
          fontFamily: "Jost",
          color: "#8C90A4",
        },
      },
      x: {
        ticks: {
          fontSize: 14,
          fontFamily: "Jost",
          color: "#8C90A4",
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
      <br />
      <br />
      <Bar data={data} options={options} />
    </Cards>
  );
}

export default ComparativeRunsBarChart;