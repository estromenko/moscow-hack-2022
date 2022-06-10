import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginThunk } from '../../thunks/auth';

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
  },
});

export const { setRefreshToken } = authSlicer.actions;

export default authSlicer.reducer;
