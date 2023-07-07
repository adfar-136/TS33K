import React, { Component } from 'react'
import {incrementCount,decrementCount} from "./Reduxstore/action"
import { connect } from 'react-redux'
class Counter extends Component {
  render() {
    const {count,incrementCount,decrementCount} = this.props

    return (
      <div>
        <button onClick={()=>decrementCount()}>Decrement</button>
        <h1>{count}</h1>
        <button onClick={()=>incrementCount()}>Increment</button>
      </div>
    )
  }
}

const mapStatetoProps =(state)=>(
    {
        count:state,
    }
)
const mapDispatchToProps = (dispatch) =>(
    {
        decrementCount : ()=>dispatch(decrementCount()),
        incrementCount : ()=>dispatch(incrementCount())
    }
)
export default connect(mapStatetoProps,mapDispatchToProps)(Counter)
