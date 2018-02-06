import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Gallery from './components/Gallery';

const routes = {
  home: {
    id: 'home',
    path: '/',
    extra: {
      component: <Home />
    }
  },
  about: {
    id: 'about',
    path: '/about',
    extra: {
      component: <About />
    }
  },
  profile: {
    id: 'profile',
    path: '/profile/:id',
    extra: {
      component: <Profile />
    }
  },
  gallery: {
    id: 'gallery',
    path: '/gallery/:tab',
    extra: {
      component: <Gallery />
    }
  }
};

export default routes