
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
import { PreCriaInfrastructure } from './add-client-form/infrastructure/pc-infrastructure';
import { PreEngordeInfrastructure } from './add-client-form/infrastructure/pe-infrastructure';
import { EngordeInfrastructure } from './add-client-form/infrastructure/e-infrastructure';

const { TabPane } = Tabs;
const { Option } = Select;

function AddClientFarm() {
    const [form] = Form.useForm();
    const [perfilJuridico, setPerfilJuridico] = useState(null);
    const [activeTab, setActiveTab] = useState("1");
    const [generatedCode, setGeneratedCode] = useState("");
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedPiscina, setSelectedPiscina] = useState(null);
    const [nodos, setNodos] = useState({});

    const [alimentadores, setAlimentadores] = useState({}); // Estado para los alimentadores dinámicos
    const [alimentadoresPreEngorde, setAlimentadoresPreEngorde] = useState({}); // Estado para los alimentadores dinámicos
    const [alimentadoresEngorde, setAlimentadoresEngorde] = useState({}); // Estado para los alimentadores dinámicos

    const handleAddAlimentador = (index) => {
        setAlimentadores((prevState) => ({
            ...prevState,
            [index]: (prevState[index] || 1) + 1,
        }));
    };

    const handleAddAlimentadorPreEngorde = (index) => {
        setAlimentadoresPreEngorde((prevState) => ({
            ...prevState,
            [index]: (prevState[index] || 1) + 1,
        }));

    };

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

        // Paso 0: Registro Pre Crías
        if (currentStep === 0) {
            const cantidadPreCrias = form.getFieldValue("cantidadPreCrias") || 0;

            const camposPreCrias = Array.from({ length: cantidadPreCrias }, (_, index) => [
                `piscinaPreCriaId-${index}`,
                `extensionPreCria-${index}`,
                `profundidadOperativa-${index}`,
                `profundidadSiembra-${index}`,
                `profundidadTransferencia-${index}`,
                `aireacionMecanica-${index}`,
                `metodoAlimentacion-${index}`,
            ]).flat();

            const errorMessages = {
                piscinaPreCriaId: "El campo 'Piscina Pre Cría' es obligatorio.",
                extensionPreCria: "El campo 'Extensión Pre Cría' debe ser mayor a 0.",
                profundidadOperativa: "La 'Profundidad Operativa' debe ser mayor a 0.",
                profundidadSiembra: "La 'Profundidad Siembra' debe ser mayor a 0.",
                profundidadTransferencia: "La 'Profundidad Transferencia' debe ser mayor a 0.",
                aireacionMecanica: "El campo 'Aireación Mecánica' debe ser mayor a 0.",
                metodoAlimentacion: "Debes seleccionar un método de alimentación (Manual o Automático).",
            };

            const camposConErrores = camposPreCrias.filter(campo => {
                const valor = form.getFieldValue(campo);
                const campoBase = campo.split('-')[0]; // Extraer nombre base
                if (campoBase === "metodoAlimentacion") {
                    return valor === undefined || valor === "";
                }
                return valor === undefined || valor <= 0;
            });

            if (camposConErrores.length > 0) {
                camposConErrores.forEach(campo => {
                    const campoBase = campo.split('-')[0];
                    const mensajeError = errorMessages[campoBase] || "Este campo es obligatorio.";
                    message.error(mensajeError);
                });
                return false;
            } else {
                setCurrentStep(currentStep + 1);
                return true;
            }
        }

        // Paso 1: Registro Pre Engorde
        if (currentStep === 1) {

            const cantidadPreEngorde = form.getFieldValue("cantidadPiscinasPreEngorde") || 0;

            const camposPreEngorde = Array.from({ length: cantidadPreEngorde }, (_, index) => [
                `piscinaPreEngordeId-${index}`,
                `extensionPreEngorde-${index}`,
                `profundidadOperativaPreEngorde-${index}`,
                `profundidadSiembraPreEngorde-${index}`,
                `profundidadTransferenciaPreEngorde-${index}`,
                `aireacionMecanicaPreEngorde-${index}`,
                `metodoAlimentacionPreEngorde-${index}`,
            ]).flat();

            const errorMessagesPaso1 = {
                piscinaPreEngordeId: "El campo 'Piscina Pre Engorde' es obligatorio.",
                extensionPreEngorde: "El campo 'Extensión Pre Engorde' debe ser mayor a 0.",
                profundidadOperativaPreEngorde: "La 'Profundidad Operativa Pre Engorde' debe ser mayor a 0.",
                profundidadSiembraPreEngorde: "La 'Profundidad Siembra Pre Engorde' debe ser mayor a 0.",
                profundidadTransferenciaPreEngorde: "La 'Profundidad Transferencia Pre Engorde' debe ser mayor a 0.",
                aireacionMecanicaPreEngorde: "El campo 'Aireación Mecánica Pre Engorde' debe ser mayor a 0.",
                metodoAlimentacionPreEngorde: "Debes seleccionar un método de alimentación (Manual o Automático).",
            };

            const camposConErroresPaso1 = camposPreEngorde.filter((campo) => {
                const valor = form.getFieldValue(campo);
                const campoBase = campo.split("-")[0]; // Extraer el nombre base del campo
                if (campoBase.includes("metodoAlimentacionPreEngorde")) {
                    return valor === undefined || valor === "";
                }
                return valor === undefined || valor <= 0;
            });

            if (camposConErroresPaso1.length > 0) {
                camposConErroresPaso1.forEach((campo) => {
                    const campoBase = campo.split("-")[0];
                    const mensajeError = errorMessagesPaso1[campoBase] || "Este campo es obligatorio.";
                    message.error(mensajeError);
                });
                return false;
            } else {
                setCurrentStep(currentStep + 1);
                return true;
            }
        }



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
            title: 'Registro Pre Crías',
            content: (
                <div style={{ width: "100%" }}>
                    <Tabs>
                        {Array.from(
                            { length: form.getFieldValue("cantidadPreCrias") || 0 },
                            (_, index) => (
                                <TabPane tab={`Pre Cría ${index + 1}`} key={`pre-cria-${index + 1}`}>
                                    <PreCriaInfrastructure
                                        key={`tab-pre-cria-${index}`}
                                        index={index}
                                        alimentadores={alimentadores}
                                        handleAddAlimentador={handleAddAlimentador}
                                        form={form} // Pasar el formulario principal
                                    />
                                </TabPane>
                            )
                        )}
                    </Tabs>
                </div>
            ),
        },
        {
            title: 'Registro Pre Engorde',
            content: (
                <Tabs>
                    {Array.from(
                        { length: form.getFieldValue("cantidadPiscinasPreEngorde") || 0 },
                        (_, index) => (
                            <TabPane tab={`Pre Engorde ${index + 1}`} key={`pre-engorde-${index + 1}`}>
                                <PreEngordeInfrastructure
                                    key={`tab-pre-engorde-${index}`}
                                    index={index}
                                    alimentadores={alimentadoresPreEngorde}
                                    handleAddAlimentador={handleAddAlimentadorPreEngorde}
                                    form={form} // Pasar el formulario principal
                                />
                            </TabPane>

                        )
                    )}
                </Tabs>
            ),
        },
        {
            title: 'Registro Engorde',
            content: (
                <Tabs>
                    {Array.from(
                        { length: form.getFieldValue("cantidadPiscinasEngorde") || 0 },
                        (_, index) => (
                            <TabPane
                                tab={`Engorde ${index + 1}`}
                                key={`engorde-${index + 1}`}
                            >
                                <EngordeInfrastructure
                                    key={`tab-engorde-${index}`}
                                    index={index}
                                    alimentadores={alimentadoresEngorde}
                                    handleAddAlimentador={handleAddAlimentadorEngorde}
                                    form={form} // Pasar el formulario principal
                                />
                            </TabPane>
                        )
                    )}
                </Tabs>
            ),
        },
    ];


    const done = () => {
        // Paso 2: Registro Engorde
        if (currentStep === 2) {

            const cantidadEngorde = form.getFieldValue("cantidadPiscinasEngorde") || 0;

            const camposEngorde = Array.from({ length: cantidadEngorde }, (_, index) => [
                `piscinaEngordeId-${index}`,
                `extensionEngorde-${index}`,
                `profundidadOperativaEngorde-${index}`,
                `profundidadTransferenciaEngorde-${index}`,
                `diasCrecimientoEngorde-${index}`,
                `cantidadAlimentoEngorde-${index}`,
                `metodoAlimentacionEngorde-${index}`,
            ]).flat();

            const errorMessagesPaso2 = {
                piscinaEngordeId: "El campo 'Piscina Engorde' es obligatorio.",
                extensionEngorde: "El campo 'Extensión Engorde' debe ser mayor a 0.",
                profundidadOperativaEngorde: "La 'Profundidad Operativa Engorde' debe ser mayor a 0.",
                profundidadTransferenciaEngorde: "La 'Profundidad Transferencia Engorde' debe ser mayor a 0.",
                diasCrecimientoEngorde: "Los 'Días de Crecimiento' deben ser mayores a 0.",
                cantidadAlimentoEngorde: "La 'Cantidad de Alimento' debe ser mayor a 0.",
                metodoAlimentacionEngorde: "Debes seleccionar un método de alimentación (Manual o Automático).",
            };

            const camposConErroresPaso2 = camposEngorde.filter(campo => {
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
                className="ninjadash-page-header-main"
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
                                        <Form.Item label="Nombre de Cliente">
                                            <Input value={form.getFieldValue("nombre") || ""} disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item label="Nombre de Finca (Camaronera)">
                                            <Input value={form.getFieldValue("nombreCamaronera") || ""} disabled />
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
                                    label="Seleccionar Piscina para Georeferenciación"
                                    name="georeferenciacionPiscina"
                                    rules={[{ required: true, message: "Seleccione un identificador de piscina" }]}
                                >
                                    <Select placeholder="Seleccione un identificador"
                                        onChange={(value) => setSelectedPiscina(value)}
                                    >
                                        {[
                                            // Identificadores de Pre Cría
                                            ...Array.from({ length: form.getFieldValue("cantidadPreCrias") || 0 }, (_, index) => ({
                                                key: `Ppc-${index + 1}`,
                                                value: form.getFieldValue(`piscinaPreCriaId-${index}`),
                                                label: `Ppc- ${form.getFieldValue(`piscinaPreCriaId-${index}`)}`,
                                            })).filter(({ value }) => value), // Filtrar valores nulos o undefined

                                            // Identificadores de Pre Engorde
                                            ...Array.from({ length: form.getFieldValue("cantidadPiscinasPreEngorde") || 0 }, (_, index) => ({
                                                key: `Ppe-${index + 1}`,
                                                value: form.getFieldValue(`piscinaPreEngordeId-${index}`),
                                                label: `Ppe- ${form.getFieldValue(`piscinaPreEngordeId-${index}`)}`,
                                            })).filter(({ value }) => value),

                                            // Identificadores de Engorde
                                            ...Array.from({ length: form.getFieldValue("cantidadPiscinasEngorde") || 0 }, (_, index) => ({
                                                key: `Pef-${index + 1}`,
                                                value: form.getFieldValue(`piscinaEngordeId-${index}`),
                                                label: `Pef-${form.getFieldValue(`piscinaEngordeId-${index}`)}`,
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
                                            setCurrentStep(2);
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

export default AddClientFarm;
