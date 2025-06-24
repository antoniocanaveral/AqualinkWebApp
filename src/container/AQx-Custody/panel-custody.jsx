import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import TankCarouselCustody from './panel/components/TankCarouselCustody';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoordinationInfo } from '../../redux/views/coords/actionCreator';
import Cookies from 'js-cookie';

function PanelCustody() {

  const dispatch = useDispatch();
  const { coordinationInfo, coordInfoLoading, coordInfoError } = useSelector(state => state.view_coords);

  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);


  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
  };

  const farmsSelectOptions = organizations.length > 0 ? [
    {
      options: custodyOrgs.map(org => ({
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


  useEffect(() => {
    dispatch(fetchCoordinationInfo());
  }, [dispatch, selectedOrg]);

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

  return (
    <>
      <PageHeader title="Control Panel" highlightText="Aqualink Empacadora"
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
          <Col xl={24} xs={24}>
            <center>
              <Typography.Title level={4}>Coordinaciones Activas</Typography.Title>
            </center>
            <TankCarouselCustody
              tankData={validCoordinationInfo.map((coord) => {
                console.log(coord)

                const clasificacionReportada =
                  coord.SM_Category30_40 ? '30-40' :
                    coord.SM_Category40_50 ? '40-50' :
                      coord.SM_Category50_60 ? '50-60' :
                        coord.SM_Category60_70 ? '60-70' :
                          coord.SM_Category70_80 ? '70-80' :
                            coord.SM_Category80_100 ? '80-100' :
                              coord.SM_Category100_120 ? '100-120' :
                                coord.SM_Category120_150 ? '120-150' :
                                  coord.SM_RequestedPL || 'N/A';
                const estado = coord.SM_CoordinationStatus?.identifier
                  ? coord.SM_CoordinationStatus.identifier.replace(/[<>]/g, '') // Reemplaza < y > por vacío
                  : 'Desconocido';

                return {
                  id: coord.id,
                  ci_id: coord.ci_id,
                  nombreCamaronera: coord.org_name || 'N/A',
                  codigoAQLK: coord.org_value || 'N/A',
                  loteID: coord.lote_id || 'N/A',
                  estado: estado,
                  fechaPesca: coord.SM_FishingDate ? new Date(coord.SM_FishingDate).toLocaleDateString('es-ES') : 'N/A',
                  piscina: coord.warehouse_name || 'N/A',
                  volumenProgramado: coord.SM_FishingVolume ? `${coord.SM_FishingVolume} lbs` : 'N/A',
                  tipoCosecha: coord.SM_CoordinationType?.identifier || 'N/A',
                  clasificacionReportada
                };
              })} />
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default PanelCustody;
