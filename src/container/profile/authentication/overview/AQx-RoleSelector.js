import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilGithub from '@iconscout/react-unicons/icons/uil-github';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import { Button, Col, Form, Input, Row, Radio } from 'antd';

import React, { useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { ReactSVG } from 'react-svg';
import { AuthFormWrap } from './style';
import { logOut, selectRole } from '../../../../redux/authentication/actionCreator';
import { Checkbox } from '../../../../components/checkbox/checkbox';





const RadioGroup = Radio.Group;

function RoleSelector() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();
  const [roleId, setRoleId] = useState(null);

  const { roles, selectedClientId } = useSelector((state) => {
    return {
      roles: state.auth.roles ?  typeof state.auth.roles === "string" ? JSON.parse(state.auth.roles) : state.auth.roles : [],
      selectedClientId: state.auth.selectedClientId
    };
  });

  console.log(roleId);
  console.log(selectedClientId);

  const onClick = () => {
    if(roleId) {
      dispatch(selectRole(roles, roleId, selectedClientId, (isCompleted) => {
        console.log('Role selected:', isCompleted);
        if(isCompleted) {
          navigate('/ecosystem', { replace: true });
        }
      }));
    } else {
      dispatch(logOut(() => {}));
    }
  };
  
  const renderOptions = (item) => {
    return (<div key={item.id}><Radio value={item.id}>{item.name}</Radio></div>);
  }

  const onChange = (e) => {
    setRoleId(e.target.value);
  };

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
          <div className="ninjadash-authentication-top">
            <h2 className="ninjadash-authentication-top__title">Seleccione un nivel de acceso</h2>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="login" form={form} layout="vertical">
              <RadioGroup style={{ marginRight: 8 }} onChange={onChange} name='roles'>
                { 
                  roles.map((item, i) => {
                    return renderOptions(item)
                  })
                }
              </RadioGroup>
              <Form.Item>
                <Button className="btn-signin" htmlType="submit" type="primary" size="large" onClick={onClick}>
                  {isLoading ? 'Cargando...' : 'Ingresar a AquaLink'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </AuthFormWrap>
      </Col>
    </Row>
  );
}

export default RoleSelector;
