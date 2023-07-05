import React from 'react'

export default function RepoForm({repos,page,setPage}) {
  return (
    <div className='repo-list'>
        <h2>Repositories</h2>
        <h1>Select Page</h1>
        <form>
          <input type="text" placeholder='Enter Page Number'
          value={page} onChange={(e)=>setPage(e.target.value)}/>
          <button>Change Page</button>
        </form>
        <ul>
            {repos.map((repo)=> (
                <li key={repo._id}>
                    <a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name}</a>
                </li>
            ))}
        </ul>
        
    </div>
  )
}
