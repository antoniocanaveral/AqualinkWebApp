import React, { Suspense } from 'react';
import { Row, Col, Typography, Table, Card, Skeleton, Badge, Space } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Link } from 'react-router-dom';
import PreCriaVolumeDonutChart from './biomass/PreCriaVolumDonutChart';
import PLDistributionDonutChart from './biomass/PlDistributionDonutChart';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import TexturePreFishingDonutChart from './biomass/TexturePreFishingDonutChart';
import TexturePercentageChart from './biomass/TexturePercentageChart';

function TextureFarm() {

  const columns = [
    {
      title: 'Lote ID',
      dataIndex: 'codigo',
      key: 'codigo',
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
    },
    {
      title: 'Textura',
      dataIndex: 'textura',
      key: 'textura',
    },
    {
      title: 'Duro',
      dataIndex: 'duro',
      key: 'duro',
    },
    {
      title: 'Flácido',
      dataIndex: 'flacido',
      key: 'flacido',
    },
    {
      title: 'Mudado',
      dataIndex: 'mudado',
      key: 'mudado',
    },
  ];

  // Datos de ejemplo para la tabla
  const data = [
    {
      key: '1',
      codigo: 'C001',
      fecha: '2024-11-13',
      descripcion: 'textura -7',
      textura: 'día 1',
      duro: '60%',
      flacido: '10%',
      mudado: '30%',
    },
    {
      key: '2',
      codigo: 'C002',
      fecha: '2024-11-14',
      descripcion: 'textura -6',
      textura: 'día 2',
      duro: '60%',
      flacido: '20%',
      mudado: '20%',
    },
    {
      key: '3',
      codigo: 'C003',
      fecha: '2024-11-15',
      descripcion: 'textura -5',
      textura: 'día 3',
      duro: '70%',
      flacido: '10%',
      mudado: '20%',
    },
    {
      key: '4',
      codigo: 'C004',
      fecha: '2024-11-16',
      descripcion: 'textura -4',
      textura: 'día 4',
      duro: '80%',
      flacido: '10%',
      mudado: '10%',
    },
    {
      key: '5',
      codigo: 'C005',
      fecha: '2024-11-17',
      descripcion: 'textura -3',
      textura: 'día 5',
      duro: '90%',
      flacido: '5%',
      mudado: '5%',
    },
  ];
  return (
    <>
      <PageHeader
        
        highlightText="Aqualink Monitoreo"
        title="Textura"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={14} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Geolocalización" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={20} md={15}>
                    <GoogleMaps />
                  </Col>
                  <Col xs={20} md={9}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>
                      <Badge color="#1890ff" dot style={{ marginRight: 8 }} />
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
          <Col xl={10} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Textura Pre Cosecha" size="large">
                <div style={{ width: "75%", margin: "0 auto" }}>
                  <TexturePreFishingDonutChart />
                </div>

              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={14} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Reporte de Textura" size="large">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 5 }}
                />
              </Cards>
            </Suspense>
          </Col>

          <Col xl={10} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Distribución de Pl" size="large">
                <TexturePercentageChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default TextureFarm;
