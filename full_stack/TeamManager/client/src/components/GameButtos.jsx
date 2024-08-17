import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GameButtos = ({id,gameId,game ,status,setLoaded}) => {
    const [values,setValues] = useState(status)
    const navigate = useNavigate() ; 
    const filpAll=(index)=>{

    const newValues=values.map((value,i) => {
            if(i===index){
                return !value ; 
            }
            return false
        })
        setValues(newValues);

        axios.patch("http://localhost:8000/api/games/player/"+id+"/"+gameId,{status:newValues})
        .then(res => {console.log(res)
            navigate('/players/game/'+game)
        })
        .catch(err => console.log(err));
        setLoaded(false) ;

    }

    return (
        <div className='d-flex justify-content-evenly'>
            {values[0] ? <button onClick={()=>filpAll(0)}className='btn btn-success'>Playing</button>
                :<button onClick={()=>filpAll(0)} className='btn btn-outline-success'>Playing</button>
                }
            {values[1] ? <button onClick={()=>filpAll(1)} className='btn btn-danger'>Not Playing</button>
                :<button onClick={()=>filpAll(1)} className='btn btn-outline-danger'>Not Playing</button>
                }
            {values[2] ? <button onClick={()=>filpAll(2)} className='btn btn-warning'>Undecided</button>
                :<button onClick={()=>filpAll(2)} className='btn btn-outline-warning'>Undecided</button>
                }        
        </div>
    )
}

export default GameButtos
