import { Button } from 'bootstrap'
import React, { useState } from 'react'

const StartChat = ({setName}) => {
    const [value,setValue] = useState('')
    const [Error,setError] = useState('')
   const submitHandle = (e) => {
        e.preventDefault() ; 
        let text = '' ; 
        if(value.length<1){
            setError('Name is reqiured'); 
            return ;
        }
        else if (value.length<3){
            setError('Name must be at least 3 charater.'); 
            return ;
        }
        setName(value);
        setError('') ;
        setValue('');
   }      
  return (
    <div className='m-5 p-3 border border-1 border-dark'>
     <h2 className='text-center' >Get started right now !</h2>
     <div className='mx-4 my-5'>
        <h4>I would start chatting with name...</h4>
        <form className='p-5' onSubmit={submitHandle}>
            {Error && <small className='text-danger' >{Error}</small>}
            <br/>
            <input type='text' placeholder='Name' value={value} onChange={(e)=> setValue(e.target.value)}  />
            <button className='mx-3 btn btn-sm btn-success' >Start Chatting</button>
        </form>
     </div>
    </div>
  )
}

export default StartChat
