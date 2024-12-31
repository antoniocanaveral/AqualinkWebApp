import React, { lazy, Suspense, useRef } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewData from './panel/data/panelCustody.json';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import { GeolocationMap } from '../../components/maps/geolocation-map';

function GeolocationCustody() {

const data = [
    {
        "id": 1,
        "type": "primary",
        "icon": "biomasa.svg",
        "label": "Cosechas Coordinadas",
        "total": "1200711",
        "suffix": "lb",
        "prefix": "",
        "status": "growth",
        "statusRate": "3.36",
        "decimel": 0,
        "dataPeriod": "Todas las Camaroneras"
    },
    {
        "id": 2,
        "type": "primary",
        "icon": "food.svg",
        "label": "Cosechas Concluidas",
        "total": "1064000",
        "suffix": "lb",
        "prefix": "",
        "status": "growth",
        "statusRate": "6.01",
        "decimel": 0,
        "dataPeriod": "Todas las Camaroneras"
    },
    {
        "id": 3,
        "type": "primary",
        "icon": "health.svg",
        "label": "Ingreso a Planta",
        "total": "90.00",
        "suffix": "%",
        "prefix": "",
        "status": "growth",
        "statusRate": "1.05",
        "decimel": 2,
        "dataPeriod": "Todas las Camaroneras"
    },
    {
        "id": 4,
        "type": "primary",
        "icon": "growth.svg",
        "label": "Proyección",
        "total": "1200711",
        "suffix": "lb",
        "prefix": "$",
        "status": "down",
        "statusRate": "0.00",
        "decimel": 0,
        "dataPeriod": "Todas las Camaroneras"
    }
  ]

    return (
        <>
            <PageHeader
                title="Logística"
                highlightText="Aqualink Geolocalización"
            />
            <Main>
                <Row gutter={25}>

                    <Col xxl={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >

                        </Suspense>
                    </Col>

                </Row>
                <Row gutter={25}>

                    <Col xxl={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <OverviewDataStyleWrap style={{ gap: 4 }} className="card-mesh-wrap align-center-v">
                                {data.map((item, i) => {
                                    return <OverviewCardMeshOriginal data={item} key={i} />;
                                })}
                            </OverviewDataStyleWrap>
                        </Suspense>
                    </Col>

                </Row>

                <Row gutter={25}>
                    <Col xl={24} xs={24} style={{ display: 'flex' }}>
                        <GeolocationMap height={480} />
                    </Col>
                </Row>



            </Main>
        </>
    );
}

export default GeolocationCustody;
