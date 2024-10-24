import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CustodyCoordinations from './custodyCoordinations';
import withCustodyLayout from '../../layout/withCustodyLayout';
import CustodyFarmRoutes from './custodyPanel';
const NotFound = lazy(() => import('../../container/pages/404'));

const Custody = React.memo(() => {
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
        <Route index path="/*" element={<CustodyFarmRoutes />} />
        <Route path="/panel" element={<CustodyFarmRoutes/>} />
        <Route path="/coords/*" element={<CustodyCoordinations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withCustodyLayout(Custody);
