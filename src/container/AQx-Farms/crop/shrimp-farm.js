import React, { Suspense } from 'react';
import { Row, Col, Typography, Table, Card, Skeleton, Badge, Space, Button, Modal } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Link } from 'react-router-dom';
import PreCriaVolumeDonutChart from './biomass/PreCriaVolumDonutChart';
import PLDistributionDonutChart from './biomass/PlDistributionDonutChart';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import CoordModalShrimp from './modals/CoordModalShrimp';
import ShrimpModalShrimp from './modals/ShrimpModalShrimp';


function ShrimpFarm() {


  const [modalCoord, setModalCoord] = React.useState(false);
  const [modalShrimp, setModalShrimp] = React.useState(false);

  const plantingReportData = {
    fecha: "22/11/2024", // Fecha del reporte
    preCria: "Pc1", // Pre Cría
    densidadProgramada: "1,800,000", // Densidad Programada
    densidadEstimada: "1,940,000", // Densidad Estimada
    biomasaSembrada: "2.1", // Biomasa sembrada en kgs
    plPorGr: "280", // PL x gr
    tempDespachoLab: "32", // Temperatura en despacho LAB (°C)
    pesoDespachoLab: "2", // Peso del despacho LAB (kgs)
    salinidadDespacho: "7", // Salinidad en el despacho (ppm)
    pesoRecepcionFinca: "2.1", // Peso de recepción en la finca (kgs)
    salinidadPc: "5", // Salinidad en Pc (ppm)
    tempPc: "26", // Temperatura en Pc (°C)
    odPc: "7.1", // OD Pc (ppm)
  };


  // Define las columnas para la tabla de reporte
  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Lote ID',
      dataIndex: 'loteId',
      key: 'loteId',
    },
    {
      title: 'Pre Cría',
      dataIndex: 'pc',
      key: 'pc',
    },
    {
      title: 'Piscina',
      dataIndex: 'pe',
      key: 'pe',
    },
    {
      title: 'Densidad',
      dataIndex: 'densidad',
      key: 'densidad',
    },
    {
      title: 'Total Sembrado',
      dataIndex: 'totalSembrado',
      key: 'totalSembrado',
    },
    {
      title: 'Población',
      dataIndex: 'pl',
      key: 'pl',
    },
    {
      title: 'Ciclo Pc',
      dataIndex: 'cicloPc',
      key: 'cicloPc',
    },
    {
      title: 'Notificación',
      key: 'notificacion',
      render: (_, record) => (
        <Link to={`/farm/seeding-coords/notification/${record.key}/view`}>
          <UilEye />
        </Link>
      ),
    },
  ];


  // Datos de ejemplo para la tabla
  const data = [
    {
      key: '1',
      fecha: '2024-11-13',
      loteId: 'L001',
      pc: 10,
      pe: 5,
      densidad: '300/m³',
      sistema: 'Intensivo',
      totalSembrado: 1000,
      pl: 200,
      cicloPc: 'Ciclo 1',
    },
    {
      key: '2',
      fecha: '2024-11-14',
      loteId: 'L002',
      pc: 16,
      pe: 8,
      densidad: '400/m³',
      sistema: 'Semi-intensivo',
      totalSembrado: 1300,
      pl: 240,
      cicloPc: 'Ciclo 2',
    },
    {
      key: '3',
      fecha: '2024-11-14',
      loteId: 'L002',
      pc: 12,
      pe: 6,
      densidad: '400/m³',
      sistema: 'Semi-intensivo',
      totalSembrado: 1200,
      pl: 220,
      cicloPc: 'Ciclo 2',
    },

  ];

  return (
    <>
      <PageHeader
        className="ninjadash-page-header-main"
        highlightText="Aqualink Monitoreo"
        title="Siembra"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Geolocalización" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={24} >
                    <GoogleMaps />
                  </Col>

                </Row>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={16} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte de Siembra" size="large">
                <div className="flex-row">
                  <div>
                    <span className="label">Fecha:</span>
                    <span>{plantingReportData.fecha || "N/A"}</span>
                  </div>
                  <div >
                    <span className="label">Pre Cría:</span>
                    <span>{plantingReportData.preCria || "N/A"}</span>
                  </div>
                  <div className='flex-row' style={{ gap: 10 }}>
                    <span className="label">Detalles: </span>
                    <div className='flex-row'>
                      <Button onClick={() => setModalCoord(true)}>
                        Coordinación
                      </Button>
                      <Button onClick={() => setModalShrimp(true)}>
                        Siembra
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="harvest-report-divider" />
                <div className='flex-row'>

                  {/* Densidad programada y estimada */}
                  <div className="harvest-report-section-3">
                    <div style={{ width: "30%" }}>
                      <span className="label">Densidad Programada:</span>
                      <br />
                      <span>{plantingReportData.densidadProgramada || "N/A"}</span>
                    </div>

                    <div style={{ width: "70%" }}>
                      <div >
                        <span className="label">⦾ PL x gr:</span>
                        <span>{plantingReportData.plPorGr || "N/A"}</span>
                      </div>
                      <div >
                        <span className="label">⦾ Temp. Despacho LAB:</span>
                        <span>{plantingReportData.tempDespachoLab || "N/A"} °C</span>
                      </div>
                      <div >
                        <span className="label">⦾ Peso Despacho LAB:</span>
                        <span>{plantingReportData.pesoDespachoLab || "N/A"} kgs</span>
                      </div>
                      <div >
                        <span className="label">⦾ Salinidad Despacho:</span>
                        <span>{plantingReportData.salinidadDespacho || "N/A"} ppm</span>
                      </div>
                    </div>

                  </div>

                  {/* Densidad programada y estimada */}
                  <div className="harvest-report-section-3">
                    <div style={{ width: "30%" }}>
                      <span className="label">Densidad Estimada:</span>
                      <br />
                      <span>{plantingReportData.densidadEstimada || "N/A"}</span>
                    </div>

                    <div style={{ width: "70%" }}>
                      <div >
                        <span className="label">⦾ Peso recepción Finca:</span>
                        <span>{plantingReportData.pesoRecepcionFinca || "N/A"}</span>
                      </div>
                      <div >
                        <span className="label">⦾ Salinidad Pc:</span>
                        <span>{plantingReportData.salinidadPc || "N/A"} °C</span>
                      </div>
                      <div >
                        <span className="label">⦾ Temp Pc:</span>
                        <span>{plantingReportData.tempPc || "N/A"} kgs</span>
                      </div>
                      <div >
                        <span className="label">⦾ OD Pc:</span>
                        <span>{plantingReportData.odPc || "N/A"} ppm</span>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Biomasa sembrada */}
                <div className="flex-row">
                  <span className="label">Biomasa Sembrada:</span>
                  <span>{plantingReportData.biomasaSembrada || "N/A"} kgs</span>
                </div>
                <div className="harvest-report-divider" />

              </Cards>
            </Suspense>
          </Col>

        </Row>
        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Volumen de Pre Cría" size="large">
                <div style={{ width: "75%", margin: "0 auto" }}>
                  <PreCriaVolumeDonutChart />
                </div>

              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Distribución de Pl" size="large">
                <div style={{ width: "75%", margin: "0 auto" }}>
                  <PLDistributionDonutChart />
                </div>

              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Reporte de Siembra" size="large">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 5 }}
                />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        {/*MODALES */}
        <Modal
          style={{ maxHeight: '400px' }} // Cambia a la altura deseada
          bodyStyle={{ overflowY: 'auto', padding: '16px', maxHeight: '500px' }} // Controla el contenido interno
          title="Detalle de Coordinación" visible={modalCoord} onOk={() => setModalCoord(false)} onCancel={() => setModalCoord(false)}>
          <CoordModalShrimp />
        </Modal>

        <Modal
          width={800}
          style={{ maxHeight: '400px' }} // Cambia a la altura deseada
          bodyStyle={{ overflowY: 'auto', padding: '16px', maxHeight: '530px' }} // Controla el contenido interno
          title="Detalle de Siembra" visible={modalShrimp} onOk={() => setModalShrimp(false)} onCancel={() => setModalShrimp(false)}>
          <ShrimpModalShrimp />
        </Modal>


      </Main>
    </>
  );
}

export default ShrimpFarm;
