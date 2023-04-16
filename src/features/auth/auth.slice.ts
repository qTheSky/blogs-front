import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../../api/auth-api';
import { type IRegistration } from './interfaces/registration.interface';

export const registerThunk = createAsyncThunk<undefined, IRegistration>(
  'registration',
  async (registerData, thunkAPI) => {
    try {
      const { data } = await authAPI.register(registerData);
      console.log(data);
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
