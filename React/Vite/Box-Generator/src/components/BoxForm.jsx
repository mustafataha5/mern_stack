import React from 'react'
import { useState } from 'react'

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [boxSize, setBoxSize] = useState(200);
    const createBox = (e) => {
        e.preventDefault();

        props.makeBox(color,boxSize);
        setColor("");
        setBoxSize(200);
    };
    const clearAllBox = () => {
        e.preventDefault();
        props.clearBoxs();
    }
    return (
        <div className='d-flex justify-content-center  align-items-center'>
            <form onSubmit={createBox}>
                <div>
                    <label htmlFor="" className='mx-3'>Color: </label>
                    <input className='p-2 ' type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div className='my-2'>
                    <label htmlFor="" className='mx-3'>Size: </label>
                    <input className='p-2 ' type="number" min={10} value={boxSize} onChange={(e) => setBoxSize(e.target.value)} />
                </div>
                <div className='d-flex justify-content-center'>
                <input className='btn btn-outline-primary mx-1' type="submit" value="Add" />
                <form onSubmit={clearAllBox}>
                    <input className='btn btn-outline-danger mx-1' type="submit" value="Clear All" />
                </form>
                </div>
               
            </form>

        </div>
    )
};

export default BoxForm;
