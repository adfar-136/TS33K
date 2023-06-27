import React, { useState } from 'react'

export default function LocalStorage1() {
    const [name,setName] = useState("")
    const [pwd,setPwd] = useState("")
    console.log(name,pwd)
    const handleClick =()=>{
        localStorage.setItem("Name",name)
        localStorage.setItem("Password",pwd)
    }
    const removeClick =()=>{
        localStorage.removeItem("Name")
        localStorage.removeItem("Password")
    }
  return (
    <div>
        <h1>Name of the user: </h1>
        <input type="text" placeholder='Name' value={name}
        onChange={(e)=>setName(e.target.value)}/>
        <h1>Password of the User : </h1>
        <input type="password" placeholder='Password' value={pwd}
        onChange={(e)=>setPwd(e.target.value)}/>
        <div>
            <button onClick={handleClick}>Add to localStorage</button>
        </div>
        {localStorage.getItem("Name") && (
            <h1>Name : {localStorage.getItem("Name")}</h1>
        )}
        {localStorage.getItem("Password") && (
            <h1>Password : {localStorage.getItem("Password")}</h1>
        )}
        
        <div>
            <button onClick={removeClick}>Remove from LocalStorage</button>
        </div>
    </div>
  )
}
