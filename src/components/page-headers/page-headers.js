import React, { useState } from 'react';
import { Breadcrumb, Dropdown, Menu, Select } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeaderWrapper, PageHeaderStyle } from './style';
import { DownOutlined } from '@ant-design/icons';

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
    handleOrgChange,
    icon,
    highlightText,
    selectOptions,
  } = props;

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuClick = (e) => {
    const orgName = e.key;
    const orgEmail = e.item.props.orgEmail;
    handleOrgChange(orgName, orgEmail);
    setDropdownVisible(false);
  };

  const menu = organizations && organizations.length > 0 ? (
    <Menu onClick={handleMenuClick}>
      {organizations.map((org) => (
        <Menu.Item key={org.orgName} orgEmail={org.orgEmail}>
          {org.orgName}
        </Menu.Item>
      ))}
    </Menu>
  ) : null;

  const breadcrumb = routes ? (
    <Breadcrumb separator={<span />}>
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
                <span style={{ cursor: 'pointer' }}>
                  <DownOutlined style={{ paddingTop: "4px", paddingLeft: "10px" }} />
                </span>
              </Dropdown>
            )}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={index}>
            <div style={{ width: "auto", display: "flex", alignItems: "center" }}>
              <img
                src={require(`../../static/img/AQx-IMG/shrimp16.svg`).default}
                style={{ marginRight: 10 }}
                alt="icon"
              />
              <Link to={route.path} style={{ display: 'contents' }}>
                {route.breadcrumbName}
              </Link>
            </div>
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
      <div className="responsive-select-container">
        {selectOptions.map((options, index) => (
          <Select
            key={index}
            defaultValue={options[0]} // Seleccionar la primera opción por defecto
            placeholder={`Seleccione ${["Camaronera", "Sector", "Piscina"][index] || `Opción ${index + 1}`}`}
            className="responsive-select"
          >
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        ))}
      </div>
    );
  };

  return (
    <HeaderWrapper style={{ backgroundColor: "#ffffff" || '#f0f2f5', padding: '0px' }}>
      <PageHeaderStyle
        className={className}
        title={
          <div className="responsive-container">
            {icon && <span className="icon">{icon}</span>}

            {highlightText && (
              <h1 className="highlight-text">
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
            {/* Cambiar alignItems a 'stretch' para permitir que los hijos ocupen el ancho completo */}
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
  selectedOrg: PropTypes.string,
  handleOrgChange: PropTypes.func,
  icon: PropTypes.node,
  highlightText: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.array),
};

export { PageHeader };
