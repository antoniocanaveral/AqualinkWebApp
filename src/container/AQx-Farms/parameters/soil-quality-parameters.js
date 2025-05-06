import React, { Suspense, useEffect } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Button, Select } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import ComparativeRunsBarChart from '../analytics/charts/ComparativeRunsBarChart';
import { Link } from 'react-router-dom';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { fetchChemicalSoilParams } from '../../../redux/views/soil/actionCreator';

function SoilQualityFarm() {
  const dispatch = useDispatch();
  const { chemicalSoilParams, loading } = useSelector(state => state.chemicalSoil);
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


  const soilQualityColumns = [
    { title: 'CICLO', dataIndex: 'dia', key: 'dia' },
    { title: 'FECHA', dataIndex: 'fecha', key: 'fecha' },
    { title: 'PH', dataIndex: 'ph', key: 'ph' },
    { title: 'ALC', dataIndex: 'alcalinidad', key: 'alcalinidad' },
    { title: 'AMONIO', dataIndex: 'amonio', key: 'amonio' },
    { title: 'M. O.', dataIndex: 'materiaOrganica', key: 'materiaOrganica' },

    { title: 'C:N', dataIndex: 'relacionCN', key: 'relacionCN' },
  ];

  const soilQualityData = [
    { key: '2', dia: '1', ph: '7.5', alcalinidad: '150', amonio: '0.5', materiaOrganica: '2.0', redox: '-100', relacionCN: '12:1' },
    { key: '3', dia: '2', ph: '8.2', alcalinidad: '160', amonio: '0.8', materiaOrganica: '2.1', redox: '-90', relacionCN: '11:1' },
    { key: '4', dia: '3', ph: '7.9', alcalinidad: '140', amonio: '0.6', materiaOrganica: '1.8', redox: '-85', relacionCN: '12:1' },
    { key: '5', dia: '4', ph: '7.8', alcalinidad: '170', amonio: '0.4', materiaOrganica: '2.2', redox: '-75', relacionCN: '13:1' },
    { key: '6', dia: '5', ph: '8.1', alcalinidad: '155', amonio: '0.7', materiaOrganica: '2.0', redox: '-80', relacionCN: '12:1' },
  ];

  const batchOptions = [...new Set((chemicalSoilParams || []).map(r => r.SM_Batch))].map(batch => ({
    label: batch,
    value: batch,
  }));

  useEffect(() => {
    if (selectedPool)
      dispatch(fetchChemicalSoilParams());
  }, [dispatch, selectedPool]);


  return (
    <>
      <PageHeader highlightText={"AquaLink Parámetros:"}
        title="Calidad de Suelo"
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
              <ComparativeRunsBarChart />
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={24} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Calidad de Suelo" size="large">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: "20px" }}>
                  <div>
                    Alc: Alcalinidad <br />
                  </div>
                  <div>
                    M.O: Materia Orgánica <br />
                  </div>
                  <div>
                    C:N: Relación C:N <br />
                  </div>
                </div>
                <Table
                  className='table-responsive'
                  dataSource={soilQualityData} columns={soilQualityColumns} pagination={false} />
              </Cards>
            </Suspense>
          </Col>

        </Row>
        <center>
          <Link to="/farm/culture-medium/preparation-bioremediation">
            <Button type="primary" style={{ marginTop: "20px" }}
            >Ir a Biorremediación</Button>
          </Link>
        </center>
      </Main>
    </>
  );
}

export default SoilQualityFarm;
