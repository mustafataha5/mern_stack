import React from "react";
import { useState } from "react";
import './style.css' ; 

function Square(props) {
   
    return <button className="square" onClick={props.SquareClicked} >{props.value} </button>;
  }

 export default Square ; 