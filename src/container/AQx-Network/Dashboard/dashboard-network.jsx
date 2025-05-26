import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, notification } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserAccess } from '../../../redux/authentication/actionCreator';
import Cookies from 'js-cookie';
import { fetchLablotesInfoIND } from '../../../redux/lablote/actionCreator';
import { fetchOperationReportIND } from '../../../redux/views/batch-report/actionCreator';
import BiomassDistributionChart from './BiomassDistributionChart';

function DashboardNetwork() {
  const dispatch = useDispatch();
  const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);
  const { campaigns, loading, error } = useSelector((state) => state.batchReport);

  useEffect(() => {
    dispatch(fetchLablotesInfoIND());
    dispatch(fetchOperationReportIND());
  }, [dispatch]);

  // Classification function for campaigns
  const getClassification = (r) => {
    if (r.SM_Category30_40) return "30-40";
    if (r.SM_Category40_50) return "40-50";
    if (r.SM_Category50_60) return "50-60";
    if (r.SM_Category60_70) return "60-70";
    if (r.SM_Category70_80) return "70-80";
    if (r.SM_Category80_100) return "80-100";
    if (r.SM_Category100_120) return "100-120";
    if (r.SM_Category120_150) return "120-150";
    return "Sin Clasificación";
  };

  return (
    <>
      <PageHeader highlightText="Aqualink Network" title="" />
      <Main>
        <br />
        <Row gutter={25}>
          <Col xl={12} xs={24} xxl={14} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Larva por Provincia" size="large">
                {lablotesLoading ? (
                  <Skeleton active />
                ) : lablotesError ? (
                  <p>Error: {lablotesError}</p>
                ) : (
                  <BiomassDistributionChart
                    data={lablotes}
                    title="Larva"
                    biomassField="sm_reservedbiomass"
                    groupByField="C_City_ID"
                    getGroupByValue={(item, field) => item[field]?.identifier ?? 'Unknown'}
                  />
                )}
              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24} xxl={14} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Camarón por Provincia" size="large">
                {loading ? (
                  <Skeleton active />
                ) : error ? (
                  <p>Error: {error}</p>
                ) : (
                  <BiomassDistributionChart
                    data={campaigns}
                    title="Camarón"
                    biomassField="SM_ProjectedBiomass"
                    groupByField="C_City_ID"
                    getGroupByValue={(item, field) => item[field]?.identifier ?? 'Unknown'}
                  />
                )}
              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24} xxl={14} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Larva por PL/gr" size="large">
                {lablotesLoading ? (
                  <Skeleton active />
                ) : lablotesError ? (
                  <p>Error: {lablotesError}</p>
                ) : (
                  <BiomassDistributionChart
                    data={lablotes}
                    title="Larva"
                    biomassField="sm_reservedbiomass"
                    groupByField="sm_targetpl"
                    getGroupByValue={(item, field) => item[field]}
                  />
                )}
              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24} xxl={14} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Camarón por Clasificación" size="large">
                {loading ? (
                  <Skeleton active />
                ) : error ? (
                  <p>Error: {error}</p>
                ) : (
                  <BiomassDistributionChart
                    data={campaigns}
                    title="Camarón"
                    biomassField="SM_ProjectedBiomass"
                    groupByFunction={getClassification}
                  />
                )}
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DashboardNetwork;