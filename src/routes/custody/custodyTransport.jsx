import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import CarriersViewCustody from '../../container/AQx-Custody/transport/carriers-view-custody';
import CarriersAddCustody from '../../container/AQx-Custody/transport/carriers-add-custody';
import Maintenance from '../../container/pages/Maintenance';

const NotFound = lazy(() => import('../../container/pages/404'));

function TransportCustodyRoutes() {
    return (
        <Routes>
            <Route index element={<CarriersViewCustody />} />
            <Route path="/carriers/view" element={<CarriersViewCustody />} />
            <Route path="/carriers/add" element={<CarriersAddCustody />} />
            <Route path="/seguridad" element={<Maintenance />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default TransportCustodyRoutes;
