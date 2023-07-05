import React from 'react'

export default function ListRender(props) {
  return (
    <div>
         {props.list.map((item)=>{
        return (
            <div>
                {item.title} {item.date.toLocaleDateString()}
            </div>
        )
      })}
    </div>
  )
}
