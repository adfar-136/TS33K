import React from 'react'
import { useSelector } from 'react-redux'

export default function Div() {
    const backgroundColor = useSelector((state)=>state.backgrounCOlor)
  return (
    <div style={{backgroundColor:backgroundColor,height:"300px",width:"300px",textAlign:"center",}}>
        <h1>Click button to change color</h1>
    </div>
  )
}
