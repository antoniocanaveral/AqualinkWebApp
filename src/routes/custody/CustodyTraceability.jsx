import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import InventaryViewCustody from '../../container/AQx-Custody/supply/inventary-view-custody';
import InventaryAddCustody from '../../container/AQx-Custody/supply/inventary-add-custody';
import TraceabilityLotesCustody from '../../container/AQx-Custody/traceability/traceability-lotes-custody';
import ReporteLote from '../../container/AQx-Custody/traceability/traceability-lotes-custody-by-id';

const NotFound = lazy(() => import('../../container/pages/404'));

function TraceabilityRoutesCustody() {
    return (
        <Routes>
            <Route index element={<TraceabilityLotesCustody />} />
            <Route path="/tracking" element={<TraceabilityLotesCustody />} />
            <Route path="/inventary/add" element={<InventaryAddCustody />} />
            <Route path="/reporte-lote/:id" element={<ReporteLote />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default TraceabilityRoutesCustody;
