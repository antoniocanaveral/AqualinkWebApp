import React, { lazy, Suspense, useEffect } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table, Button } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchFeedingreports } from '../../../redux/views/feeding-report/actionCreator';
import FeedingGeneralCard from './tables/FeedingGeneralCard';
import PreCriaCard from './tables/PreCriaCard';
import PreEngordeCard from './tables/PreEngordeCard';
import DatosRealesCard from './tables/DatosRealesCard';
import FeedingProjectedTable from './tables/FeedingProjectedTable';
import FeedingRealTable from './tables/FeedingRealTable';


function FeedingTableFarms() {
  const dispatch = useDispatch();
  const { feedingreports, loading } = useSelector(state => state.feedingreport);
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
        type: pool.poolType?.identifier || ""
      }))
      .filter(pool => pool.type === "E")
    : [];
  console.log("otasdw", farmsOrgsWithPools
    .find(org => org.orgId === selectedOrg)?.pools
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


  useEffect(() => {
    if (selectedPool)
      dispatch(fetchFeedingreports());
  }, [dispatch, selectedPool]);


  return (
    <>
      <PageHeader
        highlightText="Aqualink Monitoreo"
        title="Tablas de Alimentación"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={15}>
          {/* Card para Datos Generales */}
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <FeedingGeneralCard feedingreport={feedingreports[0]} />
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <PreCriaCard feedingreport={feedingreports[0]} />
              <PreEngordeCard feedingreport={feedingreports[0]} />
            </Suspense>
          </Col>
          {/* Card para Piscina */}
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <DatosRealesCard feedingreport={feedingreports[0]} />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25} equal-heights>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <FeedingProjectedTable feedingreport={feedingreports[0]} />
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25} equal-heights>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <FeedingRealTable feedingreport={feedingreports[0]} />
            </Suspense>
          </Col>
        </Row>
      </Main >
    </>
  );
}

export default FeedingTableFarms;
