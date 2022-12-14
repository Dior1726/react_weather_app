import { createSlice } from '@reduxjs/toolkit'
import { getUserRepos, getUser } from '../actions'

const initialState = {
  isLoading: false,
  user: null,
  repos: [],
  error: null,
}

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserRepos.pending]: (state) => {
      state.isLoading = true
    },
    [getUserRepos.fulfilled]: (state, action) => {
      state.isLoading = false
      state.repos = action.payload
      state.error = null
    },
    [getUserRepos.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.error = null
    },
    [getUser.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { setCurrentPage } = githubSlice.actions
export default githubSlice.reducer
