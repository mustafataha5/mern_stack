import React, { useState } from 'react'
import useList from './useList';
const MyComp = () => {

    const [val,setVal] =useState("");
    const {list,add} = useList(['first','scecond']);
    function handleSubmit(e) {
        e.preventDefault();
        add(val);
        setVal('');
    }

  return (
    <div>
            {
             list.map((item, i) => <p key={i}>{item}</p> )
            }

            <form onSubmit={handleSubmit}>
            <input onChange={e => setVal(e.target.value)} value={val} />
            <button type='submit'>Add</button>

            </form>
      
    </div>
  )
}

export default MyComp
