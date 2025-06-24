import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function PhChart({ selectedBatch }) {
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
      x: dayjs(record.ci_planneddate).format("DD/MM/YYYY"),
      y1: record.ph,
    },
  ];

  const renderTooltip = ({ label, payload }) => {
    if (!payload || !payload.length) return null;

    return (
      <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
        <p>{`Fecha: ${label}`}</p>
        <p style={{ color: "#26b99a" }}>{`PH: ${payload[0].value}`}</p>
        <p style={{ color: "#a5aeb5" }}>{`Rango Mínimo: 7`}</p>
        <p style={{ color: "#ff4d4f" }}>{`Rango Crítico: 8.5`}</p>
      </div>
    );
  };

  return (
    <div>
      <Typography.Text style={{ color: "#66ccb6", fontSize: "18px" }} level={4}>
        Parámetros
      </Typography.Text>
      <br />
      <Typography.Text level={4}>pH </Typography.Text>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis domain={[5, 10]} tickCount={5} tickFormatter={(value) => value.toFixed(1)} />
          <Tooltip content={renderTooltip} />
          <Area
            type="monotone"
            dataKey="y1"
            name="OD Promedio"
            stroke="#26b99a"
            fill="#66cdb7"
            strokeWidth={2}
            dot={{ fill: "white", stroke: "#66ccb6", r: 3 }}
          />
          <ReferenceLine y={7} stroke="#a5aeb5" strokeWidth={2} />
          <ReferenceLine y={8.5} stroke="#ff4d4f" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PhChart;
