import React, { useState } from 'react'

export default function Localstorage2() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoggedin,setIsloggedin] = useState(false)
    const handleLogin = (e)=>{
        e.preventDefault()
        const userData = {
            name,
            email,
            password,
        }
        localStorage.setItem("Login-data",JSON.stringify(userData))
        setIsloggedin(true)
        setEmail("")
        setName("")
        setPassword("")
    }
    const handleLogout = ()=>{
        localStorage.removeItem('Login-data')
        setIsloggedin(false)
    }
  return (
    <div>
        <h1>This is my React login/Logout app</h1>
        {!isLoggedin ? (
            <form>
            <input type="text" placeholder='Enter Name' value={name}
            onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='Enter Email' value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Enter Password' value={password}
            onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit" onClick={handleLogin}>SignIn</button>
        </form>
        ):(
            <div>
                <h1>User is logged in</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )}
    </div>
  )
}
