import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    if(this.state.count === 5){
        throw new Error("Crash Hogaya")
    }
    return (
      <div>
         <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    )
  }
}
