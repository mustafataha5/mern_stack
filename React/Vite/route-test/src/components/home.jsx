import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p style={{color:'red'}}> This is Home page</p>
      <Link to='/about'>Go To About</Link>
     
    </div>
  )
}

export default Home
