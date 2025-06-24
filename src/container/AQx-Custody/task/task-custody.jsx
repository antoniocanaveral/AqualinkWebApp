import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import CalendarTask from '../../AQx-Farms/task/calendar/CalendarTask';
import ScheduleFarm from '../../AQx-Farms/task/scheduled-farm';
import ScheduleTransportAssigment from './schedule-transport-assigment';
import ScheduleAllocationInputs from './schedule-allocation-inputs-custody';
import ScheduleHarvest from '../../AQx-Farms/task/scheduled-harvest';

function TaskCustody() {

    return (
        <>
            <Main>
                <Row gutter={[24, 24]}>
                    <Col xxl={24} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <PageHeader
                                highlightText="Aqualink Empacadora"
                                title="Tareas"
                                selectOptions={[
                                    ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
                                    ["Sector 1", "Sector 2", "Sector 3"],
                                    ["Piscina 1", "Piscina 2", "Piscina 3"]
                                ]}
                            />
                            <Row gutter={16} style={{ marginBottom: '20px', display: 'flex' }}>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense
                                        fallback={
                                            <Cards headless>
                                                <Skeleton active />
                                            </Cards>
                                        }
                                    >
                                        <ScheduleHarvest />
                                    </Suspense>
                                </Col>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense
                                        fallback={
                                            <Cards headless>
                                                <Skeleton active />
                                            </Cards>
                                        }
                                    >
                                        <ScheduleAllocationInputs />
                                    </Suspense>
                                </Col>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense
                                        fallback={
                                            <Cards headless>
                                                <Skeleton active />
                                            </Cards>
                                        }
                                    >
                                        <ScheduleTransportAssigment />
                                    </Suspense>
                                </Col>
                            </Row>
                        </Suspense>
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default TaskCustody;
