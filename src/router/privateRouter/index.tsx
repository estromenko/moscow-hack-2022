import React, { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import Header from '../../widgets/Header';
import Container from '../../shared/ui/container';

const PrivateRouter: FC = () => {
  const accessToken = localStorage.getItem('access_token');

  return accessToken ? (
    <>
      <Header />
      <div className="main-container">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

PrivateRouter.displayName = 'PrivateRouter';

export default PrivateRouter;
