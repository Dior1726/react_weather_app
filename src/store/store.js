import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/counter/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
