import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUiState } from '../reduxTypes';

const initialState: IUiState = {
  hasError: false,
  currentPage: 1,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage, setHasError } = uiSlice.actions;

export default uiSlice.reducer;
