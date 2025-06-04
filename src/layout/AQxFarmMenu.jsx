import {
  UilUser,
  UilAirplay,
  UilMoneyBill,
  UilCalendarAlt,
  UilChart,
  UilChartBar,
  UilClipboardAlt,
  UilDesktop,
  UilFlaskPotion,
  UilHeadphones,
  UilQuestionCircle,
  UilWater,

  UilBell,
} from '@iconscout/react-unicons';


import {
  UilWifiRouter,
} from '@iconscout/react-unicons';

import {
  UilArchive,
  UilUserCircle,
} from '@iconscout/react-unicons';

import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';

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


  const path = '/farm';
  const pathName = window.location.pathname;
  const pathArray = pathName && pathName !== '/' ? pathName.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [...openKeys, latestOpenKey] : keys);
  };

  const onClick = (item) => {
    if (window.innerWidth <= 1024) {
      toggleCollapsed();
    }
  };




  const items = [
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Principal')}</NavTitle>,
      'menu-principal',
      null,
      null,
      'group',
    ),


    getItem(t('Panel de Control'), 'aqualink-panel', !topMenu && <UilDesktop />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/panel-overview`}>
          {t('Panel Overview')}
        </NavLink>,
        'panel-overview',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/panel`}>
          {t('Panel Detalles')}
        </NavLink>,
        'panel-details',
        null,
      ),
    ]),

    getItem(t('AquaLink Planning'), 'aqualink-planning', !topMenu && <UilClipboardAlt />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/planning-studio`}>
          {t('Planning Studio')}
        </NavLink>,
        'planning-studio',
        null,
      ),
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/real-planning`}>
          {t('Planificación Real')}
        </NavLink>,
        'planificacion-real',
        null,
      ),
    ]),





    getItem(t('AquaLink Analytics'), 'aqualink-analytics', !topMenu && <UilChartBar />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/analytics`}>
          {t('Analytics ')}
        </NavLink>,
        'analytics',
        null,
      ),

      getItem(
        <NavLink className="menuItem-icon" to={`${path}/analytics/pro-data-analytics`}>
          {t('Pro Data Analytics')}
        </NavLink>,
        'prodata',
        null,
      ),
    ]),



    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Recursos de Producción')}</NavTitle>,
      'submenu-informacion',
      null,
      null,
      'group',
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/tasks`}>
        {t('Tareas')}
      </NavLink>,
      'tareas',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/tasks`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      t('Reportes'),
      'reportes',
      !topMenu && <UilChart />,
      [


        getItem(
          <NavLink className="menuItem-icon menu-item-level-1" to={`${path}/operation-report`}>
            {t('Reporte de Operaciones')}
          </NavLink>,
          'Reportes',
          null,
        ),
        getItem(
          <NavLink className="menuItem-icon" to={`${path}/analytics/report`}>
            {t('Reporte de Producción')}
          </NavLink>,
          'reporte-produccion',
          null,
        ),



      ]
    ),


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
              <NavLink className="menuItem-icon menu-item-level-2" to={`${path}/monitoring/feeding-tables`}>
                {t('Tablas de Alimentación')}
              </NavLink>,
              'alimentacion-tabla',
              null,
            ),
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

            /**
             *
             *  getItem(
              <NavLink className="menuItem-icon menu-item-level-2" to={`${path}/monitoring/plate-sampling`}>
                {t('Muestreo de Platos')}
              </NavLink>,
              'alimentacion-muestreo-platos',
              null,
            ), 
             */

          ]
        ),
      ]
    ),


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
            <NavLink to={`${path}/culture-medium/preparation-bioremediation`}>{t('Prep. Suelo y Biorremediación')}</NavLink>
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

    ]),


    getItem(t('Empacadoras'), 'Empacadoras', !topMenu && <UilFlaskPotion />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/packing/view`}>
          {t('Ver Empacadora')}
        </NavLink>,
        'ver-empacadora',
        null,
      ),

    ]),


    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('RECURSOS DE GESTIÓN')}</NavTitle>,
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

    getItem(t('Trazabilidad'), 'trazabilidad', !topMenu && <UilWifiRouter />, [
      getItem(
        <NavLink className="menuItem-icon" to={`${path}/traceability/tracking`}>
          {t('Tracking de Lotes')}
        </NavLink>,
        'tracking-lotes',
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
            <NavLink to={`${path}/client/view`}>{t('Camaronera')}</NavLink>
          </div>,
          'cliente-ficha',
          null,
        ),
        getItem(
          <div className="menu-item-level-1">
            <NavLink to={`${path}/client/add`}>{t('Configuración')}</NavLink>
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



    getItem(
      <NavLink to={`${path}/faq`}>
        {t('FAQ')}
      </NavLink>,
      'faq',
      !topMenu && <UilQuestionCircle />,
    ),


    getItem(
      <NavLink to={`${path}/KnowledgeBase`}>
        {t('Centro de Conocimiento')}
      </NavLink>,
      'KnowledgeBase',
      !topMenu && <UilQuestionCircle />,
    ),


    getItem(
      <NavLink to={`${path}/message-notifications-center`}>
        {t('Mensajes y Notificaciones')}
      </NavLink>,
      'message-notifications-center',

      !topMenu && <UilBell />,
    ),


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
      mode={!topMenu || window.innerWidth <= 1024 ? 'inline' : 'horizontal'}

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
