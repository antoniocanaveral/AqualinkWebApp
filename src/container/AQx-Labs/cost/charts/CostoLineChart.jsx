import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const CostoLineChart = ({ data, height }) => {
  const chartContainerRef = useRef(null); // Referencia al contenedor del gráfico
  const [chartWidth, setChartWidth] = useState(0); // Estado para el ancho dinámico del gráfico


  useEffect(() => {
    const updateChartWidth = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth); // Ajustar al ancho del contenedor
      }
    };


    window.addEventListener('resize', updateChartWidth);
    updateChartWidth(); // Actualizar al cargar el componente

    return () => {
      window.removeEventListener('resize', updateChartWidth); // Limpiar el evento al desmontar
    };
  }, []);


  const colors = {
    'costo real': '#0372CE',
    'costo proyectado': '#00AAFF',
    precria: '#FA8B0C',
    optimo: '#64ae78',
  };

  return (
    <div
      ref={chartContainerRef} // Contenedor del gráfico
      style={{ width: '100%', textAlign: 'center' }}
    >
      <LineChart
        width={chartWidth} // Ancho dinámico
        height={height} // Altura personalizable
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="x" 
          type="number" 
          domain={[1, 100]} // Eje X con números del 1 al 100
          tickCount={10} 
        />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(data[0])
          .filter((key) => key !== 'x') // Excluir la clave 'x'
          .map((key) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[key]} // Colores personalizados
              activeDot={{ r: 8 }}
            />
          ))}
      </LineChart>
    </div>
  );
};

CostoLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired, // Eje X
      'costo real': PropTypes.number.isRequired,
      'costo proyectado': PropTypes.number.isRequired,
      precria: PropTypes.number.isRequired,
      optimo: PropTypes.number.isRequired,
    })
  ).isRequired,
  height: PropTypes.number, // Altura del gráfico
};

CostoLineChart.defaultProps = {
  height: 300, // Altura por defecto
};

export default CostoLineChart;
