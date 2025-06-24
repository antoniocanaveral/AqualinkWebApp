import React, { Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import ConsumptionSuppliesChart from '../../AQx-Farms/monitoring/general/ConsumptionSuppliesChart';
import CostsHaDayChart from '../../AQx-Farms/monitoring/general/CostsHaDayChart';
import GrowthChart from '../../AQx-Farms/monitoring/general/GrowthChart';
import SurvivalChart from '../../AQx-Farms/monitoring/general/SurvivalChart';
import FCAChart from '../../AQx-Farms/monitoring/general/FCAChart';
import BiomassChart from '../../AQx-Farms/monitoring/general/BiomassChart';

function GeneralMonitoringLab() {


    return (
        <>
            <PageHeader
                highlightText="Aqualink "
                title="Monitoreo General"
                selectOptions={[
                    ["Lab 1", "Lab 2", "Lab 3"],
                    ["Módulo 1", "Módulo 2", "Módulo 3"],
                    ["Tanque 1", "Tanque 2", "Tanque 3"]
                ]}
            />
            <Main>
                <Row gutter={25}>
                    <Col xl={8} xs={24} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards title="Crecimiento" size="large" style={{ width: '100%', height: '100%' }}>
                                <GrowthChart />
                            </Cards>
                        </Suspense>
                    </Col>
                    <Col xl={8} xs={24} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards title="Supervivencia" size="large" style={{ width: '100%', height: '100%' }}>
                                <SurvivalChart />
                            </Cards>
                        </Suspense>
                    </Col>
                    <Col xl={8} xs={24} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards title="Consumo de suministro" size="large" style={{ width: '60%', height: '100%' }}>
                                <ConsumptionSuppliesChart />
                            </Cards>
                        </Suspense>
                    </Col>

                    <Col xl={8} xs={24} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards title="Biomasa" size="large" style={{ width: '100%', height: '100%' }}>
                                <BiomassChart />
                            </Cards>
                        </Suspense>
                    </Col>
                    <Col xl={8} xs={24} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards title="FCA" size="large" style={{ width: '100%', height: '100%' }}>
                                <FCAChart />
                            </Cards>
                        </Suspense>
                    </Col>

                    <Col xl={8} xs={24} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards title="Costos(USD) Tanque/Día" size="large" style={{ width: '100%', height: '100%' }}>
                                <CostsHaDayChart />
                            </Cards>
                        </Suspense>
                    </Col>
                </Row>

            </Main>
        </>
    );
}

export default GeneralMonitoringLab;
