import React, { Suspense, useState, useEffect, useRef } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton, Table, Typography, Badge, Checkbox, Avatar, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, Main } from '../styled';
import { loadLabCoord } from '../../redux/lab/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import { formatNumber } from '../../utility/utility';
import OverviewCardMesh from '../../components/cards/OverviewCardMesh';
import { ReactSVG } from 'react-svg';




import {
  UilArrowsResize,
  UilFlaskPotion,    // Para Cultivo (representa investigación y cultivo)
} from '@iconscout/react-unicons';
import { generatePDF } from '../../utility/printPdf';

function CoordinationLabsResumen() {
  const [orientation, setOrientation] = useState('landscape');  // Controlar la disposición
  const reportRef = useRef(); // Referencia al HTML que se convertirá en PDF

  const handleGeneratePDF = () => {
    const element = reportRef.current; // Referencia al contenido del reporte
    generatePDF(element, orientation, 'reporte-coordinacion.pdf');
  };

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
    { key: '5', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '' },
    { key: '6', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '' },
    { key: '7', label: 'Alcalinidad Piscina Pre Cría:', value: coordination?.coord_alkalinity || '' },
    { key: '8', label: 'PH Piscina de Pre Cría:', value: coordination?.coord_pre_breeding_pool_ph || '' },
  ];

  const labInfoData = [
    { key: '0', label: 'Módulo:', value: coordination?.lab_module || '' },
    { key: '1', label: 'Tanque:', value: coordination?.tank || '' },
    { key: '2', label: 'Código:', value: coordination?.SM_FishingNotification || '' },
    { key: '2', label: 'Origen de Nauplio:', value: coordination?.origen || '' },
    { key: '5', label: 'PL:', value: coordination?.answered_pl || '' },
    { key: '4', label: 'Conteo Preliminar Lab:', value: coordination ? `${formatNumber(coordination.lab_count)} larvas/gramo` : '' },
    { key: '6', label: 'Salinidad:', value: coordination ? `${coordination.confirmed_salinity} ppm` : '' },
    { key: '7', label: 'Método de Envío:', value: coordination?.shipping_method || '' },
  ];

  const labParamsInfoData = [
    { key: '0', label: 'Alcalinidad Tanque de Origen:', value: coordination?.alkalinity || '' },
    { key: '1', label: 'PH Tanque de Origen:', value: coordination?.pre_breeding_pool_ph || '' },
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

  const columns = [
    {
      title: '', dataIndex: 'label', key: 'label', width: '55%', render: (text) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              height: '5px',
              width: '5px',
              backgroundColor: '#012e40', // Elige el color del dot
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '8px', // Espacio entre el dot y el texto
            }}
          />
          <span>{text}</span>
        </div>
      ),
    },
    { title: '', dataIndex: 'value', key: 'value', width: '45%' },
  ];

  return (
    <>
      <PageHeader 
       onBack={() => window.history.back()}
      className="ninjadash-page-header-main" title={`Coordinación: ${coordination?.SM_FishingNotification || "-"}`} routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Suspense fallback={
              <Cards headless>
                <Skeleton paragraph={{ rows: 20 }} active />
              </Cards>
            }>
              <Row gutter={15} style={{ display: 'flex' }}>
                <Col xl={7} xs={24} style={{ display: 'flex' }}>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <Cards
                      icon={<UilArrowsResize />}
                      title={`Coordinación `}
                      size="large"
                    >
                      <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        height: '100%',  // Asegura que el contenedor tome toda la altura
                        justifyContent: 'space-between'  // Distribuye el espacio entre los elementos
                      }}>
                        <div style={{
                          display: 'flex',
                          flexDirection: "column",
                          alignItems: 'center',
                          textAlign: "center",
                          marginBottom: '20px'  // Añade espacio entre la información y la tabla
                        }}>
                          <Avatar style={{ backgroundColor: '#0e92e7', marginBottom: '10px' }}>
                            {coordination?.org_name?.[0] || 'E'}
                          </Avatar>
                          <Typography.Title level={5} style={{ margin: '5px 0' }}>
                            {coordination?.org_name || 'EcSSA Manabí'}
                          </Typography.Title>
                          {coordination?.pre_breeding_pool || 'Pre Cria 1'}
                        </div>

                        <div style={{ width: '100%' }}>
                          <Table
                            className='custom-table_lab'
                            dataSource={coordData}
                            columns={columns}
                            pagination={false}
                            showHeader={false}
                            bordered
                            rowClassName={() => 'custom-table-row'}
                          />
                        </div>
                      </div>
                    </Cards>


                  </Suspense>
                </Col>

                <Col xl={17} xs={24} style={{ display: 'flex' }}>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <Cards icon={<UilFlaskPotion />} title="Información del Laboratorio" size="large">
                      {/* Detalles del laboratorio */}
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

                      <Row gutter={16} style={{ marginBottom: '16px' }}>
                        <Col xs={24} sm={24} md={24} lg={12}>
                          {/* Secciones en Cards para información clave */}
                          <div style={{ maxWidth: '100%' }}>
                            {overviewCardMeshData.map((item, i) => (
                              <OverviewCardMesh data={item} key={i} />
                            ))}
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center', // Alinea el contenido al centro
                              gap: "10px", // Ajusta el espacio entre los elementos
                              width: "100%",
                            }}>
                            {binaryFields.map((field, index) => (
                              <div key={index} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <div style={{ width: "50px" }}>
                                 <ReactSVG src={new URL(`../../static/img/AQx-IMG/${field.icon}`, import.meta.url).href} />
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
                        <Col xs={24} sm={24} md={24} lg={12}>
                          {/* Tabla estilizada de información de laboratorio */}
                          <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                            <Table
                              className='custom-table_lab'
                              dataSource={labInfoData}
                              columns={[
                                { title: '', dataIndex: 'label', key: 'label', width: '40%' },
                                { title: '', dataIndex: 'value', key: 'value', width: '60%' }, // 40% para la segunda columna
                              ]}
                              pagination={false}
                              showHeader={false}
                              bordered
                              rowClassName={() => 'custom-table-row'}
                              style={{ width: '100%' }} // Asegura que la tabla se ajuste al 100% del contenedor
                            />
                            <br/>
                              <strong>Parámetros de Agua:</strong> 
                            <Table
                              className='custom-table_lab'
                              dataSource={labParamsInfoData}
                              columns={[
                                { title: '', dataIndex: 'label', key: 'label', width: '40%' },
                                { title: '', dataIndex: 'value', key: 'value', width: '60%' }, // 40% para la segunda columna
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


                    </Cards>
                  </Suspense>
                </Col>

              </Row>
              {/* Botón para generar el PDF 
                <Button type="primary" onClick={handleGeneratePDF}>
                  Generar PDF
                </Button>
                */}
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CoordinationLabsResumen;