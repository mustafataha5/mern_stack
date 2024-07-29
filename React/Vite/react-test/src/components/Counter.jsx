import React from "react";
import { useState } from "react";

function Counter(props){

    let [state,setState] = useState({ clickcount:0}) ; 
   
    const handel = ()=>{ setState({ clickcount: state.clickcount+1});}
    return (
        <div>
            <p>count: {state.clickcount}</p>
            <button onClick={handel}>Click Here</button>
        </div>
    );


}


export default Counter ; 



