import React from 'react'
import Comp3 from './Comp3'
import {MyContext} from "../../Contextstate"
export default function Comp2() {
  return (
    <div>
      <MyContext.Consumer>
        {({myState,setMyState})=>{
        return (  <div>
            <h1>State : {myState}</h1>
            <button onClick={()=>setMyState("Adfar")}>Update</button>
          </div>
        )
        }}
      </MyContext.Consumer>
    </div>
  )
}
