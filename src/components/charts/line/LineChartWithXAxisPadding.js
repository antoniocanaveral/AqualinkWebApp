import React, { useLayoutEffect, useState } from 'react';
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

const LineChartWithXAxisPadding = ({ data, height: customHeight, width: customWidth }) => {
  const [chartWidth, setChartWidth] = useState(550);
  const [chartHeight, setChartHeight] = useState(350);

  useLayoutEffect(() => {
    function updateSize() {
      const containerWidth = document.querySelector('.chart-container')?.clientWidth || 500;
      setChartWidth(containerWidth * 0.9);
      if (!customHeight) { // Solo se ajusta el alto si no se pasó `height` como prop
        setChartHeight(containerWidth * 0.6);
      }
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, [customHeight]); // Dependemos de customHeight para recalcular el alto

  // Filtra las claves numéricas del primer objeto en `data` para usar como líneas
  const lineKeys = data.length > 0 
    ? Object.keys(data[0]).filter((key) => key !== 'name' && typeof data[0][key] === 'number') 
    : [];

  // Array de colores para las líneas
  const colors = ['#0372CE', '#00AAFF', '#FA8B0C', '#FF5733', '#64ae78', '#3357FF', '#FF33A2'];

  // Genera un color aleatorio si el array de colores es menor que la cantidad de líneas
  const getColor = (index) => colors[index % colors.length];

  return (
    <div className="chart-container" style={{ width: '100%' }}>
      <LineChart
        width={chartWidth}
        height={customHeight || chartHeight}  
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        {lineKeys.map((key, index) => (
          <Line 
            key={key} 
            type="monotone" 
            dataKey={key} 
            stroke={getColor(index)} 
            activeDot={{ r: 8 }} 
          />
        ))}
      </LineChart>
    </div>
  );
};

LineChartWithXAxisPadding.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  height: PropTypes.number, // Propiedad opcional para altura personalizada
  width: PropTypes.number, // Propiedad opcional para ancho personalizado
};

export default LineChartWithXAxisPadding;
