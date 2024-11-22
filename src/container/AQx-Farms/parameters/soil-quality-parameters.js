import React, { Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Button } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import ComparativeRunsBarChart from '../analytics/charts/ComparativeRunsBarChart';
import { Link } from 'react-router-dom';

function SoilQualityFarm() {

  const soilQualityColumns = [
    { title: 'CICLO', dataIndex: 'dia', key: 'dia' },
    { title: 'FECHA', dataIndex: 'fecha', key: 'fecha' },
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
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" highlightText={"AquaLink Parámetros:"}
        title="Calidad de Suelo"
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
              <ComparativeRunsBarChart />
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={24} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Calidad de Suelo" size="large">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: "20px" }}>
                  <div>
                    Alc: Alcalinidad <br />
                  </div>
                  <div>
                    M.O: Materia Orgánica <br />
                  </div>
                  <div>
                    C:N: Relación C:N <br />
                  </div>
                </div>
                <Table dataSource={soilQualityData} columns={soilQualityColumns} pagination={false} />
              </Cards>
            </Suspense>
          </Col>

        </Row>
        <center>
          <Link to="/farm/culture-medium/preparation-bioremediation">
            <Button type="primary" style={{ marginTop: "20px" }}
            >Ir a Biorremediación</Button>
          </Link>
        </center>
      </Main>
    </>
  );
}

export default SoilQualityFarm;
