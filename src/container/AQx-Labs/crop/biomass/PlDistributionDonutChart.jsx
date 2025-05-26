import React from 'react';
import { useSelector } from 'react-redux';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { SalesOverviewStyleWrap2 } from '../../../dashboard/Style';

const PLDistributionDonutChart = () => {
    const { mainContent } = useSelector((state) => ({
        mainContent: state.ChangeLayoutMode.mode,
    }));
    const themeColor = {
        default: { 'white-background': '#ffffff' },

    };


    const labels = ['Lote L001', 'Lote L002', 'Lote L003'];
    const datasets = [
        {
            data: [200, 240, 220],  // Valores de distribución de PL
            backgroundColor: ['#0372CE', '#00AAFF', '#FA8B0C'], // Colores personalizados
            centerText: 'PL',
            centerTextLabel: 'Distribución',
        },
    ];

    const options = {
        cutout: 62,
        borderWidth: 2,
        borderColor: themeColor[mainContent]?.['white-background'] || '#ffffff', // Color de borde con valor predeterminado
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
    };

    const totalPL = datasets[0].data.reduce((a, b) => a + b, 0);

    return (
        <SalesOverviewStyleWrap2>
            <div className="ninjadash-overview-wrap">
                <DoughnutChart
                    type="doughnut"
                    id="plDistributionOverview"
                    labels={labels}
                    datasets={datasets}
                    height={150} // Tamaño de altura
                    width={150}  // Tamaño de ancho
                    option={options}
                    tooltip={{
                        backgroundColor: '#FFF',
                        titleFontSize: 16,
                        titleFontColor: '#0066ff',
                        bodyFontColor: '#000',
                        bodyFontSize: 14,
                        displayColors: false,
                    }}
                />

                <div className="ninjadash-overview-percentage">
                    {datasets[0].data.map((value, index) => {
                        const itemPercent = Math.round((value / totalPL) * 100);
                        return (
                            <div className="ninjadash-overview-percentage__item" key={index}>
                                <span
                                    className="ninjadash-overview-percentage__point"
                                    style={{
                                        backgroundColor: datasets[0].backgroundColor[index],
                                    }}
                                />
                                <span className="ninjadash-overview-percentage__text">{itemPercent}%</span>
                            </div>
                        );
                    })}
                </div>

                <div className="ninjadash-overview-box align-center-v justify-content-between">
                    {datasets[0].data.map((value, index) => (
                        <div className="ninjadash-overview-box-item" key={index}>
                            <h4>{value}</h4>
                            <p>{labels[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SalesOverviewStyleWrap2>
    );
};

export default PLDistributionDonutChart;
