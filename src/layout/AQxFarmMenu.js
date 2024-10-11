import {
  Uil500px,
  UilAirplay,
  UilArrowGrowth,
  UilAt,
  UilBagAlt,
  UilBookAlt,
  UilBookOpen,
  UilBookReader,
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

function AQxFarmMenu({ toggleCollapsed }) {
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

  const path = '/farm';
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
      <NavLink onClick={toggleCollapsed} to={`/`}>
        {t('AquaLink Analytics')}
      </NavLink>,
      'AquaLink Analytics',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`/`}>
          <UilDesktop />
        </NavLink>
      ),
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

    getItem(t('AquaLink Planning'), 'AquaLink Planning', !topMenu && <UilWindowSection />, [
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Planning')} {t('Studio')}
        </NavLink>,
        'Planning Studio',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Planificación')} {t('Real')}
        </NavLink>,
        'Planificación Real',
        null,
      ),
    ]),

    

    getItem(
      <NavLink onClick={toggleCollapsed} to={`/`}>
        {t('Tareas')}
      </NavLink>,
      'Tareas',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/`}>
          <UilCloudDataConnection />
        </NavLink>
      ),
    ),



    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('información')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),

    getItem(t('Monitoreo'), 'Monitoreo', !topMenu && <UilWindowSection />, [
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Monitoreo')} {t('General')}
        </NavLink>,
        'Monitoreo General',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Monitoreo')} {t('Producto')}
        </NavLink>,
        'Monitoreo Producto',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Monitoreo')} {t('Alimentación')}
        </NavLink>,
        'Monitoreo Alimentación',
        null,
      ),
    ]),

    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('ingresos')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),

    getItem(t('Inventario y Costos'), 'Ingreso y Costos', !topMenu && <UilWindowSection />, [
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Ver')} {t('Inventario')}
        </NavLink>,
        'Ver Inventario',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Añadir')} {t('Sumninistos')}
        </NavLink>,
        'Añaadir Suministros',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Costos')} {t('Producción')}
        </NavLink>,
        'Costos Producción',
        null,
      ),
     
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Añadir')} {t('Costos')} {t('Indirectos')}
         </NavLink>,
        'Añadir Costos Indirectos',
        null,
      ),
    ]),

    getItem(t('Laboratorios'), 'Laboratorios', !topMenu && <UilWindowSection />, [
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Ver')} {t('Laboratorios')}
        </NavLink>,
        'Ver Laboratorios',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Añadir')} {t('Laboratorio')}
        </NavLink>,
        'Añaadir laboratorio',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Solicitar')} {t('Larvas')}
        </NavLink>,
        'Solicitar Larvas',
        null,
      ),
     
    ]),

    getItem(t('Clientes'), 'Clientes', !topMenu && <UilWindowSection />, [
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Ver')} {t('Clientes')}
        </NavLink>,
        'Ver Clientes',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Añadir')} {t('Cliente')}
        </NavLink>,
        'Añadir Cliente',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Notificar')} {t('Pesca')}
        </NavLink>,
        'Notificar Pesca',
        null,
      ),
     
    ]),


    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('administración')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),

    getItem(t('Usuarios'), 'Usuarios', !topMenu && <UilWindowSection />, [
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Ver')} {t('Usuarios')}
        </NavLink>,
        'Ver Usuarios',
        null,
      ),
      getItem(
        <NavLink
          onClick={toggleCollapsed} to={`/`}
        >
          {t('Añadir')} {t('Usuario')}
        </NavLink>,
        'Añadir Usuario',
        null,
      ),
    ]),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`/`}>
        {t('Permisos')}
      </NavLink>,
      'Permisos',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/`}>
          <UilCloudDataConnection />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`/`}>
        {t('Atención al Cliente')}
      </NavLink>,
      'Atención al Cliente',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/`}>
          <UilCloudDataConnection />
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

AQxFarmMenu.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default AQxFarmMenu;
