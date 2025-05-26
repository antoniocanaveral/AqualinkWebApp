/* eslint-disable react-hooks/rules-of-hooks */
import React, { Suspense, useEffect, useState } from 'react';
import moment from 'moment';
import { Row, Col, Form, Select, Input, Button, message, InputNumber, Skeleton, DatePicker } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { selectLabOrgsWithWarehouses } from '../../../redux/authentication/selectors';
import { fetchDirectories } from '../../../redux/directories/actionCreator';
import { registerLablote } from '../../../redux/lablote/actionCreator';
import usePageHeaderSelectors from '../../../hooks/usePageHeaderSelectors';

const { Option } = Select;

function LoteAddLab() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { directories, directoriesLoading } = useSelector((state) => state.directories);

    // Use the custom hook for organization, sector, and pool selectors
    const { selectedOrg, selectedSector, selectedPool, combinedSelectOptions } = usePageHeaderSelectors({
        orgsSelector: () => useSelector((state) => state.auth.labsOrgs),
        poolsSelector: () => useSelector(selectLabOrgsWithWarehouses),
        includeSector: true, // Include sector selector
        includePool: true,  // Include pool selector
        orgType: 'Laboratorio', // Custom placeholder for lab
    });

    const [plantingDate, setPlantingDate] = useState(null);
    const [campaignDays, setCampaignDays] = useState(null);

    // Fetch directories on mount
    useEffect(() => {
        dispatch(fetchDirectories('LAB'));
    }, [dispatch]);

    // Update fishing date based on planting date and campaign days
    useEffect(() => {
        if (plantingDate && campaignDays) {
            const fishingDate = plantingDate.clone().add(campaignDays, 'days');
            form.setFieldsValue({ SM_FishingDate: fishingDate });
        } else {
            form.setFieldsValue({ SM_FishingDate: null });
        }
    }, [plantingDate, campaignDays, form]);

    // Get selected pool object
    const selectedPoolObject = selectedPool && useSelector(selectLabOrgsWithWarehouses)
        .find((org) => org.orgId === selectedOrg)?.pools
        .find((pool) => pool.poolId === selectedPool);

    // Update tank capacity when pool changes
    useEffect(() => {
        form.setFieldsValue({
            sm_tankcapacity: selectedPoolObject?.poolSize || null,
        });
    }, [selectedPoolObject, form]);

    // Calculate target biomass
    const calculateTargetBiomass = (allValues) => {
        const capacity = selectedPoolObject?.poolSize;
        const density = allValues.sm_programmeddensity;
        const mortality = allValues.sm_estimatedmortality;
        if (capacity != null && density != null && mortality != null) {
            return (capacity * density * (1 - mortality / 100)).toFixed(2);
        }
        return null;
    };

    // Handle form value changes
    const onValuesChange = (changedValues, allValues) => {
        if (changedValues.sm_programmeddensity || changedValues.sm_estimatedmortality) {
            const target = calculateTargetBiomass(allValues);
            form.setFieldsValue({ sm_targetbiomass: target });
        }
    };

    // Handle form submission
    const onFinish = (values) => {
        const { sm_tankcapacity, ...filteredValues } = values;
        const formData = {
            ...filteredValues,
            SM_PlantingDate: values.SM_PlantingDate
                ? moment(values.SM_PlantingDate).utc().format('YYYY-MM-DDTHH:mm:ss') + 'Z'
                : null,
            SM_FishingDate: values.SM_FishingDate
                ? moment(values.SM_FishingDate).utc().format('YYYY-MM-DDTHH:mm:ss') + 'Z'
                : null,
        };
        dispatch(registerLablote(formData));
    };

    return (
        <>
            <PageHeader
                highlightText="Aqualink Laboratorio"
                title="Añadir Lote Laboratorio"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
                selectedPool={selectedPool}
            />
            <Main>
                <Row gutter={25}>
                    <Col xl={7} xs={24} style={{ display: "flex" }} >
                        <AqualinkMaps
                            selectedOrg={selectedOrg}
                            height={385}
                        />
                    </Col>
                    <Col xl={17} xs={24} style={{ display: "flex" }} >
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <Cards title="Formulario de Ingreso de Lote" size="large">
                                <Form form={form} layout="vertical" onFinish={onFinish} onValuesChange={onValuesChange}>
                                    <Row gutter={[16, 16]}>
                                        {/* Capacidad del tanque (disabled, muestra poolSize) */}
                                        <Col xs={24} md={8}>
                                            <Form.Item
                                                label="Capacidad del tanque"
                                                name="sm_tankcapacity"
                                            >
                                                <InputNumber
                                                    placeholder="Capacidad en m3"
                                                    style={{ width: '100%' }}
                                                    disabled
                                                />
                                            </Form.Item>
                                        </Col>

                                        {/* Fecha de siembra (DatePicker) */}
                                        <Col xs={24} md={8}>
                                            <Form.Item
                                                label="Fecha de siembra"
                                                name="SM_PlantingDate"
                                                rules={[{ required: true, message: 'Este campo es requerido' }]}
                                            >
                                                <DatePicker
                                                    style={{ width: '100%' }}
                                                    onChange={(date) => {
                                                        setPlantingDate(date);
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>

                                        {/* Días de Corrida (Selector con opciones 18, 22, 26) */}
                                        <Col xs={24} md={8}>
                                            <Form.Item
                                                label="Días de Corrida"
                                                name="sm_campaigndays"
                                                rules={[{ required: true, message: 'Este campo es requerido' }]}
                                            >
                                                <Select
                                                    placeholder="Seleccione días"
                                                    onChange={(value) => setCampaignDays(value)}
                                                >
                                                    <Option value={18}>18</Option>
                                                    <Option value={22}>22</Option>
                                                    <Option value={26}>26</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        {/* Fecha de Pesca (automática: fecha de siembra + días de corrida) */}
                                        <Col xs={24} md={8}>
                                            <Form.Item label="Fecha de Pesca" name="SM_FishingDate">
                                                <DatePicker style={{ width: '100%' }} disabled />
                                            </Form.Item>
                                        </Col>

                                        <Col xs={24} md={8}>
                                            <Form.Item label="Densidad programada" name="sm_programmeddensity">
                                                <InputNumber
                                                    placeholder="Densidad"
                                                    style={{ width: '100%' }}
                                                    min={0}
                                                    formatter={value => value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                    parser={value => value?.replace(/,/g, '')}
                                                />
                                            </Form.Item>
                                        </Col>

                                        {/* Mortalidad estimada (porcentaje hasta 100) */}
                                        <Col xs={24} md={8}>
                                            <Form.Item label="Mortalidad estimada %" name="sm_estimatedmortality">
                                                <InputNumber placeholder="Mortalidad %" style={{ width: '100%' }} min={0} max={100} />
                                            </Form.Item>
                                        </Col>

                                        {/* Biomasa objetivo (campo numérico, calculado y disabled) */}
                                        <Col xs={24} md={8}>
                                            <Form.Item label="Biomasa objetivo" name="sm_targetbiomass">
                                                <InputNumber placeholder="Biomasa (kg)" style={{ width: '100%' }} disabled />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={8}>
                                            <Form.Item label="Pl/gr objetivo" name="sm_targetpl">
                                                <InputNumber placeholder="Ingrese cantidad" style={{ width: '100%' }} min={0} />
                                            </Form.Item>
                                        </Col>

                                        {/* Directorio de nauplio (selector alimentado por redux.directories) */}
                                        <Col xs={24} md={8}>
                                            <Form.Item
                                                label="Origen de nauplio"
                                                name="sm_directories_ID"
                                                rules={[{ required: true, message: 'Seleccione un directorio' }]}
                                            >
                                                <Select placeholder={directoriesLoading ? "Cargando..." : "Seleccione un directorio"}>
                                                    {directories && directories.map(dir => (
                                                        <Option key={dir.id} value={dir.id}>
                                                            {dir.sci_code || dir.Name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        {/* Código de nauplio (input alfanumérico) */}
                                        <Col xs={24} md={8}>
                                            <Form.Item label="Código de nauplio" name="sm_naupliuscode">
                                                <Input placeholder="Ingrese código" />
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
