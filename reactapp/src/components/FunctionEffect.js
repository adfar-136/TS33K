import React, { useEffect, useState } from 'react'

export default function FunctionEffect() {
    let [count,setCount] = useState(0)
    let [number,setNumber] = useState(100)
    useEffect(()=>{
        console.log("useeffect invoked")
    },[count,number])
  return (
    <div>
        <h1>{count}</h1>
        <h1>{number}</h1>
        <button onClick={()=>setCount(count+1)}>Update ccount </button>
        <button onClick={()=>setNumber(number-1)}>Update number </button>
    </div>
  )
}
