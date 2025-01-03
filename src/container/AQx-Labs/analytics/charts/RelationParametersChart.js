import DashboardChart from "../../../../components/charts/DashboardChart";

function RelationParametersChart() {
    const barChart = {
        height: 200,
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8', 'Semana 9', 'Semana 10', 'Semana 11', 'Semana 12'],

        datasets: [
            {
                data: [10, 25, 30, 40, 55, 60, 45, 35, 50, 65, 70, 80],
                backgroundColor: '#001737',
                barPercentage: 0.6,
                label: 'PL10',
            },
            {
                data: [15, 20, 35, 50, 45, 70, 60, 55, 40, 75, 65, 85],
                backgroundColor: '#1ce1ac',
                barPercentage: 0.6,
                label: 'PL12',
            },
            {
                data: [12, 30, 45, 55, 50, 65, 70, 60, 55, 85, 75, 90],
                backgroundColor: '#FF5733',
                barPercentage: 0.6,
                label: 'PL14',
            },
            {
                data: [8, 18, 25, 35, 40, 50, 60, 70, 65, 75, 85, 95],
                backgroundColor: '#33C3FF',
                barPercentage: 0.6,
                label: 'PL16',
            },
        ],
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
                    max: 100,
                    stepSize: 20,
                    padding: 10,
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
        <DashboardChart {...barChart} type="bar" id={`bChart-${Math.random()}`} className="relation-parameters-chart" style={{ marginBottom: '20px' }} />
    );
}

export default RelationParametersChart;
