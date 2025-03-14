import React, { useState } from "react";
import DashboardChart from "../../../../components/charts/DashboardChart";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { Cards } from "../../../../components/cards/frame/cards-frame";

function ProjectionKgLabs({ height }) {
    const [view, setView] = useState("month");

    const labelsData = {
        month: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        week: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        year: ['2020', '2021', '2022', '2023', '2024'],
    };

    const datasetsData = {
        month: [
            { label: '200', data: [20, 40, 60, 80, 50, 30, 40, 70, 60, 50, 40, 30], backgroundColor: '#ff6384' },
            { label: '220', data: [30, 50, 70, 90, 60, 40, 50, 80, 70, 60, 50, 40], backgroundColor: '#36a2eb' },
            { label: '240', data: [25, 45, 65, 85, 55, 35, 45, 75, 65, 55, 45, 35], backgroundColor: '#cc65fe' },
            { label: '260', data: [35, 55, 75, 95, 65, 45, 55, 85, 75, 65, 55, 45], backgroundColor: '#ffce56' },
        ],
        week: [
            { label: '200', data: [50, 60, 70, 80], backgroundColor: '#ff6384' },
            { label: '220', data: [40, 50, 60, 70], backgroundColor: '#36a2eb' },
            { label: '240', data: [30, 40, 50, 60], backgroundColor: '#cc65fe' },
            { label: '260', data: [20, 30, 40, 50], backgroundColor: '#ffce56' },
        ],
        year: [
            { label: '200', data: [200, 220, 240, 260, 280], backgroundColor: '#ff6384' },
            { label: '220', data: [210, 230, 250, 270, 290], backgroundColor: '#36a2eb' },
            { label: '240', data: [220, 240, 260, 280, 300], backgroundColor: '#cc65fe' },
            { label: '260', data: [230, 250, 270, 290, 310], backgroundColor: '#ffce56' },
        ],
    };

    const labels = labelsData[view];
    const datasets = datasetsData[view];

    const barChart = {
        height: height || 200,
        labels: labels,
        datasets: datasets,
        legend: {
            display: true,
            labels: {
                fontColor: '#8C90A4',
            },
        },
        scales: {
            y: {
                grid: {
                    color: '#485e9029',
                    borderDash: [3, 3],
                },
                ticks: {
                    beginAtZero: true,
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                },
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                },
            },
        },
    };

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
            <br />
            <DashboardChart
                {...barChart}
                type="bar"
                id={`projection-chart-${Math.random()}`}
                style={{ marginBottom: '20px' }}
            />
        </Cards>
    );
}

export default ProjectionKgLabs;
