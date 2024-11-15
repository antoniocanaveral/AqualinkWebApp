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

function ShrimpFarm() {
  // Define las columnas para la tabla de reporte
  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Lote ID',
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
      dataIndex: 'densidad',
      key: 'densidad',
    },
    {
      title: 'T. S.',
      dataIndex: 'totalSembrado',
      key: 'totalSembrado',
    },
    {
      title: 'PL',
      dataIndex: 'pl',
      key: 'pl',
    },
    {
      title: 'Ciclo Pc',
      dataIndex: 'cicloPc',
      key: 'cicloPc',
    },
    {
      title: 'Notificación',
      key: 'notificacion',
      render: (_, record) => (
        <Link to={`/farm/seeding-coords/notification/${record.key}/view`}>
          <UilEye />
        </Link>
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
      densidad: '300/m³',
      sistema: 'Intensivo',
      totalSembrado: 1000,
      pl: 200,
      cicloPc: 'Ciclo 1',
    },
    {
      key: '2',
      fecha: '2024-11-14',
      loteId: 'L002',
      pc: 16,
      pe: 8,
      densidad: '400/m³',
      sistema: 'Semi-intensivo',
      totalSembrado: 1300,
      pl: 240,
      cicloPc: 'Ciclo 2',
    },
    {
      key: '3',
      fecha: '2024-11-14',
      loteId: 'L002',
      pc: 12,
      pe: 6,
      densidad: '400/m³',
      sistema: 'Semi-intensivo',
      totalSembrado: 1200,
      pl: 220,
      cicloPc: 'Ciclo 2',
    },

  ];

  return (
    <>
      <PageHeader
        className="ninjadash-page-header-main"
        highlightText="Aqualink Monitoreo"
        title="Siembra"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
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
                  <Col xs={24} >
                    <GoogleMaps />
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
              <Cards title="Volumen de Pre Cría" size="large">
                <div style={{ width: "75%", margin: "0 auto" }}>
                  <PreCriaVolumeDonutChart />
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
              <Cards title="Reporte de Siembra" size="large">
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
                <div style={{ width: "75%", margin: "0 auto" }}>
                  <PLDistributionDonutChart />
                </div>

              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col xl={14} xs={24} >
            <div style={{ width: "100%", padding: "10px" }} className='flex-row'>
              <div>
                Pc: Pre Cria
              </div>
              <div>
                Pe: Piscina
              </div>
              <div>
                D: Densidad
              </div>
              <div>
                T.S: Total Sembrado
              </div>
              <div>
                P.L: Población
              </div>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ShrimpFarm;
