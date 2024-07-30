import React from 'react';
import styled from 'styled-components';
 
const StyledBox = styled.div`
    border: 1px solid lightgray;
    background: ${props => props.bgColor || 'black'};
    width: ${props => props.width || '200px'};
    height: ${props => props.height || '200px'};
    margin : 5px 6px;
`;
 
export default StyledBox;

