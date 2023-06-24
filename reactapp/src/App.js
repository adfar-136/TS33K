import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/ReactRouter/Home'
import About from './components/ReactRouter/About'
import Contact from './components/ReactRouter/Contact'
import Adfar from './components/ReactRouter/Adfar'
import Users from './components/ReactRouter/Users'
import UserDetails from './components/ReactRouter/UserDetails'
import Errorpage from './components/ReactRouter/Errorpage'

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path='users' element={<Users/>}/>
       <Route path="users/:userid" element={<UserDetails/>}/>
       <Route path="adfar" element={<Adfar/>}/>
       <Route path='*' element={<Errorpage/>}/>

     </Routes>
    </BrowserRouter>
  )
}
