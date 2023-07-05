import React, { useState } from 'react'

export default function SearchForm({fetchData}) {
    const [username,setUsername] = useState("")
    const handleSubmit = (e)=>{
      e.preventDefault()
      fetchData(username)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='search-form'>
            <input type="text" 
            placeholder='Enter a GitHub username'
            value={username}
            onChange={(event)=>setUsername(event.target.value)}
             />
             <button type='submit'>Search</button>
        </form>
    </div>
  )
}
