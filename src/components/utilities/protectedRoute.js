import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

function ProtectedRoute({ Component, path }) {
  const isLoggedIn = useSelector((state) => state.auth.login);

  return isLoggedIn ? (
    <Routes>
      <Route element={<Component />} path={path} />
    </Routes>
  ) : (
    <Navigate to="/" />
  );
}

ProtectedRoute.propTypes = {
  Component: propTypes.elementType.isRequired,
  path: propTypes.string.isRequired,
};

export default ProtectedRoute;
