import React  from "react";
import { useState } from 'react';




function MyButton(props){


    // const [count, setCount] = useState(0);
    let {count,onClick} = props ; 


    return (
        <div>
        <p>My count {count}</p>
        <button onClick={onClick}>I'm a button</button>
        </div>
        
    );
}

export default MyButton ;