import React from 'react'

export default function SideNav(props) {
  return (
    <div>
       <ul className="side-nav">
         <li onClick={()=>{props.change("INBOX")}}>
            <h3>INBOX</h3>
        </li>
         <li onClick={()=>{props.change("TODAY")}}>
            <h3>Today</h3>
        </li>
         <li onClick={()=>{props.change("NEXT")}}>
            <h3>Next 7 Days</h3>
        </li>
       </ul>
    </div>
  )
}
