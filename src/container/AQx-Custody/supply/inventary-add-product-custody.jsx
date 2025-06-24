import React, { useEffect, useState } from 'react';
import { 
  Row, 
  Col, 
  Form, 
  Select, 
  Input, 
  Button, 
  Table, 
  Typography, 
  message, 
  Tabs, 
  Card, 
  InputNumber, 
  Modal, 
  Space,
  Tag
} from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addProductToInventory, 
  fetchProductCatalogCustody, 
  fetchProductCatalogFarm 
} from '../../../redux/inventory/actionCreator.js';

import { selectCustodyOrgsWithWarehouses, selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors.js';
import Cookies from 'js-cookie';
import BinsGridComponent from './BinsGridCOmponent.jsx';
import { fetchBins, registerMultipleBins, updateBin } from '../../../redux/bin/actionCreator.js';

const { TextArea } = Input;
const { Title } = Typography;
const { TabPane } = Tabs;

function InventaryAddProductCustody() {
  const dispatch = useDispatch();
  const { categoriesCatalog } = useSelector((state) => state.inventory || {});
  const { bins, binData, loading: binsLoading, error: binsError } = useSelector((state) => state.smBin || {});
  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectCustodyOrgsWithWarehouses);

  // Estados para productos
  const [form] = Form.useForm();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Estados para bines
  const [binForm] = Form.useForm();
  const [editBinForm] = Form.useForm();
  const [numberOfBins, setNumberOfBins] = useState(1);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentEditingBin, setCurrentEditingBin] = useState(null);

  // Estados comunes
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);
  const [activeTab, setActiveTab] = useState('products');

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.remove('poolId');
    
    // Si estamos en la pestaña de bines, recargar los bines
    if (activeTab === 'bins') {
      dispatch(fetchBins());
    }
  };

  const handlePoolChange = (value) => {
    setSelectedPool(value);
    Cookies.set('poolId', value);
  };

  const poolsOptions =
    selectedOrg && farmsOrgsWithPools
      ? (farmsOrgsWithPools.find((org) => org.orgId === selectedOrg)?.pools || [])
        .filter((pool) => {
          return !pool.salesRegion || (pool.salesRegion && pool.salesRegion.id === null);
        })
        .map((pool) => ({
          value: pool.poolId,
          label: pool.poolName,
        }))
      : [];

  const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);

  const farmsSelectOptions = organizations.length > 0
    ? [
      {
        options: custodyOrgs.map(org => ({
          value: org.orgId,
          label: org.orgName,
          email: org.orgEmail,
        })),
        onChange: handleOrgChange,
        placeholder: 'Seleccione una Farm',
        value: selectedOrg || undefined,
      },
    ]
    : [];

  const combinedSelectOptions = [...farmsSelectOptions];

  useEffect(() => {
    dispatch(fetchProductCatalogCustody());
  }, [dispatch]);

  useEffect(() => {
    if (selectedOrg && activeTab === 'bins') {
      dispatch(fetchBins());
    }
  }, [selectedOrg, activeTab, dispatch]);

  

  // Funciones para productos (mantener las existentes)
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedGroup(null);
    setFilteredGroups([]);
    setFilteredProducts([]);
    setSelectedProduct(null);
    form.resetFields(['group', 'producto', 'classification', 'description']);

    if (value && value !== 'all') {
      const products = categoriesCatalog[value] || [];
      const uniqueGroups = Array.from(new Set(products.map((product) => product.Group1))).filter(Boolean);
      setFilteredGroups(uniqueGroups);
    } else if (value === 'all') {
      const allProducts = Object.values(categoriesCatalog).flat();
      const uniqueGroups = Array.from(new Set(allProducts.map((product) => product.Group1))).filter(Boolean);
      setFilteredGroups(uniqueGroups);
    }
  };

  const handleGroupChange = (value) => {
    setSelectedGroup(value);
    setSelectedProduct(null);
    form.resetFields(['producto', 'classification', 'description']);

    let products = [];
    if (selectedCategory === 'all') {
      products = Object.values(categoriesCatalog).flat();
    } else {
      products = categoriesCatalog[selectedCategory] || [];
    }

    const filtered = products.filter((product) => product.Group1 === value);
    setFilteredProducts(filtered);
  };

  const handleProductSelect = (value) => {
    const product = filteredProducts.find((p) => p.Value === value);
    setSelectedProduct(product);
    
    form.setFieldsValue({
      description: product ? product.Description : '',
      Classification: product ? product.Classification : '',
      document_note: product?.document_note || '',
      help_1: product?.help_1 || '',
      help_2: product?.help_2 || '',
      origin_country: product?.origin_country || '',
      Value: product?.Value || '',
      rsu_code: product?.rsu_code || '',
    });

    let classifications = [];
    if (selectedCategory === 'all') {
      classifications = Object.values(categoriesCatalog).flat().filter(p => p.rsu_code === product.rsu_code);
    } else {
      classifications = categoriesCatalog[selectedCategory].filter(p => p.rsu_code === product.rsu_code);
    }

    const uniqueClassifications = Array.from(new Set(classifications.map((p) => p.Classification))).filter(Boolean);
    const classificationOptionsFormatted = uniqueClassifications.map((cls) => ({
      label: cls,
      value: cls,
    }));

    form.resetFields(['classification']);
  };

  const handleSubmit = async (values) => {
    const selectedPoolData = farmsOrgsWithPools
      .flatMap(org => org.pools) 
      .find(pool => pool.poolId === selectedPool); 

    const M_Locator_ID = selectedPoolData?.locators?.[0] || null;
    const productData = {
      M_Product_ID: selectedProduct.M_Product_ID.id,
      C_BPartner_ID: selectedProduct.C_BPartner_ID.id,
      C_BPartner_Location_ID: selectedProduct.C_BPartner_Location_ID.id,
      priceList: parseFloat(values.precio_lista),
      quantity: parseInt(values.cantidad, 10),
      M_Warehouse_ID: selectedPool,
      M_Locator_ID: M_Locator_ID
    };

    const success = await dispatch(addProductToInventory(productData));

    if (success) {
      message.success('Producto añadido exitosamente');
      form.resetFields();
      setSelectedCategory(null);
      setSelectedGroup(null);
      setSelectedProduct(null);
    } else {
      message.error('Error al añadir el producto');
    }
  };

  // Funciones para bines
  const handleCreateBins = async () => {
    if (numberOfBins < 1 || numberOfBins > 2500) {
      message.error('El número de bines debe estar entre 1 y 2500');
      return;
    }

    await dispatch(registerMultipleBins(numberOfBins));
    setNumberOfBins(1);
  };

  const handleEditBin = (bin) => {
    setCurrentEditingBin(bin);
    editBinForm.setFieldsValue({
      sm_status: bin.sm_status,
      sm_description: bin.sm_description
    });
    setEditModalVisible(true);
  };

  const handleUpdateBin = async (values) => {
    if (!currentEditingBin) return;

    // Usar el ID correcto del bin
    await dispatch(updateBin(currentEditingBin.id, {
      sm_status: values.sm_status,
      sm_description: values.sm_description
    }));

    setEditModalVisible(false);
    setCurrentEditingBin(null);
    editBinForm.resetFields();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVO': return 'green';
      case 'INACTIVO': return 'red';
      case 'OCUPADO': return 'orange';
      default: return 'default';
    }
  };

  // Normalizar los datos de bins para que funcionen con ambas estructuras
  const normalizedBins = bins ? bins.map(bin => ({
    // Usar la estructura original si existe, sino la nueva
    sm_bin_id: bin.id || bin.sm_bin_id,
    id: bin.id || bin.sm_bin_id,
    name: bin.Name || bin.name,
    Name: bin.Name || bin.name,
    sm_status: bin.sm_status,
    sm_description: bin.sm_description,
    isactive: bin.IsActive ? 'Y' : 'N' || bin.isactive || 'Y'
  })) : [];

  const binColumns = [
    {
      title: 'Número',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => parseInt(a.name) - parseInt(b.name),
    },
    {
      title: 'Estado',
      dataIndex: 'sm_status',
      key: 'sm_status',
      render: (status) => (
        <Tag color={getStatusColor(status)}>{status}</Tag>
      ),
      filters: [
        { text: 'ACTIVO', value: 'ACTIVO' },
        { text: 'INACTIVO', value: 'INACTIVO' },
        { text: 'OCUPADO', value: 'OCUPADO' },
      ],
      onFilter: (value, record) => record.sm_status === value,
    },
    {
      title: 'Descripción',
      dataIndex: 'sm_description',
      key: 'sm_description',
    },
    {
      title: 'Activo',
      dataIndex: 'isactive',
      key: 'isactive',
      render: (isactive) => (
        <Tag color={isactive === 'Y' ? 'green' : 'red'}>
          {isactive === 'Y' ? 'Sí' : 'No'}
        </Tag>
      ),
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, record) => (
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => handleEditBin(record)}
        >
          Editar
        </Button>
      ),
    },
  ];

  const renderBinsContent = () => {
 

    if (binsLoading) {
      return <div>Cargando bines...</div>;
    }

    if (binsError) {
      return (
        <Card>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Title level={4}>Error al cargar bines</Title>
            <p>{binsError}</p>
            <Button onClick={() => dispatch(fetchBins())}>Reintentar</Button>
          </div>
        </Card>
      );
    }

    if (!selectedOrg) {
      return (
        <Card>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Title level={4}>Selecciona una organización</Title>
            <p>Debes seleccionar una organización para ver los bines.</p>
          </div>
        </Card>
      );
    }

    if (!normalizedBins || normalizedBins.length === 0) {
      return (
        <Card>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Title level={4}>No tienes bines creados</Title>
            <p>Ingresa el número de bines que deseas crear (máximo 2500):</p>
            <Space direction="vertical" size="large">
              <InputNumber
                min={1}
                max={2500}
                value={numberOfBins}
                onChange={setNumberOfBins}
                style={{ width: 200 }}
                placeholder="Número de bines"
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleCreateBins}
                disabled={!selectedOrg}
              >
                Crear Bines
              </Button>
            </Space>
          </div>
        </Card>
      );
    }

    return (
      <div>
        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
          <Col>
            <Card size="small">
              <Space>
                <span>Agregar más bines:</span>
                <InputNumber
                  min={1}
                  max={2500}
                  value={numberOfBins}
                  onChange={setNumberOfBins}
                  style={{ width: 120 }}
                />
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={handleCreateBins}
                  size="small"
                >
                  Agregar
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>

        {/* Componente de grilla visual */}
        <BinsGridComponent 
          bins={normalizedBins} 
          onBinClick={handleEditBin}
        />

        <Table
          dataSource={normalizedBins}
          columns={binColumns}
          rowKey="id"
          pagination={{
            pageSize: 50,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} de ${total} bines`,
          }}
          scroll={{ y: 400 }}
        />
      </div>
    );
  };

  const handleSubmitFailed = (errorInfo) => {
    console.log('Error en el formulario:', errorInfo);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    if (key === 'bins' && selectedOrg) {
      dispatch(fetchBins());
    }
  };

  return (
    <>
      <PageHeader
        highlightText="Aqualink Empacadora"
        title="Inventario"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
      />

      <Main>
        <Row gutter={25}>
          <Col xl={24} xs={24}>
            <Cards title="Gestión de Inventario" size="large">
              <Tabs activeKey={activeTab} onChange={handleTabChange}>
                <TabPane tab="Productos" key="products">
                  <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                    onFinish={handleSubmit}
                    onFinishFailed={handleSubmitFailed}
                  >
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          label="Categoría"
                          name="category"
                          rules={[{ required: true, message: 'Seleccione una categoría' }]}
                        >
                          <Select placeholder="Seleccione una categoría" onChange={handleCategoryChange}>
                            <Select.Option value="all">Todas</Select.Option>
                            {Object.keys(categoriesCatalog).map((categoryName) => (
                              <Select.Option key={categoryName} value={categoryName}>
                                {categoryName}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        {selectedCategory && (
                          <Form.Item
                            label="Marca"
                            name="marca"
                            rules={[{ required: true, message: 'Seleccione una Marca' }]}
                          >
                            <Select
                              showSearch
                              placeholder="Seleccione una Marca"
                              optionFilterProp="children"
                              onChange={handleGroupChange}
                              filterOption={(input, option) =>
                                option.children.toLowerCase().includes(input.toLowerCase())
                              }
                            >
                              {filteredGroups.map((group) => (
                                <Select.Option key={group} value={group}>
                                  {group}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        )}
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={12}>
                        {selectedGroup && (
                          <Form.Item
                            label="Producto"
                            name="producto"
                            rules={[{ required: true, message: 'Seleccione un Producto' }]}
                          >
                            <Select
                              showSearch
                              placeholder="Seleccione un Producto"
                              optionFilterProp="children"
                              onChange={handleProductSelect}
                              filterOption={(input, option) =>
                                option.children.toLowerCase().includes(input.toLowerCase())
                              }
                            >
                              {filteredProducts.map((product) => (
                                <Select.Option key={product.Value} value={product.Value}>
                                  {product.Name}
                                </Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        )}
                      </Col>

                      <Col span={12}>
                        {selectedProduct && (
                          <Form.Item label="Presentación" name="Classification">
                            <Input readOnly />
                          </Form.Item>
                        )}
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col xl={12} lg={24}>
                        {selectedProduct && (
                          <Form.Item label="Descripción" name="description">
                            <TextArea style={{ height: "250px" }} rows={4} readOnly />
                          </Form.Item>
                        )}
                      </Col>
                      <Col xl={12} lg={12}>
                        {selectedProduct && (
                          <div>
                            <Form.Item label="Clasificación Terapéutica" name="document_note">
                              <Input readOnly />
                            </Form.Item>

                            <Form.Item label="Forma Terapéutica" name="help_1">
                              <Input readOnly />
                            </Form.Item>

                            <Form.Item label="Tipo de Formulación" name="help_2">
                              <Input readOnly />
                            </Form.Item>
                          </div>
                        )}
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      {selectedProduct && (
                        <>
                          <Col xl={8} lg={12}>
                            <Form.Item label="Origen de Producto" name="origin_country">
                              <Input readOnly />
                            </Form.Item>
                          </Col>
                          <Col xl={8} lg={12}>
                            <Form.Item label="ID Aqualink" name="Value">
                              <Input readOnly />
                            </Form.Item>
                          </Col>
                          <Col xl={8} lg={12}>
                            <Form.Item label="Código RSU" name="rsu_code">
                              <Input readOnly />
                            </Form.Item>
                          </Col>
                        </>
                      )}
                    </Row>

                    {selectedProduct && (
                      <Row gutter={16}>
                        {selectedCategory === 'larva' ? (
                          <>
                            <Col span={8}>
                              <Form.Item
                                label="Código Reproductor"
                                name="codigo_reproductor"
                                rules={[{ required: true, message: 'Ingrese el código reproductor' }]}
                              >
                                <Input placeholder="Código Reproductor" />
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item
                                label="Proveedor"
                                name="proveedor"
                                rules={[{ required: true, message: 'Ingrese el proveedor' }]}
                              >
                                <Input placeholder="Proveedor" />
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item
                                label="Origen Nauplio"
                                name="origen_nauplio"
                                rules={[{ required: true, message: 'Ingrese el origen del nauplio' }]}
                              >
                                <Input placeholder="Origen Nauplio" />
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item
                                label="Precio Lista"
                                name="precio_lista"
                                rules={[{ required: true, message: 'Ingrese el precio de lista' }]}
                              >
                                <Input placeholder="Precio Lista" type="number" />
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item
                                label="Cantidad"
                                name="cantidad"
                                rules={[{ required: true, message: 'Ingrese la cantidad' }]}
                              >
                                <Input placeholder="Cantidad" type="number" />
                              </Form.Item>
                            </Col>
                            <Col span={8}>
                              <Form.Item
                                label="Lote Destino"
                                name="lote_destino"
                                rules={[{ required: true, message: 'Ingrese el lote destino' }]}
                              >
                                <Input placeholder="Lote Destino" />
                              </Form.Item>
                            </Col>
                          </>
                        ) : (
                          <>
                            <Col xl={4}>
                              <Form.Item
                                label="Precio Lista"
                                name="precio_lista"
                                rules={[{ required: true, message: 'Ingrese el precio de lista' }]}
                              >
                                <Input placeholder="Precio Lista" type="number" />
                              </Form.Item>
                            </Col>

                            <Col xl={4}>
                              <Form.Item
                                label="Cantidad"
                                name="cantidad"
                                rules={[{ required: true, message: 'Ingrese la cantidad' }]}
                              >
                                <Input placeholder="Cantidad" type="number" />
                              </Form.Item>
                            </Col>

                            <Col xl={5}>
                              <Form.Item
                                label="Almacén"
                                name="M_Warehouse_ID"
                                rules={[{ required: true, message: 'Seleccione un almacén' }]}
                              >
                                <Select
                                  options={poolsOptions}
                                  onChange={handlePoolChange}
                                  placeholder="Seleccione una Pool"
                                  value={poolsOptions.find((opt) => opt.value === selectedPool) || undefined}
                                  allowClear
                                  disabled={!selectedOrg || poolsOptions.length === 0}
                                />
                              </Form.Item>
                            </Col>

                            <Col xl={8}>
                              <Row justify="end" gutter={10} style={{ marginTop: '36px' }}>
                                <Col>
                                  <Button onClick={() => form.resetFields()} type="default">
                                    Borrar
                                  </Button>
                                </Col>
                                <Col>
                                  <Button htmlType="submit" type="primary">
                                    Añadir a Inventario
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </>
                        )}
                      </Row>
                    )}
                  </Form>
                </TabPane>

                <TabPane tab="Bines" key="bins">
                  {renderBinsContent()}
                </TabPane>
              </Tabs>
            </Cards>
          </Col>
        </Row>

        {/* Modal para editar bin */}
        <Modal
          title={`Editar Bin ${currentEditingBin?.name || currentEditingBin?.Name}`}
          visible={editModalVisible}
          onCancel={() => {
            setEditModalVisible(false);
            setCurrentEditingBin(null);
            editBinForm.resetFields();
          }}
          footer={null}
          width={600}
        >
          <Form
            form={editBinForm}
            layout="vertical"
            onFinish={handleUpdateBin}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Estado"
                  name="sm_status"
                  rules={[{ required: true, message: 'Seleccione un estado' }]}
                >
                  <Select placeholder="Seleccione un estado">
                    <Select.Option value="ACTIVO">ACTIVO</Select.Option>
                    <Select.Option value="INACTIVO">INACTIVO</Select.Option>
                    <Select.Option value="OCUPADO">OCUPADO</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Descripción"
                  name="sm_description"
                  rules={[{ required: true, message: 'Ingrese una descripción' }]}
                >
                  <Input placeholder="Descripción del bin" />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="end" gutter={10}>
              <Col>
                <Button 
                  onClick={() => {
                    setEditModalVisible(false);
                    setCurrentEditingBin(null);
                    editBinForm.resetFields();
                  }}
                >
                  Cancelar
                </Button>
              </Col>
              <Col>
                <Button type="primary" htmlType="submit">
                  Actualizar Bin
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal>
      </Main>
    </>
  );
}

export default InventaryAddProductCustody;