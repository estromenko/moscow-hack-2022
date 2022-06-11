import { createAsyncThunk } from '@reduxjs/toolkit';

import { ILoginBody, IRegisterBody, login, register } from '../../../shared/api';

export const loginThunk = createAsyncThunk('auth/loginThunk', async (body: ILoginBody) => {
  const { data } = await login(body);

  return {
    ...data,
    email: body.email,
  };
});

export const regThunk = createAsyncThunk('auth/regThunk', async (body: IRegisterBody) => {
  const { data } = await register(body);

  return data;
});
