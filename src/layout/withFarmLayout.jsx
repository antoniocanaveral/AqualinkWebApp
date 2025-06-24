/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import { Button, Col, Layout, Row } from 'antd';
import propTypes from 'prop-types';
import { Component } from 'react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FooterStyle, LayoutContainer, SmallScreenAuthInfo, TopMenuSearch } from './Style';
import TopMenu from './TopMenu';
import Search from '../components/utilities/auth-info/Search';
import AuthInfo from '../components/utilities/auth-info/info';
import AQxFarmMenu from './AQxFarmMenu';

import { theme } from '../config/theme/themeVariables';
import { AQxImages } from '../static/img';


const { Header, Sider, Content } = Layout;

const ThemeLayout = (WrappedComponent) => {
  const { darkMode } = theme; // Accedemos directamente a darkMode

  class LayoutComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: window.visualViewport.width <= 1024,
        hide: true,
      };
      this.updateDimensions = this.updateDimensions.bind(this);
    }
    
    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
      
      console.log('componentDidMount - window.visualViewport.width:', window.visualViewport.width);
    
      // Aquí añadimos el cambio de estilo cuando el componente se monta
      const headerContent = document.querySelector('.ninjadash-header-content__left');
      const isMobile = window.visualViewport.width <= 1024;
      if (headerContent) {
        console.log(isMobile)
        console.log(window.visualViewport.width)
        if (isMobile) {
          headerContent.style.backgroundColor = '#ffffff';
        } else {
          headerContent.style.backgroundColor = '#012E40';
        }
      }
    }
    
    updateDimensions() {
      this.setState({
        collapsed: window.visualViewport.width <= 1024,
      });
    }
    

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

   
    render() {
      const { collapsed, hide } = this.state;
      const { layoutMode, rtl, topMenu } = this.props;

      const left = !rtl ? 'left' : 'right';
      const toggleCollapsed = () => {
        this.setState({
          collapsed: !collapsed,
        });

        const headerContent = document.querySelector('.ninjadash-header-content__left');
        if (headerContent) {
          if (collapsed) {
            // Añade clase cuando está colapsado
            headerContent.classList.remove('header-collapsed');
            headerContent.classList.add('header-not-collapsed');
          } else {
            // Cambia el color cuando no está colapsado
            headerContent.classList.remove('header-not-collapsed');
            headerContent.classList.add('header-collapsed');
          }
        }
      };

      const toggleCollapsedMobile = () => {
        if (window.visualViewport.width <= 1024) {
          this.setState({
            collapsed: !collapsed,
          });
        }
      };

      const onShowHide = () => {
        this.setState({
          hide: !hide,
        });
      };

      const SideBarStyle = {
        margin: '63px 0 0 0',
        padding: `${!rtl ? '20px 20px 55px 0' : '20px 0 55px 20px'}`,
        overflowY: 'auto',
        height: '100vh',
        position: 'fixed',
        [left]: 0,
        zIndex: 988,
      };

      const renderView = ({ style }) => {
        const customStyle = {
          marginRight: 'auto',
          [rtl ? 'marginLeft' : 'marginRight']: '-17px',
        };
        return <div style={{ ...style, ...customStyle }} />;
      };

      const renderThumbVertical = ({ style }) => {
        const { ChangeLayoutMode } = this.props;
        const thumbStyle = {
          borderRadius: 6,
          backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
          [left]: '2px',
        };
        return <div style={{ ...style, ...thumbStyle }} />;
      };

      const renderThumbHorizontal = ({ style }) => {
        const { ChangeLayoutMode } = this.props;
        const thumbStyle = {
          borderRadius: 6,
          backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
        };
        return <div style={{ ...style, ...thumbStyle }} />;
      };

      return (
        <LayoutContainer>
          <Layout className="layout">
            <Header
              style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                [!rtl ? 'left' : 'right']: 0,
              }}
            >
              <div className="ninjadash-header-content d-flex">
                <div className="ninjadash-header-content__left">
                  <div className="navbar-brand align-cener-v">
                    <Link
                      className={topMenu && window.visualViewport.width > 1024 ? 'ninjadash-logo top-menu' : 'ninjadash-logo'}
                      to="/"
                    >
                      <img
                        src={
                          window.visualViewport.width <= 1024 ||
                            collapsed
                            ? AQxImages.logoDark
                            : AQxImages.logoLite
                        }
                        alt=""
                      />
                    </Link>
                    {!topMenu || window.visualViewport.width <= 1024 ? (
                      <Button type="link" onClick={toggleCollapsed}>
                        <img
                          src={collapsed ? new URL('../static/img/icon/left-bar.svg', import.meta.url).href : new URL('../static/img/icon/left-bar.svg', import.meta.url).href}
                          alt="menu"
                        />
                      </Button>
                    ) : null}
                  </div>
                </div>
                <div className="ninjadash-header-content__right d-flex">
                  <div className="ninjadash-navbar-menu d-flex align-center-v">
                    {topMenu && window.visualViewport.width > 1024 ? <TopMenu /> : ''}
                  </div>
                  <div className="ninjadash-nav-actions">
                    {topMenu && window.visualViewport.width > 1024 ? (
                      <TopMenuSearch>
                        <div className="top-right-wrap d-flex">
                          <AuthInfo />
                        </div>
                      </TopMenuSearch>
                    ) : (
                      <AuthInfo />
                    )}
                  </div>
                </div>
                <div className="ninjadash-header-content__mobile">
                  <div className="ninjadash-mobile-action">
                    <div className="btn-search" to="#">
                      <Search />
                    </div>

                    <Link className="btn-auth" onClick={onShowHide} to="#">
                      <UilEllipsisV />
                    </Link>
                  </div>
                </div>
              </div>
            </Header>
            <div className="ninjadash-header-more">
              <Row>
                <Col md={0} sm={24} xs={24}>
                  <div className="ninjadash-header-more-inner">
                    <SmallScreenAuthInfo hide={hide}>
                      <AuthInfo rtl={rtl} />
                    </SmallScreenAuthInfo>
                  </div>
                </Col>
              </Row>
            </div>
            <Layout>
              {!topMenu || window.visualViewport.width <= 1024 ? (
                <ThemeProvider theme={darkMode}>
                  <Sider
                    width={280}
                    style={SideBarStyle}
                    collapsed={collapsed}
                    theme={darkMode}
                  >
                    <Scrollbars
                      className="custom-scrollbar"
                      autoHide
                      autoHideTimeout={500}
                      autoHideDuration={200}
                      renderThumbHorizontal={renderThumbHorizontal}
                      renderThumbVertical={renderThumbVertical}
                      renderView={renderView}
                      renderTrackVertical={(props) => <div {...props} className="ninjadash-track-vertical" />}
                    >
                      <AQxFarmMenu topMenu={topMenu} toggleCollapsed={toggleCollapsedMobile} />
                    </Scrollbars>
                  </Sider>
                </ThemeProvider>
              ) : null}
              <Layout className="atbd-main-layout">
                <Content>
                  <WrappedComponent {...this.props} />
                  <FooterStyle className="admin-footer">
                    <Row>
                      <Col md={12} xs={24}>
                        <span className="admin-footer__copyright">
                          © 2025<Link to="#">Aqualink</Link>
                        </span>
                      </Col>

                    </Row>
                  </FooterStyle>
                </Content>
              </Layout>
            </Layout>
          </Layout>
          {window.visualViewport.width <= 1024 ? (
            <span className={collapsed ? 'ninjadash-shade' : 'ninjadash-shade show'} onClick={toggleCollapsed} />
          ) : (
            ''
          )}
        </LayoutContainer>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      layoutMode: state.ChangeLayoutMode.mode,
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  };

  LayoutComponent.propTypes = {
    layoutMode: propTypes.string,
    rtl: propTypes.bool,
    topMenu: propTypes.bool,
  };

  return connect(mapStateToProps)(LayoutComponent);
};
export default ThemeLayout;
