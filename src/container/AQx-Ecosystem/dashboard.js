import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const EcoSystemList = lazy(() => import('./overview/EcoSystem/EcoSystemList'));

function DashboardEcosystem() {
 
  return (
    <>
     
      <Main>
        <Row gutter={25}>
          <Col xxl={24} xs={24}>
            <Suspense
              fallback={
                <Cards>
                  <Skeleton active />
                </Cards>
              }
            >
              <EcoSystemList />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DashboardEcosystem;
