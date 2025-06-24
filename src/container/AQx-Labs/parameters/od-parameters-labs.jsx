import React, { Suspense, useState } from 'react';
import axios from 'axios';
import { Row, Col, Skeleton, Typography, Badge, Space, Form, Input, DatePicker, Select, Button, Divider } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { BasicFormWrapper, HorizontalFormStyleWrap, Main } from '../../styled';
import DissolvedOxygenBehaviorChart from './charts/DissolvedOxygenBehaviorChart';
import DissolvedOxygenPMChart from './charts/DissolvedOxygenPMChart';
import DissolvedOxygenHalfDayChart from './charts/DissolvedOxygenHalfDayChart';
import DissolvedOxygenAMDayChart from './charts/DissolvedOxygenAMDayChart';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { AqualinkMapLab } from '../../../components/maps/aqualink-map-lab';

function ODParametersLabs() {



  return (
    <>
      <PageHeader highlightText={"AquaLink Parámetros:"}
        title="OD y Temperatura"
        selectOptions={[
          ["Lab 1", "Lab 2", "Lab 3"],
          ["Módulo 1", "Módulo 2", "Módulo 3"],
          ["Tanque 1", "Tanque 2", "Tanque 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <AqualinkMapLab height={220} />
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Comportamiento de Oxígeno Disuelto" size="large">
                <DissolvedOxygenBehaviorChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Oxígeno Disuelto AM" size="large">
              <DissolvedOxygenAMDayChart />
            </Cards>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Oxígeno Disuelto Medio día" size="large">
                <DissolvedOxygenHalfDayChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Oxígeno Disuelto PM" size="large">
                <DissolvedOxygenPMChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main >
    </>
  );
}

export default ODParametersLabs;

