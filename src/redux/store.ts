import { configureStore } from '@reduxjs/toolkit';

import controlFormSlice from './slices/controlFormSlice';

export const store = configureStore({
  reducer: {
    control: controlFormSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
