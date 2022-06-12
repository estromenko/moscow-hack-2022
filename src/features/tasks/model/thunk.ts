import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addUserToTask,
  createTask,
  getCategories,
  getSimiliarByCategoryIdTasks,
  getTasks,
  getTasksByUserId,
  ICityPointCreate,
} from '../../../shared/api';

export const tasksThunk = createAsyncThunk('tasks/tasksThunk', async () => {
  const { data } = await getTasks();

  return data;
});

export const createEventThunk = createAsyncThunk(
  'tasks/createEventThunk',
  async (body: ICityPointCreate & { userId: number }) => {
    const { userId, ...rest } = body;
    const { data } = await createTask(rest);
    await addUserToTask(userId, data.id);

    return data;
  }
);

export const getTasksByIdThunk = createAsyncThunk('tasks/getTasksById', async (id: number) => {
  const { data } = await getTasksByUserId(id);

  return data;
});

export const getTasksByCategoryIdThunk = createAsyncThunk('tasks/getTasksByCategoryId', async (id: string) => {
  const { data } = await getSimiliarByCategoryIdTasks(id);

  return data;
});

export const getCategoriesThunk = createAsyncThunk('tasks/getCategories', async () => {
  const { data } = await getCategories();

  return data;
});
