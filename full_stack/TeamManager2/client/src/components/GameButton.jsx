import axios from 'axios';
import React, { useState } from 'react'


const GameButton = ({status,changeStatus,id}) => {
    const [values,setValues] = useState(status)
    const filpAll=(index)=>{

    const newValues=values.map((value,i) => {
            if(i===index){
                return !value ; 
            }
            return false
        })
        setValues(newValues);
        changeStatus(newValues,id) ;  

    }
    return (
        <div className='d-flex justify-content-evenly'>
            {values[0] ? <button onClick={() => filpAll(0)} className='btn btn-success'>Playing</button>
                : <button onClick={() => filpAll(0)} className='btn btn-outline-success'>Playing</button>
            }
            {values[1] ? <button onClick={() => filpAll(1)} className='btn btn-danger'>Not Playing</button>
                : <button onClick={() => filpAll(1)} className='btn btn-outline-danger'>Not Playing</button>
            }
            {values[2] ? <button onClick={() => filpAll(2)} className='btn btn-warning'>Undecided</button>
                : <button onClick={() => filpAll(2)} className='btn btn-outline-warning'>Undecided</button>
            }
        </div>
    )
}

export default GameButton
