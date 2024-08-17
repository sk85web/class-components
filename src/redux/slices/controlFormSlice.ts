import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from '../../types';

const initialState: FormValues = {
  username: 'Your name',
  email: 'Your email',
  age: 0,
  password: '',
  confirmPassword: '',
  gender: 'Your gender',
  accept: false,
  avatar: '',
  country: '',
};

export const controlFormSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setAccept: (state, action: PayloadAction<boolean>) => {
      state.accept = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setAge,
  setPassword,
  setConfirmPassword,
  setGender,
  setAccept,
  setAvatar,
  setCountry,
} = controlFormSlice.actions;

export default controlFormSlice.reducer;
