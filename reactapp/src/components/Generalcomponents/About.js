import React from 'react'
import Section from '../Section'

export default function About(props) {
  return (
    <div>
      I am {props.age} old
      My skills include {props.skills}
      My profile is : 
      <h1>{props.person.name}</h1>
      i am {props.person.age} years old
      i have {props.person.skills[0]}
        <Section fname={props.fname} lname={props.lname}/>
    </div>
  )
}
