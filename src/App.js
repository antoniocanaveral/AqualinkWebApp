import { ConfigProvider, notification } from 'antd';
import 'antd/dist/antd.less';
import React, { useEffect, useState, lazy } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import ProtectedRoute from './components/utilities/protectedRoute';
import config from './config/config';
import store from './redux/store';

import Admin from './routes/admin';
import Farm from './routes/farm';
import Lab from './routes/lab';
import Custody from './routes/custody';
import Control from './routes/control';
import Auth from './routes/auth';
import Ecosystem from './routes/ecosystem';
import Monitoring from './routes/monitoring';
import Network from './routes/network';
import './static/css/style.css';
import Cookies from 'js-cookie';
import SelectOrganization from './container/AQx-Monitoring/Menu/SelectOrganization';
//import { generateToken, messaging } from './firebase/firebaseConfig';
import { onMessage } from 'firebase/messaging';

const NotFound = lazy(() => import('./container/pages/404'));

const { themeColor } = config;

function ProviderConfig() {
  const {
    rtl,
    isLoggedIn,
    topMenu,
    mainContent,
    selectedModule,
    selectedRoleId,
    selectedRoleName,
    withFarms,
    withLabs,
    withCustody,
    withControl,
  } = useSelector((state) => ({
    rtl: state.ChangeLayoutMode.rtlData,
    topMenu: state.ChangeLayoutMode.topMenu,
    mainContent: state.ChangeLayoutMode.mode,
    isLoggedIn: state.auth.login,
    selectedModule: state.auth.selectedModule,
    selectedRoleId: state.auth.selectedRoleId,
    selectedRoleName: state.auth.selectedRoleName,
    withFarms: state.auth.withFarms,
    withLabs: state.auth.withLabs,
    withCustody: state.auth.withCustody,
    withControl: state.auth.withControl,
  }));

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    return () => {
      unmounted = true;
    };
  }, [setPath]);
/*
  useEffect(() => {
    generateToken();
  
    onMessage(messaging, (payload) => {
      console.log('📩 Push recibido:', payload);
  
      const { title, body, image } = payload.notification || {};
  
      notification.open({
        message: title || 'Notificación',
        description: body || 'Tienes una nueva notificación.',
        placement: 'topRight',
        duration: 5,
        icon: image ? <img src={image} alt="icon" style={{ width: 24 }} /> : undefined,
      });
    });
  }, []);
  */

  const orgId = Cookies.get('orgId');
  const isAuditorExterno = selectedRoleName === 'Cumplimiento - Auditor Externo';
  const hasSelectedOrg = !!orgId;

  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...themeColor, rtl, topMenu, mainContent }}>
        <Router basename={process.env.PUBLIC_URL}>
          {!isLoggedIn || !selectedRoleId ? (
            <Routes>
              <Route path="/*" element={<Auth />} />
            </Routes>
          ) : isAuditorExterno ? (
            <Routes>
              {!hasSelectedOrg ? (
                <>
                  <Route path="/select-org" element={<SelectOrganization />} />
                  <Route path="*" element={<Navigate to="/select-org" replace />} />
                </>
              ) : (
                <>
                  <Route path="/monitoring/*" element={<ProtectedRoute path="/*" Component={Monitoring} />} />
                  <Route path="/select-org" element={<Navigate to="/monitoring" replace />} />
                  <Route path="*" element={<Navigate to="/monitoring" replace />} />
                </>
              )}
            </Routes>

          ) : !selectedModule ? (
            <Routes>
              <Route path="/*" element={<ProtectedRoute path="/*" Component={Ecosystem} />} />
            </Routes>
          ) : (
            <Routes>
              {selectedModule === 'FARM' && <Route path="/farm/*" element={<ProtectedRoute path="/*" Component={Farm} />} />}
              {selectedModule === 'LAB' && <Route path="/lab/*" element={<ProtectedRoute path="/*" Component={Lab} />} />}
              {selectedModule === 'CUSTODY' && <Route path="/custody/*" element={<ProtectedRoute path="/*" Component={Custody} />} />}
              {selectedModule === 'MONITORING' && <Route path="/monitoring/*" element={<ProtectedRoute allowedRoles={['Cumplimiento - Auditor Externo']}  path="/*" Component={Monitoring} />} />}
              {selectedModule === 'NETWORK' && <Route path="/network/*" element={<ProtectedRoute path="/*" Component={Network} />} />}
              {selectedModule === 'CONTROL' && <Route path="/control" element={<ProtectedRoute path="/*" Component={Control} />} />}
              <Route path="/admin/*" element={<ProtectedRoute path="/*" Component={Admin} />} />
              <Route path="/monitoring-select-org/*" element={<ProtectedRoute Component={Admin} />} />
              <Route path="/*" element={<ProtectedRoute path="/*" Component={Ecosystem} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default App;
