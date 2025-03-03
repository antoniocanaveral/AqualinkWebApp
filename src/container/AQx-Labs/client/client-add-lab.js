import React, { useEffect, useState } from 'react';
import { Tabs, Form, Input, Select, Button, Upload, InputNumber, Row, Col, Switch, message, Typography, Table, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { NaturalPersonForm } from './add-client-form/natural-person';
import { LegalPersonForm } from './add-client-form/legal-person';
import { PreCriaInfrastructure } from './add-client-form/infrastructure/pc-infrastructure';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { createAdOrg, createPools, fetchAdClient, fetchBrandFeeders, fetchBusinessGroups, fetchCity, fetchRegions } from '../../../redux/configuration/actionCreator';
import { useWatch } from 'antd/lib/form/Form';
const { TabPane } = Tabs;
const { Option } = Select;

function AddClientlaboratory() {
    const dispatch = useDispatch();
    const { businessGroups, adClient, cRegions, cCities, adOrg, brandFeeders, createdSalesRegions } = useSelector(state => state.configuration);

    const [selectedSalesRegion, setSelectedSalesRegion] = useState(null);
    const [form] = Form.useForm();

    const [perfilJuridico, setPerfilJuridico] = useState(null);
    const [activeTab, setActiveTab] = useState("1");
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedPiscina, setSelectedPiscina] = useState(null);
    const [nodos, setNodos] = useState({});

    const selectedRegion = useWatch("c_region", form);

    useEffect(() => {
        if (selectedRegion) {
            dispatch(fetchCity(selectedRegion));
        }
    }, [selectedRegion, dispatch]);




    const Masteradmin = Cookies.get('MasterAdmin')
    const CreatedOrg = null

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
                sm_productiontype: formData.sm_productiontype,
                sm_codigovap: formData.sm_codigovap,
                sm_ministerialagreement: formData.sm_ministerialagreement,
                sm_safetycertificate: formData.sm_safetycertificate,
                taxid_rl: formData.taxid_rl,
                name_rl: formData.name_rl,
                email_rl: formData.email_rl,
                c_sales_region: formData.c_sales_region,
                sm_installedcapacitylarva: formData.sm_installedcapacitylarva,
                sm_productionprotocol: formData.sm_productionprotocol,
                sm_labtype: formData.sm_labtype
            };


            const createdOrg = await dispatch(createAdOrg(orgData, "LAB"));

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



    const handleSubmitPools = async () => {
        const piscinas = await handleFinalizar()
        console.log("piss", piscinas)
        try {
            if (!piscinas || piscinas.length === 0) {
                message.warning("No hay piscinas para guardar");
                return;
            }

            const result = await dispatch(createPools(piscinas));

            if (result) {
                message.success(`Piscinas creadas exitosamente`)
                Cookies.remove('CreatedOrg');
                Cookies.remove('CreatedOrgState');
                handleNextTab(1)
                setAddedPiscinas([])

            }
        } catch (error) {
            console.error("Error creando piscinas:", error);
            message.error("Error al guardar piscinas: " + error.message);
        }
    };

    useEffect(() => {
        dispatch(fetchBusinessGroups());
        dispatch(fetchAdClient());
        dispatch(fetchRegions());
        dispatch(fetchBrandFeeders());
    }, []);


    const handleNextTab = (id) => {
        setActiveTab(`${id}`);
    };


    const handleFinalizar = () => {
        const formValues = form.getFieldsValue();

        const updatedPiscinas = addedPiscinas.map(pool => {
            const initialNode = {
                latitude: formValues[`${pool.identificador}-nodo-inicial-latitude`],
                longitude: formValues[`${pool.identificador}-nodo-inicial-longitude`],
                label: "P-1"
            };

            const dynamicNodes = formValues[`${pool.identificador}-nodos`] || [];

            const formattedDynamicNodes = dynamicNodes.map((node, index) => ({
                ...node,
                label: `P-${index + 2}`
            }));

            const nodes = [initialNode, ...formattedDynamicNodes];

            const validNodes = nodes.filter(n => n.latitude !== undefined && n.longitude !== undefined);

            return {
                ...pool,
                nodes: validNodes.length > 0 ? validNodes : null
            };
        });

        console.log("Piscinas actualizadas:", updatedPiscinas);
        return updatedPiscinas;
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
            TANK: { count: 0, sm_poolsize: 0 },
        };

        const totals = addedPiscinas.reduce((acc, curr) => {
            if (curr.sm_poolsize && !isNaN(curr.sm_poolsize)) {
                acc[curr.type].count++;
                acc[curr.type].sm_poolsize += Number(curr.sm_poolsize);
            }
            return acc;
        }, initialTotals);

        form.setFieldsValue({
            num_pc: totals.TANK.count,
            ex_pc: totals.TANK.sm_poolsize.toFixed(2),
        });
    }, [addedPiscinas, form]);

    const handleAddPiscina = async () => {
        try {
            const type = selectedPoolType;
            const formValues = form.getFieldsValue()[type] || {};

            if (!formValues.sm_poolsize || !formValues.sm_oppdepth) {
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
                case 'TANK':
                    prefix = 'tank';
                    break;
                default:
                    prefix = 'Unknown';
            }

            const identificador = `${prefix}${manualNumber}`;

            let feeders = [];
            if (formValues.feeding_method === "AUTOMATIC") {
                feeders = formValues.alimentadores || [];
            }

            const newPiscina = {
                key: `${type}-${Date.now()}`,
                type,
                manualNumber,
                identificador,
                growth_days: formValues.growth_days,
                food_quantity: formValues.food_quantity,
                sm_poolsize: Number(formValues.sm_poolsize),
                sm_oppdepth: Number(formValues.sm_oppdepth),
                sm_plantingdepth: Number(formValues.sm_plantingdepth),
                sm_transferdepth: formValues.sm_transferdepth,
                sm_mechanicalaeration: formValues.sm_mechanicalaeration || 0,
                feeding_method: formValues.feeding_method === 'AUTOMATIC',
                feeders: feeders,
                c_salesregion_id: selectedSalesRegion
            };
            console.log(newPiscina)
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
            title: 'ID',
            dataIndex: 'identificador',
            key: 'identificador',
            align: 'center', // Centrar el título
            sorter: (a, b) => a.identificador.localeCompare(b.identificador)
        },
        {
            title: 'Extensión (ha)',
            dataIndex: 'sm_poolsize',
            key: 'sm_poolsize',
            align: 'center', // Centrar el título
            render: (val) => val?.toFixed(2)
        },
        {
            title: 'Profundidad (m)',
            dataIndex: 'sm_oppdepth',
            key: 'sm_oppdepth',
            align: 'center', // Centrar el título
            render: (val) => val?.toFixed(2)
        },
        {
            title: 'Alimentación',
            dataIndex: 'feeding_method',
            key: 'feeding_method',
            align: 'center', // Centrar el título
            render: (val) => val ? 'AUTOMATIC' : 'MANUAL'
        },
        {
            title: 'Aireación (Hp/Ha)',
            dataIndex: 'sm_mechanicalaeration',
            key: 'sm_mechanicalaeration',
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
                title="Configuración Laboratorio"
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

                                </Row>
                                {/* Separador: Información de Laboratorio */}
                                <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                                    <strong>● Configuración de Laboratorio</strong>
                                </div>
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
                                                    <Input value={adOrg?.AD_Client_ID?.identifier || CreatedOrg?.AD_Client_ID?.identifier || ""} disabled />
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item label="Tipo de Cliente">
                                                    <Input value={adClient?.clienttype?.id || CreatedOrg?.clienttype?.id || ""} disabled />
                                                </Form.Item>
                                            </Col>

                                            <Col span={6}>
                                                <Form.Item label="Código Cliente">
                                                    <Input value={adOrg?.Value || "AQLK-0000"} disabled />
                                                </Form.Item>
                                            </Col>

                                            <Col span={6}>
                                                <Form.Item label="Laboratorio">
                                                    <Input value={CreatedOrg?.Name || ""} disabled />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <hr></hr>
                                        <Row gutter={16}>
                                            <Col span={7}>
                                                <Form.Item label="# de Pre Tanques"
                                                    name="num_pc">
                                                    <Input disabled />
                                                </Form.Item>
                                            </Col>
                                            <Col span={7}>
                                                <Form.Item label="ext. Tanques"
                                                    name="ex_pc">
                                                    <Input disabled />
                                                </Form.Item>
                                            </Col>

                                        </Row>

                                      
                                        <hr></hr>

                                        <Typography.Title level={5}>Configuración de Infraestructura Laboratorio</Typography.Title>
                                        <Select
                                            placeholder="Selecciona un Módulo"
                                            onChange={setSelectedSalesRegion}
                                            disabled={!createdSalesRegions?.length}
                                            style={{ width: 250, marginBottom: 20 }}
                                        >
                                            {createdSalesRegions?.map(region => (
                                                <Option key={region.id} value={region.id}>{region.Name}</Option>
                                            ))}
                                        </Select>
                                        <Select
                                            placeholder="Selecciona el Tipo de Piscina"
                                            onChange={setSelectedPoolType}
                                            style={{ width: 200, marginBottom: 20 }}
                                        >
                                            <Option value="TANK">TANQUE</Option>
                                        </Select>

                                        {selectedPoolType === 'TANK' && (
                                            <PreCriaInfrastructure
                                                form={form}
                                                prefix="TANK"
                                                selectedSalesRegion={selectedSalesRegion}
                                                brandFeeders={brandFeeders}
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
                                        Añadir Tanque
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
                                            onClick={async () => {
                                                setIsModalVisible(false);
                                                await handleSubmitPools();
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

                                {/* Renderiza los Form.List para todas las piscinas, pero muestra solo la seleccionada */}
                                {addedPiscinas.map(pool => (
                                    <div
                                        key={pool.identificador}
                                        style={{ display: selectedPiscina === pool.identificador ? "block" : "none" }}
                                    >
                                        <h4>Nodos para {pool.identificador}</h4>
                                        <Form.List name={`${pool.identificador}-nodos`} preserve>
                                            {(fields, { add, remove }) => (
                                                <>
                                                    {fields.map((field, index) => (
                                                        <Row gutter={16} key={field.key}>
                                                            <Col span={12}>
                                                                <Form.Item
                                                                    {...field}
                                                                    label={`Nodo ${index + 1} - Longitud`}
                                                                    name={[field.name, 'longitude']}
                                                                    fieldKey={[field.fieldKey, 'longitude']}
                                                                    rules={[{ required: true, message: "Ingrese la longitud" }]}
                                                                    preserve
                                                                >
                                                                    <InputNumber placeholder="Longitud" style={{ width: "100%" }} />
                                                                </Form.Item>
                                                            </Col>
                                                            <Col span={12}>
                                                                <Form.Item
                                                                    {...field}
                                                                    label={`Nodo ${index + 1} - Latitud`}
                                                                    name={[field.name, 'latitude']}
                                                                    fieldKey={[field.fieldKey, 'latitude']}
                                                                    rules={[{ required: true, message: "Ingrese la latitud" }]}
                                                                    preserve
                                                                >
                                                                    <InputNumber placeholder="Latitud" style={{ width: "100%" }} />
                                                                </Form.Item>
                                                            </Col>
                                                        </Row>
                                                    ))}
                                                    <Form.Item>
                                                        <Button type="dashed" onClick={() => add()} block>
                                                            Añadir Nodo
                                                        </Button>
                                                    </Form.Item>
                                                </>
                                            )}
                                        </Form.List>
                                    </div>
                                ))}

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
                                        <Button
                                            type="primary"
                                            onClick={async () => {
                                                await handleSubmitPools();
                                            }}
                                        >
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
export default AddClientlaboratory;
