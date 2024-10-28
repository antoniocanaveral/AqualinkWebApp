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

const LineChartWithXAxisPadding = ({ data }) => {
  const [chartWidth, setChartWidth] = useState(550); // Valor inicial de ancho
  const [chartHeight, setChartHeight] = useState(300); // Valor inicial de altura

  useLayoutEffect(() => {
    function updateSize() {
      // Calcula el ancho en base al tamaño del contenedor
      const containerWidth = document.querySelector('.chart-container')?.clientWidth || 500;
      setChartWidth(containerWidth * 0.9); // Ajusta el ancho al 90% del contenedor
      setChartHeight(containerWidth * 0.6); // Ajusta la altura en proporción
    }

    window.addEventListener('resize', updateSize); // Escucha cambios de tamaño de ventana
    updateSize();

    return () => window.removeEventListener('resize', updateSize); // Limpia el evento al desmontar
  }, []);

  return (
    <div className="chart-container" style={{ width: '110%' }}>
      <LineChart
        width={chartWidth}
        height={chartHeight}
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
        <Line type="monotone" dataKey="A" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

LineChartWithXAxisPadding.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LineChartWithXAxisPadding;
