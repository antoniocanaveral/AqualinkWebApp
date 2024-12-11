import React, { lazy, Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Input, Select, Skeleton, message, Spin, DatePicker, TimePicker, InputNumber, Table, Typography, Avatar } from 'antd';
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
import { GoogleMaps } from '../../components/maps/google-maps';
import { ReactSVG } from 'react-svg';
import OverviewCardMesh from '../../components/cards/OverviewCardMesh';
import { StepsCoords } from '../../components/steps/stepsCoords';

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
  console.log(JSON.stringify(coordination));

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
      }))

    }
  };

  const onCancel = () => {
    const confirm = window.confirm('Estás seguro de querer rechazar esta coordinación ?');
    if (confirm) {
      dispatch(cancelLabCoord(id, (success) => {
        console.log(success);
        if (success) {
          message.success('Coordinación Rechazada.');
          navigate("/lab/coordinacion");
        } else {
          message.error('Ocurrió un error.');
        }
      }));
    }
  }

  const coordData = [
    { key: '4', label: 'Fecha de Siembra Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY HH:mm A') : '-' },
    { key: '5', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '20 ppm' },
    { key: '6', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '1.000.000 larvas' },
    { key: '7', label: 'Alcalinidad Piscina Pre Cría:', value: coordination?.coord_alkalinity || '140 ppm' },
    { key: '8', label: 'PH Piscina de Pre Cría:', value: coordination?.coord_pre_breeding_pool_ph || '5 ppm' },
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


  const labInfoData = [
    { key: '0', label: 'Módulo:', value: coordination?.lab_module || '' },
    { key: '1', label: 'Tanque:', value: coordination?.tank || '' },
    { key: '2', label: 'Código:', value: coordination?.SM_FishingNotification || '' },
    { key: '2', label: 'Origen de Nauplio:', value: coordination?.origen || '' },
    { key: '5', label: 'PL:', value: coordination?.answered_pl || '' },
    { key: '4', label: 'Conteo Preliminar Lab:', value: coordination ? `${formatNumber(coordination.lab_count)} larvas/gramo` : '280 larvas/gramo' },
    { key: '6', label: 'Salinidad:', value: coordination ? `${coordination.confirmed_salinity} ppm` : '' },
    { key: '7', label: 'Método de Envío:', value: coordination?.shipping_method || '' },
    { key: '11', label: 'Alcalinidad Tanque de Origen:', value: coordination?.alkalinity || '' },
    { key: '12', label: 'PH Tanque de Origen:', value: coordination?.pre_breeding_pool_ph || '' },
  ];

  // Valores binarios para usar checkbox
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
                                              {/* Primera fila de tres columnas de datos */}
                                              <Row gutter={25}>
                                                <Col sm={24} xs={24}>
                                                  <Suspense fallback={
                                                    <Cards headless>
                                                      <Skeleton paragraph={{ rows: 20 }} active />
                                                    </Cards>
                                                  }>
                                                    <BasicFormWrapper className="mb-25">
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
                                                              <Cards
                                                                title={`Coordinación `}
                                                                size="large"
                                                              >
                                                                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', textAlign: "center" }}>
                                                                  <Avatar style={{ backgroundColor: '#0e92e7', marginRight: '10px' }}>
                                                                    {coordination?.org_name?.[0] || 'E'}
                                                                  </Avatar>
                                                                  <Typography.Title level={5}>{coordination?.org_name || 'EcSSA Manabí'}</Typography.Title>
                                                                  {coordination?.pre_breeding_pool || 'Pre Cria 1'}
                                                                </div>
                                                                <br />
                                                                <Col xs={24} md={24} style={{ marginBottom: '18px', overflow: 'hidden' }}>
                                                                  <div style={{ height: '200px' }}>
                                                                    <GoogleMaps />
                                                                  </div>
                                                                </Col>

                                                                <Col xs={24} md={24}>
                                                                  <Table
                                                                    className='custom-table_lab'
                                                                    dataSource={coordData}
                                                                    columns={columns}
                                                                    pagination={false}
                                                                    showHeader={false}
                                                                    bordered
                                                                    rowClassName={() => 'custom-table-row'}
                                                                  />
                                                                </Col>
                                                              </Cards>
                                                            </Suspense>
                                                          </Col>

                                                    
                                                        </Row>
                                                      </div>

                                                    </BasicFormWrapper>
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
                                                {/* Primera fila de tres columnas */}
                                                <Col xs={24} sm={8}>
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
                                                  <div style={{ fontSize: "10px", marginBottom: "20px" }}>[<strong>Solicitado:</strong> {coordination ? moment(coordination.planned_date).format("DD-MM-YYYY") : "-"}]</div>
                                                </Col>
                                                <Col xs={24} sm={8}>
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
                                                  <div style={{ fontSize: "10px", marginBottom: "20px" }}>[<strong>Solicitado:</strong> {coordination ? moment(coordination.planned_date).format("HH:mm A") : "-"}]</div>
                                                </Col>
                                                <Col xs={24} sm={8}>
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
                                              </Row>

                                              <Row gutter={16}>
                                                {/* Segunda fila de tres columnas */}
                                                <Col xs={24} sm={8}>
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
                                                <Col xs={24} sm={8}>
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
                                                <Col xs={24} sm={8}>
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
                                              </Row>

                                              <Row gutter={16}>
                                                {/* Tercera fila de tres columnas */}
                                                <Col xs={24} sm={8}>
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
                                                </Col>
                                                <Col xs={24} sm={8}>
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
                                                </Col>
                                                <Col xs={24} sm={8}>
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
                                                </Col>
                                              </Row>

                                              {/* Cuarta fila con los checkboxes */}
                                              <Row gutter={16}>
                                                <Col xs={24} sm={12}>
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
                                                      <Option value="FUNDAS">Fundas</Option>
                                                      <Option value="TANQUES">Tanques Transporte</Option>
                                                    </Select>
                                                  </Form.Item>
                                                </Col>
                                                <Col xs={24} sm={12}>
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
                                              </Row>

                                              <Row gutter={16}>
                                                {/* Quinta fila para checkboxes */}
                                                <Col xs={24} sm={12}>
                                                  <Form.Item name="oxygenOnTheGo">
                                                    <Checkbox
                                                      checked={state.form.oxygenOnTheGo}
                                                      onChange={(v) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            oxygenOnTheGo: v.target.checked,
                                                          },
                                                        });
                                                      }}
                                                    >
                                                      Oxígeno en Camino
                                                    </Checkbox>
                                                  </Form.Item>
                                                </Col>
                                                <Col xs={24} sm={12}>
                                                  <Form.Item name="foodOnTheGo">
                                                    <Checkbox
                                                      checked={state.form.foodOnTheGo}
                                                      onChange={(v) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            foodOnTheGo: v.target.checked,
                                                          },
                                                        });
                                                      }}
                                                    >
                                                      Alimentación en Camino
                                                    </Checkbox>
                                                  </Form.Item>
                                                </Col>
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
                                                        <span className="summary-list-text">{coordination ? coordination.requested_salinity + " ppm" : "-"}</span>
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
