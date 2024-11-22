import React from 'react';
import GaugeChart from 'react-gauge-chart';

const Speedometer = ({ value }) => {
    // Ajusta el rango del valor entre 0 y 1 para el Gauge
    const normalizedValue = value / 100;

    // Colores de los segmentos
    const colors = ['#1E88E5', '#43A047', '#FFEB3B', '#FB8C00', '#E53935'];

    // Función para determinar el color de la aguja
    const getNeedleColor = (value) => {
        if (value <= 20) return colors[0]; // Azul
        if (value > 20 && value <= 40) return colors[1]; // Verde
        if (value > 40 && value <= 60) return colors[2]; // Amarillo
        if (value > 60 && value <= 80) return colors[3]; // Naranja
        return colors[4]; // Rojo
    };

    return (
        <div className="speedometer-container">
            <GaugeChart
                id="speedometer-chart"
                nrOfLevels={30} // Divisiones
                colors={colors} // Azul, verde, amarillo, naranja, rojo
                arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]} // Longitud de cada sección
                percent={normalizedValue} // Valor actual
                arcPadding={0.02} // Separación entre arcos
                needleColor={getNeedleColor(value)} // Color dinámico de la aguja
                textColor="#333" // Color del texto
            />
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
