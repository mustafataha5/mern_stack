import { Link } from '@mui/material'
import React from 'react'

const Header = ({ url, textUrl, text, children }) => {
  return (
    <>
      <div className=' m-3 d-flex flex-column justify-content-start align-items-start'>
        <Link href={url}>{textUrl}</Link>
        <p className='text-info'>{text}</p>

      </div>
      <div className='w-50  m-3  '>
        {children}
      </div>
    </>
  )
}

export default Header
