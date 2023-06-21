import React, { Component } from 'react'

export default class FormUncontrolledclass extends Component {
    constructor(props) {
    super()
    this.fname = React.createRef()
    this.lname = React.createRef()
    this.state = {
        condition:false,
    }
    }
    submitHandler=(event)=>{
        event.preventDefault()
        this.setState({condition:true})
        console.log(this.fname.current.value,this.fname.current.placeholder,this.lname.current.value,this.lname.current.placeholder)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <input type="text" placeholder='Firstname' ref={this.fname}/>
            <input type="text" placeholder='Lastname' ref={this.lname}/>

            <button type='submit'>Submit</button>
        </form>
        <h1>{this.state.condition?(<h1>Welcome {this.fname.current.value} {this.lname.current.value}</h1>):"Pehlay submit karo"}</h1>

      </div>
    )
  }
}
