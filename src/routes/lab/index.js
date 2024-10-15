import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import LabCoordinations from './labCoordinations';
import withLabLayout from '../../layout/withLabLayout';
import PanelRoutes from './panel';
const NotFound = lazy(() => import('../../container/pages/404'));

const Lab = React.memo(() => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index element={<LabCoordinations />} />
        <Route path="/panel/*" element={<PanelRoutes />} />
        <Route path="/coords/*" element={<LabCoordinations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withLabLayout(Lab);
