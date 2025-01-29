import React, { lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthLayout from '../container/profile/authentication/Index';

const Login = lazy(() => import('../container/profile/authentication/overview/AQx-SignIn'));
const RoleSelector = lazy(() => import('../container/profile/authentication/overview/AQx-RoleSelector'));
// const NotFound = lazy(() => import('../container/pages/404'));

const AuthRoot = () => {
  const navigate = useNavigate();
  useEffect(() => navigate('/'));
};

const FrontendRoutes = React.memo(() => {
  const { isLoggedIn } = useSelector((state) => {
    return {
      isLoggedIn: state.auth.login
    };
  });

  return (
    <>
    {
        isLoggedIn ? (
          <Routes>
            <Route index element={  <RoleSelector />} />
            <Route path="roles" element={  <RoleSelector />} />
          </Routes>
        ) : (
            <Routes>
            <Route index element={  <Login />} />
            <Route path="*" element={<AuthRoot />} />
          </Routes>
        )
      }
    </>
  );
});

export default AuthLayout(FrontendRoutes);
