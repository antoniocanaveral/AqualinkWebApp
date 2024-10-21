import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import CustodyCoordinations from './custodyCoordinations';
import withCustodyLayout from '../../layout/withCustodyLayout';
import LabNotificationsSeedingRoutes from '../lab/labSeedingNotifications';
import CustodyNotificationsSeedingRoutes from './custodySeedingNotifications';
const NotFound = lazy(() => import('../../container/pages/404'));

const Custody = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index path="/*" element={<Dashboard />} />
        <Route path="/coords/*" element={<CustodyCoordinations />} />
        <Route path="/fishing-notifications/*" element={<CustodyNotificationsSeedingRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withCustodyLayout(Custody);
