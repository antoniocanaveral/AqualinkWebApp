import React, { lazy, Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import OverviewData from '../../demoData/overviewMeshData.json';
import CropYieldChart from './analytics/charts/cropYieldChart';
import ProductionSalesProjectionChart from './analytics/charts/ProductionSalesProjectionChart';
import EvolutionParametersBarChart from './analytics/charts/EvolutionParametersBarChart';
import WaterPhysicsDonutChart from './analytics/charts/donut/WaterPhysicsDonutChart';
import Card from 'antd/lib/card/Card';
import SoilPhysicsDonutChart from './analytics/charts/donut/SoilPhysicsDonutChart';
import BiomechanicalDonutChart from './analytics/charts/donut/BiomechanicalDonutChart';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../redux/authentication/selectors';

function AnalyticsFarms() {

  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);


  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedSector(null);
    console.log(JSON.stringify(farmsOrgsWithPools));
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
      placeholder: 'Seleccione una Piscina',
      disabled: poolsOptions.length === 0,
      value: selectedPool || undefined,
    },
  ] : [];

  const combinedSelectOptions = [
    ...farmsSelectOptions,
    ...sectorSelectOptions,
    ...poolsSelectOptions,
  ];


  return (
    <>
      <PageHeader
        highlightText="Aqualink Camaroneras"
        title="Analytics"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}

      />
      <Main>
        <Row gutter={25}>

          <Col xxl={24} xs={24} >
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OverviewDataStyleWrap className="card-mesh-wrap align-center-v">
                {OverviewData.map((item, i) => {
                  return <OverviewCardMeshOriginal data={item} key={i} />;
                })}
              </OverviewDataStyleWrap>

            </Suspense>
          </Col>

        </Row>



        <Row gutter={25}>
          <Col xl={15} xs={24} >
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Proyección Producción Ventas" size="large" style={{ width: '100%', height: '100%' }}>
                <ProductionSalesProjectionChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={9} xs={24} style={{ display: "flex" }} >
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Rendimiento de Cultivo (%)" size="large" style={{ width: '100%', height: '100%' }}>
                <CropYieldChart />
              </Cards>
            </Suspense>
          </Col>

          <Card title="Relación Parámetros General" size="large" style={{ width: '100%', height: '100%' }}>
            <Row gutter={25}>
              <Col xl={6} xs={24} >
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <div>
                    <EvolutionParametersBarChart />
                  </div>
                </Suspense>
              </Col>
              <Col xl={6} xs={24} >
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <div>
                    <WaterPhysicsDonutChart />
                  </div>
                </Suspense>
              </Col>
              <Col xl={6} xs={24} >
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <div>
                    <SoilPhysicsDonutChart />
                  </div>
                </Suspense>
              </Col>
              <Col xl={6} xs={24} >
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton active />
                    </Cards>
                  }
                >
                  <div>
                    <BiomechanicalDonutChart />
                  </div>
                </Suspense>
              </Col>
            </Row>
          </Card>

        </Row>
      </Main>
    </>
  );
}

export default AnalyticsFarms;
