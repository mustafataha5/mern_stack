import React from 'react';
 
import StyledBox from './BoxStyle2';
 
const SomeOtherComponent2 = () => (
    <div>
        <StyledBox $bgColor="blue"/>
        <StyledBox $bgColor="red" $height="200px" $minWidth="1200"/>
    </div>
)
 
export default SomeOtherComponent2;