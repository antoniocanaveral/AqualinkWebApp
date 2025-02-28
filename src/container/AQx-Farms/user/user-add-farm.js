// src/components/AddUserFarm.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { Form, Select, Button, message, Row, Col, Input } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRolesByClient, createUserFarm } from '../../../redux/user/actionCreator';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';

const AddUserFarm = () => {
  const dispatch = useDispatch();
  const { rolesLoading, roles } = useSelector((state) => state.roles);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);
  const [form] = Form.useForm();

  // Estados para la lógica de selección
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedOrgId, setSelectedOrgId] = useState(null);
  const [selectedSalesRegionId, setSelectedSalesRegionId] = useState(null);

  useEffect(() => {
    dispatch(fetchRolesByClient());
  }, [dispatch]);

  // Áreas disponibles (primer segmento de la descripción)
  const areas = [...new Set(
    roles
      .filter(role => role.Description)
      .map(role => role.Description.split(' - ')[0])
  )];

  // Roles filtrados según el área seleccionada
  const rolesByArea = selectedArea
    ? roles.filter(role => role.Description?.startsWith(selectedArea))
    : [];

  const handleAreaChange = (value) => {
    setSelectedArea(value);
    setSelectedRole(null);
    form.resetFields(['rol', 'pools']);
  };

  const handleRoleChange = (value) => {
    setSelectedRole(value);
    setSelectedOrgId(null);
    setSelectedSalesRegionId(null);
    form.resetFields(['pools']);
  };

  // Objeto del rol seleccionado
  const selectedRoleObj = roles.find(role => role.id === selectedRole);

  // Opciones para organizaciones (basadas en farmsOrgsWithPools)
  const orgOptions = useMemo(() => 
    (farmsOrgsWithPools || []).map(org => ({
      value: org.orgId,
      label: org.orgName,
    })),
    [farmsOrgsWithPools]
  );

  // Opciones para los sectores (salesRegions) según la organización seleccionada
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

  // Opciones para las piscinas del sector seleccionado
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

  const handleSubmit = (values) => {
    if (selectedRoleObj?.has_warehouses) {
      if (!selectedOrgId || !selectedSalesRegionId) {
        message.error('Debe seleccionar una organización y un sector');
        return;
      }
    }
    // Se envían todos los datos al action creator
    // Los values incluyen: area, rol, nombre, cc, teléfono, correo, claveAcceso, confirmarClave y (si corresponde) pools
    dispatch(createUserFarm(values, selectedOrgId));
    setSelectedOrgId(null)
    setSelectedSalesRegionId(null)
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

            {/* Selectores para almacenes: Organización, Sector y Piscinas */}
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

            {/* Resto del formulario */}
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

                <Row justify="end" style={{ marginTop: '20px' }}>
                  <Col>
                    <Button type="primary" htmlType="submit">
                      Guardar
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </Form>
        </Cards>
      </Main>
    </>
  );
};

export default AddUserFarm;
