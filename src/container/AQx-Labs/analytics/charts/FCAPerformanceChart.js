

import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

function FCAPerformanceChart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorFCA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF5733" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#FF5733" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ciclo" label={{ value: "Ciclo #", position: "insideBottomRight", offset: -5 }} />
                <YAxis label={{ value: "FCA (%)", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                <Area
                    type="monotone"
                    dataKey="fca"
                    name="FCA Performance"
                    stroke="#FF5733"
                    fillOpacity={1}
                    fill="url(#colorFCA)"
                    strokeWidth={2}
                    dot={{ fill: "white", stroke: "#FF5733", r: 5 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

FCAPerformanceChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            ciclo: PropTypes.number.isRequired,
            fca: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FCAPerformanceChart;
