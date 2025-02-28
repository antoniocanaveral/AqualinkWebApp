import React, { useEffect, useState } from 'react';
import { Table, Select, Row, Col, Card, Modal, Button, Tooltip, Tabs } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers.js';
import { Main } from '../../styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventory, fetchSecurityKits } from '../../../redux/inventory/actionCreator.js';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors.js';
import Cookies from 'js-cookie';

const { TabPane } = Tabs;

function InventaryViewCustody() {
    const dispatch = useDispatch();

    const { categories, securityKits, securityKitsLoading } = useSelector((state) => state.inventory || {});

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedKitType, setSelectedKitType] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);

    const organizations = useSelector((state) => state.auth.farmsOrgs);
    const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);
    const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

    useEffect(() => {
        dispatch(fetchInventory("CUSTODY"));
    }, [dispatch, selectedOrg]);

    useEffect(() => {
        dispatch(fetchSecurityKits(selectedKitType));
    }, [dispatch, selectedKitType]);

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    const handleKitTypeChange = (value) => {
        setSelectedKitType(value);
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
        console.log(JSON.stringify(farmsOrgsWithPools));
    };

    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: custodyOrgs.map(org => ({
                value: org.orgId,
                label: org.orgName,
                email: org.orgEmail,
            })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Empacadora',
            value: selectedOrg || undefined,
        },
    ] : [];

    const combinedSelectOptions = [...farmsSelectOptions];

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
                <Button type="link" onClick={() => setSelectedItem(record)}>Ver detalles</Button>
            ),
            width: '10%'
        }
    ];

    const columnsSecurityKits = [
        { title: 'Código del Kit', dataIndex: 'sm_kitcode', key: 'SM_KitCode', width: '15%' },
        { title: 'Stamp 1', dataIndex: 'SM_Stamp1', key: 'SM_Stamp1', width: '12%' },
        { title: 'Stamp 2', dataIndex: 'SM_Stamp2', key: 'SM_Stamp2', width: '12%' },
        { title: 'Stamp 3', dataIndex: 'SM_Stamp3', key: 'SM_Stamp3', width: '12%' },
        { title: 'Stamp 4', dataIndex: 'SM_Stamp4', key: 'SM_Stamp4', width: '12%' },
        { title: 'Tag', dataIndex: 'sm_tag', key: 'SM_Tag', width: '12%' },
        { title: 'Tipo', dataIndex: 'sm_kittype', key: 'SM_KitType', width: '15%' }
    ];


    return (
        <>
            <PageHeader
                highlightText="Aqualink Empacadora"
                title="Inventario"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Tabs defaultActiveKey="1">
                    {/* TAB 1: INVENTARIO (SIN CAMBIOS) */}
                    <TabPane tab="Inventario" key="1">
                        <Card title="Inventario de Metabisulfito">
                            <Row gutter={16} style={{ marginBottom: '20px' }}>
                                <Col span={8}>
                                    <Select placeholder="Seleccione una categoría" onChange={handleCategoryChange} style={{ width: '100%' }}>
                                        <Select.Option value="all">Todas las categorías</Select.Option>
                                        {Object.keys(categories).map(categoryName => (
                                            <Select.Option key={categoryName} value={categoryName}>{categoryName}</Select.Option>
                                        ))}
                                    </Select>
                                </Col>
                            </Row>
                            <Table
                                columns={columnsInventory}
                                dataSource={selectedCategory === "all"
                                    ? Object.values(categories).flat()  // Concatena todos los productos
                                    : categories[selectedCategory] || []
                                }
                                pagination={{ pageSize: 5 }}
                                bordered
                            />
                        </Card>
                    </TabPane>

                    {/* TAB 2: SUMINISTRO */}
                    <TabPane tab="Suministro" key="2">
                        <Card title="Kits de Seguridad">
                            <Row gutter={16} style={{ marginBottom: '20px' }}>
                                <Col span={8}>
                                    <Select placeholder="Filtrar por tipo" onChange={handleKitTypeChange} style={{ width: '100%' }}>
                                        <Select.Option value="BIN">BIN</Select.Option>
                                        <Select.Option value="VAN">VAN</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                            <Table columns={columnsSecurityKits} dataSource={securityKits} loading={securityKitsLoading} pagination={{ pageSize: 5 }} bordered />
                        </Card>
                    </TabPane>
                </Tabs>
            </Main>

            {/* MODAL PARA DETALLES */}
            <Modal
                title="Detalles del Producto"
                visible={isModalVisible}
                onCancel={handleCloseModal}
                footer={[<Button key="close" onClick={handleCloseModal}>Cerrar</Button>]}
                width={900}
            >
                {selectedItem && (
                    <Table
                        dataSource={[
                            { key: 'nombre', label: 'Nombre', value: selectedItem.product_name },
                            { key: 'codigo', label: 'Código', value: selectedItem.Value },
                            { key: 'marca', label: 'Marca', value: selectedItem.Group1 },
                            { key: 'descripcion', label: 'Descripción', value: selectedItem.description_long }
                        ]}
                        columns={[{ title: 'Campo', dataIndex: 'label', key: 'label' }, { title: 'Valor', dataIndex: 'value', key: 'value' }]}
                        pagination={false}
                        bordered
                    />
                )}
            </Modal>
        </>
    );
}

export default InventaryViewCustody;
