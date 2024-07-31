import React from 'react'
import { useState } from 'react'
const InputForm = (props) => {
  
    const [value , setValue] = useState("") ; 

  
  
    return (
    <>
      <form >
        <div className='d-flex justify-content-center my-5 rounded round-1'>
            <input className='' type="text" value={value} onChange={(e) => {setValue(e.target.value)}} />
            <input className='mx-3 btn btn-outline-primary' type="submit" value="Add" />
        </div>
      </form>
    </>
  )
}

export default InputForm

























