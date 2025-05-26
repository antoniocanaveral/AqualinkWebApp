import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import StimatedProductionChart from '../planning/StimatedProductionChart';
import CostIncomeComparisonChart from '../planning/CostIncomeComparisonChart';

const ChartsContainer = ({ scenarios }) => (
  <Row gutter={25} style={{ marginTop: '40px' }}>
    <Col xs={24} xl={24}>
      <StimatedProductionChart scenarios={scenarios} />
    </Col>
    <Col xs={24} xl={24}>
      <CostIncomeComparisonChart scenarios={scenarios} />
    </Col>
  </Row>
);

ChartsContainer.propTypes = {
  scenarios: PropTypes.array.isRequired,
};

export default ChartsContainer;
