import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { Typography } from "antd";

function MagnesiumChart() {
    const data = [
        { "x": 0, "y1": 1205 },
        { "x": 3, "y1": 1220 },
        { "x": 6, "y1": 1235 },
        { "x": 9, "y1": 1250 },
        { "x": 12, "y1": 1265 },
        { "x": 15, "y1": 1280 },
        { "x": 18, "y1": 1295 },
        { "x": 21, "y1": 1310 },
        { "x": 24, "y1": 1325 },
        { "x": 27, "y1": 1300 },
        { "x": 30, "y1": 1285 },
        { "x": 33, "y1": 1270 },
        { "x": 36, "y1": 1255 },
        { "x": 39, "y1": 1240 },
        { "x": 42, "y1": 1225 },
        { "x": 45, "y1": 1210 },
        { "x": 48, "y1": 1200 }
    ];

    const renderTooltip = ({ label, payload }) => {
        if (!payload || !payload.length) return null;

        return (
            <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
                <p>{`X: ${label}`}</p>
                <p style={{ color: "#26b99a" }}>{`Magnesio Promedio: ${payload[0].value}`}</p>
                <p style={{ color: "#a5aeb5" }}>{`Rango Mínimo: 1200`}</p>
                <p style={{ color: "#34495e" }}>{`Rango Crítico: 1350`}</p>
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
                    <YAxis domain={[1000, 1500]} tickCount={8} tickFormatter={(value) => value} />
                    <Tooltip content={renderTooltip} />
                    <Area
                        type="monotone"
                        dataKey="y1"
                        name="Magnesio Promedio"
                        stroke="#26b99a"
                        fill="#66cdb7"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#66ccb6", r: 3 }}
                    />
                    <ReferenceLine y={1200} stroke="#a5aeb5" strokeWidth={2} />
                    <ReferenceLine y={1350} stroke="#34495e" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default MagnesiumChart;
