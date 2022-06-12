import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Landing from '../pages/landing';
import Tasks from '../pages/tasks';
import PrivateRouter from './privateRouter';
import Rating from '../pages/rating';
import Gifts from '../pages/gifts';
import Home from '../pages/home';
import Organization from '../pages/organization';
import NotFound from '../pages/notFound';
import Settings from '../pages/settings';
import Events from '../pages/events';
import OrganisationSettings from '../pages/organisationSettings';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/tasks" element={<PrivateRouter />}>
        <Route path="/tasks" element={<Tasks />} />
      </Route>
      <Route path="/home" element={<PrivateRouter />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/rating" element={<PrivateRouter />}>
        <Route path="/rating" element={<Rating />} />
      </Route>
      <Route path="/gifts" element={<PrivateRouter />}>
        <Route path="/gifts" element={<Gifts />} />
      </Route>
      <Route path="/settings" element={<PrivateRouter />}>
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/organization" element={<PrivateRouter />}>
        <Route path="/organization" element={<Organization />} />
      </Route>
      <Route path="/organisation-settings" element={<PrivateRouter />}>
        <Route path="/organisation-settings" element={<OrganisationSettings />} />
      </Route>
      <Route path="/events" element={<PrivateRouter />}>
        <Route path="/events" element={<Events />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

Router.displayName = 'Router';

export default Router;
