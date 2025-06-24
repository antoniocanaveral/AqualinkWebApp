import React, { Suspense, useEffect } from 'react';
import { Row, Col, Skeleton, Table, Card, Modal, Button } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Main } from '../../styled';
import HarvestFinalYieldChart from './biomass/HarvestFinalYieldChart';
import CoordModalHarvest from './modals/CoordModalHarvest';
import PackingModalHarvest from './modals/PackingModalHarvest';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchFishingCoordinations } from '../../../redux/views/fishing/actionCreator';
import { fetchSmClassifications } from '../../../redux/classification/actionCreatot';

// Reused processClassificationData function from ClassificationFarm
const processClassificationData = (smClassificationData, selectedBatch) => {
  const ranges = [
    { clasificacion: '150/200', values: [5, 6], color: '#ffe0b2' },
    { clasificacion: '120/150', values: [7, 8], color: '#c8e6c9' },
    { clasificacion: '100/120', values: [9], color: '#f3e5f5' },
    { clasificacion: '80/100', values: [10, 11, 12], color: '#fff9c4' },
    { clasificacion: '70/80', values: [13, 14], color: '#c5e1a5' },
    { clasificacion: '60/70', values: [15, 16], color: '#bbdefb' },
    { clasificacion: '50/60', values: [17, 18, 19], color: '#ffe0b2' },
    { clasificacion: '40/50', values: [20, 21, 22, 23, 24], color: '#d1c4e9' },
    { clasificacion: '30/40', values: [25, 26, 27, 28, 29, 30, 31, 32], color: '#ffcdd2' },
  ];

  const filteredData = selectedBatch
    ? smClassificationData.filter(item => item.SM_Batch === selectedBatch)
    : smClassificationData;

  const totalWeightGlobal = filteredData.reduce(
    (sum, item) => sum + item.SM_GRxUnit * item.TotalQty,
    0
  );

  const processedData = [];
  const classificationMap = {};

  filteredData.forEach((item) => {
    const grxUnit = item.SM_GRxUnit;
    const totalQty = item.TotalQty;

    const range = ranges.find((r) => r.values.includes(grxUnit));
    if (!range) return;

    const pesoTotal = grxUnit * totalQty;
    const porcentaje = totalWeightGlobal > 0 ? ((pesoTotal / totalWeightGlobal) * 100).toFixed(2) + '%' : '0.00%';

    if (!classificationMap[range.clasificacion]) {
      classificationMap[range.clasificacion] = [];
    }

    classificationMap[range.clasificacion].push({
      clasificacion: range.clasificacion,
      color: range.color,
      pesoEspecifico: grxUnit,
      muestra: totalQty,
      pesoTotal: pesoTotal,
      porcentaje: porcentaje,
    });
  });

  ranges.forEach((range) => {
    if (classificationMap[range.clasificacion]) {
      processedData.push(...classificationMap[range.clasificacion]);
    } else {
      processedData.push({
        clasificacion: range.clasificacion,
        color: range.color,
        pesoEspecifico: range.values[0], // Use first value as default
        muestra: 0,
        pesoTotal: 0,
        porcentaje: '0.00%',
      });
    }
  });

  processedData.sort((a, b) => {
    if (a.clasificacion === b.clasificacion) {
      return a.pesoEspecifico - b.pesoEspecifico;
    }
    return ranges.findIndex((r) => r.clasificacion === a.clasificacion) -
      ranges.findIndex((r) => r.clasificacion === b.clasificacion);
  });

  // Calculate aggregated percentage for each classification
  const aggregatedData = ranges.map((range) => {
    const items = processedData.filter(item => item.clasificacion === range.clasificacion);
    const porcentajeAgregado = items
      .reduce((total, item) => total + (parseFloat(item.porcentaje) || 0), 0)
      .toFixed(2) + '%';
    return {
      clasificacion: range.clasificacion,
      porcentajeAgregado,
    };
  });

  return aggregatedData;
};

function HarvestFarm() {
  const dispatch = useDispatch();
  const { fishingCoordinations, loading: fishingLoading } = useSelector(state => state.fishingCoordinations);
  const { smClassificationData, loading: classificationLoading } = useSelector(state => state.smClassification);
  const [modalCoord, setModalCoord] = useState(false);
  const [modalPacking, setModalPacking] = useState(false);
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

  // Process fishingCoordinations for table data
  const historicalFishingData = fishingCoordinations
    .sort((a, b) => new Date(b.planned_date) - new Date(a.planned_date))
    .map((item, index) => ({
      key: item.id.toString(),
      pe: item.warehouse_name || 'N/A',
      ciclo: fishingCoordinations.length - index,
      loteId: item.SM_Batch || 'N/A',
      cosechaProgramada: item.SM_Biomass ? (item.SM_Biomass * 2.2).toFixed(1) : 'N/A',
      cosechaFinal: item.confirmed_biomass ? (item.confirmed_biomass * 2.2).toFixed(1) : 'N/A',
      rendimientoPlanta: item.SM_Biomass && item.sm_processvolume
        ? ((item.sm_processvolume / item.SM_Biomass) * 100).toFixed(1) + '%' : 'N/A',
      observaciones: '',

    }));
    console.log('fishingCoordinations:', fishingCoordinations);

  // Get the most recent fishing coordination for the report card
  const mostRecentCoord = fishingCoordinations
    .sort((a, b) => new Date(b.planned_date) - new Date(a.planned_date))[0];

  // Process classification data for the most recent batch
  const classificationData = mostRecentCoord
    ? processClassificationData(smClassificationData || [], mostRecentCoord.SM_Batch)
    : processClassificationData(smClassificationData || [], null);

  const fishingReportData = mostRecentCoord ? {
    id: mostRecentCoord.id,
    loteId: mostRecentCoord.SM_Batch || 'N/A',
    tipo: mostRecentCoord.SM_FishingType?.identifier || 'N/A',
    date: mostRecentCoord.planned_date
      ? new Date(mostRecentCoord.planned_date).toLocaleDateString('es-ES')
      : 'N/A',
    poblacionEstimada: '',
    biomasaEstimada: mostRecentCoord.SM_Biomass
      ? (mostRecentCoord.SM_Biomass * 2.2).toFixed(1) + ' lbs' : 'N/A',
    tipoPesca: mostRecentCoord.feeding_method || 'N/A',
    biomasaCosechada: mostRecentCoord.confirmed_biomass
      ? (mostRecentCoord.confirmed_biomass * 2.2).toFixed(1) + ' lbs' : 'N/A',
    tiempoProceso: '',
    tempPromedio: '',
    binesProgramados: mostRecentCoord.SM_Biomass
      ? Math.floor((mostRecentCoord.SM_Biomass * 2.2) / 100).toString() : 'N/A',
    binesEntregados: mostRecentCoord.scheduled_bins || 'N/A',
    SM_TextureGoodPercent: mostRecentCoord.SM_TextureGoodPercent || 'N/A',
    SM_TextureFlaccidPercent: mostRecentCoord.SM_TextureFlaccidPercent || 'N/A',
    SM_TextureMoltedPercent: mostRecentCoord.SM_TextureMoltedPercent || 'N/A',
    clasificaciones: classificationData,
    SM_Coordination_ID: mostRecentCoord.SM_Coordination_ID || null,
  } : {
    tipo: 'N/A',
    date: 'N/A',
    poblacionEstimada: '',
    biomasaEstimada: 'N/A',
    tipoPesca: 'N/A',
    biomasaCosechada: 'N/A',
    tiempoProceso: '',
    tempPromedio: '',
    binesProgramados: 'N/A',
    binesEntregados: 'N/A',
    SM_TextureGoodPercent: 'N/A',
    SM_TextureFlaccidPercent: 'N/A',
    SM_TextureMoltedPercent: 'N/A',
    clasificaciones: processClassificationData(smClassificationData || [], null),
  };
  console.log('fishingReportData:', fishingReportData);

  const historicalColumns = [
    { title: 'PE', dataIndex: 'pe', key: 'pe' },
    { title: 'Ciclo', dataIndex: 'ciclo', key: 'ciclo' },
    { title: 'Lote ID', dataIndex: 'loteId', key: 'loteId' },
    { title: 'V.P.', dataIndex: 'cosechaProgramada', key: 'cosechaProgramada' },
    { title: 'V.F', dataIndex: 'cosechaFinal', key: 'cosechaFinal' },
    { title: 'R.P.', dataIndex: 'rendimientoPlanta', key: 'rendimientoPlanta' },
    { title: 'Observaciones', dataIndex: 'observaciones', key: 'observaciones' },
  ];

  useEffect(() => {
    if (selectedPool) {
      dispatch(fetchFishingCoordinations());
      dispatch(fetchSmClassifications());
    }
  }, [selectedPool]);

  return (
    <>
      <PageHeader
        highlightText="AquaLink Monitoreo"
        title="Cosecha"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={10} xs={24} xxl={10} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AqualinkMaps
                width={'100%'}
                height={window.innerWidth >= 2000 ? '600px' : '305px'}
                selectedOrg={selectedOrg}
                selectedSector={selectedSector}
                selectedPool={selectedPool}
                farmsOrgsWithPools={farmsOrgsWithPools}
              />
            </Suspense>
          </Col>
          <Col xl={14} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte de Pesca" size="large">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
                  <div>
                    <span className="label">Tipo: </span>
                    <span>{fishingReportData.tipo}</span>
                  </div>
                  <div>
                    <span className="label">Fecha: </span>
                    <span>{fishingReportData.date}</span>
                  </div>
                  <div className="flex-row" style={{ gap: 10 }}>
                    <span className="label">Detalles: </span>
                    <div className="flex-row">
                      <Button onClick={() => setModalCoord(true)}>Coordinación</Button>
                      <Button onClick={() => setModalPacking(true)}>Empacadora</Button>
                    </div>
                  </div>
                </div>
                <div className="harvest-report-divider" />
                <div className="harvest-report-section">
                  <span className="label">Población Estimada</span>
                  <span>{fishingReportData.poblacionEstimada}</span>
                  <span className="label">Biomasa Estimada</span>
                  <span>{fishingReportData.biomasaEstimada}</span>
                </div>
                <div className="harvest-report-divider" />
                <div className='flex-row'>
                  <div className="harvest-report-section-2">
                    <span className="label">Textura Pre Cosecha</span>
                    <div className='align-items'>
                      <span className="label">Buenos:</span>
                      <span>{fishingReportData.SM_TextureGoodPercent}%</span>
                    </div>
                    <div className='align-items'>
                      <span className="label">Flácidos</span>
                      <span>{fishingReportData.SM_TextureFlaccidPercent}%</span>
                    </div>
                    <div className='align-items'>
                      <span className="label">Mudados</span>
                      <span>{fishingReportData.SM_TextureMoltedPercent}%</span>
                    </div>
                  </div>
                  <div className="harvest-report-section-2">
                    <span className="label">Clasificación</span>
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <div style={{ flex: 1 }}>
                        {fishingReportData.clasificaciones.slice(0, 3).map((item, index) => (
                          <div className='align-items' key={index}>
                            <span>{item.clasificacion}:</span>
                            <span>{item.porcentajeAgregado}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ flex: 1 }}>
                        {fishingReportData.clasificaciones.slice(3, 6).map((item, index) => (
                          <div className='align-items' key={index}>
                            <span>{item.clasificacion}:</span>
                            <span>{item.porcentajeAgregado}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ flex: 1 }}>
                        {fishingReportData.clasificaciones.slice(6, 9).map((item, index) => (
                          <div className='align-items' key={index}>
                            <span>{item.clasificacion}:</span>
                            <span>{item.porcentajeAgregado}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="harvest-report-divider" />
                <div style={{ display: 'flex', gap: 50 }}>
                  <div style={{ width: '50%' }}>
                    <div className="flex-row">
                      <span className="label">Proceso</span>
                      <span>{fishingReportData.tipoPesca}</span>
                    </div>
                    <div className="harvest-report-divider" />
                    <div className="flex-row">
                      <span className="label">Tiempo de Proceso</span>
                      <span>{fishingReportData.tiempoProceso}</span>
                    </div>
                    <div className="harvest-report-divider" />
                    <div className="flex-row">
                      <span className="label">Bines Programados</span>
                      <span>{fishingReportData.binesProgramados}</span>
                    </div>
                  </div>
                  <div style={{ width: '50%' }}>
                    <div className="flex-row">
                      <span className="label">Biomasa Cosechada</span>
                      <span>{fishingReportData.biomasaCosechada}</span>
                    </div>
                    <div className="harvest-report-divider" />
                    <div className="flex-row">
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
          <Col xl={14} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Histórico de Pesca y Raleos" size="large">
                <br />
                <div className="table-responsive">
                  <Table
                    columns={historicalColumns}
                    dataSource={historicalFishingData}
                    pagination={{ pageSize: 4 }}
                    rowKey="loteId"
                  />
                </div>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={10} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <HarvestFinalYieldChart data={historicalFishingData} />
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col xl={14} xs={24}>
            <div style={{ width: '100%', padding: '10px' }} className="flex-row">
              <div>PE: Piscina</div>
              <div>V.P: Volumen Programada</div>
              <div>V.F: Volumen Final</div>
              <div>R.P: Rendimiento de Planta</div>
            </div>
          </Col>
        </Row>
        <Modal
          style={{ maxHeight: '400px' }}
          bodyStyle={{ overflowY: 'auto', padding: '16px', maxHeight: '500px' }}
          title="Detalle de Coordinación"
          visible={modalCoord}
          onOk={() => setModalCoord(false)}
          onCancel={() => setModalCoord(false)}
        >
          <CoordModalHarvest id={fishingReportData.id} />
        </Modal>
        <Modal
          width={900}
          style={{ maxHeight: '500px', width: '500px' }}
          bodyStyle={{ overflowY: 'auto', padding: '16px', maxHeight: '500px' }}
          title="Detalle de Empacadora"
          visible={modalPacking}
          onOk={() => setModalPacking(false)}
          onCancel={() => setModalPacking(false)}
        >
          {
            fishingReportData.SM_Coordination_ID !== null
              ? <PackingModalHarvest lote={fishingReportData.SM_Coordination_ID?.identifier} coordId={fishingReportData.SM_Coordination_ID?.id} />
              : <div>No hay datos de empacadora disponibles.</div>

          }
        </Modal>
      </Main>
    </>
  );
}

export default HarvestFarm;