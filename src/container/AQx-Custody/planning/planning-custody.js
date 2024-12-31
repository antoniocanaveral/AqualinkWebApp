// src/container/AQx-Custody/stamps-containers/planning-custody.js

import React, { Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Table, Button, Modal } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import ProjectionKgPanel from '../../AQx-Farms/panel/charts/projections-kg-panel';
import TankCard from '../panel/components/TankCard';

function PlanningCustody() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTank, setSelectedTank] = useState(null);

    // Datos de los tanques
    const tankData = [
        {
            id: 1,
            nombreCamaronera: 'El Progreso',
            codigoAQLK: 'AQLK001',
            loteID: 'L-001',
            estado: 'Confirmado',
            fechaPesca: '05 Diciembre 2023',
            piscina: 'Piscina 1',
            volumenProgramado: '1.5 M',
            tipoCosecha: 'Manual',  


            clasificacionReportada: '20-30',
        },
        {
            id: 2,
            nombreCamaronera: 'Las Palmas',
            codigoAQLK: 'AQLK002',
            loteID: 'L-002',
            estado: 'Confirmado',
            fechaPesca: '06 Diciembre 2023',
            piscina: 'Piscina 2',
            volumenProgramado: '2.0 M',
            tipoCosecha: 'Manual',  

            clasificacionReportada: '40-50',
        },
        {
            id: 3,
            nombreCamaronera: 'El Sol',
            codigoAQLK: 'AQLK003',
            loteID: 'L-003',
            estado: 'Confirmado',
            fechaPesca: '07 Diciembre 2023',
            piscina: 'Piscina 3',
            volumenProgramado: '1.2 M',
            tipoCosecha: 'Manual',  

            clasificacionReportada: '30-40',
        },
        {
            id: 4,
            nombreCamaronera: 'Azul',
            codigoAQLK: 'AQLK004',
            loteID: 'L-004',
            estado: 'Confirmado',
            fechaPesca: '08 Diciembre 2023',
            piscina: 'Piscina 4',
            volumenProgramado: '1.8 M',
            tipoCosecha: 'Manual',  

            clasificacionReportada: '80-100',
        },
    ];

    // Función para mostrar los detalles del tanque correspondiente
    const showDetails = (record) => {
        // Extraer loteID del campo 'lote', por ejemplo, 'L-GIV-001' -> 'L-001'
        const loteID = record.lote.replace(/-GIV|-GPA|-IND/, '');
        // Buscar el tanque correspondiente en tankData
        const tank = tankData.find(t => t.loteID === loteID);
        if (tank) {
            setSelectedTank(tank);
            setIsModalVisible(true);
        } else {
            // Manejar el caso donde no se encuentra un tanque correspondiente
            Modal.error({
                title: 'Error',
                content: 'No se encontró información de tanque para este lote.',
            });
        }
    };

    // Funciones para cerrar el Modal
    const handleOk = () => setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);

    // Datos de las tablas
    const dataGIV = [
        { key: "1", lote: "L-GIV-001", fecha: "2024-06-01", peso: "1,200 kg", estado: "Pendiente" },
        { key: "2", lote: "L-GIV-002", fecha: "2024-06-05", peso: "1,500 kg", estado: "Completado" },
        { key: "3", lote: "L-GIV-003", fecha: "2024-06-10", peso: "1,100 kg", estado: "En Proceso" },
        { key: "4", lote: "L-GIV-004", fecha: "2024-06-12", peso: "950 kg", estado: "Pendiente" },
    ];

    const dataGPA = [
        { key: "1", lote: "L-GPA-001", fecha: "2024-07-01", peso: "1,400 kg", estado: "Pendiente" },
        { key: "2", lote: "L-GPA-002", fecha: "2024-07-05", peso: "1,600 kg", estado: "Completado" },
        { key: "3", lote: "L-GPA-003", fecha: "2024-07-10", peso: "1,300 kg", estado: "En Proceso" },
        { key: "4", lote: "L-GPA-004", fecha: "2024-07-12", peso: "1,000 kg", estado: "Pendiente" },
    ];

    const dataIND = [
        { key: "1", lote: "L-IND-001", fecha: "2024-08-01", peso: "1,700 kg", estado: "Pendiente" },
        { key: "2", lote: "L-IND-002", fecha: "2024-08-05", peso: "1,800 kg", estado: "Completado" },
        { key: "3", lote: "L-IND-003", fecha: "2024-08-10", peso: "1,450 kg", estado: "En Proceso" },
        { key: "4", lote: "L-IND-004", fecha: "2024-08-12", peso: "1,250 kg", estado: "Pendiente" },
    ];

    // Definición de columnas de la tabla
    const columns = [
        { title: "Lote", dataIndex: "lote", key: "lote" },
        { title: "Fecha", dataIndex: "fecha", key: "fecha" },
        { title: "Peso Estimado", dataIndex: "peso", key: "peso" },
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
                highlightText="Aqualink Empacadora"
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
                            <ProjectionKgPanel />
                        </Suspense>
                    </Col>
                    <Col xl={12} xs={24} style={{ display: 'flex' }}>
                        <Cards title="Proyecciones de cosecha fincas GIV" size="large">
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
                        <Cards title="Proyecciones de cosecha fincas GPA (externos)" size="large">
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
                        <Cards title="Proyecciones de cosecha fincas IND (externos)" size="large">
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
                    title="Detalles del Lote"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null} // Eliminamos el footer por defecto para personalizarlo
                    width={350} // Ajusta el ancho según el diseño de TankCard
                >
                    {selectedTank ? (
                        <TankCard data={selectedTank} />
                    ) : (
                        <Typography.Text>No se encontraron detalles para este lote.</Typography.Text>
                    )}
                </Modal>
            </Main>
        </>
    );
}

export default PlanningCustody;
