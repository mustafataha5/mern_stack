import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Location = () => {
    const {city} = useParams() ;
    let id = 1 ; 
  return (
    <div>
      <h1>City Info </h1>  
      <p> City: {city}</p>
      <p> ID : {id}</p>
      <Link to="/"> Go To Home </Link>
    </div>
  )
}

export default Location
