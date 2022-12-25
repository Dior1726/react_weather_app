import { createSlice } from '@reduxjs/toolkit'
import { getUserRepos } from '../actions'

const initialState = {
  isLoading: false,
  repos: [],
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
}

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    }
  },
  extraReducers: {
    [getUserRepos.pending]: (state) => {
      state.isLoading = true
    },
    [getUserRepos.fulfilled]: (state, action) => {
      state.isLoading = false
      state.repos = action.payload
    },
    [getUserRepos.rejected]: (state) => {
      state.isLoading = false
      alert('Something went wrong!')
    }
  }
})

export const { setCurrentPage } = githubSlice.actions
export default githubSlice.reducer