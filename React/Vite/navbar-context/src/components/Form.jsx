import React, { useContext, useState } from 'react'
import { NavContext } from '../context/NavContext';


const Form = () => {
     const [name , setName] = useState("") ; 
     const [name1 , setName1] = useState("") ; 
    const newName = useContext(NavContext) ; 
    
    const nameHandle = (e)=> {

        e.preventDefault() ; 
        
        console.log("-------"+newName.name) ;
        newName.setName(name) ; 
        setName("") ; 
    }

    const changeName = (e)=> {

        e.preventDefault() ; 
         setName1(e.target.value) ; 
        newName.setName(e.target.value) ; 
        
    }

    return (
    <div>
      <form className='mx-4 d-flex align-content-center border border-2 p-2 w-50' onSubmit={nameHandle} >
            <label className='border border-1 p-1' htmlFor="">Enter Name: </label>
            <input className=' p-2 mx-2 '  type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            <input className='btn btn-primary'  type="submit" value="Change Name" />
      </form>
      <div className='mx-4 d-flex align-content-center border border-2 p-2 w-50'>
      <label className='border border-1 p-1' htmlFor="">Enter Name: </label>
      <input className=' p-2 mx-2 '  type="text" value={name1} onChange={(e)=> changeName(e)} />  
      </div>
    </div>
  )
}

export default Form
