import {
  UilDesktop,
  UilHeadphones,
  //for message-notifications-center
  UilBell,
} from '@iconscout/react-unicons';



import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';

function AQxMonitoringMenu({ toggleCollapsed }) {
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


  const path = '/monitoring';
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
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('PRINCIPAL')}</NavTitle>,
      'menu-principal',
      null,
      null,
      'group',
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/dashboard`}>
        {t('Dashboard')}
      </NavLink>,
      'dashboard',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/dashboard`}>
          <UilDesktop />
        </NavLink>
      ),
    ),


    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('CUMPLIMIENTO')}</NavTitle>,
      'menu-principal',
      null,
      null,
      'group',
    ),



    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/legal-infrastructure`}>
        {t('Legal e Infraestructura')}
      </NavLink>,
      'legal-infrastructure',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/legal-infrastructure`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

   
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('HEALTH & WELLFARE')}</NavTitle>,
      'submenu-informacion',
      null,
      null,
      'group',
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/parameters`}>
        {t('Parámetros de Cultivo')}
      </NavLink>,
      'parameters',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/parameters`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/veterinary-plan`}>
        {t('Plan Veterninario')}
      </NavLink>,
      'veterinary-plan',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/veterinary-plan`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/soil-quality`}>
        {t('Calidad de Suelo')}
      </NavLink>,
      'soil-quality',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/soil-quality`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('RESPONSABILIDAD AMBIENTAL')}</NavTitle>,
      'submenu-informacion',
      null,
      null,
      'group',
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/water-flow`}>
        {t('Gestión Medio de Cultivo')}
      </NavLink>,
      'water-flow',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/water-flow`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/water-quality`}>
        {t('Calidad de Agua')}
      </NavLink>,
      'water-quality',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/water-quality`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/do-parameters`}>
        {t('Parámetros Físicos de Agua')}
      </NavLink>,
      'do-parameters',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/do-parameters`}>
          <UilDesktop />
        </NavLink>
      ),
    ),


    
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('TRAZABILIDAD')}</NavTitle>,
      'submenu-informacion',
      null,
      null,
      'group',
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/op-report`}>
        {t('Lotes Activos')}
      </NavLink>,
      'op-report',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/op-report`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/siembra`}>
        {t('Siembra')}
      </NavLink>,
      'siembra',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/siembra`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/transferencia`}>
        {t('Transferencia')}
      </NavLink>,
      'Transferencia',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/transferencia`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/cosecha`}>
        {t('Cosecha')}
      </NavLink>,
      'Cosecha',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/cosecha`}>
          <UilDesktop />
        </NavLink>
      ),
    ),

    

    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('REPORTES')}</NavTitle>,
      'submenu-informacion',
      null,
      null,
      'group',
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/tracking`}>
        {t('Tracking')}
      </NavLink>,
      'tracking',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/tracking`}>
          <UilDesktop />
        </NavLink>
      ),
    ),


    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/full-report`}>
        {t('Reporte de Cumplimiento')}
      </NavLink>,
      'full-report',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/full-report`}>
          <UilDesktop />
        </NavLink>
      ),
    ),
  

    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('SOPORTE')}</NavTitle>,
      'submenu-administracion',
      null,
      null,
      'group',
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
      mode={!topMenu || window.innerWidth <= 1024 ? 'inline' : 'horizontal'}
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

AQxMonitoringMenu.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default AQxMonitoringMenu;
