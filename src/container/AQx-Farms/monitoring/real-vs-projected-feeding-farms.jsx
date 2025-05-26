import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table, Select } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import ProjectedSuggestedFeedingChart from './feeding/ProjectedSuggestedFeedingChart';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchFeedingreportsOrg } from '../../../redux/views/feeding-report/actionCreator';

function RealAndProjectedFeeding() {

  const dispatch = useDispatch();
  const { feedingreports, loading } = useSelector(state => state.feedingreport);
  const [selectedBatch, setSelectedBatch] = useState(null);


  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);


  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);


  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
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


  const combinedSelectOptions = [
    ...farmsSelectOptions,
  ];


  const processFeedingData = () => {
    return feedingreports.flatMap(report => {
      const projectedData = report.feedingdata_projectedjson || [];
      const realData = report.feedingdata_realjson || [];


      const combinedData = projectedData.map(proj => {
        const real = realData.find(r => r.sm_index === proj.sm_index) || {};
        return {
          sm_index: proj.sm_index,
          projected: proj.sm_accumulatedfood || 0,
          real: real.sm_accumulatedfoodreal || 0,
          adjusted: real.sm_dailydoseadjustment || 0,
          tipoAlimento: proj.sm_productformat || real.sm_productformat || '',
          plannedDate: real.sm_planneddate || proj.sm_planneddate || null,
          proteina: proj.foodproteinbase || real.foodproteinbase || 0
        };
      }).sort((a, b) => a.sm_index - b.sm_index);

      return combinedData.map((entry, index) => ({
        key: `${report.SM_Batch}-${index}`,
        lote: report.SM_Batch,
        dia: entry.sm_index,
        alimentoProyectado: entry.projected.toFixed(2),
        fecha: entry.plannedDate,
        alimentoEntregado: entry.real.toFixed(2),
        alimentoAjustado: entry.adjusted.toFixed(2),
        tipoAlimento: entry.tipoAlimento,
        proteina: entry.proteina.toFixed(2)
      }));
    });
  };

  const feedingData = processFeedingData();


  const filteredFeedingData = selectedBatch
    ? feedingData.filter(item => item.lote === selectedBatch)
    : feedingData;

  const feedingColumns = [
    {
      title: 'LOTE',
      dataIndex: 'lote',
      key: 'lote',
      sorter: (a, b) => a.lote.localeCompare(b.lote)
    },
    {
      title: 'DÍA',
      dataIndex: 'dia',
      key: 'dia',
      sorter: (a, b) => a.dia - b.dia
    },
    {
      title: <center>ALIMENTO<br />PROYECTADO</center>,
      dataIndex: 'alimentoProyectado',
      key: 'alimentoProyectado',
      render: (text) => <center>{`${text}kg`}</center>,
      sorter: (a, b) => a.alimentoProyectado - b.alimentoProyectado
    },
    {
      title: <center>ALIMENTO<br />ENTREGADO</center>,
      dataIndex: 'alimentoEntregado',
      key: 'alimentoEntregado',
      render: (text) => <center>{`${text}kg`}</center>,
      sorter: (a, b) => a.alimentoEntregado - b.alimentoEntregado
    },
    {
      title: <center>ALIMENTO<br />AJUSTADO</center>,
      dataIndex: 'alimentoAjustado',
      key: 'alimentoAjustado',
      render: (text) => <center>{`${text}kg`}</center>,
      sorter: (a, b) => a.alimentoAjustado - b.alimentoAjustado
    },
    {
      title: 'TIPO DE ALIMENTO',
      dataIndex: 'tipoAlimento',
      key: 'tipoAlimento',
      sorter: (a, b) => a.tipoAlimento.localeCompare(b.tipoAlimento)
    },
    {
      title: '% PROTEÍNA',
      dataIndex: 'proteina',
      key: 'proteina',
      render: (text) => <center>{`${text}%`}</center>,  // Aquí se agrega el símbolo de porcentaje
      sorter: (a, b) => a.proteina - b.proteina
  }
  
  ];

  useEffect(() => {
    dispatch(fetchFeedingreportsOrg());
  }, [dispatch, selectedOrg]);


  const batchOptions = feedingreports
    .map(report => report.SM_Batch)
    .filter((value, index, self) => self.indexOf(value) === index) // Filtrar duplicados

  return (
    <>
      <PageHeader
        highlightText="Aqualink Monitoreo"
        title="Alimentación Real Vs Proyectada"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AqualinkMaps />
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Alimentación Real vs Alimentación Proyectada" size="large">
              <ProjectedSuggestedFeedingChart data={filteredFeedingData} />
              </Cards>
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

              {/* Tabla de Alimentación */}
              <Cards title="Alimentación" size="large">
                <Select
                  style={{ width: '100%' }}
                  placeholder="Seleccionar un lote"
                  value={selectedBatch}
                  onChange={setSelectedBatch}
                >
                  {batchOptions.map(batch => (
                    <Select.Option key={batch} value={batch}>
                      {batch}
                    </Select.Option>
                  ))}
                </Select>
                <br/>
                <Table
                  className='table-responsive'
                  dataSource={filteredFeedingData}
                  columns={feedingColumns}
                  pagination={{ pageSize: 7 }}
                />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default RealAndProjectedFeeding;
