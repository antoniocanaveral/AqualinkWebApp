import {
  UilFlaskPotion,
} from '@iconscout/react-unicons';

import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';
import { FaShrimp } from 'react-icons/fa6';

function AQxNetworkMenu({ toggleCollapsed }) {
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


  const path = '/network';
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
          <UilFlaskPotion />
        </NavLink>
      ),
    ),


    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/larva`}>
        {t('Larva')}
      </NavLink>,
      'larva',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/larva`}>
          <UilFlaskPotion />
        </NavLink>
      ),
    ),


    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/shrimp`}>
        {t('Camarón')}
      </NavLink>,
      'Camarón',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/shrimp`}>
          <FaShrimp />
        </NavLink>
      ),
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

AQxNetworkMenu.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default AQxNetworkMenu;
