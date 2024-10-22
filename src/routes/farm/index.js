import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import withFarmLayout from '../../layout/withFarmLayout';
import CustodyNotificationsSeedingRoutes from '../custody/custodySeedingNotifications';
import LabCoordinationsRoutes from '../lab/labCoordinations';
import LabNotificationsSeedingRoutes from '../lab/labSeedingNotifications';
import CustodyCoordinationsRoutes from '../custody/custodyCoordinations';
import PanelFarmRoutes from './farmPanel';
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
        <Route index element={<PanelFarmRoutes />} />     
        <Route path="/panel/*" element={<PanelFarmRoutes />} />    
        <Route path="/coords/*" element={<LabCoordinationsRoutes />} />
        <Route path="/seeding-notifications/*" element={<LabNotificationsSeedingRoutes />} />
        <Route path="/seeding-coords/*" element={<LabCoordinationsRoutes />} />
        
        <Route path="/fishing-notifications/*" element={<CustodyNotificationsSeedingRoutes />} />
        <Route path="/fishing-coords/*" element={<CustodyCoordinationsRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withFarmLayout(Farm);
