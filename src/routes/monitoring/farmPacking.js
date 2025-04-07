import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PackingAddFarm from '../../container/AQx-Farms/packing/packingAdd';
import PackingViewFarm from '../../container/AQx-Farms/packing/packingView';

const NotFound = lazy(() => import('../../container/pages/404'));

function PackingRouteFarm() {
    return (
        <Routes>
            <Route index element={<PackingAddFarm />}>
            </Route>
            <Route path="/add" element={<PackingAddFarm />} />
            <Route path="/view" element={<PackingViewFarm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default PackingRouteFarm;
