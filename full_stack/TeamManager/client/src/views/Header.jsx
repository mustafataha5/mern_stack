import React from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// import { Route, Routes } from 'react-router-dom';
// import PlayerList from '../components/PlayerList';
// import GameList from '../components/GameList';


const Header = () => {
  return (
    <Box sx={{ display:"flex",my:'10px' ,mx:'20px',color:'#29b1e6' }}>
       <h1>  <Link to="/players/"> Manage Player</Link> | <Link   to='/players/game'> Manage Player Status</Link></h1>     
    </Box>
  )
}

export default Header
