import React, { useState } from "react";
import DashboardChart from "../../../../components/charts/DashboardChart";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { Cards } from "../../../../components/cards/frame/cards-frame";

function ProjectionKgPanel({height}) {
    const [view, setView] = useState("month"); // Estado para cambiar entre "month", "week", "year"

    // Datos para cada vista
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthDatasets = [
        {
            data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
            backgroundColor: '#001737',
            barPercentage: 0.6,
            label: '80-100',
        },
        {
            data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
            backgroundColor: '#1ce1ac',
            barPercentage: 0.6,
            label: '70-80',
        },
        {
            data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
            backgroundColor: '#ff2545',
            barPercentage: 0.6,
            label: '60-70',
        },
        {
            data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
            backgroundColor: '#5324ea',
            barPercentage: 0.6,
            label: '50-60',
        },
        {
            data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
            backgroundColor: '#ec7e00',
            barPercentage: 0.6,
            label: '40-50',
        },
        {
            data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
            backgroundColor: '#0099e6',
            barPercentage: 0.6,
            label: '30-40',
        },
        {
            data: [5, 15, 10, 20, 25, 30, 35, 20, 25, 15, 10, 15],
            backgroundColor: '#ff9f40',
            barPercentage: 0.6,
            label: '20-30',
        },
    ];

    const weekLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    const weekDatasets = [
        {
            data: [50, 70, 60, 80],
            backgroundColor: '#001737',
            barPercentage: 0.6,
            label: '80-100',
        },
        {
            data: [30, 50, 40, 60],
            backgroundColor: '#1ce1ac',
            barPercentage: 0.6,
            label: '70-80',
        },
        {
            data: [40, 60, 50, 70],
            backgroundColor: '#ff2545',
            barPercentage: 0.6,
            label: '60-70',
        },
        {
            data: [25, 35, 30, 45],
            backgroundColor: '#5324ea',
            barPercentage: 0.6,
            label: '50-60',
        },
        {
            data: [20, 30, 25, 35],
            backgroundColor: '#ec7e00',
            barPercentage: 0.6,
            label: '40-50',
        },
        {
            data: [15, 25, 20, 30],
            backgroundColor: '#0099e6',
            barPercentage: 0.6,
            label: '30-40',
        },
        {
            data: [10, 15, 12, 18],
            backgroundColor: '#ff9f40',
            barPercentage: 0.6,
            label: '20-30',
        },
    ];

    const yearLabels = ['2020', '2021', '2022', '2023', '2024'];
    const yearDatasets = [
        {
            data: [200, 250, 300, 350, 400],
            backgroundColor: '#001737',
            barPercentage: 0.6,
            label: '80-100',
        },
        {
            data: [150, 200, 250, 300, 350],
            backgroundColor: '#1ce1ac',
            barPercentage: 0.6,
            label: '70-80',
        },
        {
            data: [180, 230, 280, 330, 380],
            backgroundColor: '#ff2545',
            barPercentage: 0.6,
            label: '60-70',
        },
        {
            data: [120, 170, 220, 270, 320],
            backgroundColor: '#5324ea',
            barPercentage: 0.6,
            label: '50-60',
        },
        {
            data: [100, 150, 200, 250, 300],
            backgroundColor: '#ec7e00',
            barPercentage: 0.6,
            label: '40-50',
        },
        {
            data: [80, 130, 180, 230, 280],
            backgroundColor: '#0099e6',
            barPercentage: 0.6,
            label: '30-40',
        },
        {
            data: [40, 90, 140, 190, 240],
            backgroundColor: '#ff9f40',
            barPercentage: 0.6,
            label: '20-30',
        },
    ];

    let labels = monthLabels;
    let datasets = monthDatasets;

    if (view === "week") {
        labels = weekLabels;
        datasets = weekDatasets;
    } else if (view === "year") {
        labels = yearLabels;
        datasets = yearDatasets;
    }

    const barChart = {
        height: 200,
        labels: labels,
        datasets: datasets,
        legend: {
            display: true,
            labels: {
                display: true,
            },
        },
        scales: {
            y: {
                grid: {
                    color: '#485e9029',
                    borderDash: [3, 3],
                    zeroLineColor: '#485e9029',
                    zeroLineWidth: 1,
                },
                ticks: {
                    beginAtZero: true,
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                    padding: 10,
                    callback(value, index) {
                        return barChart.labels[index]; // Mantiene la lógica original
                    },
                },
            },
            x: {
                grid: {
                    display: false,
                    zeroLineWidth: 0,
                    color: 'transparent',
                    z: 1,
                },
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Jost',
                    fontColor: '#8C90A4',
                },
            },
        },
    };

    return (
        <Cards
            title="Proyecciones de Producción"
            size="large"
        >
            <>
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
                <br/>
                <br/>

                <DashboardChart
                    {...barChart}
                    type="bar"
                    id={`hChart-${Math.random()}`}
                    option={{
                        indexAxis: 'y',
                    }}
                />
            </>

        </Cards>
    );
}

export default ProjectionKgPanel;
