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
    <Breadcrumb separator={<span className="ninjadash-seperator" />}>
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
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {selectOptions.map((options, index) => (
          <Select
            key={index}
            placeholder={`Seleccione ${["Camaronera", "Sector", "Piscina"][index] || `Opción ${index + 1}`}`}
            style={{ width: 180 }}
          >
            {options.map((option) => (
              <Option key={option} value={option}>{option}</Option>
            ))}
          </Select>
        ))}
      </div>
    );
  };

  return (
    <HeaderWrapper bgColor={bgColor}>
      <PageHeaderStyle
        className={className}
        title={
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            {icon && <span style={{ marginRight: 10 }}>{icon}</span>}

            {highlightText && (
              <h1 style={{ fontSize: '1.5em', marginRight: '10px', fontWeight: "800", marginBottom: 0 }}>
                {highlightText}
              </h1>
            )}

            <span style={{ fontSize: '1.4em', fontWeight: "400", marginBottom: 0 }}>
              {title}
            </span>
          </div>
        }
        subTitle={subTitle}
        breadcrumb={breadcrumb}
        extra={
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
            {buttons}
            {renderSelectOptions()}
          </div>
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
