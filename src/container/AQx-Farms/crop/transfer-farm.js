import React, { Suspense, useEffect } from 'react';
import { Row, Col, Typography, Table, Modal, Card, Skeleton, Badge, Space, Button, Progress } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import { Link } from 'react-router-dom';
import PCEfficiencyComparisonChart from './biomass/PCEfficiencyComparisonChart';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { fetchProductionReports } from '../../../redux/views/production-report/actionCreator';

function TransferFarm() {
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


  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Lote',
      dataIndex: 'loteId',
      key: 'loteId',
    },
    {
      title: 'Ppc',
      dataIndex: 'pc',
      key: 'pc',
    },
    {
      title: 'Ppe',
      dataIndex: 'pe',
      key: 'pe',
    },
    {
      title: 'Pef',
      dataIndex: 'pef',
      key: 'pef',
    },
    {
      title: 'D',
      dataIndex: 'densidadSembrada',
      key: 'densidadSembrada',
    },
    {
      title: 'D. P',
      dataIndex: 'diasPc',
      key: 'diasPc',
    },
    {
      title: 'P. X',
      dataIndex: 'pesoPromedio',
      key: 'pesoPromedio',
    },
    {
      title: 'P. T',
      dataIndex: 'pesoTotalTransferido',
      key: 'pesoTotalTransferido',
    },

    {
      title: 'Animales pg',
      dataIndex: 'poblacionEstimada',
      key: 'poblacionEstimada',
    },
  ];

  const transformedData = productionReports
  .map((item, index) => ({
    key: item.id.toString(),
    fecha: item.pc_production_json.sm_plantingdate,
    loteId: item.SM_Batch,
    pc: item.pc_production_json.prebreeding_pool_name,
    pe: item.pe_production_json.prefattening_pool_name,
    pef: item.warehouse_name,
    densidadSembrada: item.SM_DensityPerHectareFatten,
    stocking_populationPc: item.pc_production_json.stocking_population,
    poblacionEstimada: item.SM_AnimalsPerGramFatten,
    diasPc: item.pc_production_json.prebreeding_weeks*7,
    pesoTotalTransferido: item.SM_KilosPerPoolFatten,
    pesoPromedio: item.SM_KilosPerPoolFatten,
    SM_FarmingSystem: item.SM_FarmingSystem.identifier,
    // Temporary field to store planting date for sorting
    _plantingDate: item.pc_production_json.sm_plantingdate,
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


  const data = [
    {
      key: '1',
      fecha: '2024-11-13',
      loteId: 'L001',
      pc: 10,
      pe: 5,
      densidadSembrada: '300/m2',
      diasPc: 30,
      pesoPromedio: '200g',
      pesoTotalTransferido: '200kg',
      poblacionEstimada: 1000,
    },
    {
      key: '2',
      fecha: '2024-11-14',
      loteId: 'L002',
      pc: 12,
      pe: 6,
      densidadSembrada: '400/m2',
      diasPc: 25,
      pesoPromedio: '250g',
      pesoTotalTransferido: '300kg',
      poblacionEstimada: 1200,
    },

  ];


  const transferReportData = {
    lote: "Lote #1",
    fecha: "22/11/2024",
    origen: "Pc1",
    destino: "Pe1",
    poblacionEstimada: "1,940,000",
    densidadProgramada: "1,800,000",
    muestreos: [
      { peso: 19, animales: 20 },
    ],
    biomasaTotal: "Sumatoria (calculada)",
    densidadPorHa: "Fórmula calculada",
  };


  return (
    <>
      <PageHeader

        highlightText="Aqualink Monitoreo"
        title="Transferencia"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={9} xs={24} xxl={10} style={{ display: 'flex' }}>
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
                    '305px'
                }
                selectedOrg={selectedOrg}
                selectedSector={selectedSector}
                selectedPool={selectedPool}
                farmsOrgsWithPools={farmsOrgsWithPools}
              />
            </Suspense>
          </Col>
          <Col xl={15} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte de Transferencia" size="large">
                {/* Lote y Fecha */}
                <div className="flex-row">
                  <div>
                    <span className="label">Lote:</span>
                    <span>{transformedData[transformedData.length-1].loteId || "N/A"}</span>
                  </div>
                  <div>
                    <span className="label">Fecha:</span>
                    <span>{transferReportData.fecha || "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                <div className="flex-row">
                  <div>
                    <span className="label">Protocolo de Cultivo:</span>
                    <span>{transformedData[transformedData.length-1].SM_FarmingSystem || "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Origen y Destino */}
                <div className="flex-row">
                  <div>
                    <span className="label">ORIGEN Pre Cría:</span>
                    <span>{transformedData[transformedData.length-1].pc || "N/A"}</span>
                  </div>
                  <div>
                    <span className="label">DESTINO Engorde:</span>
                    <span>{transformedData[transformedData.length-1].pef || "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Población estimada y densidad programada */}
                <div className="flex-row">
                  <div>
                    <span className="label">Población estimada Pc:</span>
                    <span>{transformedData[transformedData.length-1].stocking_populationPc || "N/A"}</span>
                  </div>
                  <div>
                    <span className="label">Densidad programada Pe:</span>
                    <span>{transformedData[transformedData.length-1].densidadSembrada || "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Muestreos de peso*/}
                <div className='harvest-report-section-3'>
                  <div>
                    <span className="label">Muestreos de peso en proceso de Transferencia:</span>
                    <div className="flex-row" style={{ flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
                      {transferReportData.muestreos.map((muestreo, index) => (
                        <div key={index} className="harvest-report-section-3" style={{ border: "1px solid green", padding: "5px", borderRadius: "5px", minWidth: "150px" }}>
                          <span className="label">Peso Promedio:</span>
                          <span>{muestreo.peso || "N/A"} gr</span>
                          <br />
                          <span className="label"># Animales por gramo:</span>
                          <span>{transformedData[transformedData.length-1].poblacionEstimada || "N/A"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Biomasa Total Transferida */}
                <div className="flex-row">
                  <div>
                    <span className="label">Biomasa Total Transferida:</span>
                    <span>{transformedData[transformedData.length-1].pesoTotalTransferido || "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Densidad por HA */}
                <div className="flex-row">
                  <div>
                    <span className="label">Densidad por HA:</span>
                    <span>{transformedData[transformedData.length-1].densidadSembrada || "N/A"}</span>
                  </div>
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
              <Cards title="Performace" size="large">
                <div className='ninjadash-sales-inner' style={{ width: "50%", margin: "0 auto" }}>
                  <Progress
                    type="circle"
                    width={230}
                    percent={75}
                    strokeColor="#0372CE"
                    trailColor={'#E6D5F6'}
                  />
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
              <PCEfficiencyComparisonChart />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Reporte Transferencia" size="large">

                <br />
                <Table
                  columns={columns}
                  dataSource={transformedData}
                  pagination={{ pageSize: 5 }}
                />
              </Cards>
            </Suspense>
          </Col>

        </Row>
        <Row>
          <Col xl={14} xs={24} >
            <div style={{ width: "100%", padding: "10px" }} className='flex-row'>
              <div>
                D. P: Días de Pre Cria
              </div>
              <div>
                P. X: Peso Promedio
              </div>
              <div>
                D: Densidad
              </div>
              <div>
                P. T: Peso Total Transferido
              </div>
            </div>
          </Col>
        </Row>

      </Main>
    </>
  );
}

export default TransferFarm;
