import React, { useContext } from 'react'
import { MyContext } from './Contextstate'
export default function UseContextState() {
    const {myState,setMyState} = useContext(MyContext)
  return (
    <div>
        <h1>{myState}</h1>
        <button onClick={()=>setMyState("Helloooo")}>Change</button>
    </div>
  )
}
