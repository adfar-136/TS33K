import React from 'react'
import useCounter from '../CustomHooks/useCounter'

export default function Like() {
    const {count,increment,decrement} = useCounter()
  return (
    <div>
        <button onClick={increment}>Like :{count}</button>
        
    </div>
  )
}
