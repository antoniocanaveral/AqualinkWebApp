// src/components/PageHeader.js

/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Breadcrumb, Dropdown, Menu, Select, Button } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { HeaderWrapper, PageHeaderStyle } from './style';
import { Link } from 'react-router-dom';
import { DownOutlined, LeftOutlined } from '@ant-design/icons'; // Importar el ícono de izquierda

const { Option } = Select;

function PageHeader(props) {
  const {
    title,
    subTitle,
    routes,
    buttons,
    ghost,
    bgColor,
    className,
    organizations,
    selectedOrg,
    selectedPool,
    handleOrgChange,
    handlePoolChange, // Nueva prop para manejar cambios en Pool
    icon,
    highlightText,
    selectOptions, // Opciones para los selectores adicionales (Pools)
    onBack, // Nueva prop para el botón de regresar
  } = props;

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuClick = (e) => {
    const orgId = Number(e.key); // Asegurarse de que orgId sea un número
    const org = organizations.find(o => o.orgId === orgId);
    if (org) {
      handleOrgChange(org.orgId, org.orgEmail);
    }
    setDropdownVisible(false);
  };

  const menu = organizations && organizations.length > 0 ? (
    <Menu onClick={handleMenuClick}>
      {organizations.map((org) => (
        <Menu.Item key={org.orgId} orgEmail={org.orgEmail}>
          {org.orgName}
        </Menu.Item>
      ))}
    </Menu>
  ) : null;

  const breadcrumb = routes ? (
    <Breadcrumb separator={<span className="ninjadash-seperator" />} >
      {routes.map((route, index) =>
        index + 1 === routes.length ? (
          <Breadcrumb.Item key={index}>
            {menu && (
              <Dropdown
                overlay={menu}
                onVisibleChange={(visible) => setDropdownVisible(visible)}
                visible={dropdownVisible}
                trigger={['click']}
              >
                <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  {selectedOrg ? organizations.find(org => org.orgId === selectedOrg)?.orgName : 'Seleccionar Organización'}
                  <DownOutlined style={{ paddingTop: "4px", paddingLeft: "10px" }} />
                </span>
              </Dropdown>
            )}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={index}>
            <img src={require(`../../static/img/AQx-IMG/shrimp16.svg`).default} style={{marginRight: 10}}/> {' '}
            <Link to={route.path} style={{display: "contents"}}>{route.breadcrumbName}</Link>
          </Breadcrumb.Item>
        ),
      )}
    </Breadcrumb>
  ) : (
    ''
  );

  const renderSelectOptions = () => {
    if (!selectOptions || selectOptions.length === 0) return null;

    return (
      <div className="responsive-select-container" style={{ display: 'flex', gap: '10px' }}>
        {selectOptions.map((selectOption, index) => {
          // Validar que selectOption tenga la propiedad 'options' y que sea un arreglo
          if (!selectOption.options || !Array.isArray(selectOption.options)) {
            console.warn(`selectOption at index ${index} is missing 'options' or it's not an array.`);
            return null;
          }

          return (
            <Select
              key={index}
              value={selectOption.value}
              placeholder={selectOption.placeholder}
              className="responsive-select"
              onChange={selectOption.onChange}
              style={{ minWidth: '150px' }}
              disabled={selectOption.disabled || false}
            >
              {selectOption.options.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          );
        })}
      </div>
    );
  };

  return (
    <HeaderWrapper bgColor={bgColor}>
      <PageHeaderStyle
        className={className}
        title={
          <div className="responsive-container" style={{ display: 'flex', alignItems: 'center' }}>
            {onBack && (
              <Button
                type="link"
                onClick={onBack}
                style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}
              >
                <LeftOutlined /> {/* Removido el color ya que el ícono maneja su propio color */}
              </Button>
            )}
            {icon && <span className="icon">{icon}</span>}
            {highlightText && (
              <h1 className="highlight-text" style={{ margin: 0, marginRight: '10px' }}>
                {highlightText}
              </h1>
            )}
            <span className="title">
              {title}
            </span>
          </div>
        }
        subTitle={subTitle}
        extra={
          <>
            {/* Contenedor para los botones y selectores */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
              {buttons}
              {renderSelectOptions()}
            </div>
            {breadcrumb}
          </>
        }
        ghost={ghost}
      />
    </HeaderWrapper>
  );
}

PageHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bgColor: PropTypes.string,
  className: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  buttons: PropTypes.array,
  ghost: PropTypes.bool,
  organizations: PropTypes.arrayOf(PropTypes.object),
  selectedOrg: PropTypes.number,
  selectedPool: PropTypes.number,
  handleOrgChange: PropTypes.func,
  handlePoolChange: PropTypes.func, // Nueva prop para manejar cambios en Pool
  icon: PropTypes.node,
  highlightText: PropTypes.string,
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
      onChange: PropTypes.func.isRequired,
      placeholder: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ),
  onBack: PropTypes.func, // Definir la nueva prop
};

// Definir valores por defecto para selectOptions y organizations
PageHeader.defaultProps = {
  selectOptions: [],
  organizations: [],
};

export { PageHeader };
