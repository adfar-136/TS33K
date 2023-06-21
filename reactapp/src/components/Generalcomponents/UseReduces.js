import React, { useReducer } from 'react'
const countReducer = (state,action)=>{
    console.log("State",state)
    console.log("Action",action)
    // if(action.type === "Add"){
    //     return {
    //         count:state.count +1
    //     }
    // }
    // else if(action.type === "Minus"){
    //     return {
    //         count:state.count - 1
    //     }
    // }
    // else if(action.type === "multiply"){
    //     return {
    //         count:state.count * 4
    //     }
    // }
    if(action === "Add"){
     return {
             count:state.count +1
      } 
    }
    return state
}
export default function UseReduces() {
    // const [state,setstate] = useState({count:0})
    // setstate("")
    const [state,dispatch] = useReducer(countReducer,{count:0})
  return (
    <div>
        <h1>{state.count}</h1>
        {/* <button onClick={()=>dispatch({type:"Add"})}>Add state</button>
        <button onClick={()=>dispatch({type:"Minus"})}>Minus state</button>
        <button onClick={()=>dispatch({type:"multiply"})}>Minus state</button> */}
         <button onClick={()=>dispatch("Add")}>Add state</button>
        <button onClick={()=>dispatch("Minus")}>Minus state</button>
        <button onClick={()=>dispatch("Multiply")}>Multiply state</button>
    </div>
  )
}
