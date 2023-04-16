import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // Your initial state properties
}

const authSlice = createSlice({
  name: 'yourFeature',
  initialState,
  reducers: {
    // Your reducers
  },
  extraReducers: (builder) => {
    // Async actions using Axios
  },
})

// export const { /* your exported actions */ } = authSlice.actions

export default authSlice.reducer
