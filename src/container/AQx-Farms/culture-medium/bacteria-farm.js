import React, { Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Card } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import BioremediationBarChart from './charts/BioremediationBarChart';

function BacteriaFarm() {
  // Datos de bacterias
  const bacteriaReportData = [
    {
      tipo: "Bacillus subtilis",
      presentacion: "Polvo",
      estado: "Sólido",
      sistemaAplicacion: "General",
      aplicacionPrincipal: { cantidad: "5 kg", fecha: "2024-11-15" },
      refuerzo: { cantidad: "2 kg", fecha: "2024-11-20" }
    },
    {
      tipo: "Lactobacillus sp.",
      presentacion: "Líquido",
      estado: "Líquido",
      sistemaAplicacion: "Localizado",
      aplicacionPrincipal: { cantidad: "3kg", fecha: "2024-11-12" },
      refuerzo: { cantidad: "1kg", fecha: "2024-11-18" }
    },
    {
      tipo: "Pseudomonas sp.",
      presentacion: "Polvo",
      estado: "Sólido",
      sistemaAplicacion: "General",
      aplicacionPrincipal: { cantidad: "4 kg", fecha: "2024-11-10" },
      refuerzo: { cantidad: "1.5 kg", fecha: "2024-11-14" }
    },
  ];

  const bioremediationData = [
    { semana: '2024-11-01', cantidadBacterias: 5 },
    { semana: '2024-11-08', cantidadBacterias: 8 },
    { semana: '2024-11-15', cantidadBacterias: 12 },
    { semana: '2024-11-22', cantidadBacterias: 7 },
    { semana: '2024-11-29', cantidadBacterias: 10 },
    { semana: '2024-12-06', cantidadBacterias: 6 },
  ];
  const bacteriaColumns = [
    { title: 'Tipo de Bacteria', dataIndex: 'tipo', key: 'tipo' },
    { title: 'Presentación', dataIndex: 'presentacion', key: 'presentacion' },
    { title: 'Estado', dataIndex: 'estado', key: 'estado' },
    { title: 'S. de Aplicación', dataIndex: 'sistemaAplicacion', key: 'sistemaAplicacion' },
    {
      title: 'Aplicación Principal',
      key: 'aplicacionPrincipal',
      render: (text, record) => (
        <>
          <div>-Cantidad: {record.aplicacionPrincipal.cantidad} <br></br> -Fecha: {record.aplicacionPrincipal.fecha}</div>
        </>
      )
    },
    {
      title: 'Refuerzo',
      key: 'refuerzo',
      render: (text, record) => (
        <>
          <div>-Cantidad: {record.refuerzo.cantidad}<br></br> -Fecha: {record.refuerzo.fecha}</div>
        </>
      )
    },
  ];

  // Datos para la tabla de calidad de suelo
  const soilQualityColumns = [
    { title: 'DÍA', dataIndex: 'dia', key: 'dia' },
    { title: 'PH', dataIndex: 'ph', key: 'ph' },
    { title: 'ALC', dataIndex: 'alcalinidad', key: 'alcalinidad' },
    { title: 'AMONIO', dataIndex: 'amonio', key: 'amonio' },
    { title: 'M. O.', dataIndex: 'materiaOrganica', key: 'materiaOrganica' },
    { title: 'REDOX', dataIndex: 'redox', key: 'redox' },
    { title: 'C:N', dataIndex: 'relacionCN', key: 'relacionCN' },
  ];

  const soilQualityData = [
    { key: '2', dia: '1', ph: '7.5', alcalinidad: '150', amonio: '0.5', materiaOrganica: '2.0', redox: '-100', relacionCN: '12:1' },
    { key: '3', dia: '2', ph: '8.2', alcalinidad: '160', amonio: '0.8', materiaOrganica: '2.1', redox: '-90', relacionCN: '11:1' },
    { key: '4', dia: '3', ph: '7.9', alcalinidad: '140', amonio: '0.6', materiaOrganica: '1.8', redox: '-85', relacionCN: '12:1' },
    { key: '5', dia: '4', ph: '7.8', alcalinidad: '170', amonio: '0.4', materiaOrganica: '2.2', redox: '-75', relacionCN: '13:1' },
    { key: '6', dia: '5', ph: '8.1', alcalinidad: '155', amonio: '0.7', materiaOrganica: '2.0', redox: '-80', relacionCN: '12:1' },
    { key: '7', dia: '6', ph: '7.6', alcalinidad: '130', amonio: '0.5', materiaOrganica: '1.9', redox: '-95', relacionCN: '12:1' },
    { key: '8', dia: '7', ph: '7.4', alcalinidad: '125', amonio: '0.3', materiaOrganica: '1.7', redox: '-105', relacionCN: '11:1' },
    { key: '9', dia: '8', ph: '8.0', alcalinidad: '145', amonio: '0.6', materiaOrganica: '2.3', redox: '-90', relacionCN: '12:1' },
  ];

  return (
    <>
      <PageHeader
        className="ninjadash-page-header-main"
        highlightText="AquaLink Cultivo"
        title="Calidad Medio de Cultivo"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Geolocalización" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={24} md={24}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: "20px" }}>
                      <Badge color="#1890ff" dot style={{ marginRight: 8 }} />
                      <Typography.Title level={3} style={{ margin: 0 }}>Piscina 3</Typography.Title>
                    </div>
                    <GoogleMaps />
                  </Col>
                  <Col xs={24} md={24}>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className="content-block">
                          <Typography.Title style={{ color: "#666d92" }} level={5}>Camaroneras 1</Typography.Title>
                          <Typography.Text>Área: 307.35 ha</Typography.Text>
                        </div>
                        <div className="content-block">
                          <Typography.Title style={{ color: "#666d92" }} level={5}>Piscina 3</Typography.Title>
                          <Typography.Text>Área: 5.35 ha</Typography.Text>
                        </div>
                        <div className="content-block">
                          <Typography.Title style={{ color: "#666d92" }} level={5}>Pre Cría 3</Typography.Title>
                          <Typography.Text>Área: 1.35 ha</Typography.Text>
                        </div>
                      </div>
                    </Space>
                  </Col>
                </Row>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={16} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte de Bacterias" size="large">
                <Table
                  dataSource={bacteriaReportData}
                  columns={bacteriaColumns}
                  pagination={{ pageSize: 8 }}
                  rowKey="tipo"
                />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={14} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Calidad de Suelo" size="large">
                <Table dataSource={soilQualityData} columns={soilQualityColumns} pagination={{ pageSize: 8 }} />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={10} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <BioremediationBarChart height={400} data={bioremediationData} />

            </Suspense>
          </Col>
        </Row>

        <Row>
          <Col xl={14} xs={24}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: "20px" }}>
              <div>Alc: Alcalinidad</div>
              <div>M.O: Materia Orgánica</div>
              <div>C:N: Relación C:N</div>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default BacteriaFarm;
