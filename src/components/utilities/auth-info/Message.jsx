/* eslint-disable react/jsx-no-bind */
import { Badge, Skeleton } from 'antd';
import PropTypes from 'prop-types';
import UilHdd from '@iconscout/react-unicons/icons/uil-hdd';
import React, { useEffect } from 'react';
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { UserActionDropDown } from './auth-info-style';
import Heading from '../../heading/heading';
import { Popover } from '../../popup/popup';
import { fetchSmAlertHistory } from '../../../redux/message&notifications/actionCreator';

const MessageBox = React.memo(() => {
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

  // Solo severidad 'CRÍTICO'
  const criticalAlerts = alertHistory.filter(
    (alert) => alert.severity === 'CRÍTICO'
  );

  // Mismo routing contextual que NotificationBox
  const getContextSegment = () => {
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments[0] && ['farm', 'lab', 'custody'].includes(segments[0])) {
      return segments[0];
    }
    return '';
  };
  const contextSegment = getContextSegment();
  const targetPath = contextSegment
    ? `/${contextSegment}/message-notifications-center`
    : `/message-notifications-center`;

  function renderThumb({ style }) {
    return (
      <div
        style={{
          ...style,
          borderRadius: 6,
          backgroundColor: '#F1F2F6',
        }}
      />
    );
  }

  function renderTrackVertical() {
    return (
      <div
        style={{
          position: 'absolute',
          width: '6px',
          transition: 'opacity 200ms ease 0s',
          opacity: 0,
          [rtl ? 'left' : 'right']: '2px',
          bottom: '2px',
          top: '2px',
          borderRadius: '3px',
        }}
      />
    );
  }

  function renderView({ style }) {
    return (
      <div
        style={{
          ...style,
          marginRight: rtl ? 'auto' : undefined,
          [rtl ? 'marginLeft' : 'marginRight']: rtl ? undefined : '-17px',
        }}
      />
    );
  }

  renderThumb.propTypes = { style: PropTypes.object };
  renderView.propTypes = { style: PropTypes.object };

  const formatDate = (iso) => {
    if (!iso) return '';
    // quita la Z y mantiene solo fecha y hora
    return iso.replace(/Z$/, '').replace('T', ' ');
  };

  const content = (
    <UserActionDropDown className="ninjadash-top-dropdown">
      <Heading as="h5" className="ninjadash-top-dropdown__title">
        <span className="title-text">Mensajes AquaLink</span>
        <Badge className="badge-danger" count={criticalAlerts.length} />
      </Heading>

      <Scrollbars
        autoHeight
        autoHide
        renderThumbVertical={renderThumb}
        renderTrackVertical={renderTrackVertical}
        renderView={renderView}
        renderTrackHorizontal={(props) => (
          <div {...props} style={{ display: 'none' }} className="track-horizontal" />
        )}
      >
        <ul className="ninjadash-top-dropdown__nav">
          {loading ? (
            <Skeleton active avatar paragraph={{ rows: 2 }} />
          ) : criticalAlerts.length > 0 ? (
            criticalAlerts.map((alert) => (
              <li key={alert.id}>
                <Link to={targetPath}>
                  <figure className="ninjadash-top-dropdown__content">
                    {/**Center the icon */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <UilHdd />
                    </div>
                    <figcaption>
                      <small>
                        {alert.AD_User_ID?.identifier || alert.AD_User_ID}{' '}
                      </small>
                      <div>
                        <span className="ninjadash-top-dropdownText">
                          {alert.sm_namees}
                        </span>
                        {alert.unreadCount > 0 && (
                          <span style={{ marginLeft: 8 }}>
                            <Badge
                              className="badge-danger"
                              count={alert.unreadCount}
                            />
                          </span>
                        )}
                      </div>
                      <small style={{ fontSize: '0.75em', color: '#666' }}>
                        {formatDate(alert.Created)}
                      </small>
                    </figcaption>
                  </figure>
                  <div className="notification-status">
                    {!alert.isreviewed && <Badge dot />}
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
              No hay mensajes críticos
            </li>
          )}
        </ul>
      </Scrollbars>

      <Link className="btn-seeAll" to={targetPath}>
        Ver todos los mensajes
      </Link>
    </UserActionDropDown>
  );

  return (
    <div className="ninjadash-nav-actions__item ninjadash-nav-actions__message">
      <Popover placement="bottomLeft" content={content} action="click">
        <Badge dot offset={[-8, -5]} count={criticalAlerts.length}>
          <Link to="#" className="ninjadash-nav-action-link">
            <ReactSVG
              src={
                new URL(
                  '../../../static/img/icon/envelope.svg',
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

MessageBox.propTypes = {
  rtl: PropTypes.bool,
};

export default MessageBox;
