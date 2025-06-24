/* eslint-disable react-hooks/rules-of-hooks */
import React, { lazy, Suspense, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import { estadoDescriptions, GoogleMaps } from '../../components/maps/google-maps';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustodyControls } from '../../redux/custodyControl/actionCreator';
import usePageHeaderSelectors from '../../hooks/usePageHeaderSelectors';
import { fetchCoordinationInfo } from '../../redux/views/coords/actionCreator';

function GeolocationCustody() {
  const dispatch = useDispatch();
  const { custodyControls, loading, error } = useSelector(state => state.custodyControl);
  const { coordinationInfo, coordInfoLoading, coordInfoError } = useSelector((state) => state.view_coords);

  // Use the custom hook for organization selector
  const { selectedOrg, combinedSelectOptions } = usePageHeaderSelectors({
    orgsSelector: () => useSelector((state) => state.auth.custodyOrgs),
    poolsSelector: () => [],
    includeSector: false,
    includePool: false,
    orgType: 'Empacadora',
  });

  // Find the selected empacadora's coordinates
  const selectedEmpacadora = combinedSelectOptions[0]?.options.find((org) => org.value === selectedOrg);
  const empacadoraMarker = selectedEmpacadora
    ? {
        id: `empacadora-${selectedEmpacadora.value}`,
        lote: `Empacadora: ${selectedEmpacadora.label}`,
        descripcion: estadoDescriptions['Empacadora'], // Use shared estadoDescriptions
        estado: 'Empacadora',
        eta: '--:--',
        position: {
          lat: parseFloat(selectedEmpacadora.latitude),
          lng: parseFloat(selectedEmpacadora.longitude),
        },
        icon: 'mpc.png',
      }
    : null;

  const today = new Date().toISOString().split('T')[0];
  const validCoordinationInfo = Array.isArray(coordinationInfo) ? coordinationInfo : [];
  const installedCapacity = validCoordinationInfo.find(
    (coord) => coord.BP_AD_Org_ID && coord.BP_AD_Org_ID.id === selectedOrg
  )?.sm_installedcapacitylarva || 0;

  const totalFishingVolume = validCoordinationInfo.reduce((sum, coord) => sum + (coord.SM_FishingVolume || 0), 0);
  const biomassToday = validCoordinationInfo.reduce(
    (sum, coord) => (coord.SM_FishingDate?.startsWith(today) ? sum + (coord.SM_Biomass || 0) : sum),
    0
  );
  const totalBiomass = validCoordinationInfo.reduce((sum, coord) => sum + (coord.SM_Biomass || 0), 0);

  const statusRate = installedCapacity > 0 ? ((totalFishingVolume / installedCapacity) * 100).toFixed(2) : '0.00';
  const statusRateToday = totalBiomass > 0 ? ((biomassToday / totalBiomass) * 100).toFixed(2) : '0.00';
  const statusRateFishing = totalBiomass > 0 ? ((totalFishingVolume / totalBiomass) * 100).toFixed(2) : '0.00';

  const updatedOverviewData = [
    {
      id: 1,
      type: 'primary',
      icon: 'biomasa.svg',
      label: 'Capacidad Instalada',
      total: installedCapacity.toFixed(0),
      suffix: 'lb',
      status: 'growth',
      statusRate: statusRate,
      decimel: 0,
      dataPeriod: 'Todas las Camaroneras',
    },
    {
      id: 2,
      type: 'primary',
      icon: 'food.svg',
      label: 'Pescas Concluidas',
      total: totalFishingVolume.toFixed(2),
      suffix: 'kg',
      status: 'growth',
      statusRate: statusRateFishing,
      decimel: 2,
      dataPeriod: 'Todas las Camaroneras',
    },
    {
      id: 3,
      type: 'primary',
      icon: 'health.svg',
      label: 'Ingreso a Planta',
      total: biomassToday.toFixed(2),
      suffix: '%',
      status: 'growth',
      statusRate: statusRateToday,
      decimel: 2,
      dataPeriod: 'Hoy',
    },
    {
      id: 4,
      type: 'primary',
      icon: 'growth.svg',
      label: 'Proyección',
      total: totalBiomass.toFixed(0),
      suffix: 'kg',
      dataPeriod: 'Todas las Camaroneras',
    },
  ];

  // Map custodyControls to markers
  const custodyMarkers = custodyControls.map(control => ({
    id: control.uid,
    lote: control.C_Campaign_ID?.identifier || 'Unknown',
    descripcion: estadoDescriptions[control.sm_state] || 'Estado desconocido',
    estado: control.sm_state,
    eta: control.SM_EndTime ? new Date(control.SM_EndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--',
    position: {
      lat: parseFloat(control.sm_dinamiccoordinates?.locations?.[0]?.latitud || -2.18),
      lng: parseFloat(control.sm_dinamiccoordinates?.locations?.[0]?.longitud || -79.92),
    },
    icon: 'car.png',
  }));

  // Combine with empacadoraMarker
  const allMarkers = empacadoraMarker ? [...custodyMarkers, empacadoraMarker] : custodyMarkers;

  useEffect(() => {
    dispatch(fetchCustodyControls());
    dispatch(fetchCoordinationInfo());
  }, [dispatch, selectedOrg]);

  return (
    <>
      <PageHeader
        title="GeoTracking"
        highlightText="Aqualink Empacadora"
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
                markers={allMarkers}
                custodyControls={custodyControls} // Pass custodyControls data
              />
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default GeolocationCustody;