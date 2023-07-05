import React, { useState } from 'react'
import SideNav from './SideNav'
import MainSection from './MainSection'
import {auth} from "../../firebase"
import { signOut } from 'firebase/auth'

import "./Todos.css"
import { useNavigate } from 'react-router-dom'
export default function Todos(props) {
    const [active,setActive] = useState("INBOX")
    const navigate = useNavigate()
    const handleSignOut =()=>{
        signOut(auth).then(()=>{
            navigate("/")
         })
    }
  return (
    <div>
        {props.user ? (
            <>
            <div className='top'>
              <h1>Welcome {props.user} to your Todo Application</h1>
              <button onClick={handleSignOut}>SignOut</button>

            </div>
            
            <div className="row">
                <div className="item item1">
                    <SideNav change={setActive}/>
                </div>
                <div className="item item2">
                    <MainSection active={active}/>
                </div>
            </div>
            
            </>
        ):(
            <div className='login'>
                <h1>Please Login First</h1>
                <button onClick={()=>navigate("/login")}>Login </button>
            </div>
        )}
    </div>
  )
}
