import React from 'react';
import LineChartWithXAxisPadding from '../../../components/charts/line/LineChartWithXAxisPadding';

function CostProjections() {
    const exampleData = [
        { 
          name: 'Enero', 
          'Proyectado Asociado de Costo de Insumos': 1500,
          'Proyectado Asociado de Costo Indirecto': 1200,
          'Proyectado Asociado a Performance de Costos': 3000
        },
        { 
          name: 'Febrero', 
          'Proyectado Asociado de Costo de Insumos': 1300,
          'Proyectado Asociado de Costo Indirecto': 1100,
          'Proyectado Asociado a Performance de Costos': 2800
        },
        { 
          name: 'Marzo', 
          'Proyectado Asociado de Costo de Insumos': 8000,
          'Proyectado Asociado de Costo Indirecto': 7500,
          'Proyectado Asociado a Performance de Costos': 9500
        },
        { 
          name: 'Abril', 
          'Proyectado Asociado de Costo de Insumos': 3000,
          'Proyectado Asociado de Costo Indirecto': 2500,
          'Proyectado Asociado a Performance de Costos': 3500
        },
        { 
          name: 'Mayo', 
          'Proyectado Asociado de Costo de Insumos': 4000,
          'Proyectado Asociado de Costo Indirecto': 3500,
          'Proyectado Asociado a Performance de Costos': 4500
        },
        { 
          name: 'Junio', 
          'Proyectado Asociado de Costo de Insumos': 3200,
          'Proyectado Asociado de Costo Indirecto': 2700,
          'Proyectado Asociado a Performance de Costos': 4000
        },
        { 
          name: 'Julio', 
          'Proyectado Asociado de Costo de Insumos': 3500,
          'Proyectado Asociado de Costo Indirecto': 2900,
          'Proyectado Asociado a Performance de Costos': 4200
        },
        { 
          name: 'Agosto', 
          'Proyectado Asociado de Costo de Insumos': 2000,
          'Proyectado Asociado de Costo Indirecto': 1500,
          'Proyectado Asociado a Performance de Costos': 2500
        },
        { 
          name: 'Septiembre', 
          'Proyectado Asociado de Costo de Insumos': 1200,
          'Proyectado Asociado de Costo Indirecto': 1000,
          'Proyectado Asociado a Performance de Costos': 2300
        },
        { 
          name: 'Octubre', 
          'Proyectado Asociado de Costo de Insumos': 8500,
          'Proyectado Asociado de Costo Indirecto': 8000,
          'Proyectado Asociado a Performance de Costos': 9500
        },
        { 
          name: 'Noviembre', 
          'Proyectado Asociado de Costo de Insumos': 3500,
          'Proyectado Asociado de Costo Indirecto': 3000,
          'Proyectado Asociado a Performance de Costos': 4000
        },
        { 
          name: 'Diciembre', 
          'Proyectado Asociado de Costo de Insumos': 4000,
          'Proyectado Asociado de Costo Indirecto': 3500,
          'Proyectado Asociado a Performance de Costos': 4500
        },
      ];
      

    return (
        <div style={{ width: "100%", height: "100%" }}> {/* Asegura que el contenedor tenga el ancho y alto completo */}
            <LineChartWithXAxisPadding data={exampleData} height={350} width={"100%"} />
        </div>
    );
}

export default CostProjections;
