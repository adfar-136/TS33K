import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newsclass extends Component {
    constructor(){
        super()
        this.state={
            news:[]
        }
    }
    async componentDidMount(){
        let url =await fetch("https://newsapi.org/v2/everything?q=cricket&from=2023-05-24&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
        let jsonData = await url.json()
        this.setState({news:jsonData.articles})  
        console.log(this.state.news)  

    }
  render() {
    return (
    <div className='container '>
        <h2>Adfar News Channel</h2>
        <div className="row">
            {this.state.news.map((element,index)=>{
             return <div key={index} className='col-md-4'>
                  <Newsitem title={element.title.slice(0,23)} description={element.description.slice(0,30)} image={element.urlToImage}/>
             </div>
            })} 
        </div>
        </div>
      
    )
  }
}
