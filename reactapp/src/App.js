import React from 'react'
import useCounter from './components/CustomHooks/useCounter'
import Like from './components/Generalcomponents/Like'
import Unlike from './components/Generalcomponents/Unlike'

export default function App() {
  const {count,increment,decrement} = useCounter()

  console.log(count)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button>

      <Like/>
      <Unlike/>
    </div>
  )
}
