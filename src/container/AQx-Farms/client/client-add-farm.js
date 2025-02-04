import React, { useEffect, useState } from 'react';
import { Tabs, Form, Input, Select, Button, Upload, InputNumber, Row, Col, Switch, message, Typography, Table, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { NaturalPersonForm } from './add-client-form/natural-person';
import { LegalPersonForm } from './add-client-form/legal-person';
import { PreCriaInfrastructure } from './add-client-form/infrastructure/pc-infrastructure';
import { PreEngordeInfrastructure } from './add-client-form/infrastructure/pe-infrastructure';
import { EngordeInfrastructure } from './add-client-form/infrastructure/e-infrastructure';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { createAdOrg, fetchAdClient, fetchBusinessGroups, fetchCity, fetchRegions } from '../../../redux/configuration/actionCreator';
import { useWatch } from 'antd/lib/form/Form';
const { TabPane } = Tabs;
const { Option } = Select;

function AddClientFarm() {
    const dispatch = useDispatch();
    const { businessGroups, adClient, cRegions, cCities, adOrg } = useSelector(state => state.configuration);


    const [form] = Form.useForm();

    const [perfilJuridico, setPerfilJuridico] = useState(null);
    const [activeTab, setActiveTab] = useState("1");
    const [generatedCode, setGeneratedCode] = useState("");
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedPiscina, setSelectedPiscina] = useState(null);
    const [nodos, setNodos] = useState({});

    const selectedRegion = useWatch("c_region", form);

    useEffect(() => {
        console.log("camio")
        if (selectedRegion) {
            dispatch(fetchCity(selectedRegion));
        }
    }, [selectedRegion, dispatch]);

    const [alimentadores, setAlimentadores] = useState({});
    const [alimentadoresPreEngorde, setAlimentadoresPreEngorde] = useState({});
    const [alimentadoresEngorde, setAlimentadoresEngorde] = useState({});

    const [counters, setCounters] = useState({ pc: 0, pe: 0, e: 0 });
    const Masteradmin = Cookies.get('MasterAdmin')
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
    const getFirstTabFields = () => {
        const perfil = form.getFieldValue("legalentitytype");
        if (perfil === "natural") {
            return [
                "businessname",
                "Name",
                "taxid",
                "sm_locationname",
                "phone",
                "phone2",
                "c_region",
                "c_city",
                "SM_OrgType",
                "water_system",
                "sm_productiontype",
                "sm_codigovap",
                "sm_ministerialagreement"
            ];
        }
        if (perfil === "juridico") {
            return [
                "businessname",
                "Name",
                "taxid",
                "sm_locationname",
                "phone",
                "phone2",
                "c_region",
                "c_city",
                "SM_OrgType",
                "water_system",
                "sm_productiontype",
                "sm_codigovap",
                "sm_ministerialagreement",
                "taxid_rl",
                "name_rl",
                "email_rl"
            ];
        }
        return ["legalentitytype"];
    };



    const handleSubmit = async () => {
        try {
            await form.validateFields(getFirstTabFields());

            const formData = form.getFieldsValue(true);

            const orgData = {
                AD_Client_ID: adClient?.ad_client_id, 
                Name: formData.Name,
                business_group_id: formData.business_group_id,
                legalentitytype: formData.legalentitytype,
                businessname: formData.businessname,
                taxid: formData.taxid,
                sm_locationname: formData.sm_locationname,
                phone: formData.phone,
                phone2: formData.phone2,
                sm_latitude: formData.sm_latitude,
                sm_longitude: formData.sm_longitude,
                c_region_id: formData.c_region, 
                c_city_id: formData.c_city,     
                SM_OrgType: formData.SM_OrgType,
                water_system: formData.water_system,
                sm_productiontype: formData.sm_productiontype,
                sm_codigovap: formData.sm_codigovap,
                sm_ministerialagreement: formData.sm_ministerialagreement,
                sm_safetycertificate: formData.sm_safetycertificate,
                taxid_rl: formData.taxid_rl,
                name_rl: formData.name_rl,
                email_rl: formData.email_rl,
            };

            const createdOrg = await dispatch(createAdOrg(orgData));

            if (createdOrg) {
                message.success("Organización creada exitosamente.");
                setActiveTab("2");
            } else {
                message.error("No se pudo crear la organización. Inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error en el envío del formulario:", error);
            message.error("Error al enviar el formulario. Corrige los errores e inténtalo de nuevo.");
        }
    };



    // Generar código automático
    const generateCode = () => {
        const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        setGeneratedCode(`AQLK-${randomNumber}`);
    };

    useEffect(() => {
        generateCode();
        dispatch(fetchBusinessGroups());
        dispatch(fetchAdClient())
        dispatch(fetchRegions())
    }, []);

    // Función para generar identificadores únicos
    const generateIdentificador = (type) => {
        let prefix;
        switch (type) {
            case 'pc':
                prefix = 'Ppc';
                break;
            case 'pe':
                prefix = 'Ppe';
                break;
            case 'e':
                prefix = 'Pe';
                break;
            default:
                prefix = 'Unknown';
        }
        const newCount = (counters[type] || 0) + 1;
        setCounters({
            ...counters,
            [type]: newCount
        });
        return `${prefix}${newCount}`;
    };

    const handleNextTab = (id) => {
        setActiveTab(`${id}`);
    };

    const addNodo = (piscina) => {
        setNodos((prev) => ({
            ...prev,
            [piscina]: [...(prev[piscina] || []), {}],
        }));
    };

    const handlePerfilJuridicoChange = (value) => {
        setPerfilJuridico(value);
    };

    const renderFields = (regions, cities) => {
        if (perfilJuridico === 'natural') {
            return (
                <NaturalPersonForm regions={regions} cities={cities} clientType={adClient?.clienttype?.id} />
            );
        }

        if (perfilJuridico === 'juridico') {
            return (
                <LegalPersonForm regions={regions} cities={cities} clientType={adClient?.clienttype?.id} />
            );
        }
        return null;
    };

    const [selectedPoolType, setSelectedPoolType] = useState(null);
    const [addedPiscinas, setAddedPiscinas] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        const initialTotals = {
            pc: { count: 0, extension: 0 },
            pe: { count: 0, extension: 0 },
            e: { count: 0, extension: 0 }
        };

        const totals = addedPiscinas.reduce((acc, curr) => {
            if (curr.extension && !isNaN(curr.extension)) {
                acc[curr.type].count++;
                acc[curr.type].extension += Number(curr.extension);
            }
            return acc;
        }, initialTotals);

        form.setFieldsValue({
            num_pc: totals.pc.count,
            num_pe: totals.pe.count,
            num_e: totals.e.count,
            ex_pc: totals.pc.extension.toFixed(2),
            ex_pe: totals.pe.extension.toFixed(2),
            ex_e: totals.e.extension.toFixed(2)
        });
    }, [addedPiscinas, form]);

    const handleAddPiscina = async () => {
        try {
          const type = selectedPoolType;
          const formValues = form.getFieldsValue()[type] || {};
      
          if (!formValues.extension || !formValues.profundidadOperativa) {
            throw new Error("Faltan campos requeridos");
          }
      
          const manualNumber = form.getFieldValue([type, 'manualNumber']);
          if (!manualNumber) {
            throw new Error("Debe ingresar el número manual para la piscina.");
          }
      
          const isDuplicate = addedPiscinas.some(p => p.type === type && p.manualNumber === manualNumber);
          if (isDuplicate) {
            message.error("Ese número ya se ha usado para este tipo de piscina.");
            return;
          }
      
          let prefix;
          switch (type) {
            case 'pc':
              prefix = 'Ppc';
              break;
            case 'pe':
              prefix = 'Ppe';
              break;
            case 'e':
              prefix = 'Pe';
              break;
            default:
              prefix = 'Unknown';
          }
      
          const identificador = `${prefix}${manualNumber}`;
      
          const newPiscina = {
            key: `${type}-${Date.now()}`,
            type,
            manualNumber, 
            identificador,
            extension: Number(formValues.extension),
            profundidadOperativa: Number(formValues.profundidadOperativa),
            alimentacion: formValues.metodoAlimentacion === 'automatico',
            aireacion: formValues.aireacionMecanica || 0,
          };
      
          setAddedPiscinas([...addedPiscinas, newPiscina]);
          form.resetFields([type]);
        } catch (error) {
          console.error("Error al validar campos:", error);
          message.error("Por favor complete todos los campos requeridos");
        }
      };
      

    const handleDeletePiscina = (key) => {
        setAddedPiscinas(addedPiscinas.filter(p => p.key !== key));
    };

    const columns = [
        {
            title: 'Tipo',
            dataIndex: 'type',
            key: 'type',
            align: 'center', // Centrar el título
            render: (t) => ({
                pc: 'Pre Cría',
                pe: 'Pre Engorde',
                e: 'Engorde'
            }[t])
        },
        {
            title: 'ID',
            dataIndex: 'identificador',
            key: 'identificador',
            align: 'center', // Centrar el título
            sorter: (a, b) => a.identificador.localeCompare(b.identificador)
        },
        {
            title: 'Extensión (ha)',
            dataIndex: 'extension',
            key: 'extension',
            align: 'center', // Centrar el título
            render: (val) => val?.toFixed(2)
        },
        {
            title: 'Profundidad (m)',
            dataIndex: 'profundidadOperativa',
            key: 'profundidad',
            align: 'center', // Centrar el título
            render: (val) => val?.toFixed(2)
        },
        {
            title: 'Alimentación',
            dataIndex: 'alimentacion',
            key: 'alimentacion',
            align: 'center', // Centrar el título
            render: (val) => val ? 'Automática' : 'Manual'
        },
        {
            title: 'Aireación (Hp/Ha)',
            dataIndex: 'aireacion',
            key: 'aireacion',
            align: 'center', // Centrar el título
            render: (val) => val || 'N/A'
        },
        {
            title: 'Acciones',
            key: 'actions',
            align: 'center', // Centrar el título
            render: (_, record) => (
                <Button danger onClick={() => handleDeletePiscina(record.key)}>
                    Eliminar
                </Button>
            )
        }
    ];

    return (
        <>
            <PageHeader
                highlightText="AquaLink Administración"
                title="Configuracióm Camaronera"
            />
            <Main>
                <Form form={form} layout="vertical" onFinish={(values) => console.log('Formulario completado:', values)}>
                    <Tabs activeKey={activeTab} type="line">
                        {/* Tab 1: Información */}
                        <TabPane tab="Información" key="1">
                            <Cards headless>
                                <Form.Item label="Subir Logo (opcional)" name="imagen">
                                    <Upload beforeUpload={() => false}>
                                        <Button icon={<UploadOutlined />}>Subir Logotipo</Button>
                                    </Upload>
                                </Form.Item>

                                <Row gutter={16}>
                                    <Col span={4}>
                                        <Form.Item
                                            label="Cliente"
                                            name="client"
                                        >
                                            <Input value={adClient?.Name} defaultValue={adClient?.Name} disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2}>
                                        <Form.Item
                                            label="Tipo"
                                            name="decription"
                                        >
                                            <Input value={adClient?.clienttype?.id} defaultValue={adClient?.clienttype?.id} disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                        >
                                            <Input value={adClient?.clientemail?.id} defaultValue={adClient?.clientemail?.id} disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item
                                            label="Nombre Master Admin"
                                            name="name_master_admin"

                                        >
                                            <Input value={Masteradmin}
                                                defaultValue={Masteradmin}
                                                disabled
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={4}>
                                        <Form.Item
                                            label="Grupo Empresarial"
                                            name="business_group_id"
                                        >
                                            <Select size='large' placeholder="Seleccione un grupo empresarial">
                                                {businessGroups.map((group) => (
                                                    <Select.Option key={group.id} value={group.id}>
                                                        {group.Name}
                                                    </Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={4}>
                                        <Form.Item
                                            label="Perfil Jurídico"
                                            name="legalentitytype"
                                            rules={[{ required: true, message: 'Seleccione un perfil jurídico' }]}
                                        >
                                            <Select size='large'
                                                placeholder="Seleccione Perfil Jurídico"
                                                onChange={handlePerfilJuridicoChange}
                                            >
                                                <Option value="natural">Persona Natural</Option>
                                                <Option value="juridico">Persona Jurídica</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                {renderFields(cRegions, cCities)}
                                <Form.Item>
                                    <Button type="primary" onClick={handleSubmit}>
                                        Siguiente
                                    </Button>
                                </Form.Item>
                            </Cards>
                        </TabPane>

                        {/* Tab 2: Infraestructura y Recursos */}
                        <TabPane tab="Infraestructura y Recursos" key="2">
                            <Cards headless>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div>
                                        <Row gutter={16}>
                                            <Col span={6}>
                                                <Form.Item label="Cliente">
                                                    <Input value={adOrg?.AD_Client_ID?.identifier || ""} disabled />
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item label="Tipo de Cliente">
                                                    <Input value={adClient?.clienttype?.id || ""} disabled />
                                                </Form.Item>
                                            </Col>

                                            <Col span={6}>
                                                <Form.Item label="Código Cliente">
                                                    <Input value={adOrg?.Value || "AQLK-0000"} disabled />
                                                </Form.Item>
                                            </Col>

                                            <Col span={6}>
                                                <Form.Item label="Camaronera">
                                                    <Input value={adOrg?.Name || ""} disabled />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <hr></hr>
                                        <Row gutter={16}>
                                            <Col span={7}>
                                                <Form.Item label="# de Pre Crías"
                                                    name="num_pc">
                                                    <Input disabled />
                                                </Form.Item>
                                            </Col>
                                            <Col span={7}>
                                                <Form.Item label="# de Pre Engorde"
                                                    name="num_pe">
                                                    <Input disabled />
                                                </Form.Item>
                                            </Col>
                                            <Col span={7}>
                                                <Form.Item label="# de Engorde Final"
                                                    name="num_e">
                                                    <Input disabled />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <Row gutter={16}>
                                            <Col span={7}>
                                                <Form.Item label="ext. Pre Crías"
                                                    name="ex_pc">
                                                    <Input disabled />
                                                </Form.Item>
                                            </Col>
                                            <Col span={7}>
                                                <Form.Item label="ext. Pre Engorde"
                                                    name="ex_pe">
                                                    <Input disabled />
                                                </Form.Item>
                                            </Col>
                                            <Col span={7}>
                                                <Form.Item label="ext. Engorde Final"
                                                    name="ex_e">
                                                    <Input disabled />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <hr></hr>

                                        <Typography.Title level={5}>Configuración de Infraestructura Camaronera</Typography.Title>
                                        <Select
                                            placeholder="Selecciona el Tipo de Piscina"
                                            onChange={setSelectedPoolType}
                                            style={{ width: 200, marginBottom: 20 }}
                                        >
                                            <Option value="pc">Pre Cría</Option>
                                            <Option value="pe">Pre Engorde</Option>
                                            <Option value="e">Engorde</Option>
                                        </Select>

                                        {selectedPoolType === 'pc' && (
                                            <PreCriaInfrastructure
                                                form={form}
                                                prefix="pc"
                                                alimentadores={alimentadores}
                                                handleAddAlimentador={handleAddAlimentador}
                                            />
                                        )}

                                        {selectedPoolType === 'pe' && (
                                            <PreEngordeInfrastructure
                                                form={form}
                                                prefix="pe"
                                                alimentadores={alimentadoresPreEngorde}
                                                handleAddAlimentador={handleAddAlimentadorPreEngorde}
                                                showAlimentadores={false}
                                            />
                                        )}

                                        {selectedPoolType === 'e' && (
                                            <EngordeInfrastructure
                                                form={form}
                                                prefix="e"
                                                alimentadores={alimentadoresEngorde}
                                                handleAddAlimentador={handleAddAlimentadorEngorde}
                                            />
                                        )}
                                    </div>
                                    <div style={{ marginLeft: "20px", flex: 1 }}>
                                        <Table
                                            columns={columns}
                                            dataSource={addedPiscinas}
                                            rowKey="key"
                                            pagination={false}
                                            bordered
                                            style={{ marginBottom: 20 }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Button
                                        onClick={handleAddPiscina}
                                        disabled={!selectedPoolType}
                                        style={{ marginBottom: 20 }}
                                    >
                                        Añadir Piscina
                                    </Button>
                                </div>

                                <center>
                                    <Button
                                        type="primary"
                                        onClick={() => setIsModalVisible(true)}
                                        disabled={addedPiscinas.length === 0}
                                    >
                                        Guardar Infraestructura
                                    </Button>
                                </center>
                                <div>

                                </div>

                                <Modal
                                    title="Confirmar Acción"
                                    visible={isModalVisible}
                                    onCancel={() => setIsModalVisible(false)} // Cierra el modal sin hacer nada
                                    footer={[
                                        <Button key="cancel" onClick={() => setIsModalVisible(false)}>
                                            Cancelar
                                        </Button>,
                                        <Button
                                            key="addNodes"
                                            type="default"
                                            onClick={() => {
                                                setIsModalVisible(false);
                                                handleNextTab(3); // Ir a georreferenciación sin guardar
                                            }}
                                        >
                                            Añadir Nodos para Georreferenciación
                                        </Button>,
                                        <Button
                                            key="save"
                                            type="primary"
                                            onClick={() => {
                                                setIsModalVisible(false);
                                                console.log('Piscinas guardadas:', addedPiscinas);
                                                message.success("Infraestructura guardada con éxito");
                                            }}
                                        >
                                            Guardar
                                        </Button>,
                                    ]}
                                >
                                    <p>¿Qué acción deseas realizar con las {addedPiscinas.length} piscinas configuradas?</p>
                                </Modal>

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
                                    <Select
                                        placeholder="Seleccione un identificador"
                                        onChange={(value) => setSelectedPiscina(value)}
                                    >
                                        {addedPiscinas.map(piscina => (
                                            <Option key={piscina.key} value={piscina.identificador}>
                                                {piscina.identificador}
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
            </Main >
        </>
    );
}
export default AddClientFarm;
