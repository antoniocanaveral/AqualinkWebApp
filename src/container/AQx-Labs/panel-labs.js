import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Descriptions } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMeshOriginal from '../../components/cards/OverviewCardMeshOriginal';
import TankCarouselCustody from './panel/components/TankCarouselCustody';
import { GoogleMaps } from '../../components/maps/google-maps';
import { Text } from 'recharts';
import {
  DatabaseOutlined,
  ClusterOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchLablotesInfo } from '../../redux/lablote/actionCreator';

function PanelLabs() {
  const dispatch = useDispatch();

  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);

  useEffect(() => {
    dispatch(fetchLablotesInfo());
  }, [dispatch, selectedOrg]);


  const labOrgs = useSelector((state) => state.auth.labsOrgs);
  console.log(labOrgs)
  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
  };

  const farmsSelectOptions = labOrgs.length > 0 ? [
    {
      options: labOrgs.map(org => ({
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

  const validLabLote = Array.isArray(lablotes) ? lablotes : [];
  console.log(validLabLote)
  const installedCapacity = validLabLote.find(
    (coord) => coord.AD_Org_ID.id === selectedOrg
  )?.sm_installedcapacitylarva || 0;


  // Calcular la suma total de sm_targetbiomass y sm_reservedbiomass
  const totalTargetBiomass = validLabLote.reduce((sum, lote) => sum + lote.sm_targetbiomass, 0);
  const totalReservedBiomass = validLabLote.reduce((sum, lote) => sum + lote.sm_reservedbiomass, 0);

  // Calcular el porcentaje ocupado con respecto a la capacidad instalada (statusRate)
  const statusRatew = installedCapacity ? ((totalTargetBiomass / installedCapacity) * 100).toFixed(2) : 0;

  // Calcular el porcentaje de lo que se ha usado respecto a target biomass (statusRateLote)
  const statusRateLote = totalTargetBiomass ? (((totalTargetBiomass - totalReservedBiomass) / totalTargetBiomass) * 100).toFixed(2) : 0;

  // Calcular el total de siembra sumando sm_confirmedtotal de coordinations_json
  const totalSiembra = validLabLote.reduce(
    (sum, lote) =>
      sum +
      lote.coordinations_json.reduce((sumCoord, coord) => sumCoord + coord.sm_confirmedtotal, 0),
    0
  );

  // Calcular el porcentaje de siembra respecto al total de lotes (statusRateSiembra)
  const statusRateSiembra = totalTargetBiomass ? ((totalSiembra / totalTargetBiomass) * 100).toFixed(2) : 0;

  // Proyección es igual al total de lotes
  const proyeccion = totalTargetBiomass;


  const OverviewData = [
    {
      id: 1,
      type: "primary",
      icon: "biomasa.svg",
      label: "Capacidad Instalada",
      total: installedCapacity.toFixed(0),
      suffix: "larvas",
      prefix: "",
      status: "growth",
      statusRate: statusRatew,
      decimel: 0,
      dataPeriod: "Todas las Camaroneras",
    },
    {
      id: 2,
      type: "primary",
      icon: "food.svg",
      label: "Total Lotes",
      total: totalTargetBiomass.toFixed(0),
      suffix: "larvas",
      prefix: "",
      status: "growth",
      statusRate: statusRateLote,
      decimel: 0,
      dataPeriod: "Todas las Camaroneras",
    },
    {
      id: 3,
      type: "primary",
      icon: "health.svg",
      label: "Total Siembra",
      total: totalSiembra.toFixed(0),
      suffix: "larvas",
      prefix: "",
      status: "growth",
      statusRate: statusRateSiembra,
      decimel: 0,
      dataPeriod: "Todas las Camaroneras",
    },
    {
      id: 4,
      type: "primary",
      icon: "growth.svg",
      label: "Proyección",
      total: proyeccion.toFixed(0),
      suffix: "larvas",
      prefix: "",
      decimel: 0,
      dataPeriod: "Todas las Camaroneras",
    },
  ];


  const selectedLabOrg = labOrgs.find(org => org.orgId === selectedOrg);

  // Obtener el número de módulos y tanques
  const countModules = selectedLabOrg?.countSalesRegion || 0;
  const countTanks = selectedLabOrg?.countWarehouses || 0;


  const selectedLabLotes = validLabLote.filter(lote => lote.AD_Org_ID.id === selectedOrg);
  const activeCoordinations = selectedLabLotes.flatMap(lote =>
    (lote.coordinations_json || []).map(coord => ({
      key: coord.sm_coordination_id,  // Usamos el ID único como clave
      camaronera: coord.org_name,  // Nombre de la camaronera
      loteID: coord.coordination_value,  // Identificador del lote
      plSolicitado: coord.sm_preliminarylaboratorycount,  // PL/GR solicitado
      estado: coord.sm_coordinationstatus  // Estado de la coordinación
    }))
  );

  const columns = [
    { title: 'Camaronera', dataIndex: 'camaronera', key: 'camaronera', align: 'center' },
    { title: 'Lote ID', dataIndex: 'loteID', key: 'loteID'},
    { title: 'PL/GR Solicitado', dataIndex: 'plSolicitado', key: 'plSolicitado', align: 'center' },
    { title: 'Estado', dataIndex: 'estado', key: 'estado', align: 'center' }
  ];
  
  // Datos de la tabla de Coordinación de Cosechas
  const data = [
    { key: '1', finca: 'Finca El Progreso', loteID: 'L-001', larva: '40-50', kilos: '1,200', estado: 'Pendiente' },
    { key: '2', finca: 'AgroMar', loteID: 'L-002', larva: '60-70', kilos: '1,500', estado: 'Completado' },
    { key: '3', finca: 'Acuícola Santa Rosa', loteID: 'L-003', larva: '40-50', kilos: '1,000', estado: 'Pendiente' },
    { key: '4', finca: 'Finca La Esperanza', loteID: 'L-004', larva: '60-70', kilos: '900', estado: 'En proceso' },
    { key: '5', finca: 'Grupo Camarón', loteID: 'L-005', larva: '40-50', kilos: '1,700', estado: 'Completado' },
    { key: '6', finca: 'Finca Del Sol', loteID: 'L-006', larva: '40-50', kilos: '1,300', estado: 'Pendiente' },
    { key: '7', finca: 'Pacifiqa', loteID: 'L-007', larva: '60-70', kilos: '800', estado: 'En proceso' },
    { key: '8', finca: 'EcoShrimp', loteID: 'L-008', larva: '40-50', kilos: '1,000', estado: 'Completado' },
    { key: '9', finca: 'Camarones Premium', loteID: 'L-009', larva: '60-70', kilos: '950', estado: 'Pendiente' },
    { key: '10', finca: 'Aquamar', loteID: 'L-010', larva: '40-50', kilos: '1,200', estado: 'Completado' },
  ];




  const tankData = [
    {
      id: 1,
      nombreCamaronera: 'El Progreso',
      codigoAQLK: 'AQLK001',
      loteID: 'L-001',
      estado: 'Confirmado',
      fechaPesca: '05 Diciembre 2023',
      piscina: 'Piscina 1',
      volumenProgramado: '1.5 M',
      tipoCosecha: 'Manual',
      clasificacionReportada: '60-70',
    },
    {
      id: 2,
      nombreCamaronera: 'Las Palmas',
      codigoAQLK: 'AQLK002',
      loteID: 'L-002',
      estado: 'Confirmado',
      fechaPesca: '06 Diciembre 2023',
      piscina: 'Piscina 2',
      tipoCosecha: 'Manual',
      volumenProgramado: '2.0 M',
      clasificacionReportada: '40-50',
    },
    {
      id: 3,
      nombreCamaronera: 'El Sol',
      codigoAQLK: 'AQLK003',
      loteID: 'L-003',
      estado: 'Confirmado',
      tipoCosecha: 'Manual',
      fechaPesca: '07 Diciembre 2023',
      piscina: 'Piscina 3',
      volumenProgramado: '1.2 M',
      clasificacionReportada: 'PL15',
    },
    {
      id: 4,
      nombreCamaronera: 'Azul',
      codigoAQLK: 'AQLK004',
      loteID: 'L-004',
      estado: 'Confirmado',
      tipoCosecha: 'Manual',
      fechaPesca: '08 Diciembre 2023',
      piscina: 'Piscina 4',
      volumenProgramado: '1.8 M',
      clasificacionReportada: 'PL20',
    },
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
      <PageHeader
        title="Control Panel"
        highlightText="Aqualink Laboratorio"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}

      />
      <Main>
        <Row gutter={25}>

          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <OverviewDataStyleWrap style={{ gap: 4 }} className="card-mesh-wrap align-center-v">
                {OverviewData.map((item, i) => {
                  return <OverviewCardMeshOriginal data={item} key={i} />;
                })}
              </OverviewDataStyleWrap>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={11} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Geolocalización" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={24} md={24}>
                    <GoogleMaps height="300px" />
                  </Col>
                  <Col xs={24} md={24}>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <Col xs={24} md={24}>
                        <Descriptions
                          column={{ xs: 1, sm: 2, md: 3 }}
                          bordered
                          size="small"
                          layout="vertical"
                        >
                          <Descriptions.Item label={<Space><ClusterOutlined /> Módulos</Space>}>
                            <Text>{countModules}</Text>
                          </Descriptions.Item>


                          <Descriptions.Item label={<Space><DatabaseOutlined /> Tanques</Space>}>
                            <Text>{countTanks}</Text>
                          </Descriptions.Item>


                        </Descriptions>
                      </Col>
                    </Space>
                  </Col>
                </Row>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={13} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Coordinaciones Activas" size="large">
                <div className="table-responsive">
                  <Table
                    dataSource={activeCoordinations}
                    columns={columns}
                    pagination={{ pageSize: 7 }}
                  />
                </div>
              </Cards>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={24} xs={24} >
            <center>
              <Typography.Title level={4} >
                Lotes Activos
              </Typography.Title>
            </center>
            <TankCarouselCustody tankData={selectedLabLotes} />
          </Col>
        </Row>

      </Main>
    </>
  );
}

export default PanelLabs;
