import React from 'react'
import { increment,decrement } from './ReduxStore/ActionCreator'
import { useDispatch, useSelector } from 'react-redux'
export default function Counter() {
    const count = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}
