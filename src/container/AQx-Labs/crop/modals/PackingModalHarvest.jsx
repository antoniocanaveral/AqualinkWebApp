
import React, { Suspense } from 'react';
import { Modal, Row, Col, Typography, Divider, Skeleton } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Main } from '../../../styled';

const { Title, Text } = Typography;


const PackingModalHarvest = ({ visible, onClose}) => {

    const dataSource = 
        {
            key: '1',
            fecha: '2024-12-31',
            dataSourceId: 'L001',
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
        };

    if (!dataSource) return null;

    return (
            <Main>
                <Row gutter={[16, 16]}>
                    {/* Información General */}
                    <Col span={24}>
                        <Title level={4} style={{ color: '#0372ce' }}>Información General</Title>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Fecha:</strong> {dataSource.fecha}</Text>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Lote ID:</strong> {dataSource.dataSourceId}</Text>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Hora de Llegada:</strong> {dataSource.horaLlegada}</Text>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Hora de Inicio:</strong> {dataSource.horaInicio}</Text>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Volumen de Ingreso:</strong> {dataSource.volumenIngreso} L</Text>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Basura:</strong> {dataSource.basura} lbs</Text>
                    </Col>
                </Row>

                <Divider />

                {/* Detalles de Entero y Cola */}
                <Row gutter={[16, 16]}>
                    {/* Detalles de Entero */}
                    <Col xs={24} md={12}>
                        <Title level={4} style={{ color: '#0372ce' }}>Detalles de Entero</Title>
                        {dataSource.entero && Object.entries(dataSource.entero).map(([key, value]) => (
                            <Row key={key} style={{ marginBottom: '8px' }}>
                                <Col span={12}>
                                    <Text><strong style={{ color: '#012e40' }}>{key.replace('_', ' - ')} :</strong></Text>
                                </Col>
                                <Col span={12}>
                                    <Text>{value} lbs</Text>
                                </Col>
                            </Row>
                        ))}
                    </Col>

                    {/* Detalles de Cola */}
                    <Col xs={24} md={12}>
                        <Title level={4} style={{ color: '#0372ce' }}>Detalles de Cola</Title>
                        {dataSource.cola && Object.entries(dataSource.cola).map(([key, value]) => (
                            <Row key={key} style={{ marginBottom: '8px' }}>
                                <Col span={12}>
                                    <Text><strong style={{ color: '#012e40' }}>{key.replace('_', ' - ')} :</strong></Text>
                                </Col>
                                <Col span={12}>
                                    <Text>{value} lbs</Text>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>

                <Divider />

                {/* Control de Calidad */}
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Title level={4} style={{ color: '#0372ce' }}>Control de Calidad</Title>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Color:</strong> {dataSource.controlCalidad.color}</Text>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Olor:</strong> {dataSource.controlCalidad.olor}</Text>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Sabor:</strong> {dataSource.controlCalidad.sabor}</Text>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Text><strong style={{ color: '#012e40' }}>Prueba de Cocción:</strong> {dataSource.controlCalidad.pruebaCoccion}</Text>
                    </Col>
                </Row>
            </Main>
    );
};

export default PackingModalHarvest;
