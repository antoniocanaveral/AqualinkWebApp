import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PanelCustody from '../../container/AQx-Custody/panel-custody';

const NotFound = lazy(() => import('../../container/pages/404'));

function CustodyFarmRoutes() {
  return (
    <Routes>
      <Route index element={<PanelCustody />}>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default CustodyFarmRoutes;
