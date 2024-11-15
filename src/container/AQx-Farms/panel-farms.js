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

function PanelFarms() {
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

  // Datos de la tabla de Coordinación de Cosechas
  const harvestData = [
    { key: '1', cliente: 'EcSSA Manabí', tipo: 'Reserva', larva: 'PL10', cantidad: '1.5 M', fecha: '04 Diciembre 2023', asignacion: 'Tanque 1' },
    { key: '2', cliente: 'Camarones Premium SA', tipo: 'Reserva', larva: 'PL10', cantidad: '500,000', fecha: '04 Diciembre 2023', asignacion: 'Tanque 9' },
    { key: '3', cliente: 'Palo Alto Cia Ltda', tipo: 'Pedido', larva: 'PL10', cantidad: '800,000', fecha: '05 Diciembre 2023', asignacion: 'Tanque 6' },
    { key: '4', cliente: 'Aquamar', tipo: 'Reserva', larva: 'PL12', cantidad: '900,000', fecha: '05 Diciembre 2023', asignacion: 'Tanque 4' },
    { key: '5', cliente: 'Pacifiqa del Sur', tipo: 'Reserva', larva: 'PL10', cantidad: '1 M', fecha: '05 Diciembre 2023', asignacion: 'Tanque 2' },
    { key: '6', cliente: 'EcSSA Manabí', tipo: 'Reserva', larva: 'PL12', cantidad: '500,000', fecha: '06 Diciembre 2023', asignacion: 'Tanque 8' },
    { key: '7', cliente: 'Unirsa', tipo: 'Reserva', larva: 'PL12', cantidad: '500,000', fecha: '06 Diciembre 2023', asignacion: 'Tanque 7' },
    { key: '8', cliente: 'Acuirsa', tipo: 'Reserva', larva: 'PL10', cantidad: '1.5 M', fecha: '07 Diciembre 2023', asignacion: 'Tanque 6' },
    { key: '9', cliente: 'Grupo Acuícola', tipo: 'Reserva', larva: 'PL12', cantidad: '800,000', fecha: '08 Diciembre 2023', asignacion: 'Tanque 5' },
    { key: '10', cliente: 'Shrimp Global', tipo: 'Reserva', larva: 'PL10', cantidad: '1 M', fecha: '08 Diciembre 2023', asignacion: 'Tanque 1' },
  ];


  // Definición de columnas para la tabla de Coordinación de Cosechas
  const harvestColumns = [
    { title: 'Cliente', dataIndex: 'cliente', key: 'cliente' },
    { title: 'Tipo', dataIndex: 'tipo', key: 'tipo' },
    { title: 'Larva', dataIndex: 'larva', key: 'larva' },
    { title: 'Cantidad', dataIndex: 'cantidad', key: 'cantidad' },
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'Asignación', dataIndex: 'asignacion', key: 'asignacion' },
  ];


  const tankData = [
    {
      id: 1,
      modulo: 'Módulo 1',
      tanque: 'Tanque 1',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },
    {
      id: 2,
      modulo: 'Módulo 1',
      tanque: 'Tanque 2',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },
  ];



  const TankCard = ({ data }) => (
    <div headless
      style={{
        border: '2px solid #e3e3e3',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
      }}>
      <Typography.Title level={5}>{data.modulo}</Typography.Title>
      <Typography.Title level={4} style={{ color: '#0372ce' }}>
        {data.tanque} · {data.porcentaje}%
      </Typography.Title>
      <div style={{ marginBottom: '16px' }}>
        <Typography.Text>Inicio Cultivo: {data.inicioCultivo}</Typography.Text><br />
        <Typography.Text>Fin Cultivo: {data.finCultivo}</Typography.Text><br />
        <Typography.Text>Población final: {data.poblacionFinal}</Typography.Text><br />
        <Typography.Text>Supervivencia: {data.supervivencia}</Typography.Text><br />
        <Typography.Text>Estado de Entrega: {data.estadoEntrega}</Typography.Text><br />
        <Typography.Text>Animales/g: {data.animalesPorGramo}</Typography.Text><br />
        <Typography.Text style={{ color: 'red', fontWeight: 'bold' }}>
          RESERVADO: {data.reservado}
        </Typography.Text><br />
        <Typography.Text style={{ color: 'green', fontWeight: 'bold' }}>
          DISPONIBLE: {data.disponible}
        </Typography.Text>
      </div>
      <button style={{ backgroundColor: '#0372ce', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
        Ver tanque
      </button>
    </div>
  );

  return (
    <>
      <PageHeader
        title="Control Panel"
        highlightText="Aqualink Camaronera"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
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
              <OverviewDataStyleWrap className="card-mesh-wrap align-center-v">
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
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
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


        <Row gutter={25} equal-heights>
          <Col xl={15} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              {/* Tabla de Coordinación de Cosechas */}
              <Cards title="Coordinación de Cosechas" size="large">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <Table dataSource={harvestData} columns={harvestColumns} pagination={{ pageSize: 5 }} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>
                    {tankData.map((tank) => (
                      <TankCard data={tank} />
                    ))}
                  </div>
                </div>
              </Cards>
            </Suspense>
          </Col>

          <Col xl={9} xs={24} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Gráfico de Proyección de Costos */}
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Proyección de Costos" size="large" style={{ flex: 1 }}>
                <CostProjectionWrapLab />
              </Cards>
            </Suspense>

            {/* Tabla de Inventario de Productos */}
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Inventario de Productos" size="large" style={{ flex: 1 }}>
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

export default PanelFarms;
