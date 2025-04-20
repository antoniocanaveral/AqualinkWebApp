import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Select, Input, Button, Table, Typography, message } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers.js';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToInventory, fetchProductCatalogCustody, fetchProductCatalogFarm } from '../../../redux/inventory/actionCreator.js';
import { selectCustodyOrgsWithWarehouses, selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors.js';
import Cookies from 'js-cookie';

const { TextArea } = Input;
const { Title } = Typography;
function InventaryAddProductCustody() {
  const dispatch = useDispatch();
  const { categoriesCatalog } = useSelector((state) => state.inventory || {});

  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectCustodyOrgsWithWarehouses);


  const [form] = Form.useForm();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);


  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.remove('poolId');
    console.log(JSON.stringify(farmsOrgsWithPools));
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

  const combinedSelectOptions = [
    ...farmsSelectOptions,
  ];

  useEffect(() => {
    dispatch(fetchProductCatalogCustody());
  }, [dispatch]);

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
    console.log(product);
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

  const handleSubmitFailed = (errorInfo) => {
    console.log('Error en el formulario:', errorInfo);
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
            <Cards title="Añadir Inventario" size="large">
              <Form
                form={form}
                layout="vertical"
                requiredMark={false}
                onFinish={handleSubmit}
                onFinishFailed={handleSubmitFailed}
              >
                <Row gutter={16}>
                  {/* Selector de Categoría */}
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

                  {/* Selector de Grupo (Group1) */}
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
                  {/* Selector de Producto */}
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
                  {/* Textarea de Descripción */}
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

                        <Form.Item
                          label="Forma Terapéutica"
                          name="help_1"
                        >
                          <Input readOnly />
                        </Form.Item>

                        <Form.Item
                          label="Tipo de Formulación"
                          name="help_2"
                        >
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
                        <Form.Item
                          label="Origen de Producto"
                          name="origin_country"
                        >
                          <Input readOnly />
                        </Form.Item>
                      </Col>
                      <Col xl={8} lg={12}>
                        <Form.Item
                          label="ID Aqualink"
                          name="Value"
                        >
                          <Input readOnly />
                        </Form.Item>
                      </Col>
                      <Col xl={8} lg={12}>
                        <Form.Item
                          label="Código RSU"
                          name="rsu_code"
                        >
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
                            rules={[{ required: true, message: 'Ingrese la cantidad' }]}
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
                              <Button onClick={() => form.resetFields()} type="default">Borrar</Button>
                            </Col>
                            <Col>
                              <Button htmlType="submit" type="primary">Añadir a Inventario</Button>
                            </Col>
                          </Row>
                        </Col>
                      </>
                    )}
                  </Row>
                )}

              </Form>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default InventaryAddProductCustody;
