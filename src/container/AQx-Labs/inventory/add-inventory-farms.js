import React, { useState } from 'react';
import { Row, Col, Form, Select, Input, Button, Table } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { optionsInventory } from './data.js';
import { PageHeader } from '../../../components/page-headers/page-headers.js';

function AddInventoryLabs() {
  const [form] = Form.useForm();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const options = optionsInventory;

  // Maneja el cambio de categoría principal y reinicia la subcategoría
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedSubCategory(null);
  };

  // Datos de la tabla: basado en el item seleccionado y filtrar solo los campos deseados
  const dataSource = selectedSubCategory
    ? Object.entries(
      options
        .find(option => option.categoria === selectedCategory)
        ?.items.find(item => item.codigo === selectedSubCategory) || {}
    )
      .filter(([key]) => [
        'codigo',
        'nombre',
        'descripcion',
        'info_adicional',
        'nota_doc',
        'peso_total_presentacion',
        'unidad_medida',
        'SKU'
      ].includes(key))
      .map(([key, value], index) => ({
        key: index,
        field: key.replace(/_/g, ' ').toUpperCase(),
        value: value || 'N/A',
      }))
    : [];

  // Columnas de la tabla
  const columns = [
    {
      title: 'Campo',
      dataIndex: 'field',
      key: 'field',
      width: '40%',
      render: text => <span>{text}</span>
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
      width: '60%',
      render: text => <span>{text}</span>
    }
  ];

  // Maneja el envío del formulario
  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        console.log("Datos enviados:", values);
      })
      .catch(info => {
        console.log("Error en el formulario:", info);
      });
  };

  return (
    <>
      <PageHeader
        highlightText="Aqualink Laboratorio"
        title="Inventario"
      />
      <Main>
        <Row gutter={25}>
          <Col xl={24} xs={24}>
            <Cards title="Planificación de Inventario" size="large">
              <Form form={form} layout="vertical" requiredMark={false}>
                <Row gutter={16}>
                  {/* Selector de categoría */}
                  <Col span={12}>
                    <Form.Item
                      label="Categoría"
                      name="category"
                      rules={[{ required: true, message: 'Seleccione una categoría' }]}
                    >
                      <Select placeholder="Seleccione una categoría" onChange={handleCategoryChange}>
                        {options.map(option => (
                          <Select.Option key={option.categoria} value={option.categoria}>
                            {option.categoria}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>

                  {/* Selector de subcategoría */}
                  <Col span={12}>
                    {selectedCategory && (
                      <Form.Item
                        label="Producto"
                        name="producto"
                        rules={[{ required: true, message: 'Seleccione un Producto' }]}
                      >
                        <Select
                          placeholder="Seleccione un Producto"
                          onChange={setSelectedSubCategory}
                        >
                          {options
                            .find(option => option.categoria === selectedCategory)
                            ?.items.map(subCat => (
                              <Select.Option key={subCat.codigo} value={subCat.codigo}>
                                {subCat.nombre}
                              </Select.Option>
                            ))}
                        </Select>
                      </Form.Item>
                    )}
                  </Col>
                </Row>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                  {/* Tabla para mostrar información adicional de la subcategoría seleccionada */}
                  {selectedSubCategory && (
                    <div style={{ flex: '1 1 40%' }}>
                      <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        bordered
                        rowKey="key"
                      />
                    </div>
                  )}

                  {/* Formulario adicional: muestra campos según la selección */}
                  {selectedSubCategory && (
                    <div style={{ flex: '1 1 55%', maxWidth: '55%' }}>
                      <div style={{
                        padding: '20px',
                        border: '1px solid #d9d9d9',
                        borderRadius: '8px',
                      }}>
                        <h3 style={{ marginBottom: '16px', color: '#595959' }}>Detalles del Producto</h3>
                        {selectedCategory === 'Nauplios' ? (
                          <>
                            <Form.Item
                              label="Código Reproductor"
                              name="codigo_reproductor"
                              rules={[{ required: true, message: 'Ingrese el código reproductor' }]}
                            >
                              <Input placeholder="Código Reproductor" />
                            </Form.Item>
                            <Form.Item
                              label="Proveedor"
                              name="proveedor"
                              rules={[{ required: true, message: 'Ingrese el proveedor' }]}
                            >
                              <Input placeholder="Proveedor" />
                            </Form.Item>
                            <Form.Item
                              label="Origen Nauplio"
                              name="origen_nauplio"
                              rules={[{ required: true, message: 'Ingrese el origen del nauplio' }]}
                            >
                              <Input placeholder="Origen Nauplio" />
                            </Form.Item>
                            <Form.Item
                              label="Precio Lista"
                              name="precio_lista"
                              rules={[{ required: true, message: 'Ingrese el precio de lista' }]}
                            >
                              <Input placeholder="Precio Lista" type="number" />
                            </Form.Item>
                            <Form.Item
                              label="Cantidad"
                              name="cantidad"
                              rules={[{ required: true, message: 'Ingrese la cantidad' }]}
                            >
                              <Input placeholder="Cantidad" type="number" />
                            </Form.Item>
                            <Form.Item
                              label="Tanque Destino"
                              name="tanque_destino"
                              rules={[{ required: true, message: 'Ingrese el Tanque de destino' }]}
                            >
                              <Input placeholder="Lote Destino" />
                            </Form.Item>
                            <Form.Item
                              label="Lote Destino"
                              name="lote_destino"
                              rules={[{ required: true, message: 'Ingrese el lote destino' }]}
                            >
                              <Input placeholder="Lote Destino" />
                            </Form.Item>
                          </>
                        ) : (
                          <>
                            <Form.Item
                              label="Marca"
                              name="marca"
                              rules={[{ required: true, message: 'Ingrese la marca' }]}
                            >
                              <Input placeholder="Marca" />
                            </Form.Item>
                            <Form.Item
                              label="Modelo"
                              name="modelo"
                              rules={[{ required: true, message: 'Ingrese el modelo' }]}
                            >
                              <Input placeholder="Modelo" />
                            </Form.Item>
                            <Form.Item
                              label="Precio Lista"
                              name="precio_lista"
                              rules={[{ required: true, message: 'Ingrese el precio de lista' }]}
                            >
                              <Input placeholder="Precio Lista" type="number" />
                            </Form.Item>
                            <Form.Item
                              label="Cantidad"
                              name="cantidad"
                              rules={[{ required: true, message: 'Ingrese la cantidad' }]}
                            >
                              <Input placeholder="Cantidad" type="number" />
                            </Form.Item>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Botones de acción */}
                <Row justify="end" gutter={10} style={{ marginTop: '16px' }}>
                  <Col>
                    <Button onClick={() => form.resetFields()} type="default">Borrar</Button>
                  </Col>
                  <Col>
                    <Button onClick={handleSubmit} type="primary">Añadir a Inventario</Button>
                  </Col>
                </Row>
              </Form>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default AddInventoryLabs;
