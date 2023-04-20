import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../../api/auth-api';
import { type IRegistration } from './interfaces/registration.interface';
import { ILogin } from './interfaces/login.interface';

export const registration = createAsyncThunk<undefined, IRegistration>(
  'registration',
  async (registerData, thunkAPI) => {
    try {
      await authAPI.register(registerData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk<undefined, ILogin>(
  'login',
  async (loginData, thunkAPI) => {
    try {
      await authAPI.login(loginData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  // Your initial state properties
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Your reducers
  },
  extraReducers: builder => {
    // Async actions using Axios
  },
});

// export const { /* your exported actions */ } = authSlice.actions

export default authSlice.reducer;
