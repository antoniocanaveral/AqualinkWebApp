import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import OverviewData from '../../demoData/overviewMeshData.json';
import { GoogleMaps } from '../../components/maps/google-maps';
import ProjectionKgPanel from './panel/charts/projections-kg-panel';
import CostProjectionWrapLab from './panel/charts/CostProjectionWrapLab';
import ProjectionPanel from './panel/charts/projection-usd-panel';
import ProductionSalesProjectionChart from './charts/ProductionSalesProjectionChart';

function AnalyticsFarms() {
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

  // Datos de la tabla
  const productData = [
    {
      key: '1',
      producto: 'Ziegler',
      ci: '45%',
      hoy: '2.50 kg',
      disp: '50 kg',
    },
    {
      key: '2',
      producto: 'Artemia',
      ci: 'A',
      hoy: '4.00 kg',
      disp: '15 kg',
    },
    {
      key: '3',
      producto: 'Algas',
      ci: 'A',
      hoy: '0.7 kg',
      disp: '12 kg',
    },
    {
      key: '4',
      producto: 'Flake',
      ci: 'B',
      hoy: '0.90 kg',
      disp: '1.80 kg',
    },
    {
      key: '5',
      producto: 'Vitamina C',
      ci: 'MF35',
      hoy: '0.12 kg',
      disp: '10.00 kg',
    },
  ];

  // Definición de columnas
  const columns = [
    {
      title: 'Producto',
      dataIndex: 'producto',
      key: 'producto',
    },
    {
      title: 'CI',
      dataIndex: 'ci',
      key: 'ci',
    },
    {
      title: 'Hoy',
      dataIndex: 'hoy',
      key: 'hoy',
    },
    {
      title: 'Disp.',
      dataIndex: 'disp',
      key: 'disp',
    },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main"
        highlightText="Aqualink Camaroneras"
        title="Analytics" routes={PageRoutes} />

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
          <Col xl={18} xs={24} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '400px' }}> {/* Establece una altura fija */}
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Proyección Producción Ventas" size="large" style={{ width: '100%', height: '100%' }}> {/* Asegúrate de que el Cards también ocupe toda la altura */}
                <ProductionSalesProjectionChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>


      </Main>
    </>
  );
}

export default AnalyticsFarms;
