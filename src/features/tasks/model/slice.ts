import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICityPointResponse } from '../../../shared/api';
import { createEventThunk, tasksThunk } from './thunk';

interface ITasks {
  tasks: ICityPointResponse[];
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
    [tasksThunk.fulfilled.type]: (state, action: PayloadAction<ICityPointResponse[]>) => {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    [tasksThunk.rejected.type]: (state) => {
      state.isLoading = false;
    },

    [createEventThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createEventThunk.fulfilled.type]: (state, action: PayloadAction<ICityPointResponse>) => {
      state.isLoading = false;
      state.tasks = [...state.tasks, action.payload];
    },
    [createEventThunk.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export default tasksSlicer.reducer;
