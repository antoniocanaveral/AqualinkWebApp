import React, {  Suspense } from 'react';
import { Row, Col, Skeleton,  PageHeader } from 'antd';
import GrowthChart from './general/GrowthChart';
import SurvivalChart from './general/SurvivalChart';
import ConsumptionSuppliesChart from './general/ConsumptionSuppliesChart';
import BiomassChart from './general/BiomassChart';
import FCAChart from './general/FCAChart';
import CostsHaDayChart from './general/CostsHaDayChart';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';

function GeneralMonitoringFarm() {


  return (
    <>
      <PageHeader className="ninjadash-page-header-main"
        highlightText="Aqualink "
        title="Monitoreo General"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>



        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Crecimiento" size="large" style={{ width: '100%', height: '100%' }}>
                <GrowthChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Supervivencia" size="large" style={{ width: '100%', height: '100%' }}>
                <SurvivalChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Consumo de suministro" size="large" style={{ width: '100%', height: '100%' }}>
                <ConsumptionSuppliesChart />
              </Cards>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Biomasa" size="large" style={{ width: '100%', height: '100%' }}>
                <BiomassChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="FCA" size="large" style={{ width: '100%', height: '100%' }}>
                <FCAChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Costos(USD) Ha/Día" size="large" style={{ width: '100%', height: '100%' }}>
                <CostsHaDayChart />
              </Cards>
            </Suspense>
          </Col>

        </Row>
      </Main>
    </>
  );
}

export default GeneralMonitoringFarm;
