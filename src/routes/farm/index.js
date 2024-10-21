import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import withFarmLayout from '../../layout/withFarmLayout';
import CustodyNotificationsSeedingRoutes from '../custody/custodySeedingNotifications';
import LabCoordinationsRoutes from '../lab/labCoordinations';
const NotFound = lazy(() => import('../../container/pages/404'));

const Farm = React.memo(() => {
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
        <Route path="/coords/*" element={<LabCoordinationsRoutes />} />
        <Route path="/fishing-notifications/*" element={<CustodyNotificationsSeedingRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withFarmLayout(Farm);
