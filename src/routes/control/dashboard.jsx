import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardControl = lazy(() => import('../../container/AQx-Control/dash-control'));
const NotFound = lazy(() => import('../../container/pages/404'));

function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<DashboardControl />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default DashboardRoutes;
