import React from 'react';
import { MaintananceWrapper } from './style';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';

function Maintenance() {
  return (
    <Main>
      <MaintananceWrapper>
        <img src={new URL(`../../static/img/pages/maintenance.svg`, import.meta.url).href} alt="maintenance" />
        <Heading as="h3">Estamos trabajando en esta página</Heading>
        <p>
          Esta sección se encuentra actualmente en construcción. <br />
          Estará disponible muy pronto. ¡Gracias por tu paciencia!
        </p>
      </MaintananceWrapper>
    </Main>
  );
}

export default Maintenance;
