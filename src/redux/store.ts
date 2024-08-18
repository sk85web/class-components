import { configureStore } from '@reduxjs/toolkit';

import controlFormSlice from './slices/controlFormSlice';
import countrySlice from './slices/countrySlice';
import uncontrolFormSlice from './slices/uncontrolFormSlice';

export const store = configureStore({
  reducer: {
    control: controlFormSlice,
    uncontrol: uncontrolFormSlice,
    countries: countrySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
