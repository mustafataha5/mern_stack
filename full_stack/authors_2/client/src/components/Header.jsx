import { Link } from '@mui/material'
import React from 'react'

const Header = ({url,textUrl,text}) => {
  return (
    <div className=' m-3 d-flex flex-column justify-content-start align-items-start'>
    <Link href={url}>{textUrl}</Link>
      <p className='text-info'>{text}</p>
    </div>
  )
}

export default Header
