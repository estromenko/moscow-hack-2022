import { createAsyncThunk } from '@reduxjs/toolkit';
import { createTask, getCategories, getTasks, getTasksByUserId, ICityPointCreate } from '../../../shared/api';

export const tasksThunk = createAsyncThunk('tasks/tasksThunk', async () => {
  const { data } = await getTasks();

  return data;
});

export const createEventThunk = createAsyncThunk('tasks/createEventThunk', async (body: ICityPointCreate) => {
  const { data } = await createTask(body);

  return data;
});

export const getTasksByIdThunk = createAsyncThunk('tasks/getTasksById', async (id: number) => {
  const { data } = await getTasksByUserId(id);

  return data;
});

export const getCategoriesThunk = createAsyncThunk('tasks/getCategories', async () => {
  const { data } = await getCategories();

  return data;
});
