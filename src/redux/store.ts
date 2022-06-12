import { configureStore } from '@reduxjs/toolkit';

import authSlicer from './slices/auth';
import tasksSlicer from '../features/tasks/model/slice';

export const store = configureStore({
  reducer: {
    auth: authSlicer,
    tasks: tasksSlicer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
