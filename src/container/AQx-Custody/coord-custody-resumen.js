import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, Main, OrderSummary, CoordStatusWrapper } from '../styled';
import { loadCustodyCoord } from '../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import {useNavigate } from 'react-router-dom';

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
                                    <span className="summary-list-text">{coordination ? moment(coordination.planned_date).utc().format("DD-MM-YYYY HH:mm A") : "-"}</span>
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
                                    <span className="summary-list-text">{coordination ? coordination.fishing_volume : "-"}</span>
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
                                    <span className="summary-list-title">Fecha :</span>
                                    <span className="summary-list-text">{coordination ? moment(coordination.answered_date).utc().format("DD-MM-YYYY HH:mm A") : ""}</span>
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

export default CoordinationCustodyResumen;
