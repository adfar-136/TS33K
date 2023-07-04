import React, { useState } from 'react'
import styles from "./Login.module.css"
import Inputform from '../InputForm/Inputform'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
export default function Login() {
  const [values,setValues] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()
  const [errorMsg,setErrorMsg] = useState("")
  const handleSubmission=()=>{
     if(!values.email || !values.password){
        setErrorMsg("Fll All Fields")
        return
     }
     setErrorMsg("")
     signInWithEmailAndPassword(auth,values.email,values.password).then((res)=>{
        navigate("/profile")
     }).catch((err)=>{
      setErrorMsg(err.message)
     })
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <Inputform label="Email" type="email" placeholder="Enter Your Email"
        onChange={(event)=>
        setValues((prev)=>({...prev,email:event.target.value}))}/>
        <Inputform label="Password" type="password" placeholder="Enter Your Password"
        onChange={(event)=>
        setValues((prev)=>({...prev,password:event.target.value}))}/>
        <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission}>Login</button>
            <div className={styles.acc}>
            <p>Already have an account? {" "}</p>
            <span>
              <Link to='/signup'>SignUp</Link>
            </span>
            </div>
        </div>
      </div>
    </div>
  )
}
