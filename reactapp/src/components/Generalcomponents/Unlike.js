import React from 'react'
import useCounter from '../CustomHooks/useCounter'

export default function Unlike() {
    const {count,increment,decrement} = useCounter()
  return (
    <div>
        <button onClick={decrement}>Unlike : {count}</button>
    </div>
  )
}
