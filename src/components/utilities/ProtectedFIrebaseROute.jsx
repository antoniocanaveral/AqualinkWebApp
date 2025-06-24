// src/components/utilities/ProtectedFirebaseRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebaseClient';
import { useEffect, useState } from 'react';

const ProtectedFirebaseRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <div>Cargando...</div>; // o un Spinner
  }

  return isAuthenticated ? <Component /> : <Navigate to="/unauthorized" replace />;
};

export default ProtectedFirebaseRoute;
