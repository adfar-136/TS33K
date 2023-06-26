import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function About() {
  const navigate = useNavigate()
  const goToContact=()=>{
     navigate("/contact")
  }
  return (
    <div>
       
        <h1>About webpage</h1>
        <button onClick={()=>goToContact()}>Go to Contact Page</button>
    </div>
  )
}
