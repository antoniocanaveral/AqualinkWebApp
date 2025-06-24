import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PanelFarms from '../../container/AQx-Farms/panel-farms';

const NotFound = lazy(() => import('../../container/pages/404'));

function PanelFarmRoutes() {
  return (
    <Routes>
      <Route index element={<PanelFarms />}>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PanelFarmRoutes;
