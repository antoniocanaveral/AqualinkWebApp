import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SupplierViewCustody from '../../container/AQx-Custody/purchases/supplier-view';
import LoteAddCustody from '../../container/AQx-Custody/report/harvest-add-custody';
import HarvestReportCustody from '../../container/AQx-Custody/report/harvest-report-custody';
import LoteViewCustody from '../../container/AQx-Custody/report/harvest-view-custody';

const NotFound = lazy(() => import('../../container/pages/404'));

function HarvestReportCustodyRoutes() {
    return (
        <Routes>
            <Route index element={<HarvestReportCustody />} />
            <Route path="/harvest-reports" element={<HarvestReportCustody />} />
            <Route path="/lote/view" element={<LoteViewCustody />} />
            <Route path="/lote/add" element={<LoteAddCustody />} />
            <Route path="/reports*" element={<NotFound />} />

        </Routes>
    );
}

export default HarvestReportCustodyRoutes;
