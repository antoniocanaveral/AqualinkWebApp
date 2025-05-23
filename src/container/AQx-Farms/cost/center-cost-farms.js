import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Table } from 'antd';
import Cookies from 'js-cookie';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';

import DonutChartSuplyCost from './charts/DonutChartSuplyCost';
import Speedometer from './charts/Speedometer';
import CostoLineChart from './charts/CostoLineChart';

import { fetchCostCenterInfo } from '../../../redux/cost/actionCreator';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';

function CenterCostFarm() {
  const { Text } = Typography;
  const dispatch = useDispatch();


  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);


  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);


  const costCenterData = useSelector((state) => state.cost.costCenterData);


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
    if (selectedPool != null){
      dispatch(fetchCostCenterInfo());
    }
  }, [dispatch, selectedPool]);


  const computedData = costCenterData.map((item, index) => {


    const loteId = item.SM_Batch || 'N/A';


    const diasCorrida = moment(item.EndDate).diff(moment(item.StartDate), 'days');


    const supervivenciaEstimada = 0.4 * diasCorrida;


    const produccionEstimada = ((

      item.SM_Density * item.SM_PoolSize * supervivenciaEstimada) *
      item.SM_TargetWeight

    ) / 1000;



    const alimentacionEstimada = 1.2 * produccionEstimada;


    const costoAB = item.avg_feed_price * alimentacionEstimada;


    const larva = ((item.SM_Density * item.SM_PoolSize) / 1000) * 2;


    const valorProyectado = costoAB + larva;


    const diasCorridaDdc = moment().diff(moment(item.StartDate), 'days');


    const costoProyectadoDdc = diasCorrida === 0
      ? 0
      : (valorProyectado / diasCorrida) * diasCorridaDdc;


    const costoRealDdc = 1988;


    const rendimiento = costoProyectadoDdc === 0
      ? 0
      : ((costoProyectadoDdc - costoRealDdc) / costoProyectadoDdc) * 100;

    console.log("Cálculos:", {
      loteId,
      diasCorrida,
      supervivenciaEstimada,
      produccionEstimada,
      alimentacionEstimada,
      costoAB,
      larva,
      valorProyectado,
      diasCorridaDdc,
      costoProyectadoDdc,
      costoRealDdc,
      rendimiento,
    });

    const proyected_reference = valorProyectado / diasCorrida
    const real_reference = costoRealDdc / diasCorridaDdc
    return {
      key: index,
      lote_id: loteId,
      valorProyectado: valorProyectado.toFixed(2),
      diasCorrida,
      diasCorridaDdc,
      costoProyectadoDdc: costoProyectadoDdc.toFixed(2),
      costoRealDdc,
      rendimiento: rendimiento.toFixed(2),
      proyected_reference,
      real_reference
    };
  });


  const columns = [
    {
      title: <Text style={{ fontSize: '12px' }}>LOTE ID</Text>,
      dataIndex: 'lote_id',
      key: 'lote_id',
      render: (text) => <Text style={{ fontSize: '12px' }}>{text}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Valor Proyectado</Text>,
      dataIndex: 'valorProyectado',
      key: 'valorProyectado',
      render: (text) => <Text style={{ fontSize: '12px' }}>${text}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Días de Corrida</Text>,
      dataIndex: 'diasCorridaDdc',
      key: 'diasCorridaDdc',
      render: (value) => <Text style={{ fontSize: '12px' }}>{value}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Costo Proyectado DdC</Text>,
      dataIndex: 'costoProyectadoDdc',
      key: 'costoProyectadoDdc',
      render: (value) => <Text style={{ fontSize: '12px' }}>${value}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Costo Real DdC</Text>,
      dataIndex: 'costoRealDdc',
      key: 'costoRealDdc',
      render: (value) => <Text style={{ fontSize: '12px' }}>${value}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Rendimiento</Text>,
      dataIndex: 'rendimiento',
      key: 'rendimiento',
      render: (value) => {
        let color = 'black';
        if (Number(value) > 0) {
          color = 'green';
        } else if (Number(value) < 0) {
          color = 'red';
        }
        return (
          <Text style={{ fontSize: '12px', color }}>{value}%</Text>
        );
      },
    },
  ];


  const dataSyplyCost = [
    { label: 'Balanceado 30%', value: 6600, color: '#aa61c8' },
    { label: 'Bacteria', value: 1700, color: '#39a7f0' },
    { label: 'Ácidos Orgánicos', value: 1700, color: '#cfd6da' },
    { label: 'Balanceado 40%', value: 2300, color: '#395067' },
    { label: 'Balanceado 35%', value: 3700, color: '#29cba9' },
  ];

  const dataLineChart = [
    { x: 1, 'costo real': 20, 'costo proyectado': 25, precria: 0, optimo: 32 },
    { x: 20, 'costo real': 35, 'costo proyectado': 30, precria: 0, optimo: 32 },
    { x: 40, 'costo real': 50, 'costo proyectado': 45, precria: 0, optimo: 32 },
    { x: 60, 'costo real': 65, 'costo proyectado': 60, precria: 20, optimo: 32 },
    { x: 80, 'costo real': 75, 'costo proyectado': 70, precria: 65, optimo: 32 },
    { x: 100, 'costo real': 85, 'costo proyectado': 80, precria: 75, optimo: 32 },
  ];

  return (
    <>
      <PageHeader
        highlightText="Aqualink Costos"
        title="Centro de Costos"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Centro de Costos">
                <Table
                  columns={columns}
                  dataSource={computedData}
                  pagination={false}
                  bordered
                  rowKey="key"
                />
              </Cards>
            </Suspense>
          </Col>

          <Col xl={12} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Costos por Suministro">
                <DonutChartSuplyCost data={dataSyplyCost} />
              </Cards>
            </Suspense>
          </Col>

          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Performance">
                {computedData.length > 0 ? (
                  <Speedometer value={Number(computedData[0].real_reference) } base={Number(computedData[0].proyected_reference)} />
                ) : (
                  <Text>No data</Text>
                )}
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Costo Producción Ha/Día" size="large" style={{ width: '100%', height: '100%' }}>
                <CostoLineChart data={dataLineChart} height={400} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CenterCostFarm;
