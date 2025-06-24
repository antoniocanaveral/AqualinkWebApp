import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Form, Select, Skeleton, message, Spin, DatePicker, TimePicker, Input, InputNumber, Modal, Table } from 'antd';
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
import { useNavigate } from 'react-router-dom';
import DataTable from '../../components/table/DataTable';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';
import Alert from '../../components/alerts/alerts';
import UilLayers from '@iconscout/react-unicons/icons/uil-layers';
import { StepsCoords } from '../../components/steps/stepsCoords';
import CustomTable from '../AQx-Labs/CustomTable';
import { fetchOrgBins, fetchOrgSecurityKits, fetchTreaters } from '../../redux/bines-drawers/actionCreator';
// Importar las acciones de bins desde el módulo smBin
import { fetchBins } from '../../redux/bin/actionCreator';

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

  // Usar los bins del módulo smBin como en inventario
  const { bins, loading: binsLoading, error: binsError } = useSelector((state) => state.smBin || {});
  const { organizationSecurityKits } = useSelector((state) => state.bin_drawers || {});

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
    },
    bineForm: {
      bineIce: "",
      bineMetabisulfito: "",
    },
    selectedTreater: undefined,
  });

  const { treaters, treatersLoading } = useSelector((state) => state.bin_drawers || {});

  const { status, isFinished, current } = state;

  const [binModalVisible, setBinModalVisible] = useState(false);
  const [selectedBines, setSelectedBines] = useState([]);
  const [rangeStart, setRangeStart] = useState(null);
  
  const normalizedBins = bins ? bins.map(bin => {
  console.log('Bin data:', bin); // Para debug
  return {
    sm_bin_id: bin.id || bin.sm_bin_id,
    id: bin.id || bin.sm_bin_id,
    name: bin.Name || bin.name,
    Name: bin.Name || bin.name,
    // Convertir Name a número para comparaciones
    nameNumber: parseInt(bin.Name || bin.name) || 0,
    sm_status: bin.sm_status,
    sm_description: bin.sm_description,
    isactive: bin.IsActive ? 'Y' : 'N' || bin.isactive || 'Y',
    SM_Fishing_ID: bin.SM_Fishing_ID,
    // Determinar si está ocupado SOLO basándose en el estado sm_status
    isOccupied: bin.sm_status === 'OCUPADO'
  };
}).sort((a, b) => a.nameNumber - b.nameNumber) : []; // Ordenar por número de bin

// Agregar debug para ver el estado
console.log('Normalized bins:', normalizedBins);

// Lógica de selección simplificada - solo para el modal
const toggleBinSelection = (bin) => {
  // Verificar si está ocupado usando solo sm_status
  if (bin.sm_status === 'OCUPADO') return;

  const isAlreadySelected = selectedBines.find(b => b.id === bin.id);

  if (isAlreadySelected) {
    // Deseleccionar
    setSelectedBines(selectedBines.filter(b => b.id !== bin.id));
    setRangeStart(null);
    return;
  }

  if (rangeStart === null) {
    // Primera selección - marcar como inicio de rango
    setSelectedBines([...selectedBines, bin]);
    setRangeStart(bin.nameNumber);
  } else {
    // Segunda selección - completar rango
    const start = Math.min(rangeStart, bin.nameNumber);
    const end = Math.max(rangeStart, bin.nameNumber);

    // Filtrar bins en el rango por nameNumber
    const binsInRange = normalizedBins.filter(b => {
      const binNumber = b.nameNumber;
      return binNumber >= start && 
             binNumber <= end && 
             b.sm_status !== 'OCUPADO' && // Verificar directamente el estado
             !selectedBines.find(sb => sb.id === b.id);
    });

    setSelectedBines([...selectedBines, ...binsInRange]);
    setRangeStart(null);
  }
};


  const clearSelection = () => {
    setSelectedBines([]);
    setRangeStart(null);
  };

  useEffect(() => {
    dispatch(loadCustodyCoord(id, () => { }));
    dispatch(loadBinesByCoord(id, (isSuccess, bines) => { }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchBins());
    dispatch(fetchOrgSecurityKits("BIN"));
    dispatch(fetchTreaters());
  }, [dispatch]);

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

  const getSuggestedBinesCount = () => {
    let count = 0;
    if (coordination) {
      count = Number(Math.ceil(parseFloat(coordination.fishing_volume) / 1200)).toFixed(0);
    }
    return count;
  };

  const next = () => {
    return new Promise((resolve, reject) => {
      if (current === 0) {
        setState({
          ...state,
          status: 'process',
          current: current + 1,
        });
        resolve();
      } else if (current === 1) {
        if (isBinesCountCompleted()) {
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
    const confirm = window.confirm('Confirma que desea enviar esta información de Bines?');
    if (confirm) {
      const { bineIce, bineMetabisulfito } = state.bineForm;
      dispatch(sendBinInfo(fishingId, state.selectedTreater, coordination.SM_Coordination_ID.id, bineIce, bineMetabisulfito, (success) => {
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
      }));
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
  };

  const getBinesCount = () => {
    let count = 0;
    if (bines) {
      count = bines.length;
    }
    return count;
  };

  const isBinesCountCompleted = () => {
    return getBinesCount() >= getSuggestedBinesCount();
  };

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

  const buildSelectedBinsTableData = () => {
    const usedKitIds = new Set(
      normalizedBins
        .map(bin => bin.SM_SecurityKits_ID && bin.SM_SecurityKits_ID.id)
        .filter(id => id !== undefined && id !== null)
    );

    const availableKits = organizationSecurityKits.filter(
      kit => !usedKitIds.has(kit.id)
    );

    const kitsDisponibles = [...availableKits];
    const binDataMap = new Map();

    // Ordenar selectedBines por nameNumber antes de procesar
    const sortedSelectedBines = [...selectedBines].sort((a, b) => a.nameNumber - b.nameNumber);

    sortedSelectedBines.forEach((bin) => {
      if (!binDataMap.has(bin.id) && kitsDisponibles.length > 0) {
        const kitMatch = kitsDisponibles.shift();
        binDataMap.set(bin.id, {
          key: bin.id,
          bin: bin.name,
          sm_securitykits_id: kitMatch.id,
          sm_kitcode: kitMatch.sm_kitcode,
          seal1: kitMatch.SM_Stamp1,
          seal2: kitMatch.SM_Stamp2,
          seal3: kitMatch.SM_Stamp3,
          seal4: kitMatch.SM_Stamp4,
          sm_tag: kitMatch.sm_tag,
        });
      }
    });

    return Array.from(binDataMap.values());
  };

  const tableDataSource = buildSelectedBinsTableData();

  const columns = [
    { title: 'No. Bin', dataIndex: 'bin', key: 'bin' },
    { title: 'Kit de Seguridad', dataIndex: 'sm_kitcode', key: 'sm_kitcode' },
    { title: 'SM_Stamp1', dataIndex: 'seal1', key: 'seal1' },
    { title: 'SM_Stamp2', dataIndex: 'seal2', key: 'seal2' },
    { title: 'SM_Stamp3', dataIndex: 'seal3', key: 'seal3' },
    { title: 'SM_Stamp4', dataIndex: 'seal4', key: 'seal4' },
    { title: 'sm_tag', dataIndex: 'sm_tag', key: 'sm_tag' },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, record) => (
        <Button
          type="danger"
          icon={<UilTrash />}
          onClick={() => {
            setSelectedBines(selectedBines.filter(bin => bin.id !== record.key));
          }}
        >
          Eliminar
        </Button>
      ),
    },
  ];

  // Renderizar contenido de bins simplificado - solo mostrar el botón del modal
  const renderBinsContent = () => {
    if (binsLoading) {
      return <div>Cargando bines...</div>;
    }

    if (binsError) {
      return (
        <Cards>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Heading as="h4">Error al cargar bines</Heading>
            <p>{binsError}</p>
            <Button onClick={() => dispatch(fetchBins())}>Reintentar</Button>
          </div>
        </Cards>
      );
    }

    if (!normalizedBins || normalizedBins.length === 0) {
      return (
        <Cards>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Heading as="h4">No tienes bines creados</Heading>
            <p>Debe crear bines primero desde el módulo de inventario.</p>
          </div>
        </Cards>
      );
    }

    return (
      <div style={{ marginBottom: 16, textAlign: 'center' }}>
        <Button
          type="primary"
          size="large"
          onClick={() => setBinModalVisible(true)}
        >
          Seleccionar Bines ({selectedBines.length} seleccionados)
        </Button>
        {selectedBines.length > 0 && (
          <Button
            type="default"
            style={{ marginLeft: 8 }}
            onClick={clearSelection}
          >
            Limpiar Selección
          </Button>
        )}
      </div>
    );
  };

  return (
    <>
      <PageHeader onBack={() => window.history.back()} title={`Bines para coordinación: ${coordination ? coordination.SM_FishingNotification : "-"}`} routes={PageRoutes} />
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
                                title: 'Información de Bines',
                                className: 'wizard-step-item',
                                icon: <UilFileCheckAlt />,
                                content: (
                                  <BasicFormWrapper className="basic-form-inner" style={{ width: '80%' }}>
                                    <div className="atbd-form-checkout">
                                      <Row justify="center">
                                        <Col sm={22} xs={24}>
                                          <div className="shipping-form">
                                            <Heading as="h4">2. Información de Bines</Heading>
                                            <div style={{ marginBottom: 15 }}>
                                              <Alert
                                                showIcon
                                                icon={<UilLayers />}
                                                message="Cantidad de Bines"
                                                description={`El volumen de pesca es ${coordination ? coordination.fishing_volume : ""} lbs, cada bin tiene una capacidad máxima de 1200 lbs, para poder enviar la información de esta coordinación necesita registrar al menos un total de ${getSuggestedBinesCount()} bin${getSuggestedBinesCount() > 1 ? 'es' : ''}.`}
                                                type="info"
                                              />
                                            </div>

                                            {/* Solo mostrar el botón para abrir el modal */}
                                            {renderBinsContent()}

                                            {selectedBines.length > 0 && (
                                              <>
                                                <div style={{ marginTop: '10px' }}>
                                                  <Table
                                                    dataSource={tableDataSource}
                                                    columns={columns}
                                                    pagination={false}
                                                    title={() => `Bines Seleccionados (${selectedBines.length})`}
                                                  />
                                                </div>
                                                <br />
                                                <Row justify="center" gutter={16} style={{ marginBottom: 15 }}>
                                                  <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
                                                    <div style={{ marginBottom: 15 }}>
                                                      <Button
                                                        size="default"
                                                        type="primary"
                                                        onClick={() => {
                                                          dispatch(
                                                            submitBin(fishingId, tableDataSource, (isSuccess, msg) => {
                                                              if (isSuccess) {
                                                                message.success("Los bines se registraron con éxito!");
                                                                dispatch(loadBinesByCoord(id, () => {
                                                                  cancelBinForm();
                                                                }));
                                                              } else {
                                                                message.error(msg);
                                                              }
                                                            })
                                                          );
                                                        }}
                                                      >
                                                        <UilHdd />
                                                        Guardar
                                                      </Button>
                                                      <Button size="default" type="default" onClick={() => cancelBinForm()}>
                                                        Cancelar
                                                      </Button>
                                                    </div>
                                                  </Col>
                                                </Row>
                                              </>
                                            )}

                                            <Row justify="center" gutter={16} style={{ marginBottom: 15 }}>
                                              <Col xs={24} sm={24} md={12} lg={12} xl={6} className="gutter-row">
                                                <Form.Item name="bineIce" label="Hielo (#Sacos)" rules={[{ required: true, message: 'Por favor ingrese la cantidad de hielo' }]}>
                                                  <InputNumber
                                                    value={state.bineForm.bineIce}
                                                    onChange={(value) => {
                                                      setState({
                                                        ...state,
                                                        bineForm: {
                                                          ...state.bineForm,
                                                          bineIce: value,
                                                        },
                                                      });
                                                    }}
                                                  />
                                                </Form.Item>
                                              </Col>
                                              <Col xs={24} sm={24} md={12} lg={12} xl={6} className="gutter-row">
                                                <Form.Item name="bineMetabisulfito" label="Metabisulfitos (kg)" rules={[{ required: true, message: 'Por favor ingrese la cantidad de metabisulfitos' }]}>
                                                  <InputNumber
                                                    value={state.bineForm.bineMetabisulfito}
                                                    onChange={(value) => {
                                                      setState({
                                                        ...state,
                                                        bineForm: {
                                                          ...state.bineForm,
                                                          bineMetabisulfito: value,
                                                        },
                                                      });
                                                    }}
                                                  />
                                                </Form.Item>
                                              </Col>

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
                                    <BasicFormWrapper style={{ width: '100%' }}>
                                      <Heading as="h4">3. Resumen</Heading>
                                      <Cards bodyStyle={{ borderRadius: 10 }} headless>
                                        <div className="atbd-review-order__single">
                                          <Cards headless>
                                            <div className="atbd-review-order__shippingTitle">
                                              <Heading as="h5">Coordinación</Heading>
                                              <CustomTable data={coordData} pairsPerRow={2} />
                                            </div>
                                          </Cards>
                                        </div>
                                        <div className="atbd-review-order__single">
                                          <Cards headless>
                                            <div>
                                              <Heading as="h5">Información de Bines</Heading>
                                            </div>
                                            {selectedBines.length > 0 && (
                                              <>
                                                <div style={{ marginTop: '10px' }}>
                                                  <Table
                                                    dataSource={tableDataSource}
                                                    columns={columns.filter(col => col.key !== 'actions')}
                                                    pagination={false}
                                                  />
                                                </div>
                                                <br />
                                              </>
                                            )}
                                          </Cards>
                                        </div>
                                      </Cards>
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

      {/* Modal para seleccionar bines */}
      <Modal
        title="Seleccionar Bines"
        visible={binModalVisible}
        onOk={() => setBinModalVisible(false)}
        onCancel={() => setBinModalVisible(false)}
        width={1200}
        footer={[
          <Button key="clear" onClick={clearSelection}>
            Limpiar Todo
          </Button>,
          <Button key="cancel" onClick={() => setBinModalVisible(false)}>
            Cancelar
          </Button>,
          <Button key="ok" type="primary" onClick={() => setBinModalVisible(false)}>
            Aceptar ({selectedBines.length} seleccionados)
          </Button>
        ]}
      >
        <div style={{ marginBottom: 16 }}>
          <Row justify="space-between" align="middle">
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span><strong>Total de Bines:</strong> {normalizedBins.length}</span>
                <span><strong>Seleccionados:</strong> {selectedBines.length}</span>
                <span><strong>Requeridos:</strong> {getSuggestedBinesCount()}</span>
              </div>
            </Col>
            <Col>
              <Button
                type={rangeStart !== null ? "primary" : "default"}
                onClick={() => {
                  setRangeStart(null);
                  message.info(rangeStart !== null ? "Selección por rango cancelada" : "Modo selección individual");
                }}
              >
                {rangeStart !== null ? `Cancelar rango (desde ${rangeStart})` : "Modo Individual"}
              </Button>
            </Col>
          </Row>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '8px',
            maxHeight: '500px',
            overflowY: 'auto',
            padding: '16px',
            border: '1px solid #f0f0f0',
            borderRadius: '6px',
            backgroundColor: '#fafafa'
          }}
        >
          {normalizedBins.map((bin) => {
            // Usar la propiedad isOccupied para determinar el estado
            const isOccupied = bin.isOccupied;
            const isSelected = selectedBines.find(b => b.id === bin.id);
            const isRangeStart = rangeStart === bin.nameNumber;

            return (
              <Button
                key={bin.id}
                style={{
                  height: '45px',
                  width: '45px',
                  padding: 0,
                  backgroundColor: isOccupied
                    ? '#f5222d'
                    : isRangeStart
                      ? '#722ed1'
                      : isSelected
                        ? '#1890ff'
                        : '#52c41a',
                  color: '#fff',
                  border: isRangeStart ? '3px solid #722ed1' : '1px solid #d9d9d9',
                  fontWeight: 'bold',
                  fontSize: '12px'
                }}
                disabled={isOccupied}
                onClick={() => toggleBinSelection(bin)}
                title={isOccupied ? `Bin ocupado - Estado: ${bin.sm_status}` : `Bin ${bin.name} - ${bin.sm_status}`}
              >
                {bin.name}
              </Button>
            );
          })}
        </div>

        <div style={{ marginTop: 16, fontSize: '12px', color: '#666' }}>
          <p><strong>Instrucciones:</strong></p>
          <ul>
            <li><span style={{ color: '#52c41a' }}>■</span> Verde: Disponible</li>
            <li><span style={{ color: '#1890ff' }}>■</span> Azul: Seleccionado</li>
            <li><span style={{ color: '#722ed1' }}>■</span> Morado: Inicio de rango</li>
            <li><span style={{ color: '#f5222d' }}>■</span> Rojo: Ocupado</li>
          </ul>
          <p>Para selección por rango: clic en el primer bin, luego en el último bin del rango deseado.</p>
        </div>
      </Modal>
    </>
  );
}

export default CoordinationCustodyBines;