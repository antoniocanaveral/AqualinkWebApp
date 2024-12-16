import React, { useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button, Radio, Modal } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Steps } from '../../../components/steps/steps';

const { Step } = Steps;
const { Option } = Select;

function LaboratoryAddFarm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [selectedHT, setSelectedHT] = useState(null); // Estado para guardar el Código HT seleccionado
  const [numeroTanques, setNumeroTanques] = useState(0);
  const [capacidadModalVisible, setCapacidadModalVisible] = useState(false);
  const [logisticaModalVisible, setLogisticaModalVisible] = useState(false);
  const [contenedorTipo, setContenedorTipo] = useState('tanque'); // Tipo de contenedor: tanque o fundas
  const [selectedRazonSocial, setSelectedRazonSocial] = useState(null); 
  const onNext = async () => {
    try {
      await form.validateFields();
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error('Error en la validación del formulario:', error);
    }
  };
  const handleHTChange = (value) => {
    const selectedOption = htOptions.find(
      (option) => `${option.ext} ${option.int} ${option.razonSocial}` === value
    );
    setSelectedHT(value);
    setSelectedRazonSocial(selectedOption?.razonSocial || null);
  };
  const onPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const htOptions = [
    { ext: 'PA-67', int: 38, razonSocial: 'MARISCOS DEL ECUADOR MARECUADOR CÍA. LTDA.' },
    { ext: 'PA-126', int: 56, razonSocial: 'PROMARISCO S.A.' },
    { ext: 'PA-143', int: 21, razonSocial: 'EXPALSA EXPORTADORA DE ALIMENTOS S.A.' },
    { ext: 'PA-480', int: 1, razonSocial: 'EMPACADORA DUFER CIA. LTDA.' },
    // Agrega más opciones según sea necesario
  ];

  const givOptions = ['GIV', 'GP', 'FIN', 'LAB', 'PAK'];

  const steps = [
    {
      title: 'Selección Inicial',
      content: (
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Seleccione el Código HT"
            name="codigoHT"
            rules={[{ required: true, message: 'Debe seleccionar un Código HT' }]}
          >
            <Select placeholder="Seleccione un Código HT" onChange={handleHTChange}>
              {htOptions.map((option, index) => (
                <Option key={index} value={`${option.ext}`}>
                  {`${option.ext}`}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Seleccione el Tipo (GIV/GP/FIN/LAB/PAK)"
            name="tipoGiv"
            rules={[{ required: true, message: 'Debe seleccionar una opción' }]}
          >
            <Select placeholder="Seleccione una opción">
              {givOptions.map((option, index) => (
                <Option key={index} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Detalle de Laboratorio',
      content: (
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Código HT"
            name="codigoHTDetalle"
            initialValue={selectedHT}
            rules={[{ required: true, message: 'Debe seleccionar el Código HT en el paso anterior' }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Razón Social"
            name="razonSocial"
            initialValue={selectedHT ? htOptions.find((ht) => ht.ext === selectedHT)?.razonSocial : ''}
            rules={[{ required: true, message: 'Debe ingresar la Razón Social' }]}
          >
            <Input placeholder="Razón Social" />
          </Form.Item>
          <Form.Item
            label="Personería Jurídica"
            name="personeriaJuridica"
            rules={[{ required: true, message: 'Debe seleccionar una opción' }]}
          >
            <Radio.Group>
              <Radio value="juridica">Persona Jurídica</Radio>
              <Radio value="natural">Persona Natural</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Dirección"
            name="direccion"
            rules={[{ required: true, message: 'Debe ingresar la Dirección' }]}
          >
            <Input placeholder="Dirección" />
          </Form.Item>
          <Form.Item
            label="Teléfono"
            name="telefono"
            rules={[{ required: true, message: 'Debe ingresar el Teléfono' }]}
          >
            <Input placeholder="Teléfono" />
          </Form.Item>
          <Form.Item
            label="Persona de Contacto"
            name="personaContacto"
            rules={[{ required: true, message: 'Debe ingresar la Persona de Contacto' }]}
          >
            <Input placeholder="Persona de Contacto" />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: 'Capacidad y Logística',
      content: (
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Capacidad Instalada"
            name="capacidadInstalada"
            rules={[{ required: true, message: 'Debe ingresar la Capacidad Instalada' }]}
          >
            <Input placeholder="Capacidad Instalada" />
          </Form.Item>
          <Form.Item
            label="Número de Módulos"
            name="numeroModulos"
            rules={[{ required: true, message: 'Debe ingresar el Número de Módulos' }]}
          >
            <Input placeholder="Número de Módulos" />
          </Form.Item>
          <Form.Item
            label="Número de Tanques"
            name="numeroTanques"
            rules={[{ required: true, message: 'Debe ingresar el Número de Tanques' }]}
          >
            <Input
              placeholder="Número de Tanques"
              onChange={(e) => setNumeroTanques(parseInt(e.target.value, 10) || 0)}
            />
          </Form.Item>
          <Button onClick={() => setCapacidadModalVisible(true)} style={{ marginBottom: 20 }}>
            Detalle de Capacidad por Tanque
          </Button>
          <Button onClick={() => setLogisticaModalVisible(true)} style={{ marginBottom: 20 }}>
            Logística de Transporte
          </Button>
        </Form>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        
        highlightText="AquaLink Laboratorio"
        title="Creación de Laboratorios"
      />
      <Main>
        <Row gutter={25}>
          <Col span={24}>
            <Card>
              <Steps current={currentStep} className="custom-steps">
                {steps.map((step, index) => (
                  <Step key={index} title={step.title} />
                ))}
              </Steps>
              <div style={{ marginTop: 20 }}>{steps[currentStep].content}</div>
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
                  <Button
                    type="primary"
                    onClick={() => {
                      form
                        .validateFields()
                        .then((values) => console.log('Datos enviados:', values))
                        .catch((info) => console.error('Validación fallida:', info));
                    }}
                  >
                    Finalizar
                  </Button>
                )}
              </div>
            </Card>
          </Col>
        </Row>

        {/* Modal para Capacidad por Tanque */}
        <Modal
          title="Capacidad por Tanque"
          visible={capacidadModalVisible}
          onCancel={() => setCapacidadModalVisible(false)}
          footer={<Button onClick={() => setCapacidadModalVisible(false)}>Cerrar</Button>}
        >
          {[...Array(numeroTanques)].map((_, index) => (
            <Form.Item key={index} label={`Tanque ${index + 1}`} name={`tanque${index + 1}`}>
              <Input placeholder="Capacidad del tanque" />
            </Form.Item>
          ))}
        </Modal>

        {/* Modal para Logística de Transporte */}
        <Modal
          title="Logística de Transporte"
          visible={logisticaModalVisible}
          onCancel={() => setLogisticaModalVisible(false)}
          footer={<Button onClick={() => setLogisticaModalVisible(false)}>Cerrar</Button>}
        >
          <Form layout="vertical">
            <Form.Item label="Tipo de Contenedor" name="tipoContenedor">
              <Select defaultValue={contenedorTipo} onChange={(value) => setContenedorTipo(value)}>
                <Option value="tanque">Tanque</Option>
                <Option value="fundas">Fundas</Option>
              </Select>
            </Form.Item>
            {contenedorTipo === 'tanque' ? (
              <>
                <Form.Item label="Millones de Larvas">
                  <Input placeholder="Ingrese millones de larvas" />
                </Form.Item>
                <Form.Item label="Peso en KG">
                  <Input placeholder="Ingrese peso en KG" />
                </Form.Item>
                <Form.Item label="Oxígeno en Ruta">
                  <Radio.Group>
                    <Radio value="si">Sí</Radio>
                    <Radio value="no">No</Radio>
                  </Radio.Group>
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item label="Miles de Larvas">
                  <Input placeholder="Ingrese miles de larvas" />
                </Form.Item>
                <Form.Item label="Peso en Gramos">
                  <Input placeholder="Ingrese peso en gramos" />
                </Form.Item>
              </>
            )}
          </Form>
        </Modal>
      </Main>
    </>
  );
}

export default LaboratoryAddFarm;
