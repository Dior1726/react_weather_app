import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      text: 'hello',
      isDone: false
    },
    {
      id: 1,
      text: 'bie',
      isDone: false
    }
  ]
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload)
    }
  }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer