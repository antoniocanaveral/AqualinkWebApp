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
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Checkbox } from '../../components/checkbox/checkbox';
import { BasicFormWrapper, WizardWrapper, OrderSummary, WizardTwo, Main, WizardBlock } from '../styled';
import { cancelLabCoord, enviarParamsLabCoord, loadLabCoord, submitLabCoord } from '../../redux/lab/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { formatNumber, inputFormatter, parserNumber } from '../../utility/utility';
import { StepsCoords } from '../../components/steps/stepsCoords';
import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';

const { Option } = Select;

function CoordinationParamLabs() {

  const handleBack = () => {
    navigate(-1);
  };


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
  const { id } = useParams();

  const coordination = useSelector((state) => state.lab.coordination);
  const loading = useSelector((state) => state.lab.loading);

  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
    form: {
      answeredDate: coordination
        ? coordination.answered_date
          ? moment(coordination.answered_date)
          : moment(coordination.planned_date)
        : moment(),
      answeredTime: coordination
        ? coordination.answered_date
          ? moment(coordination.answered_date)
          : moment(coordination.planned_date)
        : moment(),
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
      alkalinity: 0,
      pre_breeding_pool_ph: 0,
      SM_PreliminaryLaboratoryCount: 0
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
  }, []);


  const next = () => {
    return new Promise((resolve, reject) => {
      if (current < 4) {
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



  const onSave = () => {

    form.validateFields().then(() => {
      dispatch(enviarParamsLabCoord(id, coordination.SM_Coordination_ID.id, state.form.alkalinity, state.form.pre_breeding_pool_ph, state.form.SM_PreliminaryLaboratoryCount, () => {
        message.success("Parámetros enviados!");
        navigate("/lab/coords");
      }));
    }).catch(er => {
      message.error("Revise los datos requeridos!");
    })
  }


  const coordData = [
    { key: '4', label: 'Fecha de Siembra Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY HH:mm A') : '-' },
    { key: '5', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '20 ppm' },
    { key: '6', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '1.000.000 larvas' },
    { key: '7', label: 'Alcalinidad Piscina Pre Cría:', value: coordination?.coord_alkalinity || '140 ppm' },
    { key: '8', label: 'PH Piscina de Pre Cría:', value: coordination?.coord_pre_breeding_pool_ph || '5 ppm' },
  ];

  const coordDataInfo = [
    {
      key: '1',
      label: 'Fecha Propuesta:',
      value: coordination
        ? moment(coordination.answeredDate).format('DD-MM-YYYY')
        : '-',
    },
    {
      key: '2',
      label: 'Hora Propuesta:',
      value: coordination
        ? moment(coordination.answeredDate).format('HH:mm A')
        : '-',
    },
    {
      key: '3',
      label: 'Módulo:',
      value: coordination?.module || '-',
    },
    {
      key: '4',
      label: 'Tanque:',
      value: coordination?.tank || '-',
    },
    {
      key: '5',
      label: 'Total Tanque (Larvas):',
      value: coordination?.tankTotal
        ? `${formatNumber(coordination.tankTotal)} larvas`
        : '-',
    },
    {
      key: '6',
      label: 'Total Asignado (Larvas):',
      value: coordination?.confirmedTotal
        ? `${formatNumber(coordination.confirmedTotal)} larvas`
        : '-',
    },
    {
      key: '7',
      label: 'Conteo Preliminar Laboratorio (Larvas/gramo):',
      value: coordination?.labCount || '-',
    },
    {
      key: '8',
      label: 'PL:',
      value: coordination?.pl || '-',
    },
    {
      key: '9',
      label: 'Salinidad (ppm):',
      value: coordination?.salinity
        ? `${coordination.salinity} ppm`
        : '-',
    },
    {
      key: '10',
      label: 'Método de Envío:',
      value: coordination?.methodName || '-',
    },
    {
      key: '11',
      label: 'Unidades por Empaque:',
      value: coordination?.unitPerPack || '-',
    },
    {
      key: '12',
      label: 'Oxígeno en Trayecto:',
      value: coordination?.oxygenOnTheGo ? 'Sí' : 'No',
    },
    {
      key: '13',
      label: 'Alimentación en Trayecto:',
      value: coordination?.foodOnTheGo ? 'Sí' : 'No',
    },
  ];


  const columns2 = [
    {
      title: 'Etiqueta',
      dataIndex: 'label',
      key: 'label',
      render: text => <strong>{text}</strong>,
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
      with: '50%',
      render: (text, record) => {
        const isDisabled = !!coordination && record.value !== '' && record.value !== false && record.value !== null;

        switch (record.type) {
          case 'date':
            return (
              <Form.Item
                name={record.fieldName}
                rules={[{ required: true, message: 'Por favor seleccione una Fecha' }]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  disabled={isDisabled}
                />
              </Form.Item>
            );
          case 'time':
            return (
              <Form.Item
                name={record.fieldName}
                rules={[{ required: true, message: 'Por favor seleccione una Hora' }]}
              >
                <TimePicker
                  style={{ width: '100%' }}
                  disabled={isDisabled}
                />
              </Form.Item>
            );
          case 'input':
            return (
              <Form.Item
                name={record.fieldName}
                rules={[{ required: record.value === '', message: `Por favor ingrese ${record.label.toLowerCase()}` }]}
              >
                <Input
                  disabled={isDisabled}
                />
              </Form.Item>
            );
          case 'number':
            return (
              <Form.Item
                name={record.fieldName}
                rules={[
                  { required: record.value === 0, message: `Por favor ingrese ${record.label.toLowerCase()}` },
                  { type: 'number', min: 0, message: 'Debe ser un número válido' },
                ]}
              >
                <InputNumber
                  min={0}
                  style={{ width: '100%' }}
                  formatter={inputFormatter}
                  parser={parserNumber}
                  disabled={isDisabled}
                />
              </Form.Item>
            );
          case 'select':
            return (
              <Form.Item
                name={record.fieldName}
                rules={[{ required: record.value === '', message: 'Por favor seleccione una opción' }]}
              >
                <Select
                  style={{ width: '100%' }}
                  disabled={isDisabled}
                >
                  <Option value="">Seleccione</Option>
                  {record.options.map(option => (
                    <Option key={option} value={option}>{option}</Option>
                  ))}
                </Select>
              </Form.Item>
            );
          case 'checkbox':
            return (
              <Form.Item
                name={record.fieldName}
                valuePropName="checked"
              >
                <Checkbox
                  disabled={isDisabled || (form.getFieldValue('methodName') !== 'TANQUES')}
                >
                  {record.label}
                </Checkbox>
              </Form.Item>
            );
          default:
            return text;
        }
      },
    },
  ];

  const columns = [
    {
      title: '', dataIndex: 'label', key: 'label', width: '55%', render: (text) => (
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
      <PageHeader
        onBack={handleBack}
        title={`Responder Coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} routes={PageRoutes} />
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
                            icon: <UilUsersAlt className="steps-icon" />,
                            content: (
                              <BasicFormWrapper style={{ width: '100%' }}>
                                <div className="atbd-form-checkout">
                                  <Row>
                                    <Col sm={22} xs={24}>
                                      <div className="create-account-form" style={{ marginTop: "10px" }}>
                                        <Heading as="h4">1. Datos de la Coordinación {loading && <Spin />}</Heading>
                                        <Form form={form} name="account" style={{ marginTop: '10px' }} layout="vertical">
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
                                                            title={``}
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
                                  <Row justify="center">
                                    <Col sm={18} xs={24}>
                                      <div className="shipping-form" style={{ marginTop: "10px", textAlign: "center" }}>
                                        <Heading as="h4" style={{ marginBottom: "20px" }}>2. Información de Laboratorio</Heading>
                                        <div style={{ display: "inline-block", width: "80%", maxWidth: "600px" }}>
                                          <Table
                                            className='custom-table_lab'
                                            dataSource={coordDataInfo}
                                            columns={columns2}
                                            pagination={false}
                                            showHeader={false}
                                            bordered
                                            rowClassName={() => 'custom-table-row'}
                                            style={{ fontSize: '14px' }}
                                          />
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </BasicFormWrapper>


                            ),
                          },
                          {
                            title: 'Registro de Parámetros',
                            className: 'wizard-step-item',
                            icon: <UilFileCheckAlt className="steps-icon" />,
                            content: (
                              <BasicFormWrapper style={{ width: '100%' }}>
                                <div className="atbd-form-checkout">
                                  <Row justify="center">
                                    <Col sm={20} xs={24}>
                                      <div className="shipping-form" style={{ marginTop: "10px" }}>
                                        <Heading as="h4" style={{ textAlign: "center" }}>3. Información de Calidad de Agua</Heading>
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


                                        </Form>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </BasicFormWrapper>
                            ),
                          },
                          {
                            title: 'Conteo Preliminar',
                            className: 'wizard-step-item',
                            icon: <UilFileCheckAlt className="steps-icon" />,
                            content: (
                              <BasicFormWrapper style={{ width: '100%' }}>
                                <div className="atbd-form-checkout">
                                  <Row justify="center">
                                    <Col sm={20} xs={24}>
                                      <div className="shipping-form" style={{ marginTop: "10px" }}>
                                        <Heading as="h4" style={{ textAlign: "center" }}>4. Conteo Preliminar Laboratorio</Heading>
                                        <Form form={form} name="address">

                                          <Form.Item name="SM_PreliminaryLaboratoryCount" label="Conteo Preliminar Laboratorio" rules={[{ required: true, message: 'Por favor ingrese un valor' }]}>
                                            <InputNumber
                                              value={state.form.SM_PreliminaryLaboratoryCount}
                                              formatter={(value) => inputFormatter(value)}
                                              parser={(value) => parserNumber(value)}
                                              max={200}
                                              min={60}
                                              onChange={(value) => {
                                                setState({
                                                  ...state,
                                                  form: {
                                                    ...state.form,
                                                    SM_PreliminaryLaboratoryCount: value,
                                                  },
                                                });
                                              }}
                                            />
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
                            title: 'Reportes',
                            className: 'wizard-step-item',
                            icon: <UilCheckCircle className="steps-icon" />,
                            content:
                              status !== 'finish' ? (
                                <BasicFormWrapper style={{ width: '80%' }}>
                                  <div className="atbd-review-order" style={{ width: '100%' }}>
                                    <br />
                                    <br />

                                    <Row gutter={[32, 32]} justify="center">
                                      {/* Primera Fila */}
                                      <Row gutter={16} style={{ width: '100%' }} justify="space-around">
                                        {/* Primera Tabla: Información General */}
                                        <Col xs={24} sm={8} md={6}>
                                          <Heading as="h4" style={{ textAlign: "center", marginBottom: "20px" }}>1. Información General</Heading>
                                          <Table
                                            className="custom-table_lab"
                                            dataSource={coordData}
                                            columns={columns}
                                            pagination={false}
                                            showHeader={false}
                                            bordered
                                            rowClassName={() => 'custom-table-row'}
                                            style={{ marginBottom: '20px' }}
                                          />
                                        </Col>

                                        {/* Segunda Tabla Parte 1: Información de Laboratorio */}
                                        <Col xs={24} sm={8} md={10}>
                                          <Heading as="h4" style={{ textAlign: "center", marginBottom: "20px" }}>2. Información de Laboratorio </Heading>
                                          <Table
                                            className="custom-table_lab"
                                            dataSource={coordDataInfo.slice(0, Math.ceil(coordDataInfo.length / 2))}
                                            columns={columns2}
                                            pagination={false}
                                            showHeader={false}
                                            bordered
                                            rowClassName={() => 'custom-table-row'}
                                            style={{ fontSize: '14px', marginBottom: '20px' }}
                                          />
                                        </Col>

                                        {/* Segunda Tabla Parte 2: Información de Laboratorio */}
                                        <Col xs={24} sm={8} md={8}>
                                          <br />
                                          <br />
                                          <Table
                                            className="custom-table_lab"
                                            dataSource={coordDataInfo.slice(Math.ceil(coordDataInfo.length / 2))}
                                            columns={columns2}
                                            pagination={false}
                                            showHeader={false}
                                            bordered
                                            rowClassName={() => 'custom-table-row'}
                                            style={{ fontSize: '14px', marginBottom: '20px' }}
                                          />
                                        </Col>
                                      </Row>

                                      {/* Segunda Fila */}
                                      <Row style={{ width: '100%' }} gutter={25} justify="center">
                                        <Col xs={24} sm={20} md={12}>
                                          <Heading as="h4" style={{ textAlign: "center", marginBottom: "20px" }}>3. Información de Calidad de Agua</Heading>
                                          <Table
                                            className="custom-table_lab"
                                            /*dataSource={[
                                              { key: '1', label: 'PH', value: form.getFieldValue('ph') || '-' },
                                              { key: '2', label: 'Salinidad (ppm)', value: form.getFieldValue('salinity') || '-' },
                                              { key: '3', label: 'Oxígeno Disuelto (mg/L)', value: form.getFieldValue('oxygen') || '-' },
                                              { key: '4', label: 'Temperatura (°C)', value: form.getFieldValue('temperature') || '-' },
                                              { key: '5', label: 'PL/Gramo (Predespacho)', value: form.getFieldValue('plPerGram') || '-' },
                                            ]}*/
                                            dataSource={[
                                              { key: '1', label: 'Alcalinidad', value: state.form.alkalinity || '-' },
                                              { key: '2', label: 'Ph Tanque', value: state.form.pre_breeding_pool_ph || '-' },
                                            ]}
                                            columns={[
                                              {
                                                title: '',
                                                dataIndex: 'label',
                                                key: 'label',
                                                width: '50%',
                                                render: (text) => <strong>{text}</strong>,
                                              },
                                              {
                                                title: '',
                                                dataIndex: 'value',
                                                key: 'value',
                                                width: '50%',
                                              },
                                            ]}
                                            pagination={false}
                                            showHeader={false}
                                            bordered
                                            rowClassName={() => 'custom-table-row'}
                                            style={{ fontSize: '14px', textAlign: 'center' }}
                                          />
                                        </Col>
                                        <Col xs={24} sm={20} md={12}>
                                          <Heading as="h4" style={{ textAlign: "center", marginBottom: "20px" }}>4. Conteo Preliminar</Heading>
                                          <Table
                                            className="custom-table_lab"
                                            /*dataSource={[
                                              { key: '1', label: 'PH', value: form.getFieldValue('ph') || '-' },
                                              { key: '2', label: 'Salinidad (ppm)', value: form.getFieldValue('salinity') || '-' },
                                              { key: '3', label: 'Oxígeno Disuelto (mg/L)', value: form.getFieldValue('oxygen') || '-' },
                                              { key: '4', label: 'Temperatura (°C)', value: form.getFieldValue('temperature') || '-' },
                                              { key: '5', label: 'PL/Gramo (Predespacho)', value: form.getFieldValue('plPerGram') || '-' },
                                            ]}*/
                                            dataSource={[
                                              { key: '1', label: 'Conteo Preliminar Laboratorio', value: state.form.SM_PreliminaryLaboratoryCount || '-' },
                                            ]}
                                            columns={[
                                              {
                                                title: '',
                                                dataIndex: 'label',
                                                key: 'label',
                                                width: '50%',
                                                render: (text) => <strong>{text}</strong>,
                                              },
                                              {
                                                title: '',
                                                dataIndex: 'value',
                                                key: 'value',
                                                width: '50%',
                                              },
                                            ]}
                                            pagination={false}
                                            showHeader={false}
                                            bordered
                                            rowClassName={() => 'custom-table-row'}
                                            style={{ fontSize: '14px', textAlign: 'center' }}
                                          />
                                        </Col>
                                      </Row>

                                    </Row>

                                  </div>
                                </BasicFormWrapper>
                              ) : null,
                          },

                        ]}
                        onNext={next}
                        onPrev={prev}
                        onDone={() => {
                          onSave()
                        }}
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

export default CoordinationParamLabs;
