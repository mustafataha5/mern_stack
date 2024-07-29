import React from "react";
import { useState } from "react";



function Log(props){

    const [state, setState] = useState({
        items: [],
        totalPrice: 0.00
    });
    setState({ items: state.items, totalPrice: state.totalPrice + 10.99 });
    console.log(state.items);

    return(

        <></>
    ); 
}



export default Log ; 