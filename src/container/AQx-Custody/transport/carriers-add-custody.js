import React, { useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Steps } from '../../../components/steps/steps';
import { Cards } from '../../../components/cards/frame/cards-frame';

const { Step } = Steps;
const { Option } = Select;

const trOptions = [
    { ext: 'TR-67', int: 38, razonSocial: 'MARISCOS DEL ECUADOR MARECUADOR CÍA. LTDA.' },
    { ext: 'TR-126', int: 56, razonSocial: 'PROMARISCO S.A.' },
    { ext: 'TR-143', int: 21, razonSocial: 'EXPALSA EXPORTADORA DE ALIMENTOS S.A.' },
    { ext: 'TR-480', int: 1, razonSocial: 'EMPACADORA DUFER CIA. LTDA.' },
];

function CarriersAddCustody() {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [vehiculoForm] = Form.useForm(); // Formulario separado para el paso 3
    const [selectedTr, setSelectedTr] = useState(null);
    const [vehiculos, setVehiculos] = useState([]);

    const onNext = async () => {
        try {
            // Validación del formulario correspondiente al paso actual
            if (currentStep === 2) {
                await vehiculoForm.validateFields();
            } else {
                await form.validateFields();
            }

            if (currentStep === 1) {
                const numVehiculos = parseInt(form.getFieldValue('numVehiculos'), 10) || 0;
                if (numVehiculos > 0) {
                    setVehiculos(
                        Array.from({ length: numVehiculos }, () => ({
                            tipo: '',
                            marca: '',
                            modelo: '',
                            conductor: '',
                        }))
                    );
                }
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
        const selectedOption = trOptions.find((option) => option.ext === value);
        setSelectedTr(value);
    };

    const handleVehiculoChange = (index, field, value) => {
        const updatedVehiculos = [...vehiculos];
        updatedVehiculos[index][field] = value;
        setVehiculos(updatedVehiculos);
    };

    const steps = [
        {
            title: 'Código TR',
            content: (
                <Form layout="vertical" form={form}>
                    <Form.Item
                        label="Seleccione el Código TR"
                        name="codigoTr"
                        rules={[{ required: true, message: 'Debe seleccionar un Código TR' }]}
                    >
                        <Select placeholder="Seleccione un Código TR" onChange={handleHTChange}>
                            {trOptions.map((option, index) => (
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
                                initialValue={selectedTr ? trOptions.find((tr) => tr.ext === selectedTr)?.razonSocial : ''}
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
                                                value={vehiculo.tipo}
                                                onChange={(value) => handleVehiculoChange(index, 'tipo', value)}
                                            >
                                                <Option value="plataforma">Plataforma</Option>
                                                <Option value="furgon">Furgón</Option>
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
                                                value={vehiculo.marca}
                                                onChange={(e) => handleVehiculoChange(index, 'marca', e.target.value)}
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
                                                value={vehiculo.modelo}
                                                onChange={(e) => handleVehiculoChange(index, 'modelo', e.target.value)}
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
                                                value={vehiculo.conductor}
                                                onChange={(e) => handleVehiculoChange(index, 'conductor', e.target.value)}
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
                                        onClick={() =>
                                            console.log('Datos enviados:', {
                                                ...form.getFieldsValue(),
                                                vehiculos,
                                            })
                                        }
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
