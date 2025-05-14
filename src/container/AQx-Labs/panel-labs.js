import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Descriptions } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import TankCarouselCustody from './panel/components/TankCarouselCustody';
import { GoogleMaps } from '../../components/maps/google-maps';
import { Text } from 'recharts';
import {
  DatabaseOutlined,
  ClusterOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchLablotesInfo } from '../../redux/lablote/actionCreator';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import { selectLabOrgsWithWarehouses } from '../../redux/authentication/selectors';

function PanelLabs() {
  const dispatch = useDispatch();
  const organizations = useSelector((state) => state.auth.labsOrgs);
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);

  const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);

  useEffect(() => {
    dispatch(fetchLablotesInfo());
  }, [dispatch, selectedOrg]);


  const labOrgs = useSelector((state) => state.auth.labsOrgs);

  const farmsOrgsWithPools = useSelector(selectLabOrgsWithWarehouses);
  console.log(labOrgs)
  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
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




















  const validLabLote = Array.isArray(lablotes) ? lablotes : [];
  console.log(validLabLote)
  const installedCapacity = validLabLote.find(
    (coord) => coord.AD_Org_ID.id === selectedOrg
  )?.sm_installedcapacitylarva || 0;


  const totalTargetBiomass = validLabLote.reduce((sum, lote) => sum + lote.sm_targetbiomass, 0);
  const totalReservedBiomass = validLabLote.reduce((sum, lote) => sum + lote.sm_reservedbiomass, 0);
  const statusRatew = installedCapacity ? ((totalTargetBiomass / installedCapacity) * 100).toFixed(2) : 0;
  const statusRateLote = totalTargetBiomass ? (((totalTargetBiomass - totalReservedBiomass) / totalTargetBiomass) * 100).toFixed(2) : 0;
  const totalSiembra = validLabLote.reduce(
    (sum, lote) =>
      sum +
      lote.coordinations_json.reduce((sumCoord, coord) => sumCoord + coord.sm_confirmedtotal, 0),
    0
  );

  const statusRateSiembra = totalTargetBiomass ? ((totalSiembra / totalTargetBiomass) * 100).toFixed(2) : 0;

  const proyeccion = totalTargetBiomass;


  const OverviewData = [
    {
      id: 1,
      type: "primary",
      icon: "biomasa.svg",
      label: "Capacidad Instalada",
      total: installedCapacity.toFixed(0),
      suffix: "larvas",
      prefix: "",
      status: "growth",
      statusRate: statusRatew,
      decimel: 0,
      dataPeriod: "Todas las Camaroneras",
    },
    {
      id: 2,
      type: "primary",
      icon: "food.svg",
      label: "Total Lotes",
      total: totalTargetBiomass.toFixed(0),
      suffix: "larvas",
      prefix: "",
      status: "growth",
      statusRate: statusRateLote,
      decimel: 0,
      dataPeriod: "Todas las Camaroneras",
    },
    {
      id: 3,
      type: "primary",
      icon: "health.svg",
      label: "Total Siembra",
      total: totalSiembra.toFixed(0),
      suffix: "larvas",
      prefix: "",
      status: "growth",
      statusRate: statusRateSiembra,
      decimel: 0,
      dataPeriod: "Todas las Camaroneras",
    },
    {
      id: 4,
      type: "primary",
      icon: "growth.svg",
      label: "Proyección",
      total: proyeccion.toFixed(0),
      suffix: "larvas",
      prefix: "",
      decimel: 0,
      dataPeriod: "Todas las Camaroneras",
    },
  ];


  const selectedLabOrg = labOrgs.find(org => org.orgId === selectedOrg);


  const countModules = selectedLabOrg?.countSalesRegion || 0;
  const countTanks = selectedLabOrg?.countWarehouses || 0;


  const selectedLabLotes = validLabLote.filter(lote => lote.AD_Org_ID.id === selectedOrg);
  const activeCoordinations = selectedLabLotes.flatMap(lote =>
    (lote.coordinations_json || []).map(coord => ({
      key: coord.sm_coordination_id,  // Usamos el ID único como clave
      camaronera: coord.org_name,  // Nombre de la camaronera
      loteID: coord.coordination_value,  // Identificador del lote
      plSolicitado: coord.sm_preliminarylaboratorycount,  // PL/GR solicitado
      estado: coord.sm_coordinationstatus  // Estado de la coordinación
    }))
  );

  const columns = [
    { title: 'Camaronera', dataIndex: 'camaronera', key: 'camaronera', align: 'center' },
    { title: 'Lote ID', dataIndex: 'loteID', key: 'loteID' },
    { title: 'PL/GR Solicitado', dataIndex: 'plSolicitado', key: 'plSolicitado', align: 'center' },
    { title: 'Estado', dataIndex: 'estado', key: 'estado', align: 'center' }
  ];






  const extractCoordinationData = (coordinations) => {
    const despacho = ['', '', ''];
    const cantidad = ['', '', ''];

    if (coordinations && Array.isArray(coordinations)) {
      for (let i = 0; i < Math.min(3, coordinations.length); i++) {
        despacho[i] = coordinations[i]?.coordination_value || '';
        cantidad[i] = coordinations[i]?.sm_confirmedtotal?.toLocaleString() || '';
      }
    }
    return { despacho, cantidad };
  };

  if (lablotesLoading) {
    return <p>Cargando datos...</p>;
  }

  if (lablotesError) {
    return <p>Ocurrió un error al cargar los lotes: {lablotesError}</p>;
  }

  return (
    <>
      <PageHeader
        title="Control Panel"
        highlightText="Aqualink Laboratorio"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}

      />
      <Main>
        <Row gutter={25}>

          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OverviewDataStyleWrap style={{ gap: 4 }} className="card-mesh-wrap align-center-v">
                {OverviewData.map((item, i) => {
                  return <OverviewCardMeshOriginal data={item} key={i} />;
                })}
              </OverviewDataStyleWrap>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={11} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Geolocalización" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={24} md={24}>

                    <AqualinkMaps
                      width={'100%'}
                      height={
                        window.innerWidth >= 2000 ? '600px' :
                          '305px'
                      }
                      type={"LabClient"}
                      selectedOrg={selectedOrg}
                      selectedSector={selectedSector}
                      totalModules={countModules}
                      totalTanks={countTanks}
                      selectedPool={selectedPool}
                      farmsOrgsWithPools={farmsOrgsWithPools} // Pasa farmsOrgsWithPools como prop
                    />
                  </Col>
                </Row>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={13} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Coordinaciones Activas" size="large">
                <div className="table-responsive">
                  <Table
                    dataSource={activeCoordinations}
                    columns={columns}
                    pagination={{ pageSize: 7 }}
                  />
                </div>
              </Cards>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={24} xs={24} >
            <center>
              <Typography.Title level={4} >
                Lotes Activos
              </Typography.Title>
            </center>
            <TankCarouselCustody tankData={selectedLabLotes} />
          </Col>
        </Row>

      </Main>
    </>
  );
}

export default PanelLabs;
