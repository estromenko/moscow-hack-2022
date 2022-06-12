import { createSlice } from '@reduxjs/toolkit';
import { IEvent } from '../../../shared/api';
import { createEventThunk } from './thunk';

interface IEventInitialState {
  events: IEvent[];

  isLoading: boolean;
}

const initialState: IEventInitialState = {
  events: [],

  isLoading: false,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: {
    [createEventThunk.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createEventThunk.fulfilled.type]: (state, { payload }) => {
      state.events.push(payload);
    },
  },
});

export default eventSlice.reducer;
