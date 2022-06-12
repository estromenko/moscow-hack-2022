import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import Tasks from '../pages/tasks';
import PrivateRouter from './privateRouter';
import Rating from '../pages/rating';
import Gifts from '../pages/gifts';
import Profile from '../pages/profile';
import Organization from '../pages/organization';
import NotFound from '../pages/notFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/tasks" element={<PrivateRouter />}>
        <Route path="/tasks" element={<Tasks />} />
      </Route>
      <Route path="/" element={<PrivateRouter />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/rating" element={<PrivateRouter />}>
        <Route path="/rating" element={<Rating />} />
      </Route>
      <Route path="/gifts" element={<PrivateRouter />}>
        <Route path="/gifts" element={<Gifts />} />
      </Route>
      <Route path="/profile" element={<PrivateRouter />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/organization" element={<PrivateRouter />}>
        <Route path="/organization" element={<Organization />} />
      </Route>
    </Routes>
  );
};

Router.displayName = 'Router';

export default Router;
