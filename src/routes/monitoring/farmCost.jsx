import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PackingAddFarm from '../../container/AQx-Farms/packing/packingAdd';
import CenterCostFarm from '../../container/AQx-Farms/cost/center-cost-farms';
import CostFarm from '../../container/AQx-Farms/cost/cost-farms';
import CostAddFarm from '../../container/AQx-Farms/cost/cost-add-farm';

const NotFound = lazy(() => import('../../container/pages/404'));

function CostRouteFarm() {
    return (
        <Routes>
            <Route index element={<CenterCostFarm />} />
            <Route path="/view" element={<CostFarm />} />
            <Route path="/cost-center" element={<CenterCostFarm />} />
            <Route path='/indirect-add' element={<CostAddFarm/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default CostRouteFarm;
