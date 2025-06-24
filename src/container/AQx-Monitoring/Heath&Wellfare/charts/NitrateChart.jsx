import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { Typography } from "antd";

function NitrateChart() {
    const data = [
        { "x": 0, "y1": 2.1 },
        { "x": 3, "y1": 2.3 },
        { "x": 6, "y1": 2.5 },
        { "x": 9, "y1": 2.8 },
        { "x": 12, "y1": 3.0 },
        { "x": 15, "y1": 2.9 },
        { "x": 18, "y1": 2.7 },
        { "x": 21, "y1": 2.8 },
        { "x": 24, "y1": 2.6 },
        { "x": 27, "y1": 2.2 },
        { "x": 30, "y1": 2.0 },
        { "x": 33, "y1": 2.5 },
        { "x": 36, "y1": 2.1 },
        { "x": 39, "y1": 1.9 },
        { "x": 42, "y1": 1.8 },
        { "x": 45, "y1": 2.0 },
        { "x": 48, "y1": 1.7 }
    ];

    const renderTooltip = ({ label, payload }) => {
        if (!payload || !payload.length) return null;

        return (
            <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
                <p>{`X: ${label}`}</p>
                <p style={{ color: "#26b99a" }}>{`Nitratos Promedio: ${payload[0].value}`}</p>
                <p style={{ color: "#a5aeb5" }}>{`Rango Mínimo: 1.7`}</p>
                <p style={{ color: "#34495e" }}>{`Rango Crítico: 3.1`}</p>
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
                    <YAxis domain={[0, 5]} tickCount={9} tickFormatter={(value) => value.toFixed(1)} />
                    <Tooltip content={renderTooltip} />
                    <Area
                        type="monotone"
                        dataKey="y1"
                        name="Nitratos Promedio"
                        stroke="#26b99a"
                        fill="#66cdb7"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#66ccb6", r: 3 }}
                    />
                    <ReferenceLine y={1.7} stroke="#a5aeb5" strokeWidth={2} />
                    <ReferenceLine y={3.1} stroke="#34495e" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default NitrateChart;
