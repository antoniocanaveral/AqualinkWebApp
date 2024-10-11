import React, { lazy, Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Input, Select, Skeleton, message, Spin, DatePicker, TimePicker, InputNumber } from 'antd';
import { Button } from '../../components/buttons/buttons';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import UilFileCheckAlt from '@iconscout/react-unicons/icons/uil-file-check-alt';
import UilCheckCircle from '@iconscout/react-unicons/icons/uil-check-circle';
import { Steps } from '../../components/steps/steps';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Checkbox } from '../../components/checkbox/checkbox';
import { BasicFormWrapper, WizardWrapper, OrderSummary, WizardTwo, Main, WizardBlock } from '../styled';
import { cancelLabCoord, loadLabCoord, submitLabCoord } from '../../redux/lab/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import {useNavigate } from 'react-router-dom';
import { formatNumber, inputFormatter, parserNumber } from '../../utility/utility';

const { Option } = Select;

function CoordinationLabs() {
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
  
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
    form: {
      answeredDate: coordination ? (coordination.answered_date ? coordination.answered_date : coordination.planned_date) : moment(),
      answeredTime: coordination ? (coordination.answered_date ? coordination.answered_date : coordination.planned_date) : moment(),
      module: coordination ? coordination.SM_Module : "",
      tank: coordination ? coordination.SM_Tank : "",
      tankTotal: coordination ? coordination.SM_TankTotalPlanting : "",
      confirmedTotal: coordination ? coordination.confirmed_total : "",
      labCount: coordination ? coordination.SM_PreliminaryLaboratoryCount : "",
      pl: coordination ? coordination.SM_AnsweredPL : "",
      salinity: coordination ? coordination.SM_ConfirmedSalinity : "",
      methodName: coordination && coordination.SM_ShippingMethod ? coordination.SM_ShippingMethod.id : "",
      oxygenOnTheGo: coordination ? coordination.SM_OxygenOnTheGo : false,
      foodOnTheGo: coordination ? coordination.SM_FoodOnTheGo : false,
    }
  });

  console.log("------->>>>>>>>>");
  console.log( JSON.stringify(coordination) );

  const { status, isFinished, current } = state;

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

  const next = () => {
    return new Promise((resolve, reject) => {
      if(current < 2) {
        form.validateFields().then(() => {
          setState({
            ...state,
            status: 'process',
            current: current + 1,
          });
          resolve();
        }).catch(er => {
          message.error("Revise los datos requeridos!");
          reject(er);
        })
      } else {
        reject();
      }
    });
  };

  const prev = () => {
    return new Promise((resolve, reject) => {
      if(current > 0) {
        setState({
          ...state,
          status: 'process',
          current: current - 1,
        });
        resolve();
      } else {
        reject();
      }
    });
  };

  const done = () => {
    const confirm = window.confirm('Confirma enviar la respuesta a esta solicitud de coordinación ?');
    if (confirm) {
      dispatch(submitLabCoord(id, state.form, (success) => {
        if(success) {
          setState({
            ...state,
            status: 'finish',
            isFinished: true,
            current: 0,
          });
        } else {
          message.error('Ocurrió al enviar la coordinación.');
        }
      }))
      
    }
  };

  const onCancel = () => {
    const confirm = window.confirm('Estás seguro de querer rechazar esta coordinación ?');
    if (confirm) {
      dispatch(cancelLabCoord(id, (success) => {
        console.log(success);
        if(success) {
          message.success('Coordinación Rechazada.');
          navigate("/lab/coordinacion");
        } else {
          message.error('Ocurrió un error.');
        }
      }));
    }
  }


  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title={`Responder Coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} routes={PageRoutes} />
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
              <WizardBlock>
                <Cards headless>
                  <Row justify="center">
                    <Col xxl={20} xs={24}>
                      <WizardWrapper className="ninjadash-wizard-page">
                        <WizardTwo>
                          <Steps
                            isswitch
                            current={current}
                            status={status}
                            steps={[
                              {
                                title: 'Coordinación',
                                className: 'wizard-step-item',
                                icon: <UilUsersAlt />,
                                content: (
                                  <BasicFormWrapper className="basic-form-inner">
                                    <div className="atbd-form-checkout">
                                      <Row justify="center">
                                        <Col sm={22} xs={24}>
                                          <div className="create-account-form">
                                            <Heading as="h4">1. Datos de la Coordinación { loading && <Spin /> } </Heading>
                                            <Form form={form} name="account">
                                              <Form.Item name="farm" label="Camaronera">
                                                {coordination ? coordination.org_name : "-"}
                                              </Form.Item>
                                              <Form.Item name="poll" label="Piscina">
                                                {coordination ? coordination.pre_breeding_pool : "-"}
                                              </Form.Item>
                                              <Form.Item name="address" label="Dirección">
                                                {coordination ? `${coordination.City} ${coordination.Address1},${coordination.Address2}` : "-"}
                                              </Form.Item>
                                              <Form.Item name="notification" label="Notificación">
                                                {coordination ? coordination.SM_FishingNotification : "-"}
                                              </Form.Item>
                                              <Form.Item name="plantingdate" label="Fecha de Siembra Solicitada">
                                                {coordination ? moment(coordination.planned_date).format("DD-MM-YYYY HH:mm A") : "-"}
                                              </Form.Item>
                                              <Form.Item name="requestedpl" label="PL Solicitado">
                                                {coordination  ? coordination.requested_pl : "-"}
                                              </Form.Item>
                                              <Form.Item name="salinity" label="Salinidad Solicitada">
                                                {coordination  ? coordination.requested_salinity + " ppm" : "-"}
                                              </Form.Item>
                                              <Form.Item name="quantity" label="Cantidad Solicitada">
                                                {coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : "-"}
                                              </Form.Item>
                                              <Form.Item name="waterripening" label="Días de Maduración del Agua">
                                                {coordination ? `${coordination.water_ripening_days} días` : "-"}
                                              </Form.Item>
                                              
                                              <div>
                                              <Button size="default" type="danger" onClick={() => onCancel()}>
                                                Rechazar la Coordinación 
                                              </Button>
                                              </div>
                                            </Form>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </BasicFormWrapper>
                                ),
                              },
                              {
                                title: 'Información de Laboratorio',
                                className: 'wizard-step-item',
                                icon: <UilFileCheckAlt />,
                                content: (
                                  <BasicFormWrapper className="basic-form-inner">
                                    <div className="atbd-form-checkout">
                                      <Row justify="center">
                                        <Col sm={22} xs={24}>
                                          <div className="shipping-form">
                                            <Heading as="h4">2. Información de Laboratorio</Heading>
                                            <Form form={form} name="address">
                                              <Form.Item name="responsed_date" label="Fecha Propuesta" initialValue={ state.form.answeredDate ?  moment(state.form.answeredDate) : moment() } rules={[{ required: true, message: 'Por favor seleccione una Fecha' }]}>
                                                <DatePicker value={ state.form.answeredDate } onChange={(value) => {
                                                    let current = '';
                                                    if(value) {
                                                      current = moment(state.form.answeredDate);
                                                      current.set({ year: value.year(), month: value.month(), date: value.date() });
                                                    }
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        answeredDate: current,
                                                      },
                                                    });
                                                }}/>
                                              </Form.Item>
                                              <div style={{fontSize: "10px", top: "-20px", position: "relative"}}>[<span><strong>Solicitado:</strong> </span>{coordination ? moment(coordination.planned_date).format("DD-MM-YYYY") : "-"}]</div>

                                              <Form.Item name="response-time" label="Hora Propuesta"  initialValue={  moment( state.form.answeredDate ? moment(state.form.answeredDate).format("HH:mm") : "00:00"  , 'HH:mm')  } rules={[{ required: true, message: 'Por favor seleccione una Hora' }]}>
                                                <TimePicker value={ state.form.answeredDate } onChange={(value) => {
                                                    let current = moment(state.form.answeredDate);
                                                    current.set({ hour: value.hour(), minute: value.minute(), second: 0, millisecond: 0 });

                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        answeredDate: current,
                                                      },
                                                    });
                                                  }}/>
                                              </Form.Item>
                                              <div style={{fontSize: "10px", top: "-20px", position: "relative"}}>[<span><strong>Solicitado:</strong> </span>{coordination ? moment(coordination.planned_date).format("HH:mm A") : "-"}]</div>

                                              <Form.Item name="module" label="Módulo" rules={[{ required: true, message: 'Por favor agregue un Módulo' }]}>
                                                <Input
                                                  value={state.form.module}
                                                  onChange={(e) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        module: e.target.value,
                                                      },
                                                    });
                                                  }}
                                                />
                                              </Form.Item>
                                              <Form.Item name="tank" label="Tanque" rules={[{ required: true, message: 'Por favor agregue un Tanque' }]}>
                                                <Input
                                                  value={state.form.tank}
                                                  onChange={(e) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        tank: e.target.value,
                                                      },
                                                    });
                                                  }}
                                                />
                                              </Form.Item>
                                              <Form.Item name="tankTotal" label="Total Tanque (Larvas)"  rules={[{ required: true, message: 'Por favor agregue el Total Tanque' }]}>
                                                <InputNumber
                                                  value={state.form.tankTotal}
                                                  formatter={(value) => inputFormatter(value)}
                                                  parser={(value) => parserNumber(value)}
                                                  onChange={(value) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        tankTotal: value,
                                                      },
                                                    });
                                                  }}
                                                />
                                              </Form.Item>
                                              <div style={{fontSize: "10px", top: "-20px", position: "relative"}}>[<span><strong>Solicitado:</strong> </span>{coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : "-"}]</div>
                                                
                                              <Form.Item name="confirmedTotal" label="Total Confirmado (Larvas)"  rules={[{ required: true, message: 'Por favor agregue el Total Confirmado' }]}>
                                                <InputNumber
                                                  value={state.form.confirmedTotal}
                                                  formatter={(value) => inputFormatter(value)}
                                                  parser={(value) => parserNumber(value)}
                                                  onChange={(value) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        confirmedTotal: value,
                                                      },
                                                    });
                                                  }}
                                                />
                                              </Form.Item>
                                              <div style={{fontSize: "10px", top: "-20px", position: "relative"}}>[<span><strong>Solicitado:</strong> </span>{coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : "-"}]</div>
                                             
                                              <Form.Item name="labCount" label="Conteo Preliminar Laboratorio (Larvas/gramo)" rules={[{ required: true, message: 'Por favor agregue el Conteo Preliminar' }]}>
                                                <Input
                                                  value={state.form.labCount}
                                                  onChange={(e) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        labCount: e.target.value,
                                                      },
                                                    });
                                                  }}
                                                />
                                              </Form.Item>
                                              <div style={{fontSize: "10px", top: "-20px", position: "relative"}}>[<span><strong>Solicitado:</strong> </span>{coordination  ? coordination.requested_pl : "-"}]</div>

                                              <Form.Item name="pl" label="PL" initialValue={state.form.pl} rules={[{ required: true, message: 'Por favor agregue PL' }]}>
                                                <Select
                                                  style={{ width: '100%' }}
                                                  onChange={(v) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        pl: v,
                                                      },
                                                    });
                                                  }}
                                                >
                                                  <Option value="">Seleccione</Option>
                                                  <Option value="PL8">PL 8</Option>
                                                  <Option value="PL10">PL 10</Option>
                                                  <Option value="PL12">PL 12</Option>
                                                  <Option value="PL14">PL 14</Option>
                                                  <Option value="PL16">PL 16</Option>
                                                  <Option value="PL20">PL 20</Option>
                                                </Select>
                                              </Form.Item>
                                              <div style={{fontSize: "10px", top: "-20px", position: "relative"}}>[<span><strong>Solicitado:</strong> </span>{coordination  ? coordination.requested_pl : "-"}]</div>

                                              <Form.Item name="salinity" label="Salinidad (ppm)" rules={[{ required: true, message: 'Por favor agregue la Salinidad' }]}>
                                                <Input
                                                  value={state.form.salinity}
                                                  onChange={(e) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        salinity: e.target.value,
                                                      },
                                                    });
                                                  }}
                                                />
                                              </Form.Item>
                                              <div style={{fontSize: "10px", top: "-20px", position: "relative"}}>[<span><strong>Solicitado:</strong> </span>{coordination  ? coordination.requested_salinity + " ppm" : "-"}]</div>

                                              <Form.Item name="methodName" initialValue={state.form.methodName} label="Método de Envío" rules={[{ required: true, message: 'Por favor seleccione un Método de Envío' }]}>
                                                <Select
                                                  style={{ width: '100%' }}
                                                  onChange={(v) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        methodName: v,
                                                      },
                                                    });
                                                  }}
                                                >
                                                  <Option value="">Seleccione</Option>
                                                  <Option value="FUNDAS">Fundas</Option>
                                                  <Option value="TANQUES">Tanques Transporte</Option>
                                                </Select>
                                              </Form.Item>

                                              <Form.Item name="unitPerPack" label="Unidades por Empaque" rules={[{ required: true, message: 'Por favor agregue Unidades por Empaque' }]}>
                                                <InputNumber
                                                  value={state.form.unitPerPack}
                                                  formatter={(value) => inputFormatter(value)}
                                                  parser={(value) => parserNumber(value)}
                                                  onChange={(value) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        unitPerPack: value,
                                                      },
                                                    });
                                                  }}
                                                />
                                              </Form.Item>
                                              <div style={{fontSize: "10px", top: "-20px", position: "relative"}}>[<span><strong>Solicitado:</strong> </span>{coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : "-"}]</div>

                                              <Form.Item name="oxygenOnTheGo">
                                                <Checkbox
                                                  checked={state.form.oxygenOnTheGo}
                                                  onChange={(v) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        oxygenOnTheGo: v,
                                                      },
                                                    });
                                                  }}
                                                >
                                                  Oxígeno en Camino
                                                </Checkbox>
                                              </Form.Item>
                                              <Form.Item name="foodOnTheGo">
                                                <Checkbox
                                                  checked={state.form.foodOnTheGo}
                                                  onChange={(v) => {
                                                    setState({
                                                      ...state,
                                                      form: {
                                                        ...state.form,
                                                        foodOnTheGo: v,
                                                      },
                                                    });
                                                  }}
                                                >
                                                  Alimentación en Camino
                                                </Checkbox>
                                              </Form.Item>
                                            </Form>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </BasicFormWrapper>
                                ),
                              },
                              {
                                title: 'Resumen',
                                className: 'wizard-step-item',
                                icon: <UilCheckCircle />,
                                content:
                                  status !== 'finish' ? (
                                    <BasicFormWrapper style={{ width: '80%' }}>
                                      <div className="atbd-review-order" style={{ width: '100%' }}>
                                        <Heading as="h4">3. Resumen</Heading>
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
                                                          <span className="summary-list-title">Fecha de Siembra Solicitada:</span>
                                                          <span className="summary-list-text">{coordination ? moment(coordination.planned_date).format("DD-MM-YYYY HH:mm A") : "-"}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Salinidad Solicitada:</span>
                                                          <span className="summary-list-text">{coordination  ? coordination.requested_salinity + " ppm" : "-"}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Cantidad Solicitada :</span>
                                                          <span className="summary-list-text">{coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : "-"}</span>
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
                                                          <span className="summary-list-text">{moment(state.form.answeredDate).format("DD-MM-YYYY HH:mm A")}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Módulo :</span>
                                                          <span className="summary-list-text">{state.form.module}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Tanque :</span>
                                                          <span className="summary-list-text">{state.form.tank}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Total Tanque :</span>
                                                          <span className="summary-list-text">{`${formatNumber(state.form.tankTotal)} larvas`}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Total Confirmado :</span>
                                                          <span className="summary-list-text">{`${formatNumber(state.form.confirmedTotal)} larvas`}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Conteo Preliminar Lab :</span>
                                                          <span className="summary-list-text">{`${formatNumber(state.form.labCount)} larvas/gramo`}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">PL :</span>
                                                          <span className="summary-list-text">{state.form.pl}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Salinidad :</span>
                                                          <span className="summary-list-text">{`${state.form.salinity} ppm`}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Método de Envío :</span>
                                                          <span className="summary-list-text">{state.form.methodName}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Unidades por Empaque :</span>
                                                          <span className="summary-list-text">{`${formatNumber(state.form.unitPerPack)} larvas`}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Óxigeno en Camino :</span>
                                                          <span className="summary-list-text">{state.form.oxygenOnTheGo ? "Si" : "No"}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Comida en Camino :</span>
                                                          <span className="summary-list-text">{state.form.foodOnTheGo ? "Si" : "No"}</span>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </OrderSummary>
                                            </Cards>
                                          </div>
                                        </Cards>
                                      </div>
                                    </BasicFormWrapper>
                                  ) : (
                                    <Row justify="center" style={{ width: '100%' }}>
                                      <Col xl={21} xs={24}>
                                        <div className="checkout-successful">
                                          <Cards
                                            headless
                                            bodyStyle={{
                                              borderRadius: '20px',
                                            }}
                                          >
                                            <Cards headless>
                                              <span className="icon-success">
                                                <UilCheck />
                                              </span>
                                              <Heading as="h3">Respuesta enviada</Heading>
                                              <p>Tiene 2 días hábiles para cancelar la solicitud antes de que la camaronera envíe su desición.</p>
                                            </Cards>
                                          </Cards>
                                        </div>
                                      </Col>
                                    </Row>
                                  ),
                              },
                            ]}
                            onNext={next}
                            onPrev={prev}
                            onDone={done}
                            isfinished={isFinished}
                          />
                        </WizardTwo>
                      </WizardWrapper>
                    </Col>
                  </Row>
                </Cards>
              </WizardBlock>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CoordinationLabs;
