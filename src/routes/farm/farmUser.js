import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddUserFarm from '../../container/AQx-Farms/user/user-add-farm';
import UserFarm from '../../container/AQx-Farms/user/user-farm';

const NotFound = lazy(() => import('../../container/pages/404'));

function UserRoutesFarm() {
    return (
        <Routes>
            <Route index element={<UserFarm />} />
            <Route path="/view" element={<UserFarm />} />
            <Route path="/add" element={<AddUserFarm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default UserRoutesFarm;
