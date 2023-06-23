import React, { memo } from 'react'

function Child(props) {
    console.log("Child Component")
  return (
    <div>
        <h1>Child </h1>
        <h1>{props.fname}</h1>
        {props.countTwo}
        <button onClick={()=>props.setCountTwo(props.countTwo-1)}>change</button>
    </div>
  )
}
export default memo(Child)

