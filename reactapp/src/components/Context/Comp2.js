import React from 'react'
import Comp3 from './Comp3'

export default function Comp2(props) {
  return (
    <div>
        <Comp3 count={props.cstate} setCount={props.Stateset}/>
    </div>
  )
}
