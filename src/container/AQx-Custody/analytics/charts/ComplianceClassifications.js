import DashboardChart from "../../../../components/charts/DashboardChart";



function ComplianceClassifications() {
    const barChart = {
        height: 200,
        labels: ['', '', '', '', '', '', '', '', '', '', '', ''],

        datasets: [
            {
                data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
                backgroundColor: '#001737',
                barPercentage: 0.6,
                label: 'Clasificaciones Proyectadas Pre-Pesca',
            },
            {
                data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
                backgroundColor: '#1ce1ac',
                barPercentage: 0.6,
                label: 'Clasificaciones reales en Planta',
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
                    max: 80,
                    stepSize: 20,
                    padding: 10,
                    callback(label) {
                        return `${label}`;
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
        <DashboardChart {...barChart} type="bar" id={`bChart-${Math.random()}`} className="foo" style={{ marginBottom: '20px' }} />

    )
}

export default ComplianceClassifications