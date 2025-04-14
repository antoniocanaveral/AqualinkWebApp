import React, { lazy, Suspense, useRef, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import { GeolocationMap } from '../../components/maps/geolocation-map';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { GeoTrackingMap } from '../../components/maps/GeoTrackingMap';
import { GoogleMaps } from '../../components/maps/google-maps';
function GeolocationCustody() {

    const { coordinationInfo, coordInfoLoading, coordInfoError } = useSelector(state => state.view_coords);

    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
    const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);
    const handleOrgChange = (orgId, orgEmail) => {
        setSelectedOrg(orgId);
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
    };

    const custodySelectOptions = custodyOrgs.length > 0 ? [
        {
            options: custodyOrgs.map(org => ({
                value: org.orgId,
                label: org.orgName,
                email: org.orgEmail,
                latitude: org.latitude,
                longitude: org.longitude
            })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Empacadora',
            value: selectedOrg || undefined,
        },
    ] : [];

    const combinedSelectOptions = [...custodySelectOptions];
    console.log("ci", combinedSelectOptions)


    const today = new Date().toISOString().split('T')[0];
    const validCoordinationInfo = Array.isArray(coordinationInfo) ? coordinationInfo : [];
    const installedCapacity = validCoordinationInfo.find(
        (coord) => coord.BP_AD_Org_ID && coord.BP_AD_Org_ID.id === selectedOrg
    )?.sm_installedcapacitylarva || 0;

    const totalFishingVolume = validCoordinationInfo.reduce((sum, coord) => sum + (coord.SM_FishingVolume || 0), 0);
    const biomassToday = validCoordinationInfo.reduce((sum, coord) => (coord.SM_FishingDate?.startsWith(today) ? sum + (coord.SM_Biomass || 0) : sum), 0);
    const totalBiomass = validCoordinationInfo.reduce((sum, coord) => sum + (coord.SM_Biomass || 0), 0);

    const statusRate = installedCapacity > 0 ? ((totalFishingVolume / installedCapacity) * 100).toFixed(2) : "0.00";
    const statusRateToday = totalBiomass > 0 ? ((biomassToday / totalBiomass) * 100).toFixed(2) : "0.00";
    const statusRateFishing = totalBiomass > 0 ? ((totalFishingVolume / totalBiomass) * 100).toFixed(2) : "0.00";

    const updatedOverviewData = [
        {
            id: 1,
            type: "primary",
            icon: "biomasa.svg",
            label: "Capacidad Instalada",
            total: installedCapacity.toFixed(0),
            suffix: "lb",
            status: "growth",
            statusRate: statusRate,
            decimel: 0,
            dataPeriod: "Todas las Camaroneras"
        },
        {
            id: 2,
            type: "primary",
            icon: "food.svg",
            label: "Pescas Concluidas",
            total: totalFishingVolume.toFixed(2),
            suffix: "kg",
            status: "growth",
            statusRate: statusRateFishing,
            decimel: 2,
            dataPeriod: "Todas las Camaroneras"
        },
        {
            id: 3,
            type: "primary",
            icon: "health.svg",
            label: "Ingreso a Planta",
            total: biomassToday.toFixed(2),
            suffix: "%",
            status: "growth",
            statusRate: statusRateToday,
            decimel: 2,
            dataPeriod: "Hoy"
        },
        {
            id: 4,
            type: "primary",
            icon: "growth.svg",
            label: "Proyección",
            total: totalBiomass.toFixed(0),
            suffix: "kg",
            dataPeriod: "Todas las Camaroneras"
        }
    ];

    const fakeMarkers = [
        {
          id: '1',
          lote: 'AQ-ECSSA-004-P3-2024-00034',
          descripcion: 'Confirmado por coordinación de cosechas.',
          estado: 'Confirmado',
          eta: '14:30',
          position: { lat: -2.165, lng: -79.88 },
        },
        {
          id: '2',
          lote: 'AQ-ECSSA-007-P1-2024-00056',
          descripcion: 'Cosecha iniciada desde la Mini App.',
          estado: 'Iniciada',
          eta: '14:45',
          position: { lat: -2.17, lng: -79.90 },
        },
        {
          id: '3',
          lote: 'AQ-ECSSA-002-P2-2024-00088',
          descripcion: 'Cosecha finalizada completamente.',
          estado: 'Terminada',
          eta: '15:00',
          position: { lat: -2.18, lng: -79.91 },
        },
        {
          id: '4',
          lote: 'AQ-ECSSA-001-P3-2024-00012',
          descripcion: 'Lote en traslado dentro del terminal del tratador.',
          estado: 'Custodia',
          eta: '15:10',
          position: { lat: -2.185, lng: -79.915 },
        },
        {
          id: '5',
          lote: 'AQ-ECSSA-005-P1-2024-00023',
          descripcion: 'Temperaturas registradas en la empacadora.',
          estado: 'Control',
          eta: '15:20',
          position: { lat: -2.19, lng: -79.92 },
        },
        {
          id: '6',
          lote: 'AQ-ECSSA-003-P4-2024-00067',
          descripcion: 'En línea de producción: peso y clasificación completados.',
          estado: 'En Proceso',
          eta: '15:35',
          position: { lat: -2.195, lng: -79.925 },
        },
      ];
      

    return (
        <>
            <PageHeader title="GeoTracking" highlightText="Aqualink Empacadora"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Row gutter={25}>
                    <Col xxl={12} xs={24}>
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <OverviewDataStyleWrap style={{ gap: 4 }} className="card-mesh-wrap align-center-v">
                                {updatedOverviewData.map((item, i) => (
                                    <OverviewCardMeshOriginal data={item} key={i} />
                                ))}
                            </OverviewDataStyleWrap>
                        </Suspense>
                    </Col>
                </Row>

                <Row gutter={25}>
                    <Col xs={24} style={{ width: '100%' }}>
                        <div style={{ width: '100%' }}>
                            <GoogleMaps
                                width="100%"
                                height={window.innerWidth >= 2000 ? 600 : 430}
                                type="geo"
                                markers={fakeMarkers}
                            />
                        </div>
                    </Col>

                </Row>


            </Main>
        </>
    );
}

export default GeolocationCustody;
