import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { Typography } from "antd";

function PhChart() {
    const data = [
        { "x": 0, "y1": 7.2 },
        { "x": 3, "y1": 7.5 },
        { "x": 6, "y1": 7.8 },
        { "x": 9, "y1": 8.0 },
        { "x": 12, "y1": 8.3 },
        { "x": 15, "y1": 8.1 },
        { "x": 18, "y1": 7.9 },
        { "x": 21, "y1": 8.2 },
        { "x": 24, "y1": 8.0 },
        { "x": 27, "y1": 7.7 },
        { "x": 30, "y1": 7.6 },
        { "x": 33, "y1": 7.9 },
        { "x": 36, "y1": 7.4 },
        { "x": 39, "y1": 7.1 },
        { "x": 42, "y1": 7.0 },
        { "x": 45, "y1": 7.3 },
        { "x": 48, "y1": 7.2 }
    ];

    const renderTooltip = ({ label, payload }) => {
        if (!payload || !payload.length) return null;

        return (
            <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
                <p>{`X: ${label}`}</p>
                <p style={{ color: "#26b99a" }}>{`OD Promedio: ${payload[0].value}`}</p>
                <p style={{ color: "#a5aeb5" }}>{`Rango Mínimo: 7`}</p>
                <p style={{ color: "#ff4d4f" }}>{`Rango Crítico: 8.5`}</p>
            </div>
        );
    };

    return (
        <div>
            <Typography.Text style={{ color: "#66ccb6", fontSize: "18px" }} level={4}>Parámetros</Typography.Text>
            <br />
            <Typography.Text level={4}>Corrida 2</Typography.Text>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 5,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis domain={[59, 10]} tickCount={5} tickFormatter={(value) => value.toFixed(1)} />
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
                    {/* Líneas de referencia en valores fijos sin etiquetas */}
                    <ReferenceLine y={7} stroke="#a5aeb5" strokeWidth={2} />
                    <ReferenceLine y={8.5} stroke="#ff4d4f" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PhChart;
