import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Tabs, Button, Avatar, Form, Switch, Modal, Input, message } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import DonutChartComponent from '../../../components/charts/donut/DonutChartComponent';
import { UserCard } from '../../pages/style';
import Heading from '../../../components/heading/heading';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersByClient } from '../../../redux/user/actionCreator';


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

];

function UserFarm() {
    const [visiblePermisos, setVisiblePermisos] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.roles);
    console.log("users", users)
    
    useEffect(() => {
        dispatch(fetchUsersByClient());
      }, [dispatch]);

      

    const [visibleRecoverPassword, setVisibleRecoverPassword] = useState(false);
    const [selectedUserRecover, setSelectedUserRecover] = useState(null);
    

    const showPermisosModal = (user) => {
        setSelectedUser(user);
        setVisiblePermisos(true);
    };


    const handleCancelPermisos = () => {
        setVisiblePermisos(false);
        setSelectedUser(null);
    };


    const showRecoverPasswordModal = (user) => {
        setSelectedUserRecover(user);
        setVisibleRecoverPassword(true);
    };


    const handleCancelRecoverPassword = () => {
        setVisibleRecoverPassword(false);
        setSelectedUserRecover(null);
    };


    const handleRecoverPassword = async (values) => {
        try {
            const { newPassword, confirmPassword } = values;
            


            const response = await axios.post('/api/users/reset-password', {
                userId: selectedUserRecover.id,
                newPassword,
            });

            if (response.status === 200) {
                message.success('La contraseña se ha actualizado exitosamente.');
                handleCancelRecoverPassword();
            } else {
                message.error('Hubo un problema al actualizar la contraseña.');
            }
        } catch (error) {
            console.error("Error al recuperar la clave:", error);
            message.error('Hubo un error al intentar recuperar la clave.');
        }
    };

    return (
        <>
            <PageHeader
                
                highlightText={"AquaLink Administración"}
                title="Ficha de Usuarios"
            />
            <Main>
                <Row gutter={25}>
                    {users.map(user => (
                        <Col key={user.id + 1} xxl={8} md={12} sm={24} xs={24}>
                            <UserCard key={user.id}>
                                <div className="card user-card theme-list">
                                    <Cards headless>
                                        <figure>
                                            <Avatar style={{ marginRight: "20px", width:"100px" }} shape="circle" size={80} icon={<UserOutlined />} />
                                            <figcaption>
                                                <div className="card__content">
                                                    <Heading className="card__name" as="h6">
                                                        {user.Name}
                                                    </Heading>
                                                    <p className="card-info">
                                                        <span className="user-meta">
                                                            <strong>Organización: </strong>{user.AD_Org_ID.identifier}
                                                        </span>
                                                    </p>
                                                    <div className='flex-row'>
                                                        <p className="card__designation">{user?.ad_user_roles_json?.map(roles => (
                                                            <>
                                                             {roles.role.description}
                                                            </>
                                                        ))} </p>
                                                    </div>

                                                    <p className="card-info">
                                                        <span className="user-meta">
                                                            <strong>Email: </strong>{user.EMail}
                                                        </span>
                                                    </p>
                                                    <p className="card-info">
                                                        <span className="user-meta">
                                                            <strong>Phone: </strong>{user.Phone}
                                                        </span>
                                                    </p>
                                                </div>

                                                <div className="card__actions">
                                                  
                                                    {/* Nuevo Botón para Recuperar Clave */}
                                                    <Button size="default" type="primary" onClick={() => showRecoverPasswordModal(user)} style={{ marginLeft: '10px' }}>
                                                        Recuperar Clave
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

            {/* Modal para Ver Permisos */}
            {selectedUser && (
                <Modal
                    title={`Permisos de ${selectedUser.name}`}
                    visible={visiblePermisos}
                    onCancel={handleCancelPermisos}
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
                                        <Form.Item name={permiso.nombreCampo} valuePropName="checked" style={{ marginBottom: '0' }}>
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
                                        <Form.Item name={permiso.nombreCampo} valuePropName="checked" style={{ marginBottom: '0' }}>
                                            <Switch defaultChecked={permiso.allowed} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            ))}
                        </Col>
                    </Row>
                </Modal>
            )}

            {/* Modal para Recuperar Clave */}
            {selectedUserRecover && (
                <Modal
                    title={`Recuperar Clave para ${selectedUserRecover.name}`}
                    visible={visibleRecoverPassword}
                    onCancel={handleCancelRecoverPassword}
                    footer={null}
                    width={500}
                >
                    <Form
                        layout="vertical"
                        onFinish={(values) => handleRecoverPassword(values)}
                    >
                        <Form.Item
                            label="Nueva Contraseña"
                            name="newPassword"
                            rules={[
                                { required: true, message: 'Por favor, ingresa una nueva contraseña' },
                                { min: 6, message: 'La contraseña debe tener al menos 6 caracteres' },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Ingresa la nueva contraseña" />
                        </Form.Item>
                        <Form.Item
                            label="Confirmar Contraseña"
                            name="confirmPassword"
                            dependencies={['newPassword']}
                            hasFeedback
                            rules={[
                                { required: true, message: 'Por favor, confirma la contraseña' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('newPassword') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Las contraseñas no coinciden'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirma la nueva contraseña" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Recuperar Clave
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            )}
        </>
    );
}

export default UserFarm;
