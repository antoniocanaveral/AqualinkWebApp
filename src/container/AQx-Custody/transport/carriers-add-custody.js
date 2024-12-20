import React, { useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Steps } from '../../../components/steps/steps';
import { Cards } from '../../../components/cards/frame/cards-frame';

const { Step } = Steps;
const { Option } = Select;

const htOptions = [
    { ext: 'PA-67', int: 38, razonSocial: 'MARISCOS DEL ECUADOR MARECUADOR CÍA. LTDA.' },
    { ext: 'PA-126', int: 56, razonSocial: 'PROMARISCO S.A.' },
    { ext: 'PA-143', int: 21, razonSocial: 'EXPALSA EXPORTADORA DE ALIMENTOS S.A.' },
    { ext: 'PA-480', int: 1, razonSocial: 'EMPACADORA DUFER CIA. LTDA.' },
];

function CarriersAddCustody() {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [selectedHT, setSelectedHT] = useState(null);
    const [selectedRazonSocial, setSelectedRazonSocial] = useState(null);

    const onNext = async () => {
        try {
            await form.validateFields();
            if (currentStep === 1) { // Si estamos en el Step 2 y vamos al Step 3
                const numVehiculosRaw = form.getFieldValue('numVehiculos');
                const numVehiculos = parseInt(numVehiculosRaw, 10) || 0; // Asegurar que es un número
                if (numVehiculos < 1) {
                    // Puedes agregar una validación adicional aquí si es necesario
                    return;
                }
                const vehiculos = form.getFieldValue('vehiculos') || [];
                const newVehiculos = Array.from({ length: numVehiculos }).map((_, index) => vehiculos[index] || {});
                form.setFieldsValue({ vehiculos: newVehiculos });
            }
            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.error('Error en la validación del formulario:', error);
        }
    };

    const onPrev = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleHTChange = (value) => {
        const selectedOption = htOptions.find(option => option.ext === value);
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
                                <Option key={index} value={option.ext}>
                                    {option.ext}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Seleccione el Tipo de Transportista"
                        name="tipoTransportista"
                        rules={[{ required: true, message: 'Debe seleccionar una opción' }]}
                    >
                        <Select placeholder="Seleccione una opción">
                            {['Terrestre', 'Fluvial'].map((option, index) => (
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
            title: 'Detalles de Transportista',
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
                                label="Persona de Contacto"
                                name="personaContacto"
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
                                name="telefono"
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
                                <Input
                                    type='number'
                                    placeholder="Número de Vehículos"
                                    min={1}
                                    onChange={() => {
                                        // Limpiar los campos de vehículos si el número cambia
                                        form.setFieldsValue({ vehiculos: [] });
                                    }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
        {
            title: 'Vehículos',
            content: (
                <Form.List name="vehiculos">
                    {(fields) => (
                        <>
                            {fields.length > 0 ? (
                                fields.map((field, index) => (
                                    <Card
                                        key={field.key}
                                        title={`Vehículo ${index + 1}`}
                                        style={{ marginBottom: 20 }}
                                    >
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="Tipo de Vehículo"
                                                    name={[field.name, 'tipo']}
                                                    fieldKey={[field.fieldKey, 'tipo']}
                                                    rules={[{ required: true, message: 'Seleccione el tipo de vehículo' }]}
                                                >
                                                    <Select placeholder="Seleccione tipo">
                                                        <Option value="plataforma">Plataforma</Option>
                                                        <Option value="furgon">Furgón</Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="Marca"
                                                    name={[field.name, 'marca']}
                                                    fieldKey={[field.fieldKey, 'marca']}
                                                    rules={[{ required: true, message: 'Ingrese la marca' }]}
                                                >
                                                    <Input placeholder="Marca" />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="Modelo"
                                                    name={[field.name, 'modelo']}
                                                    fieldKey={[field.fieldKey, 'modelo']}
                                                    rules={[{ required: true, message: 'Ingrese el modelo' }]}
                                                >
                                                    <Input placeholder="Modelo" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="Nombre del Conductor"
                                                    name={[field.name, 'conductor']}
                                                    fieldKey={[field.fieldKey, 'conductor']}
                                                    rules={[{ required: true, message: 'Ingrese el nombre del conductor' }]}
                                                >
                                                    <Input placeholder="Nombre del Conductor" />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))
                            ) : (
                                <p>No hay vehículos para mostrar. Por favor, ingrese el número de vehículos y avance.</p>
                            )}
                        </>
                    )}
                </Form.List>
            ),
        },
    ];

    return (
        <>
            <PageHeader
                highlightText="AquaLink Empacadora"
                title="Gestión de Transportistas"
            />
            <Main>
                <Row gutter={25}>
                    <Col span={24}>
                        <Cards title="">
                            <Steps current={currentStep} className="custom-steps">
                                {steps.map((step, index) => (
                                    <Step key={index} title={step.title} />
                                ))}
                            </Steps>
                            <div style={{ marginTop: 20 }} key={currentStep}>
                                {steps[currentStep].content}
                            </div>
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
                                                .then((values) => {
                                                    console.log('Datos enviados:', values);
                                                    // Aquí puedes agregar la lógica para enviar los datos a tu backend
                                                })
                                                .catch((info) => console.error('Validación fallida:', info));
                                        }}
                                    >
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
