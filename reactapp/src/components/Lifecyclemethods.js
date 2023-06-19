import React, { Component } from 'react'

export default class Lifecyclemethods extends Component {
    constructor(){
        super()
        console.log("constructor method called")
        this.state = {
          firstName : "Adfar"
        }
    }
    static getDerivedStateFromProps(){
        console.log("GDSFP is called")
    }
    componentDidMount(){
        console.log("cdm called")
        setTimeout(()=>{
           this.setState({
            firstName:"Subhodeep"
           })
        },3000)
      }
  render() {
    console.log("render called")
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    )
  }
}
