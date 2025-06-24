import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PanelFarms from '../../container/AQx-Farms/panel-farms';
import PanelFarmOverview from '../../container/AQx-Farms/panel-farm-overview';

const NotFound = lazy(() => import('../../container/pages/404'));

function PanelFarmRoutes() {
  return (
    <Routes>
      <Route index element={<PanelFarmOverview />}>
      </Route>

      <Route path="/panel" element={<PanelFarms />} />

      <Route path="/panel-overview" element={<PanelFarmOverview />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PanelFarmRoutes;
