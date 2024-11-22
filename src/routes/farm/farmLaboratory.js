import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LaboratoryAddFarm from '../../container/AQx-Farms/laboratory/laboratoryAdd';
import LaboratoryViewFarm from '../../container/AQx-Farms/laboratory/laboratoryView';

const NotFound = lazy(() => import('../../container/pages/404'));

function LaboratoryFarm() {
    return (
        <Routes>
            <Route index element={<LaboratoryAddFarm />}>
            </Route>
            <Route path="/add" element={<LaboratoryAddFarm />} />
            <Route path="/view" element={<LaboratoryViewFarm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default LaboratoryFarm;
