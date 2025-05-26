import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import { proDataBox } from './analytics/data';
import CostProjectionWrapLab from './panel/charts/CostProjectionWrapLab';
import HorizontalBarChart from './analytics/charts/HorizontalBarChart';
import StackedHorizontalBarChart from './analytics/charts/StackedHorizontalBarChart';
import VerticalBarChart from '../../components/charts/bar/VerticalBarChart';
import ProductionProjectionPerMonth from './planning/ProductionProjectionPerMonth';
import CostProjections from './planning/CostProjections';

function RealPlanning() {

    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
    const datasetsEscenario36 = [
        {
            data: [65, 59, 80, 81, 56, 55],
            label: 'Ventas',
            backgroundColor: '#0c4c7d', // Opcional, si no se pasa, se usará barColor
        },
    ];

    const datasetsEscenario41 = [
        {
            data: [28, 48, 40, 19, 86, 27],
            label: 'Biomasa',
            backgroundColor: '#FF6384', // Opcional, si no se pasa, se usará barColor
        },
    ];

    const datasetsEscenario46 = [
        {
            data: [28, 48, 40, 19, 86, 27],
            label: 'Costo',
            backgroundColor: '#fa8b0c', // Opcional, si no se pasa, se usará barColor
        },
    ];

    const datasetsEscenario51 = [
        {
            data: [28, 48, 40, 19, 86, 27],
            label: 'IEP',
            backgroundColor: '#1cb997', // Opcional, si no se pasa, se usará barColor
        },
    ];

    return (
        <>
            <PageHeader
                highlightText="Aqualink Camaroneras"
                title="Real Planning"
                selectOptions={[
                    ["Todas las Camaroneras", "Camaronera 1", "Camaronera 2", "Camaronera 3"],
                    ["Todos los Sectores", "Sector 1", "Sector 2", "Sector 3"],
                    ["Todas las Piscinas", "Piscina 1", "Piscina 2", "Piscina 3"]
                ]}
            />
            <Main>
                <Row gutter={25}>
                    <Col xl={6} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <div className="flex-col">
                                <VerticalBarChart
                                    labels={labels}
                                    datasets={datasetsEscenario36}
                                    barColor="#36A2EB"
                                    width={600}
                                    height={400}
                                    id="ventasIngresosChart"
                                    className="my-custom-chart"
                                    style={{ margin: '20px 0' }}
                                />
                            </div>
                        </Suspense>
                    </Col>
                    <Col xl={6} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <div className="flex-col">
                                <VerticalBarChart
                                    labels={labels}
                                    datasets={datasetsEscenario41}
                                    barColor="#fa8b0c"
                                    width={600}
                                    height={400}
                                    id="ventasIngresosChart2"
                                    className="my-custom-chart"
                                    style={{ margin: '20px 0' }}
                                />
                            </div>
                        </Suspense>
                    </Col>
                    <Col xl={6} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <div className="flex-col">
                                <VerticalBarChart
                                    labels={labels}
                                    datasets={datasetsEscenario46}
                                    barColor="#36A2EB"
                                    width={600}
                                    height={400}
                                    id="ventasIngresosChart3"
                                    className="my-custom-chart"
                                    style={{ margin: '20px 0' }}
                                />
                            </div>
                        </Suspense>
                    </Col>
                    <Col xl={6} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <div className="flex-col">
                                <VerticalBarChart
                                    labels={labels}
                                    datasets={datasetsEscenario51}
                                    barColor="#36A2EB"
                                    width={600}
                                    height={400}
                                    id="ventasIngresosChart4"
                                    className="my-custom-chart"
                                    style={{ margin: '20px 0' }}
                                />
                            </div>
                        </Suspense>
                    </Col>

                </Row>

                <br />
                <Row gutter={25}>
                    <Col xl={24} xs={24} style={{ display: "flex" }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards title="Produccion proyectada mes x mes" size="large" style={{ width: '100%', height: '100%' }}>
                                <ProductionProjectionPerMonth />
                            </Cards>
                        </Suspense>
                    </Col>
                </Row>

                <Row gutter={25}>
                    <Col xl={24} xs={24} style={{ display: "flex" }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards title="Proyección de costos" size="large" style={{ width: '100%', height: '100%' }}>
                                <CostProjections />
                            </Cards>
                        </Suspense>
                    </Col>
                </Row>


            </Main>
        </>
    );
}

export default RealPlanning;
