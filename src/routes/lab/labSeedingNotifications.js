import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotificationSeedingLabs from '../../container/AQx-Labs/notification-seeding-labs';
import NotificationSeedingResumen from '../../container/AQx-Labs/notification-seeding-resumen';

const CoordinationsLabs = lazy(() => import('../../container/AQx-Labs/coords-labs'));
const CoordinationLabs = lazy(() => import('../../container/AQx-Labs/coord-labs'));
const CoordinationLabsResumen = lazy(() => import('../../container/AQx-Labs/coord-labs-resumen'));
const CoordinationLabsParams = lazy(() => import('../../container/AQx-Labs/coord-labs-params'));
const NotFound = lazy(() => import('../../container/pages/404'));

function LabNotificationsSeedingRoutes() {
  return (
    <Routes>
      <Route index element={<NotificationSeedingLabs />}>
        
      </Route>
      <Route path=":id/view" element={<NotificationSeedingResumen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default LabNotificationsSeedingRoutes;
