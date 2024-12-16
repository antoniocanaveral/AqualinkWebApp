import React from 'react';
import LineChartWithXAxisPadding from '../../../components/charts/line/LineChartWithXAxisPadding';

function ProductionProjectionPerMonth() {
    const exampleData = [
        {
            name: 'Enero',
            'Proyectado de Producción por Clasificación por Mes': 4000,
            'Proyectado Asociado de Costo de Alimento': 2400
        },
        {
            name: 'Febrero',
            'Proyectado de Producción por Clasificación por Mes': 3000,
            'Proyectado Asociado de Costo de Alimento': 1398
        },
        {
            name: 'Marzo',
            'Proyectado de Producción por Clasificación por Mes': 2000,
            'Proyectado Asociado de Costo de Alimento': 9800
        },
        {
            name: 'Abril',
            'Proyectado de Producción por Clasificación por Mes': 2780,
            'Proyectado Asociado de Costo de Alimento': 3908
        },
        {
            name: 'Mayo',
            'Proyectado de Producción por Clasificación por Mes': 1890,
            'Proyectado Asociado de Costo de Alimento': 4800
        },
        {
            name: 'Junio',
            'Proyectado de Producción por Clasificación por Mes': 2390,
            'Proyectado Asociado de Costo de Alimento': 3800
        },
        {
            name: 'Julio',
            'Proyectado de Producción por Clasificación por Mes': 3490,
            'Proyectado Asociado de Costo de Alimento': 4300
        },
        {
            name: 'Agosto',
            'Proyectado de Producción por Clasificación por Mes': 4000,
            'Proyectado Asociado de Costo de Alimento': 2400
        },
        {
            name: 'Septiembre',
            'Proyectado de Producción por Clasificación por Mes': 3000,
            'Proyectado Asociado de Costo de Alimento': 1398
        },
        {
            name: 'Octubre',
            'Proyectado de Producción por Clasificación por Mes': 2000,
            'Proyectado Asociado de Costo de Alimento': 9800
        },
        {
            name: 'Noviembre',
            'Proyectado de Producción por Clasificación por Mes': 2780,
            'Proyectado Asociado de Costo de Alimento': 3908
        },
        {
            name: 'Diciembre',
            'Proyectado de Producción por Clasificación por Mes': 1890,
            'Proyectado Asociado de Costo de Alimento': 4800
        },
    ];

    return (
        <div style={{ width: "100%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
            <LineChartWithXAxisPadding data={exampleData} height={350} width={"100%"} />
        </div>
    );
}

export default ProductionProjectionPerMonth;
