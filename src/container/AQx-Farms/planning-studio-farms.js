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

  const [simulationType, setSimulationType] = useState("dinamico"); // Valor preseleccionado dinámico
  const [fixedOption, setFixedOption] = useState("densidad"); // Valor preseleccionado para el segundo select

  const handleSimulationTypeChange = (value) => {
    setSimulationType(value);
    if (value !== "fijo") {
      setFixedOption(null); // Restablece el valor del segundo selector si elige "Dinámico"
    }
  };
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

  const inputLabels = {
    shrimp_pool_hec: "Área de piscina (ha)",
    density: "Densidad",
    cycle_days: "Días de ciclo",
    stimated_weight: "Peso Larva",
    days_to_harvest: "Días hasta la cosecha",
    stimated_fca: "FCA estimado",
    stimated_performance: "Desempeño estimado",
    selling_price: "Precio de venta",
    pre_breeding_weeks: "Nª Semanas pre-cría",
    dayly_inditect_cost: "Costo indirecto diario",
    stimated_survival: "Supervivencia estimada",
    food_price: "Precio del alimento",
    breeding_cost: "Costo de cría",
  };

  // Claves que quieres renderizar
  const allowedKeys = ["density", "stimated_weight", "pre_breeding_weeks", "selling_price", "stimated_survival"];



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

      // Actualizar el estado de los escenarios sin limpiar el formulario
      setScenarios(response.data);

    } catch (error) {
      console.error("Error al añadir el escenario:", error);
    }
  };


  return (
    <>
      <PageHeader className="ninjadash-page-header-main" highlightText={"AquaLink Camaronera"}
        title="Planning Studio®"
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
              <Cards title="Studio Planning: Segmento P3" size="large">
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
              <Cards title="Planificación: Ingreso de Datos para Escenarios" size="large">
                <div style={{ display: "flex", flexDirection: "row", gap: '16px', marginBottom: "10px" }}>
                  <Select
                    value={simulationType}
                    placeholder="Tipo de simulación"
                    onChange={handleSimulationTypeChange}
                  >
                    <Select.Option value="dinamico">Dinámico (todas las variables pueden ser distintas)</Select.Option>
                    <Select.Option value="fijo">Variables fijas</Select.Option>
                  </Select>

                  {simulationType === "fijo" && (
                    <Select
                      value={fixedOption}
                      placeholder="Seleccione una opción de Variables fijas"
                      onChange={(value) => setFixedOption(value)}
                    >
                      <Select.Option value="densidad">1.Una sola densidad</Select.Option>
                      <Select.Option value="ciclo">2.Un solo # de días de ciclo</Select.Option>
                      <Select.Option value="peso">3.Un solo peso con diferentes tiempos y densidades</Select.Option>
                    </Select>
                  )}
                </div>

                <Form form={form} layout="vertical" requiredMark={false}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', overflow: 'hidden' }}>
                    {[
                      { label: "Área de piscina", name: "shrimp_pool_hec", placeholder: "hectáreas", type: "number" },
                      { label: "Densidad", name: "density", placeholder: "00.000", type: "number" },
                      { label: "Días de ciclo", name: "cycle_days", placeholder: "Sleccione", type: "select" },
                      { label: "Peso estimado a Cocecha", name: "larva_weight", placeholder: "Seleccione ", type: "select" },
                      { label: "Supervivencia estimada", name: "survival_rate", placeholder: "Porcentaje", type: "number" },
                      { label: "Dias pre-cría", name: "pre_breeding_weeks", placeholder: "Días", type: "select" },
                      { label: "FCA estimado", name: "stimated_fca", placeholder: "FCA", type: "number" },
                      { label: "Costo est x Kg Alimento", name: "food_cost", placeholder: "Seleccione", type: "number" },
                      { label: "Crecimiento est por Semana", name: "stimated_performance", placeholder: "Crecimiento", type: "number" },
                      { label: "Costo aditivos x Kg Alimento", name: "additives_cost", placeholder: "Seleccione", type: "number" },
                      { label: "Costo indirecto Ha/día", name: "dayly_inditect_cost", placeholder: "Costo indirecto", type: "number" },
                      { label: "Fecha de inicio", name: "start_date", placeholder: "Fecha de inicio", type: "calendar" },

                    ].map(field => (
                      <div style={{ flex: '1 1 30%', maxWidth: "30%" }} key={field.name}>
                        <Form.Item
                          label={<span style={{ color: '#73879c' }}>{field.label}</span>}
                          name={field.name}
                          rules={[{ required: true, message: 'Campo requerido' }]}
                          style={{ marginBottom: '8px' }}
                        >
                          {field.type === "select" ? (
                            <>

                              <Select
                                placeholder={field.placeholder}
                                style={{
                                  width: '100%',
                                  height: '20px',
                                  fontSize: '14px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  padding: '0px', // Asegura alineación vertical
                                }}
                                dropdownStyle={{ fontSize: '14px' }}
                              >
                                {field.name === "larva_weight" ? (
                                  larvaOptions.map(option => (
                                    <Select.Option key={option.value} value={option.value}>
                                      {option.label}
                                    </Select.Option>
                                  ))
                                ) : field.name === "cycle_days" ? (
                                  [49, 56, 63, 70, 77, 84, 91].map(day => (
                                    <Select.Option key={day} value={day}>
                                      {day} días
                                    </Select.Option>
                                  ))
                                ) : field.name === "pre_breeding_weeks" ? (
                                  [14, 21, 28].map(week => (
                                    <Select.Option key={week} value={week}>
                                      {week} días
                                    </Select.Option>
                                  ))
                                ) : null}
                              </Select>
                            </>
                          ) : field.type === "calendar" ? (
                            <div style={{ width: '100%', overflow: 'hidden' }}>
                              <DatePicker
                                placeholder={field.placeholder}
                                style={{
                                  width: '100%',
                                  maxWidth: '100%', // Asegura que no se expanda más allá del contenedor
                                  height: '32px',
                                  fontSize: '14px',
                                }}
                                popupStyle={{ width: '300px' }} // Ajusta el tamaño del calendario desplegable
                              />
                            </div>
                          ) : (
                            <Input
                              placeholder={field.placeholder}
                              size="small"
                              type={field.type}
                              style={{ color: '#808080', height: '32px', fontSize: '14px' }}
                            />
                          )}

                        </Form.Item>
                      </div>
                    ))}
                  </div>

                  {/* Botones */}
                  <Row justify="end" gutter={10} style={{ marginTop: '16px' }}>
                    <Col>
                      <Button onClick={() => form.resetFields()} type="default">Borrar</Button>
                    </Col>
                    <Col>
                      <Button onClick={onAddScenario} type="primary">Añadir Escenario</Button>
                    </Col>
                  </Row>
                </Form>

              </Cards>
            </Suspense>
          </Col>
        </Row>

        {/* Mostrar escenarios añadidos */}
        <Row gutter={25}>
          {scenarios.length > 0 && scenarios.map((scenario, index) => (
            <Col xl={6} xs={12} key={index}>
              <Cards
                image={require(`../../static/img/AQx-IMG/shrimp16.svg`).default}
                title={`Escenario ${index + 1}`} size="large">


                <div style={{ marginBottom: '15px' }}>
                  {/* Renderizar inputs del escenario en español en el orden de allowedKeys */}
                  {allowedKeys
                    .filter(key => key in scenario.inputs) // Filtra solo las claves que existen en scenario.inputs
                    .map(key => (
                      <div key={key} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography.Text>{inputLabels[key] || key}</Typography.Text>
                          <Typography.Text strong>{typeof scenario.inputs[key] === 'number' ? scenario.inputs[key].toFixed(2) : scenario.inputs[key]}</Typography.Text>
                        </div>
                        <hr style={{ width: '100%', border: '0.5px solid #ddd', margin: '8px 0' }} />
                      </div>
                    ))}



                  <Row gutter={[16, 16]}>
                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px',
                        borderRadius: '4px',  // Esquinas menos redondeadas
                        backgroundColor: scenario.stimated_production_lb === 0
                          ? '#ff4d4f'  // Rojo pastel fuerte
                          : scenario.stimated_production_lb > 10
                            ? '#258fdb'  // Celeste pastel fuerte
                            : '#ffffff', // Blanco si no cumple las condiciones
                        fontSize: '1.2em',  // Tamaño de letra más grande
                        fontWeight: 'bold'
                      }}
                    >
                      <Typography.Text strong style={{ color: 'white' }}>BIOMASA</Typography.Text>
                      <Typography.Text style={{ color: 'white' }}>{scenario.stimated_production_lb.toFixed(2)}lb</Typography.Text>
                    </div>


                    <div style={{ display: 'flex', width: "100%", justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ textAlign: 'center' }}>
                        <Typography.Text style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#73879c' }}>
                          ${scenario.total_cost.toFixed(2)}
                        </Typography.Text>
                        <Typography.Text style={{ display: 'block', color: '#607d8b' }}>Costo Estimado</Typography.Text>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <Typography.Text style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#73879c' }}>
                          ${scenario.total_income.toFixed(2)}
                        </Typography.Text>
                        <Typography.Text style={{ display: 'block', color: '#607d8b' }}>Venta Estimada</Typography.Text>
                      </div>
                    </div>
                    <hr style={{ width: '100%', border: '0.5px solid #ddd', marginTop: '8px' }} />
                    <div style={{ display: 'flex', width: "100%", flexDirection: "row", justifyContent: 'space-between', marginTop: '16px', gap: '6px' }}>
                      <Button type="default">Editar</Button>

                      {scenario.stimated_production_lb > 0 ? (
                        <Button type="primary">Aplicar a producción</Button>
                      ) : (
                        <Button type="default" danger>Cancelar</Button>  // Botón rojo de "Cancelar"
                      )}
                    </div>

                  </Row>
                </div>
              </Cards>
            </Col>
          ))}
        </Row>
      </Main >
    </>
  );
}

export default PlanningStudioFarms;

