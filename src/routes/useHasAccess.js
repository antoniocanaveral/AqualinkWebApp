// utils/useHasAccess.js
import { useSelector } from 'react-redux';
import { fullAccessRoles, roleAccessMap } from '../routes/acces-control';

function matchesPath(currentPath, rulePath) {
  if (rulePath === '/') return currentPath === '/';
  return currentPath.startsWith(rulePath);
}

export function useHasAccess(path) {
  const rolesRaw = useSelector((state) => state.auth.roles);
  let userRoles = [];

  try {
    if (typeof rolesRaw === 'string') {
      userRoles = JSON.parse(rolesRaw);
    } else if (Array.isArray(rolesRaw)) {
      userRoles = rolesRaw;
    }
  } catch {
    userRoles = [];
  }

  const roleNames = userRoles.map((r) => r.name?.trim().toLowerCase()).filter(Boolean);
  const normalizedFullAccessRoles = fullAccessRoles.map((r) => r.trim().toLowerCase());

  const hasFullAccess = roleNames.some(role =>
    normalizedFullAccessRoles.includes(role)
  );
  if (hasFullAccess) return true;

  for (const role of roleNames) {
    const access = roleAccessMap[role];
    if (!access) continue;

    const denied = access.deny?.some(p => matchesPath(path, p));
    const allowed = access.allow?.some(p => matchesPath(path, p));

    if (allowed && !denied) return true;
  }

  return false;
}
