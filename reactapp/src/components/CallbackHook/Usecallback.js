import React, { useCallback, useState } from 'react'
const x = new Set()
export default function Usecallback() {
    const [count,setCount]  = useState(0)
    const [number,setNumber] = useState(100)
    const incrementCount =useCallback( ()=>{
        setCount(count +1 )
    },[count])
    const decrementCount = useCallback(()=>{
        setCount(count -1 )
    },[count])
    const incrementNumber = useCallback(()=>{
        setNumber(number+1)
    },[number])
    const decrementNumber =useCallback(()=>{
        setNumber(number-1)
    },[number])
    x.add(incrementCount)
    x.add(decrementCount)
    x.add(incrementNumber)
    x.add(decrementNumber)
    alert(x.size)
  return (
    <div>
        <br /><br />
        <h1>{count}</h1>
        <br />
        <h1>{number}</h1>
        <button onClick={incrementCount}>Increase Count</button><br />
        <button onClick={decrementCount}>Decrease Count</button><br />
        <button onClick={incrementNumber}>Increase Number</button><br />
        <button onClick={decrementNumber}>Decrease Number</button>
    </div>
  )
}
