import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import UilBell from '@iconscout/react-unicons/icons/uil-bell';
import UilDollarSign from '@iconscout/react-unicons/icons/uil-dollar-sign';
import UilSetting from '@iconscout/react-unicons/icons/uil-setting';
import UilSignout from '@iconscout/react-unicons/icons/uil-signout';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import { Avatar } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import Message from './Message';
import Notification from './Notification';
import Search from './Search';
import Settings from './settings';
import { logOut } from '../../../redux/authentication/actionCreator';

import { Dropdown } from '../../dropdown/dropdown';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';

const AuthInfo = React.memo(() => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    flag: 'esp',
  });
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { flag } = state;

  const SignOut = (e) => {
    e.preventDefault();

    dispatch(logOut(() => navigate('/')));
  };

  const userContent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <img src={new URL('../../../static/img/AQx-IMG/avatar48b.png', import.meta.url).href} alt="" />
          <figcaption>
            <Heading as="h5">Esteban Gallegos</Heading>
            <p>Super Administrador</p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link to="#">
              <UilUser /> Perfil
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilSetting /> Configuración
            </Link>
          </li>
          <li>
            <Link to="#">
              <UilBell /> Centro de Ayuda
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <UilSignout /> Salir
        </Link>
      </div>
    </UserDropDwon>
  );

  const onFlagChangeHandle = (value, e) => {
    e.preventDefault();
    setState({
      ...state,
      flag: value,
    });
    i18n.changeLanguage(value);
  };

  const country = (
    <NavAuth>
      <Link onClick={(e) => onFlagChangeHandle('en', e)} to="#">
        <img src={new URL('../../../static/img/AQx-IMG/en.png', import.meta.url).href} alt="" />
        <span>English</span>
      </Link>
      <Link onClick={(e) => onFlagChangeHandle('esp', e)} to="#">
        <img src={new URL('../../../static/img/AQx-IMG/esp.png', import.meta.url).href} alt="" />
        <span>Español</span>
      </Link>
      <Link onClick={(e) => onFlagChangeHandle('esp', e)} to="#">
        <img src={new URL('../../../static/img/AQx-IMG/por.png', import.meta.url).href} alt="" />
        <span>Potugués</span>
      </Link>
    </NavAuth>
  );

  return (
    <InfoWraper>
      <Message />
      <Notification />
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__language">
        <Dropdown placement="bottomRight" content={country} trigger="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <img src={new URL(`../../../../static/img/AQx-IMG/${flag}.png`, import.meta.url).href} alt="" />
          </Link>
        </Dropdown>
      </div>
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <Avatar src="../../../static/img/AQx-IMG/ecssa.png" />
            <span className="ninjadash-nav-actions__author--name">EcSSA SAS</span>
            <UilAngleDown />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
});

export default AuthInfo;
