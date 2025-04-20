import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Card } from 'antd';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { OverviewCardWrap } from './Style';

function OverviewCard({ data, className, bottomStatus, contentFirst, halfCircleIcon, onClick }) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setDidViewCountUp(true);
  }, [pathname]);

  const { type, icon, img, label, total, status, statusRate, dataPeriod, suffix, prefix, decimels, separator } = data;
  const totalNumber = Number(total);

  const handleImageClick = (event) => {
    const imageElement = event.currentTarget;

    if (imageElement) {
      imageElement.classList.add('ninjadash-animate-click'); // Añadir la clase de animación


      setTimeout(() => {
        imageElement.classList.remove('ninjadash-animate-click');


        if (onClick) {
          onClick();
        }
      }, 1000); // Duración de la animación
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
            className={contentFirst
              ? 'ninjadash-overview-card__top d-flex justify-content-between ninjadash-overview-card-theme-2'
              : 'ninjadash-overview-card__top d-flex justify-content-between'}
          >
            <div
              className={`ninjadash-overview-card__top--icon  ninjadash-${type}`}
              onClick={handleImageClick} // Activar la animación en el clic
              style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
              >
              <ReactSVG
                fontSize={20}
                src={require(`../../static/img/icon/${icon}`)} />
            </div>
            <div
              className={contentFirst
                ? 'ninjadash-overview-card__top--content'
                : 'ninjadash-overview-card__top--content text-right'}
            >
              {halfCircleIcon ? (
                <>
                  {img ? (
                    <img
                      src={require(`../../static/img/AQx-IMG/${img}`)}
                      alt={label}
                      style={{ width: '220px' }}
                    />
                  ) : (
                    <span className="ninjadahs-overview-label">{label}</span>
                  )}
                </>
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
                  {img ? (
                    <img
                      src={require(`../../static/img/AQx-IMG/${img}`)}
                      alt={label}
                    />
                  ) : (
                    <span className="ninjadahs-overview-label">{label}</span>
                  )}
                </>
              )}
            </div>
          </div>
          {bottomStatus ? (
            <div className="ninjadash-overview-card__bottom">
              <span className={`ninjadash-overview-status`}>
                <span className="ninjadash-status-rate">
                  {status === 'growth' ? <UilUp /> : <UilDown />}
                  {totalNumber}
                </span>
                <span className="ninjadash-status-label">{dataPeriod}</span>
              </span>
            </div>
          ) : (
            ''
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
  onClick: propTypes.func, // Aseguramos que onClick esté definido como función en las props
};

export default OverviewCard;
