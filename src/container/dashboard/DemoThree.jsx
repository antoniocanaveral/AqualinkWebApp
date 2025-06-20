import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const OverviewDataList = lazy(() => import('./overview/demoThree/OverviewDataList'));
const MonthlyEarning = lazy(() => import('./overview/demoThree/MonthlyEarning'));
const ProfitGrowth = lazy(() => import('./overview/demoThree/ProfitGrowth'));
const SalesOverview = lazy(() => import('./overview/demoThree/SalesOverview'));
const TopProduct = lazy(() => import('./overview/demoThree/TopProduct'));
const RecentDeals = lazy(() => import('./overview/demoThree/RecentDeals'));
const ActiveUser = lazy(() => import('./overview/demoThree/ActiveUserjs'));

function DemoThree() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Demo 3',
    },
  ];
  return (
    <>
      <PageHeader  title="Dashboard" routes={PageRoutes} />

      <Main>
        <Row justify="center" gutter={25}>
          <Col xxl={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <MonthlyEarning />
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
              <ProfitGrowth />
            </Suspense>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={24}>
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
        </Row>
        <Row justify="center" gutter={25}>
          <Col xxl={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SalesOverview />
            </Suspense>
          </Col>
          <Col xxl={8} lg={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TopProduct />
            </Suspense>
          </Col>
          <Col xxl={8} lg={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <RecentDeals />
            </Suspense>
          </Col>
          <Col xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ActiveUser />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DemoThree;
