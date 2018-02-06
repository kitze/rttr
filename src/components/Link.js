import React from 'react';
import {observer} from 'mobx-react';
import {replaceUrlParams} from '../utils';

const LinkBase = ({
  route,
  className,
  params = {},
  queryParams = {},
  refresh = false,
  style = {},
  children,
  router,
  extra
}) => {

  if (!router) {
    console.error(
      'The "router" prop must be defined for a Link component to work!'
    );
    return null;
  }

  if(!route){
    console.error('The "route" prop must be defined.');
    return null;
  }

  const href = replaceUrlParams(route.path, params, queryParams);

  return (
    <a
      style={style}
      className={className}
      onClick={e => {
        const middleClick = e.button === 2;
        const cmdOrCtrl = e.metaKey || e.ctrlKey;
        const openinNewTab = middleClick || cmdOrCtrl;
        const shouldNavigateManually = refresh || openinNewTab || cmdOrCtrl;
        if (!shouldNavigateManually) {
          e.preventDefault();
          router.openPage(route, params, queryParams, extra);
        }
      }}
      href={href}
    >
      {children || href}
    </a>
  );
};

export const Link = observer(LinkBase);
