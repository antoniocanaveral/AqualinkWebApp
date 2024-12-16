import Styled from 'styled-components';

const GmapWraper = Styled.div`
    width: ${(props) => props.width}; 
    height: ${(props) => props.height};
    position: relative;
    .map-container {
        width: 100%;
        height: 100%;
    }
    .leaflet-container {
        wieth: ${(props) => props.width}; 
        height: ${(props) => props.height};
    }
    .leaflet-bar{
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
        a,
        a:hover{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        
    }
`;

export { GmapWraper };
