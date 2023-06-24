import React, { useState,useEffect } from 'react'
import Newsitem from './Newsitem'

export default function News() {
  const [news,setNews] =useState([])

    let GetNews= async()=>{
      let url =await fetch("https://newsapi.org/v2/everything?q=cricket&from=2023-05-24&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
      let jsonData = await url.json()
      setNews(jsonData.articles)
      console.log(news)
    }
    useEffect(()=>{
      GetNews()
    })
  return (
    <div className='container '>
        <h2>Adfar News Channel</h2>
        <div className="row">
            {news.map((element,index)=>{
             return <div className='col-md-4'>
                  <Newsitem title={element.title} description={element.description} image={element.urlToImage}/>
             </div>
            })} 
        </div>
      
       
    </div>
  )
}
