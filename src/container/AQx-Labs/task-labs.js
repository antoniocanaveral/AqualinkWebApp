// src/components/TaskFarms.js

import React, { useEffect, useState, Suspense } from 'react';
import { Row, Col, Skeleton, notification } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { selectFarmsOrgsWithPools, selectLabOrgsWithWarehouses } from '../../redux/authentication/selectors';
import { getShrimpFarmingTransferScreen } from '../../redux/operation/actionCreator';
import TasksScreen from '../AQx-Farms/task/taskScreen/TaskScreen';
import ScheduleSowingLab from './task/scheduled-sowing-lab';
import ScheduleHarvestLab from './task/scheduled-harvest-lab';
import ScheduleDispatchLab from './task/scheduled-dispatch-lab';
import { fetchLablotesInfo } from '../../redux/lablote/actionCreator';

function TaskLabs() {
    const dispatch = useDispatch();

    const organizations = useSelector((state) => state.auth.labsOrgs);
    const farmsOrgsWithPools = useSelector(selectLabOrgsWithWarehouses);

    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
    const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);

    useEffect(() => {
        dispatch(fetchLablotesInfo());
    }, [dispatch, selectedOrg]);


    const handleOrgChange = (orgId, orgEmail) => {
        setSelectedOrg(orgId);
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
        Cookies.remove('poolId');
    };


    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: farmsOrgsWithPools.map(org => ({
                value: org.orgId,
                label: org.orgName,
                email: org.orgEmail,
            })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Farm',
            value: selectedOrg || undefined,
        },
    ] : [];

    const combinedSelectOptions = [
        ...farmsSelectOptions,
    ];


    // Función para extraer valores de coordinaciones (máximo 3)
    const extractCoordinationData = (coordinations) => {
        const despacho = ['', '', ''];
        const cantidad = ['', '', ''];

        if (coordinations && Array.isArray(coordinations)) {
            for (let i = 0; i < Math.min(3, coordinations.length); i++) {
                despacho[i] = coordinations[i]?.coordination_value || '';
                cantidad[i] = coordinations[i]?.sm_confirmedtotal?.toLocaleString() || '';
            }
        }
        return { despacho, cantidad };
    };

    if (lablotesLoading) {
        return <p>Cargando datos...</p>;
    }

    if (lablotesError) {
        return <p>Ocurrió un error al cargar los lotes: {lablotesError}</p>;
    }


    return (
        <>
            <Main>
                <Row gutter={[24, 24]}>
                    <Col xxl={24} xs={24}>
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <PageHeader
                                highlightText="Aqualink Laboratorio"
                                title="Tareas"
                                selectOptions={combinedSelectOptions}
                                selectedOrg={selectedOrg}
                                onBack={() => window.history.back()}
                            />

                            <Row gutter={16} style={{ marginBottom: '20px', display: 'flex' }}>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                        <ScheduleSowingLab
                                            data={lablotes}
                                            loading={lablotesLoading}
                                            error={lablotesError}
                                        />
                                    </Suspense>
                                </Col>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                        <ScheduleHarvestLab
                                            data={lablotes}
                                            loading={lablotesLoading}
                                            error={lablotesError}
                                        />
                                    </Suspense>
                                </Col>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                        <ScheduleDispatchLab
                                            data={lablotes}
                                            loading={lablotesLoading}
                                            error={lablotesError}
                                        />
                                    </Suspense>
                                </Col>
                            </Row>
                        </Suspense>
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default TaskLabs