import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'mobx-react';

//router
import { startRouter, RouterStore } from 'rttr';
import routes from './routes';

//start router
const router = RouterStore.create();
startRouter(router, routes);

ReactDOM.render(
  <Provider router={router}>
    <App />
  </Provider>,
  document.getElementById('root')
);
