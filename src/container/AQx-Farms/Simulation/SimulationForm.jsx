import React, { useEffect } from 'react';
import { Form, InputNumber, Select, DatePicker, Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

const SimulationForm = ({
  form,
  simulationType,
  fixedOption,
  cultivationSystem,
  onFixedOptionChange,
  onAddScenario,
  inputLabels,
  fixedFieldNeedsValue,
  fixedFieldDisabled,
}) => {
  const fixedOptionFieldNames = {
    densidad: 'density',
    ciclo: 'days_to_harvest',
    peso: 'stimated_weight',
    fca: 'stimated_fca',
  };

  const foodPrice = Form.useWatch('food_price', form);

  useEffect(() => {
    if (foodPrice !== undefined && foodPrice !== null && !isNaN(foodPrice)) {
      const breedingCost = parseFloat((foodPrice * 0.05).toFixed(2));
      form.setFieldsValue({ breeding_cost: breedingCost });
    } else {
      form.setFieldsValue({ breeding_cost: null });
    }
  }, [foodPrice, form]);

  return (
    <div >
      <Row gutter={[16, 16]}>
        <Col xs={12} md={12} lg={12}>
          {simulationType === 'fijo' && (
            <Form.Item
              label={<span style={{ color: '#73879c', width: '100%' }}>Seleccione una opción de Variables fijas</span>}
              name="fixedOption"
              initialValue={fixedOption}
              rules={[{ required: true, message: 'Este campo es requerido' }]}
              labelCol={{ span: 24 }} // Label takes full width
              wrapperCol={{ span: 24 }} // Input takes full width, forcing vertical layout
            >
              <Select
                style={{ width: '100%' }}
                placeholder="Seleccione una opción de Variables fijas"
                onChange={onFixedOptionChange}
              >
                <Option value="densidad">1. Una sola densidad</Option>
                <Option value="ciclo">2. Un solo # de días de ciclo</Option>
                <Option value="peso">3. Un solo peso</Option>
                <Option value="fca">4. Un solo FCA</Option>
              </Select>
            </Form.Item>
          )}
        </Col>

        <Col xs={12} md={12} lg={12}>
          <Form.Item
            label={<span style={{ color: '#73879c' }}>Seleccione un Sistema de Cultivo</span>}
            name="cultivationSystem"
            initialValue="Bifasico"
            rules={[{ required: true, message: 'Este campo es requerido' }]}
            labelCol={{ span: 24 }} // Label takes full width
            wrapperCol={{ span: 24 }} // Input takes full width, forcing vertical layout
          >
            <Select style={{ width: '100%' }} placeholder="Seleccione un Sistema de Cultivo">
              <Option value="Bifasico">Bifásico</Option>
              <Option value="Trifasico">Trifásico</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={{ simulationType: 'dinamico', fixedOption: 'densidad' }}
      >
        <Row gutter={[16, 16]}>
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
          <Col xs={12} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.start_date}</span>}
              name="start_date"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <DatePicker
                placeholder="Fecha de inicio"
                style={{
                  height: 'auto',
                  width: '100%',
                  cursor: 'pointer',
                  fontSize: '17px',
                  margin: '0px',
                  padding: '0px',
                }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.days_to_harvest}</span>}
              name="days_to_harvest"
              validateStatus={fixedOption === 'ciclo' && fixedFieldNeedsValue ? 'error' : ''}
              help={fixedOption === 'ciclo' && fixedFieldNeedsValue ? 'Este campo es requerido' : ''}
            >
              <Select
                placeholder="Seleccione"
                disabled={fixedOption === 'ciclo' && fixedFieldDisabled}
              >
                {[63, 70, 77, 84, 91, 98].map(day => (
                  <Option key={day} value={day}>{day} días</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.density}</span>}
              name="density"
              validateStatus={fixedOption === 'densidad' && fixedFieldNeedsValue ? 'error' : ''}
              help={fixedOption === 'densidad' && fixedFieldNeedsValue ? 'Este campo es requerido' : ''}
            >
              <Select
                placeholder="Seleccione Densidad"
                disabled={fixedOption === 'densidad' && fixedFieldDisabled}
              >
                {Array.from({ length: 9 }, (_, i) => 90000 + i * 20000).map(value => (
                  <Option key={value} value={value}>{value.toLocaleString()}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_weight}</span>}
              name="stimated_weight"
              validateStatus={fixedOption === 'peso' && fixedFieldNeedsValue ? 'error' : ''}
              help={fixedOption === 'peso' && fixedFieldNeedsValue ? 'Este campo es requerido' : ''}
            >
              <Select
                placeholder="Seleccione Peso (g)"
                disabled={fixedOption === 'peso' && fixedFieldDisabled}
              >
                {Array.from({ length: 24 }, (_, i) => 15 + i).map(value => (
                  <Option key={value} value={value}>{value.toLocaleString()} g</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_survival}</span>}
              name="stimated_survival"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <Select placeholder="Seleccione Supervivencia">
                {Array.from({ length: 6 }, (_, i) => 60 + i * 5).map(value => (
                  <Option key={value} value={value}>{value}%</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_fca}</span>}
              name="stimated_fca"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
              validateStatus={fixedOption === 'fca' && fixedFieldNeedsValue ? 'error' : ''}
              help={fixedOption === 'fca' && fixedFieldNeedsValue ? 'Este campo es requerido' : ''}
            >
              <Select
                placeholder="Seleccione FCA"
                disabled={fixedOption === 'fca' && fixedFieldDisabled}
              >
                {Array.from({ length: 6 }, (_, i) => (1 + i * 0.1).toFixed(1)).map(value => (
                  <Option key={value} value={parseFloat(value)}>{value}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.stimated_performance}</span>}
              name="stimated_performance"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <Select placeholder="Seleccione Crecimiento">
                {Array.from({ length: 3 }, (_, i) => 85 + i * 5).map(value => (
                  <Option key={value} value={value}>{value}%</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.pre_breeding_weeks}</span>}
              name="pre_breeding_weeks"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <Select placeholder="Días">
                {[14, 21, 28].map(week => (
                  <Option key={week} value={week}>{week} días</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          {cultivationSystem === 'Trifasico' && (
            <Col xs={24} md={12} lg={6}>
              <Form.Item
                label={<span style={{ color: '#73879c' }}>Días de pre-engorde</span>}
                name="pre_fattening_days"
                rules={[{ required: true, message: 'Este campo es requerido' }]}
              >
                <Select placeholder="Días">
                  {[15, 20, 25, 30].map(day => (
                    <Option key={day} value={day}>{day} días</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          )}
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.food_price}</span>}
              name="food_price"
              rules={[{ required: true, message: 'El costo es requerido' }]}
            >
              <Select placeholder="Selecciona el costo">
                {Array.from({ length: 9 }, (_, i) => (1 + i * 0.1).toFixed(1)).map(value => (
                  <Option key={value} value={parseFloat(value)}>$ {value}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
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
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label={<span style={{ color: '#73879c' }}>{inputLabels.dayly_inditect_cost}</span>}
              name="dayly_inditect_cost"
              rules={[{ required: true, message: 'Este campo es requerido' }]}
            >
              <Select placeholder="Selecciona un valor">
                {Array.from({ length: 16 }, (_, i) => 15 + i).map(value => (
                  <Option key={value} value={value}>{value}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
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
        <Row justify="end" gutter={10} style={{ marginTop: '16px' }}>
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
    </div>
  );
};

SimulationForm.propTypes = {
  form: PropTypes.object.isRequired,
  simulationType: PropTypes.string.isRequired,
  fixedOption: PropTypes.string,
  cultivationSystem: PropTypes.string.isRequired,
  onFixedOptionChange: PropTypes.func.isRequired,
  onAddScenario: PropTypes.func.isRequired,
  inputLabels: PropTypes.object.isRequired,
  fixedFieldNeedsValue: PropTypes.bool.isRequired,
  fixedFieldDisabled: PropTypes.bool.isRequired,
};

export default SimulationForm;
