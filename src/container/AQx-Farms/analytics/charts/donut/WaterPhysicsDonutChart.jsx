import { useSelector } from "react-redux";
import DoughnutChart from "../../../../../components/charts/DoughnutChart";
import config from "../../../../../config/config";
import { Cards } from "../../../../../components/cards/frame/cards-frame";
import { Typography } from "antd";



function WaterPhysicsDonutChart() {
    const { mainContent } = useSelector((state) => {
        return {
            mainContent: state.ChangeLayoutMode.mode,
        };
    });
    const { themeColor } = config;
    const chartjsDonutChart = {
        height: 250,
        with: 250,
        labels: ['O2', 'Temperatura', 'Salinidad', 'Ph', 'Salinidad'],
        datasets: [
            {
                data: [20, 20, 30, 5, 25],
                backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
            },
        ],

        option: {
            cutoutPercentage: 70,
            borderColor: themeColor[mainContent]['white-background'],
            maintainAspectRatio: true,
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                    position: 'bottom',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                },
            },
        },
    };


    return (
        <div>
            <DoughnutChart {...chartjsDonutChart} />
            <center>
                <Typography.Text>Parámetros Físicos del Agua</Typography.Text>
            </center>
        </div>

    )
}

export default WaterPhysicsDonutChart