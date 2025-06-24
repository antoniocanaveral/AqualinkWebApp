import React from 'react';
import LineChartWithXAxisPadding from '../../../../components/charts/line/LineChartWithXAxisPadding';

function ConfirmedScheduledFishingEntry() {
  const exampleData = [
    { name: 'Enero', 'Pesca Programada': 4000, 'Pesca Confirmada': 2400 },
    { name: 'Febrero', 'Pesca Programada': 3000, 'Pesca Confirmada': 1398 },
    { name: 'Marzo', 'Pesca Programada': 2000, 'Pesca Confirmada': 9800 },
    { name: 'Abril', 'Pesca Programada': 2780, 'Pesca Confirmada': 3908 },
    { name: 'Mayo', 'Pesca Programada': 1890, 'Pesca Confirmada': 4800 },
    { name: 'Junio', 'Pesca Programada': 2390, 'Pesca Confirmada': 3800 },
    { name: 'Julio', 'Pesca Programada': 3490, 'Pesca Confirmada': 4300 },
    { name: 'Agosto', 'Pesca Programada': 4000, 'Pesca Confirmada': 2400 },
    { name: 'Septiembre', 'Pesca Programada': 3000, 'Pesca Confirmada': 1398 },
    { name: 'Octubre', 'Pesca Programada': 2000, 'Pesca Confirmada': 9800 },
    { name: 'Noviembre', 'Pesca Programada': 2780, 'Pesca Confirmada': 3908 },
    { name: 'Diciembre', 'Pesca Programada': 1890, 'Pesca Confirmada': 4800 },
];


  return (
    <div style={{ width: "100%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
      <LineChartWithXAxisPadding data={exampleData} height={350} />
    </div>
  );
}

export default ConfirmedScheduledFishingEntry;
