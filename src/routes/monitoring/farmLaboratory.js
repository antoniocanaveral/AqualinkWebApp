import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LaboratoryAddFarm from '../../container/AQx-Farms/laboratory/laboratoryAdd';
import LaboratoryViewFarm from '../../container/AQx-Farms/laboratory/laboratoryView';
import ShrimpViewLab from '../../container/AQx-Labs/shrimp/shrimpView';
import ShrimpAddLab from '../../container/AQx-Labs/shrimp/shrimpAdd';
import ViewFarm from '../../container/AQx-Farms/farm/farmView';

const NotFound = lazy(() => import('../../container/pages/404'));

function ShrimpRouteLab() {
    return (
        <Routes>
            <Route index element={<ShrimpViewLab />}>
            </Route>
            <Route path="/add" element={<ShrimpAddLab />} />
            <Route path="/view" element={<ViewFarm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default ShrimpRouteLab;
