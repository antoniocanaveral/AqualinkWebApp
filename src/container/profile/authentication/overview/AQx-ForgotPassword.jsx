import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';
import { AuthFormWrap } from './style';

function ForgotPassword() {
  const [state, setState] = useState({
    values: null,
  });
  const handleSubmit = (values) => {
    setState({ ...state, values });
  };

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
          <Form name="forgotPass" onFinish={handleSubmit} layout="vertical">
            <div className="ninjadash-authentication-top">
              <h2 className="ninjadash-authentication-top__title">Recuperar Contraseña</h2>
            </div>
            <div className="ninjadash-authentication-content">
              <p className="forgot-text">
                Ingrese el Correo Electrónico que se le asignó en AquaLink y se le enviará instrucciones para restablecer su contraseña.
              </p>
              <Form.Item
                label="Correo Electrónico"
                name="email"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
              >
                <Input placeholder="Ingrese su Correo Electrónico" />
              </Form.Item>
              <Form.Item>
                <Button className="btn-reset" htmlType="submit" type="primary" size="large">
                  Restablecer Contraseña
                </Button>
              </Form.Item>
            </div>
            <div className="ninjadash-authentication-bottom">
              <p className="return-text">
                Regresar a<Link to="/AQx-SignIn">Iniciar Sesión</Link>
              </p>
            </div>
          </Form>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default ForgotPassword;
