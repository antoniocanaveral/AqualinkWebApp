import React, { Suspense, useEffect } from 'react';
import { Row, Col, Skeleton, Select } from 'antd';
import GrowthChart from './general/GrowthChart';
import SurvivalChart from './general/SurvivalChart';
import ConsumptionSuppliesChart from './general/ConsumptionSuppliesChart';
import BiomassChart from './general/BiomassChart';
import FCAChart from './general/FCAChart';
import CostsHaDayChart from './general/CostsHaDayChart';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';

import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchFeedingreports } from '../../../redux/views/feeding-report/actionCreator';

function GeneralMonitoringFarm() {
  const dispatch = useDispatch();
  const { feedingreports, loading } = useSelector(state => state.feedingreport);
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

  const batchOptions = [...new Set((feedingreports || []).map(r => r.SM_Batch))].map(batch => ({
    label: batch,
    value: batch,
  }));




  useEffect(() => {
    if (selectedPool)
      dispatch(fetchFeedingreports());
  }, [dispatch, selectedPool]);


  return (
    <>
      <PageHeader
        highlightText="Aqualink "
        title="Monitoreo General"
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

          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Crecimiento" size="large" style={{ width: '100%', height: '100%' }}>
              <GrowthChart selectedBatch={selectedBatch} />

              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Supervivencia" size="large" style={{ width: '100%', height: '100%' }}>
                <SurvivalChart selectedBatch={selectedBatch} />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Consumo de suministro" size="large" style={{ width: '100%', height: '100%' }}>
                <ConsumptionSuppliesChart />
              </Cards>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Biomasa" size="large" style={{ width: '100%', height: '100%' }}>
                <BiomassChart  selectedBatch={selectedBatch} />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="FCA" size="large" style={{ width: '100%', height: '100%' }}>
                <FCAChart selectedBatch={selectedBatch}  />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Costos(USD) Ha/Día" size="large" style={{ width: '100%', height: '100%' }}>
                <CostsHaDayChart />
              </Cards>
            </Suspense>
          </Col>

        </Row>
      </Main>
    </>
  );
}

export default GeneralMonitoringFarm;
