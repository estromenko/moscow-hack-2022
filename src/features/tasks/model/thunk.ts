import { createAsyncThunk } from '@reduxjs/toolkit';
import { createTask, getTasks, ICityPointCreate } from '../../../shared/api';

export const tasksThunk = createAsyncThunk('tasks/tasksThunk', async () => {
  const { data } = await getTasks();

  return data;
});

export const createEventThunk = createAsyncThunk('create/event', async (body: ICityPointCreate) => {
  const { data } = await createTask(body);

  return data;
});
