import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import GeneralPathologyFarm from '../../container/AQx-Farms/crop/general-pathology-farm';

const NotFound = lazy(() => import('../../container/pages/404'));

function CropRoutesFarm() {
    return (
        <Routes>
            <Route index element={<GeneralPathologyFarm />}>
            </Route>
            <Route path="/general-pathology" element={<GeneralPathologyFarm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default CropRoutesFarm;
