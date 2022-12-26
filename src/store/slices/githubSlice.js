import { createSlice } from '@reduxjs/toolkit'
import { getUserRepos } from '../actions'

const initialState = {
  isLoading: false,
  repos: [],
  error: null
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
    },
    [getUserRepos.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const { setCurrentPage } = githubSlice.actions
export default githubSlice.reducer