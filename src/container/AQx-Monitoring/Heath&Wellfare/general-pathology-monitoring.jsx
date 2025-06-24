import React, { Suspense } from 'react';
import { Row, Col, Typography, Table, Modal, Card, Skeleton, Badge, Space } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import { Link } from 'react-router-dom';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';


function GeneralPathologyMonitoring() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const [isVeterinaryPlanModalVisible, setIsVeterinaryPlanModalVisible] = useState(false);
  const [selectedVeterinaryPlan, setSelectedVeterinaryPlan] = useState(null);


  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);


  const orgToAudit = useSelector((state) => state.auth.orgToAudit) || [];
  const activeOrgs = [orgToAudit];
  const auditType = Cookies.get('orgAuditType');


  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);


  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedSector(null);
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




  const showVeterinaryPlanModal = (record) => {
    setSelectedVeterinaryPlan(veterinaryPlans[record.key - 1]); // Asociar el plan según la semana
    setIsVeterinaryPlanModalVisible(true);
  };


  const handleVeterinaryPlanModalCancel = () => {
    setIsVeterinaryPlanModalVisible(false);
    setSelectedVeterinaryPlan(null);
  };


  const renderLevel = (level) => {
    let className = '';
    if (level.includes('bajo')) {
      className = 'badge-green';
    } else if (level.includes('medio')) {
      className = 'badge-yellow';
    } else if (level.includes('alto')) {
      className = 'badge-red';
    }
    return <span className={`badge ${className}`}>{level.replace(/ \(\+\+\+\)| \(\+\+\)| \(\+\)/g, '')}</span>;
  };

  const data = [
    {
      key: '1',
      semana: 'Semana 1',
      branquias: [
        { observation: 'sucias', level: 'medio (++)' },
        { observation: 'algas', level: 'alto (+++)' },
        { observation: 'detritus', level: 'medio (++)' },
        { observation: 'Zoothamnium spp.', level: 'bajo (+)' },
        { observation: 'Vorticella spp.', level: 'bajo (+)' },
        { observation: 'Acineta spp', level: 'bajo (+)' },
        { observation: 'Epistylis spp.', level: 'bajo (+)' },
      ],
      hepatopancreas: [
        { observation: 'Lipidos', level: 'medio (++)' },
        { observation: 'Engrosamiento', level: 'bajo (+)' },
        { observation: 'Deformidad', level: 'medio (++)' },
        { observation: 'Estrangulamiento', level: 'bajo (+)' },
        { observation: 'Baculovirus', level: 'bajo (+)' },
        { observation: 'color lipidos', level: 'amarillo naranja' },
      ],
      intestino: [
        { observation: 'gregarinas Adultos', level: 'medio (++)' },
        { observation: 'gregarinas Huevos', level: 'bajo (+)' },
        { observation: 'nemátodos', level: 'medio (++)' },
        { observation: 'algas', level: 'bajo (+)' },
        { observation: 'detritos', level: 'bajo (+)' },
        { observation: 'alimento balanceado', level: 'medio (++)' },
        { observation: 'baculovirus', level: 'bajo (+)' },
      ],
      biomecanicos: [
        { observation: 'flacidez', level: 'alto (+++)' },
        { observation: 'uropodos inflamados', level: 'medio (++)' },
        { observation: 'necrosis externa', level: 'bajo (+)' },
        { observation: 'antenas rugosas', level: 'bajo (+)' },
        { observation: 'deformes -enanos', level: 'bajo (+)' },
      ],
      bacteriologico: [
        { observation: 'Vibriosis', level: 'medio (++)' },
        { observation: 'Bacterias quitinoplasticas', level: 'bajo (+)' },
        { observation: 'bacteria intracelulares', level: 'bajo (+)' },
        { observation: 'bacterias filamentosas', level: 'bajo (+)' },
      ],
      viral: [
        { observation: '(IHNNV) Virus de la Necrosis Infecciosa Hipodérmica y Hematopoyética', level: 'bajo (+)' },
        { observation: '(BVP) Baculovirus pennaeii', level: 'bajo (+)' },
        { observation: '(WSSV) Virus del Síndrome de la Mancha Blanca', level: 'bajo (+)' },
        { observation: '(TSV) Síndrome de Taura', level: 'bajo (+)' },
      ],
    },
    {
      key: '2',
      semana: 'Semana 2',
      branquias: [
        { observation: 'sucias', level: 'medio (++)' },
        { observation: 'algas', level: 'alto (+++)' },
        { observation: 'detritus', level: 'medio (++)' },
        { observation: 'Zoothamnium spp.', level: 'bajo (+)' },
        { observation: 'Vorticella spp.', level: 'bajo (+)' },
        { observation: 'Acineta spp', level: 'bajo (+)' },
        { observation: 'Epistylis spp.', level: 'bajo (+)' },
      ],
      hepatopancreas: [
        { observation: 'Lipidos', level: 'medio (++)' },
        { observation: 'Engrosamiento', level: 'bajo (+)' },
        { observation: 'Deformidad', level: 'medio (++)' },
        { observation: 'Estrangulamiento', level: 'bajo (+)' },
        { observation: 'Baculovirus', level: 'bajo (+)' },
        { observation: 'color lipidos', level: 'amarillo naranja' },
      ],
      intestino: [
        { observation: 'gregarinas Adultos', level: 'medio (++)' },
        { observation: 'gregarinas Huevos', level: 'bajo (+)' },
        { observation: 'nemátodos', level: 'medio (++)' },
        { observation: 'algas', level: 'bajo (+)' },
        { observation: 'detritos', level: 'bajo (+)' },
        { observation: 'alimento balanceado', level: 'medio (++)' },
        { observation: 'baculovirus', level: 'bajo (+)' },
      ],
      biomecanicos: [
        { observation: 'flacidez', level: 'alto (+++)' },
        { observation: 'uropodos inflamados', level: 'medio (++)' },
        { observation: 'necrosis externa', level: 'bajo (+)' },
        { observation: 'antenas rugosas', level: 'bajo (+)' },
        { observation: 'deformes -enanos', level: 'bajo (+)' },
      ],
      bacteriologico: [
        { observation: 'Vibriosis', level: 'medio (++)' },
        { observation: 'Bacterias quitinoplasticas', level: 'bajo (+)' },
        { observation: 'bacteria intracelulares', level: 'bajo (+)' },
        { observation: 'bacterias filamentosas', level: 'bajo (+)' },
      ],
      viral: [
        { observation: '(IHNNV) Virus de la Necrosis Infecciosa Hipodérmica y Hematopoyética', level: 'bajo (+)' },
        { observation: '(BVP) Baculovirus pennaeii', level: 'bajo (+)' },
        { observation: '(WSSV) Virus del Síndrome de la Mancha Blanca', level: 'bajo (+)' },
        { observation: '(TSV) Síndrome de Taura', level: 'bajo (+)' },
      ],
    },
  ];

  const columns = [
    {
      title: 'SEMANA',
      dataIndex: 'semana',
      key: 'semana',
      width: '70%',  // Da más espacio a la columna de SEMANA
      onCell: (record) => ({ onClick: () => showModal(record) }),
    },
    {
      title: 'Plan Veterinario',
      key: 'planVeterinario',
      width: '30%',  // Reduce el espacio de la columna Plan Veterinario
      render: (text, record) => (
        <Link onClick={() => showVeterinaryPlanModal(record)}>
          <UilEye />
        </Link>
      ),
    },
  ];


  const veterinaryPlans = [
    {
      semana: 'Semana 1',
      plan: [
        { tratamiento: 'T1', dias: 5, aplicacion: 'agua', categoria: 'calcareos', cantidad: '25', unidad: 'kg/Ha' },
        { tratamiento: 'T2', dias: 3, aplicacion: 'alimento', categoria: 'medicados', cantidad: '5', unidad: 'gr/Kg' },
        { tratamiento: 'T3', dias: 1, aplicacion: 'suelo', categoria: 'bacteria', cantidad: '5', unidad: 'lt/Ha' },
        { tratamiento: 'T4', dias: 3, aplicacion: 'alimento', categoria: 'antiparasitario', cantidad: '5', unidad: 'gr/Kg' },
        { tratamiento: 'T5', dias: 5, aplicacion: 'alimento', categoria: 'vitamina c', cantidad: '5', unidad: 'gr/Kg' },
        { tratamiento: 'T6', dias: 7, aplicacion: 'alimento', categoria: 'acidos organicos', cantidad: '20', unidad: 'ml/Kg' },
      ],
    },
  ];



  const showModal = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedRecord(null);
  };

  return (
    <>
      <PageHeader
        highlightText="Aqualink Monitoreo"
        title="Patología"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
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
                farmsOrgsWithPools={activeOrgs}
              />
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Histórico de Patología" size="large">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={{ pageSize: 5 }}
                />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Modal
          title={`Detalles de Patología - ${selectedRecord?.semana}`}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={1200}
        >
          <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {selectedRecord && (
              <>
                <Col span={8} style={{ display: 'flex' }}>
                  <Card title="Branquias" className="custom-card">
                    <Table
                      className='table-responsive'
                      dataSource={selectedRecord.branquias.map((item, index) => ({
                        key: index,
                        observation: item.observation,
                        level: item.level,
                      }))}
                      columns={[
                        { title: 'Observación', dataIndex: 'observation', key: 'observation' },
                        { title: 'Nivel', dataIndex: 'level', key: 'level', render: renderLevel },
                      ]}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
                <Col span={8} style={{ display: 'flex' }}>
                  <Card title="Hepatopancreas" className="custom-card">
                    <Table
                      className='table-responsive'
                      dataSource={selectedRecord.hepatopancreas.map((item, index) => ({
                        key: index,
                        observation: item.observation,
                        level: item.level,
                      }))}
                      columns={[
                        { title: 'Observación', dataIndex: 'observation', key: 'observation' },
                        { title: 'Nivel', dataIndex: 'level', key: 'level', render: renderLevel },
                      ]}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
                <Col span={8} style={{ display: 'flex' }}>
                  <Card title="Intestino" className="custom-card">
                    <Table
                      className='table-responsive'
                      dataSource={selectedRecord.intestino.map((item, index) => ({
                        key: index,
                        observation: item.observation,
                        level: item.level,
                      }))}
                      columns={[
                        { title: 'Observación', dataIndex: 'observation', key: 'observation' },
                        { title: 'Nivel', dataIndex: 'level', key: 'level', render: renderLevel },
                      ]}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
                <Col span={8} style={{ display: 'flex' }}>
                  <Card title="Biomecánicos" className="custom-card">
                    <Table
                      className='table-responsive'
                      dataSource={selectedRecord.biomecanicos.map((item, index) => ({
                        key: index,
                        observation: item.observation,
                        level: item.level,
                      }))}
                      columns={[
                        { title: 'Observación', dataIndex: 'observation', key: 'observation' },
                        { title: 'Nivel', dataIndex: 'level', key: 'level', render: renderLevel },
                      ]}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
                <Col span={8} style={{ display: 'flex' }}>
                  <Card title="Bacteriológico" className="custom-card">
                    <Table
                      className='table-responsive'
                      dataSource={selectedRecord.bacteriologico.map((item, index) => ({
                        key: index,
                        observation: item.observation,
                        level: item.level,
                      }))}
                      columns={[
                        { title: 'Observación', dataIndex: 'observation', key: 'observation' },
                        { title: 'Nivel', dataIndex: 'level', key: 'level', render: renderLevel },
                      ]}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
                <Col span={8} style={{ display: 'flex' }}>
                  <Card title="Viral" className="custom-card">
                    <Table
                      className='table-responsive'
                      dataSource={selectedRecord.viral.map((item, index) => ({
                        key: index,
                        observation: item.observation,
                        level: item.level,
                      }))}
                      columns={[
                        { title: 'Observación', dataIndex: 'observation', key: 'observation' },
                        { title: 'Nivel', dataIndex: 'level', key: 'level', render: renderLevel },
                      ]}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>
              </>
            )}
          </Row>
        </Modal>

        <Modal
          title={`Plan Veterinario - ${selectedVeterinaryPlan?.semana}`}
          visible={isVeterinaryPlanModalVisible}
          onCancel={handleVeterinaryPlanModalCancel}
          footer={null}
          width={800}
        >
          <Table
            className='table-responsive'
            dataSource={selectedVeterinaryPlan?.plan.map((item, index) => ({
              key: index,
              tratamiento: item.tratamiento,
              dias: item.dias,
              aplicacion: item.aplicacion,
              categoria: item.categoria,
              cantidad: item.cantidad,
              unidad: item.unidad,
            }))}
            columns={[
              { title: 'Tratamiento', dataIndex: 'tratamiento', key: 'tratamiento' },
              { title: 'Días de Tratamiento', dataIndex: 'dias', key: 'dias' },
              { title: 'Aplicación a', dataIndex: 'aplicacion', key: 'aplicacion' },
              { title: 'Categoría de Producto', dataIndex: 'categoria', key: 'categoria' },
              { title: 'Cantidad', dataIndex: 'cantidad', key: 'cantidad' },
              { title: 'Unidad de Medida', dataIndex: 'unidad', key: 'unidad' },
            ]}
            pagination={false}
            size="small"
          />
        </Modal>


      </Main>
    </>
  );
}

export default GeneralPathologyMonitoring;
