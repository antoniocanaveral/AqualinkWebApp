import React, { useEffect, useState, useMemo } from 'react';
import { Table, Select, Row, Col, Card, Modal, Button, Tooltip } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers.js';
import { Main } from '../../styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventory } from '../../../redux/inventory/actionCreator.js';
import { selectFarmsOrgsWithPools, selectLabOrgsWithWarehouses } from '../../../redux/authentication/selectors.js';
import Cookies from 'js-cookie';

function InventoryTableLabs() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.inventory || {});
  const organizations = useSelector((state) => state.auth.labsOrgs);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWarehouse, setSelectedWarehouse] = useState('all');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);

  useEffect(() => {
    dispatch(fetchInventory("LAB"));
  }, [dispatch, selectedOrg]);


  const allInventoryItems = useMemo(() => {
    return Object.values(categories).flat() || [];
  }, [categories]);


  const warehouseOptions = useMemo(() => {
    const warehouses = [...new Set(allInventoryItems.map(item => item.warehouse))].filter(Boolean);
    return warehouses;
  }, [allInventoryItems]);


  const filteredInventory = useMemo(() => {
    let data = allInventoryItems;
    if (selectedWarehouse !== 'all') {
      data = data.filter(item => item.warehouse === selectedWarehouse);
    }

    if (selectedCategory !== 'all') {
      data = data.filter(item => item.product_category_identifier === selectedCategory);
    }
    return data;
  }, [allInventoryItems, selectedWarehouse, selectedCategory]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleWarehouseChange = (value) => {
    setSelectedWarehouse(value);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    console.log(JSON.stringify(organizations));
  };

  const orgSelectOptions = organizations.length > 0 ? [
    {
      options: organizations.map(org => ({
        value: org.orgId,
        label: org.orgName,
        email: org.orgEmail,
      })),
      onChange: handleOrgChange,
      placeholder: 'Seleccione una Empacadora',
      value: selectedOrg || undefined,
    },
  ] : [];

  const columnsInventory = [
    { title: 'Código', dataIndex: 'Value', key: 'Value', width: '10%' },
    { title: 'Nombre', dataIndex: 'product_name', key: 'product_name', width: '16%' },
    {
      title: 'Marca',
      dataIndex: 'Group1',
      key: 'Group1',
      width: '25%',
      ellipsis: true,
      render: (text) => <Tooltip title={text}><span>{text}</span></Tooltip>
    },
    {
      title: 'Presentación',
      key: 'Classification',
      render: (_, record) => {
        const classification = record.Classification || 'N/A';
        const uomSymbol = record.UOMSymbol || '';
        return `${classification} ${uomSymbol}`.trim();
      },
      width: '8%'
    },
    { title: 'Unidades', dataIndex: 'QtyOnHand', key: 'QtyOnHand', render: (text) => text ?? 'N/A', width: '8%' },
    {
      title: 'Volumen',
      key: 'Volumen',
      render: (_, record) => {
        const qtyOnHand = parseFloat(record.QtyOnHand) || 0;
        const classification = parseFloat(record.Classification) || 1;
        const uomSymbol = record.UOMSymbol || '';
        return `${qtyOnHand * classification} ${uomSymbol}`.trim();
      },
      width: '8%'
    },
    {
      title: 'Detalles',
      key: 'detalles',
      render: (_, record) => (
        <Button type="link" onClick={() => {
          setSelectedItem(record);
          setIsModalVisible(true);
        }}>Ver detalles</Button>
      ),
      width: '10%'
    }
  ];

  return (
    <>
      <PageHeader
        highlightText="Aqualink Laboratorio"
        title="Inventario"
        selectOptions={orgSelectOptions}
        selectedOrg={selectedOrg}
      />
      <Main>
        <Card title="Inventario">
          <Row gutter={16} style={{ marginBottom: '20px' }}>
            <Col span={8}>
              <Select
                placeholder="Seleccione un Almacén"
                onChange={handleWarehouseChange}
                style={{ width: '100%' }}
                value={selectedWarehouse}
              >
                <Select.Option value="all">Todos los Almacenes</Select.Option>
                {warehouseOptions.map(wh => (
                  <Select.Option key={wh} value={wh}>{wh}</Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={8}>
              <Select
                placeholder="Seleccione una categoría"
                onChange={handleCategoryChange}
                style={{ width: '100%' }}
                value={selectedCategory}
              >
                <Select.Option value="all">Todas las categorías</Select.Option>
                {/* Se asume que product_category_identifier es el valor clave para la categoría */}
                {Object.values(categories).flat().map(item => item.product_category_identifier)
                  .filter((v, i, a) => v && a.indexOf(v) === i)
                  .map(categoryName => (
                    <Select.Option key={categoryName} value={categoryName}>{categoryName}</Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
          <Table
            columns={columnsInventory}
            dataSource={filteredInventory}
            pagination={{ pageSize: 5 }}
            bordered
            rowKey="id"
          />
        </Card>
      </Main>

      {/* Modal para mostrar detalles adicionales */}
      <Modal
        title="Detalles del Producto"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="close" onClick={handleCloseModal}>
            Cerrar
          </Button>
        ]}
        width={700} // Aumenta el ancho del modal para mejor visualización
      >
        {selectedItem && (
          <div className="content-row" style={{ display: "flex", flexWrap: "wrap" }}>
            {/* Tabla principal con información clave */}
            <div>
              <Table
                dataSource={[
                  { key: 'categoria', label: 'Categoría', value: selectedItem.product_category_identifier },
                  { key: 'codigo', label: 'Código', value: selectedItem.Value },
                  { key: 'rsu', label: 'RSU', value: selectedItem.rsu_code },
                  { key: 'nombre', label: 'Nombre', value: selectedItem.product_name },
                  { key: 'descripcion', label: 'Descripción', value: selectedItem.description_long },
                  { key: 'help_1', label: 'Forma Terapéutica', value: selectedItem.Help },
                  { key: 'documentnote', label: 'Clasificación Terapéutica', value: selectedItem.DocumentNote },
                  { key: 'help_2', label: 'Tipo de Formulación', value: selectedItem.help_2 },
                  { key: 'marca', label: 'Marca', value: selectedItem.Group1 }
                ]}
                columns={[
                  { title: 'Campo', dataIndex: 'label', key: 'label', width: '40%' },
                  { title: 'Valor', dataIndex: 'value', key: 'value', width: '60%' }
                ]}
                pagination={false}
                bordered
                rowKey="key"
              />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default InventoryTableLabs;
