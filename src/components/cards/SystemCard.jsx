import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import UilLock from '@iconscout/react-unicons/icons/uil-lock';
import UilUnlock from '@iconscout/react-unicons/icons/uil-unlock';
import { Card, Button } from 'antd';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { SystemCardWrap } from './Style';

// Importa dinámicamente los íconos SVG desde la carpeta AQx-IMG
const iconMap = import.meta.glob('../../static/img/AQx-IMG/*.svg', { eager: true, import: 'default' });
const icons = Object.fromEntries(
  Object.entries(iconMap).map(([path, mod]) => [path.split('/').pop(), mod])
);

function SystemCard({ data, onPress, circleIcon }) {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setDidViewCountUp(true);
  }, [pathname]);

  const { icon, label, canAccess, accessItems } = data;

  const buildItem = (orgName, orgEmail, isLock) => (
    <div>
      <span style={{ position: 'relative', top: 3 }}>{isLock ? <UilLock /> : <UilUnlock />}</span>
      {orgName}
    </div>
  );

  const buildAccessItem = () => {
    if (accessItems) {
      return accessItems.map((aItem) => {
        const { orgId, orgName, orgEmail } = aItem;
        return (
          <li key={orgId}>
            {canAccess ? (
              <Button type="link" onClick={() => onPress(orgId, orgName, orgEmail)}>
                {buildItem(orgName, orgEmail, false)}
              </Button>
            ) : (
              buildItem(orgName, orgEmail, true)
            )}
          </li>
        );
      });
    }
    return null;
  };

  return (
    <SystemCardWrap
      className={
        circleIcon
          ? 'ninjadash-overview-card-single ninjadash-icon-circle'
          : 'ninjadash-overview-card-single'
      }
    >
      <Card bordered={false}>
        <div className="ninjadash-overview-card ninjadash-overview-card-primary">
          <div className="ninjadash-overview-card__left d-flex justify-content-between">
            <div className="ninjadash-overview-card__left--icon ninjadash-primary">
              {icon && icons[icon] && <ReactSVG src={icons[icon]} />}
            </div>
          </div>
          <div className="ninjadash-overview-card__right">
            <div className="ninjadash-overview-card__right--content">
              <h4 className="ninjadash-overview-total">{label}</h4>
              {!accessItems && (
                <span className="ninjadahs-overview-label">
                  {canAccess ? (
                    <Button type="link" onClick={onPress}>
                      <span style={{ position: 'relative', top: 3 }}>
                        <UilUnlock />
                      </span>{' '}
                      Acceder
                    </Button>
                  ) : (
                    <div>
                      <span style={{ position: 'relative', top: 3 }}>
                        <UilLock />
                      </span>
                    </div>
                  )}
                </span>
              )}
              {accessItems && (
                <span className="ninjadahs-overview-label">
                  <ul>{buildAccessItem()}</ul>
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </SystemCardWrap>
  );
}

SystemCard.defaultProps = {
  data: {},
  circleIcon: false,
};

SystemCard.propTypes = {
  data: propTypes.object,
  circleIcon: propTypes.bool,
  onPress: propTypes.func,
};

export default SystemCard;
