import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Typography } from "antd";

function DissolvedOxygenPMChart() {
    const data = [
        { "x": 0, "y3": 4.5, "y2": 6, "y1": 4.5 },
        { "x": 3, "y3": 4.5, "y2": 6, "y1": 5.2 },
        { "x": 6, "y3": 4.5, "y2": 6, "y1": 4.8 },
        { "x": 9, "y3": 4.5, "y2": 6, "y1": 5.9 },
        { "x": 12, "y3": 4.5, "y2": 6, "y1": 5.6 },
        { "x": 15, "y3": 4.5, "y2": 6, "y1": 5.4 },
        { "x": 18, "y3": 4.5, "y2": 6, "y1": 5.7 },
        { "x": 21, "y3": 4.5, "y2": 6, "y1": 5.5 },
        { "x": 24, "y3": 4.5, "y2": 6, "y1": 5.1 },
        { "x": 27, "y3": 4.5, "y2": 6, "y1": 4.7 },
        { "x": 30, "y3": 4.5, "y2": 6, "y1": 4.3 },
        { "x": 33, "y3": 4.5, "y2": 6, "y1": 5.4 },
        { "x": 36, "y3": 4.5, "y2": 6, "y1": 4.8 },
        { "x": 39, "y3": 4.5, "y2": 6, "y1": 4.2 },
        { "x": 42, "y3": 4.5, "y2": 6, "y1": 4.9 },
        { "x": 45, "y3": 4.5, "y2": 6, "y1": 5.3 },
        { "x": 48, "y3": 4.5, "y2": 6, "y1": 4.6 }
    ];
    

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
                        left: -35,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis domain={[0, 9]} tickCount={10} tickFormatter={(value) => Math.round(value)} />
                    <Tooltip />
                    {/* Ordena las áreas en el orden deseado */}
                    <Area
                        type="monotone"
                        dataKey="y1"
                        name="OD Promedio"
                        stroke="#26b99a"
                        fill="#66cdb7"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#66ccb6", r: 3 }} 
                    />
                    <Area
                        type="monotone"
                        dataKey="y2"
                        name="Rango Mínimo"
                        stroke="#a5aeb5"
                        fill="#427078"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#a5aeb5", r: 3 }} 
                    />
                    <Area
                        type="monotone"
                        dataKey="y3"
                        name="Rango Crítico"
                        stroke="#ff4d4f"
                        fill="#ff4d4f"
                        fillOpacity={0.6}  
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#ff4d4f", r: 3 }} 
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default DissolvedOxygenPMChart;
