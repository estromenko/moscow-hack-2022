import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILoginResult, IRegisterResponse, IRefreshBody } from '../../../shared/api';
import { loginThunk, refreshThunk, regThunk } from '../../thunks/auth';

interface IAuth {
  refreshToken: string;
  accessToken: string;
  email: string;
  isLoading: boolean;
}

const initialState: IAuth = {
  refreshToken: '',
  accessToken: '',
  email: '',
  isLoading: false,
};

export const authSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRefreshToken: (state: { email: string; refreshToken: string; accessToken: string }) => {
      state.email = 'data';
      state.refreshToken = 'data';
      state.accessToken = 'data';
    },
  },
  extraReducers: {
    [loginThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loginThunk.fulfilled.type]: (state, action: PayloadAction<ILoginResult>) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.refreshToken = action.payload.refreshToken;
      state.isLoading = false;

      localStorage.setItem('refresh_token', action.payload.refreshToken);
      localStorage.setItem('access_token', action.payload.accessToken);
    },
    [loginThunk.rejected.type]: (state) => {
      state.isLoading = false;
    },

    [regThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [regThunk.fulfilled.type]: (state, action: PayloadAction<IRegisterResponse>) => {
      state.isLoading = false;
      state.email = action.payload.data.email;
      state.refreshToken = 'data';
      state.accessToken = 'data';
    },
    [regThunk.rejected.type]: (state) => {
      state.isLoading = false;
    },

    [refreshThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [refreshThunk.fulfilled.type]: (state, action: PayloadAction<IRefreshBody>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoading = false;

      localStorage.setItem('refresh_token', action.payload.refreshToken);
      localStorage.setItem('access_token', action.payload.accessToken);
    },
    [refreshThunk.rejected.type]: (state) => {
      state.isLoading = false;

      localStorage.removeItem('refresh_token');
      localStorage.removeItem('access_token');
    },
  },
});

export const { setRefreshToken } = authSlicer.actions;

export default authSlicer.reducer;
