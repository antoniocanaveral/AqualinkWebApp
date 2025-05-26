import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import InventaryViewCustody from '../../container/AQx-Custody/supply/inventary-view-custody';
import InventaryAddCustody from '../../container/AQx-Custody/supply/inventary-add-custody';
import InventaryAddProductCustody from '../../container/AQx-Custody/supply/inventary-add-product-custody';
import InventaryAddSupplyCustody from '../../container/AQx-Custody/supply/inventary-add-supply-custody';

const NotFound = lazy(() => import('../../container/pages/404'));

function SupplyCustodyRoutes() {
    return (
        <Routes>
            <Route index element={<InventaryViewCustody />} />
            <Route path="/inventary/view" element={<InventaryViewCustody />} />
            <Route path="/inventary/add" element={<InventaryAddCustody />} />
            <Route path="/inventary/add-product" element={<InventaryAddProductCustody />} />
            <Route path="/inventary/add-supply" element={<InventaryAddSupplyCustody />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default SupplyCustodyRoutes;
