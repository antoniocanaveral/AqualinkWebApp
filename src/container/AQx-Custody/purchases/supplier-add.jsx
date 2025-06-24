import React, { useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button, Radio } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Steps } from '../../../components/steps/steps';

const { Step } = Steps;
const { Option } = Select;

const htOptions = [
    { ext: 'PA-67', int: 38, razonSocial: 'MARISCOS DEL ECUADOR MARECUADOR CÍA. LTDA.' },
    { ext: 'PA-126', int: 56, razonSocial: 'PROMARISCO S.A.' },
    { ext: 'PA-143', int: 21, razonSocial: 'EXPALSA EXPORTADORA DE ALIMENTOS S.A.' },
    { ext: 'PA-480', int: 1, razonSocial: 'EMPACADORA DUFER CIA. LTDA.' },
];

function SupplierAddCustody() {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [selectedHT, setSelectedHT] = useState(null); // Estado para guardar el Código HT seleccionado
    const [metodoPesca, setMetodoPesca] = useState('bines'); // Tipo de contenedor: bines o gavetas
    const [tipoPesca, setTipoPesca] = useState('convencional'); // Tipo de pesca: convencional o hielo líquido
    const [selectedRazonSocial, setSelectedRazonSocial] = useState(null);

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

    const handleHTChange = (value) => {
        const selectedOption = htOptions.find(
            (option) => `${option.ext} ${option.int} ${option.razonSocial}` === value
        );
        setSelectedHT(value);
        setSelectedRazonSocial(selectedOption?.razonSocial || null);
    };

  

    const steps = [
        {
            title: 'Código HT',
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
            title: 'Detalles de Proveedor',
            content: (
                <Form layout="vertical" form={form}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Razón Social"
                                name="razonSocial"
                                initialValue={selectedHT ? htOptions.find((ht) => ht.ext === selectedHT)?.razonSocial : ''}
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
                                label="Extensión Productiva" 
                                name="extensionProductiva"
                                rules={[{ required: true, message: 'Debe ingresar la Extensión Productiva' }]}
                            >
                                <Input placeholder="Extensión Productiva" />
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
                        label="Tipo de Pesca"
                        name="tipoPesca"
                        rules={[{ required: true, message: 'Debe seleccionar un tipo de pesca' }]}
                    >
                        <Select
                            defaultValue={metodoPesca}
                            onChange={(value) => setMetodoPesca(value)}
                            placeholder="Seleccione el tipo de contenedor"
                        >
                            <Option value="bines">Manual</Option>
                            <Option value="gavetas">Automático</Option>
                        </Select>
                    </Form.Item>
                   
                </Form>
            ),
        },
    ];

    return (
        <>
            <PageHeader

                highlightText="AquaLink Empacadora"
                title="Gestión de Proveedor"
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

export default SupplierAddCustody;
