import React from 'react'
import styled from './css/TabBody.module.css' ; 
const TabBody = (props) => {
  return (
    <div className={styled.tabBody}>
      <pre className='p-3'>{props.data}</pre>
    </div>
  )
}

export default TabBody
