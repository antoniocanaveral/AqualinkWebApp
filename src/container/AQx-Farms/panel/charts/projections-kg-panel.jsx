import React, { useState, useEffect } from "react";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import DashboardChart from "../../../../components/charts/DashboardChart";
import { Button, Skeleton } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import moment from "moment";

const datasetsTemplate = [
    { backgroundColor: '#001737', barPercentage: 0.6, label: '80-100' },
    { backgroundColor: '#1ce1ac', barPercentage: 0.6, label: '70-80' },
    { backgroundColor: '#ff2545', barPercentage: 0.6, label: '60-70' },
    { backgroundColor: '#5324ea', barPercentage: 0.6, label: '50-60' },
    { backgroundColor: '#ec7e00', barPercentage: 0.6, label: '40-50' },
    { backgroundColor: '#0099e6', barPercentage: 0.6, label: '30-40' },
    { backgroundColor: '#ff9f40', barPercentage: 0.6, label: '20-30' },
];

const getClassification = (record) => {
    if (record.SM_Category30_40) return "30-40";
    if (record.SM_Category40_50) return "40-50";
    if (record.SM_Category50_60) return "50-60";
    if (record.SM_Category60_70) return "60-70";
    if (record.SM_Category70_80) return "70-80";
    if (record.SM_Category80_100) return "80-100";
    if (record.SM_Category100_120) return "100-120";
    if (record.SM_Category120_150) return "120-150";
    return null;
};

const ProjectionKgPanel = ({ height, selectedOrg, loading, error, coordinationInfo, type  }) => {
  

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

  

    const groupData = () => {
        if (!coordinationInfo || !Array.isArray(coordinationInfo)) {
            return { categorySums: {}, labels: [] }; // Retorna un objeto vacío si los datos no están listos
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
    
        let processedData = coordinationInfo;

        console.log("ccor", coordinationInfo)
        

        if (type === "FARM") {
            const uniqueRecords = {};
            coordinationInfo.forEach((record) => {
                const identifier = record?.SM_Coordination_ID?.identifier;
                if (identifier && !uniqueRecords[identifier]) {
                    uniqueRecords[identifier] = record; // Guardar solo el primer registro con ese identifier
                }
            });
            processedData = Object.values(uniqueRecords);
        }
    

        const categorySums = {};
        
        processedData.forEach((record) => {
            const classification = getClassification(record);
            if (!classification) return;
    
            const recordDate = moment.utc(record.SM_FishingDate).local();
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
    
            const biomass = parseFloat(record.SM_Biomass) || 0;
            if (!categorySums[classification]) {
                categorySums[classification] = Array(bucketsCount).fill(0);
            }
            categorySums[classification][bucketIndex] += biomass;
        });
    
        return { categorySums, labels };
    };
    
    


    const { categorySums, labels } = groupData();

    const datasets = datasetsTemplate
        .filter((template) => categorySums.hasOwnProperty(template.label))
        .map((template) => ({
            ...template,
            data: categorySums[template.label],
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
        <Cards title="Proyección de Producción" size="large">
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

export default ProjectionKgPanel;
