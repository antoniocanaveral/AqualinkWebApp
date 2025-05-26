import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Typography } from "antd";
import PropTypes from "prop-types";

function HarvestFinalYieldChart({ data }) {
    return (
        <Cards title="Rendimiento en Tanque">
            <ResponsiveContainer width="100%" height={320}>
                <AreaChart
                    data={data}
                    margin={{
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ciclo" label={{ value: "Ciclo #", offset: -2 }} />
                    <YAxis label={{ value: "Cosecha Final (lbs)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '80px' }} />
                    <Area
                        type="monotone"
                        dataKey="cosechaFinal"
                        name="Cosecha Final"
                        stroke="#34495e"
                        fill="#8ba490"
                        strokeWidth={2}
                        dot={{ fill: "white", stroke: "#34495e", r: 5 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Cards>
    );
}

HarvestFinalYieldChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            ciclo: PropTypes.number.isRequired,
            cosechaFinal: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default HarvestFinalYieldChart;
