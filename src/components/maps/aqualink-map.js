import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Cards } from '../cards/frame/cards-frame';
import { Badge, Col, Row, Skeleton, Space, Typography } from 'antd';
import { GoogleMaps } from './google-maps';


const AqualinkMaps = ({ width, height }) => {

    return (
        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
            <Cards title="Geolocalización" size="large">
                <Row gutter={[25, 25]} align="top">
                    <Col xs={24} md={24}>
                       
                        <GoogleMaps width={width} height={height} />
                    </Col>
                    <Col xs={24} md={24}>
                        <Space direction="vertical" size="middle" style={{ marginTop: height === "305px" ? 0 : height, width: '100%', display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
                            <div className="content-block">
                                <Typography.Title level={5}>Camaroneras 1</Typography.Title>
                                <Typography.Text>Área: 307.35 Ha</Typography.Text>
                            </div>

                            <div className="content-block">
                                <Typography.Title level={5}>Piscinas de Engorde</Typography.Title>
                                <Typography.Text># Piscinas: 60</Typography.Text>
                                <br></br>
                                <Typography.Text>Área: 280.25 Ha</Typography.Text>
                            </div>

                            <div className="content-block">
                                <Typography.Title level={5}>Piscinas Pre Cría</Typography.Title>
                                <Typography.Text># Pre Crías: 15</Typography.Text>
                                <br></br>
                                <Typography.Text>Área: 20.17 Ha</Typography.Text>
                            </div>
                        </Space>
                    </Col>
                </Row>
            </Cards>
        </Suspense>

    );
}

AqualinkMaps.defaultProps = {
    width: '100%',
    height: '305px',
};

AqualinkMaps.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};

export { AqualinkMaps };
