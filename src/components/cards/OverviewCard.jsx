import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Card } from 'antd';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { OverviewCardWrap } from './Style';

// Importa dinámicamente todos los SVGs
const iconMap = import.meta.glob('../../static/img/icon/*.svg', { eager: true, import: 'default' });
const icons = Object.fromEntries(
  Object.entries(iconMap).map(([path, mod]) => [path.split('/').pop(), mod])
);

// Importa dinámicamente todas las imágenes (PNG, JPG, etc.)
const imgMap = import.meta.glob('../../static/img/AQx-IMG/*.{png,jpg,jpeg,svg,webp}', { eager: true, import: 'default' });
const imgs = Object.fromEntries(
  Object.entries(imgMap).map(([path, mod]) => [path.split('/').pop(), mod])
);

function OverviewCard({ data, className, bottomStatus, contentFirst, halfCircleIcon, onClick }) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setDidViewCountUp(true);
  }, [pathname]);

  const {
    type,
    icon,
    img,
    label,
    total,
    status,
    statusRate,
    dataPeriod,
    suffix,
    prefix,
    decimels,
    separator,
  } = data;

  const totalNumber = Number(total);

  const handleImageClick = (event) => {
    const imageElement = event.currentTarget;

    if (imageElement) {
      imageElement.classList.add('ninjadash-animate-click');
      setTimeout(() => {
        imageElement.classList.remove('ninjadash-animate-click');
        if (onClick) onClick();
      }, 1000);
    }
  };

  return (
    <OverviewCardWrap className={className}>
      <Card
        bordered={false}
        className={halfCircleIcon ? 'ninjadash-overview-halfCircle-card' : null}
      >
        <div className={`ninjadash-overview-card ninjadash-overview-card-${type}`}>
          <div
            className={
              contentFirst
                ? 'ninjadash-overview-card__top d-flex justify-content-between ninjadash-overview-card-theme-2'
                : 'ninjadash-overview-card__top d-flex justify-content-between'
            }
          >
            <div
              className={`ninjadash-overview-card__top--icon ninjadash-${type}`}
              onClick={handleImageClick}
              style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
            >
              {icon && icons[icon] && <ReactSVG src={icons[icon]} />}
            </div>

            <div
              className={
                contentFirst
                  ? 'ninjadash-overview-card__top--content'
                  : 'ninjadash-overview-card__top--content text-right'
              }
            >
              {halfCircleIcon ? (
                img && imgs[img] ? (
                  <img src={imgs[img]} alt={label} style={{ width: '220px' }} />
                ) : (
                  <span className="ninjadahs-overview-label">{label}</span>
                )
              ) : (
                <>
                  <h4 className="ninjadash-overview-total">
                    <CountUp
                      start={0}
                      end={didViewCountUp ? totalNumber : 0}
                      suffix={suffix}
                      prefix={prefix}
                      delay={0.5}
                      decimals={decimels}
                      separator={separator}
                      duration={2}
                    />
                  </h4>
                  {img && imgs[img] ? (
                    <img src={imgs[img]} alt={label} />
                  ) : (
                    <span className="ninjadahs-overview-label">{label}</span>
                  )}
                </>
              )}
            </div>
          </div>

          {bottomStatus && (
            <div className="ninjadash-overview-card__bottom">
              <span className="ninjadash-overview-status">
                <span className="ninjadash-status-rate">
                  {status === 'growth' ? <UilUp /> : <UilDown />}
                  {totalNumber}
                </span>
                <span className="ninjadash-status-label">{dataPeriod}</span>
              </span>
            </div>
          )}
        </div>
      </Card>
    </OverviewCardWrap>
  );
}

OverviewCard.defaultProps = {
  data: {},
  className: 'ninjadash-overview-card-box',
  bottomStatus: true,
  contentFirst: false,
  halfCircleIcon: false,
};

OverviewCard.propTypes = {
  data: propTypes.object,
  className: propTypes.string,
  bottomStatus: propTypes.bool,
  contentFirst: propTypes.bool,
  halfCircleIcon: propTypes.bool,
  onClick: propTypes.func,
};

export default OverviewCard;
