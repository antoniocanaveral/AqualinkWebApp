import React, { Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Card } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import ProjectedSuggestedFeedingChart from '../monitoring/feeding/ProjectedSuggestedFeedingChart';
import BiomassEvolutionChart from './biomass/BiomassEvolutionChart';

function PopulationBiomassFarm() {

  const populationResults = [
    { label: "Título", value: "EcSSA Esmeraldas · P1" },
    { label: "Área", value: "4.76 ha" },
    { label: "Animales Capturados", value: 329 },
    { label: "Lances", value: 12 },
    { label: "Animales por Lance", value: "27,416" },
    { label: "Área de Atarraya", value: 4 },
    { label: "Animales por m²", value: "6,854" },
    { label: "Animales totales", value: "274,167", bold: true },
    { label: "Peso promedio (100 camarones)", value: "11.4 g", highlight: true },
    { label: "Fecha de Siembra", value: "23 Feb 2021" },
    { label: "Siembra Total", value: "360,000" },
    { label: "Sobrevivencia", value: "76%" },
    { label: "Biomasa Estimada (lb)", value: "6,884", bold: true },
  ];



  const chronologicalData = [
    { fecha: '2024-01-01', loteId: 'L001', semanaCiclo: 1, poblacion: 10000, pesoPromedio: '10g', biomasa: '100kg' },
    { fecha: '2024-01-08', loteId: 'L001', semanaCiclo: 2, poblacion: 9800, pesoPromedio: '15g', biomasa: '147kg' },
    { fecha: '2024-01-15', loteId: 'L001', semanaCiclo: 3, poblacion: 9600, pesoPromedio: '20g', biomasa: '192kg' },
  ];

  const columns = [
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'S.C', dataIndex: 'semanaCiclo', key: 'semanaCiclo' },
    { title: 'Lote', dataIndex: 'loteId', key: 'loteId' },
    { title: 'Población', dataIndex: 'poblacion', key: 'poblacion' },
    { title: 'P. X', dataIndex: 'pesoPromedio', key: 'pesoPromedio' },
    { title: 'Biomasa', dataIndex: 'biomasa', key: 'biomasa' },
  ];
  return (
    <>
      <PageHeader  highlightText={"AquaLink Parámetros:"}
        title="Población-Biomasa"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={11} xs={24} style={{ display: "flex" }}>
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
          <Col xl={13} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte de Población" size="large">
                <div className="report-container">
                  <div className="header">
                    <span className="title">{populationResults[0].value}</span>
                    <span className="area">{populationResults[1].value}</span>
                  </div>
                  <hr className="divider" />

                  <div className="section-title">Resultados de Población</div>
                  <div className="details">
                    {populationResults.slice(2, 8).map((item) => (
                      <div className="detail-item" key={item.label}>
                        <span className="label">{item.label}</span>
                        <span className={`value ${item.bold ? 'bold' : ''}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="weight-section">
                    <span className="weight-label">{populationResults[8].label}</span>
                    <div className="weight-value-box">
                      <span className="weight-value">{populationResults[8].value}</span>
                    </div>
                  </div>

                  <div className="additional-details">
                    {populationResults.slice(9).map((item) => (
                      <div className="additional-detail-item" key={item.label}>
                        <span className="label">{item.label}</span>
                        <span className={`value ${item.bold ? 'bold' : ''}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Cards>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={11} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte Cronológico de poblaciones" size="large">
                <div className='flex-row'>
                  <div>
                    S. Ciclo: Semana de ciclo
                  </div>
                  <div>
                    P. Promedio: Peso Promedio
                  </div>
                </div>
                <br />
                <Table
                  columns={columns}
                  dataSource={chronologicalData}
                  pagination={{ pageSize: 5 }}
                  rowKey="fecha"
                />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={13} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Evolución de Biomasa" size="large">
                <BiomassEvolutionChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default PopulationBiomassFarm;
