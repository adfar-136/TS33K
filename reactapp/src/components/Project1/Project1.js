import React, { useState } from 'react'
import "./Project1.css"
export default function Project1() {
    const [myStyle,setMystyle]= useState(
        {backgroundColor:"white",
        color:'black'})
    const [myStyle1,setMystyle1]= useState(
            {backgroundColor:"white",
            color:'black'})
    const [btnText,setBtnText] = useState("Dark")
    const [btnText1,setBtnText1] = useState("Dark")
    const toggle =()=>{
        if(myStyle.color === "white"){
            setMystyle({
                backgroundColor:"white",
                color:"black"
            })
            setBtnText("Dark");
        } else{
            setMystyle({
                backgroundColor:"black",
                color:"white"
            })
            setBtnText("Light")
        }
    }
    const toggle1 =()=>{
        if(myStyle1.color === "white"){
            setMystyle1({
                backgroundColor:"white",
                color:"black"
            })
            setBtnText1("Dark");
        } else{
            setMystyle1({
                backgroundColor:"black",
                color:"white"
            })
            setBtnText1("Light")
        }
    }
  return (
    <div>
        <div style={myStyle}  className="container">
            <h1>Welcome</h1>
            <button onClick={toggle}>{btnText}</button>
        </div>
        <div style={myStyle1} className='minicontainer'>
            <div  className="topsection">
                <h1>Welcome</h1>
                <button onClick={toggle1}>{btnText1}</button>
            </div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, saepe!</div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, saepe!</div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, saepe!</div>
            </div>
    </div>
  )
}
