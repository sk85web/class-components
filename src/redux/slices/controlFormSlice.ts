import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormValues } from '../../types';

const initialState: FormValues = {
  username: 'Your name',
  email: 'Your email',
  age: null,
  password: '',
  confirmPassword: '',
  gender: 'Your gender',
  accept: false,
  avatar: null,
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
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setAvatar: (state, action: PayloadAction<File | null>) => {
      state.avatar = action.payload;
    },
  },
});

export const { setName, setEmail, setAge, setGender, setAvatar } =
  controlFormSlice.actions;

export default controlFormSlice.reducer;
