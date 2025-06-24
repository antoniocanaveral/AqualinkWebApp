import * as Unicons from '@iconscout/react-unicons';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components'; // Asegúrate de tener esto instalado


const CardWrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  .ninjadash-infocard-icon {
    font-size: 32px;
    color: #1890ff;
    margin-bottom: 12px;
  }

  .ninjadash-infocard-text {
    font-size: 18px;
    font-weight: 600;
    color: #2a2a2a;
    margin: 0;
  }
`;

function TextCard({ icon, text }) {
  const IconTag = Unicons[icon] || Unicons.UilFile;

  return (
    <CardWrapper>
      <div className="ninjadash-infocard-icon">
        <IconTag />
      </div>
      <p className="ninjadash-infocard-text">{text}</p>
    </CardWrapper>
  );
}

TextCard.propTypes = {
  text: propTypes.string.isRequired,
  icon: propTypes.string,
};

TextCard.defaultProps = {
  icon: 'UilFile',
};

export default TextCard;
