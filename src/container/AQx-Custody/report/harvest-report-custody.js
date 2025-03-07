import { Row, Col, Table, Select, Card } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import ComparativePerformanceBarChart from './chart/ComparativePerformanceBarChart';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { loadCustodyCoordinations } from '../../../redux/custody/actionCreator';
import { fetchCoordinationInfo } from '../../../redux/views/coords/actionCreator';
import { fetchLotes } from '../../../redux/lote/actionCreator';
import LoteRendimientoWrapLab from './chart/LoteRendimientoWrapLab';
import { Cards } from '../../../components/cards/frame/cards-frame';

const { Option } = Select;

function HarvestReportCustody() {
    const dispatch = useDispatch();
    const organizations = useSelector((state) => state.auth.custodyOrgs);
    const { coordinationInfo } = useSelector(state => state.view_coords);

    const { lotes } = useSelector((state) => state.lote);

    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
    const [selectedLote, setSelectedLote] = useState(null);

    useEffect(() => {
        dispatch(fetchCoordinationInfo());
    }, [dispatch, selectedOrg]);

    useEffect(() => {
        if (selectedOrg) {
            dispatch(fetchLotes());
        }
    }, [dispatch, selectedOrg]);

    const PageRoutes = [
        {
            path: '/custody',
            breadcrumbName: selectedOrg,
        },
        {
            path: 'first',
            breadcrumbName: 'Coordinaciones',
        },
    ];

    const handleOrgChange = (value, orgEmail) => {
        setSelectedOrg(value);
        Cookies.set('orgId', value);
        Cookies.set('orgEmail', orgEmail);
        dispatch(loadCustodyCoordinations(value));
        dispatch(fetchLotes());
    };

    const validCoordinationInfo = Array.isArray(coordinationInfo) ? coordinationInfo : [];
    const maxCosechas = 5;
    const cosechas = validCoordinationInfo.slice(0, maxCosechas);
    while (cosechas.length < maxCosechas) {
        cosechas.push(null);
    }

    const generateRow = (key, label, fieldPath, calculateFn = null) => ({
        key,
        descripcion: label,
        ...cosechas.reduce((acc, coord, index) => {
            if (!coord) {
                acc[`cosecha${index + 1}`] = key === 'variacion' || key === 'eficiencia_planta' ? '0%' : 0;
            } else {
                let value = coord;

                if (calculateFn) {
                    value = calculateFn(coord);
                } else {
                    const fieldParts = fieldPath.split('.');
                    for (const part of fieldParts) {
                        value = value?.[part];
                        if (value === undefined) break;
                    }
                }
                acc[`cosecha${index + 1}`] = value ?? 0;
            }
            return acc;
        }, {}),
    });
    
    const cumplimientoHeader = {
        key: 'cumplimiento',
        descripcion: 'CUMPLIMIENTO',
        ...Array.from({ length: maxCosechas }, (_, i) => ({
            [`cosecha${i + 1}`]: '',
        })).reduce((acc, item) => ({ ...acc, ...item }), {}),
    };


    const tableData = [
        generateRow('fecha', 'FECHA', 'SM_FishingDate'),
        generateRow('lote_id', 'LOTE ID', 'SM_Coordination_ID.identifier'),
        generateRow('volumen_proyectado', 'VOLUMEN PROYECTADO', 'SM_Biomass'),
        generateRow('volumen_programado', 'VOLUMEN PROGRAMADO', 'SM_FishingVolume'),
        generateRow('volumen_cosechado', 'VOLUMEN COSECHADO', 'sm_fishingbiomass'),
        generateRow('biomasa_procesada', 'VOLUMEN A PROCESO', 'sm_processvolume'),
        cumplimientoHeader, 
        generateRow('variacion', 'VARIACIÓN PROY VS COS', null, (coord) => {
            const proyectado = coord?.SM_Biomass || 0;
            const cosechado = coord?.sm_fishingbiomass || 0;
            return proyectado > 0 ? `${((cosechado / proyectado) * 100).toFixed(2)}%` : '0%';
        }),
        generateRow('variacion', 'VARIACIÓN COOR VS COS', null, (coord) => {
            const coordinado = coord?.SM_FishingVolume || 0;
            const cosechado = coord?.sm_fishingbiomass || 0;
            return coordinado > 0 ? `${((cosechado / coordinado) * 100).toFixed(2)}%` : '0%';
        }),
        generateRow('eficiencia_planta', 'EFICIENCIA EN PLANTA', null, (coord) => {
            const procesada = coord?.sm_processvolume || 0;
            const cosechado = coord?.sm_fishingbiomass || 0;
            return cosechado > 0 ? `${((procesada / cosechado) * 100).toFixed(2)}%` : '0%';
        }),
    ];
    const columns = [
        { title: '', dataIndex: 'descripcion', key: 'descripcion', width: 203, fixed: 'left' },
        ...Array.from({ length: maxCosechas }, (_, i) => ({
            title: `Cosecha ${i + 1}`,
            dataIndex: `cosecha${i + 1}`,
            key: `cosecha${i + 1}`,
            width: 100,
        })),
    ];

    const handleLoteChange = (loteId) => {
        const found = lotes.find(l => l.id === loteId);
        setSelectedLote(found || null);
    };

    return (
        <>
            <PageHeader
                title="Performance"
                highlightText="Aqualink Empacadora"
                organizations={organizations}
                routes={PageRoutes}
                selectedOrg={selectedOrg}
                handleOrgChange={handleOrgChange}
            />

            <Main>
                {/* TABLA PRINCIPAL */}
                <Row gutter={25}>
                    <Col xxl={24} xs={24}>
                        <Table
                            columns={columns}
                            dataSource={tableData}
                            pagination={false}
                            bordered
                            showHeader={true}
                            rowKey="key"
                            className="custom-table-padding-table-1 table-responsive"
                            tableLayout="fixed"
                        />
                    </Col>
                </Row>

                {/* BARRA COMPARATIVA */}
                <Row gutter={25}>
                    <Col xl={24} xs={24} style={{ display: 'flex' }}>
                        <ComparativePerformanceBarChart  cosechas={tableData.filter(row => row.key === "variacion" || row.key === "eficiencia_planta")}/>
                    </Col>
                </Row>

                {/* SELECTOR DE LOTE + Gráficos Entero/Cola */}
                <br />
                <br />
                <Cards title="Performance" size="large">
                    <Row gutter={25} style={{ marginTop: 20 }}>
                        <Col span={8}>
                            <Select
                                style={{ width: '100%' }}
                                placeholder="Seleccione un Lote"
                                onChange={handleLoteChange}
                                value={selectedLote?.id || undefined}
                            >
                                {lotes.map((l) => (
                                    <Option key={l.id} value={l.id}>
                                        {l.SM_Coordination_ID?.identifier || `Lote ${l.id}`}
                                    </Option>
                                ))}
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={25} style={{ marginTop: 20 }}>
                        <Col xl={12} xs={24}>
                            {selectedLote && (
                                <LoteRendimientoWrapLab
                                    title="Rendimiento Entero"
                                    hocategoryLabels={[
                                        '30/40', '40/50', '50/60', '60/70',
                                        '70/80', '80/100', '100/120', '120/150',
                                    ]}
                                    hocategoryData={[
                                        selectedLote.sm_hocategory30_40 || 0,
                                        selectedLote.sm_hocategory40_50 || 0,
                                        selectedLote.sm_hocategory50_60 || 0,
                                        selectedLote.sm_hocategory60_70 || 0,
                                        selectedLote.sm_hocategory70_80 || 0,
                                        selectedLote.sm_hocategory80_100 || 0,
                                        selectedLote.sm_hocategory100_120 || 0,
                                        selectedLote.sm_hocategory120_150 || 0,
                                    ]}
                                />
                            )}
                        </Col>

                        <Col xl={12} xs={24}>
                            {selectedLote && (
                                <LoteRendimientoWrapLab
                                    title="Rendimiento Cola"
                                    hocategoryLabels={[
                                        '21/25', '26/30', '31/35', '36/40',
                                        '41/50', '51/60', '61/70', '71/90',
                                        '100/120', '120/150',
                                    ]}
                                    hocategoryData={[
                                        selectedLote.sm_hl21_25 || 0,
                                        selectedLote.sm_hl26_30 || 0,
                                        selectedLote.sm_hl31_35 || 0,
                                        selectedLote.sm_hl36_40 || 0,
                                        selectedLote.sm_hl41_50 || 0,
                                        selectedLote.sm_hl51_60 || 0,
                                        selectedLote.sm_hl61_70 || 0,
                                        selectedLote.sm_hl71_90 || 0,
                                        selectedLote.sm_hl100_120 || 0,
                                        selectedLote.sm_hl120_150 || 0,
                                    ]}
                                />
                            )}
                        </Col>

                    </Row>
                </Cards>

            </Main>
        </>
    );
}

export default HarvestReportCustody;
