import { createSlice } from '@reduxjs/toolkit';
import { getCharacters } from '../actions'

const initialState = {
  characters: [],
  isLoading: false,
  error: null,
  charactersCount: null
}

export const rickAndMortySlice = createSlice({
  name: 'rickandmorty',
  initialState,
  reducers: {},
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.isLoading = true
    },
    [getCharacters.fulfilled]: (state, action) => {
      state.isLoading = false
      state.characters = action.payload.results
      state.charactersCount = action.payload.info.count
      state.error = null
    },
    [getCharacters.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default rickAndMortySlice.reducer