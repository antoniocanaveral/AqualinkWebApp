import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Cards } from '../cards/frame/cards-frame';
import { Badge, Col, Row, Skeleton, Space, Typography } from 'antd';
import { GoogleMaps } from './google-maps';


const AqualinkMaps = ({ width, height }) => {

    return (
        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
            <Cards title="Studio Planning: Segmento P3" size="large">
                <Row gutter={[25, 25]} align="top">
                    <Col xs={24} md={24}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: "20px" }}>
                            <Badge color="#1890ff" dot style={{ marginRight: 8 }} />
                            <Typography.Title level={3} style={{ margin: 0 }}>Piscina 3</Typography.Title>
                        </div>
                        <GoogleMaps width={width} height={height} />
                    </Col>
                    <Col xs={24} md={24}>
                        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div className="content-block">
                                    <Typography.Title style={{ color: "#666d92" }} level={5}>Camaroneras 1</Typography.Title>
                                    <Typography.Text>Área: 307.35 ha</Typography.Text>
                                </div>
                                <div className="content-block">
                                    <Typography.Title style={{ color: "#666d92" }} level={5}>Piscina 3</Typography.Title>
                                    <Typography.Text>Área: 5.35 ha</Typography.Text>
                                </div>
                                <div className="content-block">
                                    <Typography.Title style={{ color: "#666d92" }} level={5}>Pre Cría 3</Typography.Title>
                                    <Typography.Text>Área: 1.35 ha</Typography.Text>
                                </div>
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
