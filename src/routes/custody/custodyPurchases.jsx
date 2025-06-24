import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SupplierViewCustody from '../../container/AQx-Custody/purchases/supplier-view';
import SupplierAddCustody from '../../container/AQx-Custody/purchases/supplier-add';

const NotFound = lazy(() => import('../../container/pages/404'));

function PurchasesCustodyRoutes() {
    return (
        <Routes>
            <Route index element={<SupplierViewCustody />} />
            <Route path="/supplier/view" element={<SupplierViewCustody />} />
            <Route path="/supplier/add" element={<SupplierAddCustody />} />
            <Route path="/fishing-applications*" element={<NotFound />} />

        </Routes>
    );
}

export default PurchasesCustodyRoutes;
