import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import './sass/normalize.scss';
import './sass/fontes.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
);

reportWebVitals();
