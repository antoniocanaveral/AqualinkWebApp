import React, { useEffect, useState } from 'react';
import { Tabs, Form, Input, Select, Button, Upload, InputNumber, Row, Col, Switch } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { WizardFour, WizardWrapper } from '../../pages/wizards/Style';
import { Steps } from '../../../components/steps/steps';

const { TabPane } = Tabs;
const { Option } = Select;

function AddClientFarm() {
    const [form] = Form.useForm();
    const [perfilJuridico, setPerfilJuridico] = useState(null);
    const [activeTab, setActiveTab] = useState("1");
    const [generatedCode, setGeneratedCode] = useState("");
    const [currentStep, setCurrentStep] = useState(0);


    const [alimentadores, setAlimentadores] = useState({}); // Estado para los alimentadores dinámicos

    const handleAddAlimentador = (index) => {
        setAlimentadores((prevState) => ({
            ...prevState,
            [index]: (prevState[index] || 1) + 1,
        }));
    };

    const handleNext = async () => {
        try {
            await form.validateFields(); // Verificar que todos los campos sean válidos
            setCurrentStep(currentStep + 1); // Avanzar al siguiente paso
        } catch (error) {
            console.error("Errores en el formulario:", error);
        }
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1); // Regresar al paso anterior
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

    const handlePerfilJuridicoChange = (value) => {
        setPerfilJuridico(value);
    };

    const renderFields = () => {
        if (perfilJuridico === 'natural') {
            return (
                <>
                    {/* Información General */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Nombre"
                                name="nombre"
                                rules={[{ required: true, message: 'Ingrese el nombre' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="CC"
                                name="cc"
                                rules={[{ required: true, message: 'Ingrese la CC' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Dirección Fiscal"
                                name="direccionFiscal"
                                rules={[{ required: true, message: 'Ingrese la dirección fiscal' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Correo Electrónico"
                                name="correo"
                                rules={[
                                    { required: true, message: 'Ingrese el correo electrónico' },
                                    { type: 'email', message: 'Ingrese un correo válido' },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Teléfono (Convencional)"
                                name="telefonoConvencional"
                                rules={[{ required: true, message: 'Ingrese el teléfono convencional' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Teléfono (Celular)"
                                name="telefonoCelular"
                                rules={[{ required: true, message: 'Ingrese el teléfono celular' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Separador: Información de Camaronera */}
                    <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                        <strong>● Información de Camaronera</strong>
                    </div>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Tipo de Cliente"
                                name="tipoCliente"
                                rules={[{ required: true, message: 'Seleccione un tipo de cliente' }]}
                            >
                                <Select placeholder="Seleccione Tipo de Cliente">
                                    <Option value="GIV">GIV</Option>
                                    <Option value="FPA">FPA</Option>
                                    <Option value="FIN">FIN</Option>
                                    <Option value="LAB">LAB</Option>
                                    <Option value="PAK">PAK</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Nombre de la Camaronera"
                                name="nombreCamaronera"
                                rules={[{ required: true, message: 'Ingrese el nombre de la camaronera' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Provincia"
                                name="provincia"
                                rules={[{ required: true, message: 'Ingrese la provincia' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Cantón"
                                name="canton"
                                rules={[{ required: true, message: 'Ingrese el cantón' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Tipo de Camaronera"
                                name="tipoCamaronera"
                                rules={[{ required: true, message: 'Seleccione el tipo de camaronera' }]}
                            >
                                <Select placeholder="Seleccione Tipo de Camaronera">
                                    <Option value="isla">Isla</Option>
                                    <Option value="tierraFirme">Tierra Firme</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Acuerdo Ministerial"
                                name="acuerdoMinisterial"
                                rules={[{ required: true, message: 'Ingrese el acuerdo ministerial' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Certificado Ambiental (opcional)"
                                name="certificadoAmbiental"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Certificado de Inocuidad (opcional)"
                                name="certificadoInocuidad"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Sistema de Cultivo"
                                name="sistemaCultivo"
                                rules={[{ required: true, message: 'Seleccione el sistema de cultivo' }]}
                            >
                                <Select placeholder="Seleccione Sistema de Cultivo">
                                    <Option value="intensivo">Intensivo</Option>
                                    <Option value="semiIntensivo">Semi Intensivo</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Protocolo de Producción"
                                name="protocoloProduccion"
                                rules={[{ required: true, message: 'Seleccione el protocolo de producción' }]}
                            >
                                <Select placeholder="Seleccione Protocolo de Producción">
                                    <Option value="biFasico">Bi Fásico (BF)</Option>
                                    <Option value="poliFasico">Poli Fásico (PF)</Option>
                                    <Option value="triGasico">Tri Gásico (TF)</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Extensión Productiva (Total) en Has."
                                name="extensionProductiva"
                                rules={[{ required: true, message: 'Ingrese la extensión productiva total' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Extensión Pre Crias (Has)"
                                name="extensionPreCrias"
                                rules={[{ required: true, message: 'Ingrese la extensión de pre crías' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Cantidad de Pre Crias (#)"
                                name="cantidadPreCrias"
                                rules={[{ required: true, message: 'Ingrese la cantidad de pre crías' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Extensión Piscinas Engorde (Has)"
                                name="extensionPiscinasEngorde"
                                rules={[{ required: true, message: 'Ingrese la extensión de piscinas de engorde' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Cantidad de Piscinas Engorde (#)"
                                name="cantidadPiscinasEngorde"
                                rules={[{ required: true, message: 'Ingrese la cantidad de piscinas de engorde' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Extensión Canales y Reservorios (opcional)"
                                name="extensionCanalesReservorio"
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </>
            );
        }


        if (perfilJuridico === 'juridica') {
            return (
                <>
                    {/* Información General */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Razón Social"
                                name="razonSocial"
                                rules={[{ required: true, message: 'Ingrese la razón social' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="RUC"
                                name="ruc"
                                rules={[{ required: true, message: 'Ingrese el RUC' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Dirección Fiscal"
                                name="direccionFiscal"
                                rules={[{ required: true, message: 'Ingrese la dirección fiscal' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Representante Legal"
                                name="representanteLegal"
                                rules={[{ required: true, message: 'Ingrese el representante legal' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="CC (Representante Legal)"
                                name="ccRepresentante"
                                rules={[{ required: true, message: 'Ingrese la CC del representante legal' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Correo Electrónico (Representante Legal)"
                                name="correoRepresentante"
                                rules={[
                                    { required: true, message: 'Ingrese el correo del representante legal' },
                                    { type: 'email', message: 'Ingrese un correo válido' },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Correo Electrónico (General) (opcional)"
                                name="correoGeneral"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Teléfono (Convencional)"
                                name="telefonoConvencional"
                                rules={[{ required: true, message: 'Ingrese el teléfono convencional' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Teléfono (Celular)"
                                name="telefonoCelular"
                                rules={[{ required: true, message: 'Ingrese el teléfono celular' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Separador: Información de Camaronera */}
                    <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                        <strong>● Información de Camaronera</strong>
                    </div>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Tipo de Cliente"
                                name="tipoCliente"
                                rules={[{ required: true, message: 'Seleccione un tipo de cliente' }]}
                            >
                                <Select placeholder="Seleccione Tipo de Cliente">
                                    <Option value="GIV">GIV</Option>
                                    <Option value="FPA">FPA</Option>
                                    <Option value="FIN">FIN</Option>
                                    <Option value="LAB">LAB</Option>
                                    <Option value="PAK">PAK</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Nombre de la Camaronera"
                                name="nombreCamaronera"
                                rules={[{ required: true, message: 'Ingrese el nombre de la camaronera' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Provincia"
                                name="provincia"
                                rules={[{ required: true, message: 'Ingrese la provincia' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Cantón"
                                name="canton"
                                rules={[{ required: true, message: 'Ingrese el cantón' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Tipo de Camaronera"
                                name="tipoCamaronera"
                                rules={[{ required: true, message: 'Seleccione el tipo de camaronera' }]}
                            >
                                <Select placeholder="Seleccione Tipo de Camaronera">
                                    <Option value="isla">Isla</Option>
                                    <Option value="tierraFirme">Tierra Firme</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Acuerdo Ministerial"
                                name="acuerdoMinisterial"
                                rules={[{ required: true, message: 'Ingrese el acuerdo ministerial' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Certificado Ambiental (opcional)"
                                name="certificadoAmbiental"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Certificado de Inocuidad (opcional)"
                                name="certificadoInocuidad"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Sistema de Cultivo"
                                name="sistemaCultivo"
                                rules={[{ required: true, message: 'Seleccione el sistema de cultivo' }]}
                            >
                                <Select placeholder="Seleccione Sistema de Cultivo">
                                    <Option value="semiIntensivo">Semi Intensivo</Option>
                                    <Option value="intensivo">Intensivo</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Protocolo de Producción"
                                name="protocoloProduccion"
                                rules={[{ required: true, message: 'Seleccione el protocolo de producción' }]}
                            >
                                <Select placeholder="Seleccione Protocolo de Producción">
                                    <Option value="biFasico">Bi Fásico (BF)</Option>
                                    <Option value="poliFasico">Poli Fásico (PF)</Option>
                                    <Option value="triGasico">Tri Gásico (TF)</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Extensión Productiva (Total) en Has."
                                name="extensionProductiva"
                                rules={[{ required: true, message: 'Ingrese la extensión productiva total' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Extensión Pre Crias (Has)"
                                name="extensionPreCrias"
                                rules={[{ required: true, message: 'Ingrese la extensión de pre crías' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Cantidad de Pre Crias (#)"
                                name="cantidadPreCrias"
                                rules={[{ required: true, message: 'Ingrese la cantidad de pre crías' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Extensión Piscinas Engorde (Has)"
                                name="extensionPiscinasEngorde"
                                rules={[{ required: true, message: 'Ingrese la extensión de piscinas de engorde' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Cantidad de Piscinas Engorde (#)"
                                name="cantidadPiscinasEngorde"
                                rules={[{ required: true, message: 'Ingrese la cantidad de piscinas de engorde' }]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                                label="Extensión Canales y Reservorios (opcional)"
                                name="extensionCanalesReservorio"
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </>
            );
        }

        return null;
    };


    const steps = [
        {
            title: 'Registro Pre Crías',
            content: (
                <Tabs>
                    {Array.from(
                        { length: form.getFieldValue("cantidadPreCrias") || 0 },
                        (_, index) => (
                            <TabPane tab={`Pre Cría ${index + 1}`} key={`pre-cria-${index + 1}`}>
                                <Form layout="vertical">
                                    {/* Identificador de Piscina */}
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                label={`Identificador de Piscina Pre Cría #${index + 1}`}
                                                name={`piscinaPreCriaId-${index}`}
                                                rules={[
                                                    { required: true, message: 'Ingrese el número de identificador' },
                                                ]}
                                            >
                                                <InputNumber min={1} style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Extensión (Has)"
                                                name={`extensionPreCria-${index}`}
                                                rules={[
                                                    { required: true, message: 'Ingrese la extensión (nunca cero)' },
                                                    { type: 'number', min: 0.01, message: 'Debe ser mayor a 0' },
                                                ]}
                                            >
                                                <InputNumber min={0.01} style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Profundidad Operativa (mts)"
                                                name={`profundidadOperativa-${index}`}
                                                rules={[
                                                    { required: true, message: 'Ingrese la profundidad operativa (nunca cero)' },
                                                    { type: 'number', min: 0.01, message: 'Debe ser mayor a 0' },
                                                ]}
                                            >
                                                <InputNumber min={0.01} style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Profundidad de Siembra (mts)"
                                                name={`profundidadSiembra-${index}`}
                                                rules={[
                                                    { required: true, message: 'Ingrese la profundidad de siembra (nunca cero)' },
                                                    { type: 'number', min: 0.01, message: 'Debe ser mayor a 0' },
                                                ]}
                                            >
                                                <InputNumber min={0.01} style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    {/* Profundidad y Volumen */}
                                    <Row gutter={16}>

                                        <Col span={12}>
                                            <Form.Item
                                                label="Profundidad de Transferencia (mts)"
                                                name={`profundidadTransferencia-${index}`}
                                                rules={[
                                                    { required: true, message: 'Ingrese la profundidad de transferencia (nunca cero)' },
                                                    { type: 'number', min: 0.01, message: 'Debe ser mayor a 0' },
                                                ]}
                                            >
                                                <InputNumber min={0.01} style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Aireación Mecánica (Hp/Ha)"
                                                name={`aireacionMecanica-${index}`}
                                            >
                                                <InputNumber min={0} style={{ width: '100%' }} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    {/* Métodos y Alimentadores */}
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Método de Alimentación"
                                                name={`metodoAlimentacion-${index}`}
                                                rules={[{ required: true, message: 'Seleccione un método de alimentación' }]}
                                            >
                                                <Select placeholder="Seleccione">
                                                    <Option value="manual">Manual</Option>
                                                    <Option value="automatico">Automático</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>


                                    {/* Información del Alimentador */}
                                    <div>
                                        <h4>Información del Alimentador</h4>
                                        {Array.from(
                                            { length: alimentadores[index] || 1 },
                                            (_, alimentadorIndex) => (
                                                <Row gutter={16} key={`alimentador-${index}-${alimentadorIndex}`}>
                                                    <Col span={6}>
                                                        <Form.Item
                                                            label={`Alimentador #${alimentadorIndex + 1}`}
                                                            name={`alimentadorNumero-${index}-${alimentadorIndex}`}
                                                            rules={[
                                                                { required: true, message: 'Ingrese el número del alimentador' },
                                                            ]}
                                                        >
                                                            <InputNumber min={1} style={{ width: '100%' }} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={6}>
                                                        <Form.Item
                                                            label="Marca"
                                                            name={`alimentadorMarca-${index}-${alimentadorIndex}`}
                                                            rules={[{ required: true, message: 'Seleccione una marca' }]}
                                                        >
                                                            <Select placeholder="Seleccione">
                                                                <Option value="bluebox">BlueBox</Option>
                                                                <Option value="jetfeeder">JetFeeder</Option>
                                                                <Option value="biofeeder">BioFeeder</Option>
                                                                <Option value="aq1">AQ1</Option>
                                                                <Option value="eruvaka">Eruvaka</Option>
                                                            </Select>
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={6}>
                                                        <Form.Item
                                                            label="Integración"
                                                            name={`alimentadorIntegracion-${index}-${alimentadorIndex}`}
                                                            valuePropName="checked"
                                                        >
                                                            <Switch checkedChildren="Sí" unCheckedChildren="No" />
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            )
                                        )}
                                        {/* Botón para añadir más alimentadores */}
                                        <Button
                                            type="dashed"
                                            onClick={() => handleAddAlimentador(index)}
                                            style={{ marginTop: '10px' }}
                                        >
                                            Añadir Alimentador
                                        </Button>
                                    </div>
                                </Form>
                            </TabPane>
                        )
                    )}
                </Tabs>
            ),
        },
        {
            title: 'Registro Pre Engorde',
            content: (
                <Tabs>
                    {Array.from(
                        { length: form.getFieldValue("cantidadPiscinasPreEngorde") || 0 },
                        (_, index) => (
                            <TabPane
                                tab={`Pre Engorde ${index + 1}`}
                                key={`pre-engorde-${index + 1}`}
                            >
                                {/* Contenido dinámico para cada Pre Engorde */}
                                <p>Contenido para Pre Engorde {index + 1}</p>
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
                                {/* Contenido dinámico para cada Engorde */}
                                <p>Contenido para Engorde {index + 1}</p>
                            </TabPane>
                        )
                    )}
                </Tabs>
            ),
        },
    ];

    return (
        <>
            <PageHeader
                className="ninjadash-page-header-main"
                highlightText="AquaLink Administración"
                title="Añadir Clientes"
            />
            <Main>
                <Tabs activeKey={activeTab} type="line">
                    {/* Tab 1: Información */}
                    <TabPane tab="Información" key="1">
                        <Cards headless>
                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={(values) => console.log(values)}
                            >
                                {/* Subir Imagen */}
                                <Form.Item label="Subir Imagen (opcional)" name="imagen">
                                    <Upload beforeUpload={() => false}>
                                        <Button icon={<UploadOutlined />}>Subir Imagen</Button>
                                    </Upload>
                                </Form.Item>

                                {/* Perfil Jurídico */}
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

                                {/* Campos Condicionales */}
                                {renderFields()}


                                {/* Código generado automáticamente */}
                                {generatedCode && (
                                    <Row gutter={16} style={{ marginTop: "20px" }}>
                                        <Col span={24}>
                                            <Form.Item label="Código Generado">
                                                <Input value={generatedCode} disabled />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                )}

                                {/* Botón Siguiente */}
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        onClick={async () => {
                                            try {
                                                // Validar los campos del formulario
                                                await form.validateFields();
                                                handleNextTab();
                                            } catch (error) {
                                                console.error('Errores en el formulario:', error);
                                            }
                                        }}
                                    >
                                        Siguiente
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Cards>
                    </TabPane>

                    {/* Otros Tabs */}
                    <TabPane tab="Infraestructura y Recursos" key="2">
                        <Cards headless>
                            <Form layout="vertical" onFinish={() => setActiveTab("3")}>
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
                                            current={0}
                                            direction="vertical"
                                            steps={steps}
                                        />
                                    </WizardFour>
                                </WizardWrapper>

                                {/* Botones de Navegación */}
                                <Row justify="space-between" style={{ marginTop: "20px" }}>
                                    <Col>
                                        <Button type="default" onClick={() => setActiveTab("1")}>
                                            Atrás
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button type="primary" htmlType="submit">
                                            Siguiente
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Cards>
                    </TabPane>



                    <TabPane tab="Georeferenciación" key="3">
                        <p>Mapa pendiente...</p>
                    </TabPane>
                </Tabs>
            </Main>
        </>
    );
}

export default AddClientFarm;
