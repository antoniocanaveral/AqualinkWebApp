
import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton, Avatar, Typography, Table } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, Main, OrderSummary, CoordStatusWrapper } from '../styled';
import { loadCustodyCoord, loadBinesByCoord, loadDrawerByCoord, loadDrawerStampByCoord } from '../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../components/table/DataTable';
import { GoogleMaps } from '../../components/maps/google-maps';
import { fetchFishingDrawerInfo } from '../../redux/bines-drawers/actionCreator';


const binesDataTableColumnMain = [
  {
    title: 'No. Bin',
    dataIndex: 'bin',
    key: 'bin',
  },
  {
    title: 'Kit de Seguridad',
    dataIndex: 'sm_kitcode',
    key: 'sm_kitcode',
  },
  {
    title: 'Sello 1',
    dataIndex: 'seal1',
    key: 'seal1',
  },
  {
    title: 'Sello 2',
    dataIndex: 'seal2',
    key: 'seal2',
  },
  {
    title: 'Sello 3',
    dataIndex: 'seal3',
    key: 'seal3',
  },
  {
    title: 'Sello 4',
    dataIndex: 'seal4',
    key: 'seal4',
  }
];

const drawerDataTableColumnMain = [
  {
    title: 'Furgón',
    dataIndex: 'van',
    key: 'van',
  },
  {
    title: 'Sello',
    dataIndex: 'stamp',
    key: 'stamp',
  },
  {
    title: '#Gavetas',
    dataIndex: 'drawers',
    key: 'drawers',
  }
];

const furgonesColumns = [
  { title: 'Furgón', dataIndex: 'van', key: 'van' },
  { title: 'Kit de Seguridad', dataIndex: 'kitCode', key: 'kitCode' },
  { title: 'Sello 1', dataIndex: 'seal1', key: 'seal1' },
  { title: 'Sello 2', dataIndex: 'seal2', key: 'seal2' },
  { title: 'Gavetas Caladas', dataIndex: 'drawerCaladas', key: 'drawerCaladas' },
  { title: 'Gavetas Sólidas', dataIndex: 'drawerSolidas', key: 'drawerSolidas' },
];


const coordinationDataColumns = [
  {
    title: '', dataIndex: 'label', key: 'label', width: '45%', render: (text) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            height: '5px',
            width: '5px',
            backgroundColor: '#012e40',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '8px',
          }}
        />
        <span>{text}</span>
      </div>
    ),
  },
  { title: '', dataIndex: 'value', key: 'value', width: '55%' },
];


function CoordinationCustodyResumen() {
  const { organizationSecurityKits = [], organizationFishingDrawerStamp = [], fishingDrawerInfo, fishingDrawerInfoLoading, treaters, treatersLoading } = useSelector((state) => state.bin_drawers || {});


  const [addedFurgones, setAddedFurgones] = useState([]);

  useEffect(() => {
    if (!fishingDrawerInfoLoading && fishingDrawerInfo.length > 0) {

      const formattedData = fishingDrawerInfo.map(item => ({
        van: item.sm_furgon, // "1 - GEL-7774"
        kitCode: item.sm_kitcode, // "Kit123456"
        seal1: item.SM_Stamp1, // "11"
        seal2: item.SM_Stamp2, // "1"
        drawerCaladas: item.sm_kdrawerscount, // 10
        drawerSolidas: item.sm_sdrawerscount, // 10
      }));

      setAddedFurgones(formattedData);
    }
  }, [fishingDrawerInfo, fishingDrawerInfoLoading]);
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: Cookies.get('orgName'),
    },
    {
      path: 'first',
      breadcrumbName: 'Coordinación',
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const coordination = useSelector((state) => state.custody.coordination);
  const bines = useSelector((state) => state.custody.bines);
  const drawer = useSelector((state) => state.custody.drawer);
  const drawerStamps = useSelector((state) => state.custody.drawerStamps);
  console.log(bines)
  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
    form: {}
  });

  useEffect(() => {
    dispatch(loadCustodyCoord(id, () => { }));
    dispatch(loadBinesByCoord(id, () => { }));
    dispatch(loadDrawerByCoord(id, () => { }));
    dispatch(loadDrawerStampByCoord(id, () => { }));
    dispatch(fetchFishingDrawerInfo(id))
  }, [dispatch, id]);

  const binesTableDataScource = bines ? bines.map((item) => ({
    bin: <span>{item.bin_name}</span>,
    sm_kitcode: <span>{item.sm_kitcode || "NA"}</span>,
    seal1: <span>{item.SM_Stamp1}</span>,
    seal2: <span>{item.SM_Stamp2}</span>,
    seal3: <span>{item.SM_Stamp3}</span>,
    seal4: <span>{item.SM_Stamp4}</span>
  })) : [];

  const drawerTableDataScource = drawerStamps ? drawerStamps.map((item) => ({
    van: <span>{item.SM_Van}</span>,
    stamp: <span>{item.SM_Stamp}</span>,
    drawers: <span>{item.SM_DrawersCount}</span>
  })) : [];

  const coordData = [
    { key: '1', label: 'Dirección:', value: coordination ? `${coordination.City} ${coordination.Address1}, ${coordination.Address2 || 'N/A'}` : '-' },
    { key: '2', label: 'Notificación de Pesca:', value: coordination ? coordination.SM_FishingNotification : '-' },
    { key: '3', label: 'Fecha de Pesca Solicitada:', value: coordination ? moment(coordination.planned_date).format("DD-MM-YYYY hh:mm A") : '-' },
    { key: '4', label: 'Tipo de Pesca:', value: coordination ? coordination.fishing_type : '-' },
    { key: '5', label: 'Tipo de Contenedor:', value: coordination ? coordination.container_type : '-' },
    { key: '6', label: 'Volumen de Pesca:', value: coordination ? `${coordination.fishing_volume} lbs` : '-' },
    { key: '7', label: 'Clasificación:', value: coordination ? coordination.Classification : '-' },
    { key: '8', label: 'Textura:', value: coordination ? coordination.texture : '-' },
  ];

  const getDrawersCount = () => {
    return drawerStamps ? drawerStamps.reduce((acc, ds) => acc + ds.SM_DrawersCount, 0) : 0;
  };

  return (
    <>
      <PageHeader onBack={() => window.history.back()} title={`Coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col xl={10} xs={24} style={{ display: "flex" }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards
                title={`Coordinación `}
                size="large"
              >
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: "center" }}>
                  <Avatar style={{ backgroundColor: '#0e92e7', marginRight: '10px' }}>
                    {coordination?.org_name?.[0] || ''}
                  </Avatar>
                  <Typography.Title level={5}>{coordination?.org_name || 'EcSSA Manabí'}</Typography.Title>
                  {coordination?.warehouse_name || ''}
                </div>
                <br />

                <Col xs={24} md={24}>
                  <Table
                    className='custom-table_lab'
                    dataSource={coordData}
                    columns={coordinationDataColumns}
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
              <Cards title="Información de la Empacadora" size="large">
                {/* Detalles del laboratorio */}
                <Row gutter={16} style={{ marginBottom: '16px' }}>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <OrderSummary>
                      <div className="invoice-summary-inner">
                        <ul className="summary-list">
                          <li>
                            <span className="summary-list-title">Fecha y Hora de Pesca Confirmada :</span>
                            <span className="summary-list-text">{coordination ? moment(coordination.answered_date).format("DD-MM-YYYY hh:mm A") : ""}</span>
                          </li>
                        </ul>
                      </div>
                    </OrderSummary>
                  </Col>
                </Row>

                {coordination?.container_type === 'BINES' && (
                  <div className="atbd-review-order__single">
                    <OrderSummary>
                      <div className="invoice-summary-inner">
                        <ul className="summary-list">
                          <li>
                            <span className="summary-list-title">Tratador:</span>
                            <span className="summary-list-text">{coordination?.user_name}</span>
                          </li>
                          <li>
                            <span className="summary-list-title">Hielo (#Sacos) :</span>
                            <span className="summary-list-text">{coordination?.SM_Ice ? `${coordination?.SM_Ice} saco${coordination?.SM_Ice > 1 ? 's' : ''}` : ""}</span>
                          </li>
                          <li>
                            <span className="summary-list-title">Metabisulfitos (kg) :</span>
                            <span className="summary-list-text">{coordination?.sm_metabisulfite ? `${coordination?.sm_metabisulfite} kg` : ""}</span>
                          </li>
                        </ul>
                      </div>
                     
                    </OrderSummary>
                    <Cards headless>
                      <Heading as="h5">Información de Bines</Heading>
                      <DataTable
                        tableData={binesTableDataScource}
                        columns={binesDataTableColumnMain}
                        key="bin"
                        rowSelection={false}
                      />
                    </Cards>
                  </div>
                )}

                {coordination?.container_type === 'GAVETAS' && (
                  <div className="atbd-review-order__single">
                    <Cards headless>
                      <Heading as="h5">Información de Gavetas</Heading>
                      <OrderSummary>
                        <div className="invoice-summary-inner">
                          <ul className="summary-list">
                            <li>
                              <span className="summary-list-title">Tratador:</span>
                              <span className="summary-list-text">{coordination?.user_name}</span>
                            </li>
                            <li>
                              <span className="summary-list-title">Hielo (#Sacos) :</span>
                              <span className="summary-list-text">{coordination?.SM_Ice ? `${coordination?.SM_Ice} saco${coordination?.SM_Ice > 1 ? 's' : ''}` : ""}</span>
                            </li>
                            <li>
                              <span className="summary-list-title">Metabisulfitos (kg) :</span>
                              <span className="summary-list-text">{coordination?.sm_metabisulfite ? `${coordination?.sm_metabisulfite} kg` : ""}</span>
                            </li>
                          </ul>
                        </div>
                        <DataTable
                          tableData={addedFurgones}
                          columns={furgonesColumns}
                          key="furgon"
                          rowSelection={false}
                        />
                      </OrderSummary>
                    </Cards>
                  </div>
                )}
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CoordinationCustodyResumen;
