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
import { fetchTransferCombinedView } from '../../../redux/views/transfer/actionCreator';

function TransferFarm() {
  const dispatch = useDispatch();
  const { productionReports, loading } = useSelector(state => state.productionReport);
  const { transferCombinedView } = useSelector(state => state.transferCombinedView);
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
      dispatch(fetchTransferCombinedView());
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
      dataIndex: 'ppc',
      key: 'ppc',
    },
    {
      title: 'Ppe',
      dataIndex: 'ppe',
      key: 'ppe',
    },
    {
      title: 'Pef',
      dataIndex: 'pef',
      key: 'pef',
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
      dataIndex: 'animalesPorGramo',
      key: 'animalesPorGramo',
    },
  ];

  const transformedData = transferCombinedView
    .map((item, index) => ({
      key: item?.id?.toString() ?? `key-${index}`,
      fecha: item?.SM_TransferDate ?? "N/A",
      loteId: item?.SM_Batch ?? "N/A",
      ppc: item?.sm_ppc_name ?? "N/A",
      ppe: item?.sm_ppe_name ?? "N/A",
      pef: item?.sm_pef_name ?? "N/A",
      densidadProgramada: item?.SM_Density ?? "N/A",
      poblacionEstimada: item?.SM_AnimalsTotal ?? "N/A",
    
      pesoTotalTransferido: item?.SM_TransferredKg ?? "N/A",
      pesoPromedio: item?.SM_AverageWeightReal ?? "N/A",
      animalesPorGramo: item?.SM_AnimalsTotal ? (1 / item.SM_AverageWeightReal).toFixed(6) : "N/A",
      SM_FarmingSystem: item?.SM_FarmingSystem?.identifier ?? "N/A",
      densidadPorHa: item?.SM_DensityPerHectare ?? "N/A",
      _transferDate: item?.SM_TransferDate ?? null,
    }))
    // Filter out items with no transfer date and sort by transfer date
    .filter((item) => item._transferDate)
    .sort((a, b) => new Date(a._transferDate) - new Date(b._transferDate))
    // Assign cycle numbers
    .map((item, index) => ({
      ...item,
      cicloPc: `Ciclo ${index + 1}`,
      // Remove temporary field
      _transferDate: undefined,
    }));

  const allData = transferCombinedView
    .map((item, index) => ({
      key: item?.id?.toString() ?? `key-${index}`,
      fecha: item?.SM_TransferDate ?? "N/A",
      loteId: item?.SM_Batch ?? "N/A",
      ppc: item?.sm_ppc_name ?? "N/A",
      ppe: item?.sm_ppe_name ?? "N/A",
      pef: item?.sm_pef_name ?? "N/A",
      densidadProgramada: item?.SM_DensityPerHectare ?? "N/A",
      poblacionEstimada: item?.SM_AnimalsTotal ?? "N/A",
    
      pesoTotalTransferido: item?.SM_TransferredKg ?? "N/A",
      pesoPromedio: item?.SM_AverageWeightReal ?? "N/A",
      animalesPorGramo: item?.SM_AnimalsTotal ? (1 / item.SM_AverageWeightReal).toFixed(6) : "N/A",
      SM_FarmingSystem: item?.SM_FarmingSystem?.identifier ?? "N/A",
      densidadPorHa: item?.SM_DensityPerHectare ?? "N/A",
    }));

  const latestData = transformedData[transformedData.length - 1];

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
          <Col xl={9} xs={24} xxl={8} style={{ display: 'flex' }}>
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
                    <span>{latestData ? latestData.loteId : "N/A"}</span>
                  </div>
                  <div>
                    <span className="label">Fecha:</span>
                    <span>{latestData ? latestData.fecha : "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                <div className="flex-row">
                  <div>
                    <span className="label">Protocolo de Cultivo:</span>
                    <span>{latestData ? latestData.SM_FarmingSystem : "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Origen y Destino */}
                <div className="flex-row">
                  <div>
                    <span className="label">ORIGEN Pre Cría:</span>
                    <span>{latestData ? latestData.ppc : "N/A"}</span>
                  </div>
                  {latestData?.ppe && latestData.ppe !== "N/A" && (
                    <div>
                      <span className="label">DESTINO Preengorde:</span>
                      <span>{latestData.ppe}</span>
                    </div>
                  )}
                  <div>
                    <span className="label">DESTINO Engorde:</span>
                    <span>{latestData ? latestData.pef : "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Población estimada y densidad programada */}
                <div className="flex-row">
                  <div>
                    <span className="label">Población estimada:</span>
                    <span>{latestData ? latestData.poblacionEstimada : "N/A"}</span>
                  </div>
                  <div>
                    <span className="label">Densidad programada:</span>
                    <span>{latestData ? latestData.densidadProgramada : "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Muestreos de peso */}
                <div className='harvest-report-section-3'>
                  <div>
                    <span className="label">Muestreo de peso en proceso de Transferencia:</span>
                    <div className="flex-row" style={{ flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
                      {latestData && latestData.pesoPromedio !== "N/A" ? (
                        <div className="harvest-report-section-3" style={{ border: "1px solid green", padding: "5px", borderRadius: "5px", minWidth: "150px" }}>
                          <span className="label">Peso Promedio:</span>
                          <span>{latestData.pesoPromedio} gr</span>
                          <br />
                          <span className="label"># Animales por gramo:</span>
                          <span>{latestData.animalesPorGramo}</span>
                        </div>
                      ) : (
                        <span>No hay datos de muestreo</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Biomasa Total Transferida */}
                <div className="flex-row">
                  <div>
                    <span className="label">Biomasa Total Transferida:</span>
                    <span>{latestData ? latestData.pesoTotalTransferido : "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />

                {/* Densidad por HA */}
                <div className="flex-row">
                  <div>
                    <span className="label">Densidad por HA:</span>
                    <span>{latestData ? latestData.densidadPorHa : "N/A"}</span>
                  </div>
                </div>
                <div className="harvest-report-divider" />
              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={10} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Performance" size="large">
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
          <Col xl={14} xs={24} style={{ display: 'flex' }}>
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
                <div className="table-responsive">
                  <Table
                    columns={columns}
                    dataSource={allData}
                    pagination={{ pageSize: 5 }}
                  />
                </div>
              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col xl={14} xs={24} >
            <div style={{ width: "100%", padding: "10px" }} className='flex-row'>
             
              <div>
                P. X: Peso Promedio
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