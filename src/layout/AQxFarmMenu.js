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
  UilWifiRouter,
  UilWindowSection,
} from '@iconscout/react-unicons';


import {
  UilSatellite,
  UilShrimp,
  UilArchive,
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
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Principal')}</NavTitle>,
      'menu-principal',
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
      <NavLink onClick={toggleCollapsed} to={`${path}/panel`}>
        {t('Panel de Control')}
      </NavLink>,
      'panel-control',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/panel`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/analytics`}>
        {t('AquaLink Analytics')}
      </NavLink>,
      'aqualink-analytics',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/analytics`}>
          <UilChartBar />
        </NavLink>
      ),
    ),

    getItem(t('AquaLink Planning'), 'aqualink-planning', !topMenu && <UilClipboardAlt />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/planning-studio`}>
          {t('Planning Studio')}
        </NavLink>,
        'planning-studio',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/planning`}>
          {t('Planificación Real')}
        </NavLink>,
        'planificacion-real',
        null,
      ),
    ]),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/tasks`}>
        {t('Tareas')}
      </NavLink>,
      'tareas',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/tasks`}>
          <UilCalendarAlt />
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
        <NavLink className="menuItem-iocn" to={`${path}/seeding-notifications`}>
          {t('Notificaciones de')} {t('Siembra')}
        </NavLink>,
        'seeding',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/fishing-notifications`}>
          {t('Notificaciones de Pesca')}
        </NavLink>,
        'notificaciones-pesca',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/seeding-coords`}>
          {t('Coordinaciones de Siembra')}
        </NavLink>,
        'seeding-coords',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/fishing-coords`}>
          {t('Coordinaciones de Pesca')}
        </NavLink>,
        'fishing-coords',
        null,
      )


    ]),

    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Información')}</NavTitle>,
      'submenu-informacion',
      null,
      null,
      'group',
    ),

    getItem(t('Monitoreo'), 'monitoreo', !topMenu && <UilChart />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/monitoreo-general`}>
          {t('Monitoreo General')}
        </NavLink>,
        'monitoreo-general',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/monitoreo-producto`}>
          {t('Monitoreo Producto')}
        </NavLink>,
        'monitoreo-producto',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/monitoreo-alimentacion`}>
          {t('Monitoreo Alimentación')}
        </NavLink>,
        'monitoreo-alimentacion',
        null,
      ),
    ]),

    getItem(t('Parámetros'), 'parametros', !topMenu && <UilChart />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/parametros`}>
          {t('Todos los Parámetros')}
        </NavLink>,
        'todos-parametros',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/oxigeno-disuelto`}>
          {t('Oxígeno Disuelto')}
        </NavLink>,
        'oxigeno-disuelto',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/temperatura`}>
          {t('Temperatura')}
        </NavLink>,
        'temperatura',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/salinidad`}>
          {t('Salinidad')}
        </NavLink>,
        'salinidad',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/ph`}>
          {t('pH')}
        </NavLink>,
        'ph',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/alcalinidad`}>
          {t('Alcalinidad')}
        </NavLink>,
        'alcalinidad',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/turbidez`}>
          {t('Turbidez')}
        </NavLink>,
        'turbidez',
        null,
      ),
    ]),

    getItem(t('Piscina'), 'piscina', !topMenu && <UilWater />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/piscinas`}>
          {t('Ver Piscinas')}
        </NavLink>,
        'ver-piscinas',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/piscinas-preparacion`}>
          {t('Preparación de Piscinas')}
        </NavLink>,
        'preparacion-piscinas',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/piscinas-agua`}>
          {t('Físico Químico Agua')}
        </NavLink>,
        'piscinas-agua',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/piscinas-suelo`}>
          {t('Físico Químico Suelo')}
        </NavLink>,
        'piscinas-suelo',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/piscinas-fondo`}>
          {t('Recambio de Fondo')}
        </NavLink>,
        'piscinas-fondo',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/piscinas-flujo-agua`}>
          {t('Flujo de Agua')}
        </NavLink>,
        'piscinas-flujo-agua',
        null,
      ),
    ]),

    getItem(t('Cultivo'), 'cultivo', !topMenu && <UilAirplay />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos`}>
          {t('Ver Cultivos')}
        </NavLink>,
        'ver-cultivos',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos-alimentacion`}>
          {t('Alimentación')}
        </NavLink>,
        'alimentacion',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos-bacteria`}>
          {t('Bacteria')}
        </NavLink>,
        'bacteria',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos-fertilizacion`}>
          {t('Fertilización')}
        </NavLink>,
        'fertilizacion',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos-patologia`}>
          {t('Patología')}
        </NavLink>,
        'patologia',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos-evolucion-peso`}>
          {t('Evolución de Peso')}
        </NavLink>,
        'evolucion-peso',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos-evolucion-poblacion`}>
          {t('Evolución de Población')}
        </NavLink>,
        'evolucion-poblacion',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos-transferencias`}>
          {t('Transferencias')}
        </NavLink>,
        'transferencias',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos-texturas`}>
          {t('Texturas')}
        </NavLink>,
        'texturas',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivos-raleo-pesca`}>
          {t('Raleo y Pesca')}
        </NavLink>,
        'raleo-pesca',
        null,
      ),
    ]),

    getItem(t('IoT'), 'iot', !topMenu && <UilWifiRouter />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/dispositivos`}>
          {t('Ver Dispositivos')}
        </NavLink>,
        'ver-dispositivos',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/dispositivos-add`}>
          {t('Añadir Dispositivos')}
        </NavLink>,
        'add-dispositivos',
        null,
      ),
    ]),

    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Ingresos')}</NavTitle>,
      'submenu-ingresos',
      null,
      null,
      'group',
    ),

    getItem(t('Inventario y Costos'), 'inventario-costos', !topMenu && <UilArchive />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/inventario`}>
          {t('Ver Inventario')}
        </NavLink>,
        'ver-inventario',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/productos`}>
          {t('Añadir Suministros')}
        </NavLink>,
        'add-suministros',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/costos`}>
          {t('Costos Producción')}
        </NavLink>,
        'costos-produccion',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/control`}>
          {t('Registro de Costos Indirectos')}
        </NavLink>,
        'registro-costos-indirectos',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/indirectos`}>
          {t('Añadir Costos Indirectos')}
        </NavLink>,
        'add-costos-indirectos',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/logistica`}>
          {t('Costos Logísticos')}
        </NavLink>,
        'costos-logisticos',
        null,
      ),
    ]),

    getItem(t('Laboratorios'), 'laboratorios', !topMenu && <UilFlaskPotion />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/laboratorios`}>
          {t('Ver Laboratorios')}
        </NavLink>,
        'ver-laboratorios',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/laboratorios-add`}>
          {t('Añadir Laboratorio')}
        </NavLink>,
        'add-laboratorio',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/laboratorios-solicitud`}>
          {t('Solicitar Larvas')}
        </NavLink>,
        'solicitar-larvas',
        null,
      ),
    ]),

    getItem(t('Clientes'), 'clientes', !topMenu && <UilUsersAlt />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/clientes`}>
          {t('Ver Clientes')}
        </NavLink>,
        'ver-clientes',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/clientes-add`}>
          {t('Añadir Cliente')}
        </NavLink>,
        'add-cliente',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/clientes-notificaciones`}>
          {t('Notificar Pesca')}
        </NavLink>,
        'notificar-pesca',
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
        <NavLink className="menuItem-icon" to={`${path}/users`}>
          {t('Ver Usuarios')}
        </NavLink>,
        'ver-usuarios',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/users-add`}>
          {t('Añadir Usuarios')}
        </NavLink>,
        'add-usuarios',
        null,
      ),
    ]),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/permisos`}>
        {t('Permisos')}
      </NavLink>,
      'permisos',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/permisos`}>
          <UilKeySkeleton /> {/* Ícono para Permisos */}
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/customer-service`}>
        {t('Atención al Cliente')}
      </NavLink>,
      'atencion-al-cliente',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/customer-service`}>
          <UilHeadphonesAlt /> {/* Ícono para Atención al Cliente */}
        </NavLink>
      ),
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

AQxFarmMenu.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default AQxFarmMenu;
