import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button, Steps, Modal, message, InputNumber, Skeleton, DatePicker } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import { loadCustodyCoordinations } from '../../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import { registerLote } from '../../../redux/lote/actionCreator';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import moment from 'moment';
const { Step } = Steps;
const { Option } = Select;

function LoteAddLab() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({});
    const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName'));
    const organizations = useSelector((state) => state.auth.labsOrgs);



    const handleOrgChange = (orgId) => {
        setSelectedOrg(orgId);
        const selectedOrg = organizations.find(org => org.orgId === orgId);
        const orgEmail = selectedOrg ? selectedOrg.orgEmail : '';
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
        Cookies.remove('poolId');
    };


    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: organizations.map(org => ({
                value: org.orgId,
                label: org.orgName,
                email: org.orgEmail,
            })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Empacadora',
            value: selectedOrg || undefined,
        },
    ] : [];

    const combinedSelectOptions = [...farmsSelectOptions];


    const [selectedPlantingDate, setSelectedPlantingDate] = useState(null);

    // Función para calcular fechas de pesca basadas en la fecha de siembra
  
    // Opciones de fechas de siembra
    const plantingOptions = [
        { label: "1 mar - A", value: "1 mar - A", baseDate: "1 mar" },
        { label: "5 mar - B", value: "5 mar - B", baseDate: "5 mar" },
        { label: "10 mar - C", value: "10 mar - C", baseDate: "10 mar" },
    ];

    return (
        <>
            <PageHeader highlightText="Aqualink Laboratorio" title="Añadir Lote Laboratorio"
                organizations={organizations}
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Row gutter={25}>
                    <Col xl={7} xs={24} style={{display: "flex"}} >
                        <AqualinkMaps
                            selectedOrg={selectedOrg}
                            height={315}
                        />
                    </Col>
                    <Col xl={17} xs={24} style={{display: "flex"}} >
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <Cards title="Formulario de Ingreso de Lote" size="large">
                                <Form form={form} layout="vertical">
                                    <Row gutter={[16, 16]}>
                                        {/* Capacidad del tanque */}
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Capacidad del tanque" name="capacidad_tanque"
                                                rules={[{ required: true, message: 'Este campo es requerido' }]}>
                                                <InputNumber placeholder="Capacidad en m3" style={{ width: '100%' }} min={0} />
                                            </Form.Item>
                                        </Col>

                                        {/* Fecha de siembra (Select) */}
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Fecha de siembra" name="fecha_siembra"
                                                rules={[{ required: true, message: 'Este campo es requerido' }]}>
                                                <Select
                                                    placeholder="Seleccione una fecha"
                                                    onChange={(value) => {
                                                        const selected = plantingOptions.find(opt => opt.value === value);
                                                        setSelectedPlantingDate(selected ? selected.baseDate : null);
                                                    }}
                                                >
                                                    {plantingOptions.map((option) => (
                                                        <Option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        {/* Densidad programada */}
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Densidad programada" name="densidad_programada">
                                                <InputNumber placeholder="Densidad" style={{ width: '100%' }} min={0} />
                                            </Form.Item>
                                        </Col>

                                        {/* Mortalidad estimada */}
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Mortalidad estimada" name="mortalidad_estimada">
                                                <InputNumber placeholder="Mortalidad %" style={{ width: '100%' }} min={0} max={100} />
                                            </Form.Item>
                                        </Col>

                                        {/* Biomasa objetivo */}
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Biomasa objetivo" name="biomasa_objetivo">
                                                <InputNumber placeholder="Biomasa (kg)" style={{ width: '100%' }} min={0} />
                                            </Form.Item>
                                        </Col>

                                        {/* Origen de nauplio */}
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Origen de nauplio" name="origen_nauplio">
                                                <Input placeholder="Ingrese el origen" />
                                            </Form.Item>
                                        </Col>

                                        {/* Código de nauplio */}
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Código de nauplio" name="codigo_nauplio">
                                                <Input placeholder="Ingrese código" />
                                            </Form.Item>
                                        </Col>

                                        {/* Precio de venta */}
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Precio de venta" name="precio_venta">
                                                <InputNumber
                                                    placeholder="Ingrese precio"
                                                    style={{ width: '100%' }}
                                                    min={0}
                                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    {/* Botón de envío */}
                                    <Row justify="end">
                                        <Col>
                                            <Button type="primary" htmlType="submit">
                                                Registrar Lote
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Cards>
                        </Suspense>
                    </Col>
                </Row>

            </Main>

        </>
    );
}

export default LoteAddLab;
