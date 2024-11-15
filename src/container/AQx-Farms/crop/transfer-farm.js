import React, { Suspense } from 'react';
import { Row, Col, Typography, Table, Modal, Card, Skeleton, Badge, Space, Button, Progress } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import { Link } from 'react-router-dom';
import PCEfficiencyComparisonChart from './biomass/PCEfficiencyComparisonChart';

function TransferFarm() {
  // Define las columnas para la tabla de reporte
  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Lote',
      dataIndex: 'loteId',
      key: 'loteId',
    },
    {
      title: 'Pc',
      dataIndex: 'pc',
      key: 'pc',
    },
    {
      title: 'Pe',
      dataIndex: 'pe',
      key: 'pe',
    },
    {
      title: 'D',
      dataIndex: 'densidadSembrada',
      key: 'densidadSembrada',
    },
    {
      title: 'D. P',
      dataIndex: 'diasPc',
      key: 'diasPc',
    },
    {
      title: 'P. X',
      dataIndex: 'pesoPromedio',
      key: 'pesoPromedio',
    },
    {
      title: 'P. T',
      dataIndex: 'pesoTotalTransferido',
      key: 'pesoTotalTransferido',
    },
    {
      title: 'Población Est.',
      dataIndex: 'poblacionEstimada',
      key: 'poblacionEstimada',
    },
    {
      title: 'Acción',
      key: 'accion',
      render: (_, record) => (
        <Button icon={<UilEye />} type="link">
        </Button>
      ),
    },
  ];

  // Datos de ejemplo para la tabla
  const data = [
    {
      key: '1',
      fecha: '2024-11-13',
      loteId: 'L001',
      pc: 10,
      pe: 5,
      densidadSembrada: '300/m³',
      diasPc: 30,
      pesoPromedio: '200g',
      pesoTotalTransferido: '200kg',
      poblacionEstimada: 1000,
    },
    {
      key: '2',
      fecha: '2024-11-14',
      loteId: 'L002',
      pc: 12,
      pe: 6,
      densidadSembrada: '400/m³',
      diasPc: 25,
      pesoPromedio: '250g',
      pesoTotalTransferido: '300kg',
      poblacionEstimada: 1200,
    },
    // Agrega más datos si es necesario
  ];



  return (
    <>
      <PageHeader
        className="ninjadash-page-header-main"
        highlightText="Aqualink Monitoreo"
        title="Transferencia"
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
              <Cards title="Performace" size="large">
                <div className='ninjadash-sales-inner' style={{ width: "50%", margin: "0 auto" }}>
                  <Progress
                    type="circle"
                    width={230}
                    percent={75}
                    strokeColor="#0372CE"
                    trailColor={'#E6D5F6'}
                  />
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
              <Cards title="Reporte Transferencia" size="large">

                <br />
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
              <PCEfficiencyComparisonChart />
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col xl={14} xs={24} >
            <div style={{ width: "100%", padding: "10px" }} className='flex-row'>
              <div>
                D. P: Días de Pre Cria
              </div>
              <div>
                P. X: Peso Promedio
              </div>
              <div>
                D: Densidad
              </div>
              <div>
                P. T: Peso Total Transferido
              </div>
            </div>
          </Col>
        </Row>

      </Main>
    </>
  );
}

export default TransferFarm;
