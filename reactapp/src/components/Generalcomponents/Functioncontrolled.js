import React, { useState } from 'react'

export default function Functioncontrolled() {
    const [fname,setFname]   = useState("")
    const [lname,setLname]   = useState("")
  return (
    <div>

<form>
            <input type="text" placeholder='Firstname' onChange={(event)=>setFname(event.target.value)}/>
            <input type="text" placeholder='Lastname' onChange={(event)=>setLname(event.target.value)}/>

            <button type='submit'>Submit</button>
        </form>
        <h1>{fname} {lname}</h1>
    </div>
  )
}
