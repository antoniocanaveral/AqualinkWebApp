// src/components/TaskFarms.js

import React, { useEffect, useState, Suspense } from 'react';
import { Row, Col, Skeleton, notification } from 'antd';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import ScheduleTransfer from './task/scheduled-transfer';
import ScheduleHarvest from './task/scheduled-harvest';
import ScheduleFarm from './task/scheduled-farm';
import TasksScreen from './task/taskScreen/TaskScreen';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { selectFarmsOrgsWithPools } from '../../redux/authentication/selectors';
import { getShrimpFarmingTransferScreen } from '../../redux/operation/actionCreator';

function TaskFarms() {
    const dispatch = useDispatch();

    const organizations = useSelector((state) => state.auth.farmsOrgs);
    const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
    const [selectedSector, setSelectedSector] = useState(null);
    const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);

    const handleOrgChange = (orgId, orgEmail) => {
        setSelectedOrg(orgId);
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
        Cookies.remove('poolId');
        setSelectedPool(null);
        setSelectedSector(null);
        console.log(JSON.stringify(farmsOrgsWithPools));

        // Despachar la acción para obtener los datos de transferencia al cambiar la organización
        dispatch(getShrimpFarmingTransferScreen());
    };

    const handleSectorChange = (sectorId) => {
        setSelectedSector(sectorId);
        setSelectedPool(null);
    };

    const handlePoolChange = (poolId) => {
        setSelectedPool(poolId);
        Cookies.set('poolId', poolId);
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

    const sectorsOptions = selectedOrg
        ? farmsOrgsWithPools
            .find(org => org.orgId === selectedOrg)?.pools
            .reduce((acc, pool) => {
                if (pool.salesRegion && !acc.find(sector => sector.value === pool.salesRegion.id)) {
                    acc.push({
                        value: pool.salesRegion.id,
                        label: pool.salesRegion.name,
                    });
                }
                return acc;
            }, [])
        : [];

    const sectorSelectOptions = selectedOrg ? [
        {
            options: sectorsOptions,
            onChange: handleSectorChange,
            placeholder: 'Seleccione un Sector',
            value: selectedSector || undefined,
        },
    ] : [];

    const poolsOptions = selectedSector
        ? farmsOrgsWithPools
            .find(org => org.orgId === selectedOrg)?.pools
            .filter(pool => pool.salesRegion && pool.salesRegion.id === selectedSector)
            .map(pool => ({
                value: pool.poolId,
                label: pool.poolName,
            }))
        : [];

    const poolsSelectOptions = selectedSector ? [
        {
            options: poolsOptions,
            onChange: handlePoolChange,
            placeholder: 'Seleccione una Pool',
            disabled: poolsOptions.length === 0,
            value: selectedPool || undefined,
        },
    ] : [];

    const combinedSelectOptions = [
        ...farmsSelectOptions,
        ...sectorSelectOptions,
        ...poolsSelectOptions,
    ];

    const error = useSelector((state) => state.auth.error);

    // Seleccionar las listas separadas desde Redux
    const plannedFarming = useSelector((state) => state.operation.plannedFarming);
    const plannedHarvesting = useSelector((state) => state.operation.plannedHarvesting);
    const plannedTransfers = useSelector((state) => state.operation.plannedTransfers);

    const transferLoading = useSelector((state) => state.operation.loading);
    const transferError = useSelector((state) => state.operation.error);

    useEffect(() => {
        dispatch(getShrimpFarmingTransferScreen());

        if (error) {
            notification.error({
                message: 'Error',
                description: error,
            });
        }
    }, [error]);

    return (
        <>
            <Main>
                <Row gutter={[24, 24]}>
                    <Col xxl={24} xs={24}>
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <PageHeader
                                highlightText="Aqualink Camaronera"
                                title="Tareas"
                                selectOptions={combinedSelectOptions}
                                selectedOrg={selectedOrg}
                                selectedPool={selectedPool}
                                onBack={() => window.history.back()}
                            />
                            <TasksScreen selectedPoolId={selectedPool} />
                            <br/>
                            <Row gutter={16} style={{ marginBottom: '20px', display: 'flex' }}>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                        <ScheduleFarm
                                            plannedFarming={plannedFarming}
                                            plannedTransfers={plannedTransfers}
                                            loading={transferLoading}
                                            error={transferError}
                                        />
                                    </Suspense>
                                </Col>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                        <ScheduleHarvest
                                            plannedHarvesting={plannedHarvesting}
                                        />
                                    </Suspense>
                                </Col>
                                <Col xl={8} lg={24} xs={24} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                        <ScheduleTransfer 
                                            plannedTransfers={plannedTransfers}
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

export default TaskFarms;
