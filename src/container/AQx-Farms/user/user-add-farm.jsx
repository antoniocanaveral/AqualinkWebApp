import React, { useEffect, useState, useMemo } from 'react';
import { Form, Select, Button, message, Row, Col, Input } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRolesByClient, createUserFarm, sendAuditorEmailProcess } from '../../../redux/user/actionCreator';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';

const AddUserFarm = () => {
  const dispatch = useDispatch();
  const { rolesLoading, roles } = useSelector((state) => state.roles);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);
  const farmsOrgs = useSelector((state) => state.auth.farmsOrgs);
  const labsOrgs = useSelector((state) => state.auth.labsOrgs);
  const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);

  const [form] = Form.useForm();

  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedOrgId, setSelectedOrgId] = useState(null);
  const [selectedSalesRegionId, setSelectedSalesRegionId] = useState(null);

  useEffect(() => {
    dispatch(fetchRolesByClient());

  }, [dispatch]);

  const areas = [...new Set(
    roles
      .filter(role => role.Description)
      .map(role => role.Description.split(' - ')[0])
  )];

  const rolesByArea = selectedArea
    ? roles.filter(role => role.Description?.startsWith(selectedArea))
    : [];

  const handleAreaChange = (value) => {
    setSelectedArea(value);
    setSelectedRole(null);
    form.resetFields(['rol', 'pools', 'orgGroups']);
  };

  const selectedRoleObj = roles.find(role => role.id === selectedRole);


  const handleRoleChange = (value) => {
    console.log(value)
    console.log(selectedRoleObj)
    setSelectedRole(value);
    setSelectedOrgId(null);
    setSelectedSalesRegionId(null);
    form.resetFields(['pools', 'orgGroups']);
  };

  const orgOptions = useMemo(() =>
    (farmsOrgsWithPools || []).map(org => ({
      value: org.orgId,
      label: org.orgName,
    })),
    [farmsOrgsWithPools]
  );

  const salesRegionsOptions = useMemo(() => {
    if (!selectedOrgId) return [];
    const org = farmsOrgsWithPools.find(o => o.orgId === selectedOrgId);
    if (!org?.pools) return [];

    return org.pools.reduce((acc, pool) => {
      const region = pool.salesRegion;
      if (region && !acc.some(r => r.value === region.id)) {
        acc.push({
          value: region.id,
          label: region.name,
        });
      }
      return acc;
    }, []);
  }, [selectedOrgId, farmsOrgsWithPools]);

  const poolOptions = useMemo(() => {
    if (!selectedOrgId || !selectedSalesRegionId) return [];
    const org = farmsOrgsWithPools.find(o => o.orgId === selectedOrgId);
    return (org?.pools || [])
      .filter(pool => pool.salesRegion?.id === selectedSalesRegionId)
      .map(pool => ({
        value: pool.poolId,
        label: pool.poolName,
      }));
  }, [selectedOrgId, selectedSalesRegionId, farmsOrgsWithPools]);

  const getOptionsForType = (type) => {
    if (type === 'finca') {
      return (farmsOrgs || []).map(org => ({
        value: org.orgId,
        label: org.orgName,
      }));
    }
    if (type === 'laboratorio') {
      return (labsOrgs || []).map(org => ({
        value: org.orgId,
        label: org.orgName,
      }));
    }
    if (type === 'empacadora') {
      return (custodyOrgs || []).map(org => ({
        value: org.orgId,
        label: org.orgName,
      }));
    }
    return [];
  };



  const handleSubmit = async (values) => {
    if (selectedRoleObj?.Description === 'Cumplimiento - Auditor Externo') {
      let orgNames = [];
      if (values.orgGroups && Array.isArray(values.orgGroups)) {
        values.orgGroups.forEach(group => {
          const { type, orgIds } = group;
          if (orgIds && Array.isArray(orgIds)) {
            const options = getOptionsForType(type);
            orgIds.forEach(orgId => {
              const foundOption = options.find(option => option.value === orgId);
              if (foundOption) {
                orgNames.push(foundOption.label);
              }
            });
          }
        });
      }
      const concatenatedOrgs = orgNames.join(', ');
      values.orgsConcatenated = concatenatedOrgs;
      console.log('Valores enviados (Auditor Externo):', values);
      dispatch(sendAuditorEmailProcess(values));

      return;
    } else {
      if (selectedRoleObj?.has_warehouses) {
        if (!selectedOrgId || !selectedSalesRegionId) {
          message.error('Debe seleccionar una organización y un sector');
          return;
        }
      }
      console.log('Valores enviados:', values);
      message.warning('No se obtuvo FCM Token. El usuario se creará sin notificaciones.');
      dispatch(createUserFarm(values, selectedOrgId));

      setSelectedOrgId(null);
      setSelectedSalesRegionId(null);
    }
    form.resetFields();
  };


  return (
    <>
      <PageHeader
        highlightText="AquaLink Administración"
        title="Añadir Usuarios"
      />
      <Main>
        <Cards headless border>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            {/* Selección de Área y Rol */}
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Área"
                  name="area"
                  rules={[{ required: true, message: 'Selecciona un área' }]}
                >
                  <Select
                    onChange={handleAreaChange}
                    placeholder="Selecciona un área"
                    loading={rolesLoading}
                  >
                    {areas.map(area => (
                      <Select.Option key={area} value={area}>
                        {area}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              {selectedArea && (
                <Col span={8}>
                  <Form.Item
                    label="Rol"
                    name="rol"
                    rules={[{ required: true, message: 'Selecciona un rol' }]}
                  >
                    <Select onChange={handleRoleChange} placeholder="Selecciona un rol">
                      {rolesByArea.map(role => (
                        <Select.Option key={role.id} value={role.id}>
                          {role.Description.split(' - ')[1]}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              )}
            </Row>

            {/* Renderizado condicional según el rol seleccionado */}
            {selectedRoleObj && selectedRoleObj.Description === 'Cumplimiento - Auditor Externo' ? (
              <>
                {/* Campos para Auditor Externo */}
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label="Nombre"
                      name="nombre"
                      rules={[{ required: true, message: 'Por favor, ingresa el nombre' }]}
                    >
                      <Input placeholder="Nombre" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Cédula"
                      name="cc"
                      rules={[{ required: true, message: 'Por favor, ingresa la cédula' }]}
                    >
                      <Input placeholder="Cédula" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Teléfono"
                      name="telefono"
                      rules={[{ required: true, message: 'Por favor, ingresa el teléfono' }]}
                    >
                      <Input
                        addonBefore={
                          <Form.Item name="codigoPais" noStyle rules={[{ required: true, message: 'Código requerido' }]}>
                            <Select style={{ width: 200 }} placeholder="+XX">
                              {/* Latinoamérica */}
                              <Select.Option value="+57">+57 (Colombia)</Select.Option>
                              <Select.Option value="+593">+593 (Ecuador)</Select.Option>
                              <Select.Option value="+51">+51 (Perú)</Select.Option>
                              <Select.Option value="+54">+54 (Argentina)</Select.Option>
                              <Select.Option value="+56">+56 (Chile)</Select.Option>
                              <Select.Option value="+52">+52 (México)</Select.Option>
                              <Select.Option value="+507">+507 (Panamá)</Select.Option>
                              <Select.Option value="+503">+503 (El Salvador)</Select.Option>
                              <Select.Option value="+598">+598 (Uruguay)</Select.Option>
                              <Select.Option value="+1">+1 (EE.UU./Canadá)</Select.Option>
                            </Select>
                          </Form.Item>
                        }
                        placeholder="Teléfono"
                      />
                    </Form.Item>
                  </Col>

                </Row>

                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label="Correo Electrónico"
                      name="correo"
                      rules={[
                        { required: true, message: 'Por favor, ingresa un correo electrónico' },
                        { type: 'email', message: 'El correo no es válido' }
                      ]}
                    >
                      <Input placeholder="Correo electrónico" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="ASC"
                      name="asc"
                      rules={[{ required: true, message: 'Seleccione un ASC' }]}
                    >
                      <Select placeholder="Seleccione un ASC">
                        <Select.Option value="BAP">BAP</Select.Option>
                        <Select.Option value="GLOBAL GAP">GLOBAL GAP</Select.Option>
                        <Select.Option value="BRC">BRC</Select.Option>
                        <Select.Option value="EURO LEAF">EURO LEAF</Select.Option>
                        <Select.Option value="NATURE LAND">NATURE LAND</Select.Option>
                        <Select.Option value="BASC">BASC</Select.Option>
                        <Select.Option value="GLOBAL DIALOGUE ON SEAFOOD TRACEABILITY">
                          GLOBAL DIALOGUE ON SEAFOOD TRACEABILITY
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                {/* Selector para agrupaciones de organizaciones */}
                <Form.List name="orgGroups">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(field => (
                        <Row key={field.key} gutter={16} align="middle">
                          <Col span={6}>
                            <Form.Item
                              {...field}
                              label="Tipo de Organización"
                              name={[field.name, 'type']}
                              fieldKey={[field.fieldKey, 'type']}
                              rules={[{ required: true, message: 'Seleccione un tipo' }]}
                            >
                              <Select placeholder="Seleccione un tipo">
                                <Select.Option value="finca">Finca</Select.Option>
                                <Select.Option value="laboratorio">Laboratorio</Select.Option>
                                <Select.Option value="empacadora">Empacadora</Select.Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={14}>
                            <Form.Item
                              label="Organización"
                              shouldUpdate={(prevValues, curValues) =>
                                prevValues.orgGroups?.[field.name]?.type !== curValues.orgGroups?.[field.name]?.type
                              }
                            >
                              {() => {

                                const typeValue = form.getFieldValue(['orgGroups', field.name, 'type']);
                                return (
                                  <Form.Item
                                    {...field}
                                    name={[field.name, 'orgIds']}
                                    fieldKey={[field.fieldKey, 'orgIds']}
                                    rules={[{ required: true, message: 'Seleccione al menos una organización' }]}
                                    noStyle
                                  >
                                    <Select
                                      mode="multiple"
                                      placeholder="Seleccione organizaciones"
                                      options={getOptionsForType(typeValue)}
                                    />
                                  </Form.Item>
                                );
                              }}
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Button onClick={() => remove(field.name)}>Eliminar</Button>
                          </Col>
                        </Row>
                      ))}
                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block>
                          Añadir Organización
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>

              </>
            ) : (

              <>
                {selectedRoleObj?.has_warehouses && (
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item label="Organización" required>
                        <Select
                          placeholder="Selecciona una organización"
                          value={selectedOrgId}
                          onChange={(value) => {
                            setSelectedOrgId(value);
                            setSelectedSalesRegionId(null);
                            form.setFieldsValue({ pools: [] });
                          }}
                          options={orgOptions}
                        />
                      </Form.Item>
                    </Col>

                    {selectedOrgId && (
                      <Col span={8}>
                        <Form.Item label="Sector" required>
                          <Select
                            placeholder="Selecciona un sector"
                            value={selectedSalesRegionId}
                            onChange={(value) => {
                              setSelectedSalesRegionId(value);
                              form.setFieldsValue({ pools: [] });
                            }}
                            options={salesRegionsOptions}
                          />
                        </Form.Item>
                      </Col>
                    )}

                    {selectedSalesRegionId && (
                      <Col span={16}>
                        <Form.Item
                          label="Piscinas"
                          name="pools"
                          rules={[{ required: true, message: 'Selecciona al menos una piscina' }]}
                        >
                          <Select
                            mode="multiple"
                            placeholder="Selecciona piscinas"
                            options={poolOptions}
                          />
                        </Form.Item>
                      </Col>
                    )}
                  </Row>
                )}

                {/* Resto de campos para otros roles */}
                {selectedRole && (
                  <>
                    <Row gutter={16}>
                      <Col span={8}>
                        <Form.Item
                          label="Nombre"
                          name="nombre"
                          rules={[{ required: true, message: 'Por favor, ingresa el nombre' }]}
                        >
                          <Input placeholder="Nombre" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Cédula"
                          name="cc"
                          rules={[{ required: true, message: 'Por favor, ingresa la cédula' }]}
                        >
                          <Input placeholder="Cédula" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Teléfono"
                          name="telefono"
                          rules={[{ required: true, message: 'Por favor, ingresa un teléfono' }]}
                        >
                          <Input placeholder="Teléfono celular" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={8}>
                        <Form.Item
                          label="Correo Electrónico"
                          name="correo"
                          rules={[
                            { required: true, message: 'Por favor, ingresa un correo electrónico' },
                            { type: 'email', message: 'El correo no es válido' }
                          ]}
                        >
                          <Input placeholder="Correo electrónico" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Clave de acceso"
                          name="claveAcceso"
                          rules={[
                            { required: true, message: 'Por favor, ingresa una clave de acceso' },
                            { pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, message: 'Debe tener al menos 8 caracteres, una mayúscula y un número' }
                          ]}
                        >
                          <Input.Password placeholder="Clave de acceso" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label="Confirmar clave"
                          name="confirmarClave"
                          dependencies={['claveAcceso']}
                          rules={[
                            { required: true, message: 'Por favor, confirma la clave de acceso' },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('claveAcceso') === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error('Las claves no coinciden'));
                              }
                            })
                          ]}
                        >
                          <Input.Password placeholder="Confirmar clave" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                )}
              </>
            )}

            <Row justify="end" style={{ marginTop: '20px' }}>
              <Col>
                <Button type="primary" htmlType="submit">
                  Guardar
                </Button>
              </Col>
            </Row>
          </Form>
        </Cards>
      </Main>
    </>
  );
};

export default AddUserFarm;
