import { createAsyncThunk } from '@reduxjs/toolkit';

import { ILoginBody, IRefreshBody, IRegisterBody, login, register, refresh, userProfile } from '../../../shared/api';

export const loginThunk = createAsyncThunk('auth/loginThunk', async (body: ILoginBody) => {
  const { data } = await login(body);

  return {
    ...data,
    email: body.email,
  };
});

export const regThunk = createAsyncThunk('auth/regThunk', async (body: IRegisterBody) => {
  const { data } = await register(body);

  return {
    ...data,
    email: body.email,
  };
});

export const refreshThunk = createAsyncThunk('auth/refreshThunk', async (body: IRefreshBody) => {
  const { data } = await refresh(body);

  return data;
});

export const userProfileThunk = createAsyncThunk('auth/userProfileThunk', async () => {
  const { data } = await userProfile();

  return data;
});
