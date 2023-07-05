import React from 'react'

export default function Datadisplay({user}) {
  return (
    <div className='user-card'>
        <img src={user.avatar_url} alt="" className='avatar'/>
        <h2>{user.name}</h2>
        <p className='login'>{user.login}</p>
        <p className='bio'>{user.bio}</p>
        <p>
            <strong>Following:</strong> {user.following}
        </p>
        <p>
            <strong>Followers:</strong> {user.followers}
        </p>
        <p>
            <strong>Public Repos:</strong> {user.public_repos}
        </p>
    </div>
  )
}
