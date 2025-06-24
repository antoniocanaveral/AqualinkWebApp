import { Alert, Button, Col, Form, InputNumber, message, Row, Select } from "antd";
import { submitDrawerStampV2 } from "../../../../redux/custody/actionCreator";
import CustomTable from "../../../AQx-Labs/CustomTable";
import { BasicFormWrapper, GridStyleGutter } from "../../../styled";
import UilEdit from "@iconscout/react-unicons/icons/uil-edit";
import UilLayers from "@iconscout/react-unicons/icons/uil-layers";
import UilHdd from "@iconscout/react-unicons/icons/uil-hdd";

const DrawerInfoForm = ({
  form,
  state,
  setState,
  carriers,
  organizationFishingDrawerStamp,
  availableKitsState,
  availableVehiclesState,
  addedFurgones,
  selectedCarrier,
  setSelectedCarrier,
  dispatch,
  fishingId,
  cancelDrawerStampForm
}) => {

  const summaryData = [
    { key: '2', label: 'Hielo (#Sacos):', value: `${state.drawerForm.drawerIce} saco${state.drawerForm.drawerIce > 1 ? 's' : ''}` },
    { key: '3', label: 'Metabisulfitos (kg):', value: `${state.drawerForm.drawerMetabisulfito} kg` },
  ];

  return (
    <BasicFormWrapper className="basic-form-inner" style={{ width: '80%' }}>
      <div className="atbd-form-checkout">
        <Row justify="center">
          <Col sm={22} xs={24}>
            <h4>2. Información de Gavetas</h4>
            {!state.showForm ? (
              <>
                <Form form={form} name="drawerForm">
                  <div style={{ marginBottom: 15 }}>
                    <Alert
                      showIcon
                      icon={<UilLayers />}
                      message="Cantidad de Gavetas"
                      description={`El volumen de pesca es ${state.coordVolume || ''} lbs, cada gaveta tiene una capacidad máxima de 45 lbs. Se requiere registrar al menos ${state.suggestedDrawerCount} gaveta${state.suggestedDrawerCount > 1 ? 's' : ''}.`}
                      type="info"
                    />
                  </div>
                  <Row>
                    <Col sm={10} xs={24}>
                      <Form.Item
                        name="drawerIce"
                        label="Hielo (#Sacos)"
                        initialValue={state.drawerForm.drawerIce}
                        rules={[
                          { required: true, message: 'Por favor ingrese la cantidad de hielo' },
                          { type: "integer", message: "Debes ingresar un número entero" },
                        ]}
                      >
                        <InputNumber
                          value={state.drawerForm.drawerIce}
                          onChange={(value) =>
                            setState({ ...state, drawerForm: { ...state.drawerForm, drawerIce: value } })
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col sm={10} xs={24}>
                      <Form.Item
                        name="drawerMetabisulfito"
                        label="Metabisulfitos (kg)"
                        initialValue={state.drawerForm.drawerMetabisulfito}
                        rules={[
                          { required: true, message: 'Por favor ingrese la cantidad de metabisulfitos' },
                          { type: "number", message: "Debes ingresar un valor numérico" },
                        ]}
                      >
                        <InputNumber
                          value={state.drawerForm.drawerMetabisulfito}
                          onChange={(value) =>
                            setState({ ...state, drawerForm: { ...state.drawerForm, drawerMetabisulfito: value } })
                          }
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
                <div style={{ marginBottom: 15, marginTop: 15 }}>
                  <Button size="default" type="primary" onClick={() => setState({ ...state, showForm: true })}>
                    <UilEdit />
                    Nuevo Furgón
                  </Button>
                </div>
              </>
            ) : (
              <Form form={form} name="binform">
                <GridStyleGutter>
                  <Row justify="center" gutter={16} style={{ marginBottom: 15 }}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={7}>
                      <Form.Item
                        label="Transportista"
                        name="carrier"
                        rules={[{ required: true, message: 'Seleccione un transportista' }]}
                      >
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
                    <Col xs={24} sm={24} md={8} lg={8} xl={7}>
                      <Form.Item
                        label="Furgón"
                        name="vehicle"
                        rules={[{ required: true, message: 'Seleccione un vehículo' }]}
                      >
                        <Select placeholder="Selecciona Vehículo (solo VAN)" disabled={!selectedCarrier}>
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
                    <Col xs={24} sm={24} md={8} lg={8} xl={5}>
                      <Form.Item
                        name="drawerCaladas"
                        label="#Gavetas Caladas"
                        rules={[{ required: true, message: 'Por favor indique el número de gavetas caladas' }]}
                      >
                        <InputNumber
                          value={form.getFieldValue('drawerCaladas')}
                          onChange={(value) => form.setFieldsValue({ drawerCaladas: value })}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={5}>
                      <Form.Item
                        name="drawerSolidas"
                        label="#Gavetas Sólidas"
                        rules={[{ required: true, message: 'Por favor indique el número de gavetas sólidas' }]}
                      >
                        <InputNumber
                          value={form.getFieldValue('drawerSolidas')}
                          onChange={(value) => form.setFieldsValue({ drawerSolidas: value })}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row justify="center" gutter={16} style={{ marginBottom: 15 }}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <div style={{ marginBottom: 15 }}>
                        <Button
                          size="default"
                          type="primary"
                          onClick={() => {
                            form.validateFields().then(() => {

                              const usedKitIds = new Set([
                                ...addedFurgones.map((furgon) => furgon.kitId),
                                ...organizationFishingDrawerStamp
                                  .map((bin) => bin.SM_SecurityKits_ID && bin.SM_SecurityKits_ID.id)
                                  .filter((id) => id != null),
                              ]);
                              const usedVehicleIds = new Set([
                                ...addedFurgones.map((furgon) => furgon.vehicleId),
                                ...organizationFishingDrawerStamp
                                  .map((bin) => bin.sm_vehicle_id)
                                  .filter((id) => id != null),
                              ]);

                              const availableKits = availableKitsState.filter((kit) => !usedKitIds.has(kit.id));
                              const availableVehicles = availableVehiclesState.filter((vehicle) => !usedVehicleIds.has(vehicle.id));

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
                                  key: Date.now(),
                                  van: `${selectedVeh.SM_Model || ''} - ${selectedVeh.SM_DriverName || ''}`,
                                  kitCode: kitMatch.sm_kitcode,
                                  seal1: kitMatch.SM_Stamp1,
                                  seal2: kitMatch.SM_Stamp2,
                                  drawerCaladas: form.getFieldValue('drawerCaladas'),
                                  drawerSolidas: form.getFieldValue('drawerSolidas'),
                                  kitId: kitMatch.id,
                                  vehicleId: vehicleId,
                                };

                                dispatch(
                                  submitDrawerStampV2(fishingId, newFurgon, (success, msg) => {
                                    if (success) {
                                      setState((prev) => ({
                                        ...prev,
                                        addedFurgones: [...prev.addedFurgones, newFurgon],
                                      }));

                                      setState((prev) => ({
                                        ...prev,
                                        availableKitsState: availableKits.slice(1),
                                        availableVehiclesState: availableVehicles.filter((v) => v.id !== vehicleId),
                                      }));
                                      form.resetFields(['vehicle', 'drawerCaladas', 'drawerSolidas']);
                                    } else {
                                      message.error(msg);
                                    }
                                  })
                                );
                              } else {
                                message.error("No hay kits o vehículos disponibles");
                              }
                            }).catch(() => {
                              message.error("Revise los datos requeridos");
                            });
                          }}
                        >
                          <UilHdd />
                          Guardar
                        </Button>
                        <Button size="default" type="default" onClick={cancelDrawerStampForm}>
                          Cancelar
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </GridStyleGutter>
              </Form>
            )}
            {/* Opcional: mostrar summary de información */}
            {state.showForm && <CustomTable data={summaryData} pairsPerRow={2} />}
          </Col>
        </Row>
      </div>
    </BasicFormWrapper>
  );
};


export default DrawerInfoForm