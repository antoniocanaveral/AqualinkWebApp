import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button, Steps, Modal, message, InputNumber } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import { loadCustodyCoordinations } from '../../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import { registerLote } from '../../../redux/lote/actionCreator';
const { Step } = Steps;
const { Option } = Select;

function LoteAddCustody() {
    const dispatch = useDispatch();
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({});
    const [lotId, setLotId] = useState(null);
    const organizations = useSelector((state) => state.auth.custodyOrgs);
    const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName'));


    const PageRoutes = [
        {
            path: '/custody',
            breadcrumbName: selectedOrg,
        },
        {
            path: 'first',
            breadcrumbName: 'Coordinaciones',
        },
    ];

    const coordinations = useSelector((state) => state.custody.coordinations);


    const handleOrgChange = (value, orgEmail) => {
        setSelectedOrg(value);
        Cookies.set('orgId', value);
        Cookies.set('orgEmail', orgEmail);
        dispatch(loadCustodyCoordinations(value));
    };


    const handleLotChange = (value) => {
        setLotId(value);

        const selectedCoordination = coordinations.find(coord => coord.SM_FishingNotification === value);

        if (selectedCoordination) {
            setFormData(prevData => ({
                ...prevData,
                SM_Coordination_ID: selectedCoordination.SM_Coordination_ID.id
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                SM_Coordination_ID: null
            }));
        }
    };

    const [totalEntero, setTotalEntero] = useState(0);
    const [totalCola, setTotalCola] = useState(0);
    const [volumenProceso, setVolumenProceso] = useState(0);

    useEffect(() => {
        const smProcessVolume = form.getFieldValue("sm_processvolume") || 0;
        setVolumenProceso(smProcessVolume);

        const newTotalEntero = ['30_40', '40_50', '50_60', '60_70', '70_80', '80_100', '100_120', '120_150']
            .reduce((acc, category) => acc + (form.getFieldValue(`sm_hocategory${category}`) || 0), 0);
        setTotalEntero(newTotalEntero);

        const newTotalCola = ['21_25', '26_30', '31_35', '36_40', '41_50', '51_60', '61_70', '71_90', '100_120', '120_150']
            .reduce((acc, category) => acc + (form.getFieldValue(`sm_hl${category}`) || 0), 0);
        setTotalCola(newTotalCola);
    }, [form, form.getFieldValue("sm_processvolume")]);


    const onNext = async () => {
        try {
            await form.validateFields();
            setFormData((prevData) => ({
                ...prevData,
                ...form.getFieldsValue()
            }));
            setCurrentStep((prev) => prev + 1);
        } catch (error) {
            console.error('Error en la validación del formulario:', error);
        }
    };

    const onPrev = () => {
        setCurrentStep((prev) => prev - 1);
    };
    const formatToISO = (dateString) => {
        if (!dateString) return null;

        if (dateString.length === 16) {
            dateString += ":00";
        }

        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
    };



    const handleFinalizar = async () => {
        try {
            await form.validateFields();
            let allData = { ...formData, ...form.getFieldsValue() };

            const { sm_FishingNotification, ...filteredData } = allData;
            if (filteredData.sm_arrivaltime) {
                filteredData.sm_arrivaltime = formatToISO(filteredData.sm_arrivaltime);
            }
            if (filteredData.sm_processstarttime) {
                filteredData.sm_processstarttime = formatToISO(filteredData.sm_processstarttime);
            }

            console.log("Datos finales enviados (formateados):", filteredData);
            setFormData(filteredData);

            dispatch(registerLote(filteredData)); // Enviar los datos sin sm_FishingNotification
        } catch (error) {
            console.error('Error al finalizar el registro:', error);
        }
    };



    const steps = [
        {
            title: 'Información del Lote',
            content: (
                <Form layout="vertical" form={form}
                    initialValues={{
                        volumenIngreso: 0.00,
                    }}>

                    <Form.Item
                        label="Seleccione el LOTE ID"
                        name="sm_FishingNotification"
                        rules={[{ required: true, message: 'Debe seleccionar un LOTE ID' }]}
                    >
                        <Select
                            placeholder="Seleccione un LOTE ID"
                            onChange={handleLotChange}
                            value={lotId}
                        >
                            {coordinations && coordinations.length > 0 ? (
                                coordinations.map((coord) => (
                                    <Option key={coord.SM_FishingNotification} value={coord.SM_FishingNotification}>
                                        {coord.SM_FishingNotification || 'Sin Lote ID'}
                                    </Option>
                                ))
                            ) : (
                                <Option value="none" disabled>No hay coordinaciones disponibles</Option>
                            )}
                        </Select>
                    </Form.Item>
                    <Row gutter={16}>
                        <Row gutter={16}>
                            <Col span={12}><Form.Item label="Hora de llegada a planta" name="sm_arrivaltime" rules={[{ required: true, message: 'Ingrese la hora de llegada' }]}><Input type="datetime-local" /></Form.Item></Col>
                            <Col span={12}><Form.Item label="Hora de inicio de proceso" name="sm_processstarttime" rules={[{ required: true, message: 'Ingrese la hora de inicio' }]}><Input type="datetime-local" /></Form.Item></Col>
                        </Row>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Volumen a Proceso"
                                name="sm_processvolume"
                                rules={[{ required: true, message: 'Debe ingresar el volumen de ingreso' }]}
                            >
                                <Input
                                    min={0}
                                    style={{ width: '100%' }}
                                    formatter={(value) =>
                                        value !== undefined && value !== null
                                            ? Number(value).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })
                                            : '0.00'
                                    }
                                    parser={(value) => value.replace(/,/g, '')}
                                    type="number" placeholder="Volumen" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Basura (kg)" name="sm_waste" rules={[{ required: true, message: 'Ingrese los residuos' }]}>
                                <InputNumber style={{ width: '100%' }} min={0} />
                            </Form.Item>
                        </Col>

                    </Row>
                </Form>
            ),
        },
        {
            title: 'Entero',
            content: (
                <Form layout="vertical" form={form}>
                    <Row gutter={16}>
                        <Col span={12}>
                                <InputNumber style={{ width: '100%' }} value={volumenProceso} disabled />
                        </Col>
                        <Col span={12}>
                                <InputNumber style={{ width: '100%' }} value={totalEntero} disabled />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        {['30_40', '40_50', '50_60', '60_70', '70_80', '80_100', '100_120', '120_150'].map((category) => (
                            <Col span={12} key={category}>
                                <Form.Item label={`${category.replace('_', '/')} lbs`} name={`sm_hocategory${category}`}>
                                    <InputNumber
                                        style={{ width: '100%' }}
                                        min={0}
                                        onChange={() => {
                                            const newTotal = ['30_40', '40_50', '50_60', '60_70', '70_80', '80_100', '100_120', '120_150']
                                                .reduce((acc, cat) => acc + (form.getFieldValue(`sm_hocategory${cat}`) || 0), 0);
                                            setTotalEntero(newTotal);
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                </Form>

            ),
        },
        {
            title: 'Cola',
            content: (
                <Form layout="vertical" form={form}>
                    <Row gutter={16}>
                        <Col span={12}>
                                <InputNumber style={{ width: '100%' }} value={volumenProceso - totalEntero} disabled />
                        </Col>
                        <Col span={12}>
                                <InputNumber style={{ width: '100%' }} value={totalCola} disabled />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        {['21_25', '26_30', '31_35', '36_40', '41_50', '51_60', '61_70', '71_90', '100_120', '120_150'].map((category) => (
                            <Col span={12} key={category}>
                                <Form.Item label={`${category.replace('_', '/')} lbs`} name={`sm_hl${category}`}>
                                    <InputNumber
                                        style={{ width: '100%' }}
                                        min={0}
                                        onChange={() => {
                                            const newTotal = ['21_25', '26_30', '31_35', '36_40', '41_50', '51_60', '61_70', '71_90', '100_120', '120_150']
                                                .reduce((acc, cat) => acc + (form.getFieldValue(`sm_hl${cat}`) || 0), 0);
                                            setTotalCola(newTotal);
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                </Form>
            ),
        },

    ];

    return (
        <>
            <PageHeader highlightText="Aqualink Empacadora" title="Añadir Custodia de Lote"
                organizations={organizations}
                routes={PageRoutes}
                selectedOrg={selectedOrg}
                handleOrgChange={handleOrgChange}
            />
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
                                    <Button type="primary" onClick={handleFinalizar}>
                                        Finalizar Registro
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

export default LoteAddCustody;
