import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, notification } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import ProjectionKgPanel from './panel/charts/projections-kg-panel';
import CostProjectionWrapLab from './panel/charts/CostProjectionWrapLab';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../redux/authentication/selectors';
import Cookies from 'js-cookie';
import { fetchCoordinationInfo_FarmProyection } from '../../redux/views/coords/actionCreator';
import moment from 'moment';
import { fetchInventory } from '../../redux/inventory/actionCreator';

const getClassification = (record) => {
  if (record.SM_Category30_40) return "30-40";
  if (record.SM_Category40_50) return "40-50";
  if (record.SM_Category50_60) return "50-60";
  if (record.SM_Category60_70) return "60-70";
  if (record.SM_Category70_80) return "70-80";
  if (record.SM_Category80_100) return "80-100";
  if (record.SM_Category100_120) return "100-120";
  if (record.SM_Category120_150) return "120-150";
  return null;
};


function PanelFarms() {
  const dispatch = useDispatch();

  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);

  const coordinationInfo = useSelector((state) => state.view_coords.coordinationInfo);
  const loading = useSelector((state) => state.view_coords.coordInfoLoading);
  const error = useSelector((state) => state.view_coords.coordInfoError);

  const { categories } = useSelector((state) => state.inventory || {});
  useEffect(() => {
    dispatch(fetchCoordinationInfo_FarmProyection());
    dispatch(fetchInventory("FARM"));

  }, [dispatch, selectedOrg]);

  const inventoryData = Object.values(categories).flat() || [];
  console.log(inventoryData)
  console.log(categories)


  const inventoryColumns = [
    { title: 'Nombre', dataIndex: 'product_name', key: 'product_name' },
    {
      title: 'Presentación', key: 'Classification', render: (_, record) => {
        const classification = record.Classification || 'N/A';
        const uomSymbol = record.UOMSymbol || '';
        return `${classification} ${uomSymbol}`.trim();
      }
    },
    { title: 'Unidades', dataIndex: 'QtyOnHand', key: 'QtyOnHand', render: (text) => text ?? 'N/A' },
    {
      title: 'Disponibilidad', key: 'Volumen', render: (_, record) => {
        const qtyOnHand = parseFloat(record.QtyOnHand) || 0;
        const classification = parseFloat(record.Classification) || 1;
        const uomSymbol = record.UOMSymbol || '';
        const volumen = qtyOnHand * classification;
        return `${volumen} ${uomSymbol}`.trim();
      }
    }
  ];
  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedSector(null);
    console.log(JSON.stringify(farmsOrgsWithPools));
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
      placeholder: 'Seleccione una Piscina',
      disabled: poolsOptions.length === 0,
      value: selectedPool || undefined,
    },
  ] : [];

  const combinedSelectOptions = [
    ...farmsSelectOptions,
    ...sectorSelectOptions,
    ...poolsSelectOptions,
  ];


  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Error',
        description: error,
      });
    }
  }, [error]);

  const navigate = useNavigate();


  const harvestColumns = [
    { title: 'FECHA COSECHA', dataIndex: 'harvestDate', key: 'harvestDate' },
    { title: 'CAMARONERA', dataIndex: 'camaronera', key: 'camaronera' },
    { title: 'LOTE ID', dataIndex: 'loteId', key: 'loteId' },
    { title: 'BIOMASA', dataIndex: 'biomasa', key: 'biomasa' },
    { title: 'CLASIFICACION', dataIndex: 'clasificacion', key: 'clasificacion' },
    { title: 'TEXTURA', dataIndex: 'textura', key: 'textura' },
    { title: 'ESTADO', dataIndex: 'estado', key: 'estado' },
  ];
  const validCoordinationInfo = Array.isArray(coordinationInfo) ? coordinationInfo : [];


  const uniqueRecords = {};
  validCoordinationInfo.forEach(record => {
    const loteId = record.SM_Coordination_ID?.identifier || 'N/A';
    if (!uniqueRecords[loteId]) {
      uniqueRecords[loteId] = record; // Solo almacenar el primer registro encontrado por loteId
    }
  });

  const harvestData = Object.values(uniqueRecords).map(record => {
    const harvestDate = record.SM_FishingDate
      ? moment(record.SM_FishingDate).format("DD MMMM YYYY")
      : 'N/A';
    const camaronera = record.org_name || 'N/A';
    const loteId = record.lote_id || 'N/A';
    const biomasa = record.SM_Biomass ? record.SM_Biomass.toFixed(2) + ' kg' : 'N/A';
    const clasificacion = getClassification(record) || 'N/A';
    const textura = record.SM_Texture || 'N/A'; // Ajusta según tu campo real para textura
    let estado = record.SM_CoordinationStatus?.identifier || 'N/A';
    estado = estado.replace(/[<>]/g, '');
    return {
      key: record.id,
      harvestDate,
      camaronera,
      loteId,
      biomasa,
      clasificacion,
      textura,
      estado,
    };
  });




  const tankData = [
    {
      id: 1,
      modulo: 'Módulo 1',
      tanque: 'Tanque 1',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },
    {
      id: 2,
      modulo: 'Módulo 1',
      tanque: 'Tanque 2',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },

  ];



  const TankCard = ({ data }) => (
    <div headless
      style={{
        border: '2px solid #e3e3e3',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '300px',
        minWidth: '300px',
      }}>
      <div className="flex-row">
        <div>
          <span className="label">Camaronera:</span>
        </div>
        <div>
          <span>{data.nombreCamaronara || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">Piscina Engorde:</span>
        </div>
        <div>
          <span>{data.piscinaEngorde || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">Lote ID:</span>
        </div>
        <div>
          <span>{data.loteID || 'NA'}</span>
        </div>
      </div>

      <div className='flex-row'>
        <div>
          <Typography.Title level={4} style={{ color: '#0372ce' }}>
            Avance Ciclo
          </Typography.Title>
        </div>

        <Typography.Title level={4}>
          {data.porcentaje}%
        </Typography.Title>
      </div>




      <div className="harvest-report-divider-2" />

      <div className="flex-row">
        <div>
          <span className="label">Inicio de Cultivo:</span>
        </div>
        <div>
          <span>{data.inicioCultivo || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">Fin de Cultivo:</span>
        </div>
        <div>
          <span>{data.finCultivo || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">Biomasa estimada:</span>
        </div>
        <div>
          <span>{data.biomasaEstimada || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">Supervivencia real:</span>
        </div>
        <div>
          <span>{data.supervivenciaReal || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">FCA real:</span>
        </div>
        <div>
          <span>{data.fcaReal || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">Clasificación de Pesca:</span>
        </div>
        <div>
          <span>{data.clasificacionPesca || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">Lbs x Ha.:</span>
        </div>
        <div>
          <span>{data.lbsPorHa || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">Coordinación Pesca:</span>
        </div>
        <div>
          <span>{data.coordinacionPesca || 'NA'}</span>
        </div>
      </div>




      <button
        onClick={() => navigate("/farm/seeding-coords")}
        style={{ backgroundColor: '#0372ce', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
        Ver Piscina
      </button>
    </div>
  );


  const TankCarousel = ({ tankData }) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
      <div style={{ position: "relative", width: "100%" }}>
        {/* Botón Izquierdo */}
        <button
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#0372ce",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          {"<"}
        </button>

        {/* Contenedor del Carrusel */}
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "20px",
            padding: "20px",
            whiteSpace: "nowrap",
          }}
        >
          {tankData.map((tank, index) => (
            <TankCard data={tank} key={index} />
          ))}
        </div>

        {/* Botón Derecho */}
        <button
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#0372ce",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
    <>
      <PageHeader
        highlightText="Aqualink Camaronera"
        title="Panel de Control"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
        onBack={() => window.history.back()}
      />

      <Main>


        <Row gutter={25}>
          <Col xl={12} xs={24} xxl={10} style={{ display: 'flex' }}>
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
                selectedSector={selectedSector}
                selectedPool={selectedPool}
                farmsOrgsWithPools={farmsOrgsWithPools} // Pasa farmsOrgsWithPools como prop
              />
            </Suspense>
          </Col>
          <Col xl={12} xs={24} xxl={14} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ProjectionKgPanel type="FARM" coordinationInfo={coordinationInfo} loading={loading} error={error} selectedOrg={selectedOrg} />
            </Suspense>
          </Col>
        </Row>


        <Row gutter={25} equal-heights>
          <Col xl={14} xs={24} xxl={15} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              {/* Tabla de Coordinación de Cosechas */}
              <Cards title="Coordinación de Cosechas" size="large">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="table-responsive">
                    <Table dataSource={harvestData} columns={harvestColumns} pagination={{ pageSize: 5 }} />
                  </div>

                  {/**Titulo */}
                  <div className="harvest-report-divider" />
                  <center>
                    <Typography.Title level={4} >
                      Piscinas con ciclos Activos
                    </Typography.Title>
                  </center>

                  <TankCarousel tankData={tankData} />

                </div>
              </Cards>
            </Suspense>
          </Col>

          <Col xl={10} xs={24} xxl={9} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Gráfico de Proyección de Costos */}
            <div>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <Cards title="Proyección de Costos" size="large"  >
                  <CostProjectionWrapLab />
                </Cards>
              </Suspense>
            </div>

            <div >
              {/* Tabla de Inventario de Productos */}
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <Cards title="Inventario de Productos" size="large"  style={{ minHeight:"600px"}}>
                  <Table
                  style={{minHeight:"250px"}}
                    dataSource={inventoryData}
                    columns={inventoryColumns}
                    pagination={{ pageSize: 5 }}
                    rowKey="Value"
                  />
                </Cards>

              </Suspense>
            </div>
          </Col>
        </Row>

      </Main>
    </>
  );
}

export default PanelFarms;