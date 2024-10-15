import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import OverviewData from '../../demoData/overviewMeshData.json';
import { GoogleMaps } from '../../components/maps/google-maps';
import ProjectionKgPanel from './panel/charts/projections-kg-panel';
import ProjectionUsdPanel from './panel/charts/projections-kg-panel';
import ProjectionPanel from './panel/charts/projection-usd-panel';
import TaskLabTable from './task/table/task-table-lab';

const OverviewDataList = lazy(() => import('../dashboard/overview/demoFarm/OverviewDataList'));
const SalesReport = lazy(() => import('../dashboard/overview/index/SalesReport'));
const SalesGrowth = lazy(() => import('../dashboard/overview/index/SalesGrowth'));
const SalesByLocation = lazy(() => import('../dashboard/overview/index/SalesByLocation'));
const TopSellingProduct = lazy(() => import('../dashboard/overview/index/TopSellingProducts'));
const BrowserState = lazy(() => import('../dashboard/overview/index/BrowserState'));
const SalesOverview = lazy(() => import('../dashboard/overview/index/SalesOverview'));


function PanelLabs() {
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
      <PageHeader className="ninjadash-page-header-main" title="Aqualink Camaroneras Control Panel" routes={PageRoutes} />

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
              <OverviewDataStyleWrap className="card-mesh-wrap align-center-v">
                {OverviewData.map((item, i) => {
                  return <OverviewCardMeshOriginal data={item} key={i} />;
                })}
              </OverviewDataStyleWrap>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >

              <Cards title="Studio Planning: Segmento P3" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={20} md={15}>
                    <GoogleMaps />
                  </Col>
                  <Col xs={20} md={9}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>
                      <Badge
                        color="#1890ff"
                        dot
                        style={{ marginRight: 8 }}
                      />
                      <Typography.Title level={3} style={{ margin: 0 }}>Piscina 3</Typography.Title>
                    </div>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>


                      <div className="content-block">
                        <Typography.Title level={5}>Camaroneras 1</Typography.Title>
                        <Typography.Text>Área: 307.35 ha</Typography.Text>
                      </div>

                      <div className="content-block">
                        <Typography.Title level={5}>Piscina 3</Typography.Title>
                        <Typography.Text>Área: 5.35 ha</Typography.Text>
                      </div>

                      <div className="content-block">
                        <Typography.Title level={5}>Pre Cría 3</Typography.Title>
                        <Typography.Text>Área: 1.35 ha</Typography.Text>
                      </div>
                    </Space>
                  </Col>
                </Row>
              </Cards>

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
              <ProjectionKgPanel />
            </Suspense>
          </Col>





        </Row>

        <Row gutter={25}>
          <Col xl={18} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Administrador de Tareas" size="large">
                <TaskLabTable />
              </Cards>

            </Suspense>
          </Col>
          <Col xl={6} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ProjectionKgPanel />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default PanelLabs;
