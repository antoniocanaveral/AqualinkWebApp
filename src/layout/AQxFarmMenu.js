import {
  Uil500px,
  UilUser,
  UilAirplay,
  UilMoneyBill,
  UilCalendarAlt,
  UilChart,
  UilChartBar,
  UilClipboardAlt,
  UilCloudDataConnection,
  UilDesktop,
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
    // Aseguramos que los menús padres permanezcan abiertos cuando seleccionamos un submenú
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [...openKeys, latestOpenKey] : keys);
  };

  const onClick = (item) => {
    // Ajustamos para que no se cierren los menús padres
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
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Recursos de Producción')}</NavTitle>,
      'submenu-informacion',
      null,
      null,
      'group',
    ),

    // MONITOREO
    getItem(
      t('Monitoreo'),
      'monitoreo',
      !topMenu && <UilChart />,
      [
        getItem(
          <NavLink className="menuItem-icon menu-item-level-1" to={`${path}/monitoreo-general`}>
            {t('Monitoreo General')}
          </NavLink>,
          'monitoreo-general',
          null,
        ),
        getItem(
          t('Alimentación'),
          'monitoreo-alimentacion',
          <div style={{ marginLeft: "5px" }}>
          </div>,
          [
            getItem(
              <NavLink className="menuItem-icon menu-item-level-2" to={`${path}/monitoring/actual-projected`}>
                {t('Real vs Proyectada')}
              </NavLink>,
              'alimentacion-real-vs-proyectada',
              null,
            ),
            getItem(
              <NavLink className="menuItem-icon menu-item-level-2" to={`${path}/monitoring/protein-percentage`}>
                {t('Por % de Proteína')}
              </NavLink>,
              'alimentacion-proteina',
              null,
            ),
            getItem(
              <NavLink className="menuItem-icon menu-item-level-2" to={`${path}/monitoring/plate-sampling`}>
                {t('Muestreo de Platos')}
              </NavLink>,
              'alimentacion-muestreo-platos',
              null,
            ),
          ]
        ),
      ]
    ),

    // PARAMETROS
    getItem(
      t('Parámetros'),
      'parametros',
      !topMenu && <UilChart />,
      [
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/parameters/od-temp`}>{t('OD y Temp')}</NavLink>
          </div>,
          'parametros-od-temp',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/parameters/water-quality`}>{t('Calidad de Agua')}</NavLink>
          </div>,
          'parametros-calidad-agua',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/parameters/soil-quality`}>{t('Calidad de Suelo')}</NavLink>
          </div>,
          'parametros-calidad-suelo',
          null,
        ),
      ]
    ),

    // CULTIVO
    getItem(
      t('Cultivo'),
      'cultivo',
      !topMenu && <UilAirplay />,
      [
        
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/crop/general-pathology`}>{t('Patología')}</NavLink>
          </div>,
          'patologia-general',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/crop/shrimp`}>{t('Siembra')}</NavLink>
          </div>,
          'cultivo-siembras',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/crop/transfer`}>{t('Transferencia')}</NavLink>
          </div>,
          'cultivo-transferencia',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/crop/population-biomass`}>{t('Población / Biomasa')}</NavLink>
          </div>,
          'cultivo-poblacion-biomasa',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/crop/texture`}>{t('Textura')}</NavLink>
          </div>,
          'cultivo-textura',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/crop/classification`}>{t('Clasificación')}</NavLink>
          </div>,
          'cultivo-clasificacion',
          null,
        ),
   
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/crop/harvest`}>{t('Cosecha/Raleo')}</NavLink>
          </div>,
          'cultivo-cosecha',
          null,
        ),
      ]
    ),

    // MEDIO DE CULTIVO
    getItem(
      t('Medio de Cultivo'),
      'medio-cultivo',
      !topMenu && <UilWater />,
      [
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/culture-medium/water-flow`}>{t('Flujo/Recambio de Agua')}</NavLink>
          </div>,
          'medio-cultivo-flujo-agua',
          null,
        ),
     
       
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/culture-medium/preparation-bioremediation`}>{t('Preparación de Suelo y Biorremediación')}</NavLink>
          </div>,
          'medio-cultivo-preparation',
          null,
        ),
      ]
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


    getItem(t('Laboratorios'), 'laboratorios', !topMenu && <UilFlaskPotion />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/laboratory/view`}>
          {t('Ver Laboratorios')}
        </NavLink>,
        'ver-laboratorios',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/laboratory/add`}>
          {t('Añadir Laboratorio')}
        </NavLink>,
        'add-laboratorio',
        null,
      ),
    ]),


    getItem(t('Empacadoras'), 'Empacadoras', !topMenu && <UilFlaskPotion />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/packing/view`}>
          {t('Ver Empacadora')}
        </NavLink>,
        'ver-empacadora',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/packing/add`}>
          {t('Añadir Empacadora')}
        </NavLink>,
        'add-empacadora',
        null,
      ),
    ]),


    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('RECURSOS PRODUCCIÓN')}</NavTitle>,
      'submenu-ingresos',
      null,
      null,
      'group',
    ),

    getItem(
      t('Inventario'),
      'inventario',
      !topMenu && <UilArchive />,
      [
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/inventory/view`}>{t('Ver Inventario')}</NavLink>
          </div>,
          'inventario-ver',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/inventory/add`}>{t('Añadir Inventario')}</NavLink>
          </div>,
          'inventario-add',
          null,
        ),
      ]
    ),

    // COSTOS
    getItem(
      t('Costos'),
      'costos',
      !topMenu && <UilMoneyBill />,
      [
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/costs/view`}>{t('Ver Costos')}</NavLink>
          </div>,
          'costos-ver',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/costs/cost-center`}>{t('Ver Centro de Costos')}</NavLink>
          </div>,
          'centro-costos-ver',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/costs/indirect-add`}>{t('Añadir Costo Indirecto Ha/día')}</NavLink>
          </div>,
          'costo-indirecto-add',
          null,
        ),
      ]
    ),



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
            <NavLink to={`${path}/cliente-ficha`}>{t('Ficha Cliente')}</NavLink>
          </div>,
          'cliente-ficha',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/cliente-usuarios`}>{t('Usuarios')}</NavLink>
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
        <NavLink className="menuItem-icon" to={`${path}/users-add`}>
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
  
    // SOPORTE
    getItem(
      <NavLink to={`${path}/soporte`}>
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

AQxFarmMenu.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default AQxFarmMenu;
