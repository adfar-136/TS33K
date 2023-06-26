import React from 'react'
import {  Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
export default function Mainhome() {
    const navigate = useNavigate()
    const previouspage = ()=>{
        navigate(-1)
    }
  return (
    <div>
        <button onClick={previouspage}>Previous Page</button>
         <Header/>
         
        <Outlet/>
    </div>
  )
}
