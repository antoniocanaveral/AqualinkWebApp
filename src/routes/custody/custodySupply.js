import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import InventaryViewCustody from '../../container/AQx-Custody/supply/inventary-view-custody';
import InventaryAddCustody from '../../container/AQx-Custody/supply/inventary-add-custody';

const NotFound = lazy(() => import('../../container/pages/404'));

function SupplyCustodyRoutes() {
    return (
        <Routes>
            <Route index element={<InventaryViewCustody />} />
            <Route path="/inventary/view" element={<InventaryViewCustody />} />
            <Route path="/inventary/add" element={<InventaryAddCustody />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default SupplyCustodyRoutes;
