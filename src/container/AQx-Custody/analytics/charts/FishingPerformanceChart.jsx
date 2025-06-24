import React from 'react';
import RadarChartComponent from '../../../../components/charts/radal/RadarChart';

const radarData = [
    { subject: '60-70', Entero: 80, B: 70, Cola: 90 },
    { subject: '70-80', Entero: 78, B: 80, Cola: 90 },
    { subject: "80-100", Entero: 76, B: 80, Cola: 90 },
    { subject: '20-30', Entero: 89, B: 100, Cola: 90 },
    { subject: '30-40', Entero: 89, B: 100, Cola: 90 },
    { subject: '40-50', Entero: 65, B: 70, Cola: 90 },
    { subject: '50-60', Entero: 55, B: 45, Cola: 90 },
];

function FishingPerformanceChart() {
    return (
        <div style={{ width: "100%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
            <RadarChartComponent
                data={radarData}
                dataKey1="Entero"
                dataKey2="Cola"
            />
        </div>
    );
}

export default FishingPerformanceChart;
