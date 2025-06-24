"use client";

import React from 'react';
import { Row, Col } from 'antd';
import { OverviewDataStyleWrap } from '../../dashboard/Style';
import OverviewCard from '../../../components/cards/OverviewCard';

const ListItemsMessageNotificationsCenter = React.memo(({ alertHistory }) => {
  // Calculate notification counts
  const totalNotifications = alertHistory.length;
  const criticalNotifications = alertHistory.filter(item => item.severity === "CRÍTICO").length;
  const dangerNotifications = alertHistory.filter(item => item.severity === "PELIGRO").length;
  const activityNotPerformed = alertHistory.filter(item => !item.isreviewed).length;

  const overviewData = [
    {
      id: 1,
      type: "primary",
      icon: "bell.svg",
      label: "Total Notificaciones",
      total: totalNotifications.toString(),
      suffix: "",
      prefix: ""
    },
    {
      id: 2,
      type: "warning",
      icon: "warning2.svg",
      label: "Severidad Crítica",
      total: criticalNotifications.toString(),
      suffix: "",
      prefix: ""
    },
    {
      id: 3,
      type: "warning",
      icon: "warning1.svg",
      label: "Severidad Peligro",
      total: dangerNotifications.toString(),
      suffix: "",
      prefix: ""
    },
    {
      id: 4,
      type: "info",
      icon: "clock.svg",
      label: "No Revisadas",
      total: activityNotPerformed.toString(),
      suffix: "",
      prefix: ""
    }
  ];

  return (
    <OverviewDataStyleWrap>
      <Row gutter={25}>
        {overviewData.map((item, i) => (
          <Col xxl={6} sm={6} xs={24} key={i}>
            <OverviewCard className="" data={item} bottomStatus={false} contentFirst />
          </Col>
        ))}
      </Row>
    </OverviewDataStyleWrap>
  );
});

export default ListItemsMessageNotificationsCenter;