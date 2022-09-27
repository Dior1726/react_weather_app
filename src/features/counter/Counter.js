import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMsg } from './counterSlice'

const Counter = () => {

  const {msg} = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>change Msg: <b> {msg} </b> </div>
      <button onClick={() => dispatch(changeMsg())} >change</button>
    </>
  )
}

export default Counter