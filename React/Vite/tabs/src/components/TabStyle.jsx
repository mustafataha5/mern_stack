import React from 'react';
import styled from 'styled-components';
 
const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.tabStyle.bgColor || "white"};
    color: ${props => props.tabStyle.color || "black"};
`;
 
export default StyledBox;