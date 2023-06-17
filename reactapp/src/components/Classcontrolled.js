import React, { Component } from 'react'

export default class Classcontrolled extends Component {
    constructor(){
        super()
        this.state ={
            fname : "",
            lname : ""
        }
    }
 
  render() {
    return (
      <div>
        <form>
            <input type="text" placeholder='Firstname' 
            onChange={(event)=>{this.setState({fname:event.target.value})}}/>
            <input type="text" placeholder='LastName' 
            onChange={(event)=>{this.setState({lname:event.target.value})}} />
            <button type="submit">Submit</button>
        </form>
        <h1>Welcome {this.state.fname} {this.state.lname}</h1>
        {console.log(this.state.fname)}
      </div>
    )
  }
}
