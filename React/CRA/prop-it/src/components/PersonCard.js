import React from 'react';

function PersonCard(props){

   const { firstName ,lastName ,age ,hairColor} = props ; 
    return(
        <>
            <h1> Name: {firstName} {lastName}</h1>
            <h4> Age: {age} </h4>
            <p> Hair Color : {hairColor}  </p>
        </>
    )
}

export default PersonCard ; 