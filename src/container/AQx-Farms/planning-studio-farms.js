import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Skeleton, Typography, Badge, Space, Form, Input, DatePicker, Select, Button, InputNumber } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import CostIncomeComparisonChart from './planning/CostIncomeComparisonChart';
import StimatedProductionChart from './planning/StimatedProductionChart';
import { AqualinkMaps } from '../../components/maps/aqualink-map';

function PlanningStudioFarms() {
  const [form] = Form.useForm();
  const [scenarios, setScenarios] = useState([]);

  const [simulationType, setSimulationType] = useState("fijo"); // Valor preseleccionado dinámico
  const [fixedOption, setFixedOption] = useState(null); // Valor inicial sin opción fija

  const [fixedFieldNeedsValue, setFixedFieldNeedsValue] = useState(false);
  const [fixedFieldDisabled, setFixedFieldDisabled] = useState(false);

  // Mapeo de opciones fijas a nombres de campos reales
  const fixedOptionFieldNames = {
    densidad: 'density',
    ciclo: 'days_to_harvest',
    peso: 'stimated_weight',
    fca: 'stimated_fca',
  }; // Maneja el cambio de tipo de simulación


  // Maneja el cambio de opción fija
  const handleFixedOptionChange = (value) => {
    setFixedOption(value);
    const fieldName = fixedOptionFieldNames[value];
    if (fieldName) {
      form.resetFields([fieldName]);
    }
  };

  // Obtiene el nombre del campo fijo
  const fixedFieldName = fixedOption ? fixedOptionFieldNames[fixedOption] : '';

  // Observa el valor del campo fijo
  const fixedFieldValue = Form.useWatch(fixedFieldName, form);

  // useEffect para verificar si el campo fijo necesita valor y si debe deshabilitarse
  useEffect(() => {
    if (simulationType === 'fijo' && fixedOption) {
      if (!fixedFieldValue) {
        setFixedFieldNeedsValue(true);
        setFixedFieldDisabled(false);
      } else {
        setFixedFieldNeedsValue(false);
        setFixedFieldDisabled(true);
      }
    } else {
      setFixedFieldNeedsValue(false);
      setFixedFieldDisabled(false);
    }
  }, [simulationType, fixedOption, fixedFieldValue]);

  // Observa el valor de 'food_price'
  const foodPrice = Form.useWatch('food_price', form);

  useEffect(() => {
    if (foodPrice !== undefined && foodPrice !== null && !isNaN(foodPrice)) {
      const breedingCost = parseFloat((foodPrice * 0.05).toFixed(2));
      form.setFieldsValue({ breeding_cost: breedingCost });
    } else {
      form.setFieldsValue({ breeding_cost: null });
    }
  }, [foodPrice, form]);


  const inputLabels = {
    shrimp_pool_hec: "Área de piscina (ha)",
    start_date: "Fecha de inicio",
    days_to_harvest: "Días de ciclo",
    density: "Densidad Estimada",
    stimated_weight: "Peso Estimado a Cosecha",
    stimated_survival: "Supervivencia estimada",
    stimated_fca: "FCA estimado",
    stimated_performance: "Rendimiento est en Empacadora",
    pre_breeding_weeks: "Días de pre-cría",
    food_price: "Costo x kg de Alimento",
    breeding_cost: "Costo aditivos x kg de Alimento",
    dayly_inditect_cost: "Costo indirecto Ha/día",
    selling_price: "Precio estimado de venta"
  };

  // Claves que quieres renderizar
  const allowedKeys = ["density", "stimated_weight", "pre_breeding_weeks", "selling_price", "stimated_survival"];

  const onAddScenario = async () => {
    try {
      const values = await form.validateFields();
      const dataToSend = {
        shrimp_pool_hec: parseFloat(values.shrimp_pool_hec),
        density: parseFloat(values.density),
        stimated_weight: parseFloat(values.stimated_weight),
        stimated_survival: parseFloat(values.stimated_survival) / 100,
        days_to_harvest: parseInt(values.days_to_harvest, 10),
        stimated_fca: parseFloat(values.stimated_fca),
        stimated_performance: parseFloat(values.stimated_performance),
        selling_price: parseFloat(values.selling_price),
        pre_breeding_weeks: parseInt(values.pre_breeding_weeks, 10),
        dayly_inditect_cost: parseFloat(values.dayly_inditect_cost),
        food_price: parseFloat(values.food_price),
        breeding_cost: parseFloat(values.breeding_cost),
      };
      console.log("dataToSend:", dataToSend);

      // Envía los datos al servidor
      const response = await axios.post('https://aqualink-simulation.onrender.com/planning_scenarios', dataToSend);
      console.log("Escenario añadido:", response.data);
      // Actualiza el estado agregando el nuevo escenario al array existente
      setScenarios([...scenarios, response.data]);
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
          <Col xl={9} xs={24} style={{ display: "flex" }}>
            <AqualinkMaps width="100%" height="555px" />
          </Col>
          <Col xl={15} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Planificación: Ingreso de Datos para Escenarios" size="large">
                <div style={{ display: "flex", flexDirection: "row", gap: "16px", marginBottom: "10px", width: "100%" }}>

                  <div style={{ flex: "0 0 70%" }}>
                    {simulationType === "fijo" && (
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>Seleccione una opción de Variables fijas</span>}
                        name="fixedOption"
                        initialValue={fixedOption}
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <Select
                          placeholder="Seleccione una opción de Variables fijas"
                          onChange={handleFixedOptionChange}
                        >
                          <Select.Option value="densidad">1. Una sola densidad</Select.Option>
                          <Select.Option value="ciclo">2. Un solo # de días de ciclo</Select.Option>
                          <Select.Option value="peso">3. Un solo peso </Select.Option>
                          <Select.Option value="fca">4. Un solo FCA</Select.Option>

                        </Select>
                      </Form.Item>
                    )}
                  </div>
                </div>

                <Form
                  form={form}
                  layout="vertical"
                  requiredMark={false}
                  initialValues={{
                    simulationType: "dinamico",
                    fixedOption: "densidad",
                  }}
                >
                  <Row gutter={[16, 16]}>
                    {/* Área de piscina */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item

                        label={<span style={{ color: '#73879c' }}>{inputLabels.shrimp_pool_hec}</span>}
                        name="shrimp_pool_hec"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <InputNumber
                          placeholder="hectáreas"
                          type="number"
                          style={{ width: '100%' }}
                          min={0}
                        />
                      </Form.Item>
                    </Col>
                    {/* Fecha de inicio */}
                    <Col xs={12} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.start_date}</span>}
                        name="start_date"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}

                      >
                        <DatePicker
                          placeholder="Fecha de inicio"
                          style={{
                            height: "auto",
                            width: "100%",
                            cursor: "pointer",
                            fontSize: "17px",
                            margin: "0px",
                            padding: "0px"
                          }} // Ancho fijo de 200 píxeles
                        />
                      </Form.Item>
                    </Col>


                    {/* Días de ciclo */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.days_to_harvest}</span>}
                        name="days_to_harvest"
                        validateStatus={
                          fixedOption === 'ciclo' && fixedFieldNeedsValue ? 'error' : ''
                        }
                        help={
                          fixedOption === 'ciclo' && fixedFieldNeedsValue
                            ? 'Este campo es requerido'
                            : ''
                        }
                      >
                        <Select
                          placeholder="Seleccione"
                          disabled={fixedOption === 'ciclo' && fixedFieldDisabled}
                        >
                          {[56, 63, 70, 77, 84, 91, 98].map(day => (
                            <Select.Option key={day} value={day}>
                              {day} días
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Densidad */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.density}</span>}
                        name="density"
                        validateStatus={
                          fixedOption === 'densidad' && fixedFieldNeedsValue ? 'error' : ''
                        }
                        help={
                          fixedOption === 'densidad' && fixedFieldNeedsValue
                            ? 'Este campo es requerido'
                            : ''
                        }
                      >
                        <Select
                          placeholder="Seleccione Densidad"
                          disabled={fixedOption === 'densidad' && fixedFieldDisabled}
                        >
                          {Array.from({ length: 22 }, (_, i) => 90000 + i * 10000).map(value => (
                            <Select.Option key={value} value={value}>
                              {value.toLocaleString()}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Peso estimado a Cosecha */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_weight}</span>}
                        name="stimated_weight"
                        validateStatus={
                          fixedOption === 'peso' && fixedFieldNeedsValue ? 'error' : ''
                        }
                        help={
                          fixedOption === 'peso' && fixedFieldNeedsValue
                            ? 'Este campo es requerido'
                            : ''
                        }
                      >
                        <Select
                          placeholder="Seleccione Peso (g)"
                          disabled={fixedOption === 'peso' && fixedFieldDisabled}
                        >
                          {Array.from({ length: 29 }, (_, i) => 15 + i).map(value => (
                            <Select.Option key={value} value={value}>
                              {value.toLocaleString()} g
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Supervivencia estimada */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_survival}</span>}
                        name="stimated_survival"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <Select placeholder="Seleccione Supervivencia">
                          {Array.from({ length: 50 }, (_, i) => 50 + i).map(value => (
                            <Select.Option key={value} value={value}>
                              {value}%
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>


                    {/* FCA estimado */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_fca}</span>}
                        name="stimated_fca"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                        validateStatus={
                          fixedOption === 'fca' && fixedFieldNeedsValue ? 'error' : ''
                        }
                        help={
                          fixedOption === 'fca' && fixedFieldNeedsValue
                            ? 'Este campo es requerido'
                            : ''
                        }
                      >
                        <Select placeholder="Seleccione FCA"
                          disabled={fixedOption === 'fca' && fixedFieldDisabled}
                        >
                          {Array.from({ length: 33 }, (_, i) => (0.8 + i * 0.1).toFixed(1)).map(value => (
                            <Select.Option key={value} value={parseFloat(value)}>
                              {value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>



                    {/* Crecimiento estimado */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_performance}</span>}
                        name="stimated_performance"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <Select placeholder="Seleccione Crecimiento">
                          {Array.from({ length: 50 }, (_, i) => 50 + i).map(value => (
                            <Select.Option key={value} value={value}>
                              {value}%
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Días pre-cría */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.pre_breeding_weeks}</span>}
                        name="pre_breeding_weeks"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <Select placeholder="Días">
                          {[14, 21, 28].map(week => (
                            <Select.Option key={week} value={week}>
                              {week} días
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Costo x Kg Alimento */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.food_price}</span>}
                        name="food_price"
                        rules={[
                          { required: true, message: 'El costo debe estar entre 1 y 3 USD' },
                          { type: 'number', min: 1, max: 3, message: 'El costo debe estar entre 1 y 3 USD' },
                        ]}
                      >
                        <InputNumber
                          placeholder="Costo x Kg Alimento (USD)"
                          min={1}
                          max={3}
                          step={0.01}
                          style={{ width: '100%' }}
                          formatter={value => `$ ${value}`}
                          parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        />
                      </Form.Item>
                    </Col>


                    {/* Costo aditivos x Kg Alimento */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.breeding_cost}</span>}
                        name="breeding_cost"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <InputNumber
                          placeholder="Costo aditivos x Kg Alimento (USD)"
                          min={0}
                          disabled
                          style={{ width: '100%' }}
                          formatter={value => `$ ${value}`}
                          parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        />
                      </Form.Item>
                    </Col>

                    {/* Costo indirecto Ha/día */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.dayly_inditect_cost}</span>}
                        name="dayly_inditect_cost"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <InputNumber
                          placeholder="Costo indirecto"
                          type="number"
                          style={{ width: '100%' }}
                          min={0}
                        />
                      </Form.Item>
                    </Col>

                    {/* Precio de venta */}
                    <Col xs={24} md={12} lg={8}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.selling_price}</span>}
                        name="selling_price"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <InputNumber
                          placeholder="Precio de venta"
                          type="number"
                          style={{ width: '100%' }}
                          min={0}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

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
            <Col xl={8} xs={12} key={index}>
              <Cards
                image={require(`../../static/img/AQx-IMG/shrimp16.svg`).default}
                title={`Escenario ${index + 1}`} size="large">
                <div style={{ marginBottom: '15px' }}>
                  {/* Renderizar inputs del escenario en español en el orden de allowedKeys */}
                  {allowedKeys
                    .filter(key => scenario && key in scenario) // Ajuste aquí
                    .map(key => (
                      <div key={key} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography.Text>{inputLabels[key] || key}</Typography.Text>
                          <Typography.Text strong>
                            {typeof scenario[key] === 'number' ? scenario[key] : scenario[key]}
                          </Typography.Text>
                        </div>
                        <hr style={{ width: '100%', border: '0.5px solid #ddd', margin: '8px 0' }} />
                      </div>
                    ))}

                  <Row gutter={[16, 16]}>
                    <div className='flex-row_space-between'>
                      <Typography.Text strong>Densidad</Typography.Text>
                      <Typography.Text>{scenario.inputs.density}</Typography.Text>
                    </div>
                    <hr style={{ width: '100%', border: '0.1px solid #ddd', marginTop: '0px' }} />

                    <div className='flex-row_space-between'>
                      <Typography.Text strong>Peso estimado</Typography.Text>
                      <Typography.Text>{scenario.inputs.stimated_weight}g</Typography.Text>
                    </div>
                    <hr style={{ width: '100%', border: '0.1px solid #ddd', marginTop: '0px' }} />

                    <div className='flex-row_space-between'>
                      <Typography.Text strong>Días de ciclo</Typography.Text>
                      <Typography.Text>{scenario.inputs.days_to_harvest}</Typography.Text>
                    </div>

                    <hr style={{ width: '100%', border: '0.1px solid #ddd', marginTop: '0px' }} />

                    <div className='flex-row_space-between'>
                      <Typography.Text strong>Supervivencia estimada</Typography.Text>
                      <Typography.Text>
                        {typeof scenario.inputs.stimated_survival === 'number'
                          ? `${(scenario.inputs.stimated_survival * 100).toFixed(1)}%`
                          : 'N/A'}
                      </Typography.Text>

                    </div>
                    <hr style={{ width: '100%', border: '0.1px solid #ddd', marginTop: '0px' }} />


                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px',
                        borderRadius: '4px',
                        backgroundColor: scenario.stimated_production_lb === 0
                          ? '#ff4d4f'
                          : scenario.stimated_production_lb > 10
                            ? '#258fdb'
                            : '#ffffff',
                        fontSize: '1.2em',
                        fontWeight: 'bold'
                      }}
                    >
                      <Typography.Text strong style={{ color: 'white' }}>BIOMASA</Typography.Text>
                      <Typography.Text style={{ color: 'white' }}>{scenario.stimated_production_lb}lb</Typography.Text>
                    </div>

                    <div style={{ display: 'flex', width: "100%", justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ textAlign: 'center' }}>
                        <Typography.Text style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#73879c' }}>
                          ${scenario.total_cost}
                        </Typography.Text>
                        <Typography.Text style={{ display: 'block', color: '#607d8b' }}>Costo Estimado</Typography.Text>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <Typography.Text style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#73879c' }}>
                          ${scenario.total_income}
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

        {/* Añadir el Gráfico de Comparación */}
        <Row gutter={25} style={{ marginTop: '40px' }}>
          {
            scenarios.length > 0 && (
              <>
                <Col xs={12}>
                  <StimatedProductionChart scenarios={scenarios} />
                </Col>

                <Col xs={12}>
                  <CostIncomeComparisonChart scenarios={scenarios} />
                </Col>
              </>
            )
          }

        </Row>
      </Main>
    </>
  );
}

export default PlanningStudioFarms;
