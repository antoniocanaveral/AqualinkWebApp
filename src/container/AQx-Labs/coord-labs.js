import React, { lazy, Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Input, Select, Skeleton, message, Spin, DatePicker, TimePicker, InputNumber, Avatar, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import UilFileCheckAlt from '@iconscout/react-unicons/icons/uil-file-check-alt';
import UilCheckCircle from '@iconscout/react-unicons/icons/uil-check-circle';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Checkbox } from '../../components/checkbox/checkbox';
import { BasicFormWrapper, WizardWrapper, WizardTwo, Main, WizardBlock } from '../styled';
import { loadLabCoord, submitLabCoord } from '../../redux/lab/actionCreator';
import moment from 'moment';
import { formatNumber, inputFormatter, parserNumber } from '../../utility/utility';
import { StepsCoords } from '../../components/steps/stepsCoords';
import CustomTable from './CustomTable';
import { getCoordData, getCoordDataSummary, getSendSummaryData } from './coord/coordinationData';
import { selectLabOrgsWithWarehouses } from '../../redux/authentication/selectors';
import Cookies from 'js-cookie';
import { fetchLabLoteByTank } from '../../redux/lablote/actionCreator';

const { Option } = Select;

function CoordinationLabs() {

  const dispatch = useDispatch();

  let { id } = useParams();
  const coordination = useSelector((state) => state.lab.coordination);
  const loading = useSelector((state) => state.lab.loading);

  const [form] = Form.useForm();
  const farmsOrgsWithPools = useSelector(selectLabOrgsWithWarehouses);
  const organizations = useSelector((state) => state.auth.labsOrgs);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(null);
  const { labLoteByTank, loading: labLoteLoading } = useSelector((state) => state.lablote);
  console.log(labLoteByTank)


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
      unitPerPack: coordination ? coordination.unitPerPack : "",
      sm_lablote_ID: null
    }
  });

  const { status, isFinished, current } = state;

  useEffect(() => {
    dispatch(loadLabCoord(id, () => { }));
  }, [dispatch, id]);


  useEffect(() => {
    const orgId = Cookies.get('orgId');
    if (orgId) {
      setSelectedOrg(Number(orgId)); // Convertir a número
    }
  }, []);

  useEffect(() => {
    if (labLoteByTank) {
      setState(prevState => ({
        ...prevState,
        form: {
          ...prevState.form,
          tankTotal: labLoteByTank.sm_reservedbiomass,
          sm_lablote_ID: labLoteByTank.id
        }
      }));
      // También, actualizar el campo del formulario (en caso de usar Form.setFieldsValue)
      form.setFieldsValue({
        tankTotal: labLoteByTank.sm_reservedbiomass
      });
    }
  }, [labLoteByTank, form]);

  // Validación personalizada para "Total Confirmado (Larvas)"
  const validateConfirmedTotal = (_, value) => {
    if (value <= state.form.tankTotal) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Total Confirmado no puede ser mayor que Total Tanque'));
  };

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

  const coordData = getCoordData(coordination);
  const coordDataSummary = getCoordDataSummary(coordination);
  const sendSummaryData = getSendSummaryData(state);


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


  // Filtrar módulos (sectores) con base en `orgId`
  const sectorsOptions = selectedOrg
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .reduce((acc, pool) => {
        if (pool.salesRegion && !acc.find(sector => sector.value === pool.salesRegion.id)) {
          acc.push({
            value: pool.salesRegion.id,
            label: pool.salesRegion.name,
          });
        }
        return acc;
      }, [])
    : [];



  const handleSectorChange = (sectorId) => {
    setSelectedSector(sectorId);
    setSelectedPool(null); // Reiniciar el tanque si cambia el sector

    const selectedSectorObj = sectorsOptions.find(sector => sector.value === sectorId);
    const sectorName = selectedSectorObj ? selectedSectorObj.label : '';

    setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        module: sectorName,  // Guardar el nombre en el estado
        tank: null,
      }
    }));

    form.setFieldsValue({ module: sectorId, tank: undefined });
  };

  const handlePoolChange = (poolId) => {
    setSelectedPool(poolId);
    Cookies.set('poolId', poolId);
    dispatch(fetchLabLoteByTank());

    const selectedPoolObj = poolsOptions.find(pool => pool.value === poolId);
    const poolName = selectedPoolObj ? selectedPoolObj.label : '';

    setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        tank: poolName, // Guardar el nombre del tanque en el estado
      }
    }));

    form.setFieldsValue({ tank: poolId });
  };


  const poolsOptions = selectedSector
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .filter(pool => pool.salesRegion && pool.salesRegion.id === selectedSector)
      .map(pool => ({
        value: pool.poolId,
        label: pool.poolName,
        poolSize: pool.poolSize
      }))
    : [];

  const poolsSelectOptions = selectedSector ? [
    {
      options: poolsOptions,
      onChange: handlePoolChange,
      placeholder: 'Seleccione una Pool',
      disabled: poolsOptions.length === 0,
      value: selectedPool || undefined,
    },
  ] : [];

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title={`Responder Coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} />
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
                                                <Col xs={24} sm={4}>
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
                                                <Col xs={24} sm={4}>
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

                                                <Col span={6}>
                                                  <Form.Item name="SM_Module" label="Módulo" rules={[{ required: true, message: 'Por favor agregue el Módulo' }]}>
                                                    <Select
                                                      placeholder="Seleccione un Módulo"
                                                      options={sectorsOptions}
                                                      value={selectedSector || undefined}
                                                      onChange={handleSectorChange}
                                                      disabled={!selectedOrg} // Se habilita solo cuando `orgId` es válido
                                                    />
                                                  </Form.Item>
                                                </Col>
                                                <Col span={4}>
                                                  <Form.Item name="SM_Tank" label="Tanque" rules={[{ required: true, message: 'Por favor agregue el Tanque' }]}>
                                                    <Select
                                                      placeholder="Seleccione una Tanque"
                                                      options={poolsSelectOptions[0]?.options || []}
                                                      value={selectedPool || undefined}
                                                      onChange={handlePoolChange}
                                                      disabled={!selectedSector} // Se habilita solo cuando hay sector seleccionado
                                                    />
                                                  </Form.Item>
                                                </Col>
                                              </Row>
                                              <Row gutter={16}>
                                                <Col xs={24} sm={6}>
                                                  <Form.Item
                                                    name="tankTotal"
                                                    label="Total Tanque (Larvas)"
                                                    rules={[{ required: true, message: 'El Total Tanque es requerido' }]}
                                                  >
                                                    <InputNumber
                                                      value={state.form.tankTotal}
                                                      formatter={(value) => inputFormatter(value)}
                                                      parser={(value) => parserNumber(value)}
                                                      disabled // Campo no modificable, se rellena automáticamente
                                                    />
                                                  </Form.Item>
                                                  <div style={{ fontSize: "10px", marginBottom: "20px" }}>
                                                    [<strong>Solicitado:</strong> {coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : "-"}]
                                                  </div>
                                                </Col>
                                                <Col xs={24} sm={6}>
                                                  <Form.Item
                                                    name="confirmedTotal"
                                                    label="Total Confirmado (Larvas)"
                                                    rules={[
                                                      { required: true, message: 'Por favor agregue el Total Confirmado' },
                                                      { validator: validateConfirmedTotal }
                                                    ]}
                                                  >
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
                                                </Col>
                                                <Col xs={24} sm={6}>
                                                  <Form.Item name="labCount" label="Conteo Estimado Lab (pl/gr)" rules={[{ required: true, message: 'Por favor agregue el Conteo Preliminar' }]}>
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
      </Main >
    </>
  );
}

export default CoordinationLabs;
