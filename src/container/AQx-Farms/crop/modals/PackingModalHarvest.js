// Importaciones necesarias
import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { Row, Col, Form, Skeleton, Avatar, Typography, Table } from 'antd';
import { Main, OrderSummary } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';

// Componente principal de PackingModalHarvest
function PackingModalHarvest() {
  


    return (
        <>
            <Main>
                <Row gutter={25}>
                    <Col xl={24} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: "center" }}>
                                <Typography.Title level={5}>{ 'Reporte de Planta'}</Typography.Title>
                            </div>
                          
                        </Suspense>
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default PackingModalHarvest;
