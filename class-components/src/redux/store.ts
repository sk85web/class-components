import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import cardReducer from './slices/cardSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    card: cardReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
