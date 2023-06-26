import React from 'react'
import {  NavLink, Outlet, useNavigate } from "react-router-dom";


export default function Contact() {
  const navigate = useNavigate()
  const goToAbout = ()=>{
     navigate("/about")
  }
  const goToHome =()=>{
    navigate("/")
  }
  return (
    <div>
      
      <h1>Contact webpage</h1>
      <h1>i Have three outlets</h1>
      <button onClick={()=>{goToAbout()}}>Go to About Page</button>
      <button onClick={()=>{goToHome()}}>Go to Home Page</button>
      <NavLink to="/contact/search">Search</NavLink><br />
      <NavLink to="/contact/blog">Blog</NavLink><br />
      <NavLink to="/contact/list">List</NavLink>
      hi
      <Outlet/>
    </div>
  )
}
