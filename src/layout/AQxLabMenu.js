import {
  UilCloudDataConnection,
  UilDesktop,
} from '@iconscout/react-unicons';

import {
  UilChartBar,
  UilClipboardAlt,
  UilListUl,
  UilMonitorHeartRate,
  UilChartPie,
  UilCalendarAlt,
  UilWater, // Para Tanques (flujo de agua o agua en general)
  UilFlaskPotion,    // Para Cultivo (representa investigación y cultivo)
  UilPlug,           // Para IoT (tecnología de conexión)
  UilMapMarkerAlt,   // Para Coordinación
  UilArchive,        // Para Inventario
  UilBug,            // Para Nauplieras (representa organismos pequeños)
  UilTrophy,         // Para Cosechas (reservas y pedidos)
  UilUserCircle,     // Para Usuarios
  UilKeySkeleton,    // Para Permisos
  UilHeadphonesAlt,  // Para Atención al Cliente
  UilSync
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

function AQxLabMenu({ toggleCollapsed }) {
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

  const path = '/lab';
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
    console.log('Item clicked:', item); 
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
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('información')}</NavTitle>,
      'submenu-informacion',
      null,
      null,
      'group',
    ),
    
    getItem(t('Monitoreo'), 'monitoreo-main', !topMenu && <UilMonitorHeartRate />, [
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/monitoring/general-monitoring`}>
          {t('Monitoreo')} {t('General')}
        </NavLink>,
        'genearl-monitoring',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/monitoring/product-monitoring`}>
          {t('Monitoreo')} {t('Producto')}
        </NavLink>,
        'product-monitoring',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/monitoring/feeding-monitoring`}>
          {t('Monitoreo')} {t('Alimentación')}
        </NavLink>,
        'feeding-monitoring',
        null,
      ),
    ]),
    
    getItem(t('Parámetros'), 'parametros-main', !topMenu && <UilChartPie />, [
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/parameters/all-parameters`}>
          {t('Todos los')} {t('Parámetros')}
        </NavLink>,
        'all-parameters',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/parameters/dissolved-oxygens`}>
          {t('Oxígenos ')} {t('Disueltos')}
        </NavLink>,
        'dissolved-oxygens',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/parameters/temperature`}>
          {t('Temperatura')}
        </NavLink>,
        'temperature',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/parameters/Salinity`}>
          {t('Salinidad')}
        </NavLink>,
        'salinity',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/parameters/ph`}>
          {t('pH')}
        </NavLink>,
        'ph',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/parameters/alkalinity`}>
          {t('Alcalinidad')}
        </NavLink>,
        'alkalinity',
        null,
      ),
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/parameters/turbidity`}>
          {t('Turbidez')}
        </NavLink>,
        'turbidity',
        null,
      ),
    ]),
    
    // Menú de Tanques
    getItem(t('Tanques'), 'tanques-main', !topMenu && <UilWater />, [
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/tanks/see-tanks`}>
          {t('Ver')} {t('Tanques')}
        </NavLink>,
        'see-tanks',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/tanks/tank-preparation`}>
          {t('Preparación de Tanques')}
        </NavLink>,
        'tank-preparation',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/tanks/water-physicochemical`}>
          {t('Físico Químico Agua')}
        </NavLink>,
        'water-physicochemical',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/tanks/air-supply`}>
          {t('Suministro de Aire')}
        </NavLink>,
        'air-supply',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/tanks/water-flow`}>
          {t('Flujo de Agua')}
        </NavLink>,
        'water-flow',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/tanks/water-exchange`}>
          {t('Recambio de Agua')}
        </NavLink>,
        'water-exchange',
        null,
      ),
    ]),
    
    // Menú de Cultivo
    getItem(t('Cultivo'), 'cultivo-main', !topMenu && <UilFlaskPotion />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/view`}>
          {t('Ver Cultivos')}
        </NavLink>,
        'view-cultivos',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/feeding`}>
          {t('Alimentación')}
        </NavLink>,
        'feeding',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/algae`}>
          {t('Algas')}
        </NavLink>,
        'algae',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/artemia`}>
          {t('Artemia')}
        </NavLink>,
        'artemia',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/bacteria`}>
          {t('Bacteria')}
        </NavLink>,
        'bacteria',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/fertilization`}>
          {t('Fertilización')}
        </NavLink>,
        'fertilization',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/pathology`}>
          {t('Patología')}
        </NavLink>,
        'pathology',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/weight-evolution`}>
          {t('Evolución de Peso')}
        </NavLink>,
        'weight-evolution',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/population-evolution`}>
          {t('Evolución de Población')}
        </NavLink>,
        'population-evolution',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/transfer`}>
          {t('Transferencia')}
        </NavLink>,
        'transfer',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/cultivo/thinning-fishing`}>
          {t('Raleo y Pesca')}
        </NavLink>,
        'thinning-fishing',
        null,
      ),
    ]),
    
    // Menú de IoT
    getItem(t('IoT'), 'iot-main', !topMenu && <UilPlug />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/iot/view-devices`}>
          {t('Ver Dispositivos')}
        </NavLink>,
        'view-devices',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/iot/add-device`}>
          {t('Añadir Dispositivos')}
        </NavLink>,
        'add-device',
        null,
      ),
    ]),
    
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('logistica')}</NavTitle>,
      'submenu-logistica',
      null,
      null,
      'group',
    ),
    
    getItem(t('Coordinación'), 'coord-main', !topMenu && <UilMapMarkerAlt />, [
      
      getItem(
        <NavLink className="menuItem-iocn" to={`${path}/seeding-coords`}>
          {t('Ver')} {t('Coordinaciones')}
        </NavLink>,
        'coords',
        null,
      ),
    ]),
    
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Inventario')}</NavTitle>,
      'submenu-inventarios',
      null,
      null,
      'group',
    ),
    
    // Menú de Inventario
    getItem(t('Inventario'), 'inventario-main', !topMenu && <UilArchive />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/inventory/view`}>
          {t('Ver Inventario')}
        </NavLink>,
        'view-inventory',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/inventory/add-products`}>
          {t('Añadir Productos')}
        </NavLink>,
        'add-products',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/inventory/costs`}>
          {t('Costos')}
        </NavLink>,
        'costs',
        null,
      ),
    ]),
    
    // Menú de Nauplieras
    getItem(t('Nauplieras'), 'nauplieras-main', !topMenu && <UilFlaskPotion />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/nauplieras/view`}>
          {t('Ver Nauplieras')}
        </NavLink>,
        'view-nauplieras',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/nauplieras/add-naupliera`}>
          {t('Añadir Naupliera')}
        </NavLink>,
        'add-naupliera',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/nauplieras/request-nauplii`}>
          {t('Solicitar Nauplios')}
        </NavLink>,
        'request-nauplii',
        null,
      ),
    ]),
    
    // Menú de Cosechas
    getItem(t('Cosechas'), 'cosechas-main', !topMenu && <UilSync />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/harvest/reservations`}>
          {t('Reservas')}
        </NavLink>,
        'reservations',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/harvest/orders`}>
          {t('Pedidos')}
        </NavLink>,
        'orders',
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
    
    // Menú de Usuarios
    getItem(t('Usuarios'), 'usuarios-main', !topMenu && <UilUserCircle />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/users/view`}>
          {t('Ver Usuarios')}
        </NavLink>,
        'view-users',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/users/add`}>
          {t('Añadir Usuarios')}
        </NavLink>,
        'add-users',
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

AQxLabMenu.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default AQxLabMenu;
