import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import withMonitoringMenu from '../../layout/withMonitoringLayout';
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
import TraceabilityLotesFarm from '../../container/AQx-Farms/traceability/traceability-lotes-custody';
import ReportOpFarm from '../../container/AQx-Farms/reports/report-op-farm';
import TraceabilityLotesCustody from '../../container/AQx-Custody/traceability/traceability-lotes-custody';
import DashboardMonitoring from '../../container/AQx-Monitoring/Dashboard/DashboardMonitoring';
import ClientFarm from '../../container/AQx-Farms/client/client-farm';
import GeneralPathologyLab from '../../container/AQx-Labs/crop/general-pathology-farm';
import WaterFlowFarm from '../../container/AQx-Farms/culture-medium/water-flow-farm';
import ShrimpFarm from '../../container/AQx-Farms/crop/shrimp-farm';
import Cookies from 'js-cookie';
import ClientLabs from '../../container/AQx-Labs/client/client-farm-view.js';
import ClientCustody from '../../container/AQx-Custody/client/client-custody.js';
import GeneralMonitoringMonitoring from '../../container/AQx-Monitoring/Heath&Wellfare/monitoreo-general-monitoring.js';
import GeneralPathologyFarm from '../../container/AQx-Farms/crop/general-pathology-farm.js';
import GeneralPathologyMonitoring from '../../container/AQx-Monitoring/Heath&Wellfare/general-pathology-monitoring.js';
import SoilQualityMonitoring from '../../container/AQx-Monitoring/Heath&Wellfare/soil-quality-parameters-monitoring.js';
import PanelFarms from '../../container/AQx-Farms/panel-farms.js';
import ReportOpMonitoring from '../../container/AQx-Monitoring/Trazability/report-op-monitoring.js';
import TransferFarm from '../../container/AQx-Farms/crop/transfer-farm.js';
import HarvestFarm from '../../container/AQx-Farms/crop/harvest-farm.js';
import TraceabilityLotesMonitoring from '../../container/AQx-Monitoring/Trazability/traceability-lotes-monitoring.js';
import { MaintananceWrapper } from '../../container/pages/style.js';
import Maintenance from '../../container/pages/Maintenance.js';

const NotFound = lazy(() => import('../../container/pages/404'));

const   Monitoring = React.memo(() => {
  const { pathname } = useLocation();
  console.log(pathname)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const auditType = Cookies.get('orgAuditType');
  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index element={<DashboardMonitoring />} />    

        <Route path="/menu-orgs/*" element={<PanelFarmRoutes />} />  
        <Route path="/dashboard/*" element={<DashboardMonitoring />} />  
        <Route path="/legal-infrastructure/*" element={ auditType === "FARM" ? <ClientFarm /> : auditType === "LAB" ?<ClientLabs/>: <ClientCustody/>} />


        <Route path="/parameters/*" element={<GeneralMonitoringMonitoring />} />
        <Route path="/soil-quality/*" element={<SoilQualityMonitoring />} />
        <Route path="/veterinary-plan/*" element={<GeneralPathologyMonitoring />} />


        <Route path="/water-flow/*" element={<WaterFlowFarm />} />
        <Route path="/water-quality/*" element={<WaterAqualityFarms />} />
        <Route path="/do-parameters/*" element={<ODParametersFarms />} />
        

        <Route path="/op-report/*" element={<ReportOpMonitoring />} />
        <Route path="/siembra/*" element={<ShrimpFarm />} />
        <Route path="/transferencia/*" element={<TransferFarm />} />
        <Route path="/cosecha/*" element={<HarvestFarm />} />

        <Route path="/tracking/*" element={<TraceabilityLotesMonitoring />} />
        <Route path="/full-report/*" element={<Maintenance />} />
        <Route path="/do-parameters/*" element={<ODParametersFarms />} />
        
        
        
        <Route path="/monitoring/plate-sampling/*" element={<PlateSamplingFarm />} />
        <Route path="/monitoring/feeding-tables/*" element={<FeedingTableFarms />} />

        <Route path="/analytics/*" element={<AnalyticRoutesFarm />} />  
        <Route path="/crop/*" element={<CropRoutesFarm />} />
        <Route path="/culture-medium/*" element={<CultureMediumRoutesFarm />} />
        <Route path="/laboratory/*" element={<LaboratoryFarm/>} />
        <Route path="/packing/*" element={<PackingRouteFarm />} />
        <Route path='/costs/*' element={<CostRouteFarm />} />
        <Route path="/client/*" element={<ClientRouteFarm />} />
        <Route path="/users/*" element={<UserRoutesFarm />} />

        <Route path='/faq/*' element={<FaqComponent/>} />
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
        <Route path="/traceability/tracking/*" element={<TraceabilityLotesCustody />} />
        <Route path="/operation-report" element={<ReportOpFarm />} />
       
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withMonitoringMenu(Monitoring);
