import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const OverviewDataList = lazy(() => import('./overview/demoTwo/OverviewDataList'));
const SaleRevenue = lazy(() => import('./overview/demoTwo/SaleRevenue'));
const NewProduct = lazy(() => import('./overview/demoTwo/NewProduct'));

const SourceRevenueGenerated = lazy(() => import('./overview/demoTwo/SourceRevenueGenerated'));
const BestSeller = lazy(() => import('./overview/demoTwo/BestSeller'));

function DemoTwo() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Demo 2',
    },
  ];
  return (
    <>
      <PageHeader  title="Dashboard" routes={PageRoutes} />

      <Main>
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
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SaleRevenue />
            </Suspense>
          </Col>
          <Col xxl={12} lg={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SourceRevenueGenerated />
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
              <NewProduct />
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
              <BestSeller />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DemoTwo;
