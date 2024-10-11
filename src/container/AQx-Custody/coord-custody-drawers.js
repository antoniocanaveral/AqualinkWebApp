import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton, message, Spin, Badge, Input, InputNumber } from 'antd';
import { Button } from '../../components/buttons/buttons';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import UilFileCheckAlt from '@iconscout/react-unicons/icons/uil-file-check-alt';
import UilCheckCircle from '@iconscout/react-unicons/icons/uil-check-circle';
import { Steps } from '../../components/steps/steps';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { BasicFormWrapper, WizardWrapper, OrderSummary, WizardTwo, Main, WizardBlock, GridStyleGutter } from '../styled';
import { loadCustodyCoord, loadDrawerByCoord, loadDrawerStampByCoord, submitDrawer, submitDrawerStamp, deleteDrawerStamp, sendDrawerInfo } from '../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import {useNavigate } from 'react-router-dom';
import DataTable from '../../components/table/DataTable';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import Alert from '../../components/alerts/alerts';
import UilLayers from '@iconscout/react-unicons/icons/uil-layers';


function CoordinationCustodyDrawers() {
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
  const drawer = useSelector((state) => state.custody.drawer);
  const drawerStamps = useSelector((state) => state.custody.drawerStamps);
  const fishingId = useSelector((state) => state.custody.fishingId);
  
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
    showForm: false,
    suggestedDrawerCount: 0,
    form: {
      sealId: "",
      seal: "",
      van: "",
      drawers: 0
    },
    drawerForm: {
      drawerId: "",
      drawerCount: "",
      drawerIce: "",
      drawerMetabisulfito: "",
    }
  });

  const { status, isFinished, current } = state;

  console.log(`current ${current}`);

  useEffect(() => {
    dispatch(loadCustodyCoord(id, (isSuccess, coord) => {
      dispatch(loadDrawerStampByCoord(id, (isSuccess, stamps) => {
        let suggestedDrawerCount = Number(parseFloat(coord.fishing_volume) / 45).toFixed(0);
        setState({
          ... state,
          suggestedDrawerCount: suggestedDrawerCount
        });
      }));
    }));
    dispatch(loadDrawerByCoord(id, (isSuccess, drawerInfo) => {
      setState({
        ...state,
        current: 0,
        drawerForm: {
          drawerId: drawerInfo ? drawerInfo.id : "",
          drawerIce: drawerInfo ? drawerInfo.SM_Ice : "",
          drawerMetabisulfito: drawerInfo ? drawerInfo.SM_Metabisulfito : ""
        }
      })
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

  const binesTableDataScource = [];
  const binesDataTableColumnMain = [
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

  const binesDataTableColumnEdit = [
     ... binesDataTableColumnMain,
    {
      title: 'Acciones',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  if (drawerStamps && drawerStamps.length > 0) {
    drawerStamps.map((item, index) => {
      return binesTableDataScource.push({
        van: <span>{item.SM_Van}</span>,
        stamp: <span>{item.SM_Stamp}</span>,
        drawers: <span>{item.SM_DrawersCount}</span>,
        action: (
          <div className="table-actions" style={{minWidth:"50px !important", textAlign: "center"}}>
            <Link className="edit" title='Editar' onClick={() => {
              setState({
                ...state,
                showForm: true,
                form: {
                  ...state.form,
                  sealId: item.id,
                  seal: item.SM_Stamp,
                  van: item.SM_Van,
                  drawers: item.SM_DrawersCount
                },
              });
            }}>
              <UilEdit /> 
            </Link>
            <Link className="edit" title='Eliminar' onClick={() => {
              const confirm = window.confirm('Seguro deseas eliminar el Sello ? ');
              if (confirm) {
                dispatch(deleteDrawerStamp(item.id, (isSuccess, msg) => {
                  if(isSuccess) {
                    message.success("El Sello se eliminó con exito!");
                    dispatch(loadDrawerStampByCoord(id, () => {
                      cancelDrawerStampForm();
                    }));
                  } else {
                    message.error(msg);
                  }
                }));
              }
            }}>
              <UilTrash /> 
            </Link>
          </div>
        ),
      });
    });
  }

  const next = () => {
    console.log(`current ${current}`);
    return new Promise((resolve, reject) => {
      if(current === undefined || current === null) {
        setState({
          ...state,
          status: 'process',
          current: 0,
        });
        resolve();
      } else if(current === 0) {
        setState({
          ...state,
          status: 'process',
          current: current + 1,
        });
        resolve();
      } else {
        if(current === 1) {
          if(isDrawersCountCompleted()) {
            form.validateFields().then(() => {
              dispatch(submitDrawer(fishingId, state.drawerForm, (isSuccess, err) => {
                if(isSuccess) {
                  message.success("Información de gavetas actualizada!");
                  setState({
                    ...state,
                    status: 'process',
                    current: 2
                  });
                  resolve();
                } else {
                  message.error(err);
                  reject(err);
                }
              }));
            }).catch(er => {
              message.error("Revise los datos requeridos!");
              reject(er);
            })
          } else {
            message.error(`Debe registrar al menos ${state.suggestedDrawerCount} gavetas.`);
            reject();
          }
        } else {
          reject();
        }
      }
    });
  };

  const prev = () => {
    return new Promise((resolve, reject) => {
      console.log(current);
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
    const confirm = window.confirm('Confirma que desea enviar esta información de Gavetas?');
    if (confirm) {
      dispatch(sendDrawerInfo(fishingId, coordination.SM_Coordination_ID.id, (success, err) => {
        if(success) {
          setState({
            ...state,
            status: 'finish',
            isFinished: true,
            current: 0,
          });
        } else {
          message.error(err);
        }
      }))
      
    }
  };

  const cancelDrawerStampForm = () => {
    setState({
      ...state,
      showForm: false,
      form: {
        ...state.form,
        sealId: null,
        seal: null,
        van: null,
        drawers: 0
      },
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

  const isDrawersCountCompleted = () => {
    return getDrawersCount() >= state.suggestedDrawerCount;
  }

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title={`Información de Gavetas para coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} routes={PageRoutes} />
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
                                                {coordination ? coordination.warehouse_name : "-"}
                                              </Form.Item>
                                              <Form.Item name="address" label="Dirección">
                                                {coordination ? `${coordination.City} ${coordination.Address1},${coordination.Address2}` : "-"}
                                              </Form.Item>
                                              <Form.Item name="notification" label="Notificación">
                                                {coordination ? coordination.SM_FishingNotification : "-"}
                                              </Form.Item>
                                              <Form.Item name="plantingdate" label="Fecha de Pesca Confirmada">
                                                {coordination ? moment(coordination.answered_date).format("DD-MM-YYYY HH:mm") : "-"}
                                              </Form.Item>
                                              <Form.Item name="tipo_pesca" label="Tipo de Pesca">
                                                {coordination  ? coordination.fishing_type : "-"}
                                              </Form.Item>
                                              <Form.Item name="tipo_contenedor" label="Tipo de Contenedor">
                                                {coordination  ? coordination.container_type : "-"}
                                              </Form.Item>
                                              <Form.Item name="volumen_pesca" label="Volumen de Pesca">
                                                {coordination ? `${coordination.fishing_volume} lbs` : "-"}
                                              </Form.Item>
                                              <Form.Item name="clasificacion" label="Clasificación">
                                                {coordination ? `${coordination.Classification}` : "-"}
                                              </Form.Item>
                                              <Form.Item name="textura" label="Textura">
                                                {coordination ? `${coordination.texture}` : "-"}
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
                                title: 'Información de Gavetas',
                                className: 'wizard-step-item',
                                icon: <UilFileCheckAlt />,
                                content: (
                                  <BasicFormWrapper className="basic-form-inner" style={{ width: '80%' }}>
                                    <div className="atbd-form-checkout">
                                      <Row justify="center" >
                                        <Col sm={22} xs={24}>
                                          <div className="shipping-form">
                                            <Heading as="h4">2. Información de Gavetas</Heading>

                                            { !state.showForm && <Form form={form} name="drawerForm">

                                              <div style={{marginBottom: 15}}>
                                                <Alert
                                                  showIcon
                                                  icon={<UilLayers />}
                                                  message="Cantidad de Gavetas"
                                                  description={`El volumen de pesca es ${coordination ? coordination.fishing_volume : ""} lbs, cada gaveta tiene una capacidad máxima de 45 lbs, para poder enviar la información de esta coordinación necesita registrar al menos un total de ${state.suggestedDrawerCount} gaveta${state.suggestedDrawerCount > 1 ? 's' : ''}.`}
                                                  type="info"
                                                />
                                              </div>

                                              <Form.Item name="drawerIce" label="Hielo (#Sacos)" initialValue={state.drawerForm.drawerIce} rules={[{ required: true, message: 'Por favor ingrese la cantidad de hielo' }, {type: "integer", message: "Debes ingresar un número entero"}]}>
                                                <InputNumber
                                                  value={state.drawerForm.drawerIce}
                                                  onChange={(value) => {
                                                    setState({
                                                      ...state,
                                                      drawerForm: {
                                                        ...state.drawerForm,
                                                        drawerIce: value,
                                                      },
                                                    });
                                                  }}
                                                />
                                              </Form.Item>

                                              <Form.Item name="drawerMetabisulfito" label="Metabisulfitos (kg)" initialValue={state.drawerForm.drawerMetabisulfito} rules={[{ required: true, message: 'Por favor ingrese la cantidad de metabisulfitos' }, {type: "number", message: "Debes ingresar un valor numérico"}]}>
                                                <InputNumber
                                                  value={state.drawerForm.drawerMetabisulfito}
                                                  onChange={(value) => {
                                                    setState({
                                                      ...state,
                                                      drawerForm: {
                                                        ...state.drawerForm,
                                                        drawerMetabisulfito: value,
                                                      },
                                                    });
                                                  }}
                                                />
                                              </Form.Item>

                                            </Form> }

                                            { state.showForm && <Form form={form} name="binform">
                                            <GridStyleGutter>
                                              <Row justify="center" gutter={16} style={{marginBottom: 15}}>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  <Form.Item name="van" label="Furgón" rules={[{ required: true, message: 'Por favor indique el furgón' }]}>
                                                    <span style={{display: "none"}}>{JSON.stringify(state.form.van)}</span>
                                                    <Input
                                                      value={state.form.van}
                                                      onChange={(e) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            van: e.target.value,
                                                          },
                                                        });
                                                      }}
                                                    />
                                                  </Form.Item>
                                                </Col>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  <Form.Item name="seal" label="Sello" rules={[{ required: true, message: 'Por favor indique el sello' }]}>
                                                      <span style={{display: "none"}}>{JSON.stringify(state.form.seal)}</span>
                                                      <Input
                                                        value={state.form.seal}
                                                        onChange={(e) => {
                                                          setState({
                                                            ...state,
                                                            form: {
                                                              ...state.form,
                                                              seal: e.target.value,
                                                            },
                                                          });
                                                        }}
                                                      />
                                                    </Form.Item>
                                                </Col>
                                              </Row>

                                              <Row justify="center" gutter={16} style={{marginBottom: 15}}>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  <Form.Item name="drawers" label="#Gavetas" rules={[{ required: true, message: 'Por favor indique el número de gavetas del furgón' }]}>
                                                    <span style={{display: "none"}}>{JSON.stringify(state.form.drawers)}</span>
                                                    <Input
                                                      value={state.form.drawers}
                                                      onChange={(e) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            drawers: e.target.value,
                                                          },
                                                        });
                                                      }}
                                                    />
                                                  </Form.Item>
                                                </Col>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  
                                                </Col>
                                              </Row>

                                              <Row justify="center" gutter={16} style={{marginBottom: 15}}>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  <div style={{marginBottom: 15}}>
                                                    <Button size="default" type="primary" onClick={() => {
                                                        dispatch(submitDrawerStamp(fishingId, state.form, (isSuccess, msg) => {
                                                          if(isSuccess) {
                                                            message.success("El Sello se registró con exito!");
                                                            dispatch(loadDrawerStampByCoord(id, () => {
                                                              cancelDrawerStampForm();
                                                            }));
                                                          } else {
                                                            message.error(msg);
                                                          }
                                                        }));
                                                    }}>
                                                      <UilHdd />
                                                      Guardar
                                                    </Button>
                                                    <Button size="default" type="default" onClick={() => {
                                                      cancelDrawerStampForm();
                                                    }}>
                                                      Cancelar
                                                    </Button>
                                                  </div>
                                                </Col>
                                              </Row>
                                            </GridStyleGutter>
                                            </Form> }


                                            <div style={{marginBottom: 15, marginTop: 15}}>
                                              {
                                                !state.showForm && <Button size="default" type="primary" onClick={() => {
                                                  setState({
                                                    ...state,
                                                    showForm: true,
                                                    form: {
                                                      ...state.form,
                                                      sealId: null,
                                                      seal: null,
                                                      van: null,
                                                      drawers: 0
                                                    },
                                                  });
                                                }}>
                                                  <UilEdit />
                                                  Nuevo Furgón
                                                </Button>
                                              }
                                            </div>

                                            <Form form={form} name="totalDrawers">
                                              <Form.Item name="totalDrawers" label="Gavetas totales:">
                                                <span style={{color: isDrawersCountCompleted() ? '#01B81A' : 'red'}}> {getDrawersCount()} de {state.suggestedDrawerCount} </span>
                                              </Form.Item>
                                            </Form>
                                            

                                            <DataTable
                                              tableData={binesTableDataScource}
                                              columns={binesDataTableColumnEdit}
                                              key="van"
                                              rowSelection={false}
                                            />
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
                                                          <span className="summary-list-text">{coordination ? coordination.warehouse_name : "-"}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Dirección :</span>
                                                          <span className="summary-list-text">{coordination ? `${coordination.City} ${coordination.Address1},${coordination.Address2}` : "-"}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Notificación de Pesca:</span>
                                                          <span className="summary-list-text">{coordination ? coordination.SM_FishingNotification : "-"}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Fecha de Pesca Confirmada:</span>
                                                          <span className="summary-list-text">{coordination ? moment(coordination.answered_date).format("DD-MM-YYYY HH:mm") : "-"}</span>
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
                                                          <span className="summary-list-text">{`${state.drawerForm.drawerIce} saco${state.drawerForm.drawerIce > 1 ? 's' : ''}`}</span>
                                                        </li>
                                                        <li>
                                                          <span className="summary-list-title">Metabisulfitos (kg) :</span>
                                                          <span className="summary-list-text">{`${state.drawerForm.drawerMetabisulfito} kg`}</span>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  <DataTable
                                                    tableData={binesTableDataScource}
                                                    columns={binesDataTableColumnMain}
                                                    key="van"
                                                    rowSelection={false}
                                                  />
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
                                              <Heading as="h3">Información de Gavetas enviada</Heading>
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

export default CoordinationCustodyDrawers;
