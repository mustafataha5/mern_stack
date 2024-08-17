import { Box } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const GameHeader = (props) => {

    const {gameId} =useParams();
  
  return (
    <div>
         <Box  sx={{border:1 ,m:'10px 30px', p:'10px 25px',color:'#29b1e6'}} >
            <h1 className='text-dark' >Player status - Game{gameId} </h1>  
            <h2 className='text-center'> <Link to="/players/game/1">Game1</Link> | <Link to="/players/game/2">Game2</Link> | <Link to="/players/game/3">Game3</Link> </h2>      
            {props.children}
      </Box>
    </div>
  )
}
export default GameHeader