import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Select, Skeleton, message, Spin, DatePicker, TimePicker, Input } from 'antd';
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
import { loadCustodyCoord, submitCustodyCoord, loadBinesByCoord, submitBin, deleteBin, sendBinInfo } from '../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import {useNavigate } from 'react-router-dom';
import DataTable from '../../components/table/DataTable';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import Alert from '../../components/alerts/alerts';
import UilLayers from '@iconscout/react-unicons/icons/uil-layers';

const { Option } = Select;

function CoordinationCustodyBines() {
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
  const fishingId = useSelector((state) => state.custody.fishingId);
  
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
    showForm: false,
    suggestedBinesCount: 0,
    form: {
      binId: "",
      binNumber: "",
      seal1: "",
      seal2: "",
      seal3: "",
      seal4: "",
    }
  });

  const { status, isFinished, current } = state;

  useEffect(() => {
    dispatch(loadCustodyCoord(id, () => {
    }));
    dispatch(loadBinesByCoord(id, (isSuccess, bines) => {
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

  const binesDataTableColumnEdit = [
     ... binesDataTableColumnMain,
    {
      title: 'Acciones',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  if (bines && bines.length > 0) {
    bines.map((item, index) => {
      return binesTableDataScource.push({
        bin: <span>{item.Name}</span>,
        seal1: <span>{item.SM_Stamp1}</span>,
        seal2: <span>{item.SM_Stamp2}</span>,
        seal3: <span>{item.SM_Stamp3}</span>,
        seal4: <span>{item.SM_Stamp4}</span>,
        action: (
          <div className="table-actions" style={{minWidth:"50px !important", textAlign: "center"}}>
            <Link className="edit" title='Editar' onClick={() => {
              setState({
                ...state,
                showForm: true,
                form: {
                  ...state.form,
                  binId: item.id,
                  binNumber: item.Name,
                  seal1: item.SM_Stamp1,
                  seal2: item.SM_Stamp2,
                  seal3: item.SM_Stamp3,
                  seal4: item.SM_Stamp4
                },
              });
            }}>
              <UilEdit /> 
            </Link>
            <Link className="edit" title='Eliminar' onClick={() => {
              const confirm = window.confirm('Seguro deseas eliminar el Bin ? ');
              if (confirm) {
                dispatch(deleteBin(item.id, (isSuccess, msg) => {
                  if(isSuccess) {
                    message.success("El Bin se eliminó con exito!");
                    dispatch(loadBinesByCoord(id, () => {
                      cancelBinForm();
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

  const getSuggestedBinesCount = () => {
    let count = 0;
    if(coordination) {
      count = Number(Math.ceil(parseFloat(coordination.fishing_volume) / 1200)).toFixed(0);
    }
    return count;
  }

  const next = () => {
    console.log(`current ${current}`);
    return new Promise((resolve, reject) => {
      if(current === 0) {
        setState({
          ...state,
          status: 'process',
          current: current + 1,
        });
        resolve();
      } else if (current === 1) {
        if(isBinesCountCompleted()) {
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
          message.error(`Debe registrar al menos ${getSuggestedBinesCount()} bines.`);
          reject();
        }
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
    const confirm = window.confirm('Confirma que desea enviar esta información de Bines?');
    if (confirm) {
      dispatch(sendBinInfo(fishingId, coordination.SM_Coordination_ID.id, (success) => {
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

  const cancelBinForm = () => {
    setState({
      ...state,
      showForm: false,
      form: {
        ...state.form,
        binId: null,
        binNumber: null,
        seal1: null,
        seal2: null,
        seal3: null,
        seal4: null
      },
    });
  }

  const getBinesCount = () => {
    let count = 0;
    if(bines) {
      count = bines.length;
    }
    return count;
  }

  const isBinesCountCompleted = () => {
    return getBinesCount() >= getSuggestedBinesCount();
  }

  return (
    <>
      <PageHeader  title={`Información de Bines para coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} routes={PageRoutes} />
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
                                title: 'Información de Bines',
                                className: 'wizard-step-item',
                                icon: <UilFileCheckAlt />,
                                content: (
                                  <BasicFormWrapper className="basic-form-inner" style={{ width: '80%' }}>
                                    <div className="atbd-form-checkout">
                                      <Row justify="center" >
                                        <Col sm={22} xs={24}>
                                          <div className="shipping-form">
                                            <Heading as="h4">2. Información de Bines</Heading>

                                            <div style={{marginBottom: 15}}>
                                                <Alert
                                                  showIcon
                                                  icon={<UilLayers />}
                                                  message="Cantidad de Bines"
                                                  description={`El volumen de pesca es ${coordination ? coordination.fishing_volume : ""} lbs, cada bin tiene una capacidad máxima de 1200 lbs, para poder enviar la información de esta coordinación necesita registrar al menos un total de ${getSuggestedBinesCount()} bin${getSuggestedBinesCount() > 1 ? 'es' : ''}.`}
                                                  type="info"
                                                />
                                              </div>

                                            { state.showForm && <Form form={form} name="binform">
                                            <GridStyleGutter>
                                              <Row justify="center" gutter={16} style={{marginBottom: 15}}>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  <Form.Item name="binNumber" label="Número de Bin" rules={[{ required: true, message: 'Por favor indique el número del bin' }]}>
                                                    <span style={{display: "none"}}>{JSON.stringify(state.form.binNumber)}</span>
                                                    <Input
                                                      value={state.form.binNumber}
                                                      onChange={(e) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            binNumber: e.target.value,
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
                                                  <Form.Item name="seal1" label="Sello 1" rules={[{ required: true, message: 'Por favor indique el sello 1' }]}>
                                                    <span style={{display: "none"}}>{state.form.seal1}</span>
                                                    <Input
                                                      value={state.form.seal1}
                                                      onChange={(e) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            seal1: e.target.value,
                                                          },
                                                        });
                                                      }}
                                                    />
                                                  </Form.Item>
                                                </Col>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  <Form.Item name="seal2" label="Sello 2" rules={[{ required: true, message: 'Por favor indique el sello 2' }]}>
                                                    <span style={{display: "none"}}>{state.form.seal2}</span>
                                                    <Input
                                                      value={state.form.seal2}
                                                      onChange={(e) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            seal2: e.target.value,
                                                          },
                                                        });
                                                      }}
                                                    />
                                                  </Form.Item>
                                                </Col>
                                              </Row>

                                              <Row justify="center" gutter={16} style={{marginBottom: 15}}>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  <Form.Item name="seal3" label="Sello 3" rules={[{ required: true, message: 'Por favor indique el sello 3' }]}>
                                                  <span style={{display: "none"}}>{state.form.seal3}</span>
                                                    <Input
                                                      value={state.form.seal3}
                                                      onChange={(e) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            seal3: e.target.value,
                                                          },
                                                        });
                                                      }}
                                                    />
                                                  </Form.Item>
                                                </Col>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  <Form.Item name="seal4" label="Sello 4" rules={[{ required: true, message: 'Por favor indique el sello 4' }]}>
                                                    <span style={{display: "none"}}>{state.form.seal4}</span>
                                                    <Input
                                                      value={state.form.seal4}
                                                      onChange={(e) => {
                                                        setState({
                                                          ...state,
                                                          form: {
                                                            ...state.form,
                                                            seal4: e.target.value,
                                                          },
                                                        });
                                                      }}
                                                    />
                                                  </Form.Item>
                                                </Col>
                                              </Row>

                                              <Row justify="center" gutter={16} style={{marginBottom: 15}}>
                                                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                  <div style={{marginBottom: 15}}>
                                                    <Button size="default" type="primary" onClick={() => {
                                                        dispatch(submitBin(fishingId, state.form, (isSuccess, msg) => {
                                                          if(isSuccess) {
                                                            message.success("El Bin se registró con exito!");
                                                            dispatch(loadBinesByCoord(id, () => {
                                                              cancelBinForm();
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
                                                      cancelBinForm();
                                                    }}>
                                                      Cancelar
                                                    </Button>
                                                  </div>
                                                </Col>
                                              </Row>
                                            </GridStyleGutter>
                                            </Form> }


                                            <div style={{marginBottom: 15}}>
                                              {
                                                !state.showForm && <Button size="default" type="primary" onClick={() => {
                                                  setState({
                                                    ...state,
                                                    showForm: true,
                                                    form: {
                                                      ...state.form,
                                                      binId: null,
                                                      binNumber: null,
                                                      seal1: null,
                                                      seal2: null,
                                                      seal3: null,
                                                      seal4: null,
                                                    },
                                                  });
                                                }}>
                                                  <UilEdit />
                                                  Nuevo Bin
                                                </Button>
                                              }
                                            </div>

                                            <Form form={form} name="totalDrawers">
                                              <Form.Item name="totalDrawers" label="Bines totales:">
                                                <span style={{color: isBinesCountCompleted() ? '#01B81A' : 'red'}}> {getBinesCount()} de {getSuggestedBinesCount()} </span>
                                              </Form.Item>
                                            </Form>

                                            <DataTable
                                              tableData={binesTableDataScource}
                                              columns={binesDataTableColumnEdit}
                                              key="bin"
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
                                              <Heading as="h3">Información de Bines enviada</Heading>
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

export default CoordinationCustodyBines;
