import React, {Component} from 'react';

import {observer, inject} from 'mobx-react';
import {CurrentRoute, Link} from 'rttr';
import routes from './routes';

import './App.css';

class App extends Component {
  render() {
    const {router} = this.props;
    return (
      <div className="App">
        <h1>Amazing app</h1>

        {router.page !== routes.home.id && (
          <Link route={routes.home} router={router}>
            Home
          </Link>
        )}

        <CurrentRoute />
      </div>
    );
  }
}

export default inject('router')(observer(App));
