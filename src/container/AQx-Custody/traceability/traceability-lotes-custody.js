import React, { useState, useMemo, useRef } from 'react';
import { Row, Col, Button, Modal, Typography, Select, DatePicker } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { QRCodeSVG } from 'qrcode.react';
import { CheckOutlined } from '@ant-design/icons';
import moment from 'moment';
import { generatePDF } from '../../../utility/printPdf';

const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

// ---------------------- DATOS DE EJEMPLO ---------------------- //
const initialLotesArray = [
  {
    id: 'Lote001',
    origen: {
      fincaCodigo: 'GR-123',
      fincaNombre: 'Finca Río Verde',
      inicioEngorde: '2024-01-03',
      inicioPreCria: '2024-02-15',
      laboratorioCodigo: 'HT-111',
      laboratorioNombre: 'Laboratorio Alpha',
      codigoLoteLab: 'LAB-9000',
      nauplioNombre: 'Nauplio Sur',
    },
    custodia: {
      tempLlegada: '-4ºC',
      tempSalida: '-6ºC',
      horaIngreso: '2024-11-10',
      horaSalida: '08h30',
    },
    analisis: {
      organoleptico: 'Aprobado',
      sulfitos: 'Aprobado',
      quimico: 'Aprobado',
      microbilogico: 'Aprobado',
    },
  },
  {
    id: 'Lote002',
    origen: {
      fincaCodigo: 'GR-456',
      fincaNombre: 'Finca Río Verde',
      inicioEngorde: '2024-03-20',
      inicioPreCria: '2024-04-10',
      laboratorioCodigo: 'HT-222',
      laboratorioNombre: 'Laboratorio Beta',
      codigoLoteLab: 'LAB-1234',
      nauplioNombre: 'Nauplio Centro',
    },
    custodia: {
      tempLlegada: '-3ºC',
      tempSalida: '-6ºC',
      horaIngreso: '2024-11-12',
      horaSalida: '06h30',
    },
    analisis: {
      organoleptico: 'Aprobado',
      sulfitos: 'Aprobado',
      quimico: 'Aprobado',
      microbilogico: 'Aprobado',
    },
  },
  {
    id: 'Lote003',
    origen: {
      fincaCodigo: 'GR-999',
      fincaNombre: 'Finca Las Orquídeas',
      inicioEngorde: '2024-05-01',
      inicioPreCria: '2024-05-20',
      laboratorioCodigo: 'HT-111',
      laboratorioNombre: 'Laboratorio Alpha',
      codigoLoteLab: 'LAB-5555',
      nauplioNombre: 'Nauplio Norte',
    },
    custodia: {
      tempLlegada: '-2ºC',
      tempSalida: '-4ºC',
      horaIngreso: '2024-12-01',
      horaSalida: '07h00',
    },
    analisis: {
      organoleptico: 'Aprobado',
      sulfitos: 'Aprobado',
      quimico: 'Aprobado',
      microbilogico: 'Aprobado',
    },
  },
  {
    id: 'Lote004',
    origen: {
      fincaCodigo: 'GR-777',
      fincaNombre: 'Finca Las Orquídeas',
      inicioEngorde: '2024-07-01',
      inicioPreCria: '2024-08-15',
      laboratorioCodigo: 'HT-333',
      laboratorioNombre: 'Laboratorio Gamma',
      codigoLoteLab: 'LAB-4444',
      nauplioNombre: 'Nauplio Este',
    },
    custodia: {
      tempLlegada: '-5ºC',
      tempSalida: '-8ºC',
      horaIngreso: '2024-12-05',
      horaSalida: '09h45',
    },
    analisis: {
      organoleptico: 'Aprobado',
      sulfitos: 'Aprobado',
      quimico: 'Aprobado',
      microbilogico: 'Aprobado',
    },
  },
];

function TraceabilityLotesCustody() {
  const reportRef = useRef(); 
  const [orientation, setOrientation] = useState('portrait');  
  const [allLotes] = useState(initialLotesArray);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [selectedProveedor, setSelectedProveedor] = useState(null);
  const [dateRange, setDateRange] = useState([]); // [startMoment, endMoment]
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLote, setSelectedLote] = useState(null);

  const listaClientes = useMemo(() => {
    const setFincas = new Set();
    allLotes.forEach((l) => {
      setFincas.add(l.origen.fincaNombre);
    });
    return ['Todos', ...Array.from(setFincas)];
  }, [allLotes]);

  const listaProveedores = useMemo(() => {
    if (!selectedCliente || selectedCliente === 'Todos') return [];

    const setProveedores = new Set();
    allLotes
      .filter((l) => l.origen.fincaNombre === selectedCliente)
      .forEach((l) => {
        setProveedores.add(l.origen.laboratorioNombre);
      });
    return Array.from(setProveedores);
  }, [allLotes, selectedCliente]);

  const filteredLotes = useMemo(() => {
    let result = [...allLotes];

    if (selectedCliente && selectedCliente !== 'Todos') {
      result = result.filter(
        (l) => l.origen.fincaNombre === selectedCliente
      );
    }

    if (
      selectedCliente &&
      selectedCliente !== 'Todos' &&
      selectedProveedor
    ) {
      result = result.filter(
        (l) => l.origen.laboratorioNombre === selectedProveedor
      );
    }

    if (dateRange.length === 2) {
      const [start, end] = dateRange; // Son objetos moment
      result = result.filter((l) => {
        const loteFecha = moment(l.custodia.horaIngreso, 'YYYY-MM-DD');
        return (
          loteFecha.isSameOrAfter(start, 'day') &&
          loteFecha.isSameOrBefore(end, 'day')
        );
      });
    }

    return result;
  }, [allLotes, selectedCliente, selectedProveedor, dateRange]);

  const handleSelectCliente = (value) => {
    setSelectedCliente(value);
    setSelectedProveedor(null); // Reset al cambiar de cliente
  };

  const handleSelectProveedor = (value) => {
    setSelectedProveedor(value);
  };

  const handleDateChange = (dates) => {
    if (!dates || dates.length === 0) {
      setDateRange([]);
    } else {
      setDateRange(dates);
    }
  };

  const showModalDetail = (lote) => {
    setSelectedLote(lote);
    setIsModalVisible(true);
  };

  const handleDetailOk = () => {
    setIsModalVisible(false);
    setSelectedLote(null);
  };

  const handleDetailCancel = () => {
    setIsModalVisible(false);
    setSelectedLote(null);
  };


  const handleGeneratePDF = () => {
    const element = reportRef.current; // Referencia al contenido del reporte
    generatePDF(element, orientation, 'reporte-coordinacion.pdf');
  };

  return (
    <>
      <PageHeader highlightText="AquaLink Empacadora" title="Tracking" />
      <Main>
        <div style={{ marginBottom: 20 }}>
          <Row gutter={16}>
            {/* 1) SELECT CLIENTE (FINCA) */}
            <Col>
              <Select
                style={{ width: 200 }}
                placeholder="Seleccione Cliente"
                value={selectedCliente || undefined}
                onChange={handleSelectCliente}
                allowClear
              >
                {listaClientes.map((cliente) => (
                  <Option key={cliente} value={cliente}>
                    {cliente}
                  </Option>
                ))}
              </Select>
            </Col>

            <Col>
              <Select
                style={{ width: 200 }}
                placeholder="Seleccione Proveedor"
                value={selectedProveedor || undefined}
                onChange={handleSelectProveedor}
                disabled={!selectedCliente || selectedCliente === 'Todos'}
                allowClear
              >
                {listaProveedores.map((prov) => (
                  <Option key={prov} value={prov}>
                    {prov}
                  </Option>
                ))}
              </Select>
            </Col>

            <Col>
              <RangePicker
                onChange={handleDateChange}
                format="YYYY-MM-DD"
              />
            </Col>
          </Row>
        </div>

        <Row gutter={[25, 25]}>
          {filteredLotes.map((lote) => (
            <Col
              key={lote.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={6}
            >
              <Button
                block
                onClick={() => showModalDetail(lote)}
                style={{
                  height: '100px',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  border: '1px solid #1890ff',
                  color: '#000', // Letra negra
                  borderRadius: '5px',
                  fontWeight: '500',
                }}
              >
                {lote.id}
                <div style={{ fontSize: '12px', marginTop: 4 }}>
                  <strong>{lote.origen.fincaNombre}</strong> <br />
                  {lote.origen.laboratorioNombre}
                </div>
              </Button>
            </Col>
          ))}
        </Row>
      </Main>

      <Modal
        title={`Detalles del Lote: ${selectedLote?.id}`}
        visible={isModalVisible}
        onOk={handleDetailOk}
        onCancel={handleDetailCancel}
        width={800}
        footer={[
          <>
            <Button key="pdf" type="primary" onClick={handleGeneratePDF}>
              Generar PDF
            </Button>
            <Button key="close" type="primary" onClick={handleDetailOk}>
              Cerrar
            </Button>
          </>
        ]}
      >
        {selectedLote && (
          <div ref={reportRef}
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
            <div style={{ flex: '1 1 60%', minWidth: '300px' }}>
              {/* Origen del Lote */}
              <div>
                <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#2196F3',
                      borderRadius: '50%',
                      marginRight: '8px',
                    }}
                  />
                  Origen de Lote
                </Title>
                <Row gutter={16}>
                  <Col span={12}>
                    <Text>
                      <strong>Finca:</strong>
                      <br /> {selectedLote.origen.fincaCodigo}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Nombre de la Finca:</strong>
                      <br /> {selectedLote.origen.fincaNombre}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Inicio Engorde:</strong> <br />
                      {selectedLote.origen.inicioEngorde}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Inicio Pre Cría:</strong> <br />
                      {selectedLote.origen.inicioPreCria}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Laboratorio:</strong>
                      <br /> {selectedLote.origen.laboratorioCodigo}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Nombre del Laboratorio:</strong>
                      <br />
                      {selectedLote.origen.laboratorioNombre}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Código Lote Lab:</strong> <br />
                      {selectedLote.origen.codigoLoteLab}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Nauplio:</strong> <br />
                      {selectedLote.origen.nauplioNombre}
                    </Text>
                  </Col>
                </Row>
              </div>

              {/* Custodia */}
              <div style={{ marginBottom: '20px' }}>
                <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#2196F3',
                      borderRadius: '50%',
                      marginRight: '8px',
                    }}
                  />
                  Custodia
                </Title>
                <Row gutter={16}>
                  <Col span={12}>
                    <Text>
                      <strong>Temperatura salida de finca:</strong> <br />
                      {selectedLote.custodia.tempSalida}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Temperatura llegada a planta:</strong> <br />
                      {selectedLote.custodia.tempLlegada}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Hora de salida de finca:</strong> <br />
                      {selectedLote.custodia.horaSalida}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Hora de ingreso a planta:</strong> <br />
                      {selectedLote.custodia.horaIngreso}
                    </Text>
                  </Col>
                  <Col span={12}>
                    <Text>
                      <strong>Fecha de Pesca:</strong> <br />
                      {selectedLote.custodia.horaIngreso}
                    </Text>
                  </Col>
                </Row>
              </div>

              {/* Análisis de Laboratorio */}
              <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#2196F3',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                />
                Análisis de Laboratorio
              </Title>
              <div style={{ marginBottom: '20px' }}>
                <Row gutter={16}>
                  {/* Organoléptico */}
                  <Col span={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Text>
                        <strong>Organoléptico:</strong>
                      </Text>
                      {selectedLote.analisis.organoleptico === 'Aprobado' && (
                        <CheckOutlined style={{ color: '#1890ff', marginLeft: 8 }} />
                      )}
                    </div>
                  </Col>
                  {/* Sulfitos */}
                  <Col span={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Text>
                        <strong>Sulfitos:</strong>
                      </Text>
                      {selectedLote.analisis.sulfitos === 'Aprobado' && (
                        <CheckOutlined style={{ color: '#1890ff', marginLeft: 8 }} />
                      )}
                    </div>
                  </Col>
                  {/* Químico */}
                  <Col span={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Text>
                        <strong>Químico:</strong>
                      </Text>
                      {selectedLote.analisis.quimico === 'Aprobado' && (
                        <CheckOutlined style={{ color: '#1890ff', marginLeft: 8 }} />
                      )}
                    </div>
                  </Col>
                  {/* Microbiológico */}
                  <Col span={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Text>
                        <strong>Microbiológico:</strong>
                      </Text>
                      {selectedLote.analisis.microbilogico === 'Aprobado' && (
                        <CheckOutlined style={{ color: '#1890ff', marginLeft: 8 }} />
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            {/* Columna Derecha: Código QR */}
            <div>
              <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#2196F3',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                />
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
                includeMargin
              />
            </div>
          </div>
        )}
      </Modal >
    </>
  );
}

export default TraceabilityLotesCustody;
