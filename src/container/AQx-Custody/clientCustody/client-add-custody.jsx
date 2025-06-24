import React, { useEffect, useState } from 'react';
import { Tabs, Form, Input, Select, Button, Upload, InputNumber, Row, Col, Switch, message, Typography, Table, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { NaturalPersonForm } from './add-client-form/natural-person';
import { LegalPersonForm } from './add-client-form/legal-person';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { createAdOrg, createPools, fetchAdClient, fetchBrandFeeders, fetchBusinessGroups, fetchCity, fetchRegions } from '../../../redux/configuration/actionCreator';
import { useWatch } from 'antd/lib/form/Form';
import { GoogleMapsSinglePoint } from '../../../components/maps/GoogleMapsSinglePoint';
const { TabPane } = Tabs;
const { Option } = Select;

function AddClientCustodia() {
    const dispatch = useDispatch();
    const { businessGroups, adClient, cRegions, cCities, adOrg, brandFeeders, createdSalesRegions } = useSelector(state => state.configuration);
    const [poolPerimeters, setPoolPerimeters] = useState({});
    const [selectedPoint, setSelectedPoint] = useState(null); // Store single point for Camaronera


    const [form] = Form.useForm();

    const [perfilJuridico, setPerfilJuridico] = useState(null);
    const [activeTab, setActiveTab] = useState("1");

    const selectedRegion = useWatch("c_region", form);

    useEffect(() => {
        if (selectedRegion) {
            dispatch(fetchCity(selectedRegion));
        }
    }, [selectedRegion, dispatch]);




    const Masteradmin = Cookies.get('MasterAdmin')

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
                sm_protocolharvest: formData.sm_protocolharvest,
                sm_processingcapacityweekly: formData.sm_processingcapacityweekly,
                sm_processingcapacitydaily: formData.sm_processingcapacitydaily,
                sm_installedcapacitylarva: formData.sm_installedcapacitylarva
            };

            const createdOrg = await dispatch(createAdOrg(orgData, "CUSTODY"));

            if (createdOrg) {
                message.success("Organización creada exitosamente.");
            } else {
                message.error("No se pudo crear la organización. Inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error en el envío del formulario:", error);
            message.error("Error al enviar el formulario. Corrige los errores e inténtalo de nuevo.");
        }
    };




    useEffect(() => {
        dispatch(fetchBusinessGroups());
        dispatch(fetchAdClient());
        dispatch(fetchRegions());
        dispatch(fetchBrandFeeders());
    }, []);




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



    const handlePointSelect = (point) => {
        setSelectedPoint(point);
        form.setFieldsValue({
            sm_latitude: point.lat,
            sm_longitude: point.lng,
        });
    };
    return (
        <>
            <PageHeader
                highlightText="AquaLink Administración"
                title="Configuración Empacadora"
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
                                {/* Separador: Información de Camaronera */}
                                <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                                    <strong>● Configuración de Empacadora</strong>
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

                                <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                                    <strong>● Ubicación de Camaronera</strong>
                                </div>
                                <GoogleMapsSinglePoint
                                    center={{ lat: -2.18, lng: -79.92 }}
                                    zoom={14}
                                    selectedPoint={selectedPoint}
                                    onPointSelect={handlePointSelect}
                                />
                                <Form.Item>
                                    <Button type="primary" onClick={handleSubmit}>
                                        Siguiente
                                    </Button>
                                </Form.Item>
                            </Cards>
                        </TabPane>



                    </Tabs>
                </Form>
            </Main >
        </>
    );
}
export default AddClientCustodia;
