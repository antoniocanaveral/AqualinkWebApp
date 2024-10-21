import {
  Uil500px,
  UilAirplay,
  UilArrowGrowth,
  UilAt,
  UilBagAlt,
  UilBookAlt,
  UilBookOpen,
  UilBookReader,
  UilListUl,
  UilBriefcaseAlt,
  UilCalendarAlt,
  UilChart,
  UilChartBar,
  UilChartPieAlt,
  UilChat,
  UilCheckSquare,
  UilCircle,
  UilClipboardAlt,
  UilClock,
  UilCloudDataConnection,
  UilCompactDisc,
  UilCreateDashboard,
  UilDatabase,
  UilDashboard,
  UilDesktop,
  UilDocumentLayoutLeft,
  UilEdit,
  UilEnvelope,
  UilEstate,
  UilExchange,
  UilExclamationOctagon,
  // UilExpandArrowsAlt,
  UilFlaskPotion,
  UilFile,
  UilFileCheckAlt,
  UilFileShieldAlt,
  UilHeadphones,
  UilHeadphonesAlt,
  UilIcons,
  UilImages,
  UilLayerGroup,
  UilMap,
  UilPresentation,
  UilQrcodeScan,
  UilQuestionCircle,
  UilSearch,
  UilServer,
  UilSetting,
  UilShoppingCart,
  UilSquareFull,
  UilTable,
  UilUsdCircle,
  UilUsersAlt,
  UilWater,
  UilWifi,
  UilWindowSection,
} from '@iconscout/react-unicons';


import {
  UilMonitorHeartRate,
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
import versions from '../demoData/changelog.json';
import { changeDirectionMode, changeLayoutMode, changeMenuMode } from '../redux/themeLayout/actionCreator';
import UilSync from '@iconscout/react-unicons/icons/uil-sync';

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
  const changeNavbar = (topMode) => {
    const html = document.querySelector('html');
    if (topMode) {
      html.classList.add('ninjadash-topmenu');
    } else {
      html.classList.remove('ninjadash-topmenu');
    }
    dispatch(changeMenuMode(topMode));
  };
  const changeLayoutDirection = (rtlMode) => {
    if (rtlMode) {
      const html = document.querySelector('html');
      html.setAttribute('dir', 'rtl');
    } else {
      const html = document.querySelector('html');
      html.setAttribute('dir', 'ltr');
    }
    dispatch(changeDirectionMode(rtlMode));
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
      <NavLink onClick={toggleCollapsed} to={`/`}>
        {t('Ecosistema')}
      </NavLink>,
      'Ecosistema',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/`}>
          <UilCloudDataConnection />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}`}>
        {t('Panel de Control')}
      </NavLink>,
      'Panel de Control',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}`}>
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
        <NavLink className="menuItem-icon" to={`${path}/fishing-notifications`}>
          {t('Notificaciones de Pesca')}
        </NavLink>,
        'notificaciones-pesca',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/coords`}>
          {t('Ver')} {t('Coordinaciones')}
        </NavLink>,
        'light',
        null,
      )

    ]),

    getItem(t('Sellos y Contenedores'), 'sellos-contenedores', !topMenu && <UilTicket />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/sellos`}>
          {t('Administración de Sellos')}
        </NavLink>,
        'administracion-sellos',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/contenedores`}>
          {t('Administración de Contenedores')}
        </NavLink>,
        'administracion-contenedores',
        null,
      ),
    ]),

    getItem(t('Suministros'), 'suministros', !topMenu && <UilCube />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/inventario`}>
          {t('Ver Inventario')}
        </NavLink>,
        'ver-inventario',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/productos`}>
          {t('Añadir Productos')}
        </NavLink>,
        'add-productos',
        null,
      ),
    ]),

    getItem(t('Transporte'), 'transporte', !topMenu && <UilTruck />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/trayectos`}>
          {t('Ver Trayectos')}
        </NavLink>,
        'ver-trayectos',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/transporte`}>
          {t('Añadir Transportista')}
        </NavLink>,
        'add-transportista',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/vehiculos`}>
          {t('Añadir Vehículos')}
        </NavLink>,
        'add-vehiculos',
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
        <NavLink className="menuItem-icon" to={`${path}/analisis`}>
          {t('Ver Análisis')}
        </NavLink>,
        'ver-analisis',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/add-analisis`}>
          {t('Añadir Análisis')}
        </NavLink>,
        'add-analisis',
        null,
      ),
    ]),

    getItem(t('IoT'), 'iot', !topMenu && <UilPlug />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/dispositivos`}>
          {t('Ver Dispositivos')}
        </NavLink>,
        'ver-dispositivos',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/add-dispositivos`}>
          {t('Añadir Dispositivos')}
        </NavLink>,
        'add-dispositivos',
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
        <NavLink className="menuItem-icon" to={`${path}/proveedores`}>
          {t('Ver Proveedores')}
        </NavLink>,
        'ver-proveedores',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/add-proveedores`}>
          {t('Añadir Proveedores')}
        </NavLink>,
        'add-proveedores',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/add-pesca`}>
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

    getItem(t('Histórico'), 'historico', !topMenu && <UilHistory />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/historico`}>
          {t('Histórico de Clientes')}
        </NavLink>,
        'historico-clientes',
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

    getItem(t('Usuarios'), 'usuarios', !topMenu && <UilUserCircle />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/ver-usuarios`}>
          {t('Ver Usuarios')}
        </NavLink>,
        'ver-usuarios',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/add-usuarios`}>
          {t('Añadir Usuarios')}
        </NavLink>,
        'add-usuarios',
        null,
      ),
    ]),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/permissions`}>
        {t('Permisos')}
      </NavLink>,
      'Permisos',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/permissions`}>
          <UilKeySkeleton /> {/* Ícono para Permisos */}
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/customer service`}>
        {t('Atención al Cliente')}
      </NavLink>,
      'Atención al Cliente',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/customer service`}>
          <UilHeadphonesAlt /> {/* Ícono para Atención al Cliente */}
        </NavLink>
      ),
    ),


    getItem(t('Visualización'), 'layout', !topMenu && <UilWindowSection />, [
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            darkmodeDiactivated();
            changeLayout('lightMode');
          }}
          to="#"
        >
          {t('light')} {t('mode')}
        </NavLink>,
        'light',
        null,
      ),
      getItem(
        <NavLink
          onClick={() => {
            toggleCollapsed();
            darkmodeActivated();
            changeLayout('darkMode');
          }}
          to="#"
        >
          {t('dark')} {t('mode')}
        </NavLink>,
        'dark',
        null,
      ),
    ]),
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
