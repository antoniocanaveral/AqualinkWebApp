import React, { useState } from 'react';
import { Table, Row, Col, Modal, Button, Typography, Divider } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { CheckOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const LoteViewCustody = () => {
    const [selectedLote, setSelectedLote] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const dataSource = [
        {
            key: '1',
            fecha: '2024-12-31',
            loteId: 'L001',
            horaLlegada: '10:00 AM',
            horaInicio: '11:00 AM',
            volumenIngreso: '500',
            basura: '5 lbs',
            entero: {
                "20_30": 100,
                "30_40": 200,
                "40_50": 300,
                "50_60": 400
            },
            cola: {
                "41_60": 150,
                "61_70": 250,
                "71_80": 350,
                "81_90": 450
            },
            controlCalidad: {
                color: "A3",
                olor: "normal",
                sabor: "normal",
                pruebaCoccion: "cabeza roja"
            }
        },
        {
            key: '2',
            fecha: '2024-12-30',
            loteId: 'L002',
            horaLlegada: '9:00 AM',
            horaInicio: '10:00 AM',
            volumenIngreso: '400',
            basura: '4 lbs',
            entero: {
                "20_30": 120,
                "30_40": 220,
                "40_50": 320,
                "50_60": 420
            },
            cola: {
                "41_60": 170,
                "61_70": 270,
                "71_80": 370,
                "81_90": 470
            },
            controlCalidad: {
                color: "A2",
                olor: "atipico",
                sabor: "normal",
                pruebaCoccion: "normal"
            }
        },
    ];

    const columns = [
        {
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha',
            sorter: (a, b) => new Date(a.fecha) - new Date(b.fecha),
            render: (text) => <Text>{text}</Text>,
        },
        {
            title: 'Lote ID',
            dataIndex: 'loteId',
            key: 'loteId',
            sorter: (a, b) => a.loteId.localeCompare(b.loteId),
            render: (text) => <Text>{text}</Text>,
        },
        {
            title: 'Hora de Llegada',
            dataIndex: 'horaLlegada',
            key: 'horaLlegada',
            render: (text) => <Text>{text}</Text>,
        },
        {
            title: 'Hora de Inicio',
            dataIndex: 'horaInicio',
            key: 'horaInicio',
            render: (text) => <Text>{text}</Text>,
        },
        {
            title: 'Volumen Ingreso (L)',
            dataIndex: 'volumenIngreso',
            key: 'volumenIngreso',
            sorter: (a, b) => parseInt(a.volumenIngreso) - parseInt(b.volumenIngreso),
            render: (text) => <Text>{text}</Text>,
        },
        {
            title: 'Basura (lbs)',
            dataIndex: 'basura',
            key: 'basura',
            sorter: (a, b) => parseInt(a.basura) - parseInt(b.basura),
            render: (text) => <Text>{text}</Text>,
        },
        {
            title: 'Acciones',
            key: 'acciones',
            render: (_, record) => (
                <Button 
                    type="primary" 
                    onClick={() => handleViewDetails(record)} 
                    style={{ backgroundColor: '#0372ce', borderColor: '#0372ce' }}
                >
                    Ver Detalles
                </Button>
            ),
        },
    ];

    const handleViewDetails = (record) => {
        setSelectedLote(record);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedLote(null);
    };

    return (
        <>
            <PageHeader highlightText="AquaLink Reportes" title="Vista de Lotes" />
            <Main>
                <Row gutter={25}>
                    <Col span={24}>
                        <Cards title="Listado de Lotes">
                            <Table 
                                dataSource={dataSource} 
                                columns={columns} 
                                pagination={{ pageSize: 5 }} 
                                rowKey="key"
                                bordered
                            />
                        </Cards>
                    </Col>
                </Row>
            </Main>

            {selectedLote && (
                <Modal
                    title={`Detalles del Lote ${selectedLote.loteId}`}
                    visible={modalVisible}
                    onCancel={closeModal}
                    footer={[
                        <Button 
                            key="close" 
                            type="primary" 
                            onClick={closeModal} 
                            style={{ backgroundColor: '#012e40', borderColor: '#012e40' }}
                        >
                            Cerrar
                        </Button>,
                    ]}
                    width={800}
                >
                    <div
                        style={{
                            borderRadius: '8px',
                            padding: '20px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        {/* Sección: Información General */}
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Title level={4} style={{ color: '#0372ce' }}>Información General</Title>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Fecha:</strong> {selectedLote.fecha}</Text>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Lote ID:</strong> {selectedLote.loteId}</Text>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Hora de Llegada:</strong> {selectedLote.horaLlegada}</Text>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Hora de Inicio:</strong> {selectedLote.horaInicio}</Text>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Volumen de Ingreso:</strong> {selectedLote.volumenIngreso} L</Text>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Basura:</strong> {selectedLote.basura} lbs</Text>
                            </Col>
                        </Row>

                        <Divider />

                        {/* Sección: Detalles de Entero y Cola */}
                        <Row gutter={[16, 16]}>
                            {/* Detalles de Entero */}
                            <Col xs={24} md={12}>
                                <Title level={4} style={{ color: '#0372ce' }}>Detalles de Entero</Title>
                                {selectedLote.entero && Object.entries(selectedLote.entero).map(([key, value]) => (
                                    <Row key={key} style={{ marginBottom: '8px' }}>
                                        <Col span={12}>
                                            <Text><strong style={{ color: '#012e40' }}>{key.replace('_', ' - ')} :</strong></Text>
                                        </Col>
                                        <Col span={12}>
                                            <Text>{value}lbs</Text>
                                        </Col>
                                    </Row>
                                ))}
                            </Col>

                            {/* Detalles de Cola */}
                            <Col xs={24} md={12}>
                                <Title level={4} style={{ color: '#0372ce' }}>Detalles de Cola</Title>
                                {selectedLote.cola && Object.entries(selectedLote.cola).map(([key, value]) => (
                                    <Row key={key} style={{ marginBottom: '8px' }}>
                                        <Col span={12}>
                                            <Text><strong style={{ color: '#012e40' }}>{key.replace('_', ' - ')} :</strong></Text>
                                        </Col>
                                        <Col span={12}>
                                            <Text>{value}lbs</Text>
                                        </Col>
                                    </Row>
                                ))}
                            </Col>
                        </Row>

                        <Divider />

                        {/* Sección: Control de Calidad */}
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Title level={4} style={{ color: '#0372ce' }}>Control de Calidad</Title>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Color:</strong> {selectedLote.controlCalidad.color}</Text>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Olor:</strong> {selectedLote.controlCalidad.olor}</Text>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Sabor:</strong> {selectedLote.controlCalidad.sabor}</Text>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Text><strong style={{ color: '#012e40' }}>Prueba de Cocción:</strong> {selectedLote.controlCalidad.pruebaCoccion}</Text>
                            </Col>
                        </Row>
                    </div>
                </Modal>
            )}
        </>
    );
}
    export default LoteViewCustody;
