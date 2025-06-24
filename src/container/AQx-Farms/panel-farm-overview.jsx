/* eslint-disable react-hooks/rules-of-hooks */
import { Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Select } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../redux/authentication/selectors';
import usePageHeaderSelectors from '../../hooks/usePageHeaderSelectors';
import FeedingBiomassChart from './panel/charts/FeedingBiomassChart';
import { fetchFeedingreports } from '../../redux/views/feeding-report/actionCreator';

function PanelFarmOverview() {
  const dispatch = useDispatch();
  const { feedingreports, loading } = useSelector((state) => state.feedingreport);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  // Use the custom hook to manage selectors
  const { selectedOrg, selectedSector, selectedPool, combinedSelectOptions } = usePageHeaderSelectors({
    orgsSelector: () => useSelector((state) => state.auth.farmsOrgs),
    poolsSelector: () => useSelector(selectFarmsOrgsWithPools),
    includeSector: true,
    includePool: true,
    orgType: 'Camaronera',
  });

  // State for SM_Batch selection
  const [selectedBatch, setSelectedBatch] = useState(null);
  const batchOptions = feedingreports.map((report) => ({
    value: report.SM_Batch,
    label: report.SM_Batch,
  }));

  useEffect(() => {
    if (selectedPool) {
      dispatch(fetchFeedingreports());
    }
  }, [dispatch, selectedPool]);

  useEffect(() => {
    if (feedingreports.length > 0 && !selectedBatch) {
      setSelectedBatch(feedingreports[0].SM_Batch); // Default to first batch
    }
  }, [feedingreports, selectedBatch]);

  return (
    <>
      <PageHeader
        highlightText="Aqualink Camaronera"
        title="Panel 2"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Select
        style={{ width: '100%', padding: '0 30px', marginBottom: '20px' }}
        value={selectedBatch}
        onChange={setSelectedBatch}
        placeholder="Select Batch"
        options={batchOptions}
      />
      <Main>

        <Row gutter={25}>
          <Col xl={24} xs={24} xxl={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AqualinkMaps
                width="100%"
                height={window.innerWidth >= 2000 ? '600px' : '305px'}
                selectedOrg={selectedOrg}
                selectedSector={selectedSector}
                selectedPool={selectedPool}
                farmsOrgsWithPools={farmsOrgsWithPools}
              />
            </Suspense>
          </Col>
          <Col xl={24} xs={24} xxl={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <FeedingBiomassChart selectedBatch={selectedBatch} feedingreports={feedingreports} />
            </Suspense>
          </Col>

        </Row>
      </Main>
    </>
  );
}

export default PanelFarmOverview;