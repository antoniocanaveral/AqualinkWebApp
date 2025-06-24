import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "antd";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

function PhAlcalinityBehaviorChart({ selectedBatch }) {
  const { chemicalWaterParams } = useSelector(state => state.waterflowReport);

  if (!selectedBatch) {
    return <p style={{ textAlign: "center" }}>Seleccione un Batch para ver los datos.</p>;
  }

  const record = chemicalWaterParams.find(item => item.SM_Batch === selectedBatch);

  if (!record) {
    return <p style={{ textAlign: "center" }}>No se encontró información para el batch seleccionado.</p>;
  }

  const data = [
    {
      name: dayjs(record.ci_planneddate).format("DD/MM/YYYY"),
      ph: record.ph,
      alcalinidad: record.alcalinidad,
      promedio:
        record.ph != null && record.alcalinidad != null
          ? (record.ph + record.alcalinidad) / 2
          : null,
    },
  ];

  return (
    <div>
      <Typography.Text style={{ color: "#66ccb6", fontSize: "18px" }} level={4}>
        Parámetros
      </Typography.Text>
      <br />
      <Typography.Text level={4}>Comportamiento de pH y Alcalinidad</Typography.Text>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
          <Line
            type="monotone"
            dataKey="ph"
            name="pH"
            stroke="#66ccb6"
            strokeWidth={2}
            dot={{ fill: "white", stroke: "#66ccb6", r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="alcalinidad"
            name="Alcalinidad"
            stroke="#a5aeb5"
            strokeWidth={2}
            dot={{ fill: "white", stroke: "#a5aeb5", r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="promedio"
            name="Promedio"
            stroke="#34495e"
            strokeWidth={2}
            dot={{ fill: "white", stroke: "#34495e", r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PhAlcalinityBehaviorChart;
