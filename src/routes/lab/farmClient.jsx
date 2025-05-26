import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientLab from '../../container/AQx-Labs/client/client-farm';
import AddClientLaboratory from '../../container/AQx-Labs/client/client-add-lab';
import ClientLabs from '../../container/AQx-Labs/client/client-lab-view';

const NotFound = lazy(() => import('../../container/pages/404'));

function ClientRouteLab() {
    return (
        <Routes>
            <Route index element={<ClientLab />} />
            <Route path="/views" element={<ClientLabs />} />
            <Route path="/add-client-lab" element={<AddClientLaboratory />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default ClientRouteLab;
