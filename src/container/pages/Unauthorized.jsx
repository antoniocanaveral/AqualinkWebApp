// components/pages/Unauthorized.jsx
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { ErrorWrapper } from './style';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

function Unauthorized() {
  const [state, setState] = useState({
    isLoading: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setState({ isLoading: false });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Main>
      {state.isLoading ? (
        <div className="spin">
          <Spin />
        </div>
      ) : (
        <ErrorWrapper>
          <img
            src={new URL(`../../static/img/pages/Illustration.png`, import.meta.url).href}
            alt="401"
          />
          <Heading className="error-text" as="h3">
            401
          </Heading>
          <p>No tienes permisos para acceder a esta página.</p>
          <NavLink to="/">
            <Button size="default" type="primary">
              Volver al Inicio
            </Button>
          </NavLink>
        </ErrorWrapper>
      )}
    </Main>
  );
}

export default Unauthorized;
