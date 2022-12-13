import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  removeTodo,
  updateTodo,
  changeTodoStatus,
} from '../../store/slices/todoSlice'

const TodoItem = ({ id, isDone, text }) => {
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [newText, setNewText] = useState(text)

  const deleteTodoHandler = () => {
    dispatch(removeTodo(id))
  }

  const changeTodoStatusHandler = () => {
    dispatch(changeTodoStatus(id))
  }

  const updateTodoHandler = () => {
    dispatch(updateTodo({ id, text: newText }))
    setIsEdit(false)
  }

  return (
    <div className='flex items-center justify-between p-4 bg-white bg-opacity-10 mb-4 last:mb-0 rounded-xl text-lg'>
      <div className='flex items-center gap-2'>
        {isEdit ? (
          <>
            <input
              type='text'
              className='bg-[#151a1f] p-1 text-white text-opacity-70 rounded-md outline-none'
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') updateTodoHandler()
              }}
            />
            <button
              onClick={updateTodoHandler}
              className='px-2 py-1 bg-green-500 rounded-md'
            >
              <i className='bx bx-revision'></i>
            </button>
          </>
        ) : (
          <div
            className={`font-medium ${isDone && 'line-through text-gray-400'}`}
          >
            {text}
          </div>
        )}
      </div>
      <div className='flex items-center gap-3'>
        <button
          onClick={changeTodoStatusHandler}
          className='px-2 py-1 bg-green-500 rounded-md'
        >
          {isDone ? (
            <i className='bx bx-reset'></i>
          ) : (
            <i className='bx bx-check-double'></i>
          )}
        </button>

        <button
          onClick={() => setIsEdit((prev) => !prev)}
          className='px-2 py-1 bg-blue-500 rounded-md'
        >
          {isEdit ? (
            <i className='bx bx-x'></i>
          ) : (
            <i className='bx bxs-edit-alt'></i>
          )}
        </button>

        <button
          onClick={deleteTodoHandler}
          className='px-2 py-1 bg-red-500 rounded-md'
        >
          <i className='bx bxs-trash-alt'></i>
        </button>
      </div>
    </div>
  )
}

export default TodoItem
