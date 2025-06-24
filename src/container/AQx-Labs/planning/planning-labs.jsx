import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Table, Button, Modal } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchLablotesInfo } from '../../../redux/lablote/actionCreator';
import TankCard from '../panel/components/TankCard';
import ProjectionPlPanel from './charts/ProjectionKgLab';

function PlanningLabs() {
  const dispatch = useDispatch();
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);
  const labOrgs = useSelector((state) => state.auth.labsOrgs);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTank, setSelectedTank] = useState(null);

  const validLabLote = Array.isArray(lablotes) ? lablotes : [];
 

  const [dataGIV, setDataGIV] = useState([]);
  const [dataGPA, setDataGPA] = useState([]);
  const [dataIND, setDataIND] = useState([]);

  useEffect(() => {
    dispatch(fetchLablotesInfo());
  }, [dispatch, selectedOrg]);


  useEffect(() => {
    const groups = {
      GIV: [],
      GPA: [],
      IND: []
    };

    if (lablotes && Array.isArray(lablotes)) {
      lablotes.forEach(record => {

        if (record.coordinations_json && Array.isArray(record.coordinations_json) && record.coordinations_json.length > 0) {
          record.coordinations_json.forEach(coord => {

            if (["GIV", "GPA", "IND"].includes(coord.org_type)) {
              groups[coord.org_type].push({
                key: `${record.id}-${coord.sm_coordination_id}`,
                lote: record.sm_lablote_ID.identifier,
                loteID: coord.coordination_value,
                fecha: coord.created ? coord.created.split("T")[0] : '',
                tanque: record.warehouse_name,
                estado: coord.sm_coordinationstatus
              });
            }
          });
        }
      });
    }
    setDataGIV(groups.GIV);
    setDataGPA(groups.GPA);
    setDataIND(groups.IND);
  }, [lablotes]);

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


  const columns = [
    { title: "Lote", dataIndex: "lote", key: "lote" },
    { title: "LoteID", dataIndex: "loteID", key: "loteID" },
    { title: "Fecha despacho", dataIndex: "fecha", key: "fecha" },
    { title: "Tanque de origen", dataIndex: "tanque", key: "tanque" },
    { title: "Estado", dataIndex: "estado", key: "estado" },
    {
      title: "Ver",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={() => showDetails(record)}>
          Ver
        </Button>
      ),
    },
  ];


  const showDetails = (record) => {

    const tank = validLabLote.find(t => t.sm_lablote_ID.identifier === record.lote);
    if (tank) {
      setSelectedTank(tank);
      setIsModalVisible(true);
    } else {
      Modal.error({
        title: 'Error',
        content: 'No se encontró información de tanque para este lote.',
      });
    }
  };

  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <PageHeader
        title="Planning"
        highlightText="Aqualink Laboratorio"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
      />

      <Main>
        <Row gutter={25}>
          <Col xl={12} xs={24} xxl={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ProjectionPlPanel coordinationInfo={lablotes} />
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Cards title="Proyecciones de Despacho de fincas GIV" size="large">
              <div className="table-responsive">
                <Table
                  rowKey="key"
                  dataSource={dataGIV}
                  columns={columns}
                  pagination={{ pageSize: 5 }}
                  bordered
                />
              </div>
            </Cards>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Cards title="Proyecciones de Despacho fincas GPA (externos)" size="large">
              <div className="table-responsive">
                <Table
                  rowKey="key"
                  dataSource={dataGPA}
                  columns={columns}
                  pagination={{ pageSize: 5 }}
                  bordered
                />
              </div>
            </Cards>
          </Col>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Cards title="Proyecciones de Despacho fincas IND (externos)" size="large">
              <div className="table-responsive">
                <Table
                  rowKey="key"
                  dataSource={dataIND}
                  columns={columns}
                  pagination={{ pageSize: 5 }}
                  bordered
                />
              </div>
            </Cards>
          </Col>
        </Row>

        {/* Modal para detalles del tanque */}
        <Modal
          title="Detalles del Tanque"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={400}
        >
          {selectedTank ? (
            <TankCard data={selectedTank} />
          ) : (
            <Typography.Text>No se encontraron detalles para este lote.</Typography.Text>
          )}
        </Modal>
      </Main>
    </>
  );
}

export default PlanningLabs;
