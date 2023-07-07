import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './Redux/action'

export default function TodoList() {
    const [todoText,setTodoText] = useState('')
    const dispatch = useDispatch()
    const todos =  useSelector((state)=>state.todos)
    const handleTodo = ()=>{
        if(todoText !== ""){
            const newTodo = {
                id: Math.floor(Math.random()*1000),
                text : todoText
            }
            dispatch(addTodo(newTodo))
            setTodoText("")

        }
    }
    const handleRemove =(todoId)=>{
        dispatch(removeTodo(todoId))
    }
  return (
    <div>
        <h2>Todo List:</h2>
        <input type="text" 
        value={todoText}
        onChange={(event)=>setTodoText(event.target.value)}/>
        <button onClick={handleTodo}>Add Todo</button>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=>{handleRemove(todo.id)}}>Remove Item</button>
                    
                </li>
            ))}
        </ul>
    </div>
  )
}
