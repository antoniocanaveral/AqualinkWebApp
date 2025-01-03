// src/container/AQx-Custody/stamps-containers/planning-custody.js

import React, { Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Table, Button, Modal } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import ProjectionKgLabs from './charts/ProjectionKgLab';
import TankCardLab from '../cards/TankCardLab';

function PlanningLabs() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTank, setSelectedTank] = useState(null);

    // Datos de los tanques con los nuevos atributos
    const tankData = [
        {
            id: 1,
            modulo: 'Módulo 1',
            tanque: 'Tanque 1',
            lote: 'L-001',
            avanceCiclo: 60, // Porcentaje
            inicioCorrida: '05 Noviembre 2024',
            finCorrida: '05 Diciembre 2024',
            biomasa: '3 MILLONES',
            supervivencia: '90%',
            FCA: 'PL12',
            clasificacion: 'PL12',
            poblacionTanque: '3 MILLONES',
            coordinacionSiembra: 'Siembra A',
        },
        {
            id: 2,
            modulo: 'Módulo 1',
            tanque: 'Tanque 2',
            lote: 'L-002',
            avanceCiclo: 60,
            inicioCorrida: '10 Noviembre 2024',
            finCorrida: '10 Diciembre 2024',
            biomasa: '2.5 MILLONES',
            supervivencia: '88%',
            FCA: 'PL10',
            clasificacion: 'PL10',
            poblacionTanque: '2.5 MILLONES',
            coordinacionSiembra: 'Siembra B',
        },
        {
            id: 3,
            modulo: 'Módulo 2',
            tanque: 'Tanque 3',
            lote: 'L-003',
            avanceCiclo: 60,
            inicioCorrida: '15 Noviembre 2024',
            finCorrida: '15 Diciembre 2024',
            biomasa: '3.2 MILLONES',
            supervivencia: '92%',
            FCA: 'PL14',
            clasificacion: 'PL14',
            poblacionTanque: '3.2 MILLONES',
            coordinacionSiembra: 'Siembra C',
        },
        {
            id: 4,
            modulo: 'Módulo 2',
            tanque: 'Tanque 4',
            lote: 'L-004',
            avanceCiclo: 60,
            inicioCorrida: '20 Noviembre 2024',
            finCorrida: '20 Diciembre 2024',
            biomasa: '2.8 MILLONES',
            supervivencia: '85%',
            FCA: 'PL12',
            clasificacion: 'PL12',
            poblacionTanque: '2.8 MILLONES',
            coordinacionSiembra: 'Siembra D',
        },
    ];

    // Función para mostrar los detalles del tanque correspondiente
    const showDetails = (record) => {
        // Extraer loteID del campo 'lote', por ejemplo, 'L-GIV-001' -> 'L-001'
        const loteID = record.lote.replace(/-GIV|-GPA|-IND/, '');
        // Buscar el tanque correspondiente en tankData
        const tank = tankData.find(t => t.lote === loteID);
        if (tank) {
            setSelectedTank(tank);
            console.log('Tank:', tank);
            setIsModalVisible(true);
        } else {
            // Manejar el caso donde no se encuentra un tanque correspondiente
            Modal.error({
                title: 'Error',
                content: 'No se encontró información de tanque para este lote.',
            });
        }
    };

    const handleCancel = () => setIsModalVisible(false);

    // Datos de las tablas
    const dataGIV = [
        { key: "1", lote: "L-GIV-001", fecha: "2024-06-01", tanque: "Tanque 1", estado: "Asignado" },
        { key: "2", lote: "L-GIV-002", fecha: "2024-06-05", tanque: "Tanque 2", estado: "No Coordinado" },
        { key: "3", lote: "L-GIV-003", fecha: "2024-06-10", tanque: "Tanque 3", estado: "No Coordinado" },
        { key: "4", lote: "L-GIV-004", fecha: "2024-06-15", tanque: "Tanque 4", estado: "No Coordinado" },
        { key: "5", lote: "L-GIV-005", fecha: "2024-06-20", tanque: "Tanque 5", estado: "No Coordinado" },
    ];

    const dataGPA = [
        { key: "1", lote: "L-GPA-001", fecha: "2024-07-01", tanque: "Tanque 1", estado: "Asignado" },
        { key: "2", lote: "L-GPA-002", fecha: "2024-07-05", tanque: "Tanque 2", estado: "No Coordinado" },
    ];

    const dataIND = [
        { key: "1", lote: "L-IND-001", fecha: "2024-08-01", tanque: "Tanque 1", estado: "Asignado" },
        { key: "2", lote: "L-IND-002", fecha: "2024-08-05", tanque: "Tanque 3", estado: "No Coordinado" },
    ];

    // Definición de columnas de la tabla
    const columns = [
        { title: "Lote ID", dataIndex: "lote", key: "lote" },
        { title: "Fecha", dataIndex: "fecha", key: "fecha" },
        { title: "Tanque", dataIndex: "tanque", key: "tanque" },
        { title: "Estado", dataIndex: "estado", key: "estado" },
        {
            title: "Ver",
            key: "action",
            render: (_, record) => (
                <Button type="primary" onClick={() => showDetails(record)}>
                    Ver
                </Button>
            ),
        },
    ];

    return (
        <>
            <PageHeader
                title="Planning"
                highlightText="Aqualink Laboratorio"
            />

            <Main>
                <Row gutter={25}>
                    <Col xl={12} xs={24} xxl={24} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <ProjectionKgLabs />
                        </Suspense>
                    </Col>
                    <Col xl={12} xs={24} style={{ display: 'flex' }}>
                        <Cards title="Proyecciones de Despacho de fincas GIV" size="large">
                            <div className="table-responsive">
                                <Table
                                    dataSource={dataGIV}
                                    columns={columns}
                                    pagination={{ pageSize: 5 }}
                                    bordered
                                />
                            </div>
                        </Cards>
                    </Col>
                </Row>
                <Row gutter={25}>
                    <Col xl={12} xs={24} style={{ display: 'flex' }}>
                        <Cards title="Proyecciones de Despacho fincas GPA (externos)" size="large">
                            <div className="table-responsive">
                                <Table
                                    dataSource={dataGPA}
                                    columns={columns}
                                    pagination={{ pageSize: 5 }}
                                    bordered
                                />
                            </div>
                        </Cards>
                    </Col>
                    <Col xl={12} xs={24} style={{ display: 'flex' }}>
                        <Cards title="Proyecciones de Despacho fincas IND (externos)" size="large">
                            <div className="table-responsive">
                                <Table
                                    dataSource={dataIND}
                                    columns={columns}
                                    pagination={{ pageSize: 5 }}
                                    bordered
                                />
                            </div>
                        </Cards>
                    </Col>
                </Row>

                {/* Modal para detalles del tanque */}
                <Modal
                    title="Detalles del Tanque"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null} // Eliminamos el footer por defecto para personalizarlo
                    width={400} // Ajusta el ancho según el diseño de TankCard
                >
                    {selectedTank ? (
                        <TankCardLab data={selectedTank} />
                    ) : (
                        <Typography.Text>No se encontraron detalles para este lote.</Typography.Text>
                    )}
                </Modal>
            </Main>
        </>
    );
}

export default PlanningLabs;
