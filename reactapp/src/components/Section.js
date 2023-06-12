import React from 'react'
import Fullname from './Fullname'

export default function Section(props) {
  return (
    <div>
        <Fullname fname={props.fname} lname={props.lname}/>
    </div>
  )
}
