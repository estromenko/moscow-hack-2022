import React, { useEffect, FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { refreshThunk } from '../../redux/thunks/auth';

const AuthProvider: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');

  useEffect(() => {
    if (accessToken && refreshToken) {
      dispatch(
        refreshThunk({
          accessToken,
          refreshToken,
        })
      );
    }
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isLoading ? <>loading</> : <>{children}</>;
};

AuthProvider.displayName = 'AuthProvider';

export default AuthProvider;
