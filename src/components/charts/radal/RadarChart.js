import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const RadarChartComponent = ({ data, title, dataKey1, dataKey2, name1, name2 }) => {
  const [chartWidth, setChartWidth] = useState(500); // Valor inicial del ancho
  const [chartHeight, setChartHeight] = useState(300); // Valor inicial de la altura

  useLayoutEffect(() => {
    function updateSize() {
      const containerWidth = document.querySelector('.radar-chart-container')?.clientWidth || 500;
      setChartWidth(containerWidth * 0.9); // Ajusta el ancho al 90% del contenedor
      setChartHeight(containerWidth * 0.6); // Ajusta la altura en proporción
    }

    window.addEventListener('resize', updateSize); // Escucha cambios de tamaño de ventana
    updateSize();

    return () => window.removeEventListener('resize', updateSize); // Limpia el evento al desmontar
  }, []);

  return (
    <div className="radar-chart-container" style={{ width: '100%', padding: '20px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>{title}</h3>
      <RadarChart
        cx={chartWidth / 2}
        cy={chartHeight / 2.5}
        outerRadius={chartWidth <= 480 ? 70 : 130}
        width={chartWidth}
        height={chartHeight}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name={name1} dataKey={dataKey1} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name={name2} dataKey={dataKey2} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </div>
  );
};

RadarChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  dataKey1: PropTypes.string.isRequired,
  dataKey2: PropTypes.string.isRequired,
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string.isRequired,
};

export default RadarChartComponent;
