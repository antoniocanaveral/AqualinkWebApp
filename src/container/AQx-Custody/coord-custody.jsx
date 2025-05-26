import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Select, Skeleton, message, Spin, DatePicker, TimePicker, Table, Typography, Avatar } from 'antd';
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
import { BasicFormWrapper, WizardWrapper, OrderSummary, WizardTwo, Main, WizardBlock } from '../styled';
import { cancelCustodyCoord, loadCustodyCoord, submitCustodyCoord } from '../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { StepsCoords } from '../../components/steps/stepsCoords';
import { formatNumber } from '../../utility/utility';
import CustomTable from '../AQx-Labs/CustomTable';

const { Option } = Select;

function CoordinationCustody() {
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
      answeredDate: coordination ? (coordination.answered_date ? coordination.answered_date : coordination.planned_date) : moment()
    }
  });

  const { status, isFinished, current } = state;

  useEffect(() => {
    dispatch(loadCustodyCoord(id, () => { }));
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
        })
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
    const confirm = window.confirm('Confirma que desea enviar su respuesta a esta coordinación de pesca?');
    if (confirm) {
      dispatch(submitCustodyCoord(id, state.form, (success) => {
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
      }))

    }
  };

  const onCancel = () => {
    const confirm = window.confirm('Estás seguro de querer rechazar esta coordinación ?');
    if (confirm) {
      dispatch(cancelCustodyCoord(id, (success) => {
        console.log(success);
        if (success) {
          message.success('Coordinación Rechazada.');
          navigate("/custody/coordinacion");
        } else {
          message.error('Ocurrió un error.');
        }
      }));
    }
  }

  const coordData = [
    { key: '1', label: 'Camaronera:', value: coordination ? coordination.org_name : '-' },
    { key: '2', label: 'Piscina:', value: coordination ? coordination.warehouse_name : '-' },
    { key: '3', label: 'Dirección:', value: coordination ? `${coordination.City} ${coordination.Address1}, ${coordination.Address2}` : '-' },
    { key: '4', label: 'Notificación:', value: coordination ? coordination.SM_FishingNotification : '-' },
    { key: '5', label: 'Fecha de Pesca Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY hh:mm A') : '-' },
    { key: '6', label: 'Tipo de Pesca:', value: coordination ? coordination.fishing_type : '-' },
    { key: '7', label: 'Tipo de Contenedor:', value: coordination ? coordination.container_type : '-' },
    { key: '8', label: 'Volumen de Pesca:', value: coordination ? `${coordination.fishing_volume} lbs` : '-' },
    { key: '9', label: 'Clasificación:', value: coordination ? coordination.Classification : '-' },
    { key: '10', label: 'Textura:', value: coordination ? coordination.texture : '-' },
  ];


  const columns = [
    {
      title: '',
      dataIndex: 'label',
      key: 'label',
      width: '55%',
      render: (text) => (
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
    { title: '', dataIndex: 'value', key: 'value', width: '45%' },
  ];


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
                              icon: <UilUsersAlt />,
                              content: (
                                <BasicFormWrapper style={{ width: '100%' }}>
                                  <Row>
                                    <Col sm={22} xs={24}>
                                      <div className="create-account-form" style={{ marginTop: "10px" }}>
                                        <Form form={form} name="account" style={{ marginTop: '-50px' }} layout="vertical">
                                          <Heading as="h4">1. Datos de la Coordinación {loading && <Spin />}</Heading>

                                          {/* Primera fila de tres columnas de datos */}
                                          <Row gutter={25}>
                                            <Col sm={24} xs={24}>
                                              <Suspense fallback={
                                                <Cards headless>
                                                  <Skeleton paragraph={{ rows: 20 }} active />
                                                </Cards>
                                              }>
                                                <div >
                                                  <Row gutter={25}>
                                                    <Col xl={24} xs={24}>
                                                      <Suspense
                                                        fallback={
                                                          <Cards headless>
                                                            <Skeleton active />
                                                          </Cards>
                                                        }
                                                      >

                                                        <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: "center" }}>
                                                          <Avatar style={{ backgroundColor: '#0e92e7', marginRight: '10px' }}>
                                                            {coordination?.org_name?.[0] || 'E'}
                                                          </Avatar>
                                                          <Typography.Title level={5}>{coordination?.org_name || ''}</Typography.Title>
                                                        </div>
                                                        <br />

                                                        <Col xs={24} md={24}>
                                                            <CustomTable data={coordData} pairsPerRow={2} />
                                                        </Col>
                                                      </Suspense>
                                                    </Col>
                                                  </Row>
                                                </div>

                                              </Suspense>
                                            </Col>
                                          </Row>
                                          <Row gutter={16}>

                                            <Col xs={24} sm={18}></Col> {/* Espacio en blanco ocupando tres cuartos de ancho */}
                                            <Col xs={24} sm={6} style={{ textAlign: 'right', marginTop: '20px' }}>
                                              <Button size="default" type="danger" onClick={() => onCancel()}>
                                                Rechazar la Coordinación
                                              </Button>
                                            </Col>
                                          </Row>
                                        </Form>
                                      </div>
                                    </Col>
                                  </Row>
                                </BasicFormWrapper>

                              ),
                            },
                            {
                              title: 'Información de Empacadora',
                              className: 'wizard-step-item',
                              icon: <UilFileCheckAlt />,
                              content: (
                                <BasicFormWrapper className="basic-form-inner">
                                  <div className="atbd-form-checkout">
                                    <Row justify="center">
                                      <Col sm={22} xs={24}>
                                        <div className="shipping-form">
                                          <Heading as="h4">2. Información de Empacadora</Heading>
                                          <Form form={form} name="address">
                                            <Form.Item name="responsed_date" label="Fecha Propuesta" initialValue={state.form.answeredDate ? moment(state.form.answeredDate) : moment()} rules={[{ required: true, message: 'Por favor seleccione una Fecha' }]}>
                                              <DatePicker value={state.form.answeredDate} onChange={(value) => {
                                                let current = '';
                                                if (value) {
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
                                              }} />
                                            </Form.Item>
                                            <Form.Item name="response-time" label="Hora Propuesta" initialValue={moment(state.form.answeredDate ? moment(state.form.answeredDate).format("HH:mm") : "00:00", 'HH:mm')} rules={[{ required: true, message: 'Por favor seleccione una Hora' }]}>
                                              <TimePicker value={state.form.answeredDate} onChange={(value) => {
                                                let current = moment(state.form.answeredDate);
                                                current.set({ hour: value.hour(), minute: value.minute(), second: 0, millisecond: 0 });

                                                setState({
                                                  ...state,
                                                  form: {
                                                    ...state.form,
                                                    answeredDate: current,
                                                  },
                                                });
                                              }} />
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
                                                Coordinación Solicitada
                                              </Heading>
                                            </div>
                                            <article className="atbd-review-order__shippingInfo">
                                              <OrderSummary>
                                                <Table
                                                  className='custom-table_lab'
                                                  dataSource={coordData}
                                                  columns={columns}
                                                  pagination={false}
                                                  showHeader={false}
                                                  bordered
                                                  rowClassName={() => 'custom-table-row'}
                                                />
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
                                                    <span className="summary-list-title">Fecha y Hora propuesta:</span>
                                                    <span className="summary-list-text">{moment(state.form.answeredDate).format("DD-MM-YYYY hh:mm A")}</span>
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
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CoordinationCustody;