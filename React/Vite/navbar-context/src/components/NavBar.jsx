import React, { useContext } from 'react'
import styles from "./css/NavBar.module.css" ; 
import { NavContext } from '../context/NavContext';
const NavBar = () => {
    const nameContext = useContext(NavContext) ; 
  return (
    <div className={styles.nav}> 
        <h1 className={styles.name} >Hi {nameContext.name}</h1>
    </div>
  )
}

export default NavBar;
