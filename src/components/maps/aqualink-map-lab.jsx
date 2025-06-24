import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Cards } from '../cards/frame/cards-frame';
import { Col, Row, Skeleton, Descriptions, Typography, Space } from 'antd';
import { GoogleMaps } from './google-maps';
import {
  IdcardOutlined,
  SlidersOutlined,
  DatabaseOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  ClusterOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const AqualinkMapLab = ({ width, height }) => {
  return (
    <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
      <Cards title="Geolocalización" size="large">
        <Row gutter={[25, 25]} align="top">
          <Col xs={24} md={24}>
            <GoogleMaps width={width} height={height} />
          </Col>
          <Col xs={24} md={24}>
            <Descriptions
              column={{ xs: 1, sm: 2, md: 3 }}
              bordered
              size="small"
              layout="vertical"
              style={{ marginTop: height === "305px" ? 0 : height }}
            >
              <Descriptions.Item style={{fontSize:"13px"}} label={<Space><IdcardOutlined /> Lote ID</Space>}>
                <Text>12345</Text>
              </Descriptions.Item>

              <Descriptions.Item  style={{fontSize:"13px"}}  label={<Space><SlidersOutlined /> Tanque</Space>}>
                <Text>Tanque A</Text>
              </Descriptions.Item>

              <Descriptions.Item  style={{fontSize:"13px"}}  label={<Space><DatabaseOutlined /> Capacidad</Space>}>
                <Text>5000 Litros</Text>
              </Descriptions.Item>

              <Descriptions.Item style={{fontSize:"13px"}}  label={<Space><CalendarOutlined /> Fecha Inicio</Space>}>
                <Text>01/01/2025</Text>
              </Descriptions.Item>

              <Descriptions.Item style={{fontSize:"13px"}}  label={<Space><ClockCircleOutlined /> Fecha  Fin</Space>}>
                <Text>31/12/2025</Text>
              </Descriptions.Item>

              <Descriptions.Item style={{fontSize:"13px"}}  label={<Space><ClusterOutlined /> Nauplios </Space>}>
                <Text>15000</Text>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Cards>
    </Suspense>
  );
}

AqualinkMapLab.defaultProps = {
  width: '100%',
  height: '305px',
};

AqualinkMapLab.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export { AqualinkMapLab };
