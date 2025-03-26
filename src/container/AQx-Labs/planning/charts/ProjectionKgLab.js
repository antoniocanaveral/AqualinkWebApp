import React, { useState } from "react";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import DashboardChart from "../../../../components/charts/DashboardChart";
import { Button, Skeleton } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import moment from "moment";

// Paleta de colores para las barras (se asignan según el orden de la clasificación)
const colorPalette = [
  "#001737",
  "#1ce1ac",
  "#ff2545",
  "#5324ea",
  "#ec7e00",
  "#0099e6",
  "#ff9f40",
  "#8a2be2",
  "#ff4500",
];

const ProjectionPlPanel = ({ height, selectedOrg, loading, error, coordinationInfo, type }) => {
  const [view, setView] = useState("month");

  const currentDate = moment();
  const currentYear = currentDate.year();
  const currentMonth = currentDate.format("MMMM YYYY");
  const currentWeekStart = currentDate.clone().startOf("week");
  const currentWeekEnd = currentDate.clone().endOf("week");

  const weekLabels = Array.from({ length: 7 }, (_, i) =>
    currentWeekStart.clone().add(i, "days").format("dddd D")
  );
  const monthLabels = Array.from({ length: 4 }, (_, i) => {
    const weekStart = currentDate.clone().startOf("month").add(i * 7, "days");
    return `Semana ${i + 1} (${weekStart.format("D MMM")})`;
  });
  const yearLabels = Array.from({ length: 12 }, (_, i) =>
    currentDate.clone().month(i).format("MMMM")
  );

  // Función para agrupar los datos
  const groupData = () => {
    if (!coordinationInfo || !Array.isArray(coordinationInfo)) {
      return { categorySums: {}, labels: [] };
    }

    let bucketsCount = 0;
    let labels = [];
    if (view === "week") {
      bucketsCount = 7;
      labels = weekLabels;
    } else if (view === "month") {
      bucketsCount = 4;
      labels = monthLabels;
    } else if (view === "year") {
      bucketsCount = 12;
      labels = yearLabels;
    }

    // Se recorre cada registro (por ejemplo, cada lablote) que contenga coordinations_json
    let processedData = [];
    coordinationInfo.forEach(record => {
      if (record.coordinations_json && Array.isArray(record.coordinations_json) && record.coordinations_json.length > 0) {
        record.coordinations_json.forEach(coord => {
          processedData.push({
            created: coord.created,
            // La clasificación se toma de sm_preliminarylaboratorycount
            classification: coord.sm_preliminarylaboratorycount,
            // El valor de la barra es sm_density (convertido a número)
            density: parseFloat(coord.sm_density) || 0,
          });
        });
      }
    });

    // Opcional: si el tipo es "FARM" se puede aplicar un filtro para registros únicos (similar al ejemplo original)
    if (type === "FARM") {
      const uniqueRecords = {};
      processedData.forEach(record => {
        // Puedes definir la llave única según algún identificador (por ejemplo, la fecha + clasificación)
        const key = `${record.created}-${record.classification}`;
        if (!uniqueRecords[key]) {
          uniqueRecords[key] = record;
        }
      });
      processedData = Object.values(uniqueRecords);
    }

    // Se acumulan los valores (density) en buckets de tiempo por cada clasificación
    const categorySums = {};
    processedData.forEach(record => {
      const recordDate = moment.utc(record.created).local();
      let bucketIndex = -1;
      if (view === "week") {
        if (recordDate.isBetween(currentWeekStart, currentWeekEnd, null, "[]")) {
          bucketIndex = recordDate.diff(currentWeekStart, "days");
        }
      } else if (view === "month") {
        if (recordDate.month() === currentDate.month() && recordDate.year() === currentDate.year()) {
          bucketIndex = Math.floor((recordDate.date() - 1) / 7);
        }
      } else if (view === "year") {
        if (recordDate.year() === currentYear) {
          bucketIndex = recordDate.month();
        }
      }
      if (bucketIndex < 0 || bucketIndex >= bucketsCount) return;

      // Se convierte la clasificación a cadena para usarla como key
      const classification = record.classification ? record.classification.toString() : "Unknown";
      if (!categorySums[classification]) {
        categorySums[classification] = Array(bucketsCount).fill(0);
      }
      categorySums[classification][bucketIndex] += record.density;
    });

    return { categorySums, labels };
  };

  const { categorySums, labels } = groupData();

  // Se ordenan las clasificaciones (por ejemplo, numéricamente)
  const sortedCategories = Object.keys(categorySums).sort((a, b) => parseInt(a) - parseInt(b));
  const datasets = sortedCategories.map((category, index) => ({
    backgroundColor: colorPalette[index % colorPalette.length],
    barPercentage: 0.6,
    label: category,
    data: categorySums[category],
  }));

  let title = "";
  if (view === "week") {
    title = `Semana del ${currentWeekStart.format("D MMMM")} al ${currentWeekEnd.format("D MMMM YYYY")}`;
  } else if (view === "month") {
    title = `Mes de ${currentMonth}`;
  } else if (view === "year") {
    title = `Año ${currentYear}`;
  }

  const barChart = {
    height: height || 200,
    labels: labels,
    datasets: datasets,
    legend: { display: true, labels: { display: true } },
    scales: {
      y: {
        grid: { color: "#485e9029", borderDash: [3, 3], zeroLineColor: "#485e9029", zeroLineWidth: 1 },
        ticks: { beginAtZero: true, fontSize: 14, fontFamily: "Jost", color: "#8C90A4", padding: 10 },
      },
      x: {
        grid: { display: false, zeroLineWidth: 0, color: "transparent", z: 1 },
        ticks: { fontSize: 14, fontFamily: "Jost", color: "#8C90A4" },
      },
    },
  };

  if (loading) return <Cards headless><Skeleton active /></Cards>;
  if (error) return <p>Error cargando los datos del gráfico.</p>;

  return (
    <Cards title="Proyección de PL/gr" size="large">
      <center>
        <ButtonGroup>
          <Button type={view === "month" ? "primary" : "default"} onClick={() => setView("month")}>
            Mes
          </Button>
          <Button type={view === "week" ? "primary" : "default"} onClick={() => setView("week")}>
            Semana
          </Button>
          <Button type={view === "year" ? "primary" : "default"} onClick={() => setView("year")}>
            Año
          </Button>
        </ButtonGroup>
      </center>
      <br /><br />
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <DashboardChart
        {...barChart}
        type="bar"
        id={`chart-${Math.random()}`}
        option={{ indexAxis: "y" }}
      />
    </Cards>
  );
};

export default ProjectionPlPanel;
