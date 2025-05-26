import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Row, Col, Form, Skeleton, Table, Typography, Badge, Checkbox, Avatar, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import moment from 'moment';
import { ReactSVG } from 'react-svg';


import {
  UilArrowsResize,
  UilFlaskPotion,    // Para Cultivo (representa investigación y cultivo)
} from '@iconscout/react-unicons';
import { loadLabCoord } from '../../../../redux/lab/actionCreator';
import { PageHeader } from '../../../../components/page-headers/page-headers';
import { BasicFormWrapper, Main } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import OverviewCardMesh from '../../../../components/cards/OverviewCardMesh';
import { GoogleMaps } from '../../../../components/maps/google-maps';
import { formatNumber } from '../../../../utility/utility';

function CoordModalShrimp() {
  const [orientation, setOrientation] = useState('landscape');  // Controlar la disposición
  const reportRef = useRef(); // Referencia al HTML que se convertirá en PDF


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
    { key: '4', label: 'Fecha de Siembra Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY HH:mm A') : '-' },
    { key: '5', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '20 ppm' },
    { key: '6', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '1.000.000 larvas' },
    { key: '7', label: 'Alcalinidad Piscina Pre Cría:', value: coordination?.coord_alkalinity || '140 ppm' },
    { key: '8', label: 'PH Piscina de Pre Cría:', value: coordination?.coord_pre_breeding_pool_ph || '5 ppm' },
  ];

  const labInfoData = [
    { key: '0', label: 'Módulo:', value: coordination?.lab_module || 'M1' },
    { key: '1', label: 'Tanque:', value: coordination?.tank || 'T1' },
    { key: '2', label: 'Código:', value: coordination?.SM_FishingNotification || 'PL10' },
    { key: '2', label: 'Origen de Nauplio:', value: coordination?.origen || '' },
    { key: '5', label: 'PL:', value: coordination?.answered_pl || 'PL10' },
    { key: '4', label: 'Conteo Preliminar Lab:', value: coordination ? `${formatNumber(coordination.lab_count)} larvas/gramo` : '280 larvas/gramo' },
    { key: '6', label: 'Salinidad:', value: coordination ? `${coordination.confirmed_salinity} ppm` : '20 ppm' },
    { key: '7', label: 'Método de Envío:', value: coordination?.shipping_method || 'FUNDAS' },
    { key: '11', label: 'Alcalinidad Tanque de Origen:', value: coordination?.alkalinity || '145 ppm' },
    { key: '12', label: 'PH Tanque de Origen:', value: coordination?.pre_breeding_pool_ph || '6 ppm' },
  ];


  const binaryFields = [
    { key: '9', label: 'Óxigeno en Camino', icon: 'food.svg', value: coordination?.oxygen_on_the_go ? true : false },
    { key: '10', label: 'Comida en Camino', icon: 'food.svg', value: coordination?.food_on_the_go ? true : false },
  ];
  const overviewCardMeshData = [
    {
      id: 1,
      type: 'primary',
      icon: 'biomasa.svg',
      label: 'Total Tanque',
      total: coordination ? coordination.tank_planting : '0',
      dataPeriod: 'Tanque',
    },
    {
      id: 2,
      type: 'secondary',
      icon: 'biomasa.svg',
      label: 'Total Confirmado',
      total: coordination ? coordination.confirmed_total : '0',
      dataPeriod: 'Confirmado',
    },

    {
      id: 2,
      type: 'success',
      icon: 'biomasa.svg',
      label: 'Unidad x Empaque',
      total: coordination ? coordination.confirmed_total : '0',
      dataPeriod: 'Confirmado',
    },
  ];


  return (
    <>
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Suspense fallback={
              <Cards headless>
                <Skeleton paragraph={{ rows: 20 }} active />
              </Cards>
            }>
              <BasicFormWrapper className="mb-25">
                <div ref={reportRef}>
                  <Row gutter={25}>


                    <Col xl={24} xs={24}>
                      <Suspense
                        fallback={
                          <Cards headless>
                            <Skeleton active />
                          </Cards>
                        }
                      >
                        <Row gutter={16} style={{ marginBottom: '16px' }}>
                          <Col span={10}>
                            <strong>Fecha:</strong> {coordination?.planned_date ? moment(coordination.planned_date).format('DD-MM-YYYY HH:mm A') : '-'}
                          </Col>
                          <Col span={10}>
                            <strong>Módulo:</strong> {coordination?.lab_module || 'M1'}
                          </Col>
                          <Col span={4}>
                            <strong>Tanque:</strong> {coordination?.tank || 'T1'}
                          </Col>
                        </Row>
                        <br />

                        <Row gutter={16} style={{ marginBottom: '16px' }}>
                          <Col xs={24} sm={24} md={24} lg={10}>
                            {/* Secciones en Cards para información clave */}
                            <div style={{ maxWidth: '100%' }}>
                              {overviewCardMeshData.map((item, i) => (
                                <OverviewCardMesh data={item} key={i} />
                              ))}
                            </div>
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={14}>
                            {/* Tabla estilizada de información de laboratorio */}
                            <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                              <Table
                                className='custom-table_lab'
                                dataSource={labInfoData}
                                columns={[
                                  { title: '', dataIndex: 'label', key: 'label', width: '60%' }, // 60% para la primera columna
                                  { title: '', dataIndex: 'value', key: 'value', width: '40%' }, // 40% para la segunda columna
                                ]}
                                pagination={false}
                                showHeader={false}
                                bordered
                                rowClassName={() => 'custom-table-row'}
                                style={{ width: '100%' }} // Asegura que la tabla se ajuste al 100% del contenedor
                              />
                            </div>
                          </Col>
                        </Row>
                        <br />

                        <Row gutter={16} style={{ marginBottom: '16px' }}>
                          <Col span={24} style={{ textAlign: 'center' }}>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: window.innerWidth < 430 ? 'column' : 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: "50px",
                                width: "100%"
                              }}>
                              {binaryFields.map((field, index) => (

                                <div key={index} style={{
                                  display: "flex", flexDirection: window.innerWidth <430  ? "column" : "row",
                                  alignItems: "center"
                                }}>
                                  <div style={{ width: "50px" }}>
                                    <ReactSVG src={require(`../../../../static/img/AQx-IMG/${field.icon}`)} />
                                  </div>
                                  <div style={{ marginLeft: "10px" }}>
                                    <strong>{field.label}</strong>
                                  </div>
                                  <div style={{ marginLeft: "10px" }}>
                                    <Checkbox checked={field.value} disabled>
                                      {field.value ? 'Sí' : 'No'}
                                    </Checkbox>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </Col>
                        </Row>
                      </Suspense>
                    </Col>

                  </Row>
                </div>

              </BasicFormWrapper>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CoordModalShrimp;
