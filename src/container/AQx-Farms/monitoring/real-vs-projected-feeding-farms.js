import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Badge } from '../../pages/style';
import ProjectedSuggestedFeedingChart from './feeding/ProjectedSuggestedFeedingChart';

function RealAndProjectedFeeding() {
  // Definición de columnas para la nueva tabla de Alimentación
  const feedingColumns = [
    { title: 'CÓDIGO', dataIndex: 'codigo', key: 'codigo' },
    { title: 'CORRIDA', dataIndex: 'corrida', key: 'corrida' },
    { title: 'LOTE', dataIndex: 'lote', key: 'lote' },
    { title: 'DÍA', dataIndex: 'dia', key: 'dia' },
    { title: 'ALIMENTO PROGRAMADO', dataIndex: 'alimentoProgramado', key: 'alimentoProgramado' },
    { title: 'ALIMENTO ENTREGADO', dataIndex: 'alimentoEntregado', key: 'alimentoEntregado' },
    { title: 'TIPO DE ALIMENTO', dataIndex: 'tipoAlimento', key: 'tipoAlimento' },
    { title: '% PROTEÍNA', dataIndex: 'proteina', key: 'proteina' },
  ];

  // Datos ficticios para la nueva tabla de Alimentación
  const feedingData = [
    { key: '1', codigo: 'A001', corrida: '1', lote: 'L01', dia: '01 Nov', alimentoProgramado: 50, alimentoEntregado: 48, tipoAlimento: 'Pellet', proteina: 30 },
    { key: '2', codigo: 'A002', corrida: '1', lote: 'L02', dia: '02 Nov', alimentoProgramado: 55, alimentoEntregado: 53, tipoAlimento: 'Pellet', proteina: 32 },
    { key: '3', codigo: 'A003', corrida: '1', lote: 'L03', dia: '03 Nov', alimentoProgramado: 60, alimentoEntregado: 59, tipoAlimento: 'Pellet', proteina: 28 },
    { key: '4', codigo: 'A004', corrida: '2', lote: 'L01', dia: '04 Nov', alimentoProgramado: 65, alimentoEntregado: 63, tipoAlimento: 'Gránulo', proteina: 35 },
    { key: '5', codigo: 'A005', corrida: '2', lote: 'L02', dia: '05 Nov', alimentoProgramado: 70, alimentoEntregado: 68, tipoAlimento: 'Gránulo', proteina: 33 },
    { key: '6', codigo: 'A006', corrida: '2', lote: 'L03', dia: '06 Nov', alimentoProgramado: 75, alimentoEntregado: 73, tipoAlimento: 'Pellet', proteina: 31 },
    { key: '7', codigo: 'A007', corrida: '3', lote: 'L01', dia: '07 Nov', alimentoProgramado: 80, alimentoEntregado: 79, tipoAlimento: 'Gránulo', proteina: 34 },
    { key: '8', codigo: 'A008', corrida: '3', lote: 'L02', dia: '08 Nov', alimentoProgramado: 85, alimentoEntregado: 84, tipoAlimento: 'Pellet', proteina: 29 },
    { key: '9', codigo: 'A009', corrida: '3', lote: 'L03', dia: '09 Nov', alimentoProgramado: 90, alimentoEntregado: 88, tipoAlimento: 'Gránulo', proteina: 36 },
    { key: '10', codigo: 'A010', corrida: '3', lote: 'L04', dia: '10 Nov', alimentoProgramado: 95, alimentoEntregado: 92, tipoAlimento: 'Pellet', proteina: 30 },
  ];

  return (
    <>
      <PageHeader
        highlightText="Aqualink Monitoreo"
        title="Alimentación Real Vs Proyectada"
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
              <Cards title="Alimentación Real vs Alimentación Proyectada" size="large">
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
              {/* Tabla de Alimentación */}
              <Cards title="Alimentación" size="large">
                <Table 
                className='table-responsive'
                dataSource={feedingData} columns={feedingColumns} pagination={{ pageSize: 5 }} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default RealAndProjectedFeeding;
