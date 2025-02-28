import React, { lazy, Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Input, Select, Skeleton, message, Spin, DatePicker, TimePicker, InputNumber, Avatar, Typography } from 'antd';
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
import { useNavigate } from 'react-router-dom';
import { formatNumber, inputFormatter, parserNumber } from '../../utility/utility';
import { StepsCoords } from '../../components/steps/stepsCoords';
import CustomTable from './CustomTable';

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
      oxygenOnTheGo: coordination?.SM_OxygenOnTheGo ?? false,
      foodOnTheGo: coordination?.SM_FoodOnTheGo ?? false,
      unitPerPack: coordination ? coordination.unitPerPack : ""
    }
  });

  const { status, isFinished, current } = state;

  useEffect(() => {
    dispatch(loadLabCoord(id, () => { }));
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
      if (current < 2) {
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
        });
      } else {
        reject();
      }
    });
  };

  const prev = () => {
    return new Promise((resolve, reject) => {
      if (current > 0) {
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
        if (success) {
          setState({
            ...state,
            status: 'finish',
            isFinished: true,
            current: 0,
          });
        } else {
          message.error('Ocurrió al enviar la coordinación.');
        }
      }));
    }
  };

  const coordData = [
    { key: '1', label: 'Camaronera:', value: coordination ? coordination.org_name : '-' },
    { key: '2', label: 'Piscina:', value: coordination ? coordination.pre_breeding_pool : '-' },
    { key: '3', label: 'Dirección:', value: coordination ? `${coordination.City} ${coordination.Address1}, ${coordination.Address2}` : '-' },
    { key: '4', label: 'Notificación:', value: coordination ? coordination.SM_FishingNotification : '-' },
    { key: '5', label: 'Fecha de Siembra Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY / HH:mm A') : '-' },
    { key: '6', label: 'PL Solicitado:', value: coordination ? formatNumber(coordination.requested_pl) : '-' },
    { key: '7', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '-' },
    { key: '8', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '-' },
    { key: '9', label: 'Días de Maduración del Agua:', value: coordination ? `${coordination.water_ripening_days} días` : '-' }
  ];

  const coordDataSummary = [
    { key: '1', label: 'Camaronera:', value: coordination ? coordination.org_name : '-' },
    { key: '2', label: 'Piscina:', value: coordination ? coordination.pre_breeding_pool : '-' },
    { key: '4', label: 'Notificación:', value: coordination ? coordination.SM_FishingNotification : '-' },
    { key: '5', label: 'Fecha de Siembra Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY / HH:mm A') : '-' },
    { key: '7', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '-' },
    { key: '8', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '-' }
  ];

  const sendSummaryData = [
    { key: '1', label: 'Fecha - Hora:', value: state.form.answeredDate ? moment(state.form.answeredDate).format('DD-MM-YYYY / HH:mm A') : '-' },
    { key: '2', label: 'Módulo:', value: state.form.module || '-' },
    { key: '3', label: 'Tanque:', value: state.form.tank || '-' },
    { key: '4', label: 'Total Tanque:', value: state.form.tankTotal ? `${formatNumber(state.form.tankTotal)} larvas` : '-' },
    { key: '5', label: 'Total Confirmado:', value: state.form.confirmedTotal ? `${formatNumber(state.form.confirmedTotal)} larvas` : '-' },
    { key: '6', label: 'Conteo Preliminar Lab:', value: state.form.labCount ? `${formatNumber(state.form.labCount)} larvas/gramo` : '-' },
    { key: '7', label: 'PL:', value: state.form.pl || '-' },
    { key: '8', label: 'Salinidad:', value: state.form.salinity ? `${state.form.salinity} ppm` : '-' },
    { key: '9', label: 'Método de Envío:', value: state.form.methodName || '-' },
    { key: '10', label: 'Unidades por Empaque:', value: state.form.unitPerPack ? `${formatNumber(state.form.unitPerPack)} larvas` : '-' },
    { key: '11', label: 'Óxigeno en Camino:', value: state.form.oxygenOnTheGo ? 'Sí' : 'No' },
    { key: '12', label: 'Comida en Camino:', value: state.form.foodOnTheGo ? 'Sí' : 'No' }
  ];


  useEffect(() => {
    const { confirmedTotal, unitPerPack } = state.form;
    if (confirmedTotal != null && unitPerPack != null && unitPerPack > 0) {
      const newTotal = Math.ceil(confirmedTotal / unitPerPack);
      setState((prevState) => ({
        ...prevState,
        form: {
          ...prevState.form,
          total: newTotal,
        },
      }));
      form.setFieldsValue({
        total: newTotal,
      });
    }
  }, [state.form.confirmedTotal, state.form.unitPerPack]);
  

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title={`Responder Coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton paragraph={{ rows: 20 }} active /></Cards>}>
              <WizardBlock>
                <Cards headless>
                  <Row justify="center">
                    <Col xxl={20} xs={24}>
                      <WizardWrapper className="ninjadash-wizard-page">
                        <WizardTwo>
                          <StepsCoords
                            isswitch
                            current={current}
                            status={status}
                            steps={[
                              {
                                title: 'Coordinación',
                                className: 'wizard-step-item',
                                icon: <UilUsersAlt className="steps-icon" />,
                                content: (
                                  <BasicFormWrapper style={{ width: '100%' }}>
                                    <div className="atbd-form-checkout">
                                      <Row>
                                        <Col sm={22} xs={24}>
                                          <div className="create-account-form" style={{ marginTop: "-30px" }}>
                                            <Heading as="h4">1. Datos de la Coordinación {loading && <Spin />}</Heading>
                                            <Form form={form} name="account" style={{ marginTop: '-10px' }} layout="vertical">
                                              <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: "center" }}>
                                                <Avatar style={{ backgroundColor: '#0e92e7', marginRight: '10px' }}>
                                                  {coordination?.org_name?.[0] || 'E'}
                                                </Avatar>
                                                <Typography.Title level={5}>{coordination?.org_name || ''}</Typography.Title>
                                              </div>
                                              <CustomTable data={coordData} pairsPerRow={3} />
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
                                icon: <UilFileCheckAlt className="steps-icon" />,
                                content: (
                                  <BasicFormWrapper style={{ width: '100%' }}>
                                    <div className="atbd-form-checkout">
                                      <Row>
                                        <Col sm={22} xs={24}>
                                          <div className="shipping-form" style={{ marginTop: "-30px" }}>
                                            <Heading as="h4">2. Información de Laboratorio</Heading>
                                            <Form form={form} name="address" layout="vertical" style={{ marginTop: '-10px' }}>
                                              <Row gutter={16}>
                                                <Col xs={24} sm={6}>
                                                  <Form.Item name="responsed_date" label="Fecha Propuesta" initialValue={state.form.answeredDate ? moment(state.form.answeredDate) : moment()} rules={[{ required: true, message: 'Por favor seleccione una Fecha' }]}>
                                                    <DatePicker value={state.form.answeredDate} onChange={(value) => {
                                                      let currentDate = '';
                                                      if (value) {
                                                        currentDate = moment(state.form.answeredDate);
                                                        currentDate.set({ year: value.year(), month: value.month(), date: value.date() });
                                                      }
                                                      setState({
                                                        ...state,
                                                        form: {
                                                          ...state.form,
                                                          answeredDate: currentDate,
                                                        },
                                                      });
                                                    }} />
                                                  </Form.Item>
                                                  <div style={{ fontSize: "10px", marginBottom: "20px" }}>[<strong>Solicitado:</strong> {coordination ? moment(coordination.planned_date).format("DD-MM-YYYY") : "-"}]</div>
                                                </Col>
                                                <Col xs={24} sm={6}>
                                                  <Form.Item name="response-time" label="Hora Propuesta" initialValue={moment(state.form.answeredDate ? moment(state.form.answeredDate).format("HH:mm") : "00:00", 'HH:mm')} rules={[{ required: true, message: 'Por favor seleccione una Hora' }]}>
                                                    <TimePicker value={state.form.answeredDate} onChange={(value) => {
                                                      let currentTime = moment(state.form.answeredDate);
                                                      currentTime.set({ hour: value.hour(), minute: value.minute(), second: 0, millisecond: 0 });
                                                      setState({
                                                        ...state,
                                                        form: {
                                                          ...state.form,
                                                          answeredDate: currentTime,
                                                        },
                                                      });
                                                    }} />
                                                  </Form.Item>
                                                  <div style={{ fontSize: "10px", marginBottom: "20px" }}>[<strong>Solicitado:</strong> {coordination ? moment(coordination.planned_date).format("HH:mm A") : "-"}]</div>
                                                </Col>
                                                <Col xs={24} sm={6}>
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
                                                </Col>
                                                <Col xs={24} sm={6}>
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
                                                </Col>
                                              </Row>
                                              <Row gutter={16}>
                                                <Col xs={24} sm={6}>
                                                  <Form.Item name="tankTotal" label="Total Tanque (Larvas)" rules={[{ required: true, message: 'Por favor agregue el Total Tanque' }]}>
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
                                                  <div style={{ fontSize: "10px", marginBottom: "20px" }}>[<strong>Solicitado:</strong> {coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : "-"}]</div>
                                                </Col>
                                                <Col xs={24} sm={6}>
                                                  <Form.Item name="confirmedTotal" label="Total Confirmado (Larvas)" rules={[{ required: true, message: 'Por favor agregue el Total Confirmado' }]}>
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
                                                  <div style={{ fontSize: "10px", marginBottom: "20px" }}>[<strong>Solicitado:</strong> {coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : "-"}]</div>
                                                </Col>
                                                <Col xs={24} sm={6}>
                                                  <Form.Item name="labCount" label="Conteo Preliminar Lab (pl/gr)" rules={[{ required: true, message: 'Por favor agregue el Conteo Preliminar' }]}>
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
                                                </Col>
                                                <Col xs={24} sm={6}>
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
                                                  <div style={{ fontSize: "10px", marginBottom: "20px" }}>[<strong>Solicitado:</strong> {coordination ? `${formatNumber(coordination.requested_salinity)} ppm` : "-"}]</div>

                                                </Col>
                                              </Row>
                                              <Row gutter={16}>

                                                <Col xs={24} sm={6}>
                                                  <Form.Item name="methodName" initialValue={state.form.methodName} label="Método de Envío" rules={[{ required: true, message: 'Por favor seleccione un Método de Envío' }]}>
                                                    <Select
                                                      style={{ width: '100%' }}
                                                      onChange={(v) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            methodName: v,
                                                            oxygenOnTheGo: v === "FUNDAS" ? false : state.form.oxygenOnTheGo,
                                                            foodOnTheGo: v === "FUNDAS" ? false : state.form.foodOnTheGo,
                                                          },
                                                        });
                                                      }}
                                                    >
                                                      <Option value="FUNDAS">Fundas</Option>
                                                      <Option value="TANQUES">Tanques Transporte</Option>
                                                    </Select>
                                                  </Form.Item>
                                                </Col>

                                                <Col xs={24} sm={6}>
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
                                                </Col>

                                                <Col xs={24} sm={6}>
                                                  <Form.Item name="total" label="Total de Fundas/Tanque">
                                                    <InputNumber
                                                      value={state.form.total}
                                                      formatter={(value) => inputFormatter(value)}
                                                      parser={(value) => parserNumber(value)}
                                                      disabled 
                                                    />
                                                  </Form.Item>
                                                </Col>

                                                {state.form.methodName === "TANQUES" && (
                                                  <Col xs={24} sm={6}>
                                                    <Form.Item name="oxygenOnTheGo">
                                                      <Checkbox
                                                        checked={state.form.oxygenOnTheGo}
                                                        onChange={(value) => {
                                                          setState({
                                                            ...state,
                                                            form: {
                                                              ...state.form,
                                                              oxygenOnTheGo: value,
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
                                                        onChange={(value) => {
                                                          setState({
                                                            ...state,
                                                            form: {
                                                              ...state.form,
                                                              foodOnTheGo: value,
                                                            },
                                                          });
                                                        }}
                                                      >
                                                        Alimentación en Camino
                                                      </Checkbox>
                                                    </Form.Item>
                                                  </Col>
                                                )}
                                              </Row>
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
                                icon: <UilCheckCircle className="steps-icon" />,
                                content:
                                  status !== 'finish' ? (
                                    <BasicFormWrapper style={{ width: '100%' }}>
                                      <Heading as="h4">3. Resumen</Heading>
                                      <Cards bodyStyle={{ borderRadius: 10 }} headless>
                                        <Cards headless>
                                          <div className="atbd-review-order__shippingTitle">
                                            <Heading as="h5">Coordinación Solicitada</Heading>
                                          </div>
                                          <CustomTable data={coordDataSummary} pairsPerRow={3} />
                                        </Cards>
                                        <Cards headless>
                                          <div>
                                            <Heading as="h5">Información del Laboratorio</Heading>
                                          </div>
                                          <CustomTable data={sendSummaryData} pairsPerRow={3} />
                                        </Cards>
                                      </Cards>
                                    </BasicFormWrapper>
                                  ) : (
                                    <Row justify="center" style={{ width: '100%' }}>
                                      <Col xl={21} xs={24}>
                                        <div className="checkout-successful">
                                          <Cards headless bodyStyle={{ borderRadius: '20px' }}>
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
