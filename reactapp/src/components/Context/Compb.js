import React, { useContext } from 'react'
import Comp3 from './Comp3'
import {FirstName,LastName,MiddleName} from "../../App"
export default function Compb() {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    const mname = useContext(MiddleName)
  return (
    <div>
        <h1>My Name is {fname} {mname} {lname}</h1>
        <Comp3/>
    </div>
  )
}
