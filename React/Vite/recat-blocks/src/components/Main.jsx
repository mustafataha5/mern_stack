
import React from "react";
import styled from './Main.module.css';




function Main(props){
    return (
        <div className={styled.mydiv}>
            {props.children}
        </div>
    );
}

export default Main ; 