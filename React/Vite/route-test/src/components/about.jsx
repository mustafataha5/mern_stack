import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <p style={{color:'green'}}> This is About Page</p>
      <Link to='/'>To Home</Link>
    </div>
  )
}

export default About
