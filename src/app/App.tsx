import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import AuthProvider from '../features/authProvider';
import Router from '../router';

import { store } from '../redux/store';
import { theme } from '../shared/ui';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

App.displayName = 'App';

export default App;
