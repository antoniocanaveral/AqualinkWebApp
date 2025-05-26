import React, { useState, useMemo, useRef } from 'react';
import { Row, Col, Button, Modal, Typography, Select, DatePicker } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { QRCodeSVG } from 'qrcode.react';
import moment from 'moment';
import { generatePDF } from '../../../utility/printPdf';

const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;



const initialLotesArray = [
  {
    id: 'Lote001',
    origen: {
      hatcheryName: 'Aquamax',
      htCode: 'HT-2524',
      nurseryName: 'Texcumar',
      nurseryHtCode: 'HT-2525',
      naupliiCode: 'Chicpin K1',
      plantingDate: '10/02/24',
      harvestDate: '15/08/24',
      moduleNumber: 1,
      tankPondNumber: 1,
      densityPerM3: '100.000',
    },
    farm: {
      farmName: 'ShrimpCo Manabi',
      grCode: 'GR-5247',
      growingProtocol: 'Semi Intensive',
      productionProtocol: 'TriPhasic',
      waterManagingSystem: 'RAS',
      nurseryPond: 'Ppc#2',
      plantingDate: '12/02/24',
      initialNurseryDensity: 100,
      preGrowingPond: 'Ppe#3',
      transferDate: '20/04/24',
      initialPreGrowingDensity: 45,
      finalPreGrowingPond: 'Pef#34',
      finalTransferDate: '05/06/24',
      finalPreGrowingDensity: 15,
    },
    produccion: {
      feedMillHatchery: 'SCI-R004304',
      feedMillFarm: 'SCI-R004304',
    },
    tratamiento: {
      antibioticTreatment: 'SCI-R008978',
      initialDate: '01/03/24',
      endingDate: '15/03/24',
    },
    condiciones: {
      salinityPpm: 17,
      waterSourceType: 'Brackish',
      cycleWaterUse: '1750 m3/Ha',
      co2Footprint: '0.28 KgCO2/Shrimp Kg',
    },
    cosecha: {
      harvestProcess: 'Conventional',
      harvestDate: '15/08/24',
      harvestDensity: '8 u/m2',
      harvestTimeLapse: '02:30:45',
      harvestTemperature: '-6ºC',
    },
    custodia: {
      custodyTransportTimeLapse: '02:00:00',
      custodyTransportTemperature: '-4ºC',
      plantRegistryTemperature: '-4ºC',
    },
    calidad: {
      qualityLabTest: 'Approved',
      organolepticLabTest: 'Approved',
      sulphitesLabTest: 'Approved',
      microbiologicalLabTest: 'Approved',
      chemicalLabTest: 'Approved',
    },
  },
  {
    id: 'Lote001',
    origen: {
      hatcheryName: 'Aquamax',
      htCode: 'HT-2524',
      nurseryName: 'Texcumar',
      nurseryHtCode: 'HT-2525',
      naupliiCode: 'Chicpin K1',
      plantingDate: '10/02/24',
      harvestDate: '15/08/24',
      moduleNumber: 1,
      tankPondNumber: 1,
      densityPerM3: '100.000',
    },
    farm: {
      farmName: 'ShrimpCo Manabi',
      grCode: 'GR-5247',
      growingProtocol: 'Semi Intensive',
      productionProtocol: 'TriPhasic',
      waterManagingSystem: 'RAS',
      nurseryPond: 'Ppc#2',
      plantingDate: '12/02/24',
      initialNurseryDensity: 100,
      preGrowingPond: 'Ppe#3',
      transferDate: '20/04/24',
      initialPreGrowingDensity: 45,
      finalPreGrowingPond: 'Pef#34',
      finalTransferDate: '05/06/24',
      finalPreGrowingDensity: 15,
    },
    produccion: {
      feedMillHatchery: 'SCI-R004304',
      feedMillFarm: 'SCI-R004304',
    },
    tratamiento: {
      antibioticTreatment: 'SCI-R008978',
      initialDate: '01/03/24',
      endingDate: '15/03/24',
    },
    condiciones: {
      salinityPpm: 17,
      waterSourceType: 'Brackish',
      cycleWaterUse: '1750 m3/Ha',
      co2Footprint: '0.28 KgCO2/Shrimp Kg',
    },
    cosecha: {
      harvestProcess: 'Conventional',
      harvestDate: '15/08/24',
      harvestDensity: '8 u/m2',
      harvestTimeLapse: '02:30:45',
      harvestTemperature: '-6ºC',
    },
    custodia: {
      custodyTransportTimeLapse: '02:00:00',
      custodyTransportTemperature: '-4ºC',
      plantRegistryTemperature: '-4ºC',
    },
    calidad: {
      qualityLabTest: 'Approved',
      organolepticLabTest: 'Approved',
      sulphitesLabTest: 'Approved',
      microbiologicalLabTest: 'Approved',
      chemicalLabTest: 'Approved',
    },
  },
  {
    id: 'Lote001',
    origen: {
      hatcheryName: 'Aquamax',
      htCode: 'HT-2524',
      nurseryName: 'Texcumar',
      nurseryHtCode: 'HT-2525',
      naupliiCode: 'Chicpin K1',
      plantingDate: '10/02/24',
      harvestDate: '15/08/24',
      moduleNumber: 1,
      tankPondNumber: 1,
      densityPerM3: '100.000',
    },
    farm: {
      farmName: 'ShrimpCo Manabi',
      grCode: 'GR-5247',
      growingProtocol: 'Semi Intensive',
      productionProtocol: 'TriPhasic',
      waterManagingSystem: 'RAS',
      nurseryPond: 'Ppc#2',
      plantingDate: '12/02/24',
      initialNurseryDensity: 100,
      preGrowingPond: 'Ppe#3',
      transferDate: '20/04/24',
      initialPreGrowingDensity: 45,
      finalPreGrowingPond: 'Pef#34',
      finalTransferDate: '05/06/24',
      finalPreGrowingDensity: 15,
    },
    produccion: {
      feedMillHatchery: 'SCI-R004304',
      feedMillFarm: 'SCI-R004304',
    },
    tratamiento: {
      antibioticTreatment: 'SCI-R008978',
      initialDate: '01/03/24',
      endingDate: '15/03/24',
    },
    condiciones: {
      salinityPpm: 17,
      waterSourceType: 'Brackish',
      cycleWaterUse: '1750 m3/Ha',
      co2Footprint: '0.28 KgCO2/Shrimp Kg',
    },
    cosecha: {
      harvestProcess: 'Conventional',
      harvestDate: '15/08/24',
      harvestDensity: '8 u/m2',
      harvestTimeLapse: '02:30:45',
      harvestTemperature: '-6ºC',
    },
    custodia: {
      custodyTransportTimeLapse: '02:00:00',
      custodyTransportTemperature: '-4ºC',
      plantRegistryTemperature: '-4ºC',
    },
    calidad: {
      qualityLabTest: 'Approved',
      organolepticLabTest: 'Approved',
      sulphitesLabTest: 'Approved',
      microbiologicalLabTest: 'Approved',
      chemicalLabTest: 'Approved',
    },
  },
  {
    id: 'Lote001',
    origen: {
      hatcheryName: 'Aquamax',
      htCode: 'HT-2524',
      nurseryName: 'Texcumar',
      nurseryHtCode: 'HT-2525',
      naupliiCode: 'Chicpin K1',
      plantingDate: '10/02/24',
      harvestDate: '15/08/24',
      moduleNumber: 1,
      tankPondNumber: 1,
      densityPerM3: '100.000',
    },
    farm: {
      farmName: 'ShrimpCo Manabi',
      grCode: 'GR-5247',
      growingProtocol: 'Semi Intensive',
      productionProtocol: 'TriPhasic',
      waterManagingSystem: 'RAS',
      nurseryPond: 'Ppc#2',
      plantingDate: '12/02/24',
      initialNurseryDensity: 100,
      preGrowingPond: 'Ppe#3',
      transferDate: '20/04/24',
      initialPreGrowingDensity: 45,
      finalPreGrowingPond: 'Pef#34',
      finalTransferDate: '05/06/24',
      finalPreGrowingDensity: 15,
    },
    produccion: {
      feedMillHatchery: 'SCI-R004304',
      feedMillFarm: 'SCI-R004304',
    },
    tratamiento: {
      antibioticTreatment: 'SCI-R008978',
      initialDate: '01/03/24',
      endingDate: '15/03/24',
    },
    condiciones: {
      salinityPpm: 17,
      waterSourceType: 'Brackish',
      cycleWaterUse: '1750 m3/Ha',
      co2Footprint: '0.28 KgCO2/Shrimp Kg',
    },
    cosecha: {
      harvestProcess: 'Conventional',
      harvestDate: '15/08/24',
      harvestDensity: '8 u/m2',
      harvestTimeLapse: '02:30:45',
      harvestTemperature: '-6ºC',
    },
    custodia: {
      custodyTransportTimeLapse: '02:00:00',
      custodyTransportTemperature: '-4ºC',
      plantRegistryTemperature: '-4ºC',
    },
    calidad: {
      qualityLabTest: 'Approved',
      organolepticLabTest: 'Approved',
      sulphitesLabTest: 'Approved',
      microbiologicalLabTest: 'Approved',
      chemicalLabTest: 'Approved',
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
      <PageHeader highlightText="AquaLink Tracking" title="" />
      <Main>
        <div style={{ marginBottom: 20 }}>
          <Row gutter={16}>
            {/* 1) SELECT CLIENTE (FINCA) */}
            <Col>
              <Select
                style={{ width: 200 }}
                placeholder="Seleccione Proveedor"
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

              {/* Origen */}
              <Title level={4}>Origen del Lote</Title>
              <Row gutter={16}>
                <Col span={12}><Text><strong>Hatchery:</strong> {selectedLote.origen.hatcheryName}</Text></Col>
                <Col span={12}><Text><strong>HT Code:</strong> {selectedLote.origen.htCode}</Text></Col>
                <Col span={12}><Text><strong>Nursery Name:</strong> {selectedLote.origen.nurseryName}</Text></Col>
                <Col span={12}><Text><strong>Nursery HT Code:</strong> {selectedLote.origen.nurseryHtCode}</Text></Col>
                <Col span={12}><Text><strong>Nauplii Code:</strong> {selectedLote.origen.naupliiCode}</Text></Col>
                <Col span={12}><Text><strong>Planting Date:</strong> {selectedLote.origen.plantingDate}</Text></Col>
                <Col span={12}><Text><strong>Harvest Date:</strong> {selectedLote.origen.harvestDate}</Text></Col>
              </Row>

              {/* Farm */}
              <Title level={4}>Finca</Title>
              <Row gutter={16}>
                <Col span={12}><Text><strong>Finca:</strong> {selectedLote.farm.farmName}</Text></Col>
                <Col span={12}><Text><strong>GR Code:</strong> {selectedLote.farm.grCode}</Text></Col>
                <Col span={12}><Text><strong>Growing Protocol:</strong> {selectedLote.farm.growingProtocol}</Text></Col>
                <Col span={12}><Text><strong>Production Protocol:</strong> {selectedLote.farm.productionProtocol}</Text></Col>
                <Col span={12}><Text><strong>Water System:</strong> {selectedLote.farm.waterManagingSystem}</Text></Col>
              </Row>

              {/* Producción */}
              <Title level={4}>Producción</Title>
              <Row gutter={16}>
                <Col span={12}><Text><strong>Feed Mill Hatchery:</strong> {selectedLote.produccion.feedMillHatchery}</Text></Col>
                <Col span={12}><Text><strong>Feed Mill Farm:</strong> {selectedLote.produccion.feedMillFarm}</Text></Col>
              </Row>

              {/* Tratamiento */}
              <Title level={4}>Tratamiento</Title>
              <Row gutter={16}>
                <Col span={12}><Text><strong>Antibiotic Treatment:</strong> {selectedLote.tratamiento.antibioticTreatment}</Text></Col>
                <Col span={12}><Text><strong>Initial Date:</strong> {selectedLote.tratamiento.initialDate}</Text></Col>
                <Col span={12}><Text><strong>Ending Date:</strong> {selectedLote.tratamiento.endingDate}</Text></Col>
              </Row>

              {/* Condiciones */}
              <Title level={4}>Condiciones</Title>
              <Row gutter={16}>
                <Col span={12}><Text><strong>Salinity (ppm):</strong> {selectedLote.condiciones.salinityPpm}</Text></Col>
                <Col span={12}><Text><strong>Water Source Type:</strong> {selectedLote.condiciones.waterSourceType}</Text></Col>
                <Col span={12}><Text><strong>Cycle Water Use:</strong> {selectedLote.condiciones.cycleWaterUse}</Text></Col>
                <Col span={12}><Text><strong>CO2 Footprint:</strong> {selectedLote.condiciones.co2Footprint}</Text></Col>
              </Row>

              {/* Cosecha */}
              <Title level={4}>Cosecha</Title>
              <Row gutter={16}>
                <Col span={12}><Text><strong>Harvest Process:</strong> {selectedLote.cosecha.harvestProcess}</Text></Col>
                <Col span={12}><Text><strong>Harvest Date:</strong> {selectedLote.cosecha.harvestDate}</Text></Col>
                <Col span={12}><Text><strong>Harvest Density:</strong> {selectedLote.cosecha.harvestDensity}</Text></Col>
                <Col span={12}><Text><strong>Harvest Time Lapse:</strong> {selectedLote.cosecha.harvestTimeLapse}</Text></Col>
                <Col span={12}><Text><strong>Harvest Temperature:</strong> {selectedLote.cosecha.harvestTemperature}</Text></Col>
              </Row>

              {/* Custodia */}
              <Title level={4}>Custodia</Title>
              <Row gutter={16}>
                <Col span={12}><Text><strong>Transport Time Lapse:</strong> {selectedLote.custodia.custodyTransportTimeLapse}</Text></Col>
                <Col span={12}><Text><strong>Transport Temperature:</strong> {selectedLote.custodia.custodyTransportTemperature}</Text></Col>
                <Col span={12}><Text><strong>Plant Registry Temperature:</strong> {selectedLote.custodia.plantRegistryTemperature}</Text></Col>
              </Row>
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
                size={108}
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
