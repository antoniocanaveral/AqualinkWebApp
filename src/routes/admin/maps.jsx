import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const GoogleMaps = lazy(() => import('../../container/maps/GoogleMaps'));
const Vector = lazy(() => import('../../container/maps/Vector'));
const NotFound = lazy(() => import('../../container/pages/404'));

function MapRoutes() {
  return (
    <Routes>
      <Route path="google" element={<GoogleMaps />} />
      <Route path="vector" element={<Vector />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MapRoutes;
