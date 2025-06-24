import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';

import CropYieldChart from './analytics/charts/cropYieldChart';
import ProductionSalesProjectionChart from './analytics/charts/ProductionSalesProjectionChart';
import EvolutionParametersBarChart from './analytics/charts/EvolutionParametersBarChart';
import WaterPhysicsDonutChart from './analytics/charts/donut/WaterPhysicsDonutChart';
import Card from 'antd/lib/card/Card';
import SowingDispatchChart from './analytics/charts/SowingDispatchChart';
import RelationParametersChart from './analytics/charts/RelationParametersChart';
import DonutClassifications from '../../components/charts/donut/DonutClassifications';



const chartDataGIV = [
  { label: "PL10", value: 20, color: "#ff6384" },
  { label: "PL12", value: 30, color: "#36a2eb" },
  { label: "PL14", value: 25, color: "#cc65fe" },
  { label: "PL16", value: 25, color: "#ffce56" },
];

const chartDataGPA = [
  { label: "PL10", value: 15, color: "#4bc0c0" },
  { label: "PL12", value: 25, color: "#9966ff" },
  { label: "PL14", value: 35, color: "#ff6384" },
  { label: "PL16", value: 25, color: "#36a2eb" },
];

const chartDataIND = [
  { label: "PL10", value: 10, color: "#cc65fe" },
  { label: "PL12", value: 20, color: "#ffce56" },
  { label: "PL14", value: 30, color: "#4bc0c0" },
  { label: "PL16", value: 40, color: "#9966ff" },
];


const OverviewData = [
  {
    "id": 1,
    "type": "primary",
    "icon": "biomasa.svg",
    "label": "Performance",
    "secondLabel": "De Entrega",
    "total": "1271100",
    "suffix": "larvas",
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
    "label": "Cumplimiento",
    "secondLabel": "De Pescas",
    "total": "62.75",
    "suffix": "kg",
    "prefix": "",
    "status": "growth",
    "statusRate": "6.01",
    "decimel": 2,
    "dataPeriod": "Todas las Camaroneras"
  },
  {
    "id": 3,
    "type": "primary",
    "icon": "health.svg",
    "label": "Performance",
    "secondLabel": "De Coordinación",
    "total": "99.84",
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
    "label": "Cumplimiento",
    "secondLabel": "De Proyecciones",
    "total": "12620",
    "suffix": "lb",
    "prefix": "$",
    "status": "down",
    "statusRate": "1.87",
    "decimel": 0,
    "dataPeriod": "Todas las Camaroneras"
  }
]
function AnalyticsLabs() {


  return (
    <>
      <PageHeader
        highlightText="Aqualink Laboratorios"
        title="Analytics"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>

          <Col xxl={12} xs={24} >
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OverviewDataStyleWrap className="card-mesh-wrap align-center-v">
                {OverviewData.map((item, i) => {
                  return <OverviewCardMeshOriginal data={item} key={i} />;
                })}
              </OverviewDataStyleWrap>
            </Suspense>
          </Col>

        </Row>



        <Row gutter={25}>
          <Col xl={15} xs={24} >
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Despacho de Siembras" size="large">
                <SowingDispatchChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={9} xs={24} style={{ display: "flex" }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Rendimiento de Cultivo (%)" size="large" style={{ width: '100%', height: '100%' }}>
                <CropYieldChart />
              </Cards>
            </Suspense>
          </Col>

          <Card title="Relación Parámetros General" size="large" style={{ width: '100%', height: '100%' }}>
            <Row gutter={25}>
              <Col xl={6} xs={24} >
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <div>
                    <RelationParametersChart />
                  </div>
                </Suspense>
              </Col>
              <Col xl={6} xs={24}>
                <Suspense fallback={<Card headless><Skeleton active /></Card>}>
                  <div style={{ padding: '5px' }}>
                    <DonutClassifications
                      labels={chartDataGIV.map((item) => item.label)}
                      data={chartDataGIV.map((item) => item.value)}
                      backgroundColors={chartDataGIV.map((item) => item.color)}
                      title="Distribución de PL - GIV"
                    />
                  </div>
                </Suspense>
              </Col>

              <Col xl={6} xs={24}>
                <Suspense fallback={<Card headless><Skeleton active /></Card>}>
                  <div style={{ padding: '5px' }}>
                    <DonutClassifications
                      labels={chartDataGPA.map((item) => item.label)}
                      data={chartDataGPA.map((item) => item.value)}
                      backgroundColors={chartDataGPA.map((item) => item.color)}
                      title="Distribución de PL - GPA"
                    />
                  </div>
                </Suspense>
              </Col>

              <Col xl={6} xs={24}>
                <Suspense fallback={<Card headless><Skeleton active /></Card>}>
                  <div style={{ padding: '5px' }}>
                    <DonutClassifications
                      labels={chartDataIND.map((item) => item.label)}
                      data={chartDataIND.map((item) => item.value)}
                      backgroundColors={chartDataIND.map((item) => item.color)}
                      title="Distribución de PL - IND"
                    />
                  </div>
                </Suspense>
              </Col>
            </Row>
          </Card>

        </Row>
      </Main>
    </>
  );
}

export default AnalyticsLabs;
