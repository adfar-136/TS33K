import React from 'react'

export default function Comp3(props) {
  return (
    <div>
        <button onClick={()=>props.setCount(props.count+1)}>Click me</button>
    </div>
  )
}
