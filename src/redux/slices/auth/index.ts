import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRegisterResponse } from '../../../shared/api';
import { loginThunk, regThunk } from '../../thunks/auth';

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
    [loginThunk.pending.type]: (state, _action: PayloadAction<any>) => {
      state.isLoading = true;
    },
    [loginThunk.fulfilled.type]: (state, _action: PayloadAction<any>) => {
      state.isLoading = false;
      state.email = 'data';
      state.refreshToken = 'data';
      state.accessToken = 'data';
    },
    [loginThunk.rejected.type]: (state, _action: PayloadAction<any>) => {
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
  },
});

export const { setRefreshToken } = authSlicer.actions;

export default authSlicer.reducer;
