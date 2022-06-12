import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import Tasks from '../pages/tasks';
import PrivateRouter from './privateRouter';

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
    </Routes>
  );
};

Router.displayName = 'Router';

export default Router;
