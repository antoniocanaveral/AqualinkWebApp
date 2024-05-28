/* eslint-disable no-return-assign */
import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import UilLock from '@iconscout/react-unicons/icons/uil-lock';
import UilUnlock from '@iconscout/react-unicons/icons/uil-unlock';
import { Card, Button } from 'antd';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Link, useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { SystemCardWrap } from './Style';


function SystemCard({ data, onPress, circleIcon }) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setDidViewCountUp(true);
  }, [pathname]);

  const { icon, label, canAccess } = data;
  return (
    <SystemCardWrap
      className={circleIcon ? 'ninjadash-overview-card-single ninjadash-icon-circle' : 'ninjadash-overview-card-single'}
    >
      <Card bordered={false}>
        <div className={`ninjadash-overview-card ninjadash-overview-card-primary`} style={{borderRight: "1px solid #CCC"}}>
          <div className="ninjadash-overview-card__left d-flex justify-content-between">
            <div className={`ninjadash-overview-card__left--icon ninjadash-primary`}>
              <ReactSVG src={require(`../../static/img/AQx-IMG/${icon}`)} />
            </div>
          </div>
          <div className="ninjadash-overview-card__right">
            <div className="ninjadash-overview-card__right--content">
              <h4 className="ninjadash-overview-total">
                {label}
              </h4>
              <span className="ninjadahs-overview-label">
                {canAccess &&  <Button type="link" onClick={onPress}>
                                <span style={{position: "relative", top: 3}}><UilUnlock/></span> Acceder
                              </Button> }
                {!canAccess && <div><span style={{position: "relative", top: 3}}><UilLock/></span></div>}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </SystemCardWrap>
  );
}
SystemCard.propTypes = {
  data: {},
  circleIcon: false,
};
SystemCard.propTypes = {
  data: propTypes.object,
  circleIcon: propTypes.bool,
};

export default SystemCard;
