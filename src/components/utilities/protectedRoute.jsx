// components/ProtectedRoute.jsx
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { fullAccessRoles, roleAccessMap } from '../../routes/acces-control';

// 👇 Lógica segura para comparar rutas
function matchesPath(currentPath, rulePath) {
  if (rulePath === '/') return currentPath === '/';
  return currentPath.startsWith(rulePath);
}

function ProtectedRoute({ Component }) {
  const isLoggedIn = useSelector((state) => state.auth.login);
  const rolesRaw = useSelector((state) => state.auth.roles);
  const { pathname } = useLocation();

  if (!isLoggedIn) return <Navigate to="/" />;

  // ✅ Parsear roles si vienen como string
  let userRoles = [];
  try {
    if (typeof rolesRaw === 'string') {
      userRoles = JSON.parse(rolesRaw);
    } else if (Array.isArray(rolesRaw)) {
      userRoles = rolesRaw;
    }
  } catch (err) {
    console.error('❌ Error al parsear roles:', err);
    userRoles = [];
  }

  // 🔠 Normaliza nombres de roles
  const roleNames = userRoles
    .map((r) => r.name?.trim().toLowerCase())
    .filter(Boolean);

  const normalizedFullAccessRoles = fullAccessRoles.map((r) => r.trim().toLowerCase());

  // ✅ Acceso total
  const hasFullAccess = roleNames.some((role) =>
    normalizedFullAccessRoles.includes(role)
  );

  if (hasFullAccess) return <Component />;

  console.log('🔍 Roles del usuario:', roleNames)
  console.log('🔍 Ruta actual:', pathname);

  // ⏳ Esperar si aún no hay roles
  if (userRoles.length === 0) {
    return <div className="spin">Cargando permisos...</div>;
  }

  // 🔐 Acceso parcial por rol
  let hasGeneralAccess = false;

  for (const role of roleNames) {
    const access = roleAccessMap[role];
    if (!access) continue;

    const isDenied = access.deny?.some((deniedPath) =>
      matchesPath(pathname, deniedPath)
    );
    const isAllowed = access.allow?.some((allowedPath) =>
      matchesPath(pathname, allowedPath)
    );

    if (isAllowed && !isDenied) {
      hasGeneralAccess = true;
      break;
    }
  }

  return hasGeneralAccess ? <Component /> : <Navigate to="/unauthorized" />;
}

ProtectedRoute.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
