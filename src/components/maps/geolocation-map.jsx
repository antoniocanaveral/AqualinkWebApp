import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Cards } from '../cards/frame/cards-frame';
import { Badge, Col, Row, Skeleton, Space, Typography } from 'antd';
import { GoogleMaps } from './google-maps';


const GeolocationMap = ({ width, height }) => {

    return (
        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
            <div style={{ width:"100%" }}>
                <Row gutter={[25, 25]} align="top">
                    <Col xs={24} md={24}>
                       
                        <GoogleMaps width={width} height={height} />
                    </Col>
                    
                </Row>
            </div>
        </Suspense>

    );
}

GeolocationMap.defaultProps = {
    width: '100%',
    height: '305px',
};

GeolocationMap.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};

export { GeolocationMap };
