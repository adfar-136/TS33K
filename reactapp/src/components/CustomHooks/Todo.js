import React, { useState } from 'react'
import useList from './useList'

export default function Todo() {
    const {list,push,pull} =  useList()
    const [todo,setTodo] = useState("")
    console.log(todo)
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        todo===""?alert("fill"):push(todo);
        setTodo("")

    }
  return (
    <div>
        <header>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Add Todo Task</label>
                    <input type="text" value={todo}
                    onChange={(e)=>setTodo(e.target.value)}/>
                    <input type='submit' value="Add"/>
                </div>
            </form>
            {list.map((item,index)=>{
              return ( 
                <>
                <li key={index}>{item} <button onClick={()=>pull(index)}>Remove</button></li> <br />
                
                </>
                )
            })}
        </header>
    </div>
  )
}
