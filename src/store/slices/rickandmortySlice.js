import { createSlice } from '@reduxjs/toolkit'
import { getCharacters } from '../actions'

const initialState = {
  characters: [],
  isLoading: false,
  error: null,
  charactersCount: null,
  currentPage: 1,
  pages: null,
}

export const rickAndMortySlice = createSlice({
  name: 'rickandmorty',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.isLoading = true
    },
    [getCharacters.fulfilled]: (state, action) => {
      state.isLoading = false
      state.characters = action.payload.results
      state.charactersCount = action.payload.info.count
      state.pages = action.payload.info.pages
      state.error = null
    },
    [getCharacters.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { setCurrentPage } = rickAndMortySlice.actions
export default rickAndMortySlice.reducer
