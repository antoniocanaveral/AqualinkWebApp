import { Breadcrumb, Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeaderWrapper, PageHeaderStyle } from './style';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

function PageHeader(props) {
  const {
    title,
    subTitle,
    routes,
    buttons,
    ghost,
    bgColor,
    className,
    organizations, // Lista de organizaciones (opcional)
    selectedOrg, // Organización seleccionada
    handleOrgChange, // Función para manejar el cambio de organización
  } = props;

  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Función que maneja el cambio de organización a través del menú
  const handleMenuClick = (e) => {
    const orgName = e.key; // Obtener el nombre de la organización
    const orgEmail = e.item.props.orgEmail; // Obtener el email de la organización desde el prop
    handleOrgChange(orgName, orgEmail); // Cambia la organización seleccionada y su email
    setDropdownVisible(false); // Oculta el dropdown
  };

  // Condicional para mostrar el menú de organizaciones solo si existen
  const menu = organizations && organizations.length > 0 ? (
    <Menu onClick={handleMenuClick}>
      {organizations.map((org) => (
        <Menu.Item key={org.orgName} orgEmail={org.orgEmail}> {/* Aquí pasamos orgEmail como prop */}
          {org.orgName}
        </Menu.Item>
      ))}
    </Menu>
  ) : null; // Si no hay organizaciones, el menú no se muestra

  // Construcción del breadcrumb
  const breadcrumb = routes ? (
    <Breadcrumb separator={<span className="ninjadash-seperator" />}>
      {routes.map((route, index) =>
        // Si es el último breadcrumb, mostrar solo el dropdown (sin duplicar el texto)
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
              />{' '}
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

  return (
    <HeaderWrapper bgColor={bgColor}>
      <PageHeaderStyle
        className={className}
        title={title}
        subTitle={subTitle}
        breadcrumb={breadcrumb}
        extra={buttons}
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
  organizations: PropTypes.arrayOf(PropTypes.object), // Lista de organizaciones (opcional)
  selectedOrg: PropTypes.string, // Organización seleccionada
  handleOrgChange: PropTypes.func, // Función para manejar el cambio de organización
};

export { PageHeader };