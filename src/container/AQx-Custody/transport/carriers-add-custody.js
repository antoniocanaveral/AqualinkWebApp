import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Select, Card, message } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Steps } from '../../../components/steps/steps';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { registerCarrier, registerVehicle } from '../../../redux/carriers/actionCreator.js';

const { Step } = Steps;
const { Option } = Select;

function CarriersAddCustody() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm(); // Formulario para los datos del transportista
  const [vehiculoForm] = Form.useForm(); // Formulario para los vehículos
  const [vehiculos, setVehiculos] = useState([]);
  const dispatch = useDispatch();

  const onNext = async () => {
    try {
      if (currentStep === 1) {
        await vehiculoForm.validateFields();
      } else {
        await form.validateFields();
      }
      if (currentStep === 0) {
        // Inicializar el array de vehículos según el número ingresado
        const numVehiculos = parseInt(form.getFieldValue('numVehiculos'), 10) || 0;
        if (numVehiculos > 0) {
          setVehiculos(
            Array.from({ length: numVehiculos }, () => ({
              SM_VehicleType: '', // 'PLATFORM' o 'VAN'
              SM_VehicleBrand: '',
              SM_Model: '',
              SM_DriverName: '',
              sm_platenumber: '', // Nuevo campo: matrícula del vehículo
            }))
          );
        }
      }
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error('Error en la validación:', error);
    }
  };

  const onPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleVehiculoChange = (index, field, value) => {
    const updatedVehiculos = [...vehiculos];
    updatedVehiculos[index][field] = value;
    setVehiculos(updatedVehiculos);
  };

  const steps = [
    {
      title: 'Detalles del Transportista',
      content: (
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Código TR"
            name="sm_code"
            rules={[{ required: true, message: 'Debe ingresar un Código TR' }]}
          >
            <Input placeholder="Ingrese el Código TR" />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Razón Social"
                name="Name"
                rules={[{ required: true, message: 'Debe ingresar la Razón Social' }]}
              >
                <Input placeholder="Razón Social" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="RUC"
                name="TaxID"
                rules={[{ required: true, message: 'Debe ingresar el RUC' }]}
              >
                <Input placeholder="RUC" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Dirección"
                name="SM_Address"
                rules={[{ required: true, message: 'Debe ingresar la Dirección' }]}
              >
                <Input placeholder="Dirección" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Persona de Contacto"
                name="SM_ContactName"
                rules={[{ required: true, message: 'Debe ingresar la Persona de Contacto' }]}
              >
                <Input placeholder="Persona de Contacto" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Teléfono"
                name="Phone"
                rules={[{ required: true, message: 'Debe ingresar el Teléfono' }]}
              >
                <Input placeholder="Teléfono" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Número de Vehículos"
                name="numVehiculos"
                rules={[{ required: true, message: 'Debe ingresar el Número de Vehículos' }]}
              >
                <Input type="number" placeholder="Número de Vehículos" min={1} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      ),
    },
    {
      title: 'Vehículos',
      content: (
        <Form layout="vertical" form={vehiculoForm}>
          {vehiculos.length > 0 ? (
            vehiculos.map((vehiculo, index) => (
              <Card key={index} title={`Vehículo ${index + 1}`} style={{ marginBottom: 20 }}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Tipo de Vehículo"
                      name={`vehiculo-${index}-tipo`}
                      rules={[{ required: true, message: 'Seleccione el tipo de vehículo' }]}
                    >
                      <Select
                        value={vehiculo.SM_VehicleType}
                        onChange={(value) => handleVehiculoChange(index, 'SM_VehicleType', value)}
                      >
                        <Option value="PLATFORM">Platform</Option>
                        <Option value="VAN">Van</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Marca"
                      name={`vehiculo-${index}-marca`}
                      rules={[{ required: true, message: 'Ingrese la marca' }]}
                    >
                      <Input
                        value={vehiculo.SM_VehicleBrand}
                        onChange={(e) => handleVehiculoChange(index, 'SM_VehicleBrand', e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Modelo"
                      name={`vehiculo-${index}-modelo`}
                      rules={[{ required: true, message: 'Ingrese el modelo' }]}
                    >
                      <Input
                        value={vehiculo.SM_Model}
                        onChange={(e) => handleVehiculoChange(index, 'SM_Model', e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Nombre del Conductor"
                      name={`vehiculo-${index}-conductor`}
                      rules={[{ required: true, message: 'Ingrese el nombre del conductor' }]}
                    >
                      <Input
                        value={vehiculo.SM_DriverName}
                        onChange={(e) => handleVehiculoChange(index, 'SM_DriverName', e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Matrícula del Vehículo"
                      name={`vehiculo-${index}-matricula`}
                      rules={[{ required: true, message: 'Ingrese la matrícula del vehículo' }]}
                    >
                      <Input
                        value={vehiculo.sm_platenumberr}
                        onChange={(e) => handleVehiculoChange(index, 'sm_platenumber', e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            ))
          ) : (
            <p>No hay vehículos para mostrar. Por favor, ingrese el número de vehículos y avance.</p>
          )}
        </Form>
      ),
    },
  ];

  const onFinish = async () => {
    try {
      // Validamos y extraemos los datos del transportista
      const carrierValues = await form.validateFields();
      const vehicleValues = await vehiculoForm.validateFields();

      // Armar el payload usando los nombres de campo que corresponden a la tabla
      const carrierData = {
        SM_Code: carrierValues.sm_code, // Código TR
        TaxID: carrierValues.TaxID, // RUC
        Name: carrierValues.Name, // Razón Social
        SM_Address: carrierValues.SM_Address, // Dirección
        SM_ContactName: carrierValues.SM_ContactName, // Persona de Contacto
        phone: carrierValues.Phone, // Teléfono
      };

      console.log('Carrier Data:', carrierData); // Verificar que los datos estén correctos

      // Registrar el carrier y obtener el resultado
      const carrierResult = await dispatch(registerCarrier(carrierData));

      // Verificamos que se obtuvo el ID
      const carrierId = carrierResult && carrierResult.id;
      if (!carrierId) {
        throw new Error('No se pudo obtener el ID del transportista.');
      }

      // Registrar cada vehículo asignándole el carrierId
      for (const vehiculo of vehiculos) {
        await dispatch(registerVehicle(carrierId, vehiculo));
      }

      message.success('Transportista y vehículos registrados con éxito');
    } catch (error) {
      console.error('Error al registrar transportista/vehículos:', error);
      message.error(`Error: ${error.message}`);
    }
  };

  const renderStepContent = () => {
    return steps.map((step, index) => (
      <div
        key={index}
        style={{ display: currentStep === index ? 'block' : 'none' }}
      >
        {step.content}
      </div>
    ));
  };

  return (
    <>
      <PageHeader title="Gestión de Transportistas" />
      <Main>
        <Row gutter={25}>
          <Col span={24}>
            <Cards>
              <Steps current={currentStep}>
                {steps.map((step, index) => (
                  <Step key={index} title={step.title} />
                ))}
              </Steps>
              <div style={{ marginTop: 20 }}>{renderStepContent()}</div>
              <div style={{ marginTop: 20, textAlign: 'right' }}>
                {currentStep > 0 && (
                  <Button style={{ marginRight: 8 }} onClick={onPrev}>
                    Atrás
                  </Button>
                )}
                {currentStep < steps.length - 1 && (
                  <Button type="primary" onClick={onNext}>
                    Siguiente
                  </Button>
                )}
                {currentStep === steps.length - 1 && (
                  <Button type="primary" onClick={onFinish}>
                    Finalizar
                  </Button>
                )}
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CarriersAddCustody;