import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import withNetworkLayout from '../../layout/withNetworkLayout.jsx';
import Cookies from 'js-cookie';
import RequestLarva from '../../container/AQx-Network/requestLarva.jsx';
import RequestShrimp from '../../container/AQx-Network/requestShrimp.jsx';
import DashboardNetwork from '../../container/AQx-Network/Dashboard/dashboard-network.jsx';
import ReserveDetail from '../../container/AQx-Network/reserve/ReserveDetail.jsx';

const NotFound = lazy(() => import('../../container/pages/404'));

const Monitoring = React.memo(() => {
    const { pathname } = useLocation();
    console.log(pathname)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Suspense
            fallback={
                <div className="spin">
                    <Spin />
                </div>
            }
        >
            <Routes>
                <Route index element={<DashboardNetwork />} />
                <Route path="/dashboard/*" element={<DashboardNetwork />} />
                <Route path="/larva/*" element={<RequestLarva />} />
                <Route path="/shrimp/*" element={<RequestShrimp />} />
                <Route path="/reserve/:sm_reserve_id/:sm_reserve_uu" element={<ReserveDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
});

export default withNetworkLayout(Monitoring);
