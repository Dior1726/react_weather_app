import { createSlice } from '@reduxjs/toolkit';
import {getWeatherData} from '../actions/'

const initialState = {
  current: null,
  location: null,
  isLoading: true
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
    },
    [getWeatherData.rejected]: (state, action) => {
      alert(`city ${action.meta.arg} is not defined. Enter the true city name!`);
      state.isLoading = false
    }
  }
})

export default weatherSlice.reducer