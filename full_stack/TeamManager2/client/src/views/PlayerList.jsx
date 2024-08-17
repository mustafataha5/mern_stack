import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PlayerTable from '../components/PlayerTable'
import axios from 'axios'

const PlayerList = ({bold,players,setPlayers}) => {

  const nagivate = useNavigate() ; 

  const playerDelete =(id) =>{
   // console.log("Success to delete player with id:"+id)
    axios.delete("http://localhost:8000/api/players/"+id)
    .then(res => {
      console.log("Success to delete player with id:"+id)
      setPlayers(players.filter(player => player._id!==id)) ; 
      nagivate('/players/list');
    })
    .catch(err => console.log(err)) ; 

  }
  return (
    
    <div className=' border border-dark mx-3 my-3 w-75 d-flex flex-column aligns-items-center'>

    <div className='d-flex mx-3 my-2 p-4 justify-content-start'>
       <h3><Link className={bold[0] ? 'fw-bold' : ''} to="/players/list">List</Link>  </h3> 
      <h3 className='mx-2'>|</h3>
      <h3>
      <Link className={bold[1] ? 'fw-bold' : ''} to="/players/add"> Add Player </Link> 
      </h3>
    </div>
      
      <div className='m-5'>
        <PlayerTable players={players} playerDelete={playerDelete}/>
      </div>
    </div>
  )
}

export default PlayerList
