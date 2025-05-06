import React, { Suspense, useEffect } from 'react';
import { Row, Col, Table, Skeleton, Button, Modal } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import PreCriaVolumeDonutChart from './biomass/PreCriaVolumDonutChart';
import PLDistributionDonutChart from './biomass/PlDistributionDonutChart';
import CoordModalShrimp from './modals/CoordModalShrimp';
import ShrimpModalShrimp from './modals/ShrimpModalShrimp';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';

import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchProductionReports } from '../../../redux/views/production-report/actionCreator';


function ShrimpFarm() {
  const dispatch = useDispatch();
  const { productionReports, loading } = useSelector(state => state.productionReport);


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

  useEffect(() => {
    if (selectedPool)
      dispatch(fetchProductionReports());
  }, [dispatch, selectedPool]);
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
  const transformedData = productionReports
    .map((item, index) => ({
      key: item?.id?.toString() ?? index,
      fecha: item?.pc_production_json?.sm_plantingdate ?? "N/A",
      loteId: item?.SM_Batch ?? "N/A",
      pc: item?.pc_production_json?.prebreeding_pool_name ?? "N/A",
      pe: item?.warehouse_name ?? "N/A",
      densidad: item?.pc_production_json?.sm_densityperhectare ?? "N/A",
      totalSembrado: item?.pc_production_json?.animals_per_gram ?? "N/A",
      pl: item?.pc_production_json?.stocking_population ?? "N/A",
      _plantingDate: item?.pc_production_json?.sm_plantingdate ?? null,
    }))
    // Filter out items with no planting date and sort by planting date
    .filter((item) => item._plantingDate)
    .sort((a, b) => new Date(a._plantingDate) - new Date(b._plantingDate))
    // Assign cycle numbers
    .map((item, index) => ({
      ...item,
      cicloPc: `Ciclo ${index + 1}`,
      // Remove temporary field
      _plantingDate: undefined,
    }));


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


                    <div style={{ width: "100%" }}>
                      <h2 className="label">LABORATORIO</h2>
                      <div >
                        <span className="label">Densidad Programada:</span>
                     
                        <span>{plantingReportData.densidadProgramada || "N/A"}</span>
                      </div>
                      <div>
                        <span className="label">⦾ PL x gr:</span>
                        <span>{plantingReportData.plPorGr || "N/A"}</span>
                      </div>

                      <div>
                        <span className="label">⦾ Salinidad Despacho:</span>
                        <span>{plantingReportData.salinidadDespacho || "N/A"} ppm</span>
                      </div>
                    </div>

                  </div>

                  {/* Densidad estimada */}
                  <div className="harvest-report-section-3">
                   

                    <div style={{ width: "100%" }}>
                      
                    <h2 className="label">FINCA</h2>
                    <div >
                      <span className="label">Densidad Estimada:</span>
                      <span>{plantingReportData.densidadEstimada || "N/A"}</span>
                    </div>
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
                  dataSource={transformedData}
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
