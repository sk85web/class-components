import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUiState } from '../reduxTypes';

const initialState: IUiState = {
  isLoading: false,
  hasError: false,
  currentPage: 1,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setIsLoading, setHasError, setCurrentPage } = uiSlice.actions;

export default uiSlice.reducer;
