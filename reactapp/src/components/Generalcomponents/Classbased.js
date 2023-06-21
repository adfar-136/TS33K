import React, { Component } from 'react'

export default class Classbased extends Component {
  constructor(){
    super() 
    this.state={
        count:0,
        name:"Adfar"
    }
  }
  addOne=()=>{
    this.setState({count:this.state.count+1})
  }
  minusOne=()=>{
    this.setState({count:this.state.count-1})
  }
  render() {
    return (
      <div>
        {/* <button onClick={()=>this.setState({count:this.state.count-1})}>-</button> */}
        <button onClick={this.addOne}>+</button>
        <h1>{this.state.count}</h1>
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>+</button> */}
        <button onClick={this.minusOne}>-</button>

        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Aman"})}>Generate Name</button>
      </div>
    )
  }
}
