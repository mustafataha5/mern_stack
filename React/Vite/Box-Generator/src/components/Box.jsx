import React from 'react'
import StyledBox from './BoxStyle';




const Box = (props) => {
  return (
        <StyledBox bgColor={props.color}></StyledBox>
  )
}

export default Box;
