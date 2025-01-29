import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, Main, OrderSummary, CoordStatusWrapper } from '../styled';
import { loadLabCoord } from '../../redux/lab/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import {useNavigate } from 'react-router-dom';
import { formatNumber } from '../../utility/utility';

function CoordinationLabsResumen() {
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
  const coordination = useSelector((state) => state.lab.coordination);
  const loading = useSelector((state) => state.lab.loading);

  console.log( JSON.stringify(coordination) );
  
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
    form: {
      module: coordination ? coordination.SM_Module : "",
      tank: coordination ? coordination.SM_Tank : "",
      tankTotal: coordination ? coordination.SM_TankTotalPlanting : "",
      labCount: coordination ? coordination.SM_PreliminaryLaboratoryCount : "",
      pl: coordination ? coordination.SM_AnsweredPL : "",
      salinity: coordination ? coordination.SM_ConfirmedSalinity : "",
      methodName: coordination && coordination.SM_ShippingMethod ? coordination.SM_ShippingMethod.id : "",
      oxygenOnTheGo: coordination ? coordination.SM_OxygenOnTheGo : false,
      foodOnTheGo: coordination ? coordination.SM_FoodOnTheGo : false,
    }
  });

  useEffect(() => {
    dispatch(loadLabCoord(id, () => {}));
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


  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title={`Coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} routes={PageRoutes} />
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
                    <Col xl={10} xs={24} style={{ display: 'flex' }}>
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

                          <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: "center" }}>

                            <Typography.Text style={{ fontSize: '14px' }}>
                              <strong>Estado:</strong> {coordination?.statusWrapper?.statusName || '-'}
                            </Typography.Text>
                            <br />
                            <Avatar style={{ backgroundColor: '#0e92e7', marginRight: '10px' }}>
                              {coordination?.org_name?.[0] || 'E'}
                            </Avatar>
                            <Typography.Title level={5}>{coordination?.org_name || 'EcSSA Manabí'}</Typography.Title>
                            {coordination?.pre_breeding_pool || 'Pre Cria 1'}
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
                                      <span className="summary-list-text">{coordination ? coordination.pre_breeding_pool : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Notificación de Siembra :</span>
                                      <span className="summary-list-text">{coordination ? coordination.SM_FishingNotification : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Fecha de Siembra Solicitada:</span>
                                      <span className="summary-list-text">{coordination ? moment(coordination.planned_date).format("DD-MM-YYYY HH:mm A") : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Salinidad Solicitada:</span>
                                      <span className="summary-list-text">{coordination  ? `${coordination.requested_salinity} ppm` : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Cantidad Solicitada :</span>
                                      <span className="summary-list-text">{coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Alcalinidad Piscina de Pre Cría:</span>
                                      <span className="summary-list-text">{coordination && coordination.coord_alkalinity ? `${coordination.coord_alkalinity} ppm` : <span style={{color: "red"}}>PENDIENTE</span>}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">PH Piscina de Pre Cría :</span>
                                      <span className="summary-list-text">{coordination && coordination.coord_pre_breeding_pool_ph ? `${coordination.coord_pre_breeding_pool_ph} ppm` : <span style={{color: "red"}}>PENDIENTE</span>}</span>
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
                            <Heading as="h5">Información del Laboratorio</Heading>
                          </div>
                          <OrderSummary>
                                <div className="invoice-summary-inner">
                                  <ul className="summary-list">
                                    <li>
                                      <span className="summary-list-title">Fecha :</span>
                                      <span className="summary-list-text">{coordination ? moment(coordination.planned_date).format("DD-MM-YYYY HH:mm A") : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Módulo :</span>
                                      <span className="summary-list-text">{coordination ? coordination.lab_module : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Tanque :</span>
                                      <span className="summary-list-text">{coordination ? coordination.tank : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Total Tanque :</span>
                                      <span className="summary-list-text">{coordination ? `${formatNumber(coordination.tank_planting)} larvas` : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Total Confirmado :</span>
                                      <span className="summary-list-text">{coordination ? `${formatNumber(coordination.confirmed_total)} larvas` : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Conteo Preliminar Lab :</span>
                                      <span className="summary-list-text">{coordination ? `${formatNumber(coordination.lab_count)} larvas/gramo` : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">PL :</span>
                                      <span className="summary-list-text">{coordination ? coordination.answered_pl : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Salinidad :</span>
                                      <span className="summary-list-text">{coordination ? `${coordination.confirmed_salinity} ppm` : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Método de Envío :</span>
                                      <span className="summary-list-text">{coordination ? coordination.shipping_method : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Unidades por Empaque :</span>
                                      <span className="summary-list-text">{coordination ? `${formatNumber(coordination.units_per_pack)} larvas` : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Óxigeno en Camino :</span>
                                      <span className="summary-list-text">{coordination && coordination.oxygen_on_the_go ? "Si" : "No"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Comida en Camino :</span>
                                      <span className="summary-list-text">{coordination && coordination.food_on_the_go ? "Si" : "No"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Alcalinidad Tanque de Origen:</span>
                                      <span className="summary-list-text">{coordination && coordination.alkalinity ? `${coordination.alkalinity} ppm` : <span style={{color: "red"}}>PENDIENTE</span>}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">PH Tanque de Origen :</span>
                                      <span className="summary-list-text">{coordination && coordination.pre_breeding_pool_ph ? `${coordination.pre_breeding_pool_ph} ppm` : <span style={{color: "red"}}>PENDIENTE</span>}</span>
                                    </li>
                                  </ul>
                                </div>
                              </OrderSummary>
                        </Cards>
                      </div>
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

export default CoordinationLabsResumen;
