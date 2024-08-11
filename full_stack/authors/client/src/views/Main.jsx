import React from 'react'
import { Link } from 'react-router-dom'

const Main = ({linkto,linktext,text,children}) => {
  return (
    <div className='m-4'>
      <h1>Favorties Authors:</h1>
      <div className='mx-4'>
        <Link to={linkto}>{linktext}</Link>
        <p className='my-3 text-info' >{text}</p>
      </div>
        <div className='w-50'>
            {children}
        </div>
    </div>
  )
}

export default Main
