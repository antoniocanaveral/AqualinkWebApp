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

const MultiLineChart = ({ data, lines }) => {
  const [chartWidth, setChartWidth] = useState(550); // Valor inicial de ancho
  const [chartHeight, setChartHeight] = useState(300); // Valor inicial de altura

  useLayoutEffect(() => {
    function updateSize() {
      const containerWidth = document.querySelector('.chart-container')?.clientWidth || 500;
      setChartWidth(containerWidth * 0.9); // Ajusta el ancho al 90% del contenedor
      setChartHeight(containerWidth * 0.6); // Ajusta la altura en proporción
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
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
        {lines.map((lineKey, index) => (
          <Line
            key={lineKey}
            type="monotone"
            dataKey={lineKey}
            stroke={index === 0 ? "#8884d8" : index === 1 ? "#82ca9d" : "#ffc658"}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </div>
  );
};

MultiLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MultiLineChart;
