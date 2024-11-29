import React, { Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Tabs, Button, Avatar, Form, Switch, Modal } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import DonutChartComponent from '../../../components/charts/donut/DonutChartComponent';
import { UserCard } from '../../pages/style';
import Heading from '../../../components/heading/heading';
import { UserOutlined } from '@ant-design/icons';


const data = [
    {
        id: 1,
        name: "Anthony",
        designation: "Gerente General",
        ambiente: "AquaLink WebApp Farm",
        area: "Gerencia",
        email: "anthony@example.com",
        phone: "123-456-7890",
        permissions: [
            { dispositivo: 'Tablet', permiso: 'Captura (registro) de datos App', nombreCampo: 'capturaApp', allowed: true },
            { dispositivo: 'Tablet', permiso: 'Ver datos App', nombreCampo: 'verDatosApp', allowed: false },
            { dispositivo: 'Web App', permiso: 'Ver datos Web App', nombreCampo: 'verDatosWebApp', allowed: true },
            { dispositivo: 'Web App', permiso: 'Editar Web App', nombreCampo: 'editarWebApp', allowed: false },
            { dispositivo: 'Web App', permiso: 'Ver Analytics', nombreCampo: 'verAnalytics', allowed: true },
            { dispositivo: 'Web App', permiso: 'Editar Analytics', nombreCampo: 'editarAnalytics', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Monitoreo y Evaluación', nombreCampo: 'verMonitoreo', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Control', nombreCampo: 'verControl', allowed: false },
            { dispositivo: 'Web App', permiso: 'Editar Control', nombreCampo: 'editarControl', allowed: false },
        ]
    },
    {
        id: 2,
        name: "Maria",
        designation: "Asistente Gerencia",
        area: "Gerencia",
        ambiente: "AquaLink WebApp Farm",
        email: "maria@example.com",
        phone: "987-654-3210",
        permissions: [
            { dispositivo: 'Tablet', permiso: 'Captura (registro) de datos App', nombreCampo: 'capturaApp', allowed: true },
            { dispositivo: 'Tablet', permiso: 'Ver datos App', nombreCampo: 'verDatosApp', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver datos Web App', nombreCampo: 'verDatosWebApp', allowed: false },
            { dispositivo: 'Web App', permiso: 'Editar Web App', nombreCampo: 'editarWebApp', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Analytics', nombreCampo: 'verAnalytics', allowed: false },
            { dispositivo: 'Web App', permiso: 'Editar Analytics', nombreCampo: 'editarAnalytics', allowed: false },
            { dispositivo: 'Web App', permiso: 'Ver Monitoreo y Evaluación', nombreCampo: 'verMonitoreo', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Control', nombreCampo: 'verControl', allowed: true },
            { dispositivo: 'Web App', permiso: 'Editar Control', nombreCampo: 'editarControl', allowed: true },
        ]
    },
    {
        id: 1,
        name: "Anthony",
        designation: "Gerente General",
        ambiente: "AquaLink WebApp Farm",
        area: "Gerencia",
        email: "anthony@example.com",
        phone: "123-456-7890",
        permissions: [
            { dispositivo: 'Tablet', permiso: 'Captura (registro) de datos App', nombreCampo: 'capturaApp', allowed: true },
            { dispositivo: 'Tablet', permiso: 'Ver datos App', nombreCampo: 'verDatosApp', allowed: false },
            { dispositivo: 'Web App', permiso: 'Ver datos Web App', nombreCampo: 'verDatosWebApp', allowed: true },
            { dispositivo: 'Web App', permiso: 'Editar Web App', nombreCampo: 'editarWebApp', allowed: false },
            { dispositivo: 'Web App', permiso: 'Ver Analytics', nombreCampo: 'verAnalytics', allowed: true },
            { dispositivo: 'Web App', permiso: 'Editar Analytics', nombreCampo: 'editarAnalytics', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Monitoreo y Evaluación', nombreCampo: 'verMonitoreo', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Control', nombreCampo: 'verControl', allowed: false },
            { dispositivo: 'Web App', permiso: 'Editar Control', nombreCampo: 'editarControl', allowed: false },
        ]
    },
    {
        id: 2,
        name: "Maria",
        designation: "Asistente Gerencia",
        area: "Gerencia",
        ambiente: "AquaLink WebApp Farm",
        email: "maria@example.com",
        phone: "987-654-3210",
        permissions: [
            { dispositivo: 'Tablet', permiso: 'Captura (registro) de datos App', nombreCampo: 'capturaApp', allowed: true },
            { dispositivo: 'Tablet', permiso: 'Ver datos App', nombreCampo: 'verDatosApp', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver datos Web App', nombreCampo: 'verDatosWebApp', allowed: false },
            { dispositivo: 'Web App', permiso: 'Editar Web App', nombreCampo: 'editarWebApp', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Analytics', nombreCampo: 'verAnalytics', allowed: false },
            { dispositivo: 'Web App', permiso: 'Editar Analytics', nombreCampo: 'editarAnalytics', allowed: false },
            { dispositivo: 'Web App', permiso: 'Ver Monitoreo y Evaluación', nombreCampo: 'verMonitoreo', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Control', nombreCampo: 'verControl', allowed: true },
            { dispositivo: 'Web App', permiso: 'Editar Control', nombreCampo: 'editarControl', allowed: true },
        ]
    },
    {
        id: 1,
        name: "Anthony",
        designation: "Gerente General",
        ambiente: "AquaLink WebApp Farm",
        area: "Gerencia",
        email: "anthony@example.com",
        phone: "123-456-7890",
        permissions: [
            { dispositivo: 'Tablet', permiso: 'Captura (registro) de datos App', nombreCampo: 'capturaApp', allowed: true },
            { dispositivo: 'Tablet', permiso: 'Ver datos App', nombreCampo: 'verDatosApp', allowed: false },
            { dispositivo: 'Web App', permiso: 'Ver datos Web App', nombreCampo: 'verDatosWebApp', allowed: true },
            { dispositivo: 'Web App', permiso: 'Editar Web App', nombreCampo: 'editarWebApp', allowed: false },
            { dispositivo: 'Web App', permiso: 'Ver Analytics', nombreCampo: 'verAnalytics', allowed: true },
            { dispositivo: 'Web App', permiso: 'Editar Analytics', nombreCampo: 'editarAnalytics', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Monitoreo y Evaluación', nombreCampo: 'verMonitoreo', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Control', nombreCampo: 'verControl', allowed: false },
            { dispositivo: 'Web App', permiso: 'Editar Control', nombreCampo: 'editarControl', allowed: false },
        ]
    },
    {
        id: 2,
        name: "Maria",
        designation: "Asistente Gerencia",
        area: "Gerencia",
        ambiente: "AquaLink WebApp Farm",
        email: "maria@example.com",
        phone: "987-654-3210",
        permissions: [
            { dispositivo: 'Tablet', permiso: 'Captura (registro) de datos App', nombreCampo: 'capturaApp', allowed: true },
            { dispositivo: 'Tablet', permiso: 'Ver datos App', nombreCampo: 'verDatosApp', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver datos Web App', nombreCampo: 'verDatosWebApp', allowed: false },
            { dispositivo: 'Web App', permiso: 'Editar Web App', nombreCampo: 'editarWebApp', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Analytics', nombreCampo: 'verAnalytics', allowed: false },
            { dispositivo: 'Web App', permiso: 'Editar Analytics', nombreCampo: 'editarAnalytics', allowed: false },
            { dispositivo: 'Web App', permiso: 'Ver Monitoreo y Evaluación', nombreCampo: 'verMonitoreo', allowed: true },
            { dispositivo: 'Web App', permiso: 'Ver Control', nombreCampo: 'verControl', allowed: true },
            { dispositivo: 'Web App', permiso: 'Editar Control', nombreCampo: 'editarControl', allowed: true },
        ]
    }
];

function UserFarm() {
    const [visible, setVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const showModal = (user) => {
        setSelectedUser(user);
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
        setSelectedUser(null);
    };
    return (
        <>
            <PageHeader
                className="ninjadash-page-header-main"
                highlightText={"AquaLink Administración"}
                title="Ficha de Usuarios"
            />
            <Main>
                <Row gutter={25}>
                    {data.map(user => (
                        <Col key={user.id + 1} xxl={8} md={12} sm={24} xs={24}>
                            <UserCard key={user.id}>
                                <div className="card user-card theme-list">
                                    <Cards headless>
                                        <figure>
                                            <Avatar  style={{ marginRight: "20px", width:"100px" }} shape="circle" size={80} icon={<UserOutlined />} />
                                            <figcaption>
                                                <div className="card__content">
                                                    <Heading className="card__name" as="h6">
                                                        {user.name}
                                                    </Heading>
                                                    <div className='flex-row'>
                                                        <p className="card__designation">{user.designation}- {user.area}</p>
                                                    </div>

                                                    <div className='flex-row'>
                                                        <p className="card__designation">{user.ambiente}</p>
                                                    </div>

                                                    <p className="card-info">
                                                        <span className="user-meta">
                                                            <strong>Email: </strong>{user.email}
                                                        </span>
                                                    </p>
                                                    <p className="card-info">
                                                        <span className="user-meta">
                                                            <strong>Phone: </strong>{user.phone}
                                                        </span>
                                                    </p>

                                                
                                                </div>

                                                <div className="card__actions">
                                                <Button size="default" type="white" onClick={() => showModal(user)}>
                                                    Ver Permisos
                                                </Button>
                                            </div>
                                            </figcaption>
                                        </figure>
                                    </Cards>
                                </div>
                            </UserCard>
                        </Col>

                    ))}
                </Row>
            </Main>
            {selectedUser && (
                <Modal
                    title={`Permisos de ${selectedUser.name}`}
                    visible={visible}
                    onCancel={handleCancel}
                    footer={null}
                    width={800}
                >
                    <Row gutter={[16, 16]}>
                        {/* Permisos de Tablet */}
                        <Col span={24}>
                            <h3>Tablet</h3>
                            {selectedUser.permissions.filter(permiso => permiso.dispositivo === 'Tablet').map((permiso, index) => (
                                <Row key={index} justify="space-between" align="middle">
                                    <Col span={16}>{permiso.permiso}</Col>
                                    <Col span={8}>
                                        <Form.Item name={permiso.nombreCampo} valuePropName="checked">
                                            <Switch defaultChecked={permiso.allowed} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            ))}
                        </Col>

                        {/* Permisos de Web App */}
                        <Col span={24}>
                            <h3>Web App</h3>
                            {selectedUser.permissions.filter(permiso => permiso.dispositivo === 'Web App').map((permiso, index) => (
                                <Row key={index} justify="space-between" align="middle">
                                    <Col span={16}>{permiso.permiso}</Col>
                                    <Col span={8}>
                                        <Form.Item name={permiso.nombreCampo} valuePropName="checked">
                                            <Switch defaultChecked={permiso.allowed} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            ))}
                        </Col>
                    </Row>
                </Modal>
            )}
        </>
    );
}

export default UserFarm;
