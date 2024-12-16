import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import CalendarTask from './task/calendar/CalendarTask';
import { PageHeader } from '../../components/page-headers/page-headers';
import ScheduleTransfer from './task/scheduled-transfer';
import ScheduleHarvest from './task/scheduled-harvest';
import ScheduleFarm from './task/scheduled-farm';

function TaskFarms() {

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
                                highlightText="Aqualink Camaronera"
                                title="Tareas"
                                selectOptions={[
                                    ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
                                    ["Sector 1", "Sector 2", "Sector 3"],
                                    ["Piscina 1", "Piscina 2", "Piscina 3"]
                                ]}
                            />
                            <CalendarTask />
                            <Row gutter={16} style={{ marginBottom: '20px', display: 'flex' }}>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense
                                        fallback={
                                            <Cards headless>
                                                <Skeleton active />
                                            </Cards>
                                        }
                                    >
                                        <ScheduleFarm />
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
                                        <ScheduleTransfer />
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

export default TaskFarms;
