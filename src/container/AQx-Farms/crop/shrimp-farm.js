import React, { Suspense } from 'react';
import { Row, Col, Table, Skeleton, Button, Modal } from 'antd';
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
import { AqualinkMaps } from '../../../components/maps/aqualink-map';

import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';


function ShrimpFarm() {

  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);



  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);


  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedSector(null);
  };


  const handleSectorChange = (sectorId) => {
    setSelectedSector(sectorId);
    setSelectedPool(null);
  };


  const handlePoolChange = (poolId) => {
    setSelectedPool(poolId);
    Cookies.set('poolId', poolId);
  };


  const farmsSelectOptions = organizations.length > 0 ? [
    {
      options: farmsOrgsWithPools.map(org => ({
        value: org.orgId,
        label: org.orgName,
        email: org.orgEmail,
      })),
      onChange: handleOrgChange,
      placeholder: 'Seleccione una Farm',
      value: selectedOrg || undefined,
    },
  ] : [];


  const sectorsOptions = selectedOrg
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .reduce((acc, pool) => {
        if (pool.salesRegion && !acc.find(sector => sector.value === pool.salesRegion.id)) {
          acc.push({
            value: pool.salesRegion.id,
            label: pool.salesRegion.name,
          });
        }
        return acc;
      }, [])
    : [];

  const sectorSelectOptions = selectedOrg ? [
    {
      options: sectorsOptions,
      onChange: handleSectorChange,
      placeholder: 'Seleccione un Sector',
      value: selectedSector || undefined,
    },
  ] : [];


  const poolsOptions = selectedSector
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .filter(pool => pool.salesRegion && pool.salesRegion.id === selectedSector)
      .map(pool => ({
        value: pool.poolId,
        label: pool.poolName,
      }))
    : [];

  const poolsSelectOptions = selectedSector ? [
    {
      options: poolsOptions,
      onChange: handlePoolChange,
      placeholder: 'Seleccione una Pool',
      disabled: poolsOptions.length === 0,
      value: selectedPool || undefined,
    },
  ] : [];


  const combinedSelectOptions = [
    ...farmsSelectOptions,
    ...sectorSelectOptions,
    ...poolsSelectOptions,
  ];


  const [modalCoord, setModalCoord] = React.useState(false);
  const [modalShrimp, setModalShrimp] = React.useState(false);

  const plantingReportData = {
    fecha: "22/11/2024",
    preCria: "Pc1",
    densidadProgramada: "1,800,000",
    densidadEstimada: "1,940,000",
    biomasaSembrada: "2.1",
    plPorGr: "280",
    tempDespachoLab: "32",
    pesoDespachoLab: "2",
    salinidadDespacho: "7",
    pesoRecepcionFinca: "2.1",
    salinidadPc: "5",
    tempPc: "26",
    odPc: "7.1",
  };

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

  ];

  const data = [
    {
      id: '1000220',
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
      id: '1000221',
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
      id: '1000222',
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
        highlightText="Aqualink Monitoreo"
        title="Siembra"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={8} xs={24} xxl={10} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AqualinkMaps
                width={'100%'}
                height={
                  window.innerWidth >= 2000 ? '600px' :
                    '105px'
                }
                selectedOrg={selectedOrg}
                selectedSector={selectedSector}
                selectedPool={selectedPool}
                farmsOrgsWithPools={farmsOrgsWithPools}
              />
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
                  <div>
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

                  {/* Densidad programada */}
                  <div className="harvest-report-section-3">
                    <div style={{ width: "30%" }}>
                      <span className="label">Densidad Programada:</span>
                      <br />
                      <span>{plantingReportData.densidadProgramada || "N/A"}</span>
                    </div>

                    <div style={{ width: "70%" }}>
                      <div>
                        <span className="label">⦾ PL x gr:</span>
                        <span>{plantingReportData.plPorGr || "N/A"}</span>
                      </div>
                      <div>
                        <span className="label">⦾ Temp. Despacho LAB:</span>
                        <span>{plantingReportData.tempDespachoLab || "N/A"} °C</span>
                      </div>
                      <div>
                        <span className="label">⦾ Peso Despacho LAB:</span>
                        <span>{plantingReportData.pesoDespachoLab || "N/A"} kgs</span>
                      </div>
                      <div>
                        <span className="label">⦾ Salinidad Despacho:</span>
                        <span>{plantingReportData.salinidadDespacho || "N/A"} ppm</span>
                      </div>
                    </div>

                  </div>

                  {/* Densidad estimada */}
                  <div className="harvest-report-section-3">
                    <div style={{ width: "30%" }}>
                      <span className="label">Densidad Estimada:</span>
                      <br />
                      <span>{plantingReportData.densidadEstimada || "N/A"}</span>
                    </div>

                    <div style={{ width: "70%" }}>
                      <div>
                        <span className="label">⦾ Peso recepción Finca:</span>
                        <span>{plantingReportData.pesoRecepcionFinca || "N/A"}</span>
                      </div>
                      <div>
                        <span className="label">⦾ Salinidad Pc:</span>
                        <span>{plantingReportData.salinidadPc || "N/A"} ppm</span>
                      </div>
                      <div>
                        <span className="label">⦾ Temp Pc:</span>
                        <span>{plantingReportData.tempPc || "N/A"} °C</span>
                      </div>
                      <div>
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

        {/* MODALES */}
        <Modal
          style={{ maxHeight: '400px' }} // Cambia a la altura deseada
          bodyStyle={{ overflowY: 'auto', padding: '16px', maxHeight: '500px' }} // Controla el contenido interno
          title="Detalle de Coordinación"
          visible={modalCoord}
          onOk={() => setModalCoord(false)}
          onCancel={() => setModalCoord(false)}
        >
          <CoordModalShrimp />
        </Modal>

        <Modal
          width={800}
          style={{ maxHeight: '400px' }} // Cambia a la altura deseada
          bodyStyle={{ overflowY: 'auto', padding: '16px', maxHeight: '530px' }} // Controla el contenido interno
          title="Detalle de Siembra"
          visible={modalShrimp}
          onOk={() => setModalShrimp(false)}
          onCancel={() => setModalShrimp(false)}
        >
          <ShrimpModalShrimp />
        </Modal>

      </Main>
    </>
  );
}

export default ShrimpFarm;
