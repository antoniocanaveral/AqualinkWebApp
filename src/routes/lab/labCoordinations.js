import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import CoordinationLabsResumen from '../../container/AQx-Labs/coord-labs-resumen';
import CoordinationsLabs from '../../container/AQx-Labs/coords-labs';
import CoordinationLabs from '../../container/AQx-Labs/coord-labs';
import CoordinationLabsParams from '../../container/AQx-Labs/coord-labs-params';

const NotFound = lazy(() => import('../../container/pages/404'));

function LabCoordinationsRoutes() {
  return (
    <Routes>
      <Route index element={<CoordinationsLabs />}>
        
      </Route>
      <Route path=":id/edit" element={<CoordinationLabs />} />
      <Route path=":id/view" element={<CoordinationLabsResumen />} />
      <Route path=":id/params" element={<CoordinationLabsParams />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default LabCoordinationsRoutes;
