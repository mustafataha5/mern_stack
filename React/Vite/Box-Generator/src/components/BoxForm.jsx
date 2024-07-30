import React from 'react'
import { useState } from 'react'

const BoxForm = (props) => {
    const [color,setColor] = useState("") ; 

    const createBox = (e) => {
        e.preventDefault() ;
        
        props.makeBox(color); 
        setColor("") ; 
    };
    const clearAllBox = () => {
        props.clearBoxs(); 
    }
  return (
    <div className='d-flex justify-content-center  align-items-center'>
        <form onSubmit={createBox}>
            <label htmlFor="" className='mx-3'>Color: </label>
            <input className='p-2 ' type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
            <input className='btn btn-outline-primary mx-1' type="submit" value="Add" />
        </form>
        <form onSubmit={clearAllBox}>
            <input className='btn btn-outline-danger mx-1' type="submit" value="Clear All" />
        </form>
    </div>
  )
};

export default BoxForm;
