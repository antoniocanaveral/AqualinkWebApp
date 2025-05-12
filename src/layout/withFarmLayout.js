/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import { Button, Col, Layout, Row } from 'antd';
import propTypes from 'prop-types';
import { Component } from 'react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FooterStyle, LayoutContainer, SmallScreenAuthInfo, TopMenuSearch } from './Style';
import TopMenu from './TopMenu';
import Search from '../components/utilities/auth-info/Search';
import AuthInfo from '../components/utilities/auth-info/info';
import AQxFarmMenu from './AQxFarmMenu';

const { theme } = require('../config/theme/themeVariables');

const { Header, Sider, Content } = Layout;

const ThemeLayout = (WrappedComponent) => {
  const { darkMode } = theme;

  class LayoutComponent extends Component {
    state = {
      collapsed: window.visualViewport.width <= 1024,
      hide: true,
    };

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
      this.setState({
        collapsed: window.visualViewport.width <= 1024,
      });

      this.updateHeaderContentStyle();
    };

    updateHeaderContentStyle = () => {
      const headerContent = document.querySelector('.ninjadash-header-content__left');
      const isMobile = window.visualViewport.width <= 1024;
      if (headerContent) {
        headerContent.style.backgroundColor = isMobile ? '#ffffff' : '#012E40';
      }
    };

    toggleCollapsed = () => {
      const { collapsed } = this.state;
      this.setState({ collapsed: !collapsed }, this.updateHeaderContentStyle);
    };

    toggleCollapsedMobile = () => {
      if (window.visualViewport.width <= 1024) {
        this.setState((prevState) => ({ collapsed: !prevState.collapsed }));
      }
    };

    onShowHide = () => {
      this.setState((prevState) => ({ hide: !prevState.hide }));
    };

    renderView = ({ style }) => {
      const customStyle = {
        marginRight: 'auto',
        [this.props.rtl ? 'marginLeft' : 'marginRight']: '-17px',
      };
      return <div style={{ ...style, ...customStyle }} />;
    };

    renderThumb = (isHorizontal, { style }) => {
      const thumbStyle = {
        borderRadius: 6,
        backgroundColor: this.props.ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
        ...(isHorizontal ? {} : { [this.props.rtl ? 'right' : 'left']: '2px' }),
      };
      return <div style={{ ...style, ...thumbStyle }} />;
    };

    render() {
      const { collapsed, hide } = this.state;
      const { topMenu, rtl } = this.props;
      const left = !rtl ? 'left' : 'right';

      const SideBarStyle = {
        margin: '63px 0 0 0',
        padding: `${!rtl ? '20px 20px 55px 0' : '20px 0 55px 20px'}`,
        overflowY: 'auto',
        height: '100vh',
        position: 'fixed',
        [left]: 0,
        zIndex: 988,
      };

      return (
        <LayoutContainer>
          <Layout className="layout">
            <Header style={{ position: 'fixed', width: '100%', top: 0, [left]: 0 }}>
              <div className="ninjadash-header-content d-flex">
                <div className="ninjadash-header-content__left">
                  <div className="navbar-brand align-cener-v">
                    <Link
                      className={topMenu && window.visualViewport.width > 1024 ? 'ninjadash-logo top-menu' : 'ninjadash-logo'}
                      to="/"
                    >
                      <img
                        src={
                          window.visualViewport.width <= 1024 || collapsed
                            ? require(`../static/img/AQx-IMG/aqualink-dark.svg`).default
                            : require(`../static/img/AQx-IMG/aqualink-lite.svg`).default
                        }
                        alt="Logo"
                      />
                    </Link>
                    {!topMenu || window.visualViewport.width <= 1024 ? (
                      <Button type="link" onClick={this.toggleCollapsed}>
                        <img src={require(`../static/img/icon/${collapsed ? 'left-bar.svg' : 'left-bar.svg'}`)} alt="menu" />
                      </Button>
                    ) : null}
                  </div>
                </div>
                <div className="ninjadash-header-content__right d-flex">
                  {topMenu && window.visualViewport.width > 1024 && <TopMenu />}
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
                    <Link className="btn-auth" onClick={this.onShowHide} to="#">
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
                      renderThumbHorizontal={(props) => this.renderThumb(true, props)}
                      renderThumbVertical={(props) => this.renderThumb(false, props)}
                      renderView={this.renderView}
                      renderTrackVertical={(props) => <div {...props} className="ninjadash-track-vertical" />}
                    >
                      <AQxFarmMenu topMenu={topMenu} toggleCollapsed={this.toggleCollapsedMobile} />
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
                          © 2024 <Link to="#">Aqualink</Link>
                        </span>
                      </Col>
                    </Row>
                  </FooterStyle>
                </Content>
              </Layout>
            </Layout>
          </Layout>

          {window.visualViewport.width <= 1024 && (
            <span className={collapsed ? 'ninjadash-shade' : 'ninjadash-shade show'} onClick={this.toggleCollapsed} />
          )}
        </LayoutContainer>
      );
    }
  }

  const mapStateToProps = (state) => ({
    layoutMode: state.ChangeLayoutMode.mode,
    rtl: state.ChangeLayoutMode.rtlData,
    topMenu: state.ChangeLayoutMode.topMenu,
  });

  LayoutComponent.propTypes = {
    layoutMode: propTypes.string,
    rtl: propTypes.bool,
    topMenu: propTypes.bool,
  };

  return connect(mapStateToProps)(LayoutComponent);
};

export default ThemeLayout;
