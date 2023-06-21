import React, { useState } from 'react'
import "../App.css"
export default function Functionstate() {
    const [count, setCount] = useState(0)
    const [color,setColor] = useState("light")
    const addOne = ()=>{
        setCount(count+1)
    }
    const changeColor = ()=>{
        // if(color==="light"){
        //     setColor("dark")
        // }else{
        //     setColor("light")
        // }
        color==="dark"?setColor("light"):setColor("dark")
    }
  return (
    <div className={color}>
        <button onClick={()=>changeColor()}>Dark/light</button>
        <button onClick={()=>addOne()}>-</button>
        <h1>{count}</h1>
    </div>
  )
}
