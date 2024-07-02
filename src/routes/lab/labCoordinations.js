import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const CoordinationsLabs = lazy(() => import('../../container/AQx-Labs/coords-labs'));
const CoordinationLabs = lazy(() => import('../../container/AQx-Labs/coord-labs'));
const CoordinationLabsResumen = lazy(() => import('../../container/AQx-Labs/coord-labs-resumen'));
const NotFound = lazy(() => import('../../container/pages/404'));

function LabCoordinationsRoutes() {
  return (
    <Routes>
      <Route index element={<CoordinationsLabs />}>
        
      </Route>
      <Route path=":id/edit" element={<CoordinationLabs />} />
      <Route path=":id/view" element={<CoordinationLabsResumen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default LabCoordinationsRoutes;
