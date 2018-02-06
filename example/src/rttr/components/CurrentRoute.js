import React from 'react';

import {observer, inject} from 'mobx-react';

class CurrentRouteBase extends React.Component {
  render() {
    const {router} = this.props;
    return router && router.extra
      ? router.extra.component
      : router.options.notFoundComponent ? router.options.notFoundComponent : null;
  }
}

export const CurrentRoute = inject('router')(observer(CurrentRouteBase));
