import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientFarm from '../../container/AQx-Farms/client/client-farm';
import AddClientFarm from '../../container/AQx-Farms/client/client-add-farm';
import AddUserFarm from '../../container/AQx-Farms/user/user-add-farm';

const NotFound = lazy(() => import('../../container/pages/404'));

function UserRoutesFarm() {
    return (
        <Routes>
            <Route index element={<ClientFarm />} />
            <Route path="/view" element={<ClientFarm />} />
            <Route path="/add" element={<AddUserFarm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default UserRoutesFarm;
