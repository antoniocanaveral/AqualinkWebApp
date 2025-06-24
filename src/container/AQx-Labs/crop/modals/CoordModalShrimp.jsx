import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Row, Col, Form, Skeleton, Table, Typography, Badge, Checkbox, Avatar, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import moment from 'moment';
import { loadLabCoord } from '../../../../redux/lab/actionCreator';
import { BasicFormWrapper, Main } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../../components/maps/google-maps';
import { formatNumber } from '../../../../utility/utility';

function CoordModalShrimp() {

    const dispatch = useDispatch();
    let { id } = useParams();
    const coordination = useSelector((state) => state.lab.coordination);

    useEffect(() => {
        dispatch(loadLabCoord(id, () => { }));
    }, [dispatch, id]);

    const coordData = [
        { key: '4', label: 'Fecha de Siembra Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY HH:mm A') : '-' },
        { key: '5', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '20 ppm' },
        { key: '6', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '1.000.000 larvas' },
        { key: '7', label: 'Alcalinidad Piscina Pre Cría:', value: coordination?.coord_alkalinity || '140 ppm' },
        { key: '8', label: 'PH Piscina de Pre Cría:', value: coordination?.coord_pre_breeding_pool_ph || '5 ppm' },
    ];

  

    const columns = [
        {
            title: '', dataIndex: 'label', key: 'label', width: '55%', render: (text) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span
                        style={{
                            height: '5px',
                            width: '5px',
                            backgroundColor: '#012e40', // Elige el color del dot
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px', // Espacio entre el dot y el texto
                        }}
                    />
                    <span>{text}</span>
                </div>
            ),
        },
        { title: '', dataIndex: 'value', key: 'value', width: '45%' },
    ];

    return (
        <>
            <Main>
                <Row gutter={25}>
                    <Col sm={24} xs={24}>
                        <Suspense fallback={
                            <Cards headless>
                                <Skeleton paragraph={{ rows: 20 }} active />
                            </Cards>
                        }>
                            <BasicFormWrapper className="mb-25">
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
                                                <Typography.Title level={5}>{coordination?.org_name || 'EcSSA Manabí'}</Typography.Title>
                                                {coordination?.pre_breeding_pool || 'Pre Cria 1'}
                                            </div>
                                            <br />
                                            <Col xs={24} md={24} style={{ marginBottom: '18px', overflow: 'hidden' }}>
                                                <div style={{ height: '200px' }}>
                                                    <GoogleMaps />
                                                </div>
                                            </Col>

                                            <Col xs={24} md={24}>
                                                <Table
                                                    className='custom-table_lab'
                                                    dataSource={coordData}
                                                    columns={columns}
                                                    pagination={false}
                                                    showHeader={false}
                                                    bordered
                                                    rowClassName={() => 'custom-table-row'}
                                                />
                                            </Col>
                                        </Suspense>
                                    </Col>
                                </Row>
                            </BasicFormWrapper>
                        </Suspense>
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default CoordModalShrimp;
