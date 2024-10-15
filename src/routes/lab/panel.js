import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PanelLabs from '../../container/AQx-Labs/panel-labs';

const CoordinationsLabs = lazy(() => import('../../container/AQx-Labs/coords-labs'));
const NotFound = lazy(() => import('../../container/pages/404'));

function PanelRoutes() {
  return (
    <Routes>
      <Route index element={<PanelLabs />}>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PanelRoutes;
