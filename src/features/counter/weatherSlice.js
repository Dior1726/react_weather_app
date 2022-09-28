import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  current: null,
  location: null,
  isLoading: true
}

export const getWeatherData = createAsyncThunk( 'weather/getWeatherData' , (country) => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: country || 'Astana'},
    headers: {
      'X-RapidAPI-Key': 'd820813cf8mshec4b5c617fcc56cp18a9fdjsn5a87eac11a3c',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  return new Promise((resolve, reject) => {
    axios.request(options)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
})

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

      console.log(state.current);
    },
    [getWeatherData.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false
    }
  }
})

export default weatherSlice.reducer