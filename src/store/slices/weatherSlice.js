import { createSlice } from '@reduxjs/toolkit';
import { getWeatherData } from '../actions/'

const initialState = {
  current: null,
  location: null,
  isLoading: true,
  error: null
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [getWeatherData.pending]: (state) => {
      state.isLoading = true
    },
    [getWeatherData.fulfilled]: (state, action) => {
      state.isLoading = false
      state.current = action.payload.current
      state.location = action.payload.location
      state.error = null
    },
    [getWeatherData.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default weatherSlice.reducer