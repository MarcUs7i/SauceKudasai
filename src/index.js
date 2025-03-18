/** @format */

import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceworker from './serviceWorkerRegistration';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
serviceworker.register();
