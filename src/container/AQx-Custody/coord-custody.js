import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton, message, DatePicker, TimePicker, Table, Typography, Avatar, InputNumber, Select } from 'antd';
import { Button } from '../../components/buttons/buttons';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import UilFileCheckAlt from '@iconscout/react-unicons/icons/uil-file-check-alt';
import UilCheckCircle from '@iconscout/react-unicons/icons/uil-check-circle';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { OrderSummary, WizardTwo, Main } from '../styled';
import { cancelCustodyCoord, loadCustodyCoord, submitCustodyCoord } from '../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { StepsCoords } from '../../components/steps/stepsCoords';

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

  const handleBack = () => {
    navigate(-1);
  };

  let { id } = useParams();
  const coordination = useSelector((state) => state.custody.coordination);

  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
    form: {
      answeredDate: coordination ? (coordination.answered_date ? coordination.answered_date : coordination.planned_date) : moment(),
      // Inicializar los nuevos campos con valores predeterminados
      volumenPesca: 0,
      clasificacionPreCosecha: 0,
      texturaProyectada: 0,
      tipoPesca: 'RALEO',
      metodoPesca: 'Manual',
    }
  });

  const { status, isFinished, current, form: formState } = state;

  // Determinar si la coordinación está aceptada
  const isAccepted = coordination?.status !== "Aceptado";

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
        form.validateFields().then((values) => {
          // Actualizar el estado con los valores del formulario
          setState({
            ...state,
            status: 'process',
            current: current + 1,
            form: {
              ...state.form,
              ...values,
            },
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
          message.error('Ocurrió un error al enviar la coordinación.');
        }
      }))
    }
  };

  const onCancel = () => {
    const confirm = window.confirm('¿Estás seguro de querer rechazar esta coordinación?');
    if (confirm) {
      dispatch(cancelCustodyCoord(id, (success) => {
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
    {
      key: '1',
      title: 'Camaronera',
      value: coordination ? coordination.org_name : '-',
    },
    {
      key: '2',
      title: 'Piscina',
      value: coordination ? coordination.pre_breeding_pool : '-',
    },
    {
      key: '3',
      title: 'Dirección',
      value: coordination ? `${coordination.City} ${coordination.Address1}, ${coordination.Address2}` : '-',
    },
    {
      key: '4',
      title: 'Notificación',
      value: coordination ? coordination.SM_FishingNotification : '-',
    },
    {
      key: '5',
      title: 'Fecha de Pesca Solicitada',
      value: coordination ? moment(coordination.planned_date).format("DD-MM-YYYY HH:mm A") : '-',
    },
    {
      key: '6',
      title: 'Tipo de Pesca',
      value: coordination ? coordination.fishing_type : '-',
    },
    {
      key: '7',
      title: 'Tipo de Contenedor',
      value: coordination ? coordination.container_type : '-',
    },
    {
      key: '8',
      title: 'Volumen de Pesca',
      value: coordination ? `${coordination.fishing_volume} lbs` : '-',
    },
    {
      key: '9',
      title: 'Clasificación',
      value: coordination ? coordination.Classification : '-',
    },
    {
      key: '10',
      title: 'Textura',
      value: coordination ? coordination.texture : '-',
    },
  ];




  const columns = [
    {
      title: 'Campo',
      dataIndex: 'title',
      key: 'title',
      width: '40%',
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
      width: '60%',
    },
  ];



  const summaryData = [
    {
      key: '1',
      title: 'Volumen de Pesca',
      value: `${formState.volumenPesca} lbs`,
    },
    {
      key: '2',
      title: 'Clasificación Pre Cosecha',
      value: formState.clasificacionPreCosecha,
    },
    {
      key: '3',
      title: 'Textura Proyectada',
      value: formState.texturaProyectada,
    },
    {
      key: '4',
      title: 'Tipo de Pesca',
      value: formState.tipoPesca,
    },
    {
      key: '5',
      title: 'Método de Pesca',
      value: formState.metodoPesca,
    },
  ];

  return (
    <>
      <PageHeader
        onBack={handleBack}
        title={`Responder Coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`}
        routes={PageRoutes}
      />
      <Main>
        <Row gutter={10}>
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
                              <Row gutter={25}>
                                <Col xl={22} xs={24}>
                                  <Suspense
                                    fallback={
                                      <Cards headless>
                                        <Skeleton active />
                                      </Cards>
                                    }
                                  >
                                    <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: "center" }}>
                                      <Avatar style={{ backgroundColor: '#0e92e7', marginRight: '10px' }}>
                                        {coordination?.org_name?.[0] || ''}
                                      </Avatar>
                                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Typography.Title level={5}>{coordination?.org_name || ''}</Typography.Title>
                                      </div>
                                    </div>
                                    <Table
                                      className='custom-table_lab'
                                      dataSource={coordData}
                                      columns={columns}
                                      pagination={false}
                                      showHeader={false}
                                      bordered
                                      rowClassName={() => 'custom-table-row'}
                                    />
                                  </Suspense>
                                </Col>
                                <Col xs={24} xl={2}>
                                  {/* Botón para rechazar la coordinación */}
                                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                    <Button size="default" type="danger" onClick={onCancel}>
                                      Rechazar la Coordinación
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
                            ),
                          },
                          {
                            title: 'Información de Empacadora',
                            className: 'wizard-step-item',
                            icon: <UilFileCheckAlt />,
                            content: (
                              <Row gutter={25}>
                                <div className="atbd-form-checkout">
                                  {isAccepted ? (
                                    <div className="additional-form" style={{ marginTop: '20px' }}>
                                      <Typography.Title level={5}>Información Adicional</Typography.Title>
                                      <Form form={form} layout="horizontal">

                                        <Form.Item
                                          name="volumenPesca"
                                          label="Volumen de Pesca (lbs)"
                                          rules={[{ required: true, message: 'Por favor ingrese el Volumen de Pesca' }]}
                                        >
                                          <InputNumber min={0} style={{ width: '100%' }} />
                                        </Form.Item>
                                        <Form.Item
                                          name="clasificacionPreCosecha"
                                          label="Clasificación Pre Cosecha"
                                          rules={[{ required: true, message: 'Por favor ingrese la Clasificación Pre Cosecha' }]}
                                        >
                                          <InputNumber min={0} style={{ width: '100%' }} />
                                        </Form.Item>
                                        <Form.Item
                                          name="texturaProyectada"
                                          label="Textura Proyectada"
                                          rules={[{ required: true, message: 'Por favor ingrese la Textura Proyectada' }]}
                                        >
                                          <InputNumber min={0} style={{ width: '100%' }} />
                                        </Form.Item>
                                        <Form.Item
                                          name="tipoPesca"
                                          label="Tipo de Pesca"
                                          rules={[{ required: true, message: 'Por favor seleccione el Tipo de Pesca' }]}
                                        >
                                          <Select placeholder="Seleccione Tipo de Pesca">
                                            <Option value="RALEO">RALEO</Option>
                                            <Option value="COSECHA">COSECHA</Option>
                                          </Select>
                                        </Form.Item>
                                        <Form.Item
                                          name="metodoPesca"
                                          label="Método de Pesca"
                                          rules={[{ required: true, message: 'Por favor seleccione el Método de Pesca' }]}
                                        >
                                          <Select placeholder="Seleccione Método de Pesca">
                                            <Option value="Manual">Manual</Option>
                                            <Option value="Automatica">Automática</Option>
                                          </Select>
                                        </Form.Item>
                                      </Form>
                                    </div>
                                  ) : (<Col sm={22} xs={24}>
                                    <div className="shipping-form" style={{ marginTop: '20px' }}>
                                      <Typography.Title level={5}>2.- Fecha y Hora Propuesta</Typography.Title>
                                      <Form form={form} name="address">
                                        <Form.Item
                                          name="answeredDate"
                                          label="Fecha Propuesta"
                                          initialValue={state.form.answeredDate ? moment(state.form.answeredDate) : moment()}
                                          rules={[{ required: true, message: 'Por favor seleccione una Fecha' }]}
                                        >
                                          <DatePicker
                                            value={state.form.answeredDate}
                                            onChange={(value) => {
                                              let currentDate = value ? value.clone().set({
                                                hour: state.form.answeredDate.hour(),
                                                minute: state.form.answeredDate.minute(),
                                                second: 0,
                                                millisecond: 0
                                              }) : moment();
                                              setState({
                                                ...state,
                                                form: {
                                                  ...state.form,
                                                  answeredDate: currentDate,
                                                },
                                              });
                                            }}
                                          />
                                        </Form.Item>
                                        <Form.Item
                                          name="responseTime"
                                          label="Hora Propuesta"
                                          initialValue={moment(state.form.answeredDate ? moment(state.form.answeredDate).format("HH:mm") : "00:00", 'HH:mm')}
                                          rules={[{ required: true, message: 'Por favor seleccione una Hora' }]}
                                        >
                                          <TimePicker
                                            value={state.form.answeredDate}
                                            onChange={(value) => {
                                              let currentDate = moment(state.form.answeredDate);
                                              currentDate.set({
                                                hour: value.hour(),
                                                minute: value.minute(),
                                                second: 0,
                                                millisecond: 0
                                              });

                                              setState({
                                                ...state,
                                                form: {
                                                  ...state.form,
                                                  answeredDate: currentDate,
                                                },
                                              });
                                            }}
                                          />
                                        </Form.Item>
                                      </Form>
                                    </div>
                                  </Col>


                                  )}
                                </div>
                              </Row>
                            ),
                          },
                          {
                            title: 'Resumen',
                            className: 'wizard-step-item',
                            icon: <UilCheckCircle />,
                            content:
                              status !== 'finish' ? (
                                <Row gutter={25}>
                                  <Col xl={14} xs={24}>
                                    <Suspense
                                      fallback={
                                        <Cards headless>
                                          <Skeleton active />
                                        </Cards>
                                      }
                                    >
                                      <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: "center" }}>
                                        <Avatar style={{ backgroundColor: '#0e92e7', marginRight: '10px' }}>
                                          {coordination?.org_name?.[0] || ''}
                                        </Avatar>
                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                          <Typography.Title level={5}>{coordination?.org_name || ''}</Typography.Title>
                                        </div>
                                      </div>
                                      <Table
                                        className='custom-table_lab'
                                        dataSource={coordData}
                                        columns={columns}
                                        pagination={false}
                                        showHeader={false}
                                        bordered
                                        rowClassName={() => 'custom-table-row'}
                                      />
                                    </Suspense>
                                  </Col>
                                  <Col xl={10} xs={24} >
                                    <Cards headless>
                                      <div className="atbd-review-order__single">
                                        <Cards headless>
                                          <Typography.Title level={5}>Resumen de la Coordinación</Typography.Title>
                                          <OrderSummary>
                                            <div className="invoice-summary-inner">
                                              <ul className="summary-list">
                                                <li>
                                                  <span className="summary-list-title">Fecha y Hora propuesta:</span>
                                                  <span className="summary-list-text">{moment(state.form.answeredDate).format("DD-MM-YYYY hh:mm A")}</span>
                                                </li>
                                                {/* Mostrar campos adicionales si la coordinación está aceptada */}
                                                {isAccepted && (
                                                  <>
                                                    <Table
                                                      dataSource={summaryData}
                                                      columns={columns}
                                                      pagination={false}
                                                      showHeader={false}
                                                      bordered
                                                      rowClassName={() => 'custom-table-row'}
                                                       className='custom-table_lab'
                                                    />
                                                  </>
                                                )}
                                              </ul>
                                            </div>
                                          </OrderSummary>
                                        </Cards>
                                      </div>
                                    </Cards>
                                  </Col>
                                </Row>
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
