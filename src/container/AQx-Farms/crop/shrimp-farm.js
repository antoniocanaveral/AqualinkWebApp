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

import { fetchProductionReports, fetchProductionReportsPC } from '../../../redux/views/production-report/actionCreator';


function ShrimpFarm() {
  const dispatch = useDispatch();
  const { productionReports, loading } = useSelector(state => state.productionReport);
  const { physicalWaterParams } = useSelector(state => state.waterflowReport);

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
      .filter(pool => pool.salesRegion && pool.salesRegion.id === selectedSector
        && pool.poolType.id === 'PC')
      .map(pool => ({
        value: pool.poolId,
        label: pool.poolName,
      }))
    : [];

  console.log("POOL", farmsOrgsWithPools.find(org => org.orgId === selectedOrg)?.pools
    .filter(pool => pool.salesRegion && pool.salesRegion.id === selectedSector))
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

  // Inside ShrimpFarm component
  const getMostRecentReport = (reports) => {
    if (!reports || reports.length === 0) {
      return null;
    }
    // Sort by SM_FishingDate (most recent first)
    return reports.sort((a, b) => new Date(b.SM_FishingDate) - new Date(a.SM_FishingDate))[0];
  };

  // Find matching water parameters by SM_Batch
  const getMatchingWaterParams = (batch, waterParams) => {
    if (!batch || !waterParams || waterParams.length === 0) {
      return null;
    }
    return waterParams.find(param => param.SM_Batch === batch) || null;
  };

  // Derive plantingReportData from productionReports and physicalWaterParams
  const mostRecentReport = getMostRecentReport(productionReports);
  const matchingWaterParams = mostRecentReport
    ? getMatchingWaterParams(mostRecentReport.SM_Batch, physicalWaterParams)
    : null;

  // Calculate average temperature and oxygen if water params exist
  const calculateAverages = (waterParams) => {
    if (!waterParams) {
      return { tempPc: 'N/A', odPc: 'N/A' };
    }
    const temps = [
      waterParams.temp_dia,
      waterParams.temp_medio_dia,
      waterParams.temp_noche,
    ].filter(val => val !== null && val !== undefined);
    const oxigs = [
      waterParams.oxig_dia,
      waterParams.oxig_medio_dia,
      waterParams.oxig_noche,
    ].filter(val => val !== null && val !== undefined);

    const tempAvg = temps.length > 0 ? (temps.reduce((sum, val) => sum + val, 0) / temps.length).toFixed(1) : 'N/A';
    const oxigAvg = oxigs.length > 0 ? (oxigs.reduce((sum, val) => sum + val, 0) / oxigs.length).toFixed(1) : 'N/A';

    return { tempPc: tempAvg, odPc: oxigAvg };
  };

  const { tempPc, odPc } = calculateAverages(matchingWaterParams);

  const plantingReportData = mostRecentReport
    ? {
      fecha: mostRecentReport.pc_production_json?.sm_plantingdate
        ? new Date(mostRecentReport.pc_production_json.sm_plantingdate).toLocaleDateString('es-ES')
        : 'N/A',
      preCria: mostRecentReport.pc_production_json?.prebreeding_pool_name || 'N/A',
      densidadProgramada: mostRecentReport.SM_Density
        ? mostRecentReport.SM_Density.toLocaleString('es-ES')
        : 'N/A',
      densidadEstimada: mostRecentReport.coordination_json?.[0]?.clients?.[0]?.sm_programmeddensity
        ? mostRecentReport.coordination_json[0].clients[0].sm_programmeddensity.toLocaleString('es-ES')
        : 'N/A',
      biomasaSembrada: mostRecentReport.pc_production_json?.sm_kilosperpool
        ? mostRecentReport.pc_production_json.sm_kilosperpool.toFixed(1)
        : 'N/A',
      plPorGr: mostRecentReport.coordination_json?.[0]?.clients?.[0]?.sm_estimatedlabcount
        ? mostRecentReport.coordination_json[0].clients[0].sm_estimatedlabcount.toLocaleString('es-ES')
        : 'N/A',
      coordinationClientId: mostRecentReport.coordination_json?.[0]?.clients?.[0]?.sm_coordinationclient_id
        ? mostRecentReport.coordination_json[0].clients[0].sm_coordinationclient_id.toString()
        : 'N/A',

      tempDespachoLab: '32', // Not provided in JSON, keep as is or update if available
      pesoDespachoLab: '2', // Not provided in JSON, keep as is or update if available
      salinidadDespacho: mostRecentReport.coordination_json?.[0]?.clients?.[0]?.sm_confirmedsalinity
        ? mostRecentReport.coordination_json[0].clients[0].sm_confirmedsalinity.toLocaleString('es-ES')
        : 'N/A',
      pesoRecepcionFinca: mostRecentReport.pc_production_json?.animals_per_gram
        ? mostRecentReport.pc_production_json.animals_per_gram.toFixed(1)
        : 'N/A',
      salinidadPc: '5', // Not provided in JSON, keep as is or update if available
      tempPc: tempPc, // Updated with calculated average
      odPc: odPc, // Updated with calculated average
    }
    : {
      // Fallback values if no report is available
      fecha: 'N/A',
      preCria: 'N/A',
      densidadProgramada: 'N/A',
      densidadEstimada: 'N/A',
      biomasaSembrada: 'N/A',
      plPorGr: 'N/A',
      tempDespachoLab: 'N/A',
      pesoDespachoLab: 'N/A',
      salinidadDespacho: 'N/A',
      pesoRecepcionFinca: 'N/A',
      salinidadPc: 'N/A',
      tempPc: 'N/A',
      odPc: 'N/A',
    };

  useEffect(() => {
    if (selectedPool)
      dispatch(fetchProductionReportsPC());
  }, [dispatch, selectedPool]);
  const [modalCoord, setModalCoord] = React.useState(false);
  const [modalShrimp, setModalShrimp] = React.useState(false);



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
          <Col xl={8} xs={24} xxl={8} style={{ display: 'flex' }}>
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
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%"}}>
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
                <div className="table-responsive">
                  <Table
                    columns={columns}
                    dataSource={transformedData}
                    pagination={{ pageSize: 5 }}
                  />
                </div>
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
          <CoordModalShrimp id={plantingReportData.coordinationClientId} />
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
          <ShrimpModalShrimp id={plantingReportData.coordinationClientId} />
        </Modal>

      </Main>
    </>
  );
}

export default ShrimpFarm;
