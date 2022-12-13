import React from 'react'
import { useSelector } from 'react-redux'

const TodoPage = () => {
  const { todos } = useSelector((state) => state.todo)
  console.log(todos)

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>Todo Text - {todo.text}</div>
      ))}
    </div>
  )
}

export default TodoPage
