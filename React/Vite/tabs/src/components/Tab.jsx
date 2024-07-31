import React from 'react'

const Tab = (props) => {
  return (
    
    <div onClick={props.changeTab} style={props.tabStyle} className='border border-1 w-50 p-3  me-3 ' >
      {props.title}
    </div> 
  )
}

export default Tab ; 
