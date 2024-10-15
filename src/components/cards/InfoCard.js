import * as Unicons from '@iconscout/react-unicons';
import propTypes from 'prop-types';
import React from 'react';
import { InfoCardStyle } from './Style';

function InfoCard({ icon, text, counter, type, img }) {
  const IconTag = Unicons[icon];

  return (
    <InfoCardStyle type={type}>
      <span className="ninjadash-infocard-icon">
        <IconTag />
      </span>

      {/* Si el type es 'solutions' mostrar la imagen, de lo contrario mostrar el texto y el contador */}
      {type === 'solutions' ? (
        <img
          src={require(`../../static/img/AQx-IMG/${img}`)}
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
  counter: propTypes.string,
  text: propTypes.string,
  icon: propTypes.string,
  type: propTypes.oneOf(['primary', 'secondary', 'solutions']),
  img: propTypes.string, // Nueva propiedad opcional para la imagen
};

InfoCard.defaultProps = {
  counter: '21k',
  text: 'Total Products',
  icon: 'briefcase',
  type: 'primary',
  img: '', // Valor por defecto para img
};

export default InfoCard;
