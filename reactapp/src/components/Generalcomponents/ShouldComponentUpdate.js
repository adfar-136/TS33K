import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
   constructor(props){
    super(props)
    console.log("constructor called")
    this.state={
        firstName: "Adfar",
        day:1
    }
   }
   shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,nextState)
    if(nextState.day >=21){
        return false
    }else {
        return true
    }
   }
   update = ()=>{
    this.setState({
        day:this.state.day+1,
    })
   }
    render() {
        console.log("render called")
    return (
      <div>
        <h1>day :{this.state.day}</h1>
        <button onClick={this.update}>Update</button>
    
      </div>
    )
  }
}
