import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientLab from '../../container/AQx-Labs/client/client-farm';
import AddClientLab from '../../container/AQx-Labs/client/client-add-farm';
import AddClientLaboratory from '../../container/AQx-Labs/client/client-add-lab';

const NotFound = lazy(() => import('../../container/pages/404'));

function ClientRouteLab() {
    return (
        <Routes>
            <Route index element={<ClientLab />} />
            <Route path="/view" element={<ClientLab />} />
            <Route path="/add-client-lab" element={<AddClientLaboratory />} />
            <Route path="/add" element={<AddClientLab />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default ClientRouteLab;
