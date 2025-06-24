import * as Unicons from '@iconscout/react-unicons';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
// Agrega más según necesites...

import PropTypes from 'prop-types';
import React from 'react';
import { InfoCardStyle } from './Style';

// 🎯 Importa dinámicamente imágenes de AQx-IMG
const imgMap = import.meta.glob('../../static/img/AQx-IMG/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});

const imgs = Object.fromEntries(
  Object.entries(imgMap).map(([path, mod]) => [path.split('/').pop(), mod])
);

// 🎯 Agrupa icon libraries dinámicamente
const iconLibraries = {
  unicons: Unicons,
  ri: RiIcons,
  si: SiIcons,
  fa: FaIcons,
  // agrega más sets aquí si usas otros: md, bs, etc.
};

function InfoCard({ icon, iconLib, text, counter, type, img }) {
  const IconSet = iconLibraries[iconLib] || Unicons;
  const IconTag = IconSet[icon];

  return (
    <InfoCardStyle type={type}>
      <span className="ninjadash-infocard-icon">
        {IconTag && <IconTag />}
      </span>

      {type === 'solutions' && img && imgs[img] ? (
        <img
          src={imgs[img]}
          alt={img}
          style={{ width: '50%', height: 'auto', marginTop: '-30px' }}
        />
      ) : (
        <>
          <p className="ninjadash-infocard-text">{text}</p>
          <h2 className="ninjadash-infocard-label">{counter}</h2>
        </>
      )}
    </InfoCardStyle>
  );
}

InfoCard.propTypes = {
  counter: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  iconLib: PropTypes.oneOf(['unicons', 'ri', 'si', 'fa']),
  type: PropTypes.oneOf(['primary', 'secondary', 'solutions']),
  img: PropTypes.string,
};

InfoCard.defaultProps = {
  counter: '21k',
  text: 'Total Products',
  icon: 'UilBriefcase',
  iconLib: 'unicons',
  img: '',
};

export default InfoCard;
