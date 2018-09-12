import {types} from 'mobx-state-tree';
import {replaceUrlParams} from './utils';

export const RouterStore = types
  .model({
    page: '',
    path: '/',
    params: types.frozen(),
    queryParams: types.frozen(),
    extra: types.frozen(),
    options: types.frozen()
  })
  .views(self => ({
    get currentUrl() {
      return replaceUrlParams(self.path, self.params, self.queryParams);
    }
  }))
  .actions(self => ({
    openPage({id, path, extra: pageExtra}, params = {}, queryParams = {}, extra = {}) {
      self.page = id;
      self.path = path;
      self.params = params;
      self.queryParams = queryParams;
      self.extra = {...pageExtra, ...extra};
    }
  }));

export default RouterStore;
