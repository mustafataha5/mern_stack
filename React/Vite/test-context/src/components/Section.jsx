

import React, { useContext } from 'react'
import { LevelContext } from '../context/LevelContext'

const Section = (props) => {
    const level = useContext(LevelContext)
  return (
     <LevelContext.Provider value={level+1}>
         
      {props.children}
     </LevelContext.Provider>
  )
}

export default Section
