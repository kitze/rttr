import route from 'path-match';

export const createRouter = routes => {
  const matchers = Object.keys(routes).map(path => [
    route()(path),
    routes[path]
  ]);

  return function(path) {
    return matchers.some(([matcher, fn]) => {
      const result = matcher(path);
      if (result === false) return false;
      fn(result);
      return true;
    });
  };
};
