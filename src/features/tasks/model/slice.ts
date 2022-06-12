import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICityPoint } from '../../../shared/api';
import { tasksThunk } from './thunk';

interface ITasks {
  tasks: ICityPoint[];
  isLoading: boolean;
}

const initialState: ITasks = {
  tasks: [],
  isLoading: false,
};

export const tasksSlicer = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: {
    [tasksThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [tasksThunk.fulfilled.type]: (state, action: PayloadAction<ICityPoint[]>) => {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    [tasksThunk.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export default tasksSlicer.reducer;
