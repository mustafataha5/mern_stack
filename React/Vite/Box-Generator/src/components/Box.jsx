import React from 'react'
import StyledBox from './BoxStyle';




const Box = (props) => {
  return (
        <StyledBox bgColor={props.color} size={props.size}></StyledBox>
  )
}

export default Box;
