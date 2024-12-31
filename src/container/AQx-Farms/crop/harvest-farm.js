import React, { Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Card, Modal, Input, Upload, Button } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import ProjectedSuggestedFeedingChart from '../monitoring/feeding/ProjectedSuggestedFeedingChart';
import BiomassEvolutionChart from './biomass/BiomassEvolutionChart';
import HarvestFinalYieldChart from './biomass/HarvestFinalYieldChart';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import CoordModalHarvest from './modals/CoordModalHarvest';
import HarvestModalHarvest from './modals/HarvestModalHarvest';
import PackingModalHarvest from './modals/PackingModalHarvest';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';

function HarvestFarm() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isObservationModalVisible, setIsObservationModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [updatedValue, setUpdatedValue] = useState("");
  const [updatedObservation, setUpdatedObservation] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  //Modales
  const [modalCoord, setModalCoord] = useState(false);
  const [modalHarvest, setModalHarvest] = useState(false);
  const [modalPacking, setModalPacking] = useState(false);




  const showModal = (record) => {
    setEditingRecord(record);
    setUpdatedValue(record.rendimientoPlanta);
    setIsModalVisible(true);
  };

  const showObservationModal = (record) => {
    setEditingRecord(record);
    setUpdatedObservation(record.observaciones);
    setIsObservationModalVisible(true);
  };

  const handleOk = () => {
    setEditingRecord(prev => ({ ...prev, rendimientoPlanta: updatedValue }));
    setIsModalVisible(false);
  };

  const handleObservationOk = () => {
    setEditingRecord(prev => ({ ...prev, observaciones: updatedObservation }));
    setIsObservationModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsObservationModalVisible(false);
  };

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };
  const fishingReportData = {
    tipo: "Cosecha o R",
    poblacionEstimada: "800000",
    biomasaEstimada: "45815 lbs",
    tiempoProceso: "4 horas",
    texturaPreCosecha: {
      buenos: "10",
      flacidos: "15",
      mudados: "3.77",
      clasificacion: {
        "75%": "40/50",
        "10%": "30/40",
        "15%": "50/60",
      },
    },
    texturaProceso: {
      buenos: "20",
      flacidos: "1.5",
      mudados: "4",
    },
    tempProceso: "-6°C",
    tipoPesca: "Manual ",
    binesProgramados: "40 bines",
    biomasaCosechada: "44,000 lbs",
    tempPromedio: "-6",
    binesEntregados: "38",
    date: "2023-12-05",
  };


  const historicalFishingData = [
    { pe: "100", ciclo: 1, loteId: "L001", cosechaProgramada: 1500, cosechaFinal: 1600, rendimientoPlanta: "85%", observaciones: "Sin problemas" },
    { pe: "200", ciclo: 2, loteId: "L002", cosechaProgramada: 2000, cosechaFinal: 2200, rendimientoPlanta: "90%", observaciones: "Buen rendimiento" },
    { pe: "150", ciclo: 3, loteId: "L003", cosechaProgramada: 1800, cosechaFinal: 2000, rendimientoPlanta: "88%", observaciones: "Condiciones óptimas" },
    { pe: "180", ciclo: 4, loteId: "L004", cosechaProgramada: 2400, cosechaFinal: 2500, rendimientoPlanta: "92%", observaciones: "Excelente calidad" },
  ];

  const historicalColumns = [
    { title: 'PE', dataIndex: 'pe', key: 'pe' },
    { title: 'Ciclo', dataIndex: 'ciclo', key: 'ciclo' },
    { title: 'Lote ID', dataIndex: 'loteId', key: 'loteId' },
    { title: 'V.P.', dataIndex: 'cosechaProgramada', key: 'cosechaProgramada' },
    { title: 'V.F', dataIndex: 'cosechaFinal', key: 'cosechaFinal' },
    {
      title: 'R.P.',
      dataIndex: 'rendimientoPlanta',
      key: 'rendimientoPlanta',
      render: (text, record) => (
        <span onClick={() => showModal(record)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          {text}
        </span>
      ),
    },
    {
      title: 'Observaciones',
      dataIndex: 'observaciones',
      key: 'observaciones',
      render: (text, record) => (
        <span onClick={() => showObservationModal(record)} style={{ cursor: 'pointer', display: 'flex', justifyContent: "space-between" }}>
          {text}
          <UilEye size={16} style={{ fontSize: '12px', marginLeft: '5px' }} /> {/* Ajuste de tamaño y espaciado */}
        </span>
      ),
    },
  ];

  return (
    <>
      <PageHeader highlightText={"AquaLink Monitoreo"}
        title="Cosecha"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={10} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <AqualinkMaps />
            </Suspense>
          </Col>
          <Col xl={14} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>

              <Cards title="Reporte de Pesca" size="large">
                {/* Tipo */}
                <div className="harvest-report-section">
                  <div>
                    <span className="label">Tipo: </span>
                    <span>{fishingReportData.tipo}</span>
                  </div>
                  <div>
                    <span className="label">Fecha: </span>
                    <span>{fishingReportData.date}</span>
                  </div>
                  <div className='flex-row' style={{ gap: 10 }}>
                    <span className="label">Detalles: </span>
                    <div className='flex-row'>
                      <Button onClick={() => setModalCoord(true)}>
                        Coordinación
                      </Button>

                      <Button onClick={() => setModalPacking(true)}>
                        Empacadora
                      </Button>
                    </div>


                  </div>

                </div>
                <div className="harvest-report-divider" />

                {/* Población Estimada y Biomasa Estimada */}
                <div className="harvest-report-section">
                  <span className="label">Población Estimada</span>
                  <span>{fishingReportData.poblacionEstimada}</span>
                  <span className="label">Biomasa Estimada</span>
                  <span>{fishingReportData.biomasaEstimada}</span>
                </div>
                <div className="harvest-report-divider" />

                {/* Textura Pre Cosecha */}
                <div className='flex-row'>
                  <div className="harvest-report-section-2">
                    <span className="label">Textura Pre Cosecha</span>
                    <div className='align-items'>
                      <span className="label">Buenos:</span>
                      <span>{fishingReportData.texturaPreCosecha.buenos}%</span>
                    </div>
                    <div className='align-items'>
                      <span className="label">Flácidos</span>
                      <span>{fishingReportData.texturaPreCosecha.flacidos}%</span>
                    </div>
                    <div className='align-items'>
                      <span className="label">Mudados</span>
                      <span>{fishingReportData.texturaPreCosecha.mudados}%</span>
                    </div>
                  </div>

                  <div className="harvest-report-section-2 ">
                    <span className="label">Clasificación</span>
                    {Object.entries(fishingReportData.texturaPreCosecha.clasificacion).map(([key, value], index) => (
                      <div className='align-items' key={index}>
                        <span>{key}: </span>
                        <span> {value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="harvest-report-section-2">
                    <span className="label">Textura Proceso </span>

                    <div className='align-items'>
                      <span className="label">Buenos:</span>
                      <span>{fishingReportData.texturaProceso.buenos}%</span>
                    </div>
                    <div className='align-items'>
                      <span className="label">Flácidos</span>
                      <span>{fishingReportData.texturaProceso.flacidos}%</span>
                    </div>
                    <div className='align-items'>
                      <span className="label">Mudados</span>
                      <span>{fishingReportData.texturaProceso.mudados}%</span>
                    </div>



                  </div>
                </div>

                <div className="harvest-report-divider" />

                <div style={{ display: "flex", gap: 50 }}>
                  <div style={{ width: "50%" }}>
                    {/* Tipo de Pesca y Bines Programados */}
                    <div className="flex-row">
                      <span className="label">Proceso</span>
                      <span>{fishingReportData.tipoPesca}</span>

                    </div>
                    <div className="harvest-report-divider" />

                    <div className="flex-row" >
                      <span className="label">Tiempo de Proceso</span>
                      <span>{fishingReportData.tiempoProceso}</span>
                    </div>

                    <div className="harvest-report-divider" />

                    <div className="flex-row">
                      <span className="label">Bines Programados</span>
                      <span>{fishingReportData.binesProgramados}</span>
                    </div>

                  </div>
                  <div style={{ width: "50%" }}>
                    {/* Tipo de Pesca y Bines Programados */}
                    <div className="flex-row">
                      <span className="label">Biomasa Cosechada</span>
                      <span>{fishingReportData.biomasaCosechada}</span>

                    </div>
                    <div className="harvest-report-divider" />

                    <div className="flex-row" >
                      <span className="label">Temperatura Promedio</span>
                      <span>{fishingReportData.tempPromedio}</span>
                    </div>

                    <div className="harvest-report-divider" />

                    <div className="flex-row">
                      <span className="label">Bines Entregados</span>
                      <span>{fishingReportData.binesEntregados}</span>
                    </div>

                  </div>
                </div>



              </Cards>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={14} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Histórico de Pesca y Raleos" size="large">

                <br />
                <Table
                  columns={historicalColumns}
                  dataSource={historicalFishingData}
                  pagination={{ pageSize: 4 }}
                  rowKey="loteId"
                />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={10} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>

              <HarvestFinalYieldChart data={historicalFishingData} />
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col xl={14} xs={24} >
            <div style={{ width: "100%", padding: "10px" }} className='flex-row'>
              <div>
                PE: Piscina
              </div>
              <div>
                V.P: Volumen Programada
              </div>
              <div>
                V.F: Volumen Final
              </div>
              <div>
                R.P: Rendimiento de Planta
              </div>
            </div>
          </Col>
        </Row>



        <Modal
          style={{ maxHeight: '400px' }} // Cambia a la altura deseada
          bodyStyle={{ overflowY: 'auto', padding: '16px', maxHeight: '500px' }} // Controla el contenido interno
          title="Detalle de Coordinación" visible={modalCoord} onOk={() => setModalCoord(false)} onCancel={() => setModalCoord(false)}>
          <CoordModalHarvest />
        </Modal>

        <Modal
          style={{ maxHeight: '400px' }} // Cambia a la altura deseada
          bodyStyle={{ overflowY: 'auto', padding: '16px', maxHeight: '500px' }} // Controla el contenido interno
          title="Detalle de Cosecha" visible={modalHarvest} onOk={() => setModalHarvest(false)} onCancel={() => setModalHarvest(false)}>
          <HarvestModalHarvest />
        </Modal>

        <Modal
        width={700}
          style={{ maxHeight: '500px', width:"500px" }} // Cambia a la altura deseada
          bodyStyle={{ overflowY: 'auto', padding: '16px', maxHeight: '500px' }} // Controla el contenido interno
          title="Detalle de Empacadora" visible={modalPacking} onOk={() => setModalPacking(false)} onCancel={() => setModalPacking(false)}>
          <PackingModalHarvest />
        </Modal>

        <Modal title="Ver Observaciones" visible={isObservationModalVisible} onOk={handleObservationOk} onCancel={handleCancel}>
          <Input.TextArea value={updatedObservation} onChange={(e) => setUpdatedObservation(e.target.value)} rows={4} />
          <Upload beforeUpload={(file) => { handleFileUpload(file); return false; }}>
            <Button >Ver PDF</Button>
          </Upload>
        </Modal>

      </Main>
    </>
  );
}

export default HarvestFarm;
