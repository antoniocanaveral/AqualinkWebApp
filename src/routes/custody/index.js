import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CustodyCoordinations from './custodyCoordinations';
import withCustodyLayout from '../../layout/withCustodyLayout';
import CustodyFarmRoutes from './custodyPanel';
import PanelCustody from '../../container/AQx-Custody/panel-custody';
import AnalyticsCustody from '../../container/AQx-Custody/analytics/analytics-custody';
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
        <Route index path="/*" element={<PanelCustody />} />
        <Route path="/panel" element={<PanelCustody/>} />
        <Route path="/analytics" element={<AnalyticsCustody/>} />
        <Route path="/coords/*" element={<CustodyCoordinations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withCustodyLayout(Custody);
