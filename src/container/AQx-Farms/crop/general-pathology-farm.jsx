import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Typography, Table, Modal, Card, Skeleton, Badge, Space, Select } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchSmTreatmentWithPathologies } from '../../../redux/views/patology/actionCreator';
import moment from 'moment';

function GeneralPathologyFarm() {
  const dispatch = useDispatch();
  const { treatmentWithPathologies, loading } = useSelector(state => state.treatmentWithPathologies);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isVeterinaryPlanModalVisible, setIsVeterinaryPlanModalVisible] = useState(false);
  const [selectedVeterinaryPlan, setSelectedVeterinaryPlan] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);

  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  // Handle organization, sector, and pool changes
  const handleOrgChange = (orgId, option) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', option.email || '');
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

  // Batch options for the Select component
  const batchOptions = [...new Set((treatmentWithPathologies || []).map(r => r.SM_Batch))].map(batch => ({
    label: batch,
    value: batch,
  }));

  // Process data for the table
  const getTableData = () => {
    if (!selectedBatch) return [];

    // Filter records by selected batch
    const filteredRecords = treatmentWithPathologies.filter(record => record.SM_Batch === selectedBatch);

    // Get unique weeks based on pathology_planned_date
    const dates = filteredRecords.map(record => moment(record.pathology_planned_date));
    if (dates.length === 0) return [];

    // Find the earliest date
    const minDate = moment.min(dates);

    // Group records by week relative to minDate
    const weeks = filteredRecords.reduce((acc, record) => {
      const date = moment(record.pathology_planned_date);
      const weekNumber = Math.floor(date.diff(minDate, 'weeks')) + 1; // Semana 1 is the oldest
      const weekKey = `Semana ${weekNumber}`;

      if (!acc[weekKey]) {
        acc[weekKey] = {
          semana: weekKey,
          records: [],
          // Mock pathology details (replace with actual data when available)
          branquias: [{ observation: 'Normal', level: 'bajo' }],
          hepatopancreas: [{ observation: 'Normal', level: 'bajo' }],
          intestino: [{ observation: 'Normal', level: 'bajo' }],
          biomecanicos: [{ observation: 'Normal', level: 'bajo' }],
          bacteriologico: [{ observation: 'Normal', level: 'bajo' }],
          viral: [{ observation: 'Normal', level: 'bajo' }],
        };
      }
      acc[weekKey].records.push(record);
      return acc;
    }, {});

    // Convert to array and sort by week number
    return Object.values(weeks).sort((a, b) => {
      const weekA = parseInt(a.semana.split(' ')[1]);
      const weekB = parseInt(b.semana.split(' ')[1]);
      return weekA - weekB;
    });
  };

  // Dynamically generate veterinary plans based on weeks
  const veterinaryPlans = getTableData().map((weekData, index) => ({
    semana: weekData.semana,
    plan: weekData.records.map(record => ({
      tratamiento: record.treatment_name,
      dias: record.SM_Treatment_Days,
      aplicacion: record.SM_Treatment_Target.identifier,
      categoria: record.product_category_name,
      cantidad: record.Amount,
      unidad: record.C_UOM_ID.identifier,
    })),
  }));

  const showModal = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedRecord(null);
  };

  const showVeterinaryPlanModal = (record) => {
    setSelectedVeterinaryPlan(veterinaryPlans.find(plan => plan.semana === record.semana));
    setIsVeterinaryPlanModalVisible(true);
  };

  const handleVeterinaryPlanModalCancel = () => {
    setIsVeterinaryPlanModalVisible(false);
    setSelectedVeterinaryPlan(null);
  };

  useEffect(() => {
    if (selectedPool) {
      dispatch(fetchSmTreatmentWithPathologies());
    }
  }, [dispatch, selectedPool]);

  const renderLevel = (level) => {
    if (level === 'N/A') {
      return <span style={{ color: '#000' }}>{level}</span>; // Ensure 'N/A' is visible with black text
    }
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

  const columns = [
    {
      title: 'SEMANA',
      dataIndex: 'semana',
      key: 'semana',
      width: '50%',
      onCell: (record) => ({ onClick: () => showModal(record) }),
    },
    {
      title: 'Patología',
      key: 'patologia',
      render: (text, record) => (
        <Link onClick={() => showModal(record)}>
          <UilEye />
        </Link>
      ),
    },
    {
      title: 'Plan Veterinario',
      key: 'planVeterinario',
      render: (text, record) => (
        <Link onClick={() => showVeterinaryPlanModal(record)}>
          <UilEye />
        </Link>
      ),
    },
  ];

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
        <Select
          style={{ width: '100%' }}
          placeholder="Seleccione un LoteID"
          options={batchOptions}
          value={selectedBatch}
          onChange={value => setSelectedBatch(value)}
          allowClear
          loading={loading}
        />
        <br />
        <br />
        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AqualinkMaps />
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
                  dataSource={getTableData()}
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
                {/* Branquias */}
                <Col span={12} style={{ display: 'flex' }}>
                  <Card title="Branquias" className="custom-card">
                    <Table
                      className="table-responsive"
                      dataSource={[
                        { key: 'bra_epilstilys', label: 'Epistylis', level: selectedRecord.branquias?.bra_epilstilys ?? 'N/A' },
                        { key: 'bra_vorticela', label: 'Vorticela', level: selectedRecord.branquias?.bra_vorticela ?? 'N/A' },
                        { key: 'bra_zoothamiun', label: 'Zoothamnium', level: selectedRecord.branquias?.bra_zoothamiun ?? 'N/A' },
                        { key: 'bra_acientos', label: 'Acientos', level: selectedRecord.branquias?.bra_acientos ?? 'N/A' },
                        { key: 'bra_algas', label: 'Algas', level: selectedRecord.branquias?.bra_algas ?? 'N/A' },
                      ]}
                      columns={[
                        { title: 'Observación', dataIndex: 'label', key: 'label' },
                        { title: 'Nivel', dataIndex: 'level', key: 'level', render: renderLevel },
                      ]}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>

                {/* Hepatopancreas */}
                <Col span={12} style={{ display: 'flex' }}>
                  <Card title="Hepatopancreas" className="custom-card">
                    <Table
                      className="table-responsive"
                      dataSource={[
                        { key: 'hepa_deformacion', label: 'Deformación', level: selectedRecord.hepatopancreas?.hepa_deformacion ?? 'N/A' },
                        { key: 'hepa_estrangulacion', label: 'Estrangulación', level: selectedRecord.hepatopancreas?.hepa_estrangulacion ?? 'N/A' },
                        { key: 'hepa_coloracion', label: 'Coloración', level: selectedRecord.hepatopancreas?.hepa_coloracion ?? 'N/A' },
                        { key: 'hepa_lipidos', label: 'Lípidos', level: selectedRecord.hepatopancreas?.hepa_lipidos ?? 'N/A' },
                        { key: 'hepa_baculovirus', label: 'Baculovirus', level: selectedRecord.hepatopancreas?.hepa_baculovirus ?? 'N/A' },
                      ]}
                      columns={[
                        { title: 'Observación', dataIndex: 'label', key: 'label' },
                        { title: 'Nivel', dataIndex: 'level', key: 'level', render: renderLevel },
                      ]}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>

                {/* Intestino */}
                <Col span={12} style={{ display: 'flex' }}>
                  <Card title="Intestino" className="custom-card">
                    <Table
                      className="table-responsive"
                      dataSource={[
                        { key: 'int_gregarinas', label: 'Gregarinas', level: selectedRecord.intestino?.int_gregarinas ?? 'N/A' },
                        { key: 'int_baculovirus', label: 'Baculovirus', level: selectedRecord.intestino?.int_baculovirus ?? 'N/A' },
                        { key: 'int_algas_detritus', label: 'Algas/Detritus', level: selectedRecord.intestino?.int_algas_detritus ?? 'N/A' },
                        { key: 'int_nematodos', label: 'Nematodos', level: selectedRecord.intestino?.int_nematodos ?? 'N/A' },
                      ]}
                      columns={[
                        { title: 'Observación', dataIndex: 'label', key: 'label' },
                        { title: 'Nivel', dataIndex: 'level', key: 'level', render: renderLevel },
                      ]}
                      pagination={false}
                      size="small"
                    />
                  </Card>
                </Col>

                {/* Biomecánicos */}
                <Col span={12} style={{ display: 'flex' }}>
                  <Card title="Biomecánicos" className="custom-card">
                    <Table
                      className="table-responsive"
                      dataSource={[
                        { key: 'ana_flacidez', label: 'Flacidez', level: selectedRecord.biomecanicos?.ana_flacidez ?? 'N/A' },
                        { key: 'ana_antenas', label: 'Antenas', level: selectedRecord.biomecanicos?.ana_antenas ?? 'N/A' },
                        { key: 'ana_cola', label: 'Cola', level: selectedRecord.biomecanicos?.ana_cola ?? 'N/A' },
                        { key: 'ana_cabeza', label: 'Cabeza', level: selectedRecord.biomecanicos?.ana_cabeza ?? 'N/A' },
                      ]}
                      columns={[
                        { title: 'Observación', dataIndex: 'label', key: 'label' },
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

export default GeneralPathologyFarm;
