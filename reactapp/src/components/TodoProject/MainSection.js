import React, {  useState } from 'react'
import Inbox from './Inbox'
import Today from './Today'
import Next7Days from './Next7Days'
const list = [
   {number :1,title:"Lets Complete this",date:new Date("07/01/2023")},
   {number:2,title:"Should sleep at 9PM", date:new Date("05/23/2023")},
   {number:3,title:"Should complete react", date: new Date("07/10/2023")},

]

export default function MainSection(props) {
    const [filteredList,setFilteredlist] = useState(list)
    
    const addToList = (obj)=>{
        list.push(obj)
        setFilteredlist(list)
    }
  return (
    <div className='main-section'>
        {props.active === "INBOX" && (
            <Inbox list={filteredList} append={addToList}/>
        )}
        {props.active === "TODAY" && ( <Today list={filteredList}/>)}
        {props.active === "NEXT" && ( <Next7Days list={filteredList}/>)}
    </div>
  )
}
