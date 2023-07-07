import React from 'react'
import { useDispatch } from 'react-redux'
import { setBackground } from './ColorRedux/action'

export default function Button({color}) {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(setBackground(color))}>{color}</button>
    </div>
  )
}
