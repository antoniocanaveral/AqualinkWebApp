import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CustodyCoordinations from './custodyCoordinations';
import withCustodyLayout from '../../layout/withCustodyLayout';
import PanelCustody from '../../container/AQx-Custody/panel-custody';
import AnalyticsCustody from '../../container/AQx-Custody/analytics/analytics-custody';
import HarvestReportCustody from '../../container/AQx-Custody/report/harvest-report-custody';
import TaskCustody from '../../container/AQx-Custody/task/task-custody';
import PurchasesCustodyRoutes from './custodyPurchases';
import StampsContainersAdminCustody from '../../container/AQx-Custody/stamps-containers/stamps-containers-admin-custody';
import PlanningCustody from '../../container/AQx-Custody/planning/planning-custody';
import SupplyCustodyRoutes from './custodySupply';
import TransportCustodyRoutes from './custodyTransport';
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
        <Route path="/planning/*" element={<PlanningCustody />} />
        <Route path="/harvest-reports/*" element={<HarvestReportCustody />} />
        <Route path="/task/*" element={<TaskCustody />} />
        <Route path="/purchases/*" element={<PurchasesCustodyRoutes />} />
        <Route path="/supply/*" element={<SupplyCustodyRoutes />} />
        <Route path="/transport/*" element={<TransportCustodyRoutes />} />
        <Route path="/coords/*" element={<CustodyCoordinations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withCustodyLayout(Custody);
