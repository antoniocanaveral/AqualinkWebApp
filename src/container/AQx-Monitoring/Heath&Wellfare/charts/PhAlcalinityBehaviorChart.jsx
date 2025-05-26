import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Typography } from "antd";

function PhAlcalinityBehaviorChart() {
    const data = [
        { "name": 0, "uv": 25, "pv": 20, "amt": 5 },
        { "name": 3, "uv": 26, "pv": 20, "amt": 5.1 },
        { "name": 6, "uv": 27, "pv": 20, "amt": 5.2 },
        { "name": 9, "uv": 26, "pv": 20, "amt": 5.1 },
        { "name": 12, "uv": 25, "pv": 20, "amt": 5.1 },
        { "name": 15, "uv": 25, "pv": 20, "amt": 5.1 },
        { "name": 18, "uv": 25, "pv": 20, "amt": 5 },
        { "name": 21, "uv": 25, "pv": 20, "amt": 5.1 },
        { "name": 24, "uv": 26, "pv": 20, "amt": 5 },
        { "name": 27, "uv": 27, "pv": 20, "amt": 5.1 },
        { "name": 30, "uv": 25, "pv": 20, "amt": 5.2 },
        { "name": 33, "uv": 25, "pv": 20, "amt": 5.3 },
        { "name": 36, "uv": 26, "pv": 20, "amt": 5.1 },
        { "name": 39, "uv": 25, "pv": 20, "amt": 5.2 },
        { "name": 42, "uv": 25, "pv": 20, "amt": 5.1 },
        { "name": 45, "uv": 26, "pv": 20, "amt": 5.3 },
        { "name": 48, "uv": 27, "pv": 20, "amt": 5.2 }
    ];

    return (
        <div>
            <Typography.Text style={{color:"#66ccb6", fontSize:"18px"}} level={4}>Parámetros</Typography.Text>
            <br/>
            <Typography.Text level={4}>Corrida 2</Typography.Text>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        name="Ph"
                        stackId="1"
                        stroke="#66ccb6"
                        fill="#8ba490"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#66ccb6", r: 5 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        name="Alcalinidad"
                        stackId="1"
                        stroke="#a5aeb5"
                        fill="#98aaaf"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#a5aeb5", r: 5 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="amt"
                        name="Promedio"
                        stackId="1"
                        stroke="#34495e"
                        fill="#6f7e8d"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#34495e", r: 5 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PhAlcalinityBehaviorChart;
