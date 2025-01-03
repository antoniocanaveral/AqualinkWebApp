import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import GeneralPathologyFarm from '../../container/AQx-Farms/crop/general-pathology-farm';
import ShrimpFarm from '../../container/AQx-Farms/crop/shrimp-farm';
import TransferFarm from '../../container/AQx-Farms/crop/transfer-farm';
import PopulationBiomassFarm from '../../container/AQx-Farms/crop/population-biomass-farm';
import TextureFarm from '../../container/AQx-Farms/crop/texture-farm';
import ClassificationFarm from '../../container/AQx-Farms/crop/classification-farm';
import HarvestFarm from '../../container/AQx-Farms/crop/harvest-farm';

const NotFound = lazy(() => import('../../container/pages/404'));

function CropRoutesLabs() {
    return (
        <Routes>
            <Route index element={<GeneralPathologyFarm />}>
            </Route>
            <Route path="/general-pathology" element={<GeneralPathologyFarm />} />
            <Route path="/shrimp" element={<ShrimpFarm />} />
            <Route path="/population-biomass" element={<PopulationBiomassFarm />} />
            <Route path="/harvest" element={<HarvestFarm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default CropRoutesLabs;
