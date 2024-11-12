import React, { Suspense, useState } from 'react';
import axios from 'axios';
import { Row, Col, Skeleton, Typography, Badge, Space, Form, Input, DatePicker, Select, Button, Divider } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { BasicFormWrapper, HorizontalFormStyleWrap, Main } from '../../styled';
import DissolvedOxygenBehaviorChart from './charts/DissolvedOxygenBehaviorChart';
import DissolvedOxygenAMChart from './charts/PhChart';
import DissolvedOxygenPMChart from './charts/DissolvedOxygenPMChart';
import DissolvedOxygenHalfDayChart from './charts/DissolvedOxygenHalfDayChart';

function ODParametersFarms() {
  const [form] = Form.useForm();
  const [scenarios, setScenarios] = useState([]);
  const PageRoutes = [
    { path: '/admin', breadcrumbName: 'AquaLink Parámetros' },
    { path: 'first', breadcrumbName: 'Panel de Control' },
  ];




  return (
    <>
      <PageHeader className="ninjadash-page-header-main" highlightText={"AquaLink Parámetros:"}
        title="OD y Temperatura"
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
              <Cards title="Comportamiento de Oxígeno Disuelto" size="large">
                <DissolvedOxygenBehaviorChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Oxígeno Disuelto AM" size="large">
              <DissolvedOxygenAMChart />
            </Cards>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex"}}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Oxígeno Disuelto Medio día" size="large">
                <DissolvedOxygenHalfDayChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex"}}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Oxígeno Disuelto PM" size="large">
                <DissolvedOxygenPMChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main >
    </>
  );
}

export default ODParametersFarms;

