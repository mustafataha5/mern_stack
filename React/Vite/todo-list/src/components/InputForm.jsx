import React from 'react'
import { useState } from 'react'
const InputForm = (props) => {
  
    const [value , setValue] = useState("") ; 

    const addNewTask = (e) =>{
        e.preventDefault(); 
        props.onAdd({task:value,complete:false });
        setValue('') ; 
    } 
   
    return (
    <>
      <form className='d-flex justify-content-center' onSubmit={addNewTask}>
        <div className='d-flex justify-content-between w-30 px-5 py-2 my-5 border border-dark'>
            <input className='' type="text" value={value} onChange={(e) => {setValue(e.target.value)}} />
            <input className='mx-3 btn btn-outline-primary' type="submit" value="Add" />
        </div>
      </form>
    </>
  )
}

export default InputForm

























