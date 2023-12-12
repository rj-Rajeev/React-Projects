import React from 'react'
import './Github.css'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
    const user = useLoaderData()
  return (
    <div className="github">
        <h1>User GitHub Profile</h1>
        <h4>UserName : {user.name}</h4>
        <h4>Followers : {user.followers}</h4>
        <img src={user.avatar_url} alt="" />
        <p>{user.bio} <br/> hey i am {user.name}. </p>
    </div>
  )
}

export default Github

export const GithubInfoLoader = async()=>{
    const Response = await fetch('https://api.github.com/users/rj-Rajeev')
    return Response.json()
}