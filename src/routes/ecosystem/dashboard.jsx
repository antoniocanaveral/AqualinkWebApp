import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardEcosystem = lazy(() => import('../../container/AQx-Ecosystem/dashboard'));
const NotFound = lazy(() => import('../../container/pages/404'));

function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<DashboardEcosystem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default DashboardRoutes;
