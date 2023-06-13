import React from 'react'
var arr = [
    "Prateek",
    ["HTML","CSS",["Rect","JS","DSA"]],
    {name:"Prateek",age:"25"}
]
var last = arr.slice(-1)[0].name
console.log(last)
export default function Array() {
  return (
    <div>
        <h1>{arr[0]}</h1>
        <div>{arr.slice(1,-1).map((item,index)=>{
            return (
                <>
                <h1>{item[0]}</h1>
                <h1>{item[1]}</h1>
                <h2>{item[2].map((item1,index1)=>{
                    return (
                        <li>{item1}</li>
                    )
                })}</h2>
                </>
            )
        })}</div>
       <h1>{arr.slice(-1)[0].name}</h1> 
    </div>
  )
}
