import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import CalendarTask from './task/calendar/CalendarTask';
import { PageHeader } from '../../components/page-headers/page-headers';

function TaskFarms() {
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
                            <PageHeader className="ninjadash-page-header-main"
                                highlightText="Aqualink Camaronera"
                                title="Tareas"
                                selectOptions={[
                                    ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
                                    ["Sector 1", "Sector 2", "Sector 3"],
                                    ["Piscina 1", "Piscina 2", "Piscina 3"]
                                ]}
                            />
                            <CalendarTask />
                        </Suspense>
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default TaskFarms;
