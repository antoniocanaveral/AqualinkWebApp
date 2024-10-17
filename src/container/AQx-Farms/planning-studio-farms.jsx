import React, { lazy, Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Form, Input, DatePicker, TimePicker, Select, Button, Divider } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, HorizontalFormStyleWrap, Main } from '../styled';
import { GoogleMaps } from '../../components/maps/google-maps';
import FormElements from '../forms/FormElements';
import { Option } from 'antd/lib/mentions';

const OverviewDataList = lazy(() => import('../dashboard/overview/demoFarm/OverviewDataList'));
const SalesReport = lazy(() => import('../dashboard/overview/index/SalesReport'));
const SalesGrowth = lazy(() => import('../dashboard/overview/index/SalesGrowth'));
const SalesByLocation = lazy(() => import('../dashboard/overview/index/SalesByLocation'));
const TopSellingProduct = lazy(() => import('../dashboard/overview/index/TopSellingProducts'));
const BrowserState = lazy(() => import('../dashboard/overview/index/BrowserState'));
const SalesOverview = lazy(() => import('../dashboard/overview/index/SalesOverview'));

function PlanningStudioFarms() {
  const [form] = Form.useForm();
  const [scenarios, setScenarios] = useState([]);
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

  const larvaOptions = [
    { value: 1, weight: '0.25-0.35', label: '0.25-0.35 g' },
    { value: 2, weight: '0.36-0.50', label: '0.36-0.50 g' },
    { value: 3, weight: '0.51-0.75', label: '0.51-0.75 g' },
    { value: 4, weight: '0.75-1.00', label: '0.75-1.00 g' },
  ];

  const weekOptions = [
    { value: 9, label: '9 semanas' },
    { value: 10, label: '10 semanas' },
    { value: 11, label: '11 semanas' },
    { value: 12, label: '12 semanas' },
    { value: 13, label: '13 semanas' },
    { value: 14, label: '14 semanas' },
  ];

  const survivalRateOptions = [
    { value: 60, label: '60%' },
    { value: 65, label: '65%' },
    { value: 70, label: '70%' },
    { value: 75, label: '75%' },
    { value: 80, label: '80%' },
    { value: 85, label: '85%' },
  ];

  const fishingWeightOptions = [
    { value: '15-17', label: '15-17 g' },
    { value: '17-19', label: '17-19 g' },
    { value: '19-21', label: '19-21 g' },
    { value: '21-23', label: '21-23 g' },
    { value: '23-26', label: '23-26 g' },
  ];

  const onAddScenario = () => {
    form.validateFields().then((values) => {
      setScenarios([...scenarios, values]);
      form.resetFields();
    });
  };


  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Aqualink Planning Studio®" routes={PageRoutes} />

      <Main>
        <Row gutter={25}>
          <Col xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >

              <Cards title="Studio Planning: Segmento P3" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={24} md={15}>
                    <GoogleMaps />
                  </Col>
                  <Col xs={24} md={9}>
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
          <Col xl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Planificación: Ingreso de Datos para Escenarios" size="large">
                <BasicFormWrapper>
                  <HorizontalFormStyleWrap className="sDash_input-form">
                    <Form form={form} layout="horizontal">
                      {/* Densidad */}
                      <Row align="middle">
                        <Col md={6} xs={24}>
                          <label htmlFor="input-number">Densidad</label>
                        </Col>
                        <Col md={18} xs={24}>
                          <Form.Item name="input-number" rules={[{ required: true, message: 'Campo requerido' }]}>
                            <Input placeholder="00.000" size="small" />
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Peso Larva */}
                      <Row align="middle">
                        <Col md={6} xs={24}>
                          <label htmlFor="basic-select">Peso Larva</label>
                        </Col>
                        <Col md={18} xs={24}>
                          <Form.Item name="basic-select" rules={[{ required: true, message: 'Campo requerido' }]}>
                            <Select size="small" placeholder="Seleccione el peso estimado de su larva">
                              {larvaOptions.map(option => (
                                <Select.Option key={option.value} value={option.value}>
                                  {option.label}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Fecha Siembra */}
                      <Row align="middle">
                        <Col md={6} xs={24}>
                          <label htmlFor="input-date">Fecha Siembra</label>
                        </Col>
                        <Col md={18} xs={24}>
                          <Form.Item name="input-date" rules={[{ required: true, message: 'Campo requerido' }]}>
                            <DatePicker size="small" style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Número de Semanas */}
                      <Row align="middle">
                        <Col md={6} xs={24}>
                          <label htmlFor="week-select">Nª Semanas</label>
                        </Col>
                        <Col md={18} xs={24}>
                          <Form.Item name="week-select" rules={[{ required: true, message: 'Campo requerido' }]}>
                            <Select size="small" placeholder="Seleccione el número de semanas">
                              {weekOptions.map(option => (
                                <Select.Option key={option.value} value={option.value}>
                                  {option.label}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Supervivencia */}
                      <Row align="middle">
                        <Col md={6} xs={24}>
                          <label htmlFor="survival-select">Supervivencia</label>
                        </Col>
                        <Col md={18} xs={24}>
                          <Form.Item name="survival-select" rules={[{ required: true, message: 'Campo requerido' }]}>
                            <Select size="small" placeholder="Seleccione el porcentaje estimado de supervivencia">
                              {survivalRateOptions.map(option => (
                                <Select.Option key={option.value} value={option.value}>
                                  {option.label}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Peso a pesca */}
                      <Row align="middle">
                        <Col md={6} xs={24}>
                          <label htmlFor="fishing-weight-select">Peso a pesca</label>
                        </Col>
                        <Col md={18} xs={24}>
                          <Form.Item name="fishing-weight-select" rules={[{ required: true, message: 'Campo requerido' }]}>
                            <Select size="small" placeholder="Seleccione el peso estimado a pesca">
                              {fishingWeightOptions.map(option => (
                                <Select.Option key={option.value} value={option.value}>
                                  {option.label}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Botones */}
                      <Row justify="end" gutter={10}>
                        <Col>
                          <Button onClick={() => form.resetFields()} type="default">
                            Borrar
                          </Button>
                        </Col>
                        <Col>
                          <Button onClick={onAddScenario} type="primary">
                            Añadir Escenario
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </HorizontalFormStyleWrap>
                </BasicFormWrapper>
              </Cards>



            </Suspense>
          </Col>
        </Row>

        {/* Mostrar escenarios añadidos */}
        <Row gutter={25}>
          {scenarios.length > 0 && (

            scenarios.map((scenario, index) => (
              <Col xl={6} xs={12}>
                <Cards title={`Escenario ${index + 1}`} size="large">
                  <div key={index} style={{ marginBottom: '15px' }}>
                    <Row gutter={[16, 16]}>
                      <Col span={12}>
                        <Typography.Text strong>Densidad:</Typography.Text>
                      </Col>
                      <Col span={12}>
                        <Typography.Text style={{ fontSize: '12px', textAlign: 'left' }}>{scenario['input-number']}</Typography.Text>
                      </Col>

                      <Divider style={{padding:"0px"}} />
                      <Col span={12}>
                        <Typography.Text strong>Peso Larva:</Typography.Text>
                      </Col>
                      <Col span={12}>
                        <Typography.Text style={{ fontSize: '12px', textAlign: 'left' }}>
                          {larvaOptions.find(opt => opt.value === scenario['basic-select']).label}
                        </Typography.Text>
                      </Col>

                      <Col span={12}>
                        <Typography.Text strong>Fecha Siembra:</Typography.Text>
                      </Col>
                      <Col span={12}>
                        <Typography.Text style={{ fontSize: '12px', textAlign: 'left' }}>{scenario['input-date'].format('YYYY-MM-DD')}</Typography.Text>
                      </Col>

                      <Col span={12}>
                        <Typography.Text strong>N Semanas:</Typography.Text>
                      </Col>
                      <Col span={12}>
                        <Typography.Text style={{ fontSize: '12px', textAlign: 'left' }}>
                          {weekOptions.find(opt => opt.value === scenario['week-select']).label}
                        </Typography.Text>
                      </Col>

                      <Col span={12}>
                        <Typography.Text strong>Supervivencia:</Typography.Text>
                      </Col>
                      <Col span={12}>
                        <Typography.Text style={{ fontSize: '12px', textAlign: 'left' }}>
                          {survivalRateOptions.find(opt => opt.value === scenario['survival-select']).label}
                        </Typography.Text>
                      </Col>

                      <Col span={12}>
                        <Typography.Text strong>Peso a pesca:</Typography.Text>
                      </Col>
                      <Col span={12}>
                        <Typography.Text style={{ fontSize: '12px', textAlign: 'left' }}>
                          {fishingWeightOptions.find(opt => opt.value === scenario['fishing-weight-select']).label}
                        </Typography.Text>
                      </Col>
                    </Row>
                  </div>
                </Cards>
              </Col>
            ))

          )}
        </Row>


      </Main >
    </>
  );
}

export default PlanningStudioFarms;
