import React, { useState } from 'react';
import { Row, Col, Button, Modal, Typography } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { QRCodeSVG } from 'qrcode.react';

const { Title, Text } = Typography;

// Datos simulados de los lotes
const lotesArray = Array.from({ length: 20 }, (_, i) => ({
    id: `EC-0027-05-2022-5264-A23${i}X${i}`,
    analisis: {
        organoleptico: 'Aprobado',
        sulfitos: 'Aprobado',
        quimico: 'Aprobado',
        microbilogico: 'Aprobado',
    },
    custodia: {
        tempLlegada: '-4ºC',
        tempSalida: '-6ºC',
        horaIngreso: '11h30',
        horaSalida: '08h30',
    },
    origen: {
        fincaCodigo: 'GR-123',
        fincaNombre: 'Finca El Porvenir',
        inicioEngorde: '01/03/2022',
        inicioPreCria: '15/02/2022',
        laboratorioCodigo: 'HT-456',
        laboratorioNombre: 'Laboratorio Central',
        codigoLoteLab: `LAB-${Math.floor(Math.random() * 10000)}`,
        nauplioNombre: 'Nauplio Central',
    },
}));

function TraceabilityLotesCustody() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedLote, setSelectedLote] = useState(null);

    const showModal = (lote) => {
        setSelectedLote(lote);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setSelectedLote(null);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedLote(null);
    };

    return (
        <>
            <PageHeader
                highlightText="AquaLink Empacadora"
                title="Tracking"
            />
            <Main>
                <Row gutter={[25, 25]}>
                    {lotesArray.map((lote) => (
                        <Col
                            key={lote.id}
                            xs={24} sm={12} md={8} lg={6} xl={6}
                        >
                            <Button
                                type="primary"
                                block
                                onClick={() => showModal(lote)}
                                style={{ height: '100px', textAlign: 'center' }}
                            >
                                {lote.id}
                            </Button>
                        </Col>
                    ))}
                </Row>
            </Main>

            {/* Modal para mostrar detalles del lote */}
            <Modal
                title={`Detalles del Lote: ${selectedLote?.id}`}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
                footer={[
                    <Button key="close" type="primary" onClick={handleOk}>
                        Cerrar
                    </Button>,
                ]}
            >
                {selectedLote && (
                    <div
                        style={{
                            border: '2px solid #e3e3e3',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '20px',
                            flexWrap: 'wrap',
                        }}
                    >
                        {/* Columna Izquierda: Información */}
                        <div style={{ flex: '1 1 60%', minWidth: '300px' }}>
                            {/* Análisis de Laboratorio */}
                            <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '10px',
                                    height: '10px',
                                    backgroundColor: '#2196F3',
                                    borderRadius: '50%',
                                    marginRight: '8px',
                                }} />
                                Análisis de Laboratorio
                            </Title>
                            <div style={{ marginBottom: '20px' }}>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <div className='flex-row'>
                                            <Text><strong>Organoléptico:</strong> </Text>
                                            <span className='ninjadash-status-completed' > {selectedLote.analisis.organoleptico} </span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className='flex-row'>
                                            <Text><strong>Sulfitos:</strong> </Text>
                                            <span className='ninjadash-status-completed' > {selectedLote.analisis.sulfitos} </span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className='flex-row'>
                                            <Text><strong>Químico:</strong> </Text>
                                            <span className='ninjadash-status-completed' > {selectedLote.analisis.quimico} </span>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className='flex-row'>
                                            <Text><strong>Microbiológico:</strong> </Text>
                                            <span className='ninjadash-status-completed' > {selectedLote.analisis.microbilogico} </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* Custodia */}
                            <div style={{ marginBottom: '20px' }}>
                                <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        width: '10px',
                                        height: '10px',
                                        backgroundColor: '#2196F3',
                                        borderRadius: '50%',
                                        marginRight: '8px',
                                    }} />
                                    Custodia
                                </Title>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Text><strong>Temperatura llegada a planta</strong> <br />
                                            {selectedLote.custodia.tempLlegada}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Temperatura salida de finca</strong>  <br />
                                            {selectedLote.custodia.tempSalida}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Hora de ingreso a planta</strong> <br />
                                            {selectedLote.custodia.horaIngreso}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Hora de salida de finca</strong> <br />
                                            {selectedLote.custodia.horaSalida}</Text>
                                    </Col>
                                </Row>
                            </div>

                            {/* Origen del Lote */}
                            <div>
                                <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        width: '10px',
                                        height: '10px',
                                        backgroundColor: '#2196F3',
                                        borderRadius: '50%',
                                        marginRight: '8px',
                                    }} />
                                    Origen de Lote
                                </Title>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Text><strong>Finca </strong> <br /> {selectedLote.origen.fincaCodigo}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Nombre de la Finca:</strong><br /> {selectedLote.origen.fincaNombre}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Inicio Engorde:</strong> <br />{selectedLote.origen.inicioEngorde}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Inicio Pre Cría:</strong> <br />{selectedLote.origen.inicioPreCria}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Laboratorio </strong> <br /> {selectedLote.origen.laboratorioCodigo}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Nombre del Laboratorio:</strong> <br /> {selectedLote.origen.laboratorioNombre}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Código Lote Lab:</strong> <br /> {selectedLote.origen.codigoLoteLab}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text><strong>Nauplio:</strong> <br /> {selectedLote.origen.nauplioNombre}</Text>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        {/* Columna Derecha: Código QR */}
                        <div >
                            <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '10px',
                                    height: '10px',
                                    backgroundColor: '#2196F3',
                                    borderRadius: '50%',
                                    marginRight: '8px',
                                }} />
                                QR
                            </Title>
                            <QRCodeSVG
                                value={JSON.stringify({
                                    id: selectedLote.id,
                                    analisis: selectedLote.analisis,
                                    custodia: selectedLote.custodia,
                                    origen: selectedLote.origen,
                                })}
                                size={228}
                                includeMargin={true}
                            />
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}

export default TraceabilityLotesCustody;
