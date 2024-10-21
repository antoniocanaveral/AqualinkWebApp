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
      highlightText="Aqualink Laboratorios"
      title="Control Panel" routes={PageRoutes} />

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
          <Col xl={14} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Proyección de Costos" size="large">
                <CostProjectionWrapLab />
              </Cards>

            </Suspense>
          </Col>
          <Col xl={10} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Inventario de Productos" size="large">
                {/* Tabla de productos */}
                <Table dataSource={productData} columns={columns} pagination={false} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default PanelLabs;
