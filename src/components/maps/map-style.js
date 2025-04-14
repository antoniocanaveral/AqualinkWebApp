// ./map-style.js
import styled from 'styled-components';

export const GmapWraper = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '400px'};
  position: relative;

  .map-container {
    width: 100%;
    height: 100%;
  }
`;
