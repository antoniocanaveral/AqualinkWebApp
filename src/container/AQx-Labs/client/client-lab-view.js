import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Tabs, Descriptions } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import DonutChartComponent from '../../../components/charts/donut/DonutChartComponent';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools, selectLabOrgsWithWarehouses } from '../../../redux/authentication/selectors';
import Cookies from 'js-cookie';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { Text } from 'recharts';

const { TabPane } = Tabs;

function ClientLabs() {

    const [showChart, setShowChart] = useState(false);
    const [selectedFarmOrg, setSelectedFarmOrg] = useState(null)


    const labOrgsWithPools = useSelector(selectLabOrgsWithWarehouses);

    const farmsOrgsWithPools = useSelector(selectLabOrgsWithWarehouses);
    const organizations = useSelector((state) => state.auth.farmsOrgs);

    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);

    const handleOrgChange = (orgId, orgEmail) => {
        setSelectedOrg(orgId);
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
    };



    useEffect(() => {
        const farm = labOrgsWithPools.find(org => org.orgId === selectedOrg);
        setSelectedFarmOrg(farm)
    }, [selectedOrg]);

    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: labOrgsWithPools.map(org => ({
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
        ...farmsSelectOptions
    ];



    const clientInfo = [
        { key: '1', categoria: 'Razón Social', valor: selectedFarmOrg?.orgName || 'N/A' },
        { key: '2', categoria: 'RUC', valor: selectedFarmOrg?.TaxID || 'N/A' },
        { key: '3', categoria: 'Dirección Fiscal', valor: `${selectedFarmOrg?.SM_LocationName}, ${selectedFarmOrg?.City_Identifier}` },
        { key: '4', categoria: 'Representante Legal', valor: selectedFarmOrg?.name_rl || 'N/A' },
        { key: '5', categoria: 'CC (RL)', valor: selectedFarmOrg?.taxid_rl || 'N/A' },
        { key: '6', categoria: 'Correo Electrónico (RL)', valor: selectedFarmOrg?.email_rl || 'N/A' },
        { key: '7', categoria: 'Teléfono (Convencional)', valor: selectedFarmOrg?.Phone || 'N/A' },
        { key: '8', categoria: 'Teléfono (Celular)', valor: selectedFarmOrg?.Phone2 || 'N/A' },
        { key: '9', categoria: 'Código SCI', valor: selectedFarmOrg?.SM_CodigoVAP || 'N/A' },
        { key: '11', categoria: 'Nombre de Cliente', valor: selectedFarmOrg?.AD_Client_Identifier },
        { key: '12', categoria: 'Código Aqualink', valor: selectedFarmOrg?.Value || 'N/A' },
    ];



    const infrastructureData = selectedFarmOrg?.pools?.map((pool, index) => ({
        key: index + 1,
        identificador: pool.poolName,
        extension: `${pool.poolSize} Ha`,
        profundidadOperativa: `${pool.SM_OppDepth || 0} mts`,
        profundidadSiembra: `${pool.plantingDepth} mts`,
        profundidadPesca: `${pool.sm_transferdepth} mts`,
        sistemaProduccion: selectedFarmOrg?.SM_ProductionType_Identifier || 'N/A',
        metodoAlimentacion: `${pool.feeding_method}`,
        aireacionHpHa: `${pool.sm_mechanicalaeration} `,
        aireacionHpTotal: `${pool.sm_mechanicalaeration * pool.poolSize} `,
        ras: `${selectedFarmOrg?.water_system === "RECIRCULATION" ? "✅" : ""} `,

        aguaVolOp: `${pool.SM_OppDepth * (pool.poolSize * 10000)} m³`,
        aguaVolSiembra: `${pool.plantingDepth * (pool.poolSize * 10000)} m³`,
        aguaVolPesca: `${pool.sm_transferdepth * (pool.poolSize * 10000)} m³`,
    })) || [];


    const columns = [
        {
            title: 'Categoría',
            dataIndex: 'categoria',
            key: 'categoria',
            width: '70%',
        },
        {
            title: 'Valor',
            dataIndex: 'valor',
            key: 'valor',
            render: (text) => text || 'N/A',
            width: '30%',
        },
    ];

    const infrastructureColumns = [
        {
            title: 'ID',
            dataIndex: 'identificador',
            key: 'identificador',
            width: '10%',
        },
        {
            title: 'Extensión',
            dataIndex: 'extension',
            key: 'extension',
            width: '10%',
        },
        {
            title: 'Profundidad Operativa',
            dataIndex: 'profundidadOperativa',
            key: 'profundidadOperativa',
            width: '10%',
        },
        {
            title: 'Profundidad Siembra',
            dataIndex: 'profundidadSiembra',
            key: 'profundidadSiembra',
            width: '10%',
        },
        {
            title: 'Profundidad Pesca',
            dataIndex: 'profundidadPesca',
            key: 'profundidadPesca',
            width: '10%',
        },
        {
            title: 'Sistema Producción',
            dataIndex: 'sistemaProduccion',
            key: 'sistemaProduccion',
            width: '10%',
        },



        {
            title: 'Aireación Hp/Ha',
            dataIndex: 'aireacionHpHa',
            key: 'aireacionHpHa',
            width: '10%',
        },
        {
            title: 'Aireación Hp/Total',
            dataIndex: 'aireacionHpTotal',
            key: 'aireacionHpTotal',
            width: '10%',
        },

        {
            title: 'Método de Alimentación',
            dataIndex: 'metodoAlimentacion',
            key: 'metodoAlimentacion',
            width: '10%',
        },
        {
            title: 'RAS',
            dataIndex: 'ras',
            key: 'ras',
            width: '5%',
        },
        {
            title: 'Vol. Agua Operativa',
            dataIndex: 'aguaVolOp',
            key: 'aguaVolOp',
            width: '10%',
        },
        {
            title: 'Volumen Siembra',
            dataIndex: 'aguaVolSiembra',
            key: 'aguaVolSiembra',
            width: '10%',
        },
        {
            title: 'Volumen Pesca',
            dataIndex: 'aguaVolPesca',
            key: 'aguaVolPesca',
            width: '10%',
        },
    ];


    const maxNodos = selectedFarmOrg?.pools?.reduce((max, pool) => {
        return Math.max(max, pool.geoLocation?.length || 0);
    }, 0) || 0;

    const geolocationData = selectedFarmOrg?.pools?.map((pool, index) => {
        const nodoData = {};

        for (let i = 0; i < maxNodos; i++) {
            nodoData[`nodo${i + 1}`] = pool.geoLocation?.[i]
                ? `${pool.geoLocation[i].latitude}, ${pool.geoLocation[i].longitude}`
                : 'N/A';
        }

        return {
            key: index + 1,
            identificador: pool.poolName,
            extension: `${pool.poolSize} Ha`,
            ...nodoData
        };
    }) || [];


    const getSalesRegionCount = (pools) => {
        const uniqueSalesRegions = new Set();

        pools?.forEach(pool => {
            if (pool.salesRegion?.id) {
                uniqueSalesRegions.add(pool.salesRegion.id);
            }
        });

        return uniqueSalesRegions.size;
    };


    const salesRegionCount = getSalesRegionCount(selectedFarmOrg?.pools);


    const getTotalPools = (pools) => {
        return pools ? pools.length : 0;
    };


    const totalPools = getTotalPools(selectedFarmOrg?.pools);

    const waterVolumeDataByModule = selectedFarmOrg?.pools?.reduce((acc, pool) => {
        if (pool.salesRegion?.id) {
            const moduleName = pool.salesRegion.name; // Agrupar por módulo
            const volume = (pool.SM_OppDepth || 0) * (pool.poolSize * 10000);

            acc[moduleName] = (acc[moduleName] || 0) + volume;
        }
        return acc;
    }, {});

    const CapacityVolumeDataByModule = selectedFarmOrg?.pools?.reduce((acc, pool) => {
        if (pool.salesRegion?.id) {
            const moduleName = pool.salesRegion.name; // Agrupar por módulo
            const volume = (pool.poolSize * 10000);

            acc[moduleName] = (acc[moduleName] || 0) + volume;
        }
        return acc;
    }, {});

    const capacityVolumeChartData = Object.entries(CapacityVolumeDataByModule || {}).map(([label, value]) => ({
        label,
        value
    }));

    const waterVolumeChartData = Object.entries(waterVolumeDataByModule || {}).map(([label, value]) => ({
        label,
        value
    }));


    const farmInfo = [
        { key: '1', categoria: 'Provincia', valor: selectedFarmOrg?.Region_Identifier || 'N/A' },
        { key: '2', categoria: 'Cantón', valor: selectedFarmOrg?.City_Identifier || 'N/A' },
        { key: '4', categoria: 'Acuerdo Ministerial', valor: selectedFarmOrg?.SM_MinisterialAgreement || 'N/A' },
        { key: '5', categoria: 'Certificado de Inocuidad', valor: selectedFarmOrg?.SM_SafetyCertificate || 'N/A' },
        { key: '9', categoria: '# De Módulos"', valor: salesRegionCount },
        { key: '10', categoria: '# De Tanques', valor: totalPools },
    ];



    const geolocationColumns = [
        {
            title: 'Identificador',
            dataIndex: 'identificador',
            key: 'identificador',
            width: '10%',
        },
        {
            title: 'Extensión',
            dataIndex: 'extension',
            key: 'extension',
            width: '10%',
        },
        ...Array.from({ length: maxNodos }, (_, i) => ({
            title: `Nodo ${i + 1}`,
            dataIndex: `nodo${i + 1}`,
            key: `nodo${i + 1}`,
            width: '10%',
        }))
    ];


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowChart(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <PageHeader
                highlightText="Aqualink Administración"
                title="Ficha de Laboratorios"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Tabs defaultActiveKey="1" type="line">
                    {/* Tab 1: Información */}
                    <TabPane tab="Información" key="1">
                        <Row gutter={25}>
                            <Col xl={11} xs={24} xxl={10} style={{ display: 'flex' }}>
                                <Suspense
                                    fallback={
                                        <Cards headless>
                                            <Skeleton active />
                                        </Cards>
                                    }
                                >
                                    <AqualinkMaps
                                        width={'100%'}
                                        height={
                                            window.innerWidth >= 2000 ? '600px' :
                                                '305px'
                                        }
                                        selectedOrg={selectedOrg}
                                        farmsOrgsWithPools={farmsOrgsWithPools}
                                        type="LabClient"
                                        totalModules={salesRegionCount}
                                        totalTanks={totalPools}
                                    />


                                </Suspense>
                            </Col>
                            <Col xl={13} xs={24} style={{ display: "flex" }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Información de Camaronera" size="large">
                                        <Table
                                            columns={columns}
                                            dataSource={clientInfo}
                                            pagination={false}
                                            bordered
                                        />
                                    </Cards>
                                </Suspense>
                            </Col>
                        </Row>
                        <Row gutter={[10, 0]} equal-heights>
                            <Col xl={8} xs={24} style={{ display: 'flex' }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Información de Complementaria" size="large">
                                        <Table
                                            columns={columns}
                                            dataSource={farmInfo}
                                            pagination={false}
                                            bordered
                                        />
                                    </Cards>
                                </Suspense>
                            </Col>
                            <Col xl={8} xs={24} style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Relación de Capacidad por Módulo" size="large" style={{ marginBottom: 0 }}>
                                        {showChart && (
                                            <DonutChartComponent
                                                data={capacityVolumeChartData}
                                                titleText="Capacidad"
                                                subtitleText="Por Módulo"
                                                height={200}
                                                width={200}
                                            />
                                        )}

                                    </Cards>
                                </Suspense>

                            </Col>
                            <Col xl={8} xs={24} style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Volumen de agua por Módulo" size="large" style={{ flex: 1, marginTop: 0 }}>
                                        {showChart && (
                                            <DonutChartComponent
                                                data={waterVolumeChartData}
                                                titleText="Volumen de Agua"
                                                subtitleText="Por Módulo"
                                                height={200}
                                                width={200}
                                            />

                                        )}
                                    </Cards>
                                </Suspense>
                            </Col>
                        </Row>
                    </TabPane>

                    {/* Tab 2: Infraestructura */}
                    <TabPane tab="Infraestructura y Recursos" key="2">
                        <Row gutter={[25, 25]}>
                            <Col span={24}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Infraestructura - Detalles de Piscinas" size="large">
                                        <Table
                                            className='table-responsive'
                                            columns={infrastructureColumns}
                                            dataSource={infrastructureData}
                                            pagination={{ pageSize: 5 }}
                                            bordered
                                        />
                                    </Cards>
                                </Suspense>
                            </Col>
                        </Row>
                    </TabPane>

                    {/* Tab 3: Geolocalización */}
                    <TabPane tab="Georeferenciación" key="3">
                        <Row gutter={[25, 25]}>
                            <Col span={24}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <AqualinkMaps
                                        width={'100%'}
                                        height={
                                            window.innerWidth >= 2000 ? '600px' :
                                                '305px'
                                        }
                                        selectedOrg={selectedOrg}
                                        farmsOrgsWithPools={farmsOrgsWithPools}
                                        type="LabClient"
                                        totalModules={salesRegionCount}
                                        totalTanks={totalPools}
                                    />

                                </Suspense>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </Main>
        </>
    );
}

export default ClientLabs;
