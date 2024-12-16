import React, { lazy, useState, useEffect, Suspense } from 'react';
import { Row, Col, Input, Select, Table, Modal, Skeleton, Button, Form } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { ticketReadData, ticketUpdateData, ticketUpdateSearch } from '../../../redux/supportTickets/actionCreator';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main, TableWrapper } from '../../styled';
import { TicketBox } from '../../supportTicket/Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import ListItemsMessageNotificationsCenter from './list-items';
import Card from 'antd/lib/card/Card';

function MessageNotificationsCenter() {
    const { dataState } = useSelector((state) => ({
        dataState: state.tickets.data,
    }));

    const dispatch = useDispatch();

    const [visibleEdit, setVisibleEdit] = useState(false);
    const [editableData, setEditableData] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState(null);

    const dataSource = [];

    useEffect(() => {
        if (dispatch) {
            dispatch(ticketReadData());
        }
    }, [dispatch]);

    const prefix = (
        <SearchOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Fecha de Creación',
            dataIndex: 'createAt',
            key: 'createAt',
        },
        {
            title: 'Asignado a',
            dataIndex: 'requested',
            key: 'requested',
        },
        {
            title: 'Asunto',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Tipo',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Acciones',
            dataIndex: 'action',
            key: 'action',
            width: '120px',
        },
    ];

    const showModal = (record) => {
        setModalData(record);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setModalData(null);
    };

    const showEditModal = (record) => {
        setEditableData(record);
        setVisibleEdit(true);
    };

    const closeEditModal = () => {
        setVisibleEdit(false);
        setEditableData(null);
    };

    const handleEditSubmit = (values) => {
        const updatedData = dataState.map((item) => {
            if (item.id === editableData.id) {
                return { ...item, status: values.status, actions: values.actions };
            }
            return item;
        });
        dispatch(ticketUpdateData(updatedData));
        closeEditModal();
    };

    if (dataState.length) {
        dataState.forEach((item) => {
            const { id, user, status, subject, priority, createAt, type, actions } = item;
            dataSource.push({
                key: `${id}`,
                id: `#${id}`,
                requested: (
                    <div className="ninjadash-info-element align-center-v">
                        <div className="ninjadash-info-element__content">
                            <p>{user.name}</p>
                        </div>
                    </div>
                ),
                status: (
                    <span className={`ninjadash-support-status ninjadash-support-status-${status}`}>{
                        status === 'Open' ? 'Por Revisar' : 'Finalizado'
                    }</span>
                ),
                subject: <span>{subject}</span>,
                type: type === 'message' ? 'Mensaje' : 'Notificación',
                createAt,
                action: (
                    <div className="table-actions">
                        <Button className="view" onClick={() => showModal(item)}>
                            <UilEye />
                        </Button>
                        <Button className="edit" onClick={() => showEditModal(item)}>
                            <UilEdit />
                        </Button>
                    </div>
                ),
            });
        });
    }

    return (
        <>
            <PageHeader
                highlightText="Aqualink Administración"
                title="Centro de Mensajes y Notificaciones"
            />
            <Main>
                <TicketBox>
                    <Row justify="center">
                        <Col xs={24}>
                            <Suspense
                                fallback={
                                    <Cards headless>
                                        <Skeleton active />
                                    </Cards>
                                }
                            >
                                <ListItemsMessageNotificationsCenter />
                            </Suspense>
                        </Col>
                    </Row>
                    <Row gutter={25}>
                        <Col sm={24} xs={24}>
                            <Cards headless>
                                <div className="ninjadash-support-content-filter">
                                    <div className="ninjadash-support-content-filter__left">
                                        <div className="ninjadash-support-content-filter__input">
                                            <span className="label">ID:</span>
                                            <Input onChange={(e) => dispatch(ticketUpdateSearch(e.target.value, 'id'))} placeholder="Buscar por ID" />
                                        </div>
                                        <div className="ninjadash-support-content-filter__input">
                                            <span className="label">Estado:</span>
                                            <Select
                                                onChange={(value) => dispatch(ticketUpdateSearch(value, 'status'))}
                                                style={{ width: 200 }}
                                                defaultValue=""
                                            >
                                                <Select.Option value="">Todos</Select.Option>
                                                <Select.Option value="Open">Por Revisar</Select.Option>
                                                <Select.Option value="Close">Finalizado</Select.Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="ninjadash-support-content-filter__right">
                                        <Input
                                            onChange={(e) => dispatch(ticketUpdateSearch(e.target.value, 'subject'))}
                                            size="default"
                                            placeholder="Buscar"
                                            prefix={prefix}
                                        />
                                    </div>
                                </div>
                                <div className="ninjadash-support-content-table">
                                    <TableWrapper className="table-data-view table-responsive">
                                        <Table
                                            pagination={{ pageSize: 10, showSizeChanger: true }}
                                            dataSource={dataSource}
                                            columns={columns}
                                        />
                                    </TableWrapper>
                                </div>
                            </Cards>
                        </Col>
                    </Row>
                </TicketBox>
            </Main>

            {/* Modal de Ver Detalles */}
            <Modal
                visible={modalVisible}
                title="Detalles del Mensaje/Notificación"
                onCancel={closeModal}
                footer={
                    <Button key="close" onClick={closeModal} className="close-button">
                        Cerrar
                    </Button>
                }
            >
                {modalData && (
                    <div className="modal-container">
                        <Card className="info-card">
                            <p><strong>ID:</strong> {modalData.id}</p>
                            <p><strong>Asignado A:</strong> {modalData.user.name}</p>
                            <p><strong>Estado:</strong> {modalData.status === 'Open' ? 'Por Revisar' : 'Finalizado'}</p>
                        </Card>
                        <Card className="subject-card">
                            <p><strong>Asunto:</strong> {modalData.subject}</p>
                        </Card>
                        <Card className="actions-card">
                            <p><strong>Acciones por Tomar:</strong></p>
                            <textarea
                                rows={4}
                                defaultValue={modalData.actions || ''}
                                className="textarea"
                                disabled
                            />
                        </Card>
                    </div>
                )}
            </Modal>

            {/* Modal de Editar */}
            <Modal
                visible={visibleEdit}
                title="Editar Estado"
                onCancel={closeEditModal}
                footer={null}
            >
                {editableData && (
                    <Form
                        layout="vertical"
                        onFinish={handleEditSubmit}
                        initialValues={{
                            status: editableData.status,
                            actions: editableData.actions || '',
                        }}
                    >
                        <Form.Item
                            name="status"
                            label="Estado"
                            rules={[{ required: true, message: 'Por favor selecciona un estado' }]}
                        >
                            <Select>
                                <Select.Option value="Open">Por Revisar</Select.Option>
                                <Select.Option value="Close">Finalizado</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="actions"
                            label="Acciones por Tomar"
                            rules={[{ required: true, message: 'Por favor ingresa las acciones por tomar' }]}
                        >
                            <Input.TextArea rows={4} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Guardar
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </Modal>
        </>
    );
}

export default MessageNotificationsCenter;
