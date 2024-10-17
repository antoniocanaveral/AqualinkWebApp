import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardFarms = lazy(() => import('../../container/AQx-Farms/dash-farms'));
const NotFound = lazy(() => import('../../container/pages/404'));

function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<DashboardFarms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default DashboardRoutes;
