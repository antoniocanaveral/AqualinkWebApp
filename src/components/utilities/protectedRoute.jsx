// components/ProtectedRoute.jsx
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ Component, allowedRoles = [] }) {
  const isLoggedIn = useSelector((state) => state.auth.login);
  const rolesState = useSelector((state) => state.auth.roles);
  const userRoles = Array.isArray(rolesState) ? rolesState : [];

  const roleNames = userRoles.map((r) => r.name);
  const hasPermission =
    allowedRoles.length === 0 || allowedRoles.some((role) => roleNames.includes(role));

  if (!isLoggedIn) return <Navigate to="/" />;
  if (!hasPermission) return <Navigate to="/unauthorized" />;

  return <Component />;
}

ProtectedRoute.propTypes = {
  Component: PropTypes.elementType.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;
