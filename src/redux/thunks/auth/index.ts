import { createAsyncThunk } from '@reduxjs/toolkit';

import { ILoginBody, IRefreshBody, IRegisterBody, login, register, refresh, userProfile } from '../../../shared/api';

export const loginThunk = createAsyncThunk('auth/loginThunk', async (body: ILoginBody) => {
  const { data } = await login(body);

  localStorage.setItem('refresh_token', data.refreshToken);
  localStorage.setItem('access_token', data.accessToken);

  const response = await userProfile();

  return {
    ...data,
    ...response.data,
  };
});

export const regThunk = createAsyncThunk('auth/regThunk', async (body: IRegisterBody) => {
  const { data } = await register(body);

  localStorage.setItem('refresh_token', data.refreshToken);
  localStorage.setItem('access_token', data.accessToken);

  const response = await userProfile();

  return {
    ...data,
    ...response.data,
  };
});

export const refreshThunk = createAsyncThunk('auth/refreshThunk', async (body: IRefreshBody) => {
  const { data } = await refresh(body);

  localStorage.setItem('refresh_token', data.refreshToken);
  localStorage.setItem('access_token', data.accessToken);

  const response = await userProfile();

  return {
    ...data,
    ...response.data,
  };
});

export const userProfileThunk = createAsyncThunk('auth/userProfileThunk', async () => {
  const { data } = await userProfile();

  return data;
});
