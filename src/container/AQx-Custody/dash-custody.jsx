import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const OverviewDataList = lazy(() => import('../dashboard/overview/demoFarm/OverviewDataList'));
const SalesReport = lazy(() => import('../dashboard/overview/index/SalesReport'));
const SalesGrowth = lazy(() => import('../dashboard/overview/index/SalesGrowth'));
const SalesByLocation = lazy(() => import('../dashboard/overview/index/SalesByLocation'));
const TopSellingProduct = lazy(() => import('../dashboard/overview/index/TopSellingProducts'));
const BrowserState = lazy(() => import('../dashboard/overview/index/BrowserState'));

function DashboardCustody() {
  const PageRoutes = [
    {
      path: '/custody',
      breadcrumbName: 'AquaLink',
    },
    {
      path: 'first',
      breadcrumbName: 'Panel de Control',
    },
  ];
  return (
    <>
      <PageHeader  title="Aqualink Custodia Control Panel" routes={PageRoutes} />

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
              <OverviewDataList />
            </Suspense>
          </Col>
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SalesReport />
            </Suspense>
          </Col>
          <Col xxl={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SalesGrowth />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SalesByLocation />
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
              <TopSellingProduct />
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
              <BrowserState />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DashboardCustody;
