import React from 'react'
import { useSelector } from 'react-redux'
import CardWrapper from '../Card/CardWrapper'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo)

  return (
    <div className='container max-w-3xl mx-auto py-5'>
      <CardWrapper className='p-5'>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
            />
          ))
        ) : (
          <h1 className='text-center text-gray-300 text-xl'>
            You dont have any todos yet
          </h1>
        )}
      </CardWrapper>
    </div>
  )
}

export default TodoList
