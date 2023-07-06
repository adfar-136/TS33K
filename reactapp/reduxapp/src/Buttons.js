import React from 'react'
import { actionCreators } from './StoreRedux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
export default function Buttons() {
    const dispatch = useDispatch()
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>

        <button onClick={()=>{withdrawMoney(200)}}>-</button>
        <button onClick={()=>{depositMoney(200)}}>+</button>
        <button onClick={()=>{withdrawMoney(2000)}}>-</button>
        <button onClick={()=>{depositMoney(2000)}}>+</button>
        <button onClick={()=>{withdrawMoney(20000)}}>-</button>
        <button onClick={()=>{depositMoney(20000)}}>+</button>
        <button onClick={()=>{withdrawMoney(2000000)}}>-</button>
        <button onClick={()=>{depositMoney(200000)}}>+</button>
       
        
    </div>
  )
}
