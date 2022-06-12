import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICityPointResponse, IUserResponse, ICategoriesResponse } from '../../../shared/api';
import {
  createEventThunk,
  tasksThunk,
  getTasksByIdThunk,
  getCategoriesThunk,
  getTasksByCategoryIdThunk,
} from './thunk';

interface ITasks {
  tasks: ICityPointResponse[];
  isLoading: boolean;
  categories: ICategoriesResponse[];
}

const initialState: ITasks = {
  tasks: [],
  isLoading: false,
  categories: [],
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

    [getTasksByIdThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getTasksByIdThunk.fulfilled.type]: (state, action: PayloadAction<IUserResponse>) => {
      state.isLoading = false;
      state.tasks = [...action.payload.city_point];
    },
    [getTasksByIdThunk.rejected.type]: (state) => {
      state.isLoading = false;
    },

    [getTasksByCategoryIdThunk.fulfilled.type]: (state, action: PayloadAction<ICityPointResponse[]>) => {
      state.tasks = action.payload;
    },

    [getCategoriesThunk.fulfilled.type]: (state, action: PayloadAction<ICategoriesResponse[]>) => {
      state.categories = action.payload;
    },
  },
});

export default tasksSlicer.reducer;
