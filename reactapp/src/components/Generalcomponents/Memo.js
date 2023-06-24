import React, { useMemo, useState } from 'react'

export default function Memo() {
    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] =useState(100)
    const incrementOne =()=>{
          setCountOne(countOne+1)
    }
    // const isEven = ()=>{
    //     let i = 0;
    //     while (i <20000000000) i++;
    //     return countOne%2 === 0
    // }
    const isEven = useMemo(()=>{
        let i = 0;
        while (i<20000000000) i++;
        return countOne%2===0
    },[countOne])
    const incrementTwo = ()=>{
        setCountTwo(countTwo-1)
    }
  return (
    <div>
        <br /> <br />
      <button onClick={incrementOne}>CountOne - {countOne}</button> <br /><br />
      <h1>{isEven?"Number is Even":"Number is Odd"}</h1> <br /><br />
      <button onClick={incrementTwo}>CountTwo - {countTwo}</button>
    </div>
  )
}
