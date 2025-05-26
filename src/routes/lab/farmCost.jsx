import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import CenterCostLabs from '../../container/AQx-Labs/cost/center-cost-farms';
import CostLabs from '../../container/AQx-Labs/cost/cost-farms';
import CostAddLabs from '../../container/AQx-Labs/cost/cost-add-farm';

const NotFound = lazy(() => import('../../container/pages/404'));

function CostRouteLab() {
    return (
        <Routes>
            <Route index element={<CenterCostLabs />} />
            <Route path="/view" element={<CostLabs />} />
            <Route path="/cost-center" element={<CenterCostLabs />} />
            <Route path='/indirect-add' element={<CostAddLabs/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default CostRouteLab;
