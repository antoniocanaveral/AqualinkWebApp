import React from 'react';
import GaugeChart from 'react-gauge-chart';

const Speedometer = ({ value, base }) => {
    // Definir los límites del velocímetro
    const minValue = 150;
    const maxValue = 400;

    // Normalizar el valor entre 0 y 1
    const normalizedValue = (value - minValue) / (maxValue - minValue);

    // Asegurar que el valor está dentro del rango permitido (0 - 1)
    const adjustedValue = Math.max(0, Math.min(1, normalizedValue));

    // Colores de los segmentos según las categorías
    const colors = ['#1E88E5', '#43A047', '#FFEB3B', '#FB8C00', '#E53935']; // Azul, Verde, Amarillo, Naranja, Rojo

    // Asignar color a la aguja según el valor
    const getNeedleColor = (value) => {
        if (value < 200) return colors[0]; // Azul (150-200)
        if (value < 250) return colors[1]; // Verde (200-250)
        if (value < 300) return colors[2]; // Amarillo (250-300)
        if (value < 350) return colors[3]; // Naranja (300-350)
        return colors[4]; // Rojo (350-400)
    };

    return (
        <div className="speedometer-container">
            <GaugeChart
                id="speedometer-chart"
                nrOfLevels={30} // Número de divisiones
                colors={colors} // Colores de los segmentos
                arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]} // Cinco segmentos del mismo tamaño
                percent={adjustedValue} // Valor normalizado
                arcPadding={0.02} // Separación entre segmentos
                needleColor={getNeedleColor(value)} // Color dinámico de la aguja
                textColor="#333" // Color del texto
            />
            <div className="speedometer-label">
                {
                    base &&
                    (<>
                     <span className="speedometer-title">Valor Base</span>
                <br />
                <center>
                    <span className="speedometer-value">
                        {base.toFixed(2)}$
                    </span>
                </center></>)
                }
               
            </div>
            <div className="speedometer-label">
                
                <span className="speedometer-title">Costo/ha/día</span>
                <br />
                <center>
                    <span className="speedometer-value">
                        {value.toFixed(2)}$
                    </span>
                </center>
            </div>
        </div>
    );
};

export default Speedometer;
