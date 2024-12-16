import React, { useEffect, useState } from 'react';
import { Tabs, Form, Select, Button, message, Row, Col, Input, Switch } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';

const { TabPane } = Tabs;

const AddUserFarm = () => {
    const [form] = Form.useForm();
    const [generatedCode, setGeneratedCode] = useState("");
    const [selectedArea, setSelectedArea] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [activeTabKey, setActiveTabKey] = useState("1");

    // Estructura de datos para los selects
    const areas = [
        { label: "Gerencia", value: "gerencia" },
        { label: "Producción", value: "produccion" },
        { label: "Técnica", value: "tecnica" },
        { label: "Financiera", value: "financiera" },
        { label: "Operaciones", value: "operaciones" },
        { label: "Logística", value: "logistica" },
        { label: "Corporativo", value: "corporativo" }
    ];

    const usuariosPorArea = {
        gerencia: ["Presidente", "Gerente General", "Asistente Gerencia"],
        produccion: ["Gerente Producción", "Coordinador WebApp", "Asistente Producción"],
        tecnica: [
            "Gerente Técnico", "Biólogo", "Ingeniero Acuícola", "Asistente Técnico",
            "Jefe de Campo", "Laboratorio"
        ],
        financiera: ["Gerente Financiero", "Asistente Financiero", "Usuario WebApp 1", "Usuario WebApp 2"],
        operaciones: [
            "Gerente Operaciones", "Administrador Finca", "Operador Campo 1", "Operador Campo 2",
            "Operador Campo 3", "Operador Campo 4", "Operador Campo 5", "Operador Campo 6",
            "Operador Campo 7", "Operador Campo 8", "Operador Campo 9", "Operador Campo 10", "Parametrista"
        ],
        logistica: ["Coordinador Logística 1", "Coordinador Logística 2", "Controller Siembra", "Controller Cosecha"],
        corporativo: ["Presidente", "Gerente General", "Gerente Financiero", "Gerente Operaciones"]
    };

    const ambientes = [
        { label: "Aqualink  App Campo", value: "ambiente1" },
        { label: "Aqualink WebApp Farm", value: "ambiente2" },
        { label: "AquaLink WebApp Lab", value: "AquaLink WebApp Lab" },
        { label: "AquaLink WebApp Pak", value: "AquaLink WebApp Pak" },
        { label: "AquaLink WebApp Control", value: "AquaLink WebApp Control" },
        { label: "AquaLink WebApp M&E", value: "AquaLink WebApp M&E" },
        { label: "AquaLink WebApp Ecosystem", value: "AquaLink WebApp Ecosystem" }
    ];


    const permisosData = [
        { dispositivo: 'Tablet', permiso: 'Captura (registro) de datos App', nombreCampo: 'capturaApp' },
        { dispositivo: 'Tablet', permiso: 'Ver datos App', nombreCampo: 'verDatosApp' },
        { dispositivo: 'Web App', permiso: 'Ver datos Web App', nombreCampo: 'verDatosWebApp' },
        { dispositivo: 'Web App', permiso: 'Editar Web App', nombreCampo: 'editarWebApp' },
        { dispositivo: 'Web App', permiso: 'Ver Analytics', nombreCampo: 'verAnalytics' },
        { dispositivo: 'Web App', permiso: 'Ver Pro Data Analytics', nombreCampo: 'verProDataAnalytics' },
        { dispositivo: 'Web App', permiso: 'Editar Analytics', nombreCampo: 'editarAnalytics' },
        { dispositivo: 'Web App', permiso: 'Ver Monitoreo y Evaluación', nombreCampo: 'verMonitoreo' },
        { dispositivo: 'Web App', permiso: 'Ver Control', nombreCampo: 'verControl' },
        { dispositivo: 'Web App', permiso: 'Editar Control', nombreCampo: 'editarControl' },
    ];
    // Generar código automático
    const generateCode = () => {
        const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        setGeneratedCode(`AQLK-${randomNumber}`);
    };

    useEffect(() => {
        generateCode();
    }, []);

    // Función para manejar el cambio de tab
    const handleTabChange = (key) => {
        if (key === "2") {
            // Validar campos antes de cambiar a la siguiente pestaña
            form.validateFields()
                .then(() => {
                    setActiveTabKey(key);
                })
                .catch(info => {
                    message.error('Por favor, completa todos los campos antes de continuar.');
                });
        } else {
            setActiveTabKey(key);
        }
    };

    // Manejar cambios en los selects
    const handleAreaChange = (value) => {
        setSelectedArea(value);
        setSelectedUser(null); // Resetear selección de usuario
    };

    const handleUserChange = (value) => {
        setSelectedUser(value);
    };

    const handleSubmit = (values) => {
        console.log('Formulario completado:', values);
    };

    return (
        <>
            <PageHeader
                
                highlightText="AquaLink Administración"
                title="Añadir Usuarios"
            />
            <Main>
                <Cards headless={true} border={true}>
                    <Form form={form} layout="vertical" onFinish={handleSubmit}>
                        <Tabs activeKey={activeTabKey} onChange={handleTabChange}>
                            <TabPane tab="Información General" key="1">
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Form.Item label="Área" name="area" rules={[{ required: true, message: 'Por favor, selecciona un área' }]}>
                                            <Select onChange={handleAreaChange} placeholder="Selecciona un área">
                                                {areas.map(area => (
                                                    <Select.Option key={area.value} value={area.value}>
                                                        {area.label}
                                                    </Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    {selectedArea && (
                                        <>
                                            <Col span={8}>
                                                <Form.Item label="Usuario" name="usuario" rules={[{ required: true, message: 'Por favor, selecciona un usuario' }]}>
                                                    <Select onChange={handleUserChange} placeholder="Selecciona un usuario">
                                                        {usuariosPorArea[selectedArea]?.map(user => (
                                                            <Select.Option key={user} value={user}>
                                                                {user}
                                                            </Select.Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item label="Ambiente" name="ambiente" rules={[{ required: true, message: 'Por favor, selecciona un ambiente' }]}>
                                                    <Select placeholder="Selecciona un ambiente">
                                                        {ambientes.map(ambiente => (
                                                            <Select.Option key={ambiente.value} value={ambiente.value}>
                                                                {ambiente.label}
                                                            </Select.Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                        </>
                                    )}
                                </Row>

                                {selectedArea && (
                                    <>
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Por favor, ingresa el nombre' }]}>
                                                    <Input placeholder="Nombre" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item label="CC" name="cc" rules={[{ required: true, message: 'Por favor, ingresa la cédula' }]}>
                                                    <Input placeholder="Cédula" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item label="Teléfono (Celular)" name="telefono" rules={[{ required: true, message: 'Por favor, ingresa un teléfono' }]}>
                                                    <Input placeholder="Teléfono celular" />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <Form.Item label="Correo Electrónico" name="correo" rules={[{ required: true, message: 'Por favor, ingresa un correo electrónico' }, { type: 'email', message: 'El correo no es válido' }]}>
                                                    <Input placeholder="Correo electrónico" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item
                                                    label="Clave de acceso"
                                                    name="claveAcceso"
                                                    rules={[
                                                        { required: true, message: 'Por favor, ingresa una clave de acceso' },
                                                        { pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, message: 'La clave debe tener al menos 8 caracteres, una mayúscula y un número' }
                                                    ]}
                                                >
                                                    <Input.Password placeholder="Clave de acceso" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item
                                                    label="Confirmar clave"
                                                    name="confirmarClave"
                                                    dependencies={['claveAcceso']}
                                                    rules={[
                                                        { required: true, message: 'Por favor, confirma la clave de acceso' },
                                                        ({ getFieldValue }) => ({
                                                            validator(_, value) {
                                                                if (!value || getFieldValue('claveAcceso') === value) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(new Error('Las claves no coinciden'));
                                                            }
                                                        })
                                                    ]}
                                                >
                                                    <Input.Password placeholder="Confirmar clave" />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </>
                                )}
                                <Row justify="end" style={{ marginTop: '20px' }}>
                                    <Col>
                                        <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}
                                            onClick={() => handleTabChange("2")}
                                        >
                                            Siguiente
                                        </Button>

                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="Permisos" key="2">

                                <Row gutter={[16, 16]}>
                                    {/* Permisos de Tablet */}
                                    <Col span={24}>
                                        <h3 style={{marginLeft:"20%"}}>Tablet</h3>
                                        {permisosData.filter(permiso => permiso.dispositivo === 'Tablet').map((permiso, index) => (
                                            <Row style={{marginLeft:"20%"}} key={index} justify="space-between" align="middle">
                                                <Col span={16}>{permiso.permiso}</Col>
                                                <Col span={8}>
                                                    <Form.Item name={permiso.nombreCampo} valuePropName="checked">
                                                        <Switch />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        ))}
                                    </Col>

                                    {/* Permisos de Web App */}
                                    <Col span={24}>
                                        <h3 style={{marginLeft:"20%"}}>Web App</h3>
                                        {permisosData.filter(permiso => permiso.dispositivo === 'Web App').map((permiso, index) => (
                                            <Row style={{marginLeft:"20%"}} key={index} justify="space-between" align="middle">
                                                <Col span={16}>{permiso.permiso}</Col>
                                                <Col span={8}>
                                                    <Form.Item name={permiso.nombreCampo} valuePropName="checked">
                                                        <Switch />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        ))}
                                    </Col>
                                </Row>
                                <Row justify="end" style={{ marginTop: '20px' }}>
                                    <Col>
                                        <Button
                                        onClick={() => message.success('Usuario creado exitosamente')}
                                        type="primary" htmlType="submit" style={{ marginRight: '8px' }}>
                                            Guardar
                                        </Button>
                                        <Button
                                            type="default"
                                            onClick={() => setActiveTabKey("1")} // Regresar a la primera pestaña
                                        >
                                            Regresar
                                        </Button>
                                    </Col>
                                </Row>
                            </TabPane>
                        </Tabs>


                    </Form>
                </Cards>
            </Main>
        </>
    );
};

export default AddUserFarm;
