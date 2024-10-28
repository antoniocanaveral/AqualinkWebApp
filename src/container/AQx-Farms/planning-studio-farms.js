import React, { Suspense, useState } from 'react';
import axios from 'axios';
import { Row, Col, Skeleton, Typography, Badge, Space, Form, Input, DatePicker, Select, Button, Divider } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, HorizontalFormStyleWrap, Main } from '../styled';
import { GoogleMaps } from '../../components/maps/google-maps';

function PlanningStudioFarms() {
  const [form] = Form.useForm();
  const [scenarios, setScenarios] = useState([]);
  const PageRoutes = [
    { path: '/admin', breadcrumbName: 'AquaLink' },
    { path: 'first', breadcrumbName: 'Panel de Control' },
  ];

  // Opciones para los selects
  const larvaOptions = [
    { value: 1, weight: 0.3, label: '0.25-0.35 g' }, // Cambia "weight" a un valor promedio o específico
    { value: 2, weight: 0.4, label: '0.36-0.50 g' },
    { value: 3, weight: 0.6, label: '0.51-0.75 g' },
    { value: 4, weight: 0.9, label: '0.75-1.00 g' },
  ];

  const onAddScenario = async () => {
    try {
      const values = await form.validateFields();
      const dataToSend = {
        shrimp_pool_hec: values.shrimp_pool_hec,
        density: values.density,
        stimated_weight: larvaOptions.find(opt => opt.value === values.larva_weight).weight,
        stimated_survival: values.survival_rate / 100,
        days_to_harvest: values.harvest_days,
        stimated_fca: values.stimated_fca,
        stimated_performance: values.stimated_performance,
        selling_price: values.selling_price,
        pre_breeding_weeks: values.pre_breeding_weeks,
        dayly_inditect_cost: values.dayly_inditect_cost,
        food_price: values.food_price,
        breeding_cost: values.breeding_cost,
      };

      const response = await axios.post('https://aqualink-simulation.onrender.com/planning_scenarios', dataToSend);
      console.log("dataToSend:", dataToSend);
      console.log("Escenario añadido:", response.data);
      setScenarios(response.data);
      form.resetFields();
    } catch (error) {
      console.error("Error al añadir el escenario:", error);
    }
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" highlightText={"AquaLink Camaronera"} title="Planning Studio®" routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col xl={12} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Studio Planning: Segmento P3" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={24} md={15}>
                    <GoogleMaps />
                  </Col>
                  <Col xs={24} md={9}>
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
          <Col xl={12} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Planificación: Ingreso de Datos para Escenarios" size="large">
                <BasicFormWrapper>
                  <HorizontalFormStyleWrap className="sDash_input-form">
                    <Form form={form} layout="horizontal">
                      {/* Campos de entrada */}
                      {[
                        { label: "Área de piscina", name: "shrimp_pool_hec", placeholder: "hectáreas", type: "number" },
                        { label: "Densidad", name: "density", placeholder: "00.000", type: "number" },
                        { label: "FCA estimado", name: "stimated_fca", placeholder: "FCA", type: "number" },
                        { label: "Desempeño estimado", name: "stimated_performance", placeholder: "Desempeño", type: "number" },
                        { label: "Precio de venta", name: "selling_price", placeholder: "$ por libra", type: "number" },
                        { label: "Semanas pre-cría", name: "pre_breeding_weeks", placeholder: "Semanas", type: "number" },
                        { label: "Costo indirecto diario", name: "dayly_inditect_cost", placeholder: "$", type: "number" },
                        { label: "Precio del alimento", name: "food_price", placeholder: "$", type: "number" },
                        { label: "Costo de cría", name: "breeding_cost", placeholder: "$", type: "number" },
                      ].map(field => (
                        <Row align="middle" key={field.name}>
                          <Col md={6} xs={24}>
                            <label htmlFor={field.name}>{field.label}</label>
                          </Col>
                          <Col md={18} xs={24}>
                            <Form.Item name={field.name} rules={[{ required: true, message: 'Campo requerido' }]}>
                              <Input placeholder={field.placeholder} size="small" type={field.type} />
                            </Form.Item>
                          </Col>
                        </Row>
                      ))}

                      {/* Peso Larva */}
                      <Row align="middle">
                        <Col md={6} xs={24}>
                          <label htmlFor="larva_weight">Peso Larva</label>
                        </Col>
                        <Col md={18} xs={24}>
                          <Form.Item name="larva_weight" rules={[{ required: true, message: 'Campo requerido' }]}>
                            <Select size="small" placeholder="Seleccione el peso estimado de su larva">
                              {larvaOptions.map(option => (
                                <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Supervivencia */}
                      <Row align="middle">
                        <Col md={6} xs={24}>
                          <label htmlFor="survival_rate">Supervivencia</label>
                        </Col>
                        <Col md={18} xs={24}>
                          <Form.Item name="survival_rate" rules={[{ required: true, message: 'Campo requerido' }]}>
                            <Input placeholder="Porcentaje" size="small" type="number" />
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Días hasta la cosecha */}
                      <Row align="middle">
                        <Col md={6} xs={24}>
                          <label htmlFor="harvest_days">Días hasta la cosecha</label>
                        </Col>
                        <Col md={18} xs={24}>
                          <Form.Item name="harvest_days" rules={[{ required: true, message: 'Campo requerido' }]}>
                            <Input placeholder="Días" size="small" type="number" />
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Botones */}
                      <Row justify="end" gutter={10}>
                        <Col>
                          <Button onClick={() => form.resetFields()} type="default">Borrar</Button>
                        </Col>
                        <Col>
                          <Button onClick={onAddScenario} type="primary">Añadir Escenario</Button>
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
          {scenarios.length > 0 && scenarios.map((scenario, index) => (
            <Col xl={6} xs={12} key={index}>
              <Cards title={`Escenario ${index + 1}`} size="large">
                <div style={{ marginBottom: '15px' }}>
                  <Row gutter={[16, 16]}>
                    <Col span={12}><Typography.Text strong>Producción Estimada (lb):</Typography.Text></Col>
                    <Col span={12}><Typography.Text>{scenario.stimated_production_lb.toFixed(2)}</Typography.Text></Col>

                    <Col span={12}><Typography.Text strong>Ingreso Total:</Typography.Text></Col>
                    <Col span={12}><Typography.Text>${scenario.total_income.toFixed(2)}</Typography.Text></Col>

                    <Col span={12}><Typography.Text strong>Costo Total:</Typography.Text></Col>
                    <Col span={12}><Typography.Text>${scenario.total_cost.toFixed(2)}</Typography.Text></Col>
                  </Row>
                </div>
              </Cards>
            </Col>
          ))}
        </Row>
      </Main>
    </>
  );
}

export default PlanningStudioFarms;

