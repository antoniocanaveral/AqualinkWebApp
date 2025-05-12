import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Row, Col, Button, Modal, Typography, Select, DatePicker } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { QRCodeSVG } from 'qrcode.react';
import moment from 'moment';
import { generatePDF } from '../../../utility/printPdf';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTraceabilityReports, fetchTraceabilityReportsCustody } from '../../../redux/traceability/actionCreator';
import Cookies from 'js-cookie';
import { fetchLabanalysis } from '../../../redux/labanalysis/actionCreator';
import LoteDetails from './LoteDetails';
import { generateBlobPDF } from '../../../utility/generateBlobPDF';

const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;



function TraceabilityLotesCustody() {
  const reportRef = useRef();
  const [orientation, setOrientation] = useState('landscape');
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
    dispatch(fetchTraceabilityReportsCustody());
    dispatch(fetchLabanalysis());
  }, [dispatch, selectedOrg]);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.remove('poolId');
  };

  const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);

  const farmsSelectOptions = custodyOrgs.length > 0
    ? [
      {
        options: custodyOrgs.map(org => ({
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


  const listaClientes = useMemo(() => {
    const setFincas = new Set();
    if (traceabilityReports && Array.isArray(traceabilityReports)) {
      traceabilityReports.forEach((l) => {
        setFincas.add(l.sm_mainorgname || 'N/A');
      });
    }
    return ['Todos', ...Array.from(setFincas)];
  }, [traceabilityReports]);




  const filteredLotes = useMemo(() => {
    let result = traceabilityReports ? [...traceabilityReports] : [];
    if (selectedCliente && selectedCliente !== 'Todos') {
      result = result.filter((l) => l.sm_mainorgname === selectedCliente);
    }
    if (selectedProveedor && selectedProveedor !== 'Todos') {
      result = result.filter((l) => l.sm_bpartnerorgname === selectedProveedor);
    }
    if (dateRange.length === 2) {
      const [start, end] = dateRange;
      result = result.filter((l) => {
        return moment(l.sm_loteplantingdate).isBetween(start, end, 'day', '[]');
      });
    }
    return result;
  }, [traceabilityReports, selectedCliente, selectedProveedor, dateRange]);

  const handleSelectCliente = (value) => {
    setSelectedCliente(value);
    setSelectedProveedor(null); // Reset al cambiar de cliente
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

    const pdfUrl = await generateBlobPDF(element, orientation);

    const printWindow = window.open(pdfUrl, '_blank');

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
                    <strong>{lote.sm_mainorgname}</strong>
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
        width={1450}
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

          >
            {/* Primera fila: LoteDetails + QR */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '15px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 81%', minWidth: '300px' }}>
                <LoteDetails selectedLote={selectedLote} />
              </div>
              <div style={{ flex: '1 1 9%'}}>
                <Title style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
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
                  value={`http://69.48.179.112/aqualinkdemo/custody/traceability/reporte-lote/${selectedLote.id}`}
                  size={250}
                  includeMargin
                  level="Q"
                  imageSettings={{
                    src: `${process.env.PUBLIC_URL}/favicon.png`, 
                    height: 40,
                    width: 40, 
                    excavate: true, 
                  }}
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

export default TraceabilityLotesCustody;