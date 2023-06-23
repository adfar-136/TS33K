import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [countOne,setCountone] = useState(0)
    const [countTwo,setCountTwo] = useState(100)
    const incrementOne = ()=>{
       setCountone(countOne + 1)
    }
    // const fun =()=>{
    //     console.log("adfae")
    // }
    const fun = useCallback(()=>{
        console.log("Adfar")
    },[countTwo])
  return (
    <div>
        <br /><br />
        <Child fname ={fun} countTwo={countTwo} setCountTwo={setCountTwo}/>
        <br /><br />
        <button onClick={incrementOne}>Count One:{countOne}</button>
    </div>
  )
}
