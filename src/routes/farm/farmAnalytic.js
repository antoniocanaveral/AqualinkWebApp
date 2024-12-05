import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import GeneralPathologyFarm from '../../container/AQx-Farms/crop/general-pathology-farm';
import ShrimpFarm from '../../container/AQx-Farms/crop/shrimp-farm';
import TransferFarm from '../../container/AQx-Farms/crop/transfer-farm';
import PopulationBiomassFarm from '../../container/AQx-Farms/crop/population-biomass-farm';
import TextureFarm from '../../container/AQx-Farms/crop/texture-farm';
import ClassificationFarm from '../../container/AQx-Farms/crop/classification-farm';
import HarvestFarm from '../../container/AQx-Farms/crop/harvest-farm';
import AnalyticsFarms from '../../container/AQx-Farms/analytics-farms';
import AnalyticReportFarm from '../../container/AQx-Farms/analytics/report-analytic';

const NotFound = lazy(() => import('../../container/pages/404'));

function AnalyticRoutesFarm() {
    return (
        <Routes>
            <Route index element={<AnalyticsFarms />}>
            </Route>
            <Route path="/" element={<AnalyticsFarms />} />
            <Route path="/report" element={<AnalyticReportFarm />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AnalyticRoutesFarm;
