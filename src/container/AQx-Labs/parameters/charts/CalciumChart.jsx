import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { Typography } from "antd";

function CalciumChart() {
    const data = [
        { "x": 0, "y1": 360 },
        { "x": 3, "y1": 375 },
        { "x": 6, "y1": 390 },
        { "x": 9, "y1": 420 },
        { "x": 12, "y1": 450 },
        { "x": 15, "y1": 430 },
        { "x": 18, "y1": 410 },
        { "x": 21, "y1": 395 },
        { "x": 24, "y1": 425 },
        { "x": 27, "y1": 385 },
        { "x": 30, "y1": 370 },
        { "x": 33, "y1": 400 },
        { "x": 36, "y1": 360 },
        { "x": 39, "y1": 380 },
        { "x": 42, "y1": 365 },
        { "x": 45, "y1": 420 },
        { "x": 48, "y1": 350 }
    ];

    const renderTooltip = ({ label, payload }) => {
        if (!payload || !payload.length) return null;

        return (
            <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
                <p>{`X: ${label}`}</p>
                <p style={{ color: "#26b99a" }}>{`Calcio Promedio: ${payload[0].value}`}</p>
                <p style={{ color: "#a5aeb5" }}>{`Rango Mínimo: 350`}</p>
                <p style={{ color: "#34495e" }}>{`Rango Crítico: 450`}</p>
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
                    <YAxis domain={[250, 550]} tickCount={5} tickFormatter={(value) => value} />
                    <Tooltip content={renderTooltip} />
                    <Area
                        type="monotone"
                        dataKey="y1"
                        name="Calcio Promedio"
                        stroke="#26b99a"
                        fill="#66cdb7"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#66ccb6", r: 3 }}
                    />
                    <ReferenceLine y={350} stroke="#a5aeb5" strokeWidth={2} />
                    <ReferenceLine y={450} stroke="#34495e" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CalciumChart;
