import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeatherData = createAsyncThunk('weather/getWeatherData', (country) => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: country || 'Astana' },
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