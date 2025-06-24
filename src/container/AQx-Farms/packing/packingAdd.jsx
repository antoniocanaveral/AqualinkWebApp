import React, { useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button, Radio } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Steps } from '../../../components/steps/steps';

const { Step } = Steps;
const { Option } = Select;

function PackingAddFarm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [tipoContenedor, setTipoContenedor] = useState('bines'); // Tipo de contenedor: bines o gavetas
  const [tipoPesca, setTipoPesca] = useState('convencional'); // Tipo de pesca: convencional o hielo líquido
  const [selectedPPA, setSelectedPPA] = useState(null); // Estado para guardar el Código PPA seleccionado

  const onNext = async () => {
    try {
      await form.validateFields();
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error('Error en la validación del formulario:', error);
    }
  };

  const givOptions = ['GIV', 'GP', 'FIN', 'LAB', 'PAK'];


  const onPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handlePPAChange = (value) => {
    setSelectedPPA(value);
  };

  const ppaOptions = [
    { ext: 'PPA-001', int: 12, razonSocial: 'EMPACADORA ALFA S.A.' },
    { ext: 'PP-102', int: 45, razonSocial: 'EMPACADORA BETA CÍA. LTDA.' },
    { ext: 'PPA-210', int: 33, razonSocial: 'EMPACADORA GAMMA S.A.' },
    { ext: 'PP-350', int: 7, razonSocial: 'EMPACADORA DELTA CÍA. LTDA.' },
  ];

  const steps = [
    {
      title: 'Código PPA o PP',
      content: (
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Seleccione el Código PPA o PP"
            name="codigoPPA"
            rules={[{ required: true, message: 'Debe seleccionar un Código PPA o PP' }]}
          >
            <Select placeholder="Seleccione un Código PPA o PP" onChange={handlePPAChange}>
              {ppaOptions.map((option, index) => (
                <Option key={index} value={`${option.ext}`}>
                  {`${option.ext} `}
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
      title: 'Detalles de Empacadora',
      content: (
        <Form layout="vertical" form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Razón Social"
                name="razonSocial"
                initialValue={selectedPPA ? ppaOptions.find((ppa) => ppa.ext === selectedPPA)?.razonSocial : ''}
                rules={[{ required: true, message: 'Debe ingresar la Razón Social' }]}
              >
                <Input placeholder="Razón Social" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="RUC"
                name="ruc"
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
                name="direccion"
                rules={[{ required: true, message: 'Debe ingresar la Dirección' }]}
              >
                <Input placeholder="Dirección" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Capacidad Instalada"
                name="capacidadInstalada"
                rules={[{ required: true, message: 'Debe ingresar la Capacidad Instalada' }]}
              >
                <Input placeholder="Capacidad Instalada" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Teléfono"
                name="telefono"
                rules={[{ required: true, message: 'Debe ingresar el Teléfono' }]}
              >
                <Input placeholder="Teléfono" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Persona de Contacto"
                name="personaContacto"
                rules={[{ required: true, message: 'Debe ingresar la Persona de Contacto' }]}
              >
                <Input placeholder="Persona de Contacto" />
              </Form.Item>
            </Col>
          </Row>
        </Form>

      ),
    },
    {
      title: 'Logística',
      content: (
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Tipo de Contenedores"
            name="tipoContenedores"
            rules={[{ required: true, message: 'Debe seleccionar un tipo de contenedores' }]}
          >
            <Select
              defaultValue={tipoContenedor}
              onChange={(value) => setTipoContenedor(value)}
              placeholder="Seleccione el tipo de contenedor"
            >
              <Option value="bines">Bines</Option>
              <Option value="gavetas">Gavetas</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Tipo de Pesca"
            name="tipoPesca"
            rules={[{ required: true, message: 'Debe seleccionar un tipo de pesca' }]}
          >
            <Radio.Group
              defaultValue={tipoPesca}
              onChange={(e) => setTipoPesca(e.target.value)}
            >
              <Radio value="convencional">Convencional</Radio>
              <Radio value="hielo_liquido">Hielo Líquido</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        
        highlightText="AquaLink Empacadora"
        title="Gestión de Empacadoras"
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
      </Main>
    </>
  );
}

export default PackingAddFarm;
