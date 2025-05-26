import React, { useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button, Radio, Modal } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Steps } from '../../../components/steps/steps';

const { Step } = Steps;
const { Option } = Select;

function ShrimpAddLab() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [selectedGR, setSelectedGR] = useState(null); // Estado para guardar el Código GR seleccionado
  const [numeroPiscinas, setNumeroPiscinas] = useState(0);
  const [detallePiscinaModalVisible, setDetallePiscinaModalVisible] = useState(false);
  const [selectedRazonSocial, setSelectedRazonSocial] = useState(null); 

  const onNext = async () => {
    try {
      await form.validateFields();
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error('Error en la validación del formulario:', error);
    }
  };

  const handleGRChange = (value) => {
    const selectedOption = grOptions.find(
      (option) => `${option.ext}` === value
    );
    setSelectedGR(value);
    setSelectedRazonSocial(selectedOption?.razonSocial || null);
  };

  const onPrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const grOptions = [
    { ext: 'GR-67', razonSocial: 'MARISCOS DEL ECUADOR MARECUADOR CÍA. LTDA.' },
    { ext: 'GR-126', razonSocial: 'PROMARISCO S.A.' },
    { ext: 'GR-143', razonSocial: 'EXPALSA EXPORTADORA DE ALIMENTOS S.A.' },
    { ext: 'GR-480', razonSocial: 'EMPACADORA DUFER CIA. LTDA.' },
  ];

  const givOptions = ['GIV', 'GP', 'FIN', 'LAB', 'PAK'];

  const steps = [
    {
      title: 'Selección Inicial',
      content: (
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Seleccione el Código GR"
            name="codigoGR"
            rules={[{ required: true, message: 'Debe seleccionar un Código GR' }]}
          >
            <Select placeholder="Seleccione un Código GR" onChange={handleGRChange}>
              {grOptions.map((option, index) => (
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
      title: 'Detalle de Camaronera',
      content: (
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Código GR"
            name="codigoGRDetalle"
            initialValue={selectedGR}
            rules={[{ required: true, message: 'Debe seleccionar el Código GR en el paso anterior' }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Razón Social"
            name="razonSocial"
            initialValue={selectedGR ? grOptions.find((gr) => gr.ext === selectedGR)?.razonSocial : ''}
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
      title: 'Capacidad y Producción',
      content: (
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Área Total de Producción (m²)"
            name="areaTotalProduccion"
            rules={[{ required: true, message: 'Debe ingresar el Área Total de Producción' }]}
          >
            <Input placeholder="Área Total de Producción" />
          </Form.Item>
          <Form.Item
            label="Número de Sectores"
            name="numeroSectores"
            rules={[{ required: true, message: 'Debe ingresar el Número de Sectores' }]}
          >
            <Input
              type="number"
              placeholder="Número de Sectores"
            />
          </Form.Item>
          <Form.Item
            label="Número de Piscinas"
            name="numeroPiscinas"
            rules={[{ required: true, message: 'Debe ingresar el Número de Piscinas' }]}
          >
            <Input
              type="number"
              placeholder="Número de Piscinas"
              onChange={(e) => setNumeroPiscinas(parseInt(e.target.value, 10) || 0)}
            />
          </Form.Item>
          <Button onClick={() => setDetallePiscinaModalVisible(true)} style={{ marginTop: 20 }}>
            Detalle de Producción por Piscina
          </Button>
        </Form>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        highlightText="AquaLink Laboratorio"
        title="Creación de Camaroneras"
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

        {/* Modal para Detalle de Producción por Piscina */}
        <Modal
          title="Detalle de Producción por Piscina"
          visible={detallePiscinaModalVisible}
          onCancel={() => setDetallePiscinaModalVisible(false)}
          footer={<Button onClick={() => setDetallePiscinaModalVisible(false)}>Cerrar</Button>}
        >
          {[...Array(numeroPiscinas)].map((_, index) => (
            <Form.Item key={index} label={`Piscina ${index + 1}`} name={`piscina${index + 1}`}>
              <Input placeholder="Detalle de producción de la piscina" />
            </Form.Item>
          ))}
        </Modal>
      </Main>
    </>
  );
}

export default ShrimpAddLab;
