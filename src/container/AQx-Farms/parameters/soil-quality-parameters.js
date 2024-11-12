import React, { Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import MagnesiumChart from './charts/MagnesiumChart';
import ComparativeRunsBarChart from '../analytics/charts/ComparativeRunsBarChart';

function SoilQualityFarm() {
  const [scenarios, setScenarios] = useState([]);

  const soilQualityColumns = [
    { title: 'DÍA', dataIndex: 'dia', key: 'dia' },
    { title: 'PH', dataIndex: 'ph', key: 'ph' },
    { title: 'ALCALINIDAD', dataIndex: 'alcalinidad', key: 'alcalinidad' },
    { title: 'AMONIO', dataIndex: 'amonio', key: 'amonio' },
    { title: 'M. ORGÁNICA', dataIndex: 'materiaOrganica', key: 'materiaOrganica' },
    { title: 'REDOX', dataIndex: 'redox', key: 'redox' },
    { title: 'RELACIÓN C:N', dataIndex: 'relacionCN', key: 'relacionCN' },
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

  const treatmentColumns = [
    { title: 'BIOREMEDIACIÓN', dataIndex: 'bioremediacion', key: 'bioremediacion' },
    { title: 'MINERAL', dataIndex: 'mineral', key: 'mineral' },
    { title: 'ÁCIDOS ORGÁNICOS', dataIndex: 'acidosOrganicos', key: 'acidosOrganicos' },
    { title: 'CANTIDAD', dataIndex: 'cantidad', key: 'cantidad' },
    { title: '# DÍAS', dataIndex: 'dias', key: 'dias' },
  ];

  const treatmentData = [
    { key: '1', bioremediacion: 'Probiotics', mineral: 'Cal Hidratada', acidosOrganicos: 'Ácido Láctico', cantidad: '50 kg', dias: 3 },
    { key: '2', bioremediacion: 'Enzimas', mineral: 'Dolomita', acidosOrganicos: 'Ácido Cítrico', cantidad: '30 kg', dias: 5 },
    { key: '3', bioremediacion: 'Bacterias Beneficiosas', mineral: 'Zeolita', acidosOrganicos: 'Ácido Acético', cantidad: '20 kg', dias: 7 },
    { key: '4', bioremediacion: 'Bioestimulantes', mineral: 'Magnesio', acidosOrganicos: 'Ácido Fúlvico', cantidad: '40 kg', dias: 2 },
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
        <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Calidad de Suelo" size="large">
                <Table dataSource={soilQualityData} columns={soilQualityColumns} pagination={false} />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Tratamiento Aplicado" size="large">
                <Table dataSource={treatmentData} columns={treatmentColumns} pagination={false} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default SoilQualityFarm;
