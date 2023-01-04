import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/slices/todoSlice'

const CreateTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const createTodoHandler = () => {
    if (todo !== '') {
      const newTodo = {
        id: Math.round(Math.random() * 10000),
        text: todo,
        isDone: false,
      }

      dispatch(addTodo(newTodo))
      setTodo('')
    } else {
      alert('Enter something...')
    }
  }

  return (
    <div className='container mx-auto border-b border-gray-600 flex items-center justify-center py-5 gap-2'>
      <input
        type='text'
        className='bg-[#151a1f] p-3 text-white font-medium text-lg text-opacity-70 rounded-lg outline-none'
        placeholder='Todo text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') createTodoHandler()
        }}
      />
      <button
        onClick={createTodoHandler}
        className='bg-gray-800 hover:shadow hover:shadow-gray-700 text-lg py-3 px-6 rounded-lg'
      >
        <i className='bx bx-plus'></i>
      </button>
    </div>
  )
}

export default CreateTodo
