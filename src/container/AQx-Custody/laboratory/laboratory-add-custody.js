import React, { useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button, Upload, Modal, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Steps } from '../../../components/steps/steps';
import { Cards } from '../../../components/cards/frame/cards-frame';

const { Step } = Steps;
const { Option } = Select;

// Opciones para el selector de LOTE ID (ejemplo)
const loteOptions = [
    { id: 'LOTE-001', descripcion: 'Lote 001' },
    { id: 'LOTE-002', descripcion: 'Lote 002' },
    // Agrega más opciones según sea necesario
];

function LaboratoryAddCustody() {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [organolepticoForm] = Form.useForm();
    const [sulfitosForm] = Form.useForm();
    const [quimicoForm] = Form.useForm();
    const [microbiologicoForm] = Form.useForm();
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({});

    const onNext = async () => {
        try {
            // Validar el formulario correspondiente al paso actual
            switch (currentStep) {
                case 0:
                    await form.validateFields();
                    break;
                case 1:
                    await organolepticoForm.validateFields();
                    break;
                case 2:
                    await sulfitosForm.validateFields();
                    break;
                case 3:
                    await quimicoForm.validateFields();
                    break;
                case 4:
                    await microbiologicoForm.validateFields();
                    break;
                default:
                    break;
            }

            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.error('Error en la validación del formulario:', error);
        }
    };

    const onPrev = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleFinalizar = async () => {
        try {
            await microbiologicoForm.validateFields();
            // Recolectar todos los datos de los formularios
            const loteData = form.getFieldsValue();
            const organolepticoData = organolepticoForm.getFieldsValue();
            const sulfitosData = sulfitosForm.getFieldsValue();
            const quimicoData = quimicoForm.getFieldsValue();
            const microbiologicoData = microbiologicoForm.getFieldsValue();

            const allData = {
                ...loteData,
                ...organolepticoData,
                ...sulfitosData,
                ...quimicoData,
                ...microbiologicoData,
            };

            setFormData(allData);
            setModalVisible(true);
        } catch (error) {
            console.error('Error al finalizar el registro:', error);
        }
    };

    const steps = [
        {
            title: 'Selector de LOTE ID',
            content: (
                <Form layout="vertical" form={form}>
                    <Form.Item
                        label="Seleccione el LOTE ID"
                        name="loteId"
                        rules={[{ required: true, message: 'Debe seleccionar un LOTE ID' }]}
                    >
                        <Select placeholder="Seleccione un LOTE ID">
                            {loteOptions.map((option) => (
                                <Option key={option.id} value={option.id}>
                                    {option.descripcion}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            ),
        },
        {
            title: 'Organoléptico',
            content: (
                <Form layout="vertical" form={organolepticoForm}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Apariencia, Textura y Olor"
                                name="apariencia"
                                rules={[{ required: true, message: 'Debe ingresar este campo' }]}
                            >
                                <Input.TextArea placeholder="Descripción" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Sabor"
                                name="sabor"
                                rules={[{ required: true, message: 'Debe ingresar el sabor' }]}
                            >
                                <Input placeholder="Sabor" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Grados Brix"
                                name="gradosBrix"
                                rules={[{ required: true, message: 'Debe ingresar los grados Brix' }]}
                            >
                                <Input type="number" placeholder="Grados Brix" min={0} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Cargar Respaldo Físico"
                                name="respaldoFisico"
                                valuePropName="fileList"
                                getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                                rules={[{ required: true, message: 'Debe cargar un archivo' }]}
                            >
                                <Upload
                                    name="file"
                                    beforeUpload={() => false} // Prevenir subida automática
                                    multiple={false}
                                >
                                    <Button icon={<UploadOutlined />}>Seleccionar Archivo</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
        {
            title: 'Sulfitos',
            content: (
                <Form layout="vertical" form={sulfitosForm}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Resultado de Sulfitos"
                                name="sulfitos"
                                rules={[{ required: true, message: 'Debe ingresar el resultado de sulfitos' }]}
                            >
                                <Input placeholder="Resultado de Sulfitos" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Sincronizar BIOLAN o Digitar Resultado">
                                <Button type="primary" onClick={() => message.info('Funcionalidad pendiente')}>
                                    Sincronizar BIOLAN
                                </Button>
                                <span style={{ margin: '0 10px' }}>o</span>
                                <Button onClick={() => message.info('Digite el resultado manualmente')}>
                                    Digitar Resultado
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
        {
            title: 'Químico',
            content: (
                <Form layout="vertical" form={quimicoForm}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Residuos Veterinarios"
                                name="residuosVeterinarios"
                                rules={[{ required: true, message: 'Debe ingresar los residuos veterinarios' }]}
                            >
                                <Input placeholder="Residuos Veterinarios" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Metales Pesados"
                                name="metalesPesados"
                                rules={[{ required: true, message: 'Debe ingresar los metales pesados' }]}
                            >
                                <Input placeholder="Metales Pesados" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Micotoxinas"
                                name="micotoxinas"
                                rules={[{ required: true, message: 'Debe ingresar las micotoxinas' }]}
                            >
                                <Input placeholder="Micotoxinas" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Residuos Orgánicos"
                                name="residuosOrganicos"
                                rules={[{ required: true, message: 'Debe ingresar los residuos orgánicos' }]}
                            >
                                <Input placeholder="Residuos Orgánicos" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                label="Cargar Imagen"
                                name="imagenQuimico"
                                valuePropName="fileList"
                                getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                                rules={[{ required: true, message: 'Debe cargar una imagen' }]}
                            >
                                <Upload
                                    name="file"
                                    beforeUpload={() => false} // Prevenir subida automática
                                    multiple={false}
                                    listType="picture"
                                >
                                    <Button icon={<UploadOutlined />}>Seleccionar Imagen</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
        {
            title: 'Microbiológico',
            content: (
                <Form layout="vertical" form={microbiologicoForm}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Aerobios Totales"
                                name="aerobiosTotales"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input placeholder="Aerobios Totales" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Coliformes Totales"
                                name="coliformesTotales"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input placeholder="Coliformes Totales" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Coliformes Fecales"
                                name="coliformesFecales"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input placeholder="Coliformes Fecales" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Conteo de Estafilococos Áureos"
                                name="estafilococos"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input placeholder="Conteo de Estafilococos Áureos" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Salmonella"
                                name="salmonella"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input placeholder="Salmonella" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="E.Coli"
                                name="ecoli"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input placeholder="E.Coli" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Hongos y Levaduras"
                                name="hongosLevaduras"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input placeholder="Hongos y Levaduras" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Cargar Imagen"
                                name="imagenMicrobiologico"
                                valuePropName="fileList"
                                getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                                rules={[{ required: true, message: 'Debe cargar una imagen' }]}
                            >
                                <Upload
                                    name="file"
                                    beforeUpload={() => false} // Prevenir subida automática
                                    multiple={false}
                                    listType="picture"
                                >
                                    <Button icon={<UploadOutlined />}>Seleccionar Imagen</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
    ];

    return (
        <>
            <PageHeader title="Añadir Análisis de Laboratorio" />
            <Main>
                <Row gutter={25}>
                    <Col span={24}>
                        <Cards>
                            <Steps current={currentStep}>
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
                                    <Button type="primary" onClick={handleFinalizar}>
                                        Finalizar Registro
                                    </Button>
                                )}
                            </div>
                        </Cards>
                    </Col>
                </Row>
            </Main>

            <Modal
                title="Registro Finalizado"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={[
                    <Button key="guardar" onClick={() => {
                        // Lógica para guardar los datos
                        console.log('Datos guardados:', formData);
                        setModalVisible(false);
                        message.success('Datos guardados exitosamente');
                    }}>
                        Guardar
                    </Button>,
                    <Button key="certificado" type="primary" onClick={() => {
                        // Lógica para solicitar certificado SCI
                        console.log('Solicitando Certificado SCI con datos:', formData);
                        setModalVisible(false);
                        message.success('Solicitud de Certificado SCI enviada');
                    }}>
                        Solicitar Certificado SCI
                    </Button>,
                ]}
            >
                <p>¿Desea solicitar el Certificado SCI o simplemente guardar los datos?</p>
            </Modal>
        </>
    );
}

export default LaboratoryAddCustody;
