import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Table, Button, Input, Form, InputNumber, Space } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchLablotesInfoIND } from '../../redux/lablote/actionCreator';
import TankCard from '../AQx-Labs/panel/components/TankCard';
import { Text } from 'recharts';

function RequestLarva() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);
    const [selectedLote, setSelectedLote] = useState(null);  
    const [cantidadSolicitada, setCantidadSolicitada] = useState('');
    const [mostrarReserva, setMostrarReserva] = useState(false); 

    useEffect(() => {
        dispatch(fetchLablotesInfoIND());
    }, [dispatch]);



    const validLabLote = Array.isArray(lablotes) ? lablotes : [];
    const selectedLabLotes = validLabLote;

    const handleViewClick = (lote) => {
        setMostrarReserva(false)
        const loteSeleccionado = validLabLote.find(l => l.sm_lablote_ID.id === lote.key);
        setSelectedLote(loteSeleccionado);
    };

    const handleAceptar = () => {
        setMostrarReserva(true); 
    };

    const columns = [
        { title: 'Provincia', dataIndex: 'C_City_ID', key: 'province', align: 'center' },
        { title: 'Stock', dataIndex: 'sm_installedcapacitylarva', key: 'stock', align: 'center' },
        { title: 'Proveedor', dataIndex: 'org_value', key: 'provider', align: 'center' },
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
        { title: 'Fecha Ideal', dataIndex: 'SM_FishingDate', key: 'idealDate', render: (text) => new Date(text).toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' }) },
        { title: 'Clasificación', dataIndex: 'sm_targetpl', key: 'classification', align: 'center' },
        {
            title: 'Cantidad Disponible',
            dataIndex: 'sm_reservedbiomass',
            key: 'availableQty',
            align: 'center',
            render: (text) => text.toLocaleString('es-ES')  
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
        sm_installedcapacitylarva: "Larva",  
        org_value: lote.org_value,
        SM_FishingDate: lote.SM_FishingDate,
        sm_targetpl: lote.sm_targetpl,
        sm_reservedbiomass: lote.sm_reservedbiomass,
    }));

    if (lablotesLoading) {
        return <p>Cargando datos...</p>;
    }

    if (lablotesError) {
        return <p>Ocurrió un error al cargar los lotes: {lablotesError}</p>;
    }


    const handleSubmit = () => {
        form.validateFields().then(() => {
            console.log({
                Cliente: selectedLote.AD_Client_ID.identifier,
                Laboratorio: selectedLote.AD_Org_ID.identifier,
                Usuario: Cookies.get('roles') ? JSON.parse(Cookies.get('roles'))[0].name : 'No disponible',
                Fecha: new Date().toLocaleString(),
                CantidadSolicitada: cantidadSolicitada,
            });
        });
    };
    return (
        <>
            <PageHeader
                title="Larva Network"
                highlightText="Aqualink"
            />
            <Main>
                <Row gutter={25}>
                    <Col xl={24} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
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
                        <Col xl={8} xs={24} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Cards
                                title="Lote"
                            >
                                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                                    {selectedLote && <TankCard data={selectedLote} request={true} />}
                                    <button
                                        style={{
                                            width: "50%",
                                            backgroundColor: '#0372ce',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '5px',
                                            border: 'none',
                                            marginTop: '20px',
                                            textAlign: 'center' // Asegura que el texto esté centrado en el botón
                                        }}
                                        onClick={handleAceptar} // Acción al hacer click en "Solicitar"
                                    >
                                        Solicitar
                                    </button>
                                </div>
                            </Cards>
                        </Col>

                        <Col xl={16} xs={24} style={{ display: "flex" }}>
                            {mostrarReserva && selectedLote && (
                                <Cards
                                    title="Reserva de Stock"
                                >
                                    <Form form={form} layout="vertical" onFinish={handleSubmit}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24} sm={12}>
                                                <Form.Item
                                                    label="Cliente"
                                                    name="cliente"
                                                    initialValue={selectedLote.AD_Client_ID.identifier}
                                                    rules={[{ required: true, message: 'Por favor, ingrese el cliente' }]}
                                                >
                                                    <Input placeholder="Ingrese el cliente" />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Laboratorio"
                                                    name="laboratorio"
                                                    initialValue={selectedLote.AD_Org_ID.identifier}
                                                    rules={[{ required: true, message: 'Por favor, ingrese el laboratorio' }]}
                                                >
                                                    <Input placeholder="Ingrese el laboratorio" />
                                                </Form.Item>

                                                <Form.Item
                                                    label="Cantidad Solicitada"
                                                    name="cantidadSolicitada"
                                                    rules={[
                                                        { required: true, message: 'Por favor, ingrese la cantidad solicitada' },
                                                    ]}
                                                >
                                                    <Input
                                                        value={cantidadSolicitada}
                                                        onChange={(value) => setCantidadSolicitada(value)}
                                                        placeholder="Ingrese la cantidad"
                                                        type="number"
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
                                                    <Input placeholder="Ingrese el usuario" />
                                                </Form.Item>
                                                <Form.Item
                                                    label="Fecha"
                                                    name="fecha"
                                                    initialValue={new Date().toLocaleString()}
                                                    rules={[{ required: true, message: 'Por favor, ingrese la fecha' }]}
                                                >
                                                    <Input placeholder="Ingrese la fecha" />
                                                </Form.Item>


                                            </Col>
                                        </Row>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                block
                                                className="mt-4 bg-blue-600 hover:bg-blue-700"
                                            >
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
