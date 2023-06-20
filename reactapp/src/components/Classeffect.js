import React, { Component } from 'react'

export default class Classeffect extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("component did mount invoked")
    }
    componentDidUpdate(){
        console.log("component did update invoked")
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update class state</button>
      </div>
    )
  }
}
