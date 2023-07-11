import React, { useState } from 'react'

export default function App() {
  const [list,setList] = useState([])
  const [input,setInput] = useState()
  const [edit,setEdit] = useState(-1)
  const handleAdd = ()=>{
    if(input !== ""){
      if(edit === -1){
      setList([...list,input])
      }
      else{
        const newList = [...list]
        newList[edit] = input;
        setList(newList)
        setEdit(-1)
      }
      
    }
    else{
      alert("Field is empty")
    }
    
  }
  const handleRemove=(index)=>{
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }
  const handleEdit = (index) =>{
    const itemselected = list[index]
    setInput(itemselected)
    setEdit(index)
  }
  return (
    <div>
      <input type="text" 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <button onClick={handleAdd}>{edit === -1? 'Add Task': 'UpdateTask'}</button>
      <ul>
        {list.map((task,index)=>(
          <li>
            {task}
            <button onClick={()=>handleEdit(index)}>Edit Item</button>

            <button onClick={()=>handleRemove(index)}>Remove Item</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
