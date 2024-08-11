import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthorForm = ({initalName,submitHandle,text,errors}) => {
  
  const [name,setName] = useState(initalName); 
  //const [error,setError] = useState([]); 
  const navigate = useNavigate() ;
  
  
  const backTo =(e)=>{
    e.preventDefault(); 
    navigate(-1) ;
  }

  const submitForm = (e)=>{
    e.preventDefault(); 
    submitHandle({name}) ;
    navigate("/author") ; 
  }

  return (
    <div className='card'>
      <div className='card-body'>
          {errors && errors.map((error,i)=> <p className='text-danger' key={i}>{error}</p>) }
          <form onSubmit={submitForm}>
            <p>Name:</p>
            <div>

            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <button className='my-2 block btn btn-info btn-sm' type="submit"> {text}</button>
            <button className='my-2 mx-2 block btn btn-danger btn-sm' onClick={backTo}> Cancel</button>
          </form>
      </div>
    </div>
  )
}

export default AuthorForm
