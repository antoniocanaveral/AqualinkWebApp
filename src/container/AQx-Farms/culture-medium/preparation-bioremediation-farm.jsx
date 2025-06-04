/* eslint-disable react-hooks/rules-of-hooks */
import React, { Suspense, useEffect } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import ProductCycleBarChart from './charts/CompositionLineChart';
import BioremediationBarChart from './charts/BioremediationBarChart';
import ProductCycleRadarChart from './ProdudctCycleRadarChart';
import usePageHeaderSelectors from '../../../hooks/usePageHeaderSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchSmPoolPreparation, fetchSmTreatment } from '../../../redux/views/pool-preparation/actionCreator';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';

// Helper function to get the start of the week (Monday) for a given date
const getWeekStart = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? 6 : day - 1; // Adjust to Monday
  d.setDate(d.getDate() - diff);
  return d.toISOString().split('T')[0];
};

function PreparationBioremediationFarm() {
  const dispatch = useDispatch();
  const { poolPreparation, treatment } = useSelector((state) => state.poolPreparation);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  // Use the custom hook to manage selectors
  const { selectedOrg, selectedSector, selectedPool, combinedSelectOptions } = usePageHeaderSelectors({
    orgsSelector: () => useSelector((state) => state.auth.farmsOrgs),
    poolsSelector: () => useSelector(selectFarmsOrgsWithPools),
    includeSector: true,
    includePool: true,
    orgType: 'Camaronera',
  });

  const limeColumns = [
    { title: 'Producto', dataIndex: 'producto', key: 'producto' },
    { title: 'Ciclo', dataIndex: 'ciclo', key: 'ciclo' },
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'Cantidad (kg)', dataIndex: 'cantidad', key: 'cantidad' },
    { title: 'Total', dataIndex: 'total', key: 'total', render: (value) => Number(value).toFixed(2) },
  ];

  const remediationColumns = [
    { title: 'Bacteria', dataIndex: 'bacteria', key: 'bacteria' },
    { title: 'Ciclo', dataIndex: 'ciclo', key: 'ciclo' },
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'Cantidad (kg)', dataIndex: 'cantidad', key: 'cantidad' },
    { title: 'Total', dataIndex: 'total', key: 'total', render: (value) => Number(value).toFixed(2) },
  ];

  // Determine campaign cycles by earliest ci_planneddate
  const campaignCycles = Array.from(
    new Set(poolPreparation.map((prep) => prep.C_Campaign_ID?.id))
  )
    .map((campaignId) => {
      const campaignPreps = poolPreparation.filter((prep) => prep.C_Campaign_ID?.id === campaignId);
      const earliestDate = Math.min(...campaignPreps.map((prep) => new Date(prep.ci_planneddate).getTime()));
      return { campaignId, earliestDate };
    })
    .sort((a, b) => a.earliestDate - b.earliestDate)
    .reduce((acc, { campaignId }, index) => {
      acc[campaignId] = `Ciclo ${index + 1}`;
      return acc;
    }, {});

  // Transform poolPreparation into limeData
  const limeData = poolPreparation
    .flatMap((prep) => {
      const campaignId = prep.C_Campaign_ID?.id;
      const cycle = campaignCycles[campaignId] || 'N/A';
      const fecha = new Date(prep.ci_planneddate).toISOString().split('T')[0];
      const campaignIdentifier = prep.C_Campaign_ID?.identifier || `Campaign ${campaignId}`;

      return [
        {
          key: `${campaignId}-prod1`,
          producto: prep.productname1 || 'N/A',
          ciclo: cycle,
          fecha,
          cantidad: prep.cantidad_ha1 || 0,
          total: Number(prep.total1 || 0).toFixed(2),
          campaignIdentifier,
        },
        {
          key: `${campaignId}-prod2`,
          producto: prep.productname2 || 'N/A',
          ciclo: cycle,
          fecha,
          cantidad: prep.cantidad_ha2 || 0,
          total: Number(prep.total2 || 0).toFixed(2),
          campaignIdentifier,
        },
        {
          key: `${campaignId}-prod3`,
          producto: prep.productname3 || 'N/A',
          ciclo: cycle,
          fecha,
          cantidad: prep.cantidad_ha3 || 0,
          total: Number(prep.total3 || 0).toFixed(2),
          campaignIdentifier,
        },
        {
          key: `${campaignId}-prod4`,
          producto: prep.productname4 || 'N/A',
          ciclo: cycle,
          fecha,
          cantidad: prep.cantidad_ha4 || 0,
          total: Number(prep.total4 || 0).toFixed(2),
          campaignIdentifier,
        },
      ].filter(row => row.cantidad > 0 || row.total > 0);
    });

  // Determine campaign cycles for treatments
  const treatmentCampaignCycles = Array.from(
    new Set(treatment.map((treat) => treat.C_Campaign_ID?.id))
  )
    .map((campaignId) => {
      const campaignTreats = treatment.filter((treat) => treat.C_Campaign_ID?.id === campaignId);
      const earliestDate = Math.min(...campaignTreats.map((treat) => new Date(treat.SM_Treatment_Date).getTime()));
      return { campaignId, earliestDate };
    })
    .sort((a, b) => a.earliestDate - b.earliestDate)
    .reduce((acc, { campaignId }, index) => {
      acc[campaignId] = `Ciclo ${index + 1}`;
      return acc;
    }, {});

  // Transform treatment into remediationData
  const remediationData = treatment
    .flatMap((treat) => {
      const campaignId = treat.C_Campaign_ID?.id;
      const cycle = treatmentCampaignCycles[campaignId] || 'N/A';
      const fecha = treat.SM_Treatment_Date;
      const treatmentId = treat.id;
      const bacteria = treat.M_Product_ID?.identifier || 'N/A';
      const campaignIdentifier = treat.C_Campaign_ID?.identifier || `Campaign ${campaignId}`;

      return {
        key: `${treatmentId}-${treat.M_Product_ID?.id}`,
        bacteria,
        ciclo: cycle,
        fecha,
        cantidad: treat.Amount ,
        total: Number(treat.TotalAmt || 0).toFixed(2),
        campaignIdentifier,
      };
    })
    .filter(row => row.cantidad > 0 || row.total > 0);

  // Derive bioremediationData from the latest campaign
  const latestCampaign = Array.from(
    new Set(treatment.map((treat) => treat.C_Campaign_ID?.id))
  )
    .map((campaignId) => {
      const campaignTreats = treatment.filter((treat) => treat.C_Campaign_ID?.id === campaignId);
      const earliestDate = Math.min(...campaignTreats.map((treat) => new Date(treat.SM_Treatment_Date).getTime()));
      return { campaignId, earliestDate };
    })
    .sort((a, b) => b.earliestDate - a.earliestDate)[0]?.campaignId;

  const bioremediationData = latestCampaign
    ? Object.entries(
        treatment
          .filter((treat) => treat.C_Campaign_ID?.id === latestCampaign)
          .reduce((acc, treat) => {
            const weekStart = getWeekStart(treat.SM_Treatment_Date);
            acc[weekStart] = (acc[weekStart] || 0) + (treat.Amount ); // Sum amounts in kg
            return acc;
          }, {})
      )
      .map(([semana, cantidadBacterias]) => ({
        semana,
        cantidadBacterias: Number(cantidadBacterias).toFixed(2),
      }))
      .sort((a, b) => new Date(a.semana) - new Date(b.semana))
    : [];

  useEffect(() => {
    if (selectedPool) {
      dispatch(fetchSmPoolPreparation());
      dispatch(fetchSmTreatment());
    }
  }, [dispatch, selectedPool]);

  return (
    <>
      <PageHeader
        highlightText="AquaLink Cultivo"
        title="Preparación Y Biorremediación"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <AqualinkMaps
                width={'100%'}
                height={window.innerWidth >= 2000 ? '600px' : '305px'}
                selectedOrg={selectedOrg}
                selectedSector={selectedSector}
                selectedPool={selectedPool}
                farmsOrgsWithPools={farmsOrgsWithPools}
              />
            </Suspense>
          </Col>
          <Col xl={16} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Biorremediación" size="large">
                <ProductCycleBarChart limeData={limeData} />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Preparación" size="large">
                <div className="table-responsive">
                  <Table
                    dataSource={limeData}
                    columns={limeColumns}
                    pagination={{ pageSize: 5 }}
                    rowKey="key"
                  />
                </div>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Biorremediación" size="large">
                <div className="table-responsive">
                  <Table
                    dataSource={remediationData}
                    columns={remediationColumns}
                    pagination={{ pageSize: 5 }}
                    rowKey="key"
                  />
                </div>
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <BioremediationBarChart height={400} data={bioremediationData} />
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Comparación de Productos por Ciclo" size="large">
                <ProductCycleRadarChart data={limeData} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default PreparationBioremediationFarm;