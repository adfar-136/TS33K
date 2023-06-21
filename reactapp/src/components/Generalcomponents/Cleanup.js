import React, { useEffect,useState } from 'react'

export default function Cleanup() {
    const [count,setCount] = useState(0)
    // useEffect(()=>{
    //     console.log("1")
    //     const eventHandler =()=>console.log("Hi")
    //     document.addEventListener('click',eventHandler)
    //     return ()=>{
    //         console.log("2")
    //         document.removeEventListener("click",eventHandler)
    //     }
    // },[count])
    useEffect(()=>{
        setInterval(()=>{
            console.log("hello")
        },2000)
        
    })
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={()=>setCount(count+1)}>add</button>
    </div>
  )
}
