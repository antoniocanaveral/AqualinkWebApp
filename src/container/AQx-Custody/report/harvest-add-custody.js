import React, { useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button, Steps, Modal, message, InputNumber } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';

const { Step } = Steps;
const { Option } = Select;

function LoteAddCustody() {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const onNext = async () => {
        try {
            await form.validateFields();
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
            await form.validateFields();
            const allData = form.getFieldsValue();
            setFormData(allData);
            setModalVisible(true);
        } catch (error) {
            console.error('Error al finalizar el registro:', error);
        }
    };

    const steps = [
        {
            title: 'Información del Lote',
            content: (
                <Form layout="vertical" form={form}
                    initialValues={{
                        volumenIngreso: 0.00,
                    }}>
                    <Form.Item
                        label="Fecha"
                        name="fecha"
                        rules={[{ required: true, message: 'Debe ingresar la fecha' }]}
                    >
                        <Input type="date" />
                    </Form.Item>
                    <Form.Item
                        label="Lote ID"
                        name="loteId"
                        rules={[{ required: true, message: 'Debe ingresar el ID del lote' }]}
                    >
                        <Input placeholder="Ingrese el Lote ID" />
                    </Form.Item>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Hora de llegada a planta"
                                name="horaLlegada"
                                rules={[{ required: true, message: 'Debe ingresar la hora de llegada' }]}
                            >
                                <Input type="time" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Hora de inicio de proceso"
                                name="horaInicio"
                                rules={[{ required: true, message: 'Debe ingresar la hora de inicio' }]}
                            >
                                <Input type="time" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Volumen de ingreso"
                                name="volumenIngreso"
                                rules={[{ required: true, message: 'Debe ingresar el volumen de ingreso' }]}
                            >
                                <Input
                                    min={0}
                                    style={{ width: '100%' }}
                                    formatter={(value) =>
                                        value !== undefined && value !== null
                                            ? Number(value).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })
                                            : '0.00'
                                    }
                                    parser={(value) => value.replace(/,/g, '')}
                                    type="number" placeholder="Volumen (litros)" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Basura"
                                name="basura"
                                rules={[{ required: true, message: 'Debe ingresar la cantidad de basura' }]}
                            >
                                <Input placeholder="Cantidad en libras" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
        {
            title: 'Entero',
            content: (
                <Form
                    layout="vertical"
                    form={form}
                    initialValues={{
                        entero20_30: 0.00,
                        entero30_40: 0.00,
                        entero40_50: 0.00,
                        entero50_60: 0.00,
                    }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="20/30 lbs"
                                name="entero20_30"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <InputNumber
                                    placeholder="Ingrese el valor"
                                    style={{ width: '100%' }}
                                    min={0}
                                    formatter={(value) =>
                                        value !== undefined && value !== null
                                            ? Number(value).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })
                                            : '0.00'
                                    }
                                    parser={(value) => value.replace(/,/g, '')}
                                    precision={2}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="30/40 lbs"
                                name="entero30_40"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <InputNumber
                                    placeholder="Ingrese el valor"
                                    style={{ width: '100%' }}
                                    min={0}
                                    formatter={(value) =>
                                        value !== undefined && value !== null
                                            ? Number(value).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })
                                            : '0.00'
                                    }
                                    parser={(value) => value.replace(/,/g, '')}
                                    precision={2}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="40/50 lbs"
                                name="entero40_50"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <InputNumber
                                    placeholder="Ingrese el valor"
                                    style={{ width: '100%' }}
                                    min={0}
                                    formatter={(value) =>
                                        value !== undefined && value !== null
                                            ? Number(value).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })
                                            : '0.00'
                                    }
                                    parser={(value) => value.replace(/,/g, '')}
                                    precision={2}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="50/60 lbs"
                                name="entero50_60"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <InputNumber
                                    placeholder="Ingrese el valor"
                                    style={{ width: '100%' }}
                                    min={0}
                                    formatter={(value) =>
                                        value !== undefined && value !== null
                                            ? Number(value).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })
                                            : '0.00'
                                    }
                                    parser={(value) => value.replace(/,/g, '')}
                                    precision={2}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            ),
        },
        {
            title: 'Cola',
            content: (
                <Form layout="vertical" form={form}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="41/60 lbs"
                                name="cola41_60"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input type="number" placeholder="Ingrese el valor" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="61/70 lbs"
                                name="cola61_70"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input type="number" placeholder="Ingrese el valor" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="71/80 lbs"
                                name="cola71_80"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input type="number" placeholder="Ingrese el valor" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="81/90 lbs"
                                name="cola81_90"
                                rules={[{ required: true, message: 'Debe ingresar el valor' }]}
                            >
                                <Input type="number" placeholder="Ingrese el valor" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
        {
            title: 'Control de Calidad',
            content: (
                <Form layout="vertical" form={form}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Color"
                                name="color"
                                rules={[{ required: true, message: 'Debe seleccionar el color' }]}
                            >
                                <Select placeholder="Seleccione">
                                    {["A0", "A1", "A2", "A3", "A4", "A5"].map((opt) => (
                                        <Option key={opt} value={opt}>{opt}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Olor"
                                name="olor"
                                rules={[{ required: true, message: 'Debe seleccionar el olor' }]}
                            >
                                <Select placeholder="Seleccione">
                                    {["normal", "atipico"].map((opt) => (
                                        <Option key={opt} value={opt}>{opt}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Sabor"
                                name="sabor"
                                rules={[{ required: true, message: 'Debe seleccionar el sabor' }]}
                            >
                                <Select placeholder="Seleccione">
                                    {["normal", "atipico"].map((opt) => (
                                        <Option key={opt} value={opt}>{opt}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Prueba de cocción"
                                name="pruebaCoccion"
                                rules={[{ required: true, message: 'Debe seleccionar el resultado' }]}
                            >
                                <Select placeholder="Seleccione">
                                    {["normal", "cabeza roja", "cabeza naranja", "atipico"].map((opt) => (
                                        <Option key={opt} value={opt}>{opt}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
    ];

    return (
        <>
            <PageHeader title="Añadir Custodia de Lote" />
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
                        console.log('Datos guardados:', formData);
                        setModalVisible(false);
                        message.success('Datos guardados exitosamente');
                    }}>
                        Guardar
                    </Button>,
                ]}
            >
                <p>El registro de custodia del lote se ha completado.</p>
            </Modal>
        </>
    );
}

export default LoteAddCustody;
