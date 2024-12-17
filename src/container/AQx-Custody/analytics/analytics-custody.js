import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import Card from 'antd/lib/card/Card';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { OverviewDataStyleWrap } from '../../dashboard/Style';
import OverviewCardMeshOriginal from '../../../components/cards/OverviewCardMeshOriginal';
import OverviewData from './data.json';
import ProductionSalesProjectionChart from '../../AQx-Farms/analytics/charts/ProductionSalesProjectionChart';
import CropYieldChart from '../../AQx-Farms/analytics/charts/cropYieldChart';
import EvolutionParametersBarChart from '../../AQx-Farms/analytics/charts/EvolutionParametersBarChart';
import WaterPhysicsDonutChart from '../../AQx-Farms/analytics/charts/donut/WaterPhysicsDonutChart';
import ConfirmedScheduledFishingEntry from './charts/ConfirmedScheduledFishingEntry';
import FishingPerformanceChart from './charts/FishingPerformanceChart';
function AnalyticsCustody() {


  return (
    <>
      <PageHeader 
        highlightText="Aqualink Empacadora"
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
              <Cards title="Ingreso de Pescas Confirmadas frente a Programadas" size="large" style={{ width: '100%', height: '100%' }}>
                <ConfirmedScheduledFishingEntry />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={9} xs={24} >
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Rendimiento de Pesca (%)" size="large" style={{ width: '100%', height: '100%' }}>
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
                    <EvolutionParametersBarChart />
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
                  <div>
                    <WaterPhysicsDonutChart />
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
                  <div>
                    <WaterPhysicsDonutChart />
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
                  <div>
                    <WaterPhysicsDonutChart />
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
