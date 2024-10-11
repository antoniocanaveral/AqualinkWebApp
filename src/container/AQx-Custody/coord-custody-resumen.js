import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, Main, OrderSummary, CoordStatusWrapper } from '../styled';
import { loadCustodyCoord, loadBinesByCoord, loadDrawerByCoord, loadDrawerStampByCoord } from '../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import {useNavigate } from 'react-router-dom';
import DataTable from '../../components/table/DataTable';

function CoordinationCustodyResumen() {
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
  const loading = useSelector((state) => state.custody.loading);
  const bines = useSelector((state) => state.custody.bines);
  const drawer = useSelector((state) => state.custody.drawer);
  const drawerStamps = useSelector((state) => state.custody.drawerStamps);

  console.log("-------->>>>>");
  console.log(JSON.stringify(drawer));
  
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
    form: {
    }
  });

  useEffect(() => {
    dispatch(loadCustodyCoord(id, () => {}));
    dispatch(loadBinesByCoord(id, () => {}));
    dispatch(loadDrawerByCoord(id, (isSuccess, drawerInfo) => {}));
    dispatch(loadDrawerStampByCoord(id, () => {}));
  }, [dispatch, id]);

  useLayoutEffect(() => {
    const activeElement = document.querySelectorAll('.ant-steps-item-active');
    const successElement = document.querySelectorAll('.ant-steps-item-finish');

    activeElement.forEach((element) => {
      if (element.previousSibling) {
        const bgImage = element.previousSibling;
        if (bgImage.classList.contains('success-step-item')) {
          bgImage.classList.remove('success-step-item');
        } else {
          bgImage.classList.remove('wizard-step-item');
        }
        bgImage.classList.add('wizard-steps-item-active');
      }
    });

    successElement.forEach((element) => {
      if (element.previousSibling) {
        const bgImage = element.previousSibling;
        bgImage.classList.remove('wizard-steps-item-active');
        bgImage.classList.add('success-step-item');
      }
    });
  });


  const binesTableDataScource = [];
  const binesDataTableColumnMain = [
    {
      title: 'No. Bin',
      dataIndex: 'bin',
      key: 'bin',
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

  const drawerTableDataScource = [];
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

  if (bines && bines.length > 0) {
    bines.map((item, index) => {
      return binesTableDataScource.push({
        bin: <span>{item.Name}</span>,
        seal1: <span>{item.SM_Stamp1}</span>,
        seal2: <span>{item.SM_Stamp2}</span>,
        seal3: <span>{item.SM_Stamp3}</span>,
        seal4: <span>{item.SM_Stamp4}</span>
      });
    });
  }

  if (drawerStamps && drawerStamps.length > 0) {
    drawerStamps.map((item, index) => {
      return drawerTableDataScource.push({
        van: <span>{item.SM_Van}</span>,
        stamp: <span>{item.SM_Stamp}</span>,
        drawers: <span>{item.SM_DrawersCount}</span>
      });
    });
  }

  const getDrawersCount = () => {
    let count = 0;
    if(drawerStamps) {
      for(let ds of drawerStamps) {
        count += ds.SM_DrawersCount;
      }
    }
    return count;
  }


  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title={`Coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton paragraph={{ rows: 20 }} active />
                </Cards>
              }
            >
              <BasicFormWrapper className="mb-25">
                <Cards headless>
                <BasicFormWrapper style={{ width: '80%' }}>
                  <div className="atbd-review-order" style={{ width: '100%' }}>
                    <Heading as="h4">Resumen</Heading>
                    <Cards bodyStyle={{ borderRadius: 10 }} headless>
                      <div className="atbd-review-order__single">
                        <Cards headless>
                          <div className="atbd-review-order__shippingTitle">
                            <Heading as="h5">
                              Coordinación
                            </Heading>
                          </div>
                          <article className="atbd-review-order__shippingInfo">
                            <OrderSummary>
                              <div className="invoice-summary-inner">
                                <ul className="summary-list">
                                  <li>
                                      <span className="summary-list-title"></span>
                                      <span className="summary-list-text">{ coordination &&  coordination.statusWrapper && <CoordStatusWrapper> <span className={`ninjadash-status ninjadash-status-${coordination.statusWrapper.className}`}>{coordination.statusWrapper.statusName}</span> </CoordStatusWrapper> }</span> 
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Camaronera :</span>
                                    <span className="summary-list-text">{coordination ? coordination.org_name : "-"}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Piscina :</span>
                                    <span className="summary-list-text">{coordination ? coordination.warehouse_name : "-"}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Dirección :</span>
                                    <span className="summary-list-text">{coordination ? `${coordination.City} ${coordination.Address1},${coordination.Address2}` : "-"}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Notificación de Pesca :</span>
                                    <span className="summary-list-text">{coordination ? coordination.SM_FishingNotification : "-"}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Fecha de Pesca Solicitada:</span>
                                    <span className="summary-list-text">{coordination ? moment(coordination.planned_date).format("DD-MM-YYYY hh:mm A") : "-"}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Tipo de Pesca:</span>
                                    <span className="summary-list-text">{coordination  ? coordination.fishing_type : "-"}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Tipo de Contenedor :</span>
                                    <span className="summary-list-text">{coordination ? coordination.container_type : "-"}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Volumen de Pesca :</span>
                                    <span className="summary-list-text">{coordination ? `${coordination.fishing_volume} lbs` : "-"}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Clasificación :</span>
                                    <span className="summary-list-text">{coordination ? coordination.Classification : "-"}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Textura :</span>
                                    <span className="summary-list-text">{coordination ? coordination.texture : "-"}</span>
                                  </li>
                                </ul>
                              </div>
                            </OrderSummary>
                          </article>
                        </Cards>
                      </div>
                      <div className="atbd-review-order__single">
                        <Cards headless>
                          <div>
                            <Heading as="h5">Información del Empacadora</Heading>
                          </div>
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
                        </Cards>
                      </div>
                      {
                        coordination && coordination.container_type == 'BINES' && <div className="atbd-review-order__single">
                        <Cards headless>
                          <div>
                            <Heading as="h5">Información de Bines</Heading>
                          </div>
                            <OrderSummary>
                              <DataTable
                                tableData={binesTableDataScource}
                                columns={binesDataTableColumnMain}
                                key="bin"
                                rowSelection={false}
                              />
                            </OrderSummary>
                        </Cards>
                      </div>
                      }
                      {             
                        coordination && coordination.container_type == 'GAVETAS' && <div className="atbd-review-order__single">
                        <Cards headless>
                          <div>
                            <Heading as="h5">Información de Gavetas</Heading>
                          </div>
                            <OrderSummary>
                              <div className="invoice-summary-inner">
                                <ul className="summary-list">
                                  <li>
                                    <span className="summary-list-title">Cantidad de Gavetas :</span>
                                    <span className="summary-list-text">{getDrawersCount()}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Hielo (#Sacos) :</span>
                                    <span className="summary-list-text">{drawer && drawer.SM_Ice ? `${drawer.SM_Ice} saco${drawer.SM_Ice > 1 ? 's' : ''}` : ""}</span>
                                  </li>
                                  <li>
                                    <span className="summary-list-title">Metabisulfitos (kg) :</span>
                                    <span className="summary-list-text">{drawer && drawer.SM_Metabisulfito ? `${drawer.SM_Metabisulfito} kg` : ""}</span>
                                  </li>
                                </ul>
                              </div>
                              <DataTable
                                tableData={drawerTableDataScource}
                                columns={drawerDataTableColumnMain}
                                key="bin"
                                rowSelection={false}
                              />
                            </OrderSummary>
                        </Cards>
                      </div>
                      }
                      
                    </Cards>
                  </div>
                </BasicFormWrapper>
                </Cards>
              </BasicFormWrapper>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CoordinationCustodyResumen;
