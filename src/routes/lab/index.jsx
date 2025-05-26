import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import withLabLayout from '../../layout/withLabLayout';
import LabCoordinationsRoutes from '../lab/labCoordinations';
import CustodyCoordinationsRoutes from '../custody/custodyCoordinations';
import PanelFarmRoutes from '../farm/farmPanel';
import TaskFarms from '../../container/AQx-Farms/task-farms';
import UserRoutesFarm from '../farm/farmUser';
import FaqComponent from '../../container/Faq';
import SupportTicket from '../../container/supportTicket/Index';
import RealPlanning from '../../container/AQx-Farms/real-planning';
import MessageNotificationsCenter from '../../container/AQx-Farms/message-notifications-center/message-notifications-center';
import PanelLabs from '../../container/AQx-Labs/panel-labs';
import AnalyticRoutesLabs from './labAnalytic';
import PlanningLabs from '../../container/AQx-Labs/planning/planning-labs';
import DispatchReportLab from '../../container/AQx-Labs/report/dispatch-report-lab';
import GeneralMonitoringLab from '../../container/AQx-Labs/monitoring/general-monitoring-lab';
import ODParametersLabs from '../../container/AQx-Labs/parameters/od-parameters-labs';
import WaterAqualityLabs from '../../container/AQx-Labs/parameters/water-quality-parameters-labs';
import CropRoutesLabs from './farmCrop';
import CultureMediumRoutesLab from './farmCultureMedium';
import AddInventoryLabs from '../../container/AQx-Labs/inventory/add-inventory-farms';
import InventoryTableLabs from '../../container/AQx-Labs/inventory/view-inventory-farms';
import CostRouteLab from './farmCost';
import ClientRouteLab from './farmClient';
import RealAndProjectedFeedingLab from '../../container/AQx-Labs/monitoring/real-vs-projected-feeding-lab';
import ShrimpRouteLab from '../farm/farmLaboratory';
import PanelLogisticLabs from '../../container/AQx-Labs/panel-logistic';
import LabLoteRoutes from './labLoteRoutes';
import UnderConstruction from '../../container/pages/Construction';
import TaskLabs from '../../container/AQx-Labs/task-labs';
const NotFound = lazy(() => import('../../container/pages/404'));

const Farm = React.memo(() => {
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
        <Route index element={<PanelFarmRoutes />} />     
        <Route path="/panel/*" element={<PanelLabs />} />  
        <Route path="/panel-logistic/*" element={<PanelLogisticLabs />} />  
        <Route path="/analytics/*" element={<AnalyticRoutesLabs />} />  
        <Route path="/planning/*" element={<PlanningLabs />} />
        <Route path="/dispatch-reports/*" element={<DispatchReportLab />} />
        <Route path="/real-planning/*" element={<RealPlanning />} />
        <Route path="/monitoring/general/*" element={<UnderConstruction />} />
        <Route path="/monitoring/actual-projected/*" element={<UnderConstruction />} />
        <Route path="/crop/*" element={<UnderConstruction />} />

        <Route path="/culture-medium/*" element={<UnderConstruction />} />
        <Route path="/shrimp/*" element={<ShrimpRouteLab/>} />
        <Route path='/costs/*' element={<CostRouteLab />} />
        <Route path="/client/*" element={<ClientRouteLab />} />
        <Route path="/users/*" element={<UserRoutesFarm />} />

        <Route path='/faq/*' element={<FaqComponent/>} />
        <Route path="/support/*" element={<SupportTicket />} />
        <Route path='/message-notifications-center/*' element={<MessageNotificationsCenter />} />

        <Route path="/inventory/add/*" element={<AddInventoryLabs />} />
        <Route path="/inventory/view/*" element={<InventoryTableLabs />} />
        <Route path="/parameters/od-temp/*" element={<UnderConstruction />} />
        <Route path="/parameters/water-quality/*" element={<UnderConstruction />} />
        <Route path="/tasks/*" element={<TaskLabs />} />
        <Route path="/coords/*" element={<LabCoordinationsRoutes />} />
        <Route path="/seeding-coords/*" element={<LabCoordinationsRoutes />} />
        <Route path="/fishing-coords/*" element={<CustodyCoordinationsRoutes />} />
        <Route path="/lote/*" element={<LabLoteRoutes />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withLabLayout(Farm);
