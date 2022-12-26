import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import todoReducer from './slices/todoSlice';
import githubSlice from './slices/githubSlice';
import rickAndMortySlice from './slices/rickandmortySlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    todo: todoReducer,
    github: githubSlice,
    rickandmorty: rickAndMortySlice
  },
});
