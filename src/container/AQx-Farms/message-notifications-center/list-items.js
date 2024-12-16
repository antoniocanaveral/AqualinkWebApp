import React from 'react';
import { Row, Col } from 'antd';
import SupportOverview from './items.json';
import { OverviewDataStyleWrap } from '../../dashboard/Style';
import OverviewCard from '../../../components/cards/OverviewCard';

const ListItemsMessageNotificationsCenter = React.memo(() => {
  return (
    <OverviewDataStyleWrap>
      <Row gutter={25}>
        {SupportOverview.map((item, i) => {
          return (
            <Col xxl={6} sm={6} xs={24} key={i}>
              <OverviewCard className="" data={item} bottomStatus={false} contentFirst />
            </Col>
          );
        })}
      </Row>
    </OverviewDataStyleWrap>
  );
});

export default ListItemsMessageNotificationsCenter;
