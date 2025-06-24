import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardLabs = lazy(() => import('../../container/AQx-Labs/dash-labs'));
const NotFound = lazy(() => import('../../container/pages/404'));

function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<DashboardLabs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default DashboardRoutes;
