/* eslint-disable react-hooks/rules-of-hooks */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Table, Button, Input, Form, Select } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchLablotesInfoIND } from '../../redux/lablote/actionCreator';
import { selectFarmsOrgsWithPools } from '../../redux/authentication/selectors';
import usePageHeaderSelectors from '../../hooks/usePageHeaderSelectors';
import TankCard from '../AQx-Labs/panel/components/TankCard';
import { registerReserve } from '../../redux/reserve/actionCreator';

const { Option } = Select;

function RequestLarva() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);
    const { loading: reserveLoading, reserveData, error: reserveError } = useSelector((state) => state.reserve);
    const { selectedOrg, selectedSector, selectedPool, combinedSelectOptions } = usePageHeaderSelectors({
        orgsSelector: () => useSelector((state) => state.auth.farmsOrgs),
        poolsSelector: () => useSelector(selectFarmsOrgsWithPools),
        includeSector: false,
        includePool: false,
        orgType: 'Camaronera',
    });
    const [selectedLote, setSelectedLote] = useState(null);
    const [cantidadSolicitada, setCantidadSolicitada] = useState('');
    const [mostrarReserva, setMostrarReserva] = useState(false);

    useEffect(() => {
        dispatch(fetchLablotesInfoIND());
    }, [dispatch]);

    useEffect(() => {
        if (mostrarReserva && selectedLote?.sm_reservedbiomass) {
            setCantidadSolicitada(selectedLote.sm_reservedbiomass);
            form.setFieldsValue({
                cantidadSolicitada: selectedLote.sm_reservedbiomass,
                camaronera: selectedOrg?.value,
            });
        }
    }, [mostrarReserva, selectedLote, form, selectedOrg]);

    useEffect(() => {
        if (reserveData) {
            form.resetFields();
            setMostrarReserva(false);
            setSelectedLote(null);
            setCantidadSolicitada('');
        }
    }, [reserveData, form]);

    const validLabLote = Array.isArray(lablotes) ? lablotes : [];
    const selectedLabLotes = validLabLote;

    const handleViewClick = (lote) => {
        setMostrarReserva(false);
        const loteSeleccionado = validLabLote.find(l => l.sm_lablote_ID.id === lote.key);
        setSelectedLote(loteSeleccionado);
    };

    const handleAceptar = () => {
        if (selectedLote?.sm_reservedbiomass) {
            setCantidadSolicitada(selectedLote.sm_reservedbiomass);
        }
        setMostrarReserva(true);
    };

    const formatDate = (date) => date.toISOString().replace(/\.\d{3}Z$/, 'Z');

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            const finalDate = new Date(selectedLote.SM_FishingDate);
            finalDate.setDate(finalDate.getDate() + 2);

            const reserveData = {
                sm_lablote_ID : selectedLote.sm_lablote_ID.id,
                sm_reserveorg_id: values.camaronera || selectedLote.AD_Org_ID.id,
                sm_reservedvolume: Number(values.cantidadSolicitada),
                sm_stocktype: 'LARVA',
                sm_plgr: selectedLote.sm_targetpl,
                sm_finaldate: formatDate(finalDate),
                sm_idealdate: formatDate(new Date(selectedLote.SM_FishingDate)),
            };

            dispatch(registerReserve(reserveData));
        });
    };

    const columns = [
        { title: 'Provincia', dataIndex: 'C_City_ID', key: 'province', align: 'center' },
        { title: 'Stock', dataIndex: 'sm_installedcapacitylarva', key: 'stock', align: 'center' },
        { title: 'Proveedor', dataIndex: 'org_value', key: 'provider', align: 'center' },
        {
            title: 'Fecha Final',
            dataIndex: 'SM_FishingDate',
            key: 'fechaFinal',
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
        { title: 'PL/gr', dataIndex: 'sm_targetpl', key: 'plgr', align: 'center' },
        {
            title: 'Cantidad Disponible',
            dataIndex: 'sm_reservedbiomass',
            key: 'availableQty',
            align: 'center',
            render: (text) => text.toLocaleString('es-ES'),
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

    const tableDataSource = selectedLabLotes.map((lote) => ({
        key: lote.sm_lablote_ID.id,
        C_City_ID: lote.C_City_ID.identifier,
        sm_installedcapacitylarva: 'Larva',
        org_value: lote.org_value,
        SM_FishingDate: lote.SM_FishingDate,
        sm_targetpl: lote.sm_targetpl,
        sm_reservedbiomass: lote.sm_reservedbiomass,
    }));

    if (lablotesLoading) return <p>Cargando datos...</p>;
    if (lablotesError) return <p>Ocurrió un error al cargar los lotes: {lablotesError}</p>;
    if (reserveError) return <p>Error al registrar la reserva: {reserveError}</p>;

    return (
        <>
            <PageHeader title="Larva Network" highlightText="Aqualink" />
            <Main>
                <Row gutter={25}>
                    <Col xl={24} xs={24}>
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <Table
                                dataSource={tableDataSource}
                                columns={columns}
                                pagination={{ pageSize: 3 }}
                            />
                        </Suspense>
                    </Col>
                </Row>

                {selectedLote && (
                    <Row gutter={25}>
                        <Col xl={8} xs={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Cards title="Lote">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <TankCard data={selectedLote} request={true} />
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
                            {mostrarReserva && selectedLote && (
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
                                                    label="Laboratorio"
                                                    name="laboratorio"
                                                    initialValue={selectedLote.AD_Org_ID.identifier}
                                                    rules={[{ required: true, message: 'Por favor, ingrese el laboratorio' }]}
                                                >
                                                    <Input disabled />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Volumen Reservado"
                                                    name="cantidadSolicitada"
                                                    initialValue={selectedLote.sm_reservedbiomass}
                                                    rules={[
                                                        { required: true, message: 'Por favor, ingrese la cantidad' },
                                                        {
                                                            validator: (_, value) =>
                                                                value <= selectedLote.sm_reservedbiomass && value > 0
                                                                    ? Promise.resolve()
                                                                    : Promise.reject(
                                                                          new Error(
                                                                              `La cantidad debe ser mayor a 0 y no exceder ${selectedLote.sm_reservedbiomass.toLocaleString(
                                                                                  'es-ES'
                                                                              )}`
                                                                          )
                                                                      ),
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        type="number"
                                                        value={cantidadSolicitada}
                                                        onChange={(e) => setCantidadSolicitada(e.target.value)}
                                                        max={selectedLote.sm_reservedbiomass}
                                                        min={1}
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
                                                    name="camaronera"
                                                    initialValue={selectedOrg?.value}
                                                    rules={[{ required: true, message: 'Por favor, seleccione la camaronera' }]}
                                                >
                                                    <Select
                                                        size="large"
                                                        options={combinedSelectOptions[0]?.options}
                                                        onChange={combinedSelectOptions[0]?.onChange}
                                                        placeholder={combinedSelectOptions[0]?.placeholder || 'Seleccione una Camaronera'}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" block loading={reserveLoading}>
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

export default RequestLarva;