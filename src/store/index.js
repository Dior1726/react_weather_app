import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import todoReducer from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    todo: todoReducer
  },
});
