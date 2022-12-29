import { createSlice } from '@reduxjs/toolkit'
import { getCharacters, getEpisodes, getLocations } from '../actions'

const initialState = {
  characters: [],
  locations: [],
  episodes: [],

  counts: {},
  currentPage: 1,
  pages: null,

  isLoading: false,
  error: null,
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
      state.counts.characters = action.payload.info.count
      state.pages = action.payload.info.pages
      state.error = null
    },
    [getCharacters.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [getLocations.pending]: (state) => {
      state.isLoading = true
    },
    [getLocations.fulfilled]: (state, action) => {
      state.isLoading = false
      state.locations = action.payload.results
      state.counts.locations = action.payload.info.count
      state.pages = action.payload.info.pages
      state.error = null
    },
    [getLocations.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [getEpisodes.pending]: (state) => {
      state.isLoading = true
    },
    [getEpisodes.fulfilled]: (state, action) => {
      state.isLoading = false
      state.episodes = action.payload.results
      state.counts.episodes = action.payload.info.count
      state.pages = action.payload.info.pages
      state.error = null
    },
    [getEpisodes.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { setCurrentPage } = rickAndMortySlice.actions
export default rickAndMortySlice.reducer
