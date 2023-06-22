import React, { createContext, useState } from 'react'
import Comp2 from './components/Context/Comp2'
import UseContextState from './UseContextState'
const MyContext = createContext()
export default function Contextstate() {
    const [myState,setMyState]= useState("Rashid")
  return (
    <div>
        <MyContext.Provider value={{myState,setMyState}}>
           <Comp2/>
           <UseContextState/>
        </MyContext.Provider>   
    </div>
  )
}
export {MyContext}