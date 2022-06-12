import { createAsyncThunk } from '@reduxjs/toolkit';
import { tasks } from '../../../shared/api';

export const tasksThunk = createAsyncThunk('tasks/tasksThunk', async () => {
  const { data } = await tasks();

  return data;
});
