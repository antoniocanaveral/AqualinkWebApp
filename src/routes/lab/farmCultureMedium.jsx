import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import WaterFlowLabs from '../../container/AQx-Labs/culture-medium/water-flow-lab';

const NotFound = lazy(() => import('../../container/pages/404'));

function CultureMediumRoutesLab() {
    return (
        <Routes>
            <Route index element={<WaterFlowLabs />}>
            </Route>
            <Route path="/water-flow" element={<WaterFlowLabs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default CultureMediumRoutesLab;
