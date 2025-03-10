import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Card, Form, Select, Input, Button, Steps, Modal, message, InputNumber, Skeleton, DatePicker, Table } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import { loadCustodyCoordinations } from '../../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import { registerLote } from '../../../redux/lote/actionCreator';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import moment from 'moment';
const { Step } = Steps;
const { Option } = Select;

function LoteViewLab() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({});
    const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName'));
    const organizations = useSelector((state) => state.auth.labsOrgs);



    const handleOrgChange = (orgId) => {
        setSelectedOrg(orgId);
        const selectedOrg = organizations.find(org => org.orgId === orgId);
        const orgEmail = selectedOrg ? selectedOrg.orgEmail : '';
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
        Cookies.remove('poolId');
    };


    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: organizations.map(org => ({
                value: org.orgId,
                label: org.orgName,
                email: org.orgEmail,
            })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Empacadora',
            value: selectedOrg || undefined,
        },
    ] : [];

    const combinedSelectOptions = [...farmsSelectOptions];

    const loteColumns = [
        { title: 'Lote ID', dataIndex: 'loteId', key: 'loteId' },
        { title: 'Módulo', dataIndex: 'modulo', key: 'modulo' },
        { title: 'Tanque', dataIndex: 'tanque', key: 'tanque' },
        { title: 'Volumen TTL', dataIndex: 'volumenTtl', key: 'volumenTtl' },
        { title: 'Despacho 1', dataIndex: 'despacho1', key: 'despacho1' },
        { title: 'Cantidad 1', dataIndex: 'cantidad1', key: 'cantidad1' },
        { title: 'Despacho 2', dataIndex: 'despacho2', key: 'despacho2' },
        { title: 'Cantidad 2', dataIndex: 'cantidad2', key: 'cantidad2' },
        { title: 'Despacho 3', dataIndex: 'despacho3', key: 'despacho3' },
        { title: 'Cantidad 3', dataIndex: 'cantidad3', key: 'cantidad3' },
        { title: 'TTL Reservado', dataIndex: 'ttlReservado', key: 'ttlReservado' },
    ];

    // Datos de la tabla
    const loteData = [
        {
            key: '1',
            loteId: 'AK-00025/GIV_HT-33/01-25',
            modulo: 1,
            tanque: 33,
            volumenTtl: '3.600.000',
            despacho1: 'NS-Pc1_P04',
            cantidad1: '1.100.000',
            despacho2: 'NS-Pc1_P04',
            cantidad2: '1.100.000',
            despacho3: 'NS-Pc5_P04',
            cantidad3: '1.320.000',
            ttlReservado: '3.520.000',
        },
        {
            key: '2',
            loteId: 'AK-00030/GIV_HT-40/02-26',
            modulo: 2,
            tanque: 40,
            volumenTtl: '4.200.000',
            despacho1: 'NS-Pc2_P05',
            cantidad1: '1.300.000',
            despacho2: 'NS-Pc3_P06',
            cantidad2: '1.200.000',
            despacho3: 'NS-Pc6_P07',
            cantidad3: '1.700.000',
            ttlReservado: '4.200.000',
        },
    ];

    return (
        <>
            <PageHeader highlightText="Aqualink Laboratorio" title="Añadir Lote Laboratorio"
                organizations={organizations}
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Row gutter={25}>
                    <Col xl={24} xs={24}>
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <Cards title="Lista de Lotes" size="large">
                                <Table
                                    columns={loteColumns}
                                    dataSource={loteData}
                                    pagination={{ pageSize: 5 }}
                                    rowKey="loteId"
                                />
                            </Cards>
                        </Suspense>
                    </Col>
                </Row>

            </Main>

        </>
    );
}

export default LoteViewLab;
