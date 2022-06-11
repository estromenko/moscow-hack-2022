import React, { useEffect, FC, useState } from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { refreshThunk } from '../../redux/thunks/auth';

const AuthProvider: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    setIsLoading(false);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isLoading ? <>loading</> : <>{children}</>;
};

AuthProvider.displayName = 'AuthProvider';

export default AuthProvider;
