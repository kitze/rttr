import React from 'react';
import routes from '../routes';
import {Link} from 'rttr';
import {inject} from 'mobx-react';

import Emoji from './Emoji';

const Home = ({router}) => (
  <div>
    <h3>
      <Emoji emoji="🏡" /> Welcome home
    </h3>
    <ul>
      <li>
        <Link route={routes.about} router={router} />
      </li>
      <li>
        <Link route={routes.profile} router={router} params={{id: 123}} />
      </li>
      <li>
        <Link
          route={routes.gallery}
          router={router}
          params={{tab: 3}}
          queryParams={{image: 5}}
        />
      </li>
    </ul>
  </div>
);

export default inject('router')(Home);
