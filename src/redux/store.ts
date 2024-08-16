import { configureStore } from '@reduxjs/toolkit';

import controlFormSlice from './slices/controlFormSlice';
import countrySlice from './slices/countrySlice';

export const store = configureStore({
  reducer: {
    control: controlFormSlice,
    countries: countrySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
