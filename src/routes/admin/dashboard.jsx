import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('../../container/dashboard'));
const DemoOne = lazy(() => import('../../container/dashboard/DemoOne'));
const DemoTwo = lazy(() => import('../../container/dashboard/DemoTwo'));
const DemoThree = lazy(() => import('../../container/dashboard/DemoThree'));
const DemoFour = lazy(() => import('../../container/dashboard/DemoFour'));
const DemoFive = lazy(() => import('../../container/dashboard/DemoFive'));
const DemoSix = lazy(() => import('../../container/dashboard/DemoSix'));
const DemoSeven = lazy(() => import('../../container/dashboard/DemoSeven'));
const DemoEight = lazy(() => import('../../container/dashboard/DemoEight'));
const DemoNine = lazy(() => import('../../container/dashboard/DemoNine'));
const DemoTen = lazy(() => import('../../container/dashboard/DemoTen'));
const DashboardFarms = lazy(() => import('../../container/AQx-Farms/dash-farms'));
const NotFound = lazy(() => import('../../container/pages/404'));

function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="demo-1" element={<DemoOne />} />
      <Route path="demo-2" element={<DemoTwo />} />
      <Route path="demo-3" element={<DemoThree />} />
      <Route path="demo-4" element={<DemoFour />} />
      <Route path="demo-5" element={<DemoFive />} />
      <Route path="demo-6" element={<DemoSix />} />
      <Route path="demo-7" element={<DemoSeven />} />
      <Route path="demo-8" element={<DemoEight />} />
      <Route path="demo-9" element={<DemoNine />} />
      <Route path="demo-10" element={<DemoTen />} />
      <Route path="dash-farms" element={<DashboardFarms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default DashboardRoutes;
