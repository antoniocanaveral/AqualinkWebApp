import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import { proDataBox } from './analytics/data';
import CostProjectionWrapLab from './panel/charts/CostProjectionWrapLab';
import ProductionSalesProjectionChart from './analytics/charts/ProductionSalesProjectionChart';
import HorizontalBarChart from './analytics/charts/HorizontalBarChart';
import StackedHorizontalBarChart from './analytics/charts/StackedHorizontalBarChart';
import FCAPerformanceChart from './analytics/charts/FCAPerformanceChart';
import BiomasaPerformanceChart from './analytics/charts/BiomasaPerformanceChart';
import OptimizacionCostosPerformanceChart from './analytics/charts/OptimizacionCostosPerformanceChart';
import { OverviewDataStyleWrap } from '../dashboard/Style';

function ProDataAnalyticsFarms() {

  const columns = [

    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Sector',
      dataIndex: 'sector',
      key: 'sector',
    },
    {
      title: 'Piscina',
      dataIndex: 'piscina',
      key: 'piscina',
    },
    {
      title: 'Ventas (k)',
      dataIndex: 'ventas',
      key: 'ventas',
      sorter: (a, b) => a.ventas - b.ventas,
    },
    {
      title: 'Costo Alimento (k)',
      dataIndex: 'costoAlimento',
      key: 'costoAlimento',
      sorter: (a, b) => a.costoAlimento - b.costoAlimento,
    },
    {
      title: 'Beneficio (k)',
      dataIndex: 'beneficio',
      key: 'beneficio',
      sorter: (a, b) => a.beneficio - b.beneficio,
    },
  ];



  const fcaData = [
    { ciclo: 1, fca: 75 },
    { ciclo: 2, fca: 80 },
    { ciclo: 3, fca: 78 },
    { ciclo: 4, fca: 82 },
    { ciclo: 5, fca: 85 },
    { ciclo: 6, fca: 88 },
  ];


  const biomasaData = [
    { ciclo: 1, biomasa: 500 },
    { ciclo: 2, biomasa: 550 },
    { ciclo: 3, biomasa: 530 },
    { ciclo: 4, biomasa: 580 },
    { ciclo: 5, biomasa: 600 },
    { ciclo: 6, biomasa: 620 },
  ];


  const costosData = [
    { ciclo: 1, costos: 20 },
    { ciclo: 2, costos: 18 },
    { ciclo: 3, costos: 19 },
    { ciclo: 4, costos: 17 },
    { ciclo: 5, costos: 16 },
    { ciclo: 6, costos: 15 },
  ];



  const data = [
    {
      key: '1',
      id: 'C-001',
      nombre: 'Camaronera Alpha',
      sector: 'Sector 1',
      piscina: 'Piscina 1',
      ventas: 50,
      costoAlimento: 20,
      beneficio: 30,
    },
    {
      key: '2',
      id: 'C-002',
      nombre: 'Camaronera Beta',
      sector: 'Sector 2',
      piscina: 'Piscina 2',
      ventas: 60,
      costoAlimento: 25,
      beneficio: 35,
    },
    {
      key: '3',
      id: 'C-003',
      nombre: 'Camaronera Gamma',
      sector: 'Sector 1',
      piscina: 'Piscina 3',
      ventas: 55,
      costoAlimento: 22,
      beneficio: 33,
    },
    {
      key: '4',
      id: 'C-004',
      nombre: 'Camaronera Delta',
      sector: 'Sector 3',
      piscina: 'Piscina 1',
      ventas: 70,
      costoAlimento: 30,
      beneficio: 40,
    },
    {
      key: '5',
      id: 'C-005',
      nombre: 'Camaronera Epsilon',
      sector: 'Sector 2',
      piscina: 'Piscina 2',
      ventas: 65,
      costoAlimento: 28,
      beneficio: 37,
    },
  ];

  return (
    <>
      <PageHeader
        highlightText="Aqualink Camaroneras"
        title="Pro Data Analytics"
        selectOptions={[
          ["Todas las Camaroneras", "Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Todos los Sectores", "Sector 1", "Sector 2", "Sector 3"],
          ["Todas las Piscinas", "Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OverviewDataStyleWrap className="card-mesh-wrap align-center-v">
                {proDataBox.map((item, i) => {
                  return <OverviewCardMeshOriginal data={item} key={i} />;
                })}
              </OverviewDataStyleWrap>
            </Suspense>
          </Col>

          <Col xl={9} xs={24} style={{ display: "flex" }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Relación Dinámica de Costo de Producción" size="large" style={{ width: '100%', height: '100%' }}>
                <CostProjectionWrapLab />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={15} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Ventas por Clasificación y Performance" size="large" style={{ width: '100%', height: '100%' }}>
                <HorizontalBarChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={15} xs={24} style={{ display: "flex" }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="TABLA" size="large" style={{ width: '100%', height: '100%' }}>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 5 }}
                  bordered
                  rowClassName="table-row"
                  className="custom-table table-responsive"
                />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={9} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Comportamiento Costo Alimento Integrado" size="large" style={{ width: '100%', height: '100%' }}>
                <StackedHorizontalBarChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="FCA Performacne" size="large" style={{ width: '100%', height: '100%' }}>
                <FCAPerformanceChart data={fcaData} />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Biomasa Performance" size="large" style={{ width: '100%', height: '100%' }}>
                <BiomasaPerformanceChart data={biomasaData} />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Optimización de Costos Performance" size="large" style={{ width: '100%', height: '100%' }}>
                <OptimizacionCostosPerformanceChart data={costosData} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ProDataAnalyticsFarms;
