import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Badge } from '../../pages/style';
import ProjectedSuggestedFeedingChart from './feeding/ProjectedSuggestedFeedingChart';

function PlateSamplingFarm() {
  // Definición de columnas para la tabla de Alimentación/Muestreo de Platos
  const feedingColumns = [
    { title: 'DÍA', dataIndex: 'dia', key: 'dia' },
    { title: 'PLATO 1', dataIndex: 'plato1', key: 'plato1' },
    { title: 'PLATO 2', dataIndex: 'plato2', key: 'plato2' },
    { title: 'PLATO 3', dataIndex: 'plato3', key: 'plato3' },
    { title: 'PLATO 4', dataIndex: 'plato4', key: 'plato4' },
    { title: 'PLATO N', dataIndex: 'platoN', key: 'platoN' },
    { title: 'PROMEDIO DE CONSUMO', dataIndex: 'promedioConsumo', key: 'promedioConsumo' },
    { title: 'VARIACIÓN DE CONSUMO SUGERIDO', dataIndex: 'variacionConsumo', key: 'variacionConsumo' },
  ];

  // Datos ficticios para la tabla de Alimentación/Muestreo de Platos
  const feedingData = [
    { key: '1', dia: '01 Nov', plato1: 15, plato2: 18, plato3: 16, plato4: 17, platoN: 20, promedioConsumo: 17.2, variacionConsumo: 1.1 },
    { key: '2', dia: '02 Nov', plato1: 16, plato2: 19, plato3: 18, plato4: 16, platoN: 21, promedioConsumo: 18.0, variacionConsumo: 1.3 },
    { key: '3', dia: '03 Nov', plato1: 17, plato2: 18, plato3: 19, plato4: 15, platoN: 22, promedioConsumo: 18.2, variacionConsumo: 1.5 },
    { key: '4', dia: '04 Nov', plato1: 18, plato2: 17, plato3: 20, plato4: 16, platoN: 23, promedioConsumo: 18.8, variacionConsumo: 1.7 },
    { key: '5', dia: '05 Nov', plato1: 19, plato2: 21, plato3: 22, plato4: 18, platoN: 24, promedioConsumo: 20.8, variacionConsumo: 1.9 },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main"
        highlightText="Aqualink Monitoreo"
        title="Alimentación/muestreo de Platos"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
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
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Alimentación Proyectada - Alimentación Sugerida x variación de Consumo de Platos" size="large">
                <ProjectedSuggestedFeedingChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25} equal-heights>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              {/* Tabla de Alimentación/Muestreo de Platos */}
              <Cards title="Alimentación/Muestreo de Platos" size="large">
                <Table dataSource={feedingData} columns={feedingColumns} pagination={{ pageSize: 5 }} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default PlateSamplingFarm;
