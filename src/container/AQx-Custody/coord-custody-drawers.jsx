import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Skeleton, message, Spin, Badge, Input, InputNumber, Select } from 'antd';
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
import { loadCustodyCoord, loadDrawerByCoord, loadDrawerStampByCoord, submitDrawer, submitDrawerStampV2, deleteDrawerStamp, sendDrawerInfo, deleteDrawerStampByVehicle } from '../../redux/custody/actionCreator';
import Cookies from 'js-cookie';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../components/table/DataTable';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import Alert from '../../components/alerts/alerts';
import UilLayers from '@iconscout/react-unicons/icons/uil-layers';
import { StepsCoords } from '../../components/steps/stepsCoords';
import CustomTable from '../AQx-Labs/CustomTable';
import { fetchCarriers } from '../../redux/carriers/actionCreator';
import { fetchFishingDrawerInfo, fetchOrgFishingDrawerStamp, fetchOrgSecurityKits, fetchTreaters } from '../../redux/bines-drawers/actionCreator';


function CoordinationCustodyDrawers() {


  const dispatch = useDispatch();

  let { id } = useParams();
  const coordination = useSelector((state) => state.custody.coordination);
  const loading = useSelector((state) => state.custody.loading);
  const drawerStamps = useSelector((state) => state.custody.drawerStamps);
  const fishingId = useSelector((state) => state.custody.fishingId);

  const { carriers, error } = useSelector((state) => state.carriers);
  const [selectedCarrier, setSelectedCarrier] = useState(null);


  useEffect(() => {
    dispatch(fetchCarriers());
    dispatch(fetchOrgFishingDrawerStamp());
    dispatch(fetchOrgSecurityKits("VAN"));
    dispatch(fetchFishingDrawerInfo(id));
    dispatch(fetchTreaters());


  }, [dispatch]);



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
    },
    sm_ice: undefined, // Estado para la cantidad de hielo
    sm_metabisulfite: undefined, // Estado para la cantidad de metabisulfito
    selectedTreater: undefined, // Estado para el tratador seleccionado
  });


  const { organizationSecurityKits = [], organizationFishingDrawerStamp = [], fishingDrawerInfo, fishingDrawerInfoLoading, treaters, treatersLoading } = useSelector((state) => state.bin_drawers || {});


  const [addedFurgones, setAddedFurgones] = useState([]);

  const [availableKitsState, setAvailableKitsState] = useState([]);
  const [availableVehiclesState, setAvailableVehiclesState] = useState([]);

  useEffect(() => {

    setAvailableKitsState(organizationSecurityKits);


    const usedVehicleIds = new Set(
      organizationFishingDrawerStamp
        .map(bin => bin.sm_vehicle_id)
        .filter(id => id !== undefined && id !== null)
    );


    const filteredVehicles = carriers.flatMap(carrier =>
      carrier.sm_vehicle.filter(vehicle => !usedVehicleIds.has(vehicle.id))
    );

    setAvailableVehiclesState(filteredVehicles);
  }, [organizationSecurityKits, organizationFishingDrawerStamp, carriers]);



  useEffect(() => {
    if (!fishingDrawerInfoLoading && fishingDrawerInfo.length > 0) {

      const formattedData = fishingDrawerInfo.map(item => ({
        van: item.sm_furgon, // "1 - GEL-7774"
        kitCode: item.sm_kitcode, // "Kit123456"
        seal1: item.SM_Stamp1, // "11"
        seal2: item.SM_Stamp2, // "1"
        drawerCaladas: item.sm_kdrawerscount, // 10
        drawerSolidas: item.sm_sdrawerscount, // 10
      }));

      setAddedFurgones(formattedData);
    }
  }, [fishingDrawerInfo, fishingDrawerInfoLoading]);
  const furgonesColumns = [
    { title: 'Furgón', dataIndex: 'van', key: 'van' },
    { title: 'Kit de Seguridad', dataIndex: 'kitCode', key: 'kitCode' },
    { title: 'Sello 1', dataIndex: 'seal1', key: 'seal1' },
    { title: 'Sello 2', dataIndex: 'seal2', key: 'seal2' },
    { title: 'Gavetas Caladas', dataIndex: 'drawerCaladas', key: 'drawerCaladas' },
    { title: 'Gavetas Sólidas', dataIndex: 'drawerSolidas', key: 'drawerSolidas' },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, record) => (
        <Button
          type="danger"
          onClick={() => {
            deleteDrawerStampByVehicle(record.van, (success, message) => {
              if (success) {
                setAddedFurgones(addedFurgones.filter((item) => item.van !== record.van));
              } else {
                message.error(message);
              }
            });
          }}
        >
          Eliminar
        </Button>
      ),
    },

  ];


  const { status, isFinished, current } = state;

  console.log(`current ${current}`);

  useEffect(() => {
    dispatch(loadCustodyCoord(id, (isSuccess, coord) => {
      dispatch(loadDrawerStampByCoord(id, (isSuccess, stamps) => {
        let suggestedDrawerCount = Number(parseFloat(coord.fishing_volume) / 45).toFixed(0);
        setState({
          ...state,
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



  if (drawerStamps && drawerStamps.length > 0) {
    drawerStamps.map((item, index) => {
      return binesTableDataScource.push({
        van: <span>{item.SM_Van}</span>,
        stamp: <span>{item.SM_Stamp}</span>,
        drawers: <span>{item.SM_DrawersCount}</span>,
        action: (
          <div className="table-actions" style={{ minWidth: "50px !important", textAlign: "center" }}>
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
                  if (isSuccess) {
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
      if (current === undefined || current === null) {
        setState({
          ...state,
          status: 'process',
          current: 0,
        });
        resolve();
      } else if (current === 0) {
        setState({
          ...state,
          status: 'process',
          current: current + 1,
        });
        resolve();
      } else {
        if (current === 1) {
          form.validateFields().then(() => {
            dispatch(submitDrawer(fishingId, state.drawerForm, (isSuccess, err) => {
              if (isSuccess) {
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
      }
    });
  };

  const prev = () => {
    return new Promise((resolve, reject) => {
      console.log(current);
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
    if (!state.sm_ice || !state.sm_metabisulfite || !state.selectedTreater) {
      message.error('Por favor completa todos los campos correctamente.');
      return;
    }

    const confirm = window.confirm('Confirma que desea enviar esta información de Gavetas?');

    if (confirm) {
      dispatch(
        sendDrawerInfo(
          fishingId,
          coordination.SM_Coordination_ID.id,
          state.selectedTreater,
          state.sm_ice,
          state.sm_metabisulfite,
          (success, err) => {
            if (success) {
              setState({
                ...state,
                status: 'finish',
                isFinished: true,
                current: 0,
                sm_ice: undefined, // Reseteando valores
                sm_metabisulfite: undefined,
                selectedTreater: undefined,
              });

              message.success('Información de gavetas enviada correctamente.');
            } else {
              message.error(`Error: ${err}`);
            }
          }
        )
      );
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






  const coordData = [
    { key: '1', label: 'Camaronera:', value: coordination ? coordination.org_name : '-' },
    { key: '2', label: 'Piscina:', value: coordination ? coordination.warehouse_name : '-' },
    { key: '3', label: 'Dirección:', value: coordination ? `${coordination.City} ${coordination.Address1}, ${coordination.Address2}` : '-' },
    { key: '4', label: 'Notificación:', value: coordination ? coordination.SM_FishingNotification : '-' },
    { key: '5', label: 'Fecha de Pesca Confirmada:', value: coordination ? moment(coordination.answered_date).format('DD-MM-YYYY HH:mm') : '-' },
    { key: '6', label: 'Tipo de Pesca:', value: coordination ? coordination.fishing_type : '-' },
    { key: '7', label: 'Tipo de Contenedor:', value: coordination ? coordination.container_type : '-' },
    { key: '8', label: 'Volumen de Pesca:', value: coordination ? `${coordination.fishing_volume} lbs` : '-' },
    { key: '9', label: 'Clasificación:', value: coordination ? coordination.Classification : '-' },
    { key: '10', label: 'Textura:', value: coordination ? coordination.texture : '-' },
  ];


  const summaryData = [

    {
      key: '3',
      label: 'Hielo',
      value: `${state.sm_ice} saco${form.getFieldValue('drawerIce') > 1 ? 's' : ''}`
    },
    {
      key: '4',
      label: 'Metabisulfitos:',
      value: `${state.sm_metabisulfite} kg`
    },
    {
      key: '5',
      label: 'Tratador:',
      value: form.getFieldValue('selectedTreater')
        ? treaters.find(treater => treater.value === form.getFieldValue('selectedTreater'))?.label || 'No seleccionado'
        : 'No seleccionado'
    }
  ];


  return (
    <>
      <PageHeader onBack={() => window.history.back()} title={`Gavetas para coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} />
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
                                icon: <UilUsersAlt />,
                                content: (
                                  <Row justify="center">
                                    <Col sm={22} xs={24}>
                                      <Heading as="h4">1. Datos de la Coordinación {loading && <Spin />}</Heading>
                                      <CustomTable data={coordData} pairsPerRow={2} />
                                    </Col>
                                  </Row>
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

                                            {!state.showForm && <Form form={form} name="drawerForm">

                                              <div style={{ marginBottom: 15 }}>
                                                <Alert
                                                  showIcon
                                                  icon={<UilLayers />}
                                                  message="Cantidad de Gavetas"
                                                  description={`El volumen de pesca es ${coordination ? coordination.fishing_volume : ""} lbs, cada gaveta tiene una capacidad máxima de 45 lbs, para poder enviar la información de esta coordinación necesita registrar al menos un total de ${state.suggestedDrawerCount} gaveta${state.suggestedDrawerCount > 1 ? 's' : ''}.`}
                                                  type="info"
                                                />
                                              </div>
                                              <Row gutter={16}>
                                                {/* Campo Hielo */}
                                                <Col sm={8} xs={24}>
                                                  <Form.Item
                                                    name="sm_ice"
                                                    label="Hielo (#Sacos)"
                                                    rules={[
                                                      { required: true, message: 'Por favor ingrese la cantidad de hielo' },
                                                      { type: 'integer', message: 'Debe ser un número entero' }
                                                    ]}
                                                  >
                                                    <InputNumber
                                                      style={{ width: '100%' }}
                                                      value={state.sm_ice}
                                                      onChange={(value) => setState({ ...state, sm_ice: value })}
                                                    />
                                                  </Form.Item>
                                                </Col>

                                                {/* Campo Metabisulfito */}
                                                <Col sm={8} xs={24}>
                                                  <Form.Item
                                                    name="sm_metabisulfite"
                                                    label="Metabisulfitos (kg)"
                                                    rules={[
                                                      { required: true, message: 'Por favor ingrese la cantidad de metabisulfitos' },
                                                      { type: 'number', message: 'Debe ser un número válido' }
                                                    ]}
                                                  >
                                                    <InputNumber
                                                      style={{ width: '100%' }}
                                                      value={state.sm_metabisulfite}
                                                      onChange={(value) => setState({ ...state, sm_metabisulfite: value })}
                                                    />
                                                  </Form.Item>
                                                </Col>

                                                {/* Selector de Tratador */}
                                                {treaters.length > 0 ? (
                                                  <Col sm={8} xs={24}>
                                                    <Form.Item
                                                      name="selectedTreater"
                                                      label="Seleccionar Tratador"
                                                      rules={[{ required: true, message: 'Por favor seleccione un tratador' }]}
                                                    >
                                                      <Select
                                                        loading={treatersLoading}
                                                        placeholder="Selecciona un tratador"
                                                        allowClear
                                                        value={state.selectedTreater}
                                                        onChange={(value) => setState({ ...state, selectedTreater: value })}
                                                      >
                                                        {treaters?.map((treater) => (
                                                          <Select.Option key={treater?.value} value={treater.value}>
                                                            {treater?.label}
                                                          </Select.Option>
                                                        ))}
                                                      </Select>
                                                    </Form.Item>
                                                  </Col>
                                                ) : null}
                                              </Row>





                                            </Form>}

                                            {state.showForm && <Form form={form} name="binform">
                                              <GridStyleGutter>
                                                <Row justify="center" gutter={16} style={{ marginBottom: 15 }}>
                                                  <Col xs={24} sm={24} md={8} lg={8} xl={7} className="gutter-row">
                                                    <Form.Item label="Transportista" name="carrier" rules={[{ required: true, message: 'Seleccione un transportista' }]}>
                                                      <Select
                                                        placeholder="Selecciona Transportista"
                                                        onChange={(value) => {
                                                          setSelectedCarrier(value);
                                                          form.setFieldsValue({ vehicle: undefined });
                                                        }}
                                                        value={selectedCarrier}
                                                      >
                                                        {carriers.map((carrier) => (
                                                          <Select.Option key={carrier.id} value={carrier.id}>
                                                            {carrier.Name}
                                                          </Select.Option>
                                                        ))}
                                                      </Select>
                                                    </Form.Item>
                                                  </Col>
                                                  <Col xs={24} sm={24} md={8} lg={8} xl={7} className="gutter-row">
                                                    <Form.Item label="Furgón" name="vehicle" rules={[{ required: true, message: 'Seleccione un vehículo' }]}>
                                                      <Select
                                                        placeholder="Selecciona Vehículo (solo VAN)"
                                                        disabled={!selectedCarrier}
                                                        value={form.getFieldValue('vehicle')}
                                                      >
                                                        {selectedCarrier &&
                                                          carriers
                                                            .find((carrier) => carrier.id === selectedCarrier)
                                                            ?.sm_vehicle.filter((veh) => veh.SM_VehicleType === "VAN")
                                                            .map((veh) => (
                                                              <Select.Option key={veh.id} value={veh.id}>
                                                                {veh.SM_Model} - {veh.SM_DriverName}
                                                              </Select.Option>
                                                            ))}
                                                      </Select>
                                                    </Form.Item>
                                                  </Col>

                                                  <Col xs={24} sm={24} md={8} lg={8} xl={5} className="gutter-row">
                                                    <Form.Item
                                                      name="drawerCaladas"
                                                      label="#Gavetas Caladas"
                                                      rules={[{ required: true, message: 'Por favor indique el número de gavetas caladas' }]}
                                                    >
                                                      <InputNumber
                                                        value={form.getFieldValue('drawerCaladas')}
                                                        onChange={(value) => {
                                                          form.setFieldsValue({ drawerCaladas: value });
                                                        }}
                                                      />
                                                    </Form.Item>
                                                  </Col>
                                                  <Col xs={24} sm={24} md={8} lg={8} xl={5} className="gutter-row">
                                                    <Form.Item
                                                      name="drawerSolidas"
                                                      label="#Gavetas Sólidas"
                                                      rules={[{ required: true, message: 'Por favor indique el número de gavetas sólidas' }]}
                                                    >
                                                      <InputNumber
                                                        value={form.getFieldValue('drawerSolidas')}
                                                        onChange={(value) => {
                                                          form.setFieldsValue({ drawerSolidas: value });
                                                        }}
                                                      />
                                                    </Form.Item>
                                                  </Col>
                                                </Row>


                                                <Row justify="center" gutter={16} style={{ marginBottom: 15 }}>
                                                  <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                    <div style={{ marginBottom: 15 }}>
                                                      <Button
                                                        size="default"
                                                        type="primary"
                                                        onClick={() => {
                                                          form
                                                            .validateFields()
                                                            .then(() => {
                                                              const usedKitIds = new Set(
                                                                [...addedFurgones.map(furgon => furgon.kitId),
                                                                ...organizationFishingDrawerStamp
                                                                  .map(bin => bin.SM_SecurityKits_ID && bin.SM_SecurityKits_ID.id)
                                                                  .filter(id => id !== undefined && id !== null)]
                                                              );

                                                              const usedVehicleIds = new Set(
                                                                [...addedFurgones.map(furgon => furgon.vehicleId),
                                                                ...organizationFishingDrawerStamp
                                                                  .map(bin => bin.sm_vehicle_id)
                                                                  .filter(id => id !== undefined && id !== null)]
                                                              );

                                                              const availableKits = availableKitsState.filter(
                                                                kit => !usedKitIds.has(kit.id)
                                                              );

                                                              const availableVehicles = availableVehiclesState.filter(
                                                                vehicle => !usedVehicleIds.has(vehicle.id)
                                                              );

                                                              if (availableKits.length > 0 && availableVehicles.length > 0) {
                                                                const kitMatch = availableKits[0];
                                                                const vehicleId = form.getFieldValue('vehicle');

                                                                if (usedVehicleIds.has(vehicleId)) {
                                                                  message.error("Este vehículo ya está asignado");
                                                                  return;
                                                                }


                                                                const selectedVeh =
                                                                  carriers.find((carrier) => carrier.id === selectedCarrier)
                                                                    ?.sm_vehicle.find((veh) => veh.id === vehicleId) || {};

                                                                const newFurgon = {
                                                                  key: Date.now(), // ID único temporal
                                                                  van: `${selectedVeh.SM_Model || ''} - ${selectedVeh.SM_DriverName || ''}`,
                                                                  kitCode: kitMatch.sm_kitcode,
                                                                  seal1: kitMatch.SM_Stamp1,
                                                                  seal2: kitMatch.SM_Stamp2,
                                                                  drawerCaladas: form.getFieldValue('drawerCaladas'),
                                                                  drawerSolidas: form.getFieldValue('drawerSolidas'),
                                                                  kitId: kitMatch.id, // Para control interno y evitar reutilización
                                                                  vehicleId: vehicleId, // Para evitar la reutilización del vehículo
                                                                };

                                                                dispatch(submitDrawerStampV2(fishingId, newFurgon, (success, message) => {
                                                                  if (success) {
                                                                    setAddedFurgones([...addedFurgones, newFurgon]);
                                                                    setAvailableKitsState(availableKits.slice(1));
                                                                    setAvailableVehiclesState(availableVehicles.filter(v => v.id !== vehicleId));
                                                                    form.resetFields(['vehicle', 'drawerCaladas', 'drawerSolidas']);
                                                                  } else {
                                                                    console.log(message)

                                                                  }
                                                                }));

                                                                form.resetFields(['vehicle', 'drawerCaladas', 'drawerSolidas']);
                                                              } else {
                                                                message.error("No hay kits o vehículos disponibles");
                                                              }
                                                            })
                                                            .catch(() => {
                                                              message.error("Revise los datos requeridos");
                                                            });
                                                        }}
                                                      >
                                                        <UilHdd />
                                                        Guardar
                                                      </Button>
                                                      <Button
                                                        size="default"
                                                        type="default"
                                                        onClick={() => {
                                                          cancelDrawerStampForm();
                                                        }}
                                                      >
                                                        Cancelar
                                                      </Button>
                                                    </div>
                                                  </Col>

                                                </Row>
                                              </GridStyleGutter>
                                            </Form>}


                                            <div style={{ marginBottom: 15, marginTop: 15 }}>
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


                                            <DataTable
                                              tableData={addedFurgones}
                                              columns={furgonesColumns}
                                              key="furgon"
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
                                    <Cards bodyStyle={{ borderRadius: 10 }} headless>
                                      <Cards headless>

                                        <Heading as="h4">1. Datos de la Coordinación {loading && <Spin />}</Heading>
                                        <CustomTable data={coordData} pairsPerRow={2} />
                                      </Cards>
                                      <Cards headless>
                                        <div>
                                          <Heading as="h5">2. Información de Gavetas</Heading>
                                        </div>

                                        <Row gutter={18}>
                                          <Col sm={6} xs={24}>
                                            <CustomTable data={summaryData} pairsPerRow={1} />

                                          </Col>
                                          <Col sm={18} xs={24}>
                                            <DataTable
                                              tableData={addedFurgones}
                                              columns={furgonesColumns}
                                              key="furgon"
                                              rowSelection={false}
                                            />
                                          </Col>
                                        </Row>


                                      </Cards>
                                    </Cards>
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
