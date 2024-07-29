import userEvent from '@testing-library/user-event';
import React from 'react';
import { useState } from 'react';

function PersonCard(props){
    const { firstName ,lastName ,age ,hairColor} = props ; 
   const [birth,setBirth] = useState(age) ; 
   
   
   const handel = () =>{
        setBirth(birth+1) ; 
   }
  
    return(
        <>
            <h1> Name: {firstName} {lastName}</h1>
            <h4> Age: {birth} </h4>
            <p> Hair Color : {hairColor}  </p>
            <button onClick={handel}></button>
        </>
    )
}

export default PersonCard ; 