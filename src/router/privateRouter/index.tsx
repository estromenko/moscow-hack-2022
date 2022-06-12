import React, { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

import Footer from '../../widgets/Footer';

const PrivateRouter: FC = () => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const accessTokenFromLocalStorage = localStorage.getItem('access_token');

  // eslint-disable-next-line no-constant-condition
  return accessToken || accessTokenFromLocalStorage ? (
    <>
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

PrivateRouter.displayName = 'PrivateRouter';

export default PrivateRouter;
