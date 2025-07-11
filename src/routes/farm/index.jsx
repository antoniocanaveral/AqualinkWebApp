import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import withFarmLayout from '../../layout/withFarmLayout';
import LabCoordinationsRoutes from '../lab/labCoordinations';
import CustodyCoordinationsRoutes from '../custody/custodyCoordinations';
import PanelFarmRoutes from './farmPanel';
import TaskFarms from '../../container/AQx-Farms/task-farms';
import AnalyticsFarms from '../../container/AQx-Farms/analytics-farms';
import PlanningStudioFarms from '../../container/AQx-Farms/planning-studio-farms';
import ODParametersFarms from '../../container/AQx-Farms/parameters/od-parameters-farms';
import WaterAqualityFarms from '../../container/AQx-Farms/parameters/water-quality-parameters';
import GeneralMonitoringFarm from '../../container/AQx-Farms/monitoring/general-monitoring-farms';
import PlateSamplingFarm from '../../container/AQx-Farms/monitoring/plate-sampling-farms';
import AddInventoryFarms from '../../container/AQx-Farms/inventory/add-inventory-farms';
import InventoryTable from '../../container/AQx-Farms/inventory/view-inventory-farms';
import SoilQualityFarm from '../../container/AQx-Farms/parameters/soil-quality-parameters';
import RealAndProjectedFeeding from '../../container/AQx-Farms/monitoring/real-vs-projected-feeding-farms';
import ProteinPercentageFarm from '../../container/AQx-Farms/monitoring/protein-percentage-farms';
import CropRoutesFarm from './farmCrop';
import CultureMediumRoutesFarm from './farmCultureMedium';
import LaboratoryFarm from './farmLaboratory';
import PackingRouteFarm from './farmPacking';
import CostRouteFarm from './farmCost';
import ClientRouteFarm from './farmClient';
import UserRoutesFarm from './farmUser';
import FaqComponent from '../../container/Faq';
import SupportTicket from '../../container/supportTicket/Index';
import AnalyticRoutesFarm from './farmAnalytic';
import FeedingTableFarms from '../../container/AQx-Farms/monitoring/feeding-tables-farm';
import RealPlanning from '../../container/AQx-Farms/real-planning';
import MessageNotificationsCenter from '../../container/AQx-Farms/message-notifications-center/message-notifications-center';
import ReportOpFarm from '../../container/AQx-Farms/reports/report-op-farm';
import TraceabilityLotesCustody from '../../container/AQx-Custody/traceability/traceability-lotes-custody';
import TraceabilityLotesFarm from '../../container/AQx-Custody/traceability/traceability-lotes-farm';
import KnowledgeBase from '../../container/pages/knowledgeBase/Index';
import AddClientFarm from '../../container/AQx-Farms/client/client-add-farm';
import PanelFarms from '../../container/AQx-Farms/panel-farms';
import PanelFarmOverview from '../../container/AQx-Farms/panel-farm-overview';
import DynamicKnowledgeBase from '../../container/pages/knowledgeBase/DynamicKnowledgeBase';
import KnowledgeViewer from '../../container/pages/knowledgeBase/KnoledgeViewer';
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

        <Route path="/client/add" element={<AddClientFarm />} />
        <Route path="/client/*" element={<ClientRouteFarm />} />
        <Route index path="/*" element={<PanelFarmRoutes />} />
        <Route path="/panel" element={<PanelFarms />} />

        <Route path="/panel-overview" element={<PanelFarmOverview />} />


        <Route path="/planning-studio/*" element={<PlanningStudioFarms />} />
        <Route path="/real-planning/*" element={<RealPlanning />} />

        <Route path="/monitoreo-general/*" element={<GeneralMonitoringFarm />} />
        <Route path="/monitoring/actual-projected/*" element={<RealAndProjectedFeeding />} />
        <Route path="/monitoring/protein-percentage/*" element={<ProteinPercentageFarm />} />
        <Route path="/monitoring/plate-sampling/*" element={<PlateSamplingFarm />} />
        <Route path="/monitoring/feeding-tables/*" element={<FeedingTableFarms />} />

        <Route path="/KnowledgeBase/*" element={<KnowledgeViewer />} />
        <Route path="/analytics/*" element={<AnalyticRoutesFarm />} />
        <Route path="/crop/*" element={<CropRoutesFarm />} />
        <Route path="/culture-medium/*" element={<CultureMediumRoutesFarm />} />
        <Route path="/laboratory/*" element={<LaboratoryFarm />} />
        <Route path="/packing/*" element={<PackingRouteFarm />} />
        <Route path='/costs/*' element={<CostRouteFarm />} />
        <Route path="/users/*" element={<UserRoutesFarm />} />
        <Route path='/faq/*' element={<FaqComponent />} />
        <Route path="/support/*" element={<SupportTicket />} />
        <Route path='/message-notifications-center/*' element={<MessageNotificationsCenter />} />
        <Route path="/inventory/add/*" element={<AddInventoryFarms />} />
        <Route path="/inventory/view/*" element={<InventoryTable />} />
        <Route path="/parameters/od-temp/*" element={<ODParametersFarms />} />
        <Route path="/parameters/soil-quality/*" element={<SoilQualityFarm />} />
        <Route path="/parameters/water-quality/*" element={<WaterAqualityFarms />} />
        <Route path="/tasks/*" element={<TaskFarms />} />
        <Route path="/coords/*" element={<LabCoordinationsRoutes />} />
        <Route path="/seeding-coords/*" element={<LabCoordinationsRoutes />} />
        <Route path="/fishing-coords/*" element={<CustodyCoordinationsRoutes />} />
        <Route path="/traceability/tracking/*" element={<TraceabilityLotesFarm />} />
        <Route path="/operation-report" element={<ReportOpFarm />} />

        {/* Ruta para cuando no se encuentra ninguna coincidencia */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});


export default withFarmLayout(Farm);
