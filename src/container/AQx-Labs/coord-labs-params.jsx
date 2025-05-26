import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton, InputNumber, message } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, Main, OrderSummary, CoordStatusWrapper } from '../styled';
import { enviarParamsLabCoord, loadLabCoord } from '../../redux/lab/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import {useNavigate } from 'react-router-dom';
import { formatNumber, inputFormatter, parserNumber } from '../../utility/utility';
import { Button } from '../../components/buttons/buttons';
import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';

function CoordinationLabsParams() {
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

  const [inTime, setInTime] = useState(false);
  const [timeMsg, setTimeMsg] = useState("");

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
    inTime: false,
    timeMsg: "",
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
      alkalinity: 0,
      pre_breeding_pool_ph: 0,
    }
  });

  useEffect(() => {
    dispatch(loadLabCoord(id, (isSuccess, coord) => {
      if(isSuccess) {
        const now = moment();
        const minDate = moment(coord.answered_date).utc().add(-1, 'days').add(3, 'hours').add(2, 'minutes');
        const maxDate = moment(coord.answered_date).utc().add(-1, 'days').add(6, 'hours').add(1, 'minutes');

        console.log(`answered_date ${moment(coord.answered_date).utc().format("YYYY-MM-DD HH:mm A")}`);
        console.log(`minDate ${minDate.utc().format("YYYY-MM-DD HH:mm A")}`);
        console.log(`maxDate ${maxDate.utc().format("YYYY-MM-DD HH:mm A")}`);
        console.log(`now ${now.format("YYYY-MM-DD HH:mm A")}`);
  
        if(now.isBetween(minDate, maxDate)) {
          setInTime(true);
        } else {
          setInTime(false);
          setTimeMsg(`La información de parámetros de calidad de medio de cultivo debe compartise entre las ${minDate.format('LT')} y las ${maxDate.format('LT')} del día anterior a la siembra en finca ( ${maxDate.format('YYYY-MM-DD')} ) `);
        }
      }
    }));
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

  const onSave = () => {

    form.validateFields().then(() => {
      dispatch(enviarParamsLabCoord(id, coordination.SM_Coordination_ID.id, state.form.alkalinity, state.form.pre_breeding_pool_ph, () => {
        message.success("Parámetros enviados!");
        navigate("/lab/coords");
      }));
    }).catch(er => {
      message.error("Revise los datos requeridos!");
    })
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
                    <Heading as="h4">Envío de parámetros de agua</Heading>
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
                                      <span className="summary-list-title">Fecha de Siembra:</span>
                                      <span className="summary-list-text">{coordination ? moment(coordination.answered_date).format("DD-MM-YYYY HH:mm A") : "-"}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">Alcalinidad Piscina de Pre Cría:</span>
                                      <span className="summary-list-text">{coordination && coordination.coord_alkalinity ? coordination.coord_alkalinity : <span style={{color: "red"}}>PENDIENTE</span>}</span>
                                    </li>
                                    <li>
                                      <span className="summary-list-title">PH Piscina de Pre Cría :</span>
                                      <span className="summary-list-text">{coordination && coordination.coord_pre_breeding_pool_ph ? coordination.coord_pre_breeding_pool_ph : <span style={{color: "red"}}>PENDIENTE</span>}</span>
                                    </li>
                                  </ul>
                                </div>
                              </OrderSummary>

                              <Row justify="center" style={{marginTop: 20, marginBottom: 20}}>
                                    <Col sm={22} xs={24}>
                                     { !inTime && <div style={{color: "red", textAlign: "center", fontSize: 16}}>{ timeMsg }</div> }
                                    </Col>
                              </Row>

                              <BasicFormWrapper className="basic-form-inner">
                                <div className="atbd-form-checkout">
                                  <Row justify="center">
                                    <Col sm={22} xs={24}>
                                      <div className="shipping-form">
                                        <Form form={form} name="address">

                                          <Form.Item name="alkalinity" label="Alcalinidad Tanque de Origen" rules={[{ required: true, message: 'Por favor ingrese alcalinidad del agua' }]}>
                                            <InputNumber
                                              value={state.form.alkalinity}
                                              formatter={(value) => inputFormatter(value)}
                                              parser={(value) => parserNumber(value)}
                                              max={200}
                                              min={60}
                                              onChange={(value) => {
                                                setState({
                                                  ...state,
                                                  form: {
                                                    ...state.form,
                                                    alkalinity: value,
                                                  },
                                                });
                                              }}
                                            />
                                          </Form.Item>

                                          <Form.Item name="pre_breeding_pool_ph" label="PH Tanque de Origen" rules={[{ required: true, message: 'Por favor ingrese el ph del agua' }]}>
                                            <InputNumber
                                              value={state.form.pre_breeding_pool_ph}
                                              formatter={(value) => inputFormatter(value)}
                                              parser={(value) => parserNumber(value)}
                                              max={10}
                                              min={0}
                                              onChange={(value) => {
                                                setState({
                                                  ...state,
                                                  form: {
                                                    ...state.form,
                                                    pre_breeding_pool_ph: value,
                                                  },
                                                });
                                              }}
                                            />
                                          </Form.Item>

                                          { <div style={{marginBottom: 15}}>
                                            <Button size="default" type="primary" onClick={() => {
                                                onSave()
                                            }}>
                                              <UilHdd />
                                              Enviar
                                            </Button>
                                          </div> }

                                        </Form>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </BasicFormWrapper>


                          </article>
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

export default CoordinationLabsParams;