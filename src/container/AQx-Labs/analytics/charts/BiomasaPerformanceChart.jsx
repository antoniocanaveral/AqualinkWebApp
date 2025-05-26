

import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

function BiomasaPerformanceChart({ data }) {
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
                        <linearGradient id="colorBiomasa" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2ECC71" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#2ECC71" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ciclo" label={{ value: "Ciclo #", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Biomasa (kg)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                    <Area
                        type="monotone"
                        dataKey="biomasa"
                        name="Biomasa Performance"
                        stroke="#2ECC71"
                        fillOpacity={1}
                        fill="url(#colorBiomasa)"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#2ECC71", r: 5 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
    );
}

BiomasaPerformanceChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            ciclo: PropTypes.number.isRequired,
            biomasa: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default BiomasaPerformanceChart;
