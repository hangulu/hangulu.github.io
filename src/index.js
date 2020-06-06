import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import PageControl from './components/PageControl.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageControl />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
