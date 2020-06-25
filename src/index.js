import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import 'animate.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.register();
