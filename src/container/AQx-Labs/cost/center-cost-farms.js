import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Speedometer from './charts/Speedometer';
import DonutChartSuplyCost from './charts/DonutChartSuplyCost';
import CostoLineChart from './charts/CostoLineChart';

function CenterCostLabs() {
  const { Text } = Typography;
  const data = [
    {
      key: '1',
      asignacion: 'Tanque 1',
      codigo: '8569',
      valor: '$3,395',
      costo: '$1,250',
      rendimiento: 5, // Positivo
    },
    {
      key: '2',
      asignacion: 'Tanque 1',
      codigo: '8572',
      valor: '$2,820',
      costo: '$950',
      rendimiento: -3, // Negativo
    },
    {
      key: '3',
      asignacion: 'Tanque 2',
      codigo: '8570',
      valor: '$3,672',
      costo: '$1,320',
      rendimiento: 1, // Positivo
    },
    {
      key: '4',
      asignacion: 'Tanque 2',
      codigo: '8573',
      valor: '$2,835',
      costo: '$997',
      rendimiento: -2, // Negativo
    },
    {
      key: '5',
      asignacion: 'Tanque 3',
      codigo: '8571',
      valor: '$3,850',
      costo: '$1,975',
      rendimiento: -12, // Negativo
    },
  ];

  const columns = [
    {
      title: <Text style={{ fontSize: '12px' }}>Asignación </Text>,
      dataIndex: 'asignacion',
      key: 'asignacion',
      render: (text) => <Text style={{ fontSize: '12px' }}>{text}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Código</Text>,
      dataIndex: 'codigo',
      key: 'codigo',
      render: (text) => <Text style={{ fontSize: '12px' }}>{text}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Valor</Text>,
      dataIndex: 'valor',
      key: 'valor',
      render: (text) => <Text style={{ fontSize: '12px' }}>{text}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Costo</Text>,
      dataIndex: 'costo',
      key: 'costo',
      render: (text) => <Text style={{ fontSize: '12px' }}>{text}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>RDTO</Text>,
      dataIndex: 'rendimiento',
      key: 'rendimiento',
      render: (value) => {
        let color = 'black'; // Por defecto, negro
        if (value > 0) {
          color = 'green';
        } else if (value < 0) {
          color = 'red';
        }
        return (
          <Text style={{ color, fontSize: '12px' }}>
            {value > 0 ? `+${value}%` : `${value}%`}
          </Text>
        );
      },
    },
  ];


  const dataSyplyCost = [
    { label: 'Balanceado 30%', value: 6600, color: '#aa61c8' },
    { label: 'Bacteria', value: 1700, color: '#39a7f0' },
    { label: 'Ácidos Orgánicos', value: 1700, color: '#cfd6da' },
    { label: 'Balanceado 40%', value: 2300, color: '#395067' },
    { label: 'Balanceado 35%', value: 3700, color: '#29cba9' },
  ];

  const dataLineChart = [
    { x: 1, 'costo real': 20, 'costo proyectado': 25, crecimiento: 0, optimo: 32 },
    { x: 20, 'costo real': 35, 'costo proyectado': 30, crecimiento: 0, optimo: 32 },
    { x: 40, 'costo real': 50, 'costo proyectado': 45, crecimiento: 0, optimo: 32 },
    { x: 60, 'costo real': 65, 'costo proyectado': 60, crecimiento: 20, optimo: 32 },
    { x: 80, 'costo real': 75, 'costo proyectado': 70, crecimiento: 65, optimo: 32 },
    { x: 100, 'costo real': 85, 'costo proyectado': 80, crecimiento: 75, optimo: 32 },
  ];
  return (
    <>
      <PageHeader
        highlightText="Aqualink Laboratorio"
        title="Centro de Costos"
        selectOptions={[
          ["Lab 1", "Lab 2", "Lab 3"],
          ["Módulo 1", "Módulo 2", "Módulo 3"],
          ["Tanque 1", "Tanque 2", "Tanque 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>

          <Col xl={8} xs={24} style={{ display: "flex" }} >
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title={"Centro de Costos"}>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  bordered
                  rowKey="key"
                />
              </Cards>

            </Suspense>
          </Col>
          <Col xl={8} xs={24} >
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title={"Costos por Suministro"}>
                <DonutChartSuplyCost data={dataSyplyCost} />
              </Cards>

            </Suspense>
          </Col>

          <Col xl={8} xs={24} style={{ display: "flex" }} >
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title={"Performance"}>
                <Speedometer value={85.89} />
              </Cards>

            </Suspense>
          </Col>

        </Row>



        <Row gutter={25}>

          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Costo Tanque/Día" size="large" style={{ width: '100%', height: '100%' }}>
                <CostoLineChart data={dataLineChart} height={400} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CenterCostLabs;
