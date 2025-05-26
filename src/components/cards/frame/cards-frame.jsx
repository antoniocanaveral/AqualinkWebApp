import UilellipsisH from '@iconscout/react-unicons/icons/uil-ellipsis-h';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardFrame } from './style';
import { Dropdown } from '../../dropdown/dropdown';
import Heading from '../../heading/heading';

function Cards(props) {
  const {
    title,
    icon,
    image, // Nueva prop para la imagen
    status,
    children,
    more,
    moreText,
    size,
    headless,
    caption,
    isbutton,
    bodyStyle,
    headStyle,
    border,
    bodypadding,
    className,
  } = props;

  return (
    <>
      {!headless ? (
        <CardFrame
          size={size}
          title={
            <>
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: "wrap" }}>
                {/* Mostrar la imagen si está presente; si no, mostrar el ícono */}
                {image ? (
                  <img src={image} alt="Card icon" style={{ marginRight: 5, width: 24, height: 24 }} />
                ) : (
                  icon && <span style={{ marginRight: 5, marginLeft: "-3px" }}>{icon}</span>
                )}
                <p style={{ whiteSpace: 'normal', padding:"0px", margin:"0px", overflowWrap: 'break-word', flex: 1 }}>
                  {title} {/* Título principal */}
                </p>
              </div>
              {status && (
                <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                  {status}
                </span>
              )}
            </>
          }
          bodyStyle={bodyStyle && bodyStyle}
          headStyle={headStyle && headStyle}
          bordered={border}
          className={className}
          bodypadding={bodypadding && bodypadding}
          extra={
            <>
              {more && (
                <Dropdown content={more} placement="bottom">
                  <Link onClick={(e) => e.preventDefault()} to="#">
                    {!moreText ? <UilellipsisH /> : 'More'}
                  </Link>
                </Dropdown>
              )}
              {isbutton && isbutton}
            </>
          }
          style={{ width: '100%' }}
        >
          {children}
        </CardFrame>
      ) : (
        <CardFrame
          bodypadding={bodypadding && bodypadding}
          bodyStyle={bodyStyle && bodyStyle}
          size={size}
          style={{ width: '100%', margin:0, padding:0 }}  
          bordered={border}
          className={className}
        >
          {title && <Heading as="h4">{title}</Heading>}
          {caption && <p>{caption}</p>}
          {children}
        </CardFrame>
      )}
    </>
  );
}

Cards.defaultProps = {
  border: false,
};

Cards.propTypes = {
  icon: PropTypes.node,
  image: PropTypes.string, // Nueva prop para la imagen
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  status: PropTypes.string,
  size: PropTypes.string,
  more: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  bodyStyle: PropTypes.object,
  headStyle: PropTypes.object,
  isbutton: PropTypes.node,
  headless: PropTypes.bool,
  border: PropTypes.bool,
  caption: PropTypes.string,
  bodypadding: PropTypes.string,
  className: PropTypes.string,
  moreText: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
};

export { Cards };
