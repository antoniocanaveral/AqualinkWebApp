import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Row, Col, Button, Modal, Typography, Select, DatePicker } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { QRCodeSVG } from 'qrcode.react';
import moment from 'moment';
import { generatePDF } from '../../../utility/printPdf';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTraceabilityReports } from '../../../redux/traceability/actionCreator';
import Cookies from 'js-cookie';
import { fetchLabanalysis } from '../../../redux/labanalysis/actionCreator';
import { generateBlobPDF } from '../../../utility/generateBlobPDF';
import LoteDetails from '../../AQx-Custody/traceability/LoteDetails';

const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

// ---------------------- DATOS DE EJEMPLO ---------------------- //

function TraceabilityLotesMonitoring() {
  const reportRef = useRef();
  const [orientation, setOrientation] = useState('portrait');
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [selectedProveedor, setSelectedProveedor] = useState(null);
  const [dateRange, setDateRange] = useState([]); // [startMoment, endMoment]
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLote, setSelectedLote] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);

  const dispatch = useDispatch();
  const { traceabilityReports, loading, error } = useSelector(state => state.traceabilityReport);
  const { labanalysisList } = useSelector((state) => state.labanalysis);

  useEffect(() => {
    dispatch(fetchTraceabilityReports());
    dispatch(fetchLabanalysis());
  }, [dispatch, selectedOrg]);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.remove('poolId');
  };

  const orgToAudit = useSelector((state) => state.auth.orgToAudit) || [];
  const activeOrgs = [orgToAudit];

  const farmsSelectOptions = activeOrgs.length > 0
    ? [
      {
        options: activeOrgs.map(org => ({
          value: org.orgId,
          label: org.orgName,
          email: org.orgEmail,
        })),
        onChange: handleOrgChange,
        placeholder: 'Seleccione una Farm',
        value: selectedOrg || undefined,
      },
    ]
    : [];

  const combinedSelectOptions = [
    ...farmsSelectOptions,
  ];

  // Lista de clientes (Finca) basada en organization_name
  const listaClientes = useMemo(() => {
    const setFincas = new Set();
    if (traceabilityReports && Array.isArray(traceabilityReports)) {
      traceabilityReports.forEach((l) => {
        setFincas.add(l.organization_name || 'N/A');
      });
    }
    return ['Todos', ...Array.from(setFincas)];
  }, [traceabilityReports]);

  // Lista de proveedores (Hatchery) basada en bp_org_name
  const listaProveedores = useMemo(() => {
    if (!selectedCliente || selectedCliente === 'Todos') return [];
    const setProveedores = new Set();
    if (traceabilityReports && Array.isArray(traceabilityReports)) {
      traceabilityReports
        .filter((l) => l.organization_name === selectedCliente)
        .forEach((l) => {
          setProveedores.add(l.bp_org_name || 'N/A');
        });
    }
    return Array.from(setProveedores);
  }, [traceabilityReports, selectedCliente]);

  // Filtrado de lotes basado en las selecciones y rango de fechas (usamos lote_plantingdate)
  const filteredLotes = useMemo(() => {
    let result = traceabilityReports ? [...traceabilityReports] : [];
    if (selectedCliente && selectedCliente !== 'Todos') {
      result = result.filter((l) => l.organization_name === selectedCliente);
    }
    if (selectedProveedor && selectedProveedor !== 'Todos') {
      result = result.filter((l) => l.bp_org_name === selectedProveedor);
    }
    if (dateRange.length === 2) {
      const [start, end] = dateRange;
      result = result.filter((l) => {
        return moment(l.lote_plantingdate).isBetween(start, end, 'day', '[]');
      });
    }
    return result;
  }, [traceabilityReports, selectedCliente, selectedProveedor, dateRange]);

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
    const element = reportRef.current;
    generatePDF(element, orientation, 'reporte-coordinacion.pdf');
  };
  const handlePrintReport = async () => {
    const element = reportRef.current;
    if (!element) return;
    // Genera el PDF y obtiene el blob URL
    const pdfUrl = await generateBlobPDF(element, orientation);
    // Abre el PDF en una nueva ventana o pestaña
    const printWindow = window.open(pdfUrl, '_blank');
    // Cuando la ventana cargue, dispara la impresión
    printWindow.onload = function () {
      printWindow.focus();
      printWindow.print();
    };
  };


  return (
    <>
      <PageHeader
        highlightText="AquaLink Tracking"
        title=""
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
      />
      <Main>
        <div style={{ marginBottom: 20 }}>
          <Row gutter={16}>
            {/* SELECT CLIENTE (Finca) */}


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
              lg={8}
              xl={8}
            >
              <Button
                block
                onClick={() => showModalDetail(lote)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: '100px',
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  padding: '10px 15px',
                  textAlign: 'left',
                  transition: 'all 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ flex: '0 0 40px', marginRight: '15px' }}>
                  <img
                    src={require('../../../../public/logo.svg').default}
                    alt="logo"
                    style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#1890ff' }}>
                    {lote.SM_Batch}
                  </div>
                  <div style={{ fontSize: '12px', color: '#555' }}>
                    <strong>{lote.organization_name}</strong>
                  </div>
                </div>
              </Button>

            </Col>
          ))}
        </Row>
      </Main>

      <Modal
        title={``}
        visible={isModalVisible}
        onOk={handleDetailOk}
        onCancel={handleDetailCancel}
        width={1100}
        footer={[
          <>
            <Button key="print" onClick={handlePrintReport}>
              Imprimir Reporte
            </Button>
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
          <div
            ref={reportRef}
            style={{
              border: '2px solid #e3e3e3',
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column', // <--- Cambia a columna
              gap: '20px',
            }}
          >
            {/* Primera fila: LoteDetails + QR */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 60%', minWidth: '300px' }}>
                <LoteDetails selectedLote={selectedLote} />
              </div>
              <div style={{ flex: '1 1 35%', minWidth: '200px' }}>
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
                  {selectedLote.SM_Batch}
                </Title>
                <QRCodeSVG
                  value={JSON.stringify({
                    id: selectedLote.id,
                    analisis: {
                      quality: selectedLote.quality_test || 'N/A',
                      organoleptic: selectedLote.organoleptic_test || 'N/A',
                    },
                    custodia: {
                      transportTime: selectedLote.custody_transport_time || 'N/A',
                      transportTemp: selectedLote.custody_transport_temperature || 'N/A',
                    },
                    origen: {
                      hatchery: selectedLote.bp_org_name || 'N/A',
                      broodstock: selectedLote.lote_org_name || 'N/A',
                    },
                  })}
                  size={358}
                  includeMargin
                />
              </div>
            </div>

            {/* Segunda fila: sección extra de 3 columnas usando TODO el ancho */}
            <div style={{ width: '100%' }}>
              <LoteDetails selectedLote={selectedLote} fromSection="SPECIES HEALTH & WELLFARE" />
            </div>
          </div>
        )}

      </Modal>
    </>
  );
}

export default TraceabilityLotesMonitoring;