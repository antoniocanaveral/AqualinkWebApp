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
              <h2 className="ninjadash-authentication-top__title">Seleccione un modulo</h2>
            </div>
            <div className="ninjadash-authentication-content">
              <p className="forgot-text">
                
              </p>
            </div>
          </Form>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default ForgotPassword;
