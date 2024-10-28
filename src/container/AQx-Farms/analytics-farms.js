import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import OverviewData from '../../demoData/overviewMeshData.json';
import CropYieldChart from './analytics/charts/cropYieldChart';
import ProductionSalesProjectionChart from './analytics/charts/ProductionSalesProjectionChart';
import EvolutionParametersBarChart from './analytics/charts/EvolutionParametersBarChart';
import WaterPhysicsDonutChart from './analytics/charts/donut/WaterPhysicsDonutChart';
import SoilPhysicsDonutChart from './analytics/charts/donut/SoilPhysicsDonutChart';
import BiomechanicalDonutChart from './analytics/charts/donut/BiomechanicalDonutChart';

function AnalyticsFarms() {
 

  return (
    <>
      <PageHeader className="ninjadash-page-header-main"
        highlightText="Aqualink Camaroneras"
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
          <Col xl={15} xs={24} style={{ display: 'flex' }}> 
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Proyección Producción Ventas" size="large" style={{ width: '100%', height: '100%' }}> 
                <ProductionSalesProjectionChart />
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
              <Cards title="Rendimiento de Cultivo (%)" size="large" style={{ width: '100%', height: '100%' }}>
                <CropYieldChart />
              </Cards>
            </Suspense>
          </Col>

          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Relación de Parámetros Semanal " size="large" style={{ width: '100%', height: '100%' }}>
                <center>
                  <Typography.Text strong style={{ fontSize: "1.2rem" }}>Evolución de Parámetros</Typography.Text>
                </center>
                <br />
                <br />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ width: "26%" }}>
                    <EvolutionParametersBarChart />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", width: "70%" }}>
                    <div>
                      <WaterPhysicsDonutChart />
                    </div>
                    <div>
                      <SoilPhysicsDonutChart />
                    </div>
                    <div>
                      <BiomechanicalDonutChart />
                    </div>
                  </div>
                </div>
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default AnalyticsFarms;
