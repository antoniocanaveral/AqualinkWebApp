import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { Typography } from "antd";

function AlcalinityChart() {
    const data = [
        { "x": 0, "y1": 105 },
        { "x": 3, "y1": 120 },
        { "x": 6, "y1": 130 },
        { "x": 9, "y1": 145 },
        { "x": 12, "y1": 160 },
        { "x": 15, "y1": 155 },
        { "x": 18, "y1": 140 },
        { "x": 21, "y1": 150 },
        { "x": 24, "y1": 135 },
        { "x": 27, "y1": 110 },
        { "x": 30, "y1": 125 },
        { "x": 33, "y1": 115 },
        { "x": 36, "y1": 170 },
        { "x": 39, "y1": 175 },
        { "x": 42, "y1": 160 },
        { "x": 45, "y1": 155 },
        { "x": 48, "y1": 145 }
    ];

    const renderTooltip = ({ label, payload }) => {
        if (!payload || !payload.length) return null;

        return (
            <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
                <p>{`X: ${label}`}</p>
                <p style={{ color: "#26b99a" }}>{`Alcalinidad Promedio: ${payload[0].value}`}</p>
                <p style={{ color: "#a5aeb5" }}>{`Rango Mínimo: 100`}</p>
                <p style={{ color: "#34495e" }}>{`Rango Crítico: 80`}</p>
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
                    <YAxis domain={[70, 220]} tickCount={12} tickFormatter={(value) => Math.round(value)} />
                    <Tooltip content={renderTooltip} />
                    <Area
                        type="monotone"
                        dataKey="y1"
                        name="Alcalinidad Promedio"
                        stroke="#26b99a"
                        fill="#66cdb7"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#66ccb6", r: 3 }}
                    />
                    <ReferenceLine y={100} stroke="#a5aeb5" strokeWidth={2} />
                    <ReferenceLine y={180} stroke="#34495e" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AlcalinityChart;
