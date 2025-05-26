import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientFarm from '../../container/AQx-Farms/client/client-farm';
import AddClientFarm from '../../container/AQx-Farms/client/client-add-farm';
import ClientCustody from '../../container/AQx-Custody/client/client-custody';
import AddClientCustody from '../../container/AQx-Custody/client/client-add-custody';
import AddClientCustodia from '../../container/AQx-Custody/clientCustody/client-add-custody';

const NotFound = lazy(() => import('../../container/pages/404'));

function ClientRouteCustody() {
    return (
        <Routes>
            <Route index element={<ClientCustody />} />
            <Route path="/view" element={<ClientCustody />} />
            <Route path="/add-custody" element={<AddClientCustodia />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default ClientRouteCustody;
