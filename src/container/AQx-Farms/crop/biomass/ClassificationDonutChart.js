import React from 'react';
import PropTypes from 'prop-types';
import DoughnutChart from '../../../../components/charts/DoughnutChart';
import { SalesOverviewStyleWrap2 } from '../../../dashboard/Style';

const ClassificationDonutChart = ({ data }) => {
    const themeColor = {
        default: { 'white-background': '#ffffff' },
    };

    // Sumar los porcentajes por clasificación y aplicar colores
    const classificationSums = data.map(item => {
        const sum = data
            .filter(d => d.clasificacion === item.clasificacion)
            .reduce((acc, d) => acc + parseFloat(d.porcentaje) || 0, 0);

        // Redondear a dos decimales
        const roundedSum = parseFloat(sum.toFixed(2));

        return { label: item.clasificacion, value: roundedSum, color: item.color };
    }).filter((value, index, self) =>
        index === self.findIndex((t) => t.label === value.label)
    );

    // Configurar etiquetas y valores para el gráfico de dona
    const labels = classificationSums.map(item => item.label);
    const datasetValues = classificationSums.map(item => item.value);
    const backgroundColors = classificationSums.map(item => item.color);

    const datasets = [
        {
            data: datasetValues,
            backgroundColor: backgroundColors,
            centerText: 'Clasificación',
            centerTextLabel: '',
        },
    ];

    const centerTextStyle = {
        fontSize: '1px',  // Cambia el tamaño del texto central
        fontWeight: 'bold', 
        color: '#333',
    };

    const options = {
        cutout: 62,
        borderWidth: 2,
        borderColor: themeColor.default['white-background'],
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
            legend: {
                display: false,
            },
            // Plugin personalizado para texto central
            beforeDraw: (chart) => {
                const ctx = chart.ctx;
                ctx.save();
                const centerX = chart.getDatasetMeta(0).data[0].x;
                const centerY = chart.getDatasetMeta(0).data[0].y;
    
                ctx.font = 'bold 12px Arial'; // Ajusta el tamaño y estilo de la fuente aquí
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#333'; // Color del texto
                ctx.fillText('Clasificación', centerX, centerY - 10); // Texto principal
                ctx.font = '10px Arial';
                ctx.fillText('', centerX, centerY + 10); // Texto secundario
                ctx.restore();
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
    };
    

    const totalPercentage = datasetValues.reduce((a, b) => a + b, 0);

    return (
        <SalesOverviewStyleWrap2>
            <div className="ninjadash-overview-wrap" style={{ fontSize: '12px', textAlign: 'center' }}>
                <DoughnutChart
                    type="doughnut"
                    id="classificationOverview"
                    labels={labels}
                    datasets={datasets}
                    height={150}
                    width={150}
                    option={options}
                    centerTextStyles={centerTextStyle}
                    tooltip={{
                        backgroundColor: '#FFF',
                        titleFontSize: 10,
                        titleFontColor: '#0066ff',
                        bodyFontColor: '#000',
                        bodyFontSize: 8,
                        displayColors: false,
                    }}
                />

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px', fontSize: '12px', marginTop: '10px' }}>
                    {datasets[0].data.map((value, index) => {
                        const itemPercent = Math.round((value / totalPercentage) * 100);
                        return (
                            <div key={index} style={{ textAlign: 'center', width: '40px' }}>
                                <span
                                    style={{
                                        display: 'block',
                                        width: '8px',
                                        height: '8px',
                                        backgroundColor: datasets[0].backgroundColor[index],
                                        borderRadius: '50%',
                                        margin: '0 auto 2px',
                                    }}
                                />
                                <span>{itemPercent}%</span>
                            </div>
                        );
                    })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                    {datasets[0].data.map((value, index) => (
                        <div key={index} style={{ textAlign: 'center', fontSize: '10px' }}>
                            <h4 style={{ fontSize: '14px', margin: '0' }}>{value}%</h4>
                            <p style={{ fontSize: '12px', margin: '0' }}>{labels[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SalesOverviewStyleWrap2>
    );
};

ClassificationDonutChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        clasificacion: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        pesoEspecifico: PropTypes.number.isRequired,
        muestra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        pesoTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        porcentaje: PropTypes.string,
    })).isRequired,
};

export default ClassificationDonutChart;
