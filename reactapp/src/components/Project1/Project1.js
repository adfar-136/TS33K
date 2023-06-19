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
    const [text,setText] = useState("")
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
    const onchangee=(event)=>{
        setText(event.target.value)
    }
    const onLower=()=>{
        const newText = text.toLowerCase()
        setText(newText)
    }
    const onUpper=()=>{
        const newText = text.toUpperCase()
        setText(newText)
    }
    const onClear=()=>{
        setText("")
    }
    const onCopy=()=>{
        var text = document.getElementById("box")
       text.select()
       navigator.clipboard.writeText(text.value);
    }
  return (
    <div  style={myStyle} >
        <div className="container">
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
        <div className="textcontainer">
            <div className="textarea">
               <textarea id='box' cols="70" rows="10" value={text}
               onChange={(event)=>{onchangee(event)}}
               ></textarea>
            </div>
            <div className="btncontainer">
                <button onClick={onLower}>LowerCase</button>
                <button onClick={onUpper}>UpperCase</button>
                <button onClick={onCopy}>Copy</button>
                <button onClick={onClear}>Clear</button>
            </div>
        </div>
    </div>
  )
}
