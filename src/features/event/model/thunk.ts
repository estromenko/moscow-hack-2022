import { createAsyncThunk } from '@reduxjs/toolkit';
import { IEvent, createEvent } from '../../../shared/api';

export const createEventThunk = createAsyncThunk('create/event', async (body: IEvent) => {
  const { data } = await createEvent(body);

  return data;
});
