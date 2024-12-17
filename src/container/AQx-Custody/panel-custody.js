import React, { lazy, Suspense, useRef } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import OverviewData from './panel/data/panelCustody.json';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import TankCard from './panel/components/TankCard';
import TankCarouselCustody from './panel/components/TankCarouselCustody';

function PanelCustody() {



  // Datos de la tabla de Coordinación de Cosechas
  const data = [
    { key: '1', finca: 'Finca El Progreso', loteID: 'L-001', larva: 'PL10', kilos: '1,200', estado: 'Pendiente' },
    { key: '2', finca: 'AgroMar', loteID: 'L-002', larva: 'PL12', kilos: '1,500', estado: 'Completado' },
    { key: '3', finca: 'Acuícola Santa Rosa', loteID: 'L-003', larva: 'PL10', kilos: '1,000', estado: 'Pendiente' },
    { key: '4', finca: 'Finca La Esperanza', loteID: 'L-004', larva: 'PL12', kilos: '900', estado: 'En proceso' },
    { key: '5', finca: 'Grupo Camarón', loteID: 'L-005', larva: 'PL10', kilos: '1,700', estado: 'Completado' },
    { key: '6', finca: 'Finca Del Sol', loteID: 'L-006', larva: 'PL10', kilos: '1,300', estado: 'Pendiente' },
    { key: '7', finca: 'Pacifiqa', loteID: 'L-007', larva: 'PL12', kilos: '800', estado: 'En proceso' },
    { key: '8', finca: 'EcoShrimp', loteID: 'L-008', larva: 'PL10', kilos: '1,000', estado: 'Completado' },
    { key: '9', finca: 'Camarones Premium', loteID: 'L-009', larva: 'PL12', kilos: '950', estado: 'Pendiente' },
    { key: '10', finca: 'Aquamar', loteID: 'L-010', larva: 'PL10', kilos: '1,200', estado: 'Completado' },
  ];


  // Definición de columnas para la tabla de Coordinación de Cosechas
  const columns = [
    { title: 'Fincas', dataIndex: 'finca', key: 'finca' },
    { title: 'LoteID', dataIndex: 'loteID', key: 'loteID' },
    { title: 'Larva', dataIndex: 'larva', key: 'larva' },
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
        clasificacionReportada: 'PL12',
    },
    {
        id: 2,
        nombreCamaronera: 'Las Palmas',
        codigoAQLK: 'AQLK002',
        loteID: 'L-002',
        estado: 'Confirmado',
        fechaPesca: '06 Diciembre 2023',
        piscina: 'Piscina 2',
        volumenProgramado: '2.0 M',
        clasificacionReportada: 'PL10',
    },
    {
        id: 3,
        nombreCamaronera: 'El Sol',
        codigoAQLK: 'AQLK003',
        loteID: 'L-003',
        estado: 'Confirmado',
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
        highlightText="Aqualink Empacadora"
        selectOptions={[
          ["Todas las camaroneras", "Camaronera 2", "Camaronera 3"],
          ["Todos los Sectores", "Sector 1", "Sector 2", "Sector 3"],
          ["Todas las Piscinas", "Piscina 1", "Piscina 2", "Piscina 3"]
        ]}

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
              <AqualinkMaps width={'100%'} height={
                window.innerWidth >= 2000 ? '600px' :
                  '205px'
              } />
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
                Lotes Activos
              </Typography.Title>
            </center>
            <TankCarouselCustody tankData={tankData} />
          </Col>
        </Row>

      </Main>
    </>
  );
}

export default PanelCustody;
