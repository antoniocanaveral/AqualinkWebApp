import React, { Suspense, useState } from 'react';
import axios from 'axios';
import { Row, Col, Skeleton, Typography, Badge, Space, Form, Input, DatePicker, Select, Button, Divider } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { BasicFormWrapper, HorizontalFormStyleWrap, Main } from '../../styled';
import CalciumChart from './charts/CalciumChart';
import PhAlcalinityBehaviorChart from './charts/PhAlcalinityBehaviorChart';
import PhChart from './charts/PhChart';
import NitriteChart from './charts/NitriteChart';
import PhosphateChart from './charts/PhosphateChart';
import NitrateChart from './charts/NitrateChart';
import MagnesiumChart from './charts/MagnesiumChart';
import { AqualinkMapLab } from '../../../components/maps/aqualink-map-lab';

function WaterAqualityLabs() {

  return (
    <>
      <PageHeader  highlightText={"AquaLink Parámetros:"}
        title="Calidad del Agua"
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
              <Cards title="Comportamiento de Ph y Alcalinidad" size="large">
                <PhAlcalinityBehaviorChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Ph" size="large">
              <PhChart />
            </Cards>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Alcalinidad" size="large">
                <MagnesiumChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Nitratos" size="large">
                <NitrateChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Nitrito" size="large">
              <NitriteChart />
            </Cards>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Magnesio" size="large">
                <MagnesiumChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Calcio" size="large">
                <CalciumChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Fosfato" size="large">
              <PhosphateChart />
            </Cards>
          </Col>
         
        </Row>
      </Main >
    </>
  );
}

export default WaterAqualityLabs;

