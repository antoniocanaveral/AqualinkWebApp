import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import GeneralPathologyFarm from '../../container/AQx-Farms/crop/general-pathology-farm';
import WaterFlowFarm from '../../container/AQx-Farms/culture-medium/water-flow-farm';
import PreparationBioremediationFarm from '../../container/AQx-Farms/culture-medium/preparation-bioremediation-farm';

const NotFound = lazy(() => import('../../container/pages/404'));

function CultureMediumRoutesFarm() {
    return (
        <Routes>
            <Route index element={<WaterFlowFarm />}>
            </Route>
            <Route path="/water-flow" element={<WaterFlowFarm />} />
            <Route path="/preparation-bioremediation" element={<PreparationBioremediationFarm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default CultureMediumRoutesFarm;
