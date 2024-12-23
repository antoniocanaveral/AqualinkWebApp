import {
  UilListUl,
  UilCalendarAlt,
  UilChartBar,
  UilClipboardAlt,
  UilUser,
  UilQuestionCircle,
  UilBell,
  UilHeadphones,
  UilDesktop,
  // UilExpandArrowsAlt,
  UilFlaskPotion,
  UilHeadphonesAlt,
  UilWindowSection,
} from '@iconscout/react-unicons';


import {
  UilTicket,
  UilCube,
  UilTruck,
  UilPlug,
  UilShoppingBag,
  UilWifiRouter,
  UilHistory,
  UilUserCircle,
  UilKeySkeleton,
} from '@iconscout/react-unicons';

import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';
import { changeDirectionMode, changeLayoutMode, changeMenuMode } from '../redux/themeLayout/actionCreator';

function AQxCustodityMenu({ toggleCollapsed }) {
  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const dispatch = useDispatch();

  const path = '/custody';
  const pathName = window.location.pathname;
  const pathArray = pathName && pathName !== '/' ? pathName.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  const changeLayout = (mode) => {
    dispatch(changeLayoutMode(mode));
  };

  const darkmodeActivated = () => {
    document.body.classList.add('dark-mode');
  };

  const darkmodeDiactivated = () => {
    document.body.classList.remove('dark-mode');
  };

  const items = [
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('principal')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/panel`}>
        {t('Panel de Control')}
      </NavLink>,
      'Panel de Control',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/panel`}>
          <UilDesktop />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/analytics`}>
        {t('Aqualink Analytics')}
      </NavLink>,
      'Aqualink Analytics',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/analytics`}>
          <UilChartBar /> {/* Ícono para Analytics */}
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/planning`}>
        {t('Aqualink Planning')}
      </NavLink>,
      'Aqualink Planning',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/planning`}>
          <UilClipboardAlt /> {/* Ícono para Planificación */}
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/harvest-reports`}>
        {t('Reportes Cosecha')}
      </NavLink>,
      'Reportes Cosecha',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/harvest-reports`}>
          <UilClipboardAlt /> {/* Ícono para Planificación */}
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/task`}>
        {t('Tareas')}
      </NavLink>,
      'Tareas',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/task`}>
          <UilListUl /> {/* Ícono para Tareas */}
        </NavLink>
      ),
    ),

    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Logística')}</NavTitle>,
      'submenu-logistica',
      null,
      null,
      'group',
    ),

    getItem(t('Coordinación'), 'coordinacion', !topMenu && <UilCalendarAlt />, [

      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/coords`}>
          {t('Coordinaciones')} {t('Activas')}
        </NavLink>,
        'light',
        null,
      )

    ]),



    getItem(t('Suministros'), 'suministros', !topMenu && <UilCube />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/supply/inventary/view`}>
          {t('Ver Inventario')}
        </NavLink>,
        'ver-inventario',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/supply/inventary/add`}>
          {t('Añadir Productos')}
        </NavLink>,
        'add-productos',
        null,
      ),
    ]),

    getItem(t('Transporte'), 'transporte', !topMenu && <UilTruck />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/transport/carriers/view`}>
          {t('Ver Transportistas')}
        </NavLink>,
        'ver-trayectos',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/transport/carriers/add`}>
          {t('Añadir Transportista')}
        </NavLink>,
        'add-transportista',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/seguridad`}>
          {t('Añadir Seguridad')}
        </NavLink>,
        'add-seguridad',
        null,
      ),
    ]),

    getItem(t('Análisis de Laboratorio'), 'analisis-laboratorio', !topMenu && <UilFlaskPotion />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/laboratory/view`}>
          {t('Ver Análisis')}
        </NavLink>,
        'ver-analisis',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/laboratory/add`}>
          {t('Añadir Análisis')}
        </NavLink>,
        'add-analisis',
        null,
      ),
    ]),


    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Proveedores')}</NavTitle>,
      'submenu-proveedores',
      null,
      null,
      'group',
    ),

    getItem(t('Compras'), 'compras', !topMenu && <UilShoppingBag />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/purchases/supplier/view`}>
          {t('Ver Proveedores')}
        </NavLink>,
        'ver-proveedores',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/purchases/supplier/add`}>
          {t('Añadir Proveedores')}
        </NavLink>,
        'add-proveedores',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/purchases/fishing-applications`}>
          {t('Solicitudes de Pesca')}
        </NavLink>,
        'solicitudes-pesca',
        null,
      ),
    ]),

    getItem(t('Trazabilidad'), 'trazabilidad', !topMenu && <UilWifiRouter />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/tracking`}>
          {t('Tracking de Lotes')}
        </NavLink>,
        'tracking-lotes',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/qr-lotes`}>
          {t('QR de Lotes')}
        </NavLink>,
        'qr-lotes',
        null,
      ),
    ]),




    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Administración')}</NavTitle>,
      'submenu-administracion',
      null,
      null,
      'group',
    ),
    getItem(
      t('Cliente'),
      'cliente',
      !topMenu && <UilUser />,
      [
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/client/view`}>{t('Ficha Cliente')}</NavLink>
          </div>,
          'cliente-ficha',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/client/add`}>{t('Añadir Cliente')}</NavLink>
          </div>,
          'cliente-usuarios',
          null,
        ),
      ]
    ),

    getItem(t('Usuarios'), 'usuarios', !topMenu && <UilUserCircle />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/users`}>
          {t('Ver Usuarios')}
        </NavLink>,
        'ver-usuarios',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/users/add`}>
          {t('Añadir Usuarios')}
        </NavLink>,
        'add-usuarios',
        null,
      ),
    ]),


    // FAQ
    getItem(
      <NavLink to={`${path}/faq`}>
        {t('FAQ')}
      </NavLink>,
      'faq',
      !topMenu && <UilQuestionCircle />,
    ),

    // Message Notifications Center
    getItem(
      <NavLink to={`${path}/message-notifications-center`}>
        {t('Mensajes y Notificaciones')}
      </NavLink>,
      'message-notifications-center',
      //icon for message-notifications-center
      !topMenu && <UilBell />,
    ),

    // SOPORTE
    getItem(
      <NavLink to={`${path}/support`}>
        {t('Soporte')}
      </NavLink>,
      'soporte',
      !topMenu && <UilHeadphones />,
    ),


  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
            `${mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
            }`,
          ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

AQxCustodityMenu.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default AQxCustodityMenu;
