import React from 'react';
import { useSelector } from 'react-redux';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { SalesOverviewStyleWrap2 } from '../../../dashboard/Style';

const PreCriaVolumeDonutChart = () => {
    const { mainContent } = useSelector((state) => ({
        mainContent: state.ChangeLayoutMode.mode,
    }));
    const themeColor = {
        default: { 'white-background': '#ffffff' },

    };

    const labels = ['Pre Cría 1', 'Pre Cría 2', 'Pre Cría 3'];
    const datasets = [
        {
            data: [35, 45, 20],  // Volumen de cada pre cría en porcentaje
            backgroundColor: ['#0372CE', '#00AAFF', '#FA8B0C'], // Colores personalizados
            centerText: 'Pre Crías',
            centerTextLabel: 'Volumen',
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

    const totalVolume = datasets[0].data.reduce((a, b) => a + b, 0);

    return (
        <SalesOverviewStyleWrap2>
            <div className="ninjadash-overview-wrap">
                <DoughnutChart
                    type="doughnut"
                    id="precriaVolumeOverview"
                    labels={labels}
                    datasets={datasets}
                    height={150} // Reduce el tamaño de altura
                    width={150}  // Reduce el tamaño de ancho
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
                        const itemPercent = Math.round((value / totalVolume) * 100);
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
                            <h4>{value}%</h4>
                            <p>{labels[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SalesOverviewStyleWrap2>
    );
};

export default PreCriaVolumeDonutChart;
