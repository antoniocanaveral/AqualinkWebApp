import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { ErrorWrapper } from './style';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

function UnderConstruction() {
  const [state, setState] = useState({
    isLoading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setState({ isLoading: false });
    }, 1500);
  }, []);

  return (
    <Main>
      {state.isLoading ? (
        <div className="spin">
          <Spin />
        </div>
      ) : (
        <ErrorWrapper>
          <img src={new URL(`../../static/img/pages/404.svg`, import.meta.url).href} alt="En Construcción" />
          <Heading className="error-text" as="h3">
            En Construcción
          </Heading>
          <p>Estamos trabajando en esta página. Vuelve pronto para más actualizaciones.</p>
          <NavLink to="/admin">
            <Button size="default" type="primary">
              Volver al Inicio
            </Button>
          </NavLink>
        </ErrorWrapper>
      )}
    </Main>
  );
}

export default UnderConstruction;
