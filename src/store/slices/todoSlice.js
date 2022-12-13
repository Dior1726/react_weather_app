import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      text: 'Create some app',
      isDone: false
    },
    {
      id: 112,
      text: 'Learn new thing about React.Js',
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
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    updateTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            text: action.payload.text
          }
        }
        return todo
      })
    },
    changeTodoStatus(state, action) {
      state.todos = state.todos.map((todo) => {
        if (action.payload === todo.id) {
          return {
            ...todo, 
            isDone: !todo.isDone
          }
        }
        return todo
      })
    }
  }
})

export const { addTodo, removeTodo, updateTodo, changeTodoStatus } = todoSlice.actions
export default todoSlice.reducer