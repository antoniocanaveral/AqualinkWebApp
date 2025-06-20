import React from 'react';

import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n/config';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);




reportWebVitals();
