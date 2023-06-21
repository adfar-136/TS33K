import React, { useRef, useState } from 'react'

export default function Formuncontrolledfunction() {
    const fname = useRef()
    const lname = useRef()
    const [condition,setCondition] = useState(false)
    const submitHandler=(event)=>{
        event.preventDefault()
        setCondition(true)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Firstname' ref={fname}/>
            <input type="text" placeholder='Lastname' ref={lname}/>

            <button type='submit'>Submit</button>
        </form>
        <h1>{condition?(<h1>Welcome {fname.current.value} {lname.current.value}</h1>):"Pehlay submit karo"}</h1>

    </div>
  )
}
