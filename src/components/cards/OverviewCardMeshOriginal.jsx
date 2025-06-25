import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Card } from 'antd';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { OverviewCardMeshWrap } from './Style';

// Importa dinámicamente todos los íconos SVG
const iconMap = import.meta.glob('../../static/img/AQx-IMG/*.svg', { eager: true, import: 'default' });
const icons = Object.fromEntries(
  Object.entries(iconMap).map(([path, mod]) => [path.split('/').pop(), mod])
);

function OverviewCardMeshOriginal({ data, circleIcon }) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setDidViewCountUp(true);
  }, [pathname]);

  const {
    type,
    icon,
    label,
    total,
    status,
    statusRate,
    suffix,
    prefix,
    decimel,
    secondLabel,
  } = data;

  const totalNumber = Number(total);

  return (
    <OverviewCardMeshWrap
      className={
        circleIcon
          ? 'ninjadash-overview-card-single ninjadash-icon-circle'
          : 'ninjadash-overview-card-single'
      }
    >
      <Card bordered={false}>
        <div className="ninjadash-overview-card">
          <div className="ninjadash-overview-card__left d-flex justify-content-between">
            <div className={`ninjadash-overview-card__left--icon ninjadash-${type}`}>
              {icon && icons[icon] && <ReactSVG src={icons[icon]} />}
            </div>
          </div>
          <div className="ninjadash-overview-card__right">
            <div className="ninjadash-overview-card__right--content">
              <h5 className="ninjadash-overview-total">
                <CountUp
                  start={0}
                  end={didViewCountUp ? totalNumber : 0}
                  prefix={prefix}
                  delay={0.5}
                  decimals={decimel}
                  duration={1}
                />
                {suffix && <span style={{ marginLeft: '2px' }}>{suffix}</span>}
              </h5>
              <span className="ninjadahs-overview-label" style={{ marginLeft: '0px', fontSize: '12px' }}>
                {label}
              </span>
              <span className="ninjadahs-overview-label" style={{ display: 'block', fontSize: '12px', marginLeft: '5px' }}>
                {secondLabel}
              </span>
            </div>
            <span className={`ninjadash-overview-status ninjadash-status-${status}`}>
              <span className="ninjadash-status-rate">
                {status === 'growth' ? <UilUp /> : <UilDown />} {statusRate}%
              </span>
            </span>
          </div>
        </div>
      </Card>
    </OverviewCardMeshWrap>
  );
}

OverviewCardMeshOriginal.defaultProps = {
  data: {},
  circleIcon: false,
};

OverviewCardMeshOriginal.propTypes = {
  data: propTypes.object,
  circleIcon: propTypes.bool,
};

export default OverviewCardMeshOriginal;
