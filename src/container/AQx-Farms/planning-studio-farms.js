import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Skeleton, Typography, Badge, Space, Form, Input, DatePicker, Select, Button, InputNumber } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import CostIncomeComparisonChart from './planning/CostIncomeComparisonChart';
import StimatedProductionChart from './planning/StimatedProductionChart';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../redux/authentication/selectors';
import Cookies from 'js-cookie';

function PlanningStudioFarms() {
  const [form] = Form.useForm();
  const [scenarios, setScenarios] = useState([]);

  const [simulationType, setSimulationType] = useState("fijo"); // Valor preseleccionado dinámico
  const [fixedOption, setFixedOption] = useState(null); // Valor inicial sin opción fija

  const [fixedFieldNeedsValue, setFixedFieldNeedsValue] = useState(false);
  const [fixedFieldDisabled, setFixedFieldDisabled] = useState(false);


  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedSector(null);
    console.log(JSON.stringify(farmsOrgsWithPools));
  };

  const handleSectorChange = (sectorId) => {
    setSelectedSector(sectorId);
    setSelectedPool(null);
  };

  const handlePoolChange = (poolId) => {
    setSelectedPool(poolId);
    Cookies.set('poolId', poolId);
  };

  const farmsSelectOptions = organizations.length > 0 ? [
    {
      options: farmsOrgsWithPools.map(org => ({
        value: org.orgId,
        label: org.orgName,
        email: org.orgEmail,
      })),
      onChange: handleOrgChange,
      placeholder: 'Seleccione una Farm',
      value: selectedOrg || undefined,
    },
  ] : [];

  const sectorsOptions = selectedOrg
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .reduce((acc, pool) => {
        if (pool.salesRegion && !acc.find(sector => sector.value === pool.salesRegion.id)) {
          acc.push({
            value: pool.salesRegion.id,
            label: pool.salesRegion.name,
          });
        }
        return acc;
      }, [])
    : [];



  const sectorSelectOptions = selectedOrg ? [
    {
      options: sectorsOptions,
      onChange: handleSectorChange,
      placeholder: 'Seleccione un Sector',
      value: selectedSector || undefined,
    },
  ] : [];

  const poolsOptions = selectedSector
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .filter(pool => pool.salesRegion && pool.salesRegion.id === selectedSector)
      .map(pool => ({
        value: pool.poolId,
        label: pool.poolName,
      }))
    : [];


  const poolsSelectOptions = selectedSector ? [
    {
      options: poolsOptions,
      onChange: handlePoolChange,
      placeholder: 'Seleccione una Pool',
      disabled: poolsOptions.length === 0,
      value: selectedPool || undefined,
    },
  ] : [];

  const combinedSelectOptions = [
    ...farmsSelectOptions,
    ...sectorSelectOptions,
    ...poolsSelectOptions,
  ];

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
    stimated_performance: "Ren. est en Empacadora",
    pre_breeding_weeks: "Días de pre-cría",
    food_price: "Costo x kg de Alimento",
    breeding_cost: "Costo aditivos x kg AB ",
    dayly_inditect_cost: "Costo indirecto Ha/día",
    selling_price: "Precio est de venta",
  };

  // Claves que quieres renderizar
  const allowedKeys = ["density", "stimated_weight", "pre_breeding_weeks", "selling_price", "stimated_survival"];

  // Clonar y modificar un escenario
  const cloneAndModifyScenario = (scenario) => {
    const newScenario = { ...scenario };

    // Incrementar los valores según sea necesario
    newScenario.density = scenario.density + 1000; // Ejemplo: incrementar la densidad
    newScenario.stimated_weight = scenario.stimated_weight + 1; // Incrementar peso
    newScenario.days_to_harvest = scenario.days_to_harvest + 5; // Incrementar días
    newScenario.selling_price = parseFloat((scenario.selling_price * 1.05).toFixed(2)); // Aumentar precio de venta en un 5%
    newScenario.total_cost = parseFloat((scenario.total_cost * 1.05).toFixed(2)); // Aumentar costo total en un 5%
    newScenario.total_income = parseFloat((scenario.total_income * 1.05).toFixed(2)); // Aumentar ingreso total en un 5%
    newScenario.estimated_production_lb = scenario.estimated_production_lb + 10000; // Incrementar biomasa

    // Asegúrate de que otros campos que necesiten ser únicos o modificados también se actualicen

    return newScenario;
  };

  const onAddScenario = async () => {
    if (scenarios.length >= 4) {
      alert("No puedes añadir más de 4 escenarios");
      return;
    }

    try {
      const values = await form.validateFields();
      const dataToSend = {
        shrimp_pool_hec: parseFloat(values.shrimp_pool_hec),
        density: parseFloat(values.density),
        estimated_weight: parseFloat(values.stimated_weight),
        estimated_survival: parseFloat(values.stimated_survival) / 100,
        days_to_harvest: parseInt(values.days_to_harvest, 10),
        estimated_fca: parseFloat(values.stimated_fca),
        estimated_performance: parseFloat(values.stimated_performance),
        selling_price: parseFloat(values.selling_price),
        pre_breeding_weeks: parseInt(values.pre_breeding_weeks, 10),
        dayly_inditect_cost: parseFloat(values.dayly_inditect_cost),
        food_price: parseFloat(values.food_price),
        breeding_cost: parseFloat(values.breeding_cost),
        temperature: parseFloat(values.temperature),
        transfer_weight: parseFloat(values.transfer_weight),
        SGR: parseFloat(values.SGR),
      };
      console.log("dataToSend:", dataToSend);

      // Envía los datos al servidor
      const response = await axios.post('http://localhost:8080/planning_scenarios', dataToSend);
      console.log("Escenario añadido:", response.data);

      // Actualiza el estado agregando el nuevo escenario al array existente
      const updatedScenarios = [...scenarios, response.data];

      // Verificar si se han agregado 3 escenarios para añadir el cuarto automáticamente
      if (updatedScenarios.length === 3) {
        // Crear el cuarto escenario basado en el tercero
        const fourthScenario = cloneAndModifyScenario(response.data);
        // Agrega el cuarto escenario al estado
        updatedScenarios.push(fourthScenario);
      }

      setScenarios(updatedScenarios);
    } catch (error) {
      console.error("Error al añadir el escenario:", error);
    }
  };
  return (
    <>
      <PageHeader
        highlightText={"AquaLink Camaronera"}
        title="Planning Studio®"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
        onBack={() => window.history.back()}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={7} xs={24} style={{display: "flex"}} >
         

            <AqualinkMaps
              width={'100%'}
              height={
                window.innerWidth >= 2000 ? '600px' :
                  '305px'
              }
              descriptionColumn={2}
              selectedOrg={selectedOrg}
              selectedSector={selectedSector}
              selectedPool={selectedPool}
              farmsOrgsWithPools={farmsOrgsWithPools} // Pasa farmsOrgsWithPools como prop
            />
          </Col>
          <Col xl={17} xs={24} >
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Planificación: Ingreso de Datos para Escenarios" size="large">
                <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>

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
                    <Col xs={24} md={12} lg={6}>
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
                    <Col xs={12} md={12} lg={6}>
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
                    <Col xs={24} md={12} lg={6}>
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
                          {[63, 70, 77, 84, 91, 98].map(day => (
                            <Select.Option key={day} value={day}>
                              {day} días
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Densidad */}
                    <Col xs={24} md={12} lg={6}>
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
                          {Array.from({ length: 9 }, (_, i) => 90000 + i * 20000).map(value => (
                            <Select.Option key={value} value={value}>
                              {value.toLocaleString()}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Peso estimado a Cosecha */}
                    <Col xs={24} md={12} lg={6}>
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
                          {Array.from({ length: 24 }, (_, i) => 15 + i).map(value => (
                            <Select.Option key={value} value={value}>
                              {value.toLocaleString()} g
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Supervivencia estimada */}
                    <Col xs={24} md={12} lg={6}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_survival}</span>}
                        name="stimated_survival"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <Select placeholder="Seleccione Supervivencia">
                          {Array.from({ length: 6 }, (_, i) => 60 + i * 5).map(value => (
                            <Select.Option key={value} value={value}>
                              {value}%
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>


                    {/* FCA estimado */}
                    <Col xs={24} md={12} lg={6}>
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
                          {Array.from({ length: 6 }, (_, i) => (1 + i * 0.1).toFixed(1)).map(value => (
                            <Select.Option key={value} value={parseFloat(value)}>
                              {value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>



                    {/* Crecimiento estimado */}
                    <Col xs={24} md={12} lg={6}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_performance}</span>}
                        name="stimated_performance"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <Select placeholder="Seleccione Crecimiento">
                          {Array.from({ length: 3 }, (_, i) => 85 + i * 5).map(value => (
                            <Select.Option key={value} value={value}>
                              {value}%
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Días pre-cría */}
                    <Col xs={24} md={12} lg={6}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.pre_breeding_weeks}</span>}
                        name="pre_breeding_weeks"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <Select placeholder="Días">
                          {[21, 28].map(week => (
                            <Select.Option key={week} value={week}>
                              {week} días
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>


                    {/* Costo x Kg Alimento */}
                    <Col xs={24} md={12} lg={6}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.food_price}</span>}
                        name="food_price"
                        rules={[{ required: true, message: 'El costo es requerido' }]}
                      >
                        <Select placeholder="Selecciona el costo">
                          {Array.from({ length: 9 }, (_, i) => (1 + i * 0.1).toFixed(1)).map(value => (
                            <Select.Option key={value} value={parseFloat(value)}>
                              $ {value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>


                    {/* Costo aditivos x Kg Alimento */}
                    <Col xs={24} md={12} lg={6}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.breeding_cost}</span>}
                        name="breeding_cost"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <InputNumber
                          placeholder="Costo aditivos (USD)"
                          min={0}
                          disabled
                          style={{ width: '100%' }}
                          formatter={value => `$ ${value}`}
                          parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        />
                      </Form.Item>
                    </Col>

                    {/* Costo indirecto Ha/día */}
                    <Col xs={24} md={12} lg={6}>
                      <Form.Item
                        label={<span style={{ color: '#73879c' }}>{inputLabels.dayly_inditect_cost}</span>}
                        name="dayly_inditect_cost"
                        rules={[{ required: true, message: 'Este campo es requerido' }]}
                      >
                        <Select placeholder="Selecciona un valor">
                          {Array.from({ length: 16 }, (_, i) => 15 + i).map(value => (
                            <Select.Option key={value} value={value}>
                              {value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Precio de venta */}
                    <Col xs={24} md={12} lg={5}>
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
                  <Row gutter={[16, 16]}>

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
            <Col xl={6} xs={24} key={index}>
              <Cards
                image={require(`../../static/img/AQx-IMG/shrimp16.svg`).default}
                title={index == 3 ? "Escenario Aqualink" : `Escenario ${index + 1}`} size="large">
                <div style={{ marginBottom: '15px' }}>


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
                        {typeof scenario.inputs.estimated_survival === 'number'
                          ? `${(scenario.inputs.estimated_survival * 100).toFixed(1)}%`
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
                        backgroundColor: index == 3 ? "#01b81a" : scenario.estimated_production_lb === 0
                          ? '#ff4d4f'
                          : scenario.estimated_production_lb > 10
                            ? '#258fdb'
                            : '#ffffff',
                        fontSize: '1.2em',
                        fontWeight: 'bold'
                      }}
                    >
                      <Typography.Text strong style={{ color: 'white' }}>BIOMASA</Typography.Text>
                      <Typography.Text style={{ color: 'white' }}>{scenario.estimated_production_lb}lb</Typography.Text>
                    </div>

                    <div style={{ display: 'flex', width: "100%", justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ textAlign: 'center' }}>
                        <Typography.Text style={{ fontSize: '1.5em', fontWeight: 'bold', color: index == 3 ? "black" : '#73879c' }}>
                          ${scenario.total_cost}
                        </Typography.Text>
                        <Typography.Text style={{ display: 'block', color: index == 3 ? "black" : '#73879c' }}>Costo Estimado</Typography.Text>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <Typography.Text style={{ fontSize: '1.5em', fontWeight: 'bold', color: index == 3 ? "black" : '#73879c' }}>
                          ${scenario.total_income}
                        </Typography.Text>
                        <Typography.Text style={{ display: 'block', color: index == 3 ? "black" : '#73879c' }}>Venta Estimada</Typography.Text>
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
                <Col xs={24} xl={12}>
                  <StimatedProductionChart scenarios={scenarios} />
                </Col>

                <Col xs={24} xl={12}>
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