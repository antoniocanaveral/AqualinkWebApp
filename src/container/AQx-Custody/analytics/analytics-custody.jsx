import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import Card from 'antd/lib/card/Card';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { OverviewDataStyleWrap } from '../../dashboard/Style';
import OverviewCardMeshOriginal from '../../../components/cards/OverviewCardMeshOriginal';
import OverviewData from './data.json';
import WaterPhysicsDonutChart from '../../AQx-Farms/analytics/charts/donut/WaterPhysicsDonutChart';
import ConfirmedScheduledFishingEntry from './charts/ConfirmedScheduledFishingEntry';
import FishingPerformanceChart from './charts/FishingPerformanceChart';
import ComplianceClassifications from './charts/ComplianceClassifications';
import DonutClassifications from '../../../components/charts/donut/DonutClassifications';
function AnalyticsCustody() {

  const chartDataChina = [
    { label: "20/30", value: 25, color: "#ff6384" },
    { label: "30-40", value: 35, color: "#36a2eb" },
    { label: "40-50", value: 20, color: "#cc65fe" },
    { label: "50/60", value: 20, color: "#ffce56" },
    { label: "70/80", value: 15, color: "#4bc0c0" },
    { label: "80/100", value: 10, color: "#9966ff" },
  ];

  const chartDataUSA = [
    { label: "20/30", value: 30, color: "#ff6384" },
    { label: "30-40", value: 25, color: "#36a2eb" },
    { label: "40-50", value: 15, color: "#cc65fe" },
    { label: "50/60", value: 10, color: "#ffce56" },
    { label: "70/80", value: 12, color: "#4bc0c0" },
    { label: "80/100", value: 8, color: "#9966ff" },
  ];

  const chartDataEurope = [
    { label: "20/30", value: 20, color: "#ff6384" },
    { label: "30-40", value: 30, color: "#36a2eb" },
    { label: "40-50", value: 25, color: "#cc65fe" },
    { label: "50/60", value: 15, color: "#ffce56" },
    { label: "70/80", value: 5, color: "#4bc0c0" },
    { label: "80/100", value: 5, color: "#9966ff" },
  ];


  return (
    <>
      <PageHeader
        highlightText="Aqualink Empacadora"
        title="Analytics"
        
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
          <Col xl={15} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Ingreso de Pescas Confirmadas frente a Programadas" size="large" >
                <ConfirmedScheduledFishingEntry />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={9} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Rendimiento de Pesca (%)" size="large" >
                <FishingPerformanceChart />
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
                    <ComplianceClassifications />
                  </div>
                </Suspense>
              </Col>
              <Col xl={6} xs={24} >
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <div style={{padding: '15px'}}>
                    <DonutClassifications
                      labels={chartDataChina.map((item) => item.label)}
                      data={chartDataChina.map((item) => item.value)}
                      backgroundColors={chartDataChina.map((item) => item.color)}
                      title="Lotes Confirmados por clasificación-China"
                    />
                  </div>
                </Suspense>
              </Col>
              <Col xl={6} xs={24} >
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <div style={{padding: '15px'}}>
                    <DonutClassifications
                      labels={chartDataUSA.map((item) => item.label)}
                      data={chartDataUSA.map((item) => item.value)}
                      backgroundColors={chartDataUSA.map((item) => item.color)}
                      title="Lotes Confirmados por clasificación - USA"
                    />
                  </div>
                </Suspense>
              </Col>
              <Col xl={6} xs={24} >
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <div style={{padding: '5px'}}>
                    <DonutClassifications
                      labels={chartDataEurope.map((item) => item.label)}
                      data={chartDataEurope.map((item) => item.value)}
                      backgroundColors={chartDataEurope.map((item) => item.color)}
                      title="Lotes Confirmados por clasificación - Europa"
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

export default AnalyticsCustody;
