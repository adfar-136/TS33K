import React, { useState } from 'react'
import Comp2 from './Comp2'
const fname= "Adfar"
export default function Comp1() {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <Comp2 fname={fname} Stateset={setCount} cstate={count}/>
    </div>
  )
}
