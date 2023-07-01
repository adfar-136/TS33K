import React, { useRef, useState } from 'react'

export default function Inbox(props) {
    const [newTask,setnewTask] = useState(false)
    const titleRef = useRef() 
    const calendarRef = useRef()
    const newTaskHandler = ()=>{
        setnewTask(true);
    }
    const cancelHandler = ()=>{
        setnewTask(false);
    }
    const addHandler =(e)=>{
      e.preventDefault()
      if(titleRef.current.value === ""){
        window.alert("Task cannot be empty");
        return;
      }
      const newObj = {
        number: props.list.length + 1,
        title: titleRef.current.value,
        date : new Date(calendarRef.current.value),
      }
      props.append(newObj);
      setnewTask(false)

    }
  return (
    <div>
        {!newTask && (
            <button className='btn' onClick={newTaskHandler}>+Add New</button>
        )}
        {newTask && (
            <form>
                <input type="text" ref={titleRef} placeholder='Enter you task' />
                <div className="buttons">
                    <button className='btn' onClick={addHandler}>Add Task</button>
                    <button className='btn' onClick={cancelHandler}>Cancel</button>
                    <input type="date" ref={calendarRef} defaultValue="2023-06-01" />
                </div>
            </form>
        )}
        <div>
            <br />
            <h1>List of tasks will be shown here.</h1>
            {props.list.map((listItem)=>{
                return (
                    <div className="box" key={listItem.number}>
                        {listItem.title} {listItem.date.toLocaleDateString()}
                    </div>
                )
            })}
        </div>
    </div>
  )
}
