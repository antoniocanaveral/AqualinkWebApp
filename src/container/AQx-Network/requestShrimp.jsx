/* eslint-disable react-hooks/rules-of-hooks */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Table, Button, Input, Form, Select } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchOperationReportIND } from '../../redux/views/batch-report/actionCreator';
import WarehouseCard from '../AQx-Monitoring/Trazability/WarehouseCard';
import { registerReserve } from '../../redux/reserve/actionCreator';
import { selectFarmsOrgsWithPools } from '../../redux/authentication/selectors';
import usePageHeaderSelectors from '../../hooks/usePageHeaderSelectors';

function RequestShrimp() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [selectedLote, setSelectedLote] = useState(null);
    const [cantidadSolicitada, setCantidadSolicitada] = useState('');
    const [mostrarReserva, setMostrarReserva] = useState(false);

    const { campaigns, loading, error } = useSelector(state => state.batchReport);
    const { reserveData } = useSelector(state => state.reserve);

    const { selectedOrg, combinedSelectOptions } = usePageHeaderSelectors({
        orgsSelector: () => useSelector((state) => state.auth.custodyOrgs),
        poolsSelector: () => useSelector(selectFarmsOrgsWithPools),
        includeSector: false,
        includePool: false,
        orgType: 'Custody',
    });

    useEffect(() => {
        dispatch(fetchOperationReportIND());
    }, [dispatch]);

    useEffect(() => {
        if (mostrarReserva && selectedLote?.SM_ProjectedBiomass) {
            setCantidadSolicitada(selectedLote.SM_ProjectedBiomass);
            form.setFieldsValue({
                cantidadSolicitada: selectedLote.SM_ProjectedBiomass,
            });
        }
    }, [mostrarReserva, selectedLote, form]);

    useEffect(() => {
        if (reserveData) {
            form.resetFields();
            setMostrarReserva(false);
            setSelectedLote(null);
            setCantidadSolicitada('');
        }
    }, [reserveData, form]);

    const getClassification = (r) => {
        if (r.SM_Category30_40) return "30-40";
        if (r.SM_Category40_50) return "40-50";
        if (r.SM_Category50_60) return "50-60";
        if (r.SM_Category60_70) return "60-70";
        if (r.SM_Category70_80) return "70-80";
        if (r.SM_Category80_100) return "80-100";
        if (r.SM_Category100_120) return "100-120";
        if (r.SM_Category120_150) return "120-150";
        return null;
    };

    const formatDate = (date) => date.toISOString().replace(/\.\d{3}Z$/, 'Z');

    const handleViewClick = (lote) => {
        setMostrarReserva(false);
        const loteSeleccionado = campaigns.find(l => l.id === lote.key);
        setSelectedLote(loteSeleccionado);
    };

    const handleAceptar = () => {
        if (selectedLote?.SM_ProjectedBiomass) {
            setCantidadSolicitada(selectedLote.SM_ProjectedBiomass);
        }
        setMostrarReserva(true);
    };

    const handleSubmit = () => {
        form.validateFields().then(() => {
            const finalDate = new Date(selectedLote.SM_PlannedFinishDate);
            finalDate.setDate(finalDate.getDate() + 2);

            const reserveData = {
                sm_reserveorg_id: selectedLote.AD_Org_ID.id,
                sm_reservedvolume: selectedLote.SM_ProjectedBiomass,
                sm_stocktype: 'CAMARON',
                SM_Classification: getClassification(selectedLote),
                sm_finaldate: formatDate(finalDate),
                sm_idealdate: formatDate(new Date(selectedLote.SM_PlannedFinishDate)),
                C_Campaign_ID: selectedLote.id,
            };

            dispatch(registerReserve(reserveData));
        });
    };

    const columns = [
        { title: 'Provincia', dataIndex: 'C_City_ID', key: 'province', align: 'center' },
        { title: 'Stock', dataIndex: 'sm_installedcapacitylarva', key: 'stock', align: 'center' },
        { title: 'Proveedor', dataIndex: 'value', key: 'provider', align: 'center' },
        {
            title: 'Fecha Final',
            dataIndex: 'SM_FishingDate',
            key: 'fishingDate',
            render: (text) => {
                const fecha = new Date(text);
                fecha.setDate(fecha.getDate() + 2);
                return fecha.toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' });
            },
        },
        {
            title: 'Fecha Ideal',
            dataIndex: 'SM_FishingDate',
            key: 'idealDate',
            render: (text) => new Date(text).toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' }),
        },
        { title: 'Clasificación', dataIndex: 'classification', key: 'classification', align: 'center' },
        {
            title: 'Volumen Disponible',
            dataIndex: 'sm_reservedbiomass',
            key: 'availableQty',
            align: 'center',
            render: (text) => text
        },
        {
            title: 'Ver',
            key: 'view',
            render: (text, record) => (
                <Button onClick={() => handleViewClick(record)}>Ver</Button>
            ),
            align: 'center',
        },
    ];

    const tableDataSource = campaigns.map((lote) => ({
        key: lote.id,
        C_City_ID: lote.C_City_ID.identifier,
        sm_installedcapacitylarva: 'Camarón',
        value: lote.Value,
        SM_FishingDate: lote.SM_PlannedFinishDate,
        classification: getClassification(lote),
        sm_reservedbiomass: lote.SM_ProjectedBiomass,
    }));

    return (
        <>
            <PageHeader title="Shrimp Network" highlightText="Aqualink" />
            <Main>
                <Row gutter={25}>
                    <Col xl={24} xs={24}>
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <Table dataSource={tableDataSource} columns={columns} pagination={{ pageSize: 3 }} />
                        </Suspense>
                    </Col>
                </Row>

                {selectedLote && (
                    <Row gutter={25}>
                        <Col xl={8} xs={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Cards title="Lote">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <WarehouseCard data={selectedLote} request={true} />
                                    <button
                                        style={{
                                            width: '50%',
                                            backgroundColor: '#0372ce',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '5px',
                                            border: 'none',
                                            marginTop: '20px',
                                            textAlign: 'center',
                                        }}
                                        onClick={handleAceptar}
                                    >
                                        Solicitar
                                    </button>
                                </div>
                            </Cards>
                        </Col>

                        <Col xl={16} xs={24}>
                            {mostrarReserva && (
                                <Cards title="Reserva de Stock">
                                    <Form form={form} layout="vertical" onFinish={handleSubmit}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} sm={12}>
                                                <Form.Item
                                                    label="Cliente"
                                                    name="cliente"
                                                    initialValue={selectedLote.AD_Client_ID.identifier}
                                                    rules={[{ required: true, message: 'Por favor, ingrese el cliente' }]}
                                                >
                                                    <Input disabled />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Camaronera"
                                                    name="camaronera"
                                                    initialValue={selectedLote.AD_Org_ID.identifier}
                                                    rules={[{ required: true, message: 'Por favor, ingrese la camaronera' }]}
                                                >
                                                    <Input disabled />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Volumen Reservado"
                                                    name="cantidadSolicitada"
                                                    initialValue={selectedLote.SM_ProjectedBiomass}
                                                    rules={[{ required: true, message: 'Por favor, ingrese la cantidad' }]}
                                                >
                                                    <Input
                                                        type="number"
                                                        value={cantidadSolicitada}
                                                        onChange={(e) => setCantidadSolicitada(e.target.value)}
                                                        disabled
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={12}>
                                                <Form.Item
                                                    label="Usuario"
                                                    name="usuario"
                                                    initialValue={Cookies.get('roles') ? JSON.parse(Cookies.get('roles'))[0].name : 'No disponible'}
                                                    rules={[{ required: true, message: 'Por favor, ingrese el usuario' }]}
                                                >
                                                    <Input disabled />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Fecha"
                                                    name="fecha"
                                                    initialValue={new Date().toLocaleString()}
                                                    rules={[{ required: true, message: 'Por favor, ingrese la fecha' }]}
                                                >
                                                    <Input disabled />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Camaronera"
                                                    name="camaroneraSelect"
                                                    initialValue={selectedOrg?.value}
                                                    rules={[{ required: true, message: 'Por favor, seleccione la camaronera' }]}
                                                >
                                                    <Select
                                                        size='large'
                                                        options={combinedSelectOptions[0].options}
                                                        onChange={(value) => {
                                                            const selected = combinedSelectOptions[0].options.find(opt => opt.value === value);
                                                            combinedSelectOptions[0].onChange(value, selected?.email || '');
                                                        }}
                                                        placeholder={combinedSelectOptions[0].placeholder || "Seleccione una Camaronera"}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" block loading={loading}>
                                                Aceptar
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Cards>
                            )}
                        </Col>
                    </Row>
                )}
            </Main>
        </>
    );
}

export default RequestShrimp;
