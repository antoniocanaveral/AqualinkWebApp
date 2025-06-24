import React, { lazy, Suspense, useRef } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Descriptions } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import TankCarouselCustody from './panel/components/TankCarouselCustody';
import { GoogleMaps } from '../../components/maps/google-maps';
import { Text } from 'recharts';
import {
  IdcardOutlined,
  SlidersOutlined,
  DatabaseOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  ClusterOutlined,
} from '@ant-design/icons';
import TankCarouselLogistic from './panel/components/TankCarouselLogistic';

function PanelLogisticLabs() {

  const OverviewData =
    [
      {
        "id": 1,
        "type": "primary",
        "icon": "biomasa.svg",
        "label": "Capacidad Instalada",
        "total": "1271100",
        "suffix": "larvas",
        "prefix": "",
        "status": "growth",
        "statusRate": "3.36",
        "decimel": 0,
        "dataPeriod": "Todas las Camaroneras"
      },
      {
        "id": 2,
        "type": "primary",
        "icon": "food.svg",
        "label": "Corridas en Curso",
        "total": "1271100",
        "suffix": "larvas",
        "prefix": "",
        "status": "growth",
        "statusRate": "6.01",
        "decimel": 0,
        "dataPeriod": "Todas las Camaroneras"
      },
      {
        "id": 3,
        "type": "primary",
        "icon": "health.svg",
        "label": "Siembras Solicitadas",
        "total": "1000000",
        "suffix": "larvas",
        "prefix": "",
        "status": "growth",
        "statusRate": "1.05",
        "decimel": "",
        "dataPeriod": "Todas las Camaroneras"
      },
      {
        "id": 4,
        "type": "primary",
        "icon": "growth.svg",
        "label": "Proyección",
        "total": "1262000",
        "suffix": "larvas",
        "prefix": "$",
        "status": "down",
        "statusRate": "1.87",
        "decimel": 0,
        "dataPeriod": "Todas las Camaroneras"
      }
    ]


  const data = [
    { key: '1', finca: 'Finca El Progreso', loteID: 'L-001', larva: '40-50', kilos: '1,200', estado: 'Pendiente' },
    { key: '2', finca: 'AgroMar', loteID: 'L-002', larva: '60-70', kilos: '1,500', estado: 'Completado' },
    { key: '3', finca: 'Acuícola Santa Rosa', loteID: 'L-003', larva: '40-50', kilos: '1,000', estado: 'Pendiente' },
    { key: '4', finca: 'Finca La Esperanza', loteID: 'L-004', larva: '60-70', kilos: '900', estado: 'En proceso' },
    { key: '5', finca: 'Grupo Camarón', loteID: 'L-005', larva: '40-50', kilos: '1,700', estado: 'Completado' },
    { key: '6', finca: 'Finca Del Sol', loteID: 'L-006', larva: '40-50', kilos: '1,300', estado: 'Pendiente' },
    { key: '7', finca: 'Pacifiqa', loteID: 'L-007', larva: '60-70', kilos: '800', estado: 'En proceso' },
    { key: '8', finca: 'EcoShrimp', loteID: 'L-008', larva: '40-50', kilos: '1,000', estado: 'Completado' },
    { key: '9', finca: 'Camarones Premium', loteID: 'L-009', larva: '60-70', kilos: '950', estado: 'Pendiente' },
    { key: '10', finca: 'Aquamar', loteID: 'L-010', larva: '40-50', kilos: '1,200', estado: 'Completado' },
  ];



  const columns = [
    { title: 'LoteID', dataIndex: 'loteID', key: 'loteID' },
    { title: 'Clasificación', dataIndex: 'larva', key: 'larva' },
    { title: 'Kilos', dataIndex: 'kilos', key: 'kilos' },
    { title: 'Estado', dataIndex: 'estado', key: 'estado' },
  ];


  const tankData = [
    {
      id: 1,
      nombreCamaronera: 'El Progreso',
      codigoAQLK: 'AQLK001',
      loteID: 'L-001',
      estado: 'Confirmado',
      fechaPesca: '05 Diciembre 2023',
      piscina: 'Piscina 1',
      volumenProgramado: '1.5 M',
      tipoCosecha: 'Manual',
      clasificacionReportada: '60-70',
    },
    {
      id: 2,
      nombreCamaronera: 'Las Palmas',
      codigoAQLK: 'AQLK002',
      loteID: 'L-002',
      estado: 'Confirmado',
      fechaPesca: '06 Diciembre 2023',
      piscina: 'Piscina 2',
      tipoCosecha: 'Manual',
      volumenProgramado: '2.0 M',
      clasificacionReportada: '40-50',
    },
    {
      id: 3,
      nombreCamaronera: 'El Sol',
      codigoAQLK: 'AQLK003',
      loteID: 'L-003',
      estado: 'Confirmado',
      tipoCosecha: 'Manual',
      fechaPesca: '07 Diciembre 2023',
      piscina: 'Piscina 3',
      volumenProgramado: '1.2 M',
      clasificacionReportada: 'PL15',
    },
    {
      id: 4,
      nombreCamaronera: 'Azul',
      codigoAQLK: 'AQLK004',
      loteID: 'L-004',
      estado: 'Confirmado',
      tipoCosecha: 'Manual',
      fechaPesca: '08 Diciembre 2023',
      piscina: 'Piscina 4',
      volumenProgramado: '1.8 M',
      clasificacionReportada: 'PL20',
    },
  ];


  return (
    <>
      <PageHeader
        title="Control Panel"
        highlightText="Aqualink Laboratorio"


      />
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
              <OverviewDataStyleWrap style={{ gap: 4 }} className="card-mesh-wrap align-center-v">
                {OverviewData.map((item, i) => {
                  return <OverviewCardMeshOriginal data={item} key={i} />;
                })}
              </OverviewDataStyleWrap>
            </Suspense>
          </Col>

        </Row>

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
                  <Col xs={24} md={24}>
                    <GoogleMaps height="300px" />
                  </Col>
                  <Col xs={24} md={24}>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <Col xs={24} md={24}>
                        <Descriptions
                          column={{ xs: 1, sm: 2, md: 3 }}
                          bordered
                          size="small"
                          layout="vertical"
                        >
                           <Descriptions.Item label={<Space><ClusterOutlined /> Módulos</Space>}>
                            <Text>5</Text>
                          </Descriptions.Item>

                        
                          <Descriptions.Item label={<Space><DatabaseOutlined /> Tanques</Space>}>
                            <Text>30</Text>
                          </Descriptions.Item>

                        
                        </Descriptions>
                      </Col>
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
              <Cards title="Coordinaciones Activas" size="large">
                <div className="table-responsive">
                  <Table dataSource={data} columns={columns} pagination={{ pageSize: 7 }} />
                </div>
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={24} xs={24} >
            <center>
              <Typography.Title level={4} >
                Detalle de Coordinaciones Activas
              </Typography.Title>
            </center>
            <TankCarouselLogistic tankData={tankData} />
          </Col>
        </Row>

      </Main>
    </>
  );
}

export default PanelLogisticLabs;
