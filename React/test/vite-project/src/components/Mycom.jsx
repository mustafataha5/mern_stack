import React from 'react';
    
const Mycom = (props) => {
    return (
        <div>
            <h4> {props.firstName} {props.lastName}</h4>
            This is our first functional component named MyCom.
        </div>
    )
}
    
export default Mycom;