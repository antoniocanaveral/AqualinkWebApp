import React, { Suspense, useState, useEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton, Table } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, CoordStatusWrapper, Main } from '../styled';
import { loadLabCoord } from '../../redux/lab/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import { formatNumber } from '../../utility/utility';
import { GoogleMaps } from '../../components/maps/google-maps';
import { OverviewDataStyleWrap } from '../dashboard/Style';
import OverviewCardMesh from '../../components/cards/OverviewCardMesh';

function CoordinationLabsResumen() {
  const PageRoutes = [
    { path: 'index', breadcrumbName: Cookies.get('orgName') },
    { path: 'first', breadcrumbName: 'Coordinación' },
  ];

  const dispatch = useDispatch();
  let { id } = useParams();
  const coordination = useSelector((state) => state.lab.coordination);

  useEffect(() => {
    dispatch(loadLabCoord(id, () => { }));
  }, [dispatch, id]);

  const coordData = [
    { key: '1', label: 'Camaronera:', value: coordination?.org_name || 'EcSSA Manabí' },
    { key: '2', label: 'Piscina:', value: coordination?.pre_breeding_pool || 'Pre Cria 1' },
    { key: '3', label: 'Notificación de Siembra:', value: coordination?.SM_FishingNotification || 'AQ-ECSSA-004-P3-2024-00016-NS' },
    { key: '4', label: 'Fecha de Siembra Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY HH:mm A') : '-' },
    { key: '5', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '20 ppm' },
    { key: '6', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '1.000.000 larvas' },
    { key: '7', label: 'Alcalinidad Piscina de Pre Cría:', value: coordination?.coord_alkalinity || '140 ppm' },
    { key: '8', label: 'PH Piscina de Pre Cría:', value: coordination?.coord_pre_breeding_pool_ph || '5 ppm' },
  ];

  const labInfoData = [
    { key: '4', label: 'Conteo Preliminar Lab:', value: coordination ? `${formatNumber(coordination.lab_count)} larvas/gramo` : '280 larvas/gramo' },
    { key: '5', label: 'PL:', value: coordination?.answered_pl || 'PL10' },
    { key: '6', label: 'Salinidad:', value: coordination ? `${coordination.confirmed_salinity} ppm` : '20 ppm' },
    { key: '7', label: 'Método de Envío:', value: coordination?.shipping_method || 'FUNDAS' },
    { key: '8', label: 'Unidades por Empaque:', value: coordination ? `${formatNumber(coordination.units_per_pack)} larvas` : '500.000 larvas' },
    { key: '9', label: 'Óxigeno en Camino:', value: coordination?.oxygen_on_the_go ? 'Sí' : 'No' },
    { key: '10', label: 'Comida en Camino:', value: coordination?.food_on_the_go ? 'Sí' : 'No' },
    { key: '11', label: 'Alcalinidad Tanque de Origen:', value: coordination?.alkalinity || '145 ppm' },
    { key: '12', label: 'PH Tanque de Origen:', value: coordination?.pre_breeding_pool_ph || '6 ppm' },
  ];

  const overviewCardMeshData = [
    {
      id: 1,
      type: 'primary',
      icon: 'biomasa.svg',
      label: 'Total Tanque',
      total: coordination ? coordination.tank_planting : '0',
      suffix: ' larvas',
      dataPeriod: 'Tanque',
    },
    {
      id: 2,
      type: 'primary',
      icon: 'biomasa.svg',
      label: 'Total Confirmado',
      total: coordination ? coordination.confirmed_total : '0',
      suffix: ' larvas',
      dataPeriod: 'Confirmado',
    },
  ];

  const columns = [
    { title: '', dataIndex: 'label', key: 'label', width: '50%' },
    { title: '', dataIndex: 'value', key: 'value', width: '50%' },
  ];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title={`Coordinación: ${coordination?.SM_FishingNotification || "-"}`} routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Suspense fallback={
              <Cards headless>
                <Skeleton paragraph={{ rows: 20 }} active />
              </Cards>
            }>
              <BasicFormWrapper className="mb-25">
                <Row gutter={25}>
                  <Col xl={10} xs={24}>
                    <Suspense
                      fallback={
                        <Cards headless>
                          <Skeleton active />
                        </Cards>
                      }
                    >
                      <Cards
                        title="Coordinación"
                        status={coordination?.statusWrapper && (
                          <CoordStatusWrapper>
                            <span className={`ninjadash-status ninjadash-status-${coordination.statusWrapper.className}`}>
                              {coordination.statusWrapper.statusName}
                            </span>
                          </CoordStatusWrapper>
                        )}
                        size="large"
                      >
                        <Col xs={24} md={24} style={{ marginBottom: '18px', overflow: 'hidden' }}>
                          <div style={{ height: '230px' }}>
                            <GoogleMaps />
                          </div>
                        </Col>

                        <Col xs={24} md={24}>
                          <Table
                            className='custom-table'
                            dataSource={coordData}
                            columns={columns}
                            pagination={false}
                            showHeader={false}
                            bordered
                            rowClassName={() => 'custom-table-row'}
                          />
                        </Col>
                      </Cards>
                    </Suspense>
                  </Col>

                  <Col xl={14} xs={24}>
                    <Suspense
                      fallback={
                        <Cards headless>
                          <Skeleton active />
                        </Cards>
                      }
                    >
                      <Cards title="Información del Laboratorio" size="large">
                        {/* Aquí agregamos el Módulo y Tanque antes del OverviewDataStyleWrap */}
                        <Row gutter={16} style={{ marginBottom: '16px' }}>
                          <Col span={8}>
                            <strong>Fecha:</strong> {coordination?.planned_date ? moment(coordination.planned_date).format('DD-MM-YYYY HH:mm A') : '-'}
                          </Col>
                          <Col span={8}>
                            <strong>Módulo:</strong> {coordination?.lab_module || 'M1'}
                          </Col>
                          <Col span={8}>
                            <strong>Tanque:</strong> {coordination?.tank || 'T1'}
                          </Col>

                        </Row>

                        <Col xs={24}>
                          <OverviewDataStyleWrap className="card-mesh-wrap align-center-v">
                            {overviewCardMeshData.map((item, i) => {
                              return <OverviewCardMesh data={item} key={i} />;
                            })}
                          </OverviewDataStyleWrap>
                        </Col>
                        <Table
                          className='custom-table_lab'
                          dataSource={labInfoData}
                          columns={columns}
                          pagination={false}
                          showHeader={false}
                          bordered
                          rowClassName={() => 'custom-table-row'}
                        />
                      </Cards>
                    </Suspense>
                  </Col>
                </Row>
              </BasicFormWrapper>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CoordinationLabsResumen;
