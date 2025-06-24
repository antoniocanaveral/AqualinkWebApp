import React, { Suspense, useEffect } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Card, Select } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import ProjectedSuggestedFeedingChart from '../monitoring/feeding/ProjectedSuggestedFeedingChart';
import BiomassEvolutionChart from './biomass/BiomassEvolutionChart';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import dayjs from 'dayjs';

import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchSmPopulationCombined } from '../../../redux/views/population/actionCreator';

function PopulationBiomassFarm() {
  const dispatch = useDispatch();
  const { populationCombined, loading } = useSelector(state => state.populationCombined);
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);
  const [selectedBatch, setSelectedBatch] = useState(null);


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

  const batchOptions = [...new Set((populationCombined || []).map(r => r.SM_Batch))].map(batch => ({
    label: batch,
    value: batch,
  }));




  useEffect(() => {
    if (selectedPool)
      dispatch(fetchSmPopulationCombined());
  }, [dispatch, selectedPool]);


  // Get the most recent record based on fecha
  const latestRecord = populationCombined && populationCombined.length > 0
    ? populationCombined.reduce((latest, current) =>
      new Date(current.fecha) > new Date(latest.fecha) ? current : latest
    )
    : null;


  const chronologicalData = populationCombined
    ? populationCombined
      .sort((a, b) => new Date(a.fecha) - new Date(b.fecha)) // Sort by fecha ascending
      .map((record, index) => {
        const weekNumber = index + 1; // Start from week 1 for the earliest date

        // Calculate the average of 'total' in population_cast
        const populationCastData = record.population_cast ? JSON.parse(record.population_cast) : [];
        const totalSum = populationCastData.reduce((acc, item) => acc + (item.total || 0), 0);
        const totalCount = populationCastData.length;
        const averageTotal = totalCount > 0 ? totalSum / totalCount : 0;

        // Animals per Lance as the average 'total' divided by lances
        const animalsPerLance = record.lances > 0 ? averageTotal / record.lances : 0;

        return {
          fecha: dayjs(record.fecha).format('YYYY-MM-DD'),
          loteId: record.SM_Batch,
          semanaCiclo: weekNumber,
          poblacion: record.animalest,
          pesoPromedio: record.peso_promedio,
          biomasa: record.biomasa,
          animalesPorLance: animalsPerLance, // New calculated value
        };
      })
    : [];

  const populationResults = latestRecord ? [
    {
      label: "Título",
      value: `${latestRecord.AD_Client_ID.identifier} · ${latestRecord.M_Warehouse_ID.Name}`
    },
    {
      label: "Área",
      value: `${latestRecord.M_Warehouse_ID.SM_PoolSize} ha`
    },

    {
      label: "Lances",
      value: latestRecord.lances
    },
    {
      label: "Animales por Lance",
      value: chronologicalData.length > 0 ? chronologicalData[0].animalesPorLance.toFixed(2) : "N/A", // Mostrar con 2 decimales desde chronologicalData
    },
    {
      label: "Área de Atarraya",
      value: latestRecord.area_tarr
    },
    {
      label: "Animales por m²",
      value: latestRecord.animalest / (latestRecord.M_Warehouse_ID.SM_PoolSize * 10000),
    },
    {
      label: "Animales totales",
      value: latestRecord.animalest,
      bold: true
    },
    {
      label: "Biomasa Estimada (kg)",
      value: latestRecord.biomasa,
      bold: true
    },
    {
      label: "Fecha de Siembra",
      value: dayjs(latestRecord.fecha).format("DD MMM YYYY")
    },
    {
      label: "Siembra Total",
      value: `${latestRecord.SM_StockingPopulation}`
    },
    {
      label: "Sobrevivencia",
      value: `${latestRecord.superv}%`
    },
    {
      label: "Peso promedio",
      value: `${latestRecord.peso_promedio}`,
      highlight: true
    },
  ] : [];

  const columns = [
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'S.C', dataIndex: 'semanaCiclo', key: 'semanaCiclo' },
    { title: 'Lote', dataIndex: 'loteId', key: 'loteId' },
    { title: 'Población', dataIndex: 'poblacion', key: 'poblacion' },
    { title: 'Px', dataIndex: 'pesoPromedio', key: 'pesoPromedio' },
    { title: 'Biomasa', dataIndex: 'biomasa', key: 'biomasa' },
  ];


  return (
    <>
      <PageHeader highlightText={"AquaLink Parámetros:"}
        title="Población-Biomasa"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Select
          style={{ width: '100%' }}
          placeholder="Seleccione un LoteID"
          options={batchOptions}
          value={selectedBatch}
          onChange={value => setSelectedBatch(value)}
          allowClear
          loading={loading}
        />
        <br />
        <br />
        <Row gutter={25}>
          <Col xl={11} xs={24} style={{ display: "flex" }}>
            <AqualinkMaps />
          </Col>
          <Col xl={13} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte de Población" size="large">
                <div className="header">
                  <span className="title">{populationResults[0]?.value}</span>
                  <span className="area">{populationResults[1]?.value}</span>
                </div>
                <hr className="divider" />

                <div className="section-title">Resultados de Población</div>
                <div className="details">
                  {populationResults.slice(2, 8).map((item) => (
                    <div className="detail-item" key={item.label}>
                      <span className="label">{item.label}</span>
                      <span className={`value ${item.bold ? 'bold' : ''}`}>{item?.value}</span>
                    </div>
                  ))}
                </div>

                <div className="weight-section">
                  <span className="weight-label">Biomasa Estimada lb</span>
                  <div className="weight-value-box">
                    <span className="weight-value">{Number(populationResults[7]?.value * 2.2).toFixed(2)}</span>
                  </div>
                </div>

                <div className="additional-details">
                  {populationResults.slice(8).map((item) => (
                    <div className="additional-detail-item" key={item.label}>
                      <span className="label">{item.label}</span>
                      <span className={`value ${item.bold ? 'bold' : ''}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </Cards>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={11} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte Cronológico de poblaciones" size="large">
                <div className='flex-row'>
                  <div>
                    S. Ciclo: Semana de ciclo
                  </div>
                  <div>
                    Px: Peso Promedio
                  </div>
                </div>
                <br />
                <Table
                  className='table-responsive'
                  columns={columns}
                  dataSource={chronologicalData}
                  pagination={{ pageSize: 5 }}
                  rowKey="fecha"
                />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={13} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Evolución de Biomasa" size="large">
                <BiomassEvolutionChart selectedBatch={selectedBatch} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default PopulationBiomassFarm;
