import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';
import { Badge, Popover, Skeleton } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { UserActionDropDown } from './auth-info-style';
import Heading from '../../heading/heading';
import { fetchSmAlertHistory } from '../../../redux/message&notifications/actionCreator';

const NotificationBox = React.memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { rtl } = useSelector((state) => ({
    rtl: state.ChangeLayoutMode.rtlData,
  }));

  const { alertHistory, loading } = useSelector((state) => ({
    alertHistory: state.alertHistoryReducer.alertHistory,
    loading: state.alertHistoryReducer.loading,
  }));

  useEffect(() => {
    dispatch(fetchSmAlertHistory());
  }, [dispatch]);

  // Function to get the dynamic context segment (farm, lab, custody)
  const getContextSegment = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    console.log('Path Segments:', pathSegments);

    if (pathSegments.length >= 1) {
      const contextSegment = pathSegments[0];
      if (['farm', 'lab', 'custody'].includes(contextSegment)) {
        return contextSegment;
      }
    }
    return '';
  };

  const contextSegment = getContextSegment();
  console.log('Context Segment:', contextSegment);
  const targetPath = contextSegment
    ? `/${contextSegment}/message-notifications-center`
    : `/message-notifications-center`;
  function renderThumb({ style }) {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} />;
  }

  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      [rtl ? 'left' : 'right']: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div className="hello" style={thumbStyle} />;
  };

  function renderView({ style }) {
    const customStyle = {
      marginRight: rtl && 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div style={{ ...style, ...customStyle }} />;
  }

  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };

  renderView.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };
  const content = (
    <UserActionDropDown className="ninjadash-top-dropdown">
      <Heading as="h5" className="ninjadash-top-dropdown__title">
        <span className="title-text">Notifications</span>
        <Badge className="badge-success" count={alertHistory.length} />
      </Heading>
      <Scrollbars
        autoHeight
        autoHide
        renderThumbVertical={renderThumb}
        renderView={renderView}
        renderTrackVertical={renderTrackVertical}
        renderTrackHorizontal={(props) => (
          <div {...props} style={{ display: 'none' }} className="track-horizontal" />
        )}
      >
        <ul className="ninjadash-top-dropdown__nav notification-list">
          {loading ? (
            <Skeleton active avatar paragraph={{ rows: 2 }} />
          ) : alertHistory.length > 0 ? (
            alertHistory.map((notification) => (
              <li key={notification.id}>
                <Link to={targetPath}>
                  <div className="ninjadash-top-dropdown__content notifications">
                    <div
                      className={`notification-icon bg-${notification.severity === 'CRÍTICO' ? 'danger' : 'primary'
                        }`}
                    >
                      <UilHdd />
                    </div>
                    <div className="notification-content d-flex">
                      <div className="notification-text">
                        <Heading as="h5">
                          <span>
                            {notification.AD_User_ID?.identifier || notification.AD_User_ID}
                          </span>{' '}
                          {notification.sm_namees}
                        </Heading>
                        <p>{notification.Created}</p>
                      </div>
                      <div className="notification-status">
                        {!notification.isreviewed && <Badge dot />}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li
              style={{
                padding: '10px 20px',
                textAlign: 'center',
                color: '#999',
              }}
            >
              No hay notificaciones
            </li>
          )}
        </ul>
      </Scrollbars>
      {/* Ajuste de estilos para centrar el botón */}
      <Link
        className="btn-seeAll"
        to={targetPath}
        style={{
          display: 'block',
          textAlign: 'center',
          marginTop: '10px', // Ajustar el espacio superior
        }}
      >
        See all incoming activity
      </Link>
    </UserActionDropDown>
  );

  return (
    <div className="ninjadash-nav-actions__item ninjadash-nav-actions__notification">
      <Popover placement="bottomLeft" content={content} action="click">
        <Badge dot offset={[-8, -5]} count={alertHistory.length}>
          <Link to="#" className="ninjadash-nav-action-link">
            <ReactSVG
              src={
                new URL(
                  '../../../static/img/icon/bell.svg',
                  import.meta.url
                ).href
              }
            />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
});

export default NotificationBox;