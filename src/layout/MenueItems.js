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

function MenuItems({ toggleCollapsed }) {
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

  const path = '/admin';
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
      <NavLink onClick={toggleCollapsed} to={`${path}/`}>
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
      <NavLink onClick={toggleCollapsed} to={`${path}/dash-farms`}>
        {t('Panel de Control')}
      </NavLink>,
      'Panel de Control',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/dash-farms`}>
          <UilDesktop />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
        {t('AquaLink Analytics')}
      </NavLink>,
      'AquaLink Analytics',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/*link`}>
          <UilChart />
        </NavLink>
      ),
    ),
    getItem(t('AquaLink Planning'), 'planning', !topMenu && <UilFileCheckAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Planning Studio')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Planificación Real')} 
        </NavLink>,
        '*link',
        null,
      ),
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('información')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
    getItem(t('Monitoreo'), 'monitoreo', !topMenu && <UilDashboard />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Monitoreo General')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Monitoreo Producto')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Monitoreo Alimentación')} 
        </NavLink>,
        '*link',
        null,
      ),
    ]),
    getItem(t('Parámetros'), 'parámetros', !topMenu && <UilChartPieAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Todos los Parámetros')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Oxígeno Disuelto')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Temperatura')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Salinidad')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('pH')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Alcalinidad')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Turbidez')} 
        </NavLink>,
        '*link',
        null,
      ),
    ]),
    getItem(t('Piscina'), 'piscina', !topMenu && <UilWater />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Ver Piscinas')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Preparación de Piscinas')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Físico-Químico Agua')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Físico-Químico Suelo')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Recambio de Fondo')} 
        </NavLink>,
        '*link',
        null,
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
            {t('Flujo de Agua')} 
          </NavLink>,
          '*link',
          null,
        ),
      ]),
    getItem(t('Cultivo'), 'cultivo', !topMenu && <UilQrcodeScan />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Ver Cultivos')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Alimentación')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Bacteria')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Fertilización')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Patología')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Evolución de Peso')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Evolución de Población')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Transferencias')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Texturas')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Raleo y Pesca')} 
        </NavLink>,
        '*link',
        null,
      ),
    ]),
    getItem(t('IoT'), 'iot', !topMenu && <UilWifi />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Ver Dispositivos')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Añadir Dispositivos')} 
        </NavLink>,
        '*link',
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
    getItem(t('Inventario y Costos'), 'inventario y costos', !topMenu && <UilEstate />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Ver Inventario')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Añadir Suministros')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Costos Producción')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Registro de Costos Indirectos')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Añadir Costos Indirectos')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Costos Indirectos')} 
        </NavLink>,
        '*link',
        null,
      ),
    ]),
    getItem(t('Laboratorios'), 'laboratorios', !topMenu && <UilFlaskPotion />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Ver Laboratorios')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Añadir Laboratorio')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Solicitar Larvas')} 
        </NavLink>,
        '*link',
        null,
      ),
    ]),
    getItem(t('Clientes'), 'clientes', !topMenu && <UilBriefcaseAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Ver Clientes')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Añadir Clientes')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Notificar Pesca')} 
        </NavLink>,
        '*link',
        null,
      ),
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Administración')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
    getItem(t('Usuarios'), 'usuarios', !topMenu && <UilUsersAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Ver Usuarios')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Añadir Usuario')} 
        </NavLink>,
        '*link',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
          {t('Permisos')} 
        </NavLink>,
        '*link',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/*link`}>
        {t('Atención al Cliente')}
      </NavLink>,
      'Atención al Cliente',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/*link`}>
          <UilHeadphonesAlt />
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

      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
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

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
