import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilGithub from '@iconscout/react-unicons/icons/uil-github';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import Alert from '../../../../components/alerts/alerts';
import { Button, Col, Form, Input, Row } from 'antd';
//import { Auth0Lock } from 'auth0-lock';
import React, { useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactSVG } from 'react-svg';
import { AuthFormWrap } from './style';
import { login/*,authOLogin*/ } from '../../../../redux/authentication/actionCreator';
import { Checkbox } from '../../../../components/checkbox/checkbox';
//import { auth0options } from '../../../../config/auth0';

//const domain = process.env.REACT_APP_AUTH0_DOMAIN;
//const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });
  const [withError, setWithError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //const lock = new Auth0Lock(clientId, domain, auth0options);

  const handleSubmit = useCallback(
    (values) => {
      dispatch(login(values, (isCompleted, error) => {
        if(error) {
          console.log( JSON.stringify(error) );
          setWithError(true);
          if(error.invalidTokenError) {
            setErrorMsg("Usuario y/o contraseña incorrectos.");
          } else if(error.networkError) {
            setErrorMsg("No es posible conectar con el servidor.");
          } else {
            setErrorMsg("Ocurrió un error desconocido");
          }
        } else {
          if(isCompleted) {
            navigate('/ecosystem');
          } else {
            navigate('/roles');
          }
        }
      }));
    },
    [navigate, dispatch],
  );


  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
          <div className="ninjadash-authentication-top">
            <h2 className="ninjadash-authentication-top__title">Iniciar Sesión</h2>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">

              {
                withError && (<div style={{marginBottom: 15}}>
                  <Alert message="Error" description={errorMsg} type="error" />
                </div> )
              }

              <Form.Item
                name="userName"
                rules={[{ message: 'Por favor ingrese su usuario o correo electrónico!', required: true }]}
                initialValue=""
                label=""
              >
                <Input placeholder="Ingrese su Usuario o Correo Electrónico" />
              </Form.Item>
              <Form.Item name="password" initialValue="" label="Contraseña">
                <Input.Password placeholder=" Ingrese su Contraseña" />
              </Form.Item>
              <div className="ninjadash-auth-extra-links">
                <Checkbox onChange={onChange} checked={state.checked}>
                  Mantenerme conectado
                </Checkbox>
                <NavLink className="forgot-pass-link" to="/forgotPassword">
                  Olvidaste tu contraseña?
                </NavLink>
              </div>
              <Form.Item>
                <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                  {isLoading ? 'Cargando...' : 'Ingresar a AquaLink'}
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="ninjadash-authentication-bottom">
            <p>
              No tienes una cuenta aún?<Link to="https://aquamanagerlatam.com/site/planes-y-precios/">Regístrate en AquaLink</Link>
            </p>
          </div>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default SignIn;
