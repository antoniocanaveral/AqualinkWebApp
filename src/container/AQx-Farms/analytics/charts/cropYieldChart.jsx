import React from 'react';
import RadarChartComponent from '../../../../components/charts/radal/RadarChart';

const radarData = [
    { subject: 'Medio de Cultivo', A: 80, B: 70, fullMark: 90 },
    { subject: 'Supervivencia', A: 78, B: 80, fullMark: 90 },
    { subject: 'ADG', A: 76, B: 80, fullMark: 90 },
    { subject: 'MBW', A: 89, B: 100, fullMark: 90 },
    { subject: 'Biomecánica', A: 89, B: 100, fullMark: 90 },
    { subject: 'Clasificación', A: 65, B: 70, fullMark: 90 },
    { subject: 'FCA', A: 55, B: 45, fullMark: 90 },
];

function CropYieldChart() {
    return (
        <div style={{ width: "100%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
            <RadarChartComponent
                data={radarData}
                dataKey1="A"
                dataKey2="B"
            />
        </div>
    );
}

export default CropYieldChart;
