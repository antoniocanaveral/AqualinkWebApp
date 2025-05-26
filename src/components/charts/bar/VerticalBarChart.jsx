import PropTypes from "prop-types";
import DashboardChart from "../DashboardChart";

function VerticalBarChart({
    labels,
    datasets,
    barColor = '#fa8b0c',
    width = 400,
    height = 200,
    id,
    className = "",
    style = {}
}) {
    const barChart = {
        labels: labels,
        datasets: datasets.map(dataset => ({
            ...dataset,
            backgroundColor: dataset.backgroundColor ,
            barPercentage: dataset.barPercentage || 0.6,
        })),
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
                    color: '#8C90A4',
                },
            },
        },
    };

    return (
        <div style={{backgroundColor:"white" }}>
            <DashboardChart
                {...barChart}
                type="bar"
                id={id || `bChart-${Math.random()}`}
                className={className}
                style={style}
                width={width}
                height={height}
            />
        </div>
    );
}

VerticalBarChart.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.arrayOf(PropTypes.number).isRequired,
            backgroundColor: PropTypes.string,
            label: PropTypes.string,
            barPercentage: PropTypes.number,
        })
    ).isRequired,
    barColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default VerticalBarChart;
