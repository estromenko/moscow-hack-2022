import { createAsyncThunk } from '@reduxjs/toolkit';

import { IRegisterBody, login, register } from '../../../shared/api';

export const loginThunk = createAsyncThunk('auth/loginThunk', async () => {
  const data = await login();
  localStorage.setItem('token', 'data');

  return data;
});

export const regThunk = createAsyncThunk('auth/regThunk', async (body: IRegisterBody) => {
  const { data } = await register(body);

  return data;
});
