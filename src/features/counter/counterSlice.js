import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  msg: 'hello'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMsg: (state) => {
      state.msg = 'Fucka ' + Math.round(Math.random() * 1000)
    }
  }
})

export const { changeMsg } = counterSlice.actions
export default counterSlice.reducer