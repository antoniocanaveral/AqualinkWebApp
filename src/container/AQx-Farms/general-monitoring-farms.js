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
import GrowthChart from './monitoring/general/GrowthChart';
import SurvivalChart from './monitoring/general/SurvivalChart';
import ConsumptionSuppliesChart from './monitoring/general/ConsumptionSuppliesChart';

function GeneralMonitoringFarm() {


  return (
    <>
      <PageHeader className="ninjadash-page-header-main"
        highlightText="Aqualink "
        title="Monitoreo General"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
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
              <Cards title="Rendimiento de Cultivo (%)" size="large" style={{ width: '100%', height: '100%' }}>
                <ConsumptionSuppliesChart />
              </Cards>
            </Suspense>
          </Col>

        </Row>
      </Main>
    </>
  );
}

export default GeneralMonitoringFarm;
