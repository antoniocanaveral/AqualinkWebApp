// src/components/PageHeader.js
import React, { useState } from 'react';
import {  Menu, Select, Button } from 'antd';
import PropTypes from 'prop-types';
import { HeaderWrapper, PageHeaderStyle } from './style';
import {  LeftOutlined } from '@ant-design/icons';

const { Option } = Select;

function PageHeader(props) {
  const {
    title,
    subTitle,
    buttons,
    ghost,
    bgColor,
    className,
    organizations,
    selectedOrg,
    selectedPool,
    handleOrgChange,
    handlePoolChange,
    icon,
    highlightText,
    selectOptions, 
    onBack, 
  } = props;

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuClick = (e) => {
    const orgId = Number(e.key);
    const org = organizations.find(o => o.orgId === orgId);
    console.log("oawd", org)
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


  const renderSelectOptions = () => {
    if (!selectOptions || selectOptions.length === 0) return null;
    console.log(selectOptions)
    return (
      <div className="responsive-select-container" style={{ display: 'flex', gap: '10px' }}>
        {selectOptions.map((selectOption, index) => {
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
                <LeftOutlined />
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
              {buttons}
              {renderSelectOptions()}
            </div>
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
  handlePoolChange: PropTypes.func,
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
  onBack: PropTypes.func, 
};

PageHeader.defaultProps = {
  selectOptions: [],
  organizations: [],
};

export { PageHeader };