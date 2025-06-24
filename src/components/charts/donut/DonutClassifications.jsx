import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";
import PropTypes from "prop-types";
import config from "../../../config/config";
import DoughnutChart from "../DoughnutChart";

function DonutClassifications({
    labels = [],
    data = [],
    backgroundColors = [],
    chartHeight = 250,
    chartWidth = 250,
    title = "Parámetros Físicos del Agua"
}) {
    const { mainContent } = useSelector((state) => ({
        mainContent: state.ChangeLayoutMode.mode,
    }));
    const { themeColor } = config;


    const chartjsDonutChart = {
        height: chartHeight,
        width: chartWidth,
        labels, // Se toma de las props
        datasets: [
            {
                data, // Se toma de las props
                backgroundColor: backgroundColors, // Se toma de las props
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
                <Typography.Text>{title}</Typography.Text>
            </center>
        </div>
    );
}


DonutClassifications.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.number),
    backgroundColors: PropTypes.arrayOf(PropTypes.string),
    chartHeight: PropTypes.number,
    chartWidth: PropTypes.number,
    title: PropTypes.string,
};


DonutClassifications.defaultProps = {
    labels: ['O2', 'Temperatura', 'Salinidad', 'Ph', 'Salinidad'],
    data: [20, 20, 30, 5, 25],
    backgroundColors: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
    chartHeight: 250,
    chartWidth: 250,
    title: "Parámetros Físicos del Agua",
};

export default DonutClassifications;
