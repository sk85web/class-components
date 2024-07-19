import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ISearchState } from '../reduxTypes';

// import { LS_QUERY } from '../../constants';
// import { useLocalStorageQuery } from '../../hooks/useLocalStorageQuery';

const initialState: ISearchState = {
  value: '',
  //   value: useLocalStorageQuery(LS_QUERY)
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.value = action.payload;
    },
  },
});

export const { setValue } = searchSlice.actions;

export default searchSlice.reducer;
