import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardCustody = lazy(() => import('../../container/AQx-Custody/dash-custody'));
const NotFound = lazy(() => import('../../container/pages/404'));

function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<DashboardCustody />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default DashboardRoutes;
