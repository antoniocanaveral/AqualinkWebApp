import { useSelector } from "react-redux";
import DoughnutChart from "../../../../../components/charts/DoughnutChart";
import config from "../../../../../config/config";
import { Cards } from "../../../../../components/cards/frame/cards-frame";



function WaterPhysicsDonutChart() {
    const { mainContent } = useSelector((state) => {
        return {
            mainContent: state.ChangeLayoutMode.mode,
        };
    });
    const { themeColor } = config;
    const chartjsDonutChart = {
        height: 150,
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
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
        <Cards title="Físicos Agua" size="large">
            <DoughnutChart {...chartjsDonutChart} />
        </Cards>

    )
}

export default WaterPhysicsDonutChart