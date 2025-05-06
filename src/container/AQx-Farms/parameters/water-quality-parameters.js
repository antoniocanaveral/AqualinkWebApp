import React, { Suspense, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Skeleton, Typography, Badge, Space, Form, Input, DatePicker, Select, Button, Divider } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { BasicFormWrapper, HorizontalFormStyleWrap, Main } from '../../styled';
import CalciumChart from './charts/CalciumChart';
import PhAlcalinityBehaviorChart from './charts/PhAlcalinityBehaviorChart';
import PhChart from './charts/PhChart';
import NitriteChart from './charts/NitriteChart';
import PhosphateChart from './charts/PhosphateChart';
import NitrateChart from './charts/NitrateChart';
import MagnesiumChart from './charts/MagnesiumChart';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { fetchChemicalWaterParams } from '../../../redux/views/waterflow/actionCreator';
import AlcalinityChart from './charts/AlkalinityChart';

function WaterAqualityFarms() {
  const dispatch = useDispatch();
  const { chemicalWaterParams, loading } = useSelector(state => state.waterflowReport);
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

  const batchOptions = [...new Set((chemicalWaterParams || []).map(r => r.SM_Batch))].map(batch => ({
    label: batch,
    value: batch,
  }));




  useEffect(() => {
    if (selectedPool)
      dispatch(fetchChemicalWaterParams());
  }, [dispatch, selectedPool]);

  return (
    <>
      <PageHeader highlightText={"AquaLink Parámetros:"}
        title="Calidad del Agua"
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
          <Col xl={13} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Comportamiento de Ph y Alcalinidad" size="large">
              <PhAlcalinityBehaviorChart selectedBatch={selectedBatch} />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Ph" size="large">
              <PhChart  selectedBatch={selectedBatch}/>
            </Cards>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Alcalinidad" size="large">
                <AlcalinityChart selectedBatch={selectedBatch}/>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Nitratos" size="large">
                <NitrateChart  selectedBatch={selectedBatch}/>
              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Nitrito" size="large">
              <NitriteChart selectedBatch={selectedBatch} />
            </Cards>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Magnesio" size="large">
                <MagnesiumChart selectedBatch={selectedBatch} />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Calcio" size="large">
                <CalciumChart selectedBatch={selectedBatch} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Fosfato" size="large">
              <PhosphateChart selectedBatch={selectedBatch} />
            </Cards>
          </Col>

        </Row>
      </Main >
    </>
  );
}

export default WaterAqualityFarms;

