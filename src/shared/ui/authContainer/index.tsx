import { Box } from '@mui/material';
import React, { FC } from 'react';

import './style.scss';

const AuthContainer: FC = ({ children }) => {
  return (
    <Box bgcolor="secondary.main" className="auth-container" flexDirection="column" align-items="center">
      {children}
    </Box>
  );
};

AuthContainer.displayName = 'AuthContainer';

export default AuthContainer;
