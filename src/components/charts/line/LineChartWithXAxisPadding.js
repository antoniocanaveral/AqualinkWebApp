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
  const [responsive, setResponsive] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      const element = document.querySelector('.recharts-wrapper');
      const width =
        element !== null
          ? element.closest('.ant-card-body').clientWidth
          : document.querySelector('.ant-card-body').clientWidth;
      setResponsive(width);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <LineChart
      width={responsive - (5 * responsive) / 100}
      height={responsive * 0.75} 
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
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

LineChartWithXAxisPadding.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LineChartWithXAxisPadding;
