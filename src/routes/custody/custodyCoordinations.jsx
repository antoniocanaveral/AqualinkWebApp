import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotificationSeedingResumen from '../../container/AQx-Labs/notification-seeding-resumen';
import NotificationFishingCustody from '../../container/AQx-Custody/notification-fishing-custody';
import NotificationFishingResumen from '../../container/AQx-Custody/notification-fishing-resumen';

const CoordinationsCustody = lazy(() => import('../../container/AQx-Custody/coords-custody'));
const CoordinationCustody = lazy(() => import('../../container/AQx-Custody/coord-custody'));
const CoordinationCustodyResumen = lazy(() => import('../../container/AQx-Custody/coord-custody-resumen'));
const CoordinationCustodyBines = lazy(() => import('../../container/AQx-Custody/coord-custody-bines'));
const CoordinationCustodyDrawers = lazy(() => import('../../container/AQx-Custody/coord-custody-drawers'));

const NotFound = lazy(() => import('../../container/pages/404'));

function CustodyCoordinationsRoutes() {
  return (
    <Routes>
      <Route index element={<CoordinationsCustody />}>
        
      </Route>
      <Route path=":id/edit" element={<CoordinationCustody />} />
      <Route path="/notification/:id/view" element={<NotificationFishingResumen />} />
      <Route path=":id/view" element={<CoordinationCustodyResumen />} />
      <Route path=":id/bines" element={<CoordinationCustodyBines />} />
      <Route path=":id/drawers" element={<CoordinationCustodyDrawers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default CustodyCoordinationsRoutes;
