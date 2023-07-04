import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login"
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile';
import {auth} from "./firebase"
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const [user,setUser] = useState("")
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
     if(user){
      setUser(user.displayName)
     }
     else{
      setUser("")
     }
    })
  })
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile user={user}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
