import React from 'react'
import { Box} from '@mui/material'
import { Link } from 'react-router-dom'

const InnerHeadre = (props) => {
  return (
    <div>
       <Box  sx={{border:1 ,m:'10px 30px', p:'10px 25px',color:'#29b1e6'}} >
              <h2> <Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link> </h2>      
            
            {props.children}
      </Box>
    </div>
  )
}

export default InnerHeadre
