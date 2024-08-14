import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AuthorForm = ({errors,submithandle,intialName,btnText}) => {
    const [value,setValue] = useState(intialName) 
    const navigate = useNavigate() ; 

    const submitHandle = (e)=>{
        e.preventDefault();
        submithandle({name:value}) ; 
        setValue('') ; 
    }
    const backToHome = ()=>{
        navigate('/author')
    }
  return (
    <div>
        {errors && errors.map((error,i)=> <small key={i} className='text-danger'>{error}</small>)}
      <form onSubmit={submitHandle}>
      <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
      <br/>
      <div className='my-3 mx-5'>
        <button className='mx-3 btn btn-warning' onClick={backToHome} >Cancel</button>
        <button className=' btn btn-info' value='submit'> {btnText} </button>
      </div>
      
      </form>
    </div>
  )
}

export default AuthorForm
