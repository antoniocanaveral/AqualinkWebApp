
import React, { useEffect, useState } from 'react';
import { Tabs, Form, Input, Select, Button, Upload, InputNumber, Row, Col, Switch, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { WizardFour, WizardWrapper } from '../../pages/wizards/Style';
import { Steps } from '../../../components/steps/steps';
import { NaturalPersonForm } from './add-client-form/natural-person';
import { LegalPersonForm } from './add-client-form/legal-person';
import { EngordeInfrastructure, TanqueEngordeInfrastructure } from './add-client-form/infrastructure/e-infrastructure';

const { TabPane } = Tabs;
const { Option } = Select;

function AddClientLab() {
    const [form] = Form.useForm();
    const [perfilJuridico, setPerfilJuridico] = useState(null);
    const [activeTab, setActiveTab] = useState("1");
    const [generatedCode, setGeneratedCode] = useState("");
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedPiscina, setSelectedPiscina] = useState(null);
    const [nodos, setNodos] = useState({});

    const [alimentadoresEngorde, setAlimentadoresEngorde] = useState({}); // Estado para los alimentadores dinámicos


    const handleAddAlimentadorEngorde = (index) => {
        setAlimentadoresEngorde((prevState) => ({
            ...prevState,
            [index]: (prevState[index] || 1) + 1,
        }));
    };


    const fieldsNaturalPerson = [
        "nombre", "cc", "direccionFiscal", "correo", "telefonoConvencional", "telefonoCelular",
        "tipoCliente", "nombreCamaronera", "provincia", "canton", "tipoCamaronera", "acuerdoMinisterial",
        "sistemaCultivo", "protocoloProduccion", "extensionProductiva", "extensionPreCrias", "cantidadPreCrias",
        "extensionPiscinasPreEngorde", "cantidadPiscinasPreEngorde", "extensionPiscinasEngorde", "cantidadPiscinasEngorde",
        "extensionCanalesReservorio"
    ];

    const fieldsLegalPerson = [
        "razonSocial", "ruc", "direccionFiscal", "representanteLegal", "ccRepresentante", "correoRepresentante",
        "correoGeneral", "telefonoConvencional", "telefonoCelular",
        "tipoCliente", "nombreCamaronera", "provincia", "canton", "tipoCamaronera", "acuerdoMinisterial",
        "sistemaCultivo", "protocoloProduccion", "extensionProductiva", "extensionPreCrias", "cantidadPreCrias",
        "extensionPiscinasPreEngorde", "cantidadPiscinasPreEngorde", "extensionPiscinasEngorde", "cantidadPiscinasEngorde",
        "extensionCanalesReservorio"
    ];


    const getFirstTabFields = () => {
        const perfil = form.getFieldValue("perfilJuridico");
        if (perfil === "natural") {
            return fieldsNaturalPerson;
        }
        if (perfil === "juridica") {
            return fieldsLegalPerson;
        }
        return ["perfilJuridico"]; // Solo valida el perfil si aún no se selecciona
    };


    const validateCurrentStep = async () => {
        setCurrentStep(currentStep + 1);
        return true;
    };


    const handlePrevStep = async () => {
        setCurrentStep(prev => prev - 1);
        return Promise.resolve(); // Asegura que la función sea una promesa.
    };


    // Generar código automático
    const generateCode = () => {
        const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        setGeneratedCode(`AQLK-${randomNumber}`);
    };

    useEffect(() => {
        generateCode();
    }, []);


    // Manejar navegación al siguiente tab
    const handleNextTab = () => {
        setActiveTab("2");
    };

    const addNodo = (piscina) => {
        setNodos((prev) => ({
            ...prev,
            [piscina]: [...(prev[piscina] || []), {}], // Agregar un nuevo nodo
        }));
    };



    const handlePerfilJuridicoChange = (value) => {
        setPerfilJuridico(value);
    };

    const renderFields = () => {
        if (perfilJuridico === 'natural') {
            return (
                <NaturalPersonForm />
            );
        }

        if (perfilJuridico === 'juridica') {
            return (
                <LegalPersonForm />
            );
        }
        return null;
    };

    const steps = [

        {
            title: 'Número de Tanques',
            content: (

                <div style={{ width: "100%" }}>
                    <Tabs>
                        {Array.from(
                            { length: form.getFieldValue("numeroTanques") || 0 },
                            (_, index) => (
                                <TabPane
                                    tab={`Tanque ${index + 1}`}
                                    key={`tanque-${index + 1}`}
                                >
                                    <TanqueEngordeInfrastructure
                                        key={`tab-tanque-${index}`}
                                        index={index}
                                        alimentadores={alimentadoresEngorde}
                                        handleAddAlimentador={handleAddAlimentadorEngorde}
                                        form={form} // Pasar el formulario principal
                                    />
                                </TabPane>
                            )
                        )}
                    </Tabs>
                </div>
            ),
        },
    ];


    const done = () => {
        // Paso 2: Registro Engorde
        if (currentStep === 0) {

            const cantidadTanques = form.getFieldValue("numeroTanques") || 0;

            const camposTanques = Array.from({ length: cantidadTanques }, (_, index) => [
                `identificadorTanque-${index}`,
                `dimensionesLargo-${index}`,
                `dimensionesAncho-${index}`,
                `profundidad-${index}`,
                `nivelSiembra-${index}`,
                `nivelCosecha-${index}`,
                `aireacionMecanica-${index}`,
                `metodoAlimentacion-${index}`,
            ]).flat();
            
            const errorMessagesPaso2 = {
                identificadorTanque: "El campo 'Identificador de Tanque' es obligatorio.",
                dimensionesLargo: "El campo 'Dimensiones Largo' debe ser mayor a 0.",
                dimensionesAncho: "El campo 'Dimensiones Ancho' debe ser mayor a 0.",
                profundidad: "El campo 'Profundidad' debe ser mayor a 0.",
                nivelSiembra: "El campo 'Nivel de Siembra' debe ser mayor a 0.",
                nivelCosecha: "El campo 'Nivel de Cosecha' debe ser mayor a 0.",
                aireacionMecanica: "Debes seleccionar si la 'Aireación Mecánica' está presente.",
                metodoAlimentacion: "Debes seleccionar un método de alimentación (Manual o Automático).",
            };
            
            const camposConErroresPaso2 = camposTanques.filter(campo => {
                const valor = form.getFieldValue(campo);
                const campoBase = campo.split('-')[0];
                if (campoBase.includes("metodoAlimentacion")) {
                    return valor === undefined || valor === "";
                }
                return valor === undefined || valor <= 0;
            });

            if (camposConErroresPaso2.length > 0) {
                camposConErroresPaso2.forEach(campo => {
                    const campoBase = campo.split('-')[0];
                    const mensajeError = errorMessagesPaso2[campoBase] || "Este campo es obligatorio.";
                    message.error(mensajeError);
                });
                return false;
            } else {
                setActiveTab("3");
            }
        }
    };
    return (
        <>
            <PageHeader

                highlightText="AquaLink Administración"
                title="Añadir Clientes"
            />
            <Main>
                <Form form={form} layout="vertical" onFinish={(values) => console.log('Formulario completado:', values)}>
                    <Tabs activeKey={activeTab} type="line">
                        {/* Tab 1: Información */}
                        <TabPane tab="Información" key="1">
                            <Cards headless>
                                {/* Contenido del primer tab */}
                                <Form.Item label="Subir Logo (opcional)" name="imagen">
                                    <Upload beforeUpload={() => false}>
                                        <Button icon={<UploadOutlined />}>Subir Logotipo</Button>
                                    </Upload>
                                </Form.Item>

                                <Form.Item
                                    label="Perfil Jurídico"
                                    name="perfilJuridico"
                                    rules={[{ required: true, message: 'Seleccione un perfil jurídico' }]}
                                >
                                    <Select
                                        placeholder="Seleccione Perfil Jurídico"
                                        onChange={handlePerfilJuridicoChange}
                                    >
                                        <Option value="natural">Persona Natural</Option>
                                        <Option value="juridica">Persona Jurídica</Option>
                                    </Select>
                                </Form.Item>

                                {renderFields()}

                                {generatedCode && (
                                    <Row gutter={16} style={{ marginTop: "20px" }}>
                                        <Col span={24}>
                                            <Form.Item label="Código Generado">
                                                <Input value={generatedCode} disabled />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                )}

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        onClick={async () => {
                                            try {
                                                const fieldsToValidate = getFirstTabFields(); // Campos condicionales según el perfil
                                                await form.validateFields(fieldsToValidate);
                                                await handleNextTab(); // Cambia al siguiente tab
                                            } catch (error) {
                                                console.error("Errores en el formulario:", error);
                                            }
                                        }}
                                    >
                                        Siguiente
                                    </Button>
                                </Form.Item>

                            </Cards>
                        </TabPane>

                        {/* Tab 2: Infraestructura y Recursos */}
                        <TabPane tab="Infraestructura y Recursos" key="2">
                            <Cards headless>
                                {/* Información Identificadora */}
                                <Row gutter={16}>

                                    <Col span={6}>
                                        <Form.Item label="Nombre del Laboratorio">
                                            <Input value={form.getFieldValue("nombreLaboratorio") || ""} disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item label="Código Cliente">
                                            <Input value={generatedCode || "AQLK-0000"} disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item label="Tipo de Cliente">
                                            <Input value={form.getFieldValue("tipoCliente") || ""} disabled />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <WizardWrapper className="ninjadash-wizard-page">
                                    <WizardFour>
                                        <Steps
                                            isvertical
                                            isswitch
                                            current={currentStep}
                                            direction="vertical"
                                            steps={steps}
                                            onNext={validateCurrentStep}
                                            onPrev={handlePrevStep}
                                            onDone={done}
                                        />
                                    </WizardFour>
                                </WizardWrapper>

                                <Row justify="space-between" style={{ marginTop: "20px" }}>
                                    <Col>
                                        <Button type="default" onClick={() => {
                                            setActiveTab("1")
                                            setCurrentStep(0);
                                        }}>
                                            Atrás
                                        </Button>
                                    </Col>
                                </Row>
                            </Cards>
                        </TabPane>

                        {/* Tab 3: Georeferenciación */}
                        <TabPane tab="Georeferenciación" key="3">
                            <Cards headless>
                                <Form.Item
                                    label="Seleccionar Módulo para Georeferenciación"
                                    name="georeferenciacionPiscina"
                                    rules={[{ required: true, message: "Seleccione un identificador de Módulo" }]}
                                >
                                    <Select placeholder="Seleccione un identificador"
                                        onChange={(value) => setSelectedPiscina(value)}
                                    >
                                        {[

                                            ...Array.from({ length: form.getFieldValue("numeroModulos") || 0 }, (_, index) => ({
                                                key: `Mo-${index + 1}`,
                                                value: form.getFieldValue(`identificadorTanque-${index}`),
                                                label: `Mo-${index + 1}`,
                                            })).filter(({ value }) => value),
                                        ].map(({ key, value, label }) => (
                                            <Option key={key} value={value}>
                                                {label}
                                            </Option>
                                        ))}
                                    </Select>


                                </Form.Item>
                                {selectedPiscina && (
                                    <div style={{ marginTop: "20px" }}>
                                        <h4>Nodos para {selectedPiscina}</h4>
                                        <Row gutter={16}>
                                            {/* Nodo Inicial */}
                                            <Col span={12}>
                                                <Form.Item
                                                    label="Nodo Inicial - Longitud"
                                                    name={`${selectedPiscina}-nodo-inicial-longitude`}
                                                    rules={[{ required: true, message: "Ingrese la longitud del nodo inicial" }]}
                                                >
                                                    <InputNumber placeholder="Longitud" style={{ width: "100%" }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>

                                                <Form.Item
                                                    label="Nodo Inicial - Latitud"
                                                    name={`${selectedPiscina}-nodo-inicial-latitude`}
                                                    rules={[{ required: true, message: "Ingrese la latitud del nodo inicial" }]}
                                                >
                                                    <InputNumber placeholder="Latitud" style={{ width: "100%" }} />
                                                </Form.Item>
                                            </Col>
                                        </Row>


                                        {/* Nodos Dinámicos */}
                                        {Array.from({ length: nodos[selectedPiscina]?.length || 0 }).map((_, nodeIndex) => (
                                            <Row gutter={16} key={`dynamic-nodo-${selectedPiscina}-${nodeIndex}`}>

                                                <Col span={12}>
                                                    <Form.Item
                                                        label={`Nodo ${nodeIndex + 1} - Longitud`}
                                                        name={`${selectedPiscina}-nodo-${nodeIndex + 1}-longitude`}
                                                        rules={[{ required: true, message: "Ingrese la longitud" }]}
                                                    >
                                                        <InputNumber placeholder="Longitud" style={{ width: "100%" }} />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>

                                                    <Form.Item
                                                        label={`Nodo ${nodeIndex + 1} - Latitud`}
                                                        name={`${selectedPiscina}-nodo-${nodeIndex + 1}-latitude`}
                                                        rules={[{ required: true, message: "Ingrese la latitud" }]}
                                                    >
                                                        <InputNumber placeholder="Latitud" style={{ width: "100%" }} />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        ))}

                                        {/* Botón para añadir nodos */}
                                        <Row>
                                            <Col>
                                                <Button
                                                    type="dashed"
                                                    onClick={() => addNodo(selectedPiscina)}
                                                    style={{ marginTop: "10px" }}
                                                >
                                                    Añadir Nodo
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                )}

                                <Row justify="space-between" style={{ marginTop: "20px" }}>
                                    <Col>
                                        <Button type="default" onClick={() => {
                                            setActiveTab("2");
                                            setCurrentStep(0);
                                        }}>
                                            Atrás
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button type="primary" htmlType="submit">
                                            Finalizar
                                        </Button>
                                    </Col>
                                </Row>
                            </Cards>
                        </TabPane>
                    </Tabs>
                </Form>

            </Main>
        </>
    );
}

export default AddClientLab;
