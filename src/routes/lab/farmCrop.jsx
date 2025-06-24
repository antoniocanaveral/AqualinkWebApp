import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import GeneralPathologyLab from '../../container/AQx-Labs/crop/general-pathology-farm';
import ShrimpLab from '../../container/AQx-Labs/crop/shrimp-farm';
import PopulationBiomassLab from '../../container/AQx-Labs/crop/population-biomass-farm';
import HarvestLab from '../../container/AQx-Labs/crop/harvest-farm';

const NotFound = lazy(() => import('../../container/pages/404'));

function CropRoutesLabs() {
    return (
        <Routes>
            <Route index element={<GeneralPathologyLab />}>
            </Route>
            <Route path="/general-pathology" element={<GeneralPathologyLab />} />
            <Route path="/shrimp" element={<ShrimpLab />} />
            <Route path="/population-biomass" element={<PopulationBiomassLab />} />
            <Route path="/harvest" element={<HarvestLab />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default CropRoutesLabs;
