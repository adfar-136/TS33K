import React, { Component } from 'react'
const User= (props)=>(
    <div>
        <h1>{props.firstName} </h1>
    </div>
)
export default class StaticGDSFP extends Component {
    constructor(props){
        super()
        this.state={
            firstName : ""
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("get derived state")
        return {firstName:props.fName}
    }
  render() {
    return (
      <div>
        <User firstName={this.state.firstName}/>
        
      </div>
    )
  }
}
