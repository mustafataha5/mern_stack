

import React, { useState } from 'react'
import { NavContext } from '../context/NavContext';

const Wrapper = (props) => {

  const [name,setName] = useState("Bob Smith");
   
  return (
    <NavContext.Provider value={{name,setName}}>
      {props.children}
    </NavContext.Provider>
  )
}

export default Wrapper
