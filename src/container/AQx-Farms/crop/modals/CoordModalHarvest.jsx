
import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { Row, Col, Form, Skeleton, Avatar, Typography, Table } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { loadBinesByCoord, loadCustodyCoord, loadDrawerByCoord, loadDrawerStampByCoord } from '../../../../redux/custody/actionCreator';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import { Main, OrderSummary } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../../components/maps/google-maps';


const coordinationDataColumns = [
    {
        title: '', dataIndex: 'label', key: 'label', width: '45%', render: (text) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span
                    style={{
                        height: '5px',
                        width: '5px',
                        backgroundColor: '#012e40',
                        borderRadius: '50%',
                        display: 'inline-block',
                        marginRight: '8px',
                    }}
                />
                <span>{text}</span>
            </div>
        ),
    },
    { title: '', dataIndex: 'value', key: 'value', width: '55%' },
];


function CoordModalHarvest({id}) {
    console.log("CoordModalHarvest", id);
 
    const dispatch = useDispatch();

    const coordination = useSelector((state) => state.custody.coordination);
    const drawerStamps = useSelector((state) => state.custody.drawerStamps);


    useEffect(() => {
        dispatch(loadCustodyCoord(id, () => { }));
        dispatch(loadBinesByCoord(id, () => { }));
        dispatch(loadDrawerByCoord(id, () => { }));
        dispatch(loadDrawerStampByCoord(id, () => { }));
    }, []);

   
    const coordData = [
        { key: '1', label: 'Dirección:', value: coordination ? `${coordination.City} ${coordination.Address1}, ${coordination.Address2 || 'N/A'}` : '-' },
        { key: '2', label: 'Notificación de Pesca:', value: coordination ? coordination.SM_FishingNotification : '-' },
        { key: '3', label: 'Fecha de Pesca Solicitada:', value: coordination ? moment(coordination.planned_date).format("DD-MM-YYYY hh:mm A") : '-' },
        { key: '4', label: 'Tipo de Pesca:', value: coordination ? coordination.fishing_type : '-' },
        { key: '5', label: 'Tipo de Contenedor:', value: coordination ? coordination.container_type : '-' },
        { key: '6', label: 'Volumen de Pesca:', value: coordination ? `${coordination.fishing_volume} lbs` : '-' },
        { key: '7', label: 'Clasificación:', value: coordination ? coordination.Classification : '-' },
        { key: '8', label: 'Textura:', value: coordination ? coordination.texture : '-' },
    ];

   
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
                                <Typography.Title level={5}>{coordination?.org_name || 'EcSSA Manabí'}</Typography.Title>
                                {coordination?.warehouse_name || ''}
                            </div>
                            <Col xs={24} md={24}>
                                <Table
                                    className='custom-table_lab'
                                    dataSource={coordData}
                                    columns={coordinationDataColumns}
                                    pagination={false}
                                    showHeader={false}
                                    bordered
                                    rowClassName={() => 'custom-table-row'}
                                />
                            </Col>
                        </Suspense>
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default CoordModalHarvest;
