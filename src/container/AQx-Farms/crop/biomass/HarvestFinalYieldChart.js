import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import { Cards } from "../../../../components/cards/frame/cards-frame";
import { Typography } from "antd";
import PropTypes from "prop-types";

function HarvestFinalYieldChart({ data }) {
    return (
        <Cards title="Rendimiento en Piscina">
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
                    <XAxis dataKey="ciclo" label={{ value: "Ciclo #", position: "insideBottomRight", offset: -5 }} />
                    <YAxis label={{ value: "Cosecha Final (lbs)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
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
