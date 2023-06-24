import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const params = useParams()
    const userId = params.userid
    console.log(userId)
  return (
    <div>
        <h1>Details about {userId}</h1>
    </div>
  )
}
