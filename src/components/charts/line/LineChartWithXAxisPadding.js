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
  const [responsiveWidth, setResponsiveWidth] = useState(0);
  const [responsiveHeight, setResponsiveHeight] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      const element = document.querySelector('.recharts-wrapper');
      const width = element ? element.closest('.ant-card-body')?.clientWidth || element.closest('div').clientWidth : document.querySelector('.ant-card-body').clientWidth;
      const height = element ? element.closest('.ant-card-body')?.clientHeight || element.closest('div').clientHeight : 400; // Asegura que tenga una altura mínima de 400px
      setResponsiveWidth(width);
      setResponsiveHeight(height);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <LineChart
      width={responsiveWidth}  // Ancho dinámico basado en el contenedor
      height={responsiveHeight} // Altura basada en el contenedor
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
      <Line type="monotone" dataKey="Available fishing (kilos)" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

LineChartWithXAxisPadding.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LineChartWithXAxisPadding;
