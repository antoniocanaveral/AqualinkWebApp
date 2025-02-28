import React from 'react';
import { Row, Col } from 'antd';
import { OverviewDataStyleWrap } from '../../dashboard/Style';
import OverviewCard from '../../../components/cards/OverviewCard';
import PropTypes from 'prop-types';

const OverviewDataList = React.memo(({ overviewData }) => {
  return (
    <OverviewDataStyleWrap>
      <Row gutter={25}>
        {overviewData.map((item) => (
          <Col key={item.id} xxl={6} sm={12} xs={24}>
            <OverviewCard
              className="ninjadash-overview-card-support"
              data={item}
              bottomStatus={false}
              contentFirst
            />
          </Col>
        ))}
      </Row>
    </OverviewDataStyleWrap>
  );
});

OverviewDataList.propTypes = {
  overviewData: PropTypes.array.isRequired,
};

export default OverviewDataList;
