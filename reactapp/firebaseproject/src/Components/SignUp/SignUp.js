import React, { useState } from 'react'
import styles from "./Signup.module.css"
import {auth} from "../../firebase"
import Inputform from '../InputForm/Inputform'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
export default function SignUp() {
  const [values,setValues] = useState({
    name:"",
    email:"",
    password:"",
  })
  const [submitBtn,setSubmitBtn] = useState(false)
  const navigate  = useNavigate()
  const [errorMsg,setErrorMsg] = useState("")
  const handleSubmission=()=>{
      if(!values.name || !values.email || !values.password){
        setErrorMsg("Fill All Fields")
        return
      }
      setErrorMsg("")
      setSubmitBtn(true)
      createUserWithEmailAndPassword(auth,values.email,values.password).then((res)=>{
        const user = res.user;
        console.log(user)
        updateProfile(user,{
          displayName:values.name
        })
        navigate("/login")
      }).catch((err)=>{
        setSubmitBtn(false)
        setErrorMsg(err.message)
      })
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>SignUp</h1>
        <Inputform type="text" label="Name" placeholder="Enter Your Name" 
        onChange={(event)=>
          setValues((prev)=>({...prev,name:event.target.value}))}/>
        <Inputform type="email"  label="Email" placeholder="Enter Your Email"
        onChange={(event)=>
        setValues((prev)=>({...prev,email:event.target.value}))}/>
        <Inputform type="password" label="Password" placeholder="Enter Your Password"
        onChange={(event)=>
        setValues((prev)=>({...prev,password:event.target.value}))}/>
        <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitBtn}>SignUp</button>
            <div className={styles.acc}>
            <p>Already have an account? {" "}</p>
            <span>
              <Link to='/login'>Login</Link>
            </span>
            </div>
        </div>
      </div>
      
    </div>
  )
}
