import React, { lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthLayout from '../container/profile/authentication/Index';

const ForgotPass = lazy(() => import('../container/profile/authentication/overview/AQx-ForgotPassword'));
const Login = lazy(() => import('../container/profile/authentication/overview/AQx-SignIn'));
const RoleSelector = lazy(() => import('../container/profile/authentication/overview/AQx-RoleSelector'));
const SignUp = lazy(() => import('../container/profile/authentication/overview/Signup'));
const FbLogin = lazy(() => import('../container/profile/authentication/overview/FbSignIn'));
const FbSignUp = lazy(() => import('../container/profile/authentication/overview/FbSignup'));


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
            <Route path="forgotPassword" element={<ForgotPass />} />
            <Route path="register" element={<SignUp />} />
            <Route path="fbRegister" element={<FbSignUp />} />
            <Route path="fbSignIn" element={<FbLogin />} />
            <Route path="*" element={<AuthRoot />} />
          </Routes>
        )
      }
    </>
  );
});

export default AuthLayout(FrontendRoutes);
