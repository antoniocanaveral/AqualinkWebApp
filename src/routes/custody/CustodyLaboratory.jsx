import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddClientCustody from '../../container/AQx-Custody/client/client-add-custody';
import LaboratoryViewCustody from '../../container/AQx-Custody/laboratory/laboratory-view-custody';
import LaboratoryAddCustody from '../../container/AQx-Custody/laboratory/laboratory-add-custody';

const NotFound = lazy(() => import('../../container/pages/404'));

function LaboratoryRouteCustody() {
    return (
        <Routes>
            <Route index element={<LaboratoryViewCustody />} />
            <Route path="/view" element={<LaboratoryViewCustody />} />
            <Route path="/add" element={<LaboratoryAddCustody />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default LaboratoryRouteCustody;
