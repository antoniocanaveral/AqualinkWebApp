import React, { Suspense, useEffect } from 'react';
import { Row, Col, Typography, Table, Card, Skeleton, Badge, Space } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import TexturePreFishingDonutChart from './biomass/TexturePreFishingDonutChart';
import TexturePercentageChart from './biomass/TexturePercentageChart';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchTextures } from '../../../redux/texture/actionCreator';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';

function TextureFarm() {
  const dispatch = useDispatch();
  const { textures, loading } = useSelector((state) => state.texture);

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

  // Definición de columnas
  const columns = [
    {
      title: 'Lote ID',
      dataIndex: 'codigo',
      key: 'codigo',
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
    },
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
    },
    {
      title: 'Textura',
      dataIndex: 'textura',
      key: 'textura',
    },
    {
      title: 'Duro',
      dataIndex: 'duro',
      key: 'duro',
    },
    {
      title: 'Flácido',
      dataIndex: 'flacido',
      key: 'flacido',
    },
    {
      title: 'Mudado',
      dataIndex: 'mudado',
      key: 'mudado',
    },
  ];

  // Mapear los datos de textures al formato de la tabla
  const dataSource = textures.map((texture, index) => ({
    key: texture.id.toString(),
    codigo: texture.SM_CampaignItem_ID.C_Campaign_ID?.identifier || texture.id, // Lote ID
    fecha: new Date(texture.Created).toLocaleDateString('es-ES'), // Fecha (formato local)
    descripcion: texture.Name, // Descripción
    textura: `día ${texture.SM_CampaignItem_ID?.SM_Index || ''}`, // Textura (día + SM_Index)
    duro: `${texture.SM_TextureGoodPercent}%`, // Duro (porcentaje)
    flacido: `${texture.SM_TextureFlaccidPercent}%`, // Flácido (porcentaje)
    mudado: `${texture.SM_TextureMoltedPercent}%`, // Mudado (porcentaje)
  }));

  useEffect(() => {
    if (selectedPool) {
      dispatch(fetchTextures({ poolId: selectedPool }));
    }
  }, [dispatch, selectedPool]);

  return (
    <>
      <PageHeader
        highlightText="Aqualink Monitoreo"
        title="Textura"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={14} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AqualinkMaps
                width={'100%'}

                selectedOrg={selectedOrg}
                selectedSector={selectedSector}
                selectedPool={selectedPool}
                farmsOrgsWithPools={farmsOrgsWithPools}
              />
            </Suspense>
          </Col>
          <Col xl={10} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Textura Pre Cosecha" size="large">
                <div style={{ width: "75%", margin: "0 auto" }}>
                  <TexturePreFishingDonutChart textures={textures} />
                </div>
              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={14} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Reporte de Textura" size="large">`
                <div className="table-responsive">

                  <Table
                    columns={columns}
                    dataSource={dataSource}
                    pagination={{ pageSize: 5 }}
                    loading={loading}
                  />
                </div>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={10} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Distribución de Textura" size="large">
                <TexturePercentageChart textures={textures} loading={loading} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default TextureFarm;