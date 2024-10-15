import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import TaskLabTable from './task/table/task-table-lab';
import UpcomingEvents from '../dashboard/overview/demoFive/UpcomingEvents';

function TaskLabs() {
    const PageRoutes = [
        {
            path: '/admin',
            breadcrumbName: 'AquaLink',
        },
        {
            path: 'first',
            breadcrumbName: 'Panel de Control',
        },
    ];
    return (
        <>
            <PageHeader className="ninjadash-page-header-main" title="Administrador de Tareas" routes={PageRoutes} />

            <Main>

                <Row gutter={[24, 24]}>
                    <Col xxl={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >

                            <TaskLabTable />

                        </Suspense>
                    </Col>
                    <Col xl={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >

                            <UpcomingEvents />

                        </Suspense>
                    </Col>
                    <Col xl={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >

                            <UpcomingEvents />

                        </Suspense>
                    </Col>
                    <Col xl={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >

                            <UpcomingEvents />

                        </Suspense>
                    </Col>  
                    <Col xl={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >

                            <UpcomingEvents />

                        </Suspense>
                    </Col>

                </Row>
            </Main>
        </>
    );
}

export default TaskLabs;
