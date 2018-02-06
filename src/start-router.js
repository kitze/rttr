import {reaction} from 'mobx';
import {mapObject} from './utils';
import {createRouter} from './create-router';

export const startRouter = (routerStore, routes) => {

  reaction(
    () => routerStore.currentUrl,
    path => {
      if (window.location.pathname !== path) {
        window.history.pushState(null, null, path);
      }
    }
  );

  //create a router from the routes object
  const router = createRouter(
    mapObject(routes, route => {
      return {
        key: route.path,
        value: params => {
          routerStore.openPage(route, params);
        }
      };
    })
  );

  //on change route
  window.onpopstate = ev => {
    if (ev.type === 'popstate') {
      router(window.location.pathname);
    }
  };

  //initial location
  router(window.location.pathname);

};
