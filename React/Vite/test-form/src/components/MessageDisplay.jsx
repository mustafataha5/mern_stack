import React from "react";
import { useState } from "react";

function MessageDisplay(props){

    return (
        <>
         <h1>Current Message</h1>
         <pre>{ props.message }</pre>
        </>
    ); 
}


export default MessageDisplay ; 

