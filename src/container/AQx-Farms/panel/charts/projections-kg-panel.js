import { Cards } from "../../../../components/cards/frame/cards-frame";
import DashboardChart from "../../../../components/charts/DashboardChart";

function ProjectionKgPanel() {
    const barChart = {
        height: 200,
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
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
        ],
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
                        // Devuelve el mes correspondiente al índice
                        return barChart.labels[index];
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
        <Cards title="Proyecciones de Producción" size="large">
            <DashboardChart
                {...barChart}
                type="bar"
                id={`hChart-${Math.random()}`}
                option={{
                    indexAxis: 'y',
                }}
            />
        </Cards>
    );
}

export default ProjectionKgPanel;
