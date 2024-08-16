import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { countries } from '../../constants';

const initialState = {
  countries: countries,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export const selectCountries = (state: RootState) => state.countries.countries;
export default countrySlice.reducer;
