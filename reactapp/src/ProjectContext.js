import React, { useContext } from 'react'
import {ProjectContext1} from "./Contextfunction"

export default function ProjectContext() {
    const {count,setCount,color,setColor} = useContext(ProjectContext1)
  return (
    <div style={{backgroundColor:color,color:"red"}}>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>color==="black"?setColor("white"):setColor("black")}>Dark/light</button>
    </div>
  )
}
